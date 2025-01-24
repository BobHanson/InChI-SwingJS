#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include "inchi_api.h"
#include <emscripten.h>


/*
 * Note on the use of malloc():
 *
 * There are no NULL checks for the results of malloc calls because we are compiling with
 * ABORTING_MALLOC=1 (default setting). Tests should make sure that turning ALLOW_MEMORY_GROWTH
 * on is not required.
 * See https://github.com/emscripten-core/emscripten/blob/fa339b76424ca9fbe5cf15faea0295d2ac8d58cc/src/settings.js#L131
 *
 * What happens when malloc aborts? We can catch a JS exception.
 * See https://github.com/emscripten-core/emscripten/issues/9715
 */

/*
 * InChI from Molfile
 * ------------------
 */

/*
 * Safe way to serialize to JSON.
 * See https://livebook.manning.com/book/webassembly-in-action/c-emscripten-macros/v-7/67
 */
EM_JS(char*, to_json_inchi, (int return_code, char *inchi, char *auxinfo, char *message, char *log), {
  const json = JSON.stringify({
    "return_code": return_code,
    "inchi": Module.UTF8ToString(inchi),
    "auxinfo": Module.UTF8ToString(auxinfo),
    "message": Module.UTF8ToString(message),
    "log": Module.UTF8ToString(log)
  });

  const byteCount = Module.lengthBytesUTF8(json) + 1;
  const jsonPtr = Module._malloc(byteCount);
  Module.stringToUTF8(json, jsonPtr, byteCount);

  return jsonPtr;
});

char* inchi_from_molfile(char *molfile, char *options) {
  int ret;
  inchi_Output *output;
  char *json;

  output = malloc(sizeof(*output));
  memset(output, 0, sizeof(*output));

  ret = MakeINCHIFromMolfileText(molfile, options, output);

  switch(ret) {
    case mol2inchi_Ret_OKAY: {
      json = to_json_inchi(0, output->szInChI, output->szAuxInfo, "", "");
      break;
    }
    case mol2inchi_Ret_WARNING: {
      json = to_json_inchi(1, output->szInChI, output->szAuxInfo, output->szMessage, output->szLog);
      break;
    }
    case mol2inchi_Ret_EOF:
    case mol2inchi_Ret_ERROR:
    case mol2inchi_Ret_ERROR_get:
    case mol2inchi_Ret_ERROR_comp: {
      json = to_json_inchi(-1, "", "", output->szMessage, output->szLog);
      break;
    }
    default: {
      json = to_json_inchi(-1, "", "", "", "MakeINCHIFromMolfileText: Unknown return code");
    }
  }

  FreeINCHI(output);
  free(output);

  // Caller should free this.
  return json;
}

/*
 * InChIKey from InChI
 * -------------------
 */
EM_JS(char*, to_json_inchikey, (int return_code, char *inchikey, char *message), {
  const json = JSON.stringify({
    "return_code": return_code,
    "inchikey": Module.UTF8ToString(inchikey),
    "message": Module.UTF8ToString(message)
  });

  const byteCount = Module.lengthBytesUTF8(json) + 1;
  const jsonPtr = Module._malloc(byteCount);
  Module.stringToUTF8(json, jsonPtr, byteCount);

  return jsonPtr;
});

char* inchikey_from_inchi(char* inchi) {
  int ret;
  char szINCHIKey[28], szXtra1[65], szXtra2[65];
  char *json;

  ret = GetINCHIKeyFromINCHI(inchi, 0, 0, szINCHIKey, szXtra1, szXtra2);

  switch(ret) {
    case INCHIKEY_OK: {
      json = to_json_inchikey(0, szINCHIKey, "");
      break;
    }
    case INCHIKEY_UNKNOWN_ERROR: {
      json = to_json_inchikey(-1, "", "GetINCHIKeyFromINCHI: Unknown program error");
      break;
    }
    case INCHIKEY_EMPTY_INPUT: {
      json = to_json_inchikey(-1, "", "GetINCHIKeyFromINCHI: Source string is empty");
      break;
    }
    case INCHIKEY_INVALID_INCHI_PREFIX: {
      json = to_json_inchikey(-1, "", "GetINCHIKeyFromINCHI: Invalid InChI prefix or invalid version (not 1)");
      break;
    }
    case INCHIKEY_NOT_ENOUGH_MEMORY: {
      json = to_json_inchikey(-1, "", "GetINCHIKeyFromINCHI: Not enough memory");
      break;
    }
    case INCHIKEY_INVALID_INCHI: {
      json = to_json_inchikey(-1, "", "GetINCHIKeyFromINCHI: Source InChI has invalid layout");
      break;
    }
    case INCHIKEY_INVALID_STD_INCHI: {
      json = to_json_inchikey(-1, "", "GetINCHIKeyFromINCHI: Source standard InChI has invalid layout");
      break;
    }
    default: {
      json = to_json_inchikey(-1, "", "GetINCHIKeyFromINCHI: Unknown return code");
    }
  }

  // Caller should free this.
  return json;
}

/*
 * Molfile from InChI
 * ------------------
 */
EM_JS(char*, to_json_molfile, (int return_code, char *molfile, char *message, char *log), {
  const json = JSON.stringify({
    "return_code": return_code,
    "molfile": Module.UTF8ToString(molfile),
    "message": Module.UTF8ToString(message),
    "log": Module.UTF8ToString(log)
  });

  const byteCount = Module.lengthBytesUTF8(json) + 1;
  const jsonPtr = Module._malloc(byteCount);
  Module.stringToUTF8(json, jsonPtr, byteCount);

  return jsonPtr;
});

/*
 * Copies data fields from an inchi_OutputStructEx struct to a new inchi_InputEx struct.
 */
inchi_InputEx inchi_OutputStructEx_to_inchi_InputEx(inchi_OutputStructEx* out) {
  inchi_InputEx result;

  result.atom = out->atom;
  result.stereo0D = out->stereo0D;
  result.num_atoms = out->num_atoms;
  result.num_stereo0D = out->num_stereo0D;
  result.polymer = out->polymer;
  result.v3000 = out->v3000;

  return result;
}

char* molfile_from_inchi(char* inchi, char* options) {
  int ret;
  inchi_InputINCHI input;
  inchi_OutputStructEx *output;
  char *json;

  input.szInChI = inchi;
  input.szOptions = options;

  output = malloc(sizeof(*output));
  memset(output, 0, sizeof(*output));

  ret = GetStructFromINCHIEx(&input, output);

  switch(ret) {
    case inchi_Ret_OKAY: {
      inchi_InputEx inputEx = inchi_OutputStructEx_to_inchi_InputEx(output);
      inputEx.szOptions = "-OutputSDF";
      inchi_Output outputEx;

      // TODO: Handle return value of this API call.
      GetINCHIEx(&inputEx, &outputEx);

      json = to_json_molfile(0, outputEx.szInChI, "", "");
      FreeINCHI(&outputEx);

      break;
    }
    case inchi_Ret_WARNING: {
      inchi_InputEx inputEx = inchi_OutputStructEx_to_inchi_InputEx(output);
      inputEx.szOptions = "-OutputSDF";
      inchi_Output outputEx;

      // TODO: Handle return value of this API call.
      GetINCHIEx(&inputEx, &outputEx);

      json = to_json_molfile(1, outputEx.szInChI, output->szMessage, output->szLog);
      FreeINCHI(&outputEx);

      break;
    }
    case inchi_Ret_ERROR:
    case inchi_Ret_FATAL:
    case inchi_Ret_UNKNOWN:
    case inchi_Ret_BUSY:
    case inchi_Ret_EOF:
    case inchi_Ret_SKIP: {
      json = to_json_molfile(-1, "", output->szMessage, output->szLog);
      break;
    }
    default:
      json = to_json_molfile(-1, "", "", "GetStructFromINCHIEx: Unknown return code");
  }

  FreeStructFromINCHIEx(output);
  free(output);

  // Caller should free this.
  return json;
}

/*
 * Molfile from AuxInfo
 * --------------------
 */
char* molfile_from_auxinfo(char* auxinfo, int bDoNotAddH, int bDiffUnkUndfStereo) {
  int ret;
  InchiInpData *output;
  inchi_Input *pInp;
  char *json;

  output = malloc(sizeof(*output));
  memset(output, 0, sizeof(*output));
  pInp = malloc(sizeof(*pInp));
  memset(pInp, 0, sizeof(*pInp));

  output->pInp = pInp;

  ret = Get_inchi_Input_FromAuxInfo(auxinfo, bDoNotAddH, bDiffUnkUndfStereo, output);

  /*
   * Handling of the MDL chiral flag, see
   * https://github.com/IUPAC-InChI/RInChI/blob/0e14efe8ca7509262fe7b7aecd8c900ef00ffd9f/src/lib/inchi_generator.cpp#L316-L347
   */
  int output_chiral_flag = output->bChiral;
  char *options;
  switch(output_chiral_flag) {
    case 1: {
      options = "-OutputSDF -SUCF -ChiralFlagON";
      break;
    }
    case 2: {
      options = "-OutputSDF -SUCF -ChiralFlagOFF";
      break;
    }
    default:
      options = "-OutputSDF";
  }

  switch(ret) {
    case inchi_Ret_OKAY: {
      pInp->szOptions = options;
      inchi_Output inchi_output;

      // TODO: Handle return value of this API call.
      GetINCHI(pInp, &inchi_output);

      json = to_json_molfile(0, inchi_output.szInChI, "", "");
      FreeINCHI(&inchi_output);

      break;
    }
    case inchi_Ret_WARNING: {
      pInp->szOptions = options;
      inchi_Output inchi_output;

      // TODO: Handle return value of this API call.
      GetINCHI(pInp, &inchi_output);

      json = to_json_molfile(1, inchi_output.szInChI, output->szErrMsg, "");
      FreeINCHI(&inchi_output);

      break;
    }
    case inchi_Ret_ERROR:
    case inchi_Ret_FATAL:
    case inchi_Ret_UNKNOWN:
    case inchi_Ret_BUSY:
    case inchi_Ret_EOF:
    case inchi_Ret_SKIP: {
      json = to_json_molfile(-1, "", output->szErrMsg, "");
      break;
    }
    default:
      json = to_json_molfile(-1, "", "", "Get_inchi_Input_FromAuxInfo: Unknown return code");
  }

  Free_inchi_Input(pInp);
  free(output);
  free(pInp);

  // Caller should free this.
  return json;
}




//from JniInchiWrapper.c:

/* === INCHI to STRUCTURE === */

//JNIEXPORT jobject JNICALL Java_net_sf_jniinchi_JniInchiWrapper_GetStructFromINCHI
// (JNIEnv *env, jobject obj, jstring inchi, jstring options) {
//
// int i, j, ret;
// inchi_InputINCHI inchi_inp;
// inchi_OutputStruct inchi_out;
// jobject output;
// int numatoms, numstereo;
//
// #ifdef DEBUG
// fprintf(stderr, "__GetStructFromINCHI()\n");
// #endif
//
// initInchiInputINCHI(env, &inchi_inp, inchi, options);
//
// ret = GetStructFromINCHI(&inchi_inp, &inchi_out);
//
// output = (*env)->NewObject(env, jniInchiOutputStructure, initJniInchiOutputStructure,
//         ret,
//         (*env)->NewStringUTF(env, inchi_out.szMessage),
//         (*env)->NewStringUTF(env, inchi_out.szLog),
//         inchi_out.WarningFlags[0][0],
//         inchi_out.WarningFlags[0][1],
//         inchi_out.WarningFlags[1][0],
//         inchi_out.WarningFlags[1][1]);
//
// numatoms = inchi_out.num_atoms;
// numstereo = inchi_out.num_stereo0D;
//
// createAtoms(env, numatoms, inchi_out.atom, output);
// createBonds(env, numatoms, inchi_out.atom, output);
// createStereos(env, numstereo, inchi_out.stereo0D, output);
//
// FreeStructFromINCHI(&inchi_out);
// free(inchi_inp.szInChI);
// free(inchi_inp.szOptions);
//
// #ifdef DEBUG
// fprintf(stderr, "__GetStructFromINCHI__\n");
// #endif
//
// return output;
//}

//MODEL FROM INCHI -- BH SwingJS

/*
* Safe way to serialize to JSON.
* See https://livebook.manning.com/book/webassembly-in-action/c-emscripten-macros/v-7/67
*/
EM_JS(char*, to_json_model, (int return_code, char *model, char *message, char *log), {
	const json = JSON.stringify({
	 "return_code": return_code,
	 "model": Module.UTF8ToString(model),
	 "message": Module.UTF8ToString(message),
	 "log": Module.UTF8ToString(log)
	});
	const byteCount = Module.lengthBytesUTF8(json) + 1;
	const jsonPtr = Module._malloc(byteCount);
	Module.stringToUTF8(json, jsonPtr, byteCount);
	return jsonPtr;
});

void strRadical(char* buf, S_CHAR radical) {
	strcat(buf, "\"radical\":\"");
	switch (radical) {
	default:
	case INCHI_RADICAL_NONE:
		strcat(buf, "NONE");
		break;
	case INCHI_RADICAL_SINGLET:
		strcat(buf, "SINGLET");
		break;
	case INCHI_RADICAL_DOUBLET:
		strcat(buf, "DOUBLET");
		break;
	case INCHI_RADICAL_TRIPLET:
		strcat(buf, "TRIPLET");
		break;
	}
	strcat(buf, "\"");
}

void addJSONAtoms(char* s, int numatoms, inchi_Atom atoms[]) {
	  strcat(s, "\"atoms\":[");
	  int i;
	  for (i = 0; i < numatoms; i++) {
	    inchi_Atom iatom = atoms[i];
	    char *elem = iatom.elname;
	    int charge = iatom.charge;
	    int implicitH = iatom.num_iso_H[0];
	    int implicitP = iatom.num_iso_H[1];
	    int implicitD = iatom.num_iso_H[2];
	    int implicitT = iatom.num_iso_H[3];
	    int isotopicMass = iatom.isotopic_mass;
		if (i > 0)
			strcat(s, ",");
		sprintf(s + strlen(s), "{\"elname\":\"%s\"", elem);
		if (charge != 0) {
			sprintf(s + strlen(s), ",\"charge\":%d", charge);
		}
		if (iatom.radical != INCHI_RADICAL_NONE) {
			strcat(s, ",");
			strRadical(s, iatom.radical);
		}
		if (implicitH != 0) {
			sprintf(s + strlen(s), ",\"implicitH\":%d", implicitH);
		}
		if (implicitP != 0) {
			sprintf(s + strlen(s), ",\"implicitProtium\":%d", implicitP);
		}
		if (implicitD != 0) {
			sprintf(s + strlen(s), ",\"implicitDeuterium\":%d", implicitD);
		}
		if (implicitT != 0) {
			sprintf(s + strlen(s), ",\"implicitTritium\":%d", implicitT);
		}
		if (isotopicMass != 0) {
			sprintf(s + strlen(s), ",\"isotopicMass\":%d", isotopicMass);
		}
		strcat(s, "}");
	  }
	  strcat(s, "]");
}

void strBondType(char* buf, S_CHAR type) {
	strcat(buf, "\"type\":\"");
	switch (type) {
	case INCHI_BOND_TYPE_NONE:
		strcat(buf, "NONE");
		break;
	default:
	case INCHI_BOND_TYPE_SINGLE:
		strcat(buf, "SINGLE");
		break;
	case INCHI_BOND_TYPE_DOUBLE:
		strcat(buf, "DOUBLE");
		break;
	case INCHI_BOND_TYPE_TRIPLE:
		strcat(buf, "TRIPLE");
		break;
	case INCHI_BOND_TYPE_ALTERN:
		strcat(buf, "ALTERN");
		break;
	}
	strcat(buf, "\"");
}

void strBondStereo(char* buf, S_CHAR stereo) {
	strcat(buf, "\"stereo\":\"");
	switch (stereo) {
	default:
	case INCHI_BOND_STEREO_NONE:
		strcat(buf, "NONE");
		break;
	case INCHI_BOND_STEREO_SINGLE_1UP:
		strcat(buf, "SINGLE_1UP");
		break;
	case INCHI_BOND_STEREO_SINGLE_1EITHER:
		strcat(buf, "SINGLE_1EITHER");
		break;
	case INCHI_BOND_STEREO_SINGLE_1DOWN:
		strcat(buf, "SINGLE_1DOWN");
		break;
	case INCHI_BOND_STEREO_SINGLE_2UP:
		strcat(buf, "SINGLE_2UP");
		break;
	case INCHI_BOND_STEREO_SINGLE_2EITHER:
		strcat(buf, "SINGLE_2EITHER");
		break;
	case INCHI_BOND_STEREO_SINGLE_2DOWN:
		strcat(buf, "SINGLE_2DOWN");
		break;
	case INCHI_BOND_STEREO_DOUBLE_EITHER:
		strcat(buf, "DOUBLE_EITHER");
		break;
	}
	strcat(buf, "\"");
}

void addJSONBonds(char* s, int numatoms, inchi_Atom atoms[]) {
	  strcat(s, ",\"bonds\":[");
	  int i, j, n;
	  n = 0;
	  for (i = 0; i < numatoms; i++) {
	    inchi_Atom iatom = atoms[i];
	    int numbonds = iatom.num_bonds;

	    if (numbonds > 0) {
	      for (j = 0; j < numbonds; j++) {
	        /* Bonds get recorded twice, so only pick one direction... */
	    	int k = iatom.neighbor[j]; 
	        if (k < i) {
	        	if (n > 0)
	        		strcat(s, ",");
	        	n++;
	        	sprintf(s + strlen(s), "{\"originAtom\":%d,\"targetAtom\":%d,", i, k);
	        	strBondType(s, iatom.bond_type[j]); // NONE??
	        	if (iatom.bond_stereo[j] != INCHI_BOND_TYPE_NONE) {
		        	strcat(s, ",");
	        		strBondStereo(s, iatom.bond_stereo[j]);
	        	}
	        	strcat(s, "}");
	        }
	      }
	    }
	  }
	  strcat(s, "]");
}

void strStereoType(char* buf, S_CHAR type) {
	strcat(buf, "\"stereoType\":\"");
	switch (type) {
	default:
	case INCHI_StereoType_None:
		strcat(buf, "NONE");
		break;
	case INCHI_StereoType_DoubleBond:
		strcat(buf, "DOUBLEBOND");
		break;
	case INCHI_StereoType_Tetrahedral:
		strcat(buf, "TETRAHEDRAL");
		break;
	case INCHI_StereoType_Allene:
		strcat(buf, "ALLENE");
		break;
	}
	strcat(buf, "\"");
}

void strParity(char* buf, S_CHAR parity) {
	strcat(buf, "\"parity\":\"");
	switch (parity) {
	default:
	case INCHI_PARITY_NONE:
		strcat(buf, "NONE");
		break;
	case INCHI_PARITY_ODD:
		strcat(buf, "ODD");
		break;
	case INCHI_PARITY_EVEN:
		strcat(buf, "EVEN");
		break;
	case INCHI_PARITY_UNKNOWN:
		strcat(buf, "UNKNOWN");
		break;
	case INCHI_PARITY_UNDEFINED:
		strcat(buf, "UNDEFINED");
		break;
	}
	strcat(buf, "\"");
}

void addJSONStereos(char* s, int numstereo, inchi_Stereo0D stereos[]) {
	  strcat(s, ",\"stereo0d\":[");
	  int i;
	  for (i = 0; i < numstereo; i++) {
		if (i > 0)
			strcat(s, ",");
		strcat (s, "{");
	    inchi_Stereo0D istereo = stereos[i];
	    if (istereo.central_atom != NO_ATOM) {
	    	sprintf(s + strlen(s), "\"centralAtom\":%d,",istereo.central_atom);
	    }
    	sprintf(s + strlen(s), "\"neighbors\":[%d,%d,%d,%d]", istereo.neighbor[0], istereo.neighbor[1], istereo.neighbor[2], istereo.neighbor[3]);
    	strcat(s, ",");
    	strStereoType(s, istereo.type);
    	strcat(s, ",");
    	strParity(s, istereo.parity);
    	strcat(s, "}");
	  }
	  strcat(s, "]");
}

void getModelJSON(inchi_OutputStructEx *inchi_out, char* json) {

	int i, j, ret;
	strcat(json,"{");
	int numatoms, numstereo;
	numatoms = inchi_out->num_atoms;
	numstereo = inchi_out->num_stereo0D;
	addJSONAtoms(json, numatoms, inchi_out->atom);
	addJSONBonds(json, numatoms, inchi_out->atom);
	addJSONStereos(json, numstereo, inchi_out->stereo0D);
	strcat(json, "}");
}
	
char* model_from_inchi(char* inchi, char* options) {
	int ret;
	inchi_InputINCHI input;
	inchi_OutputStructEx *output;
	char *json;
	
	input.szInChI = inchi;
	input.szOptions = options;
	
	output = malloc(sizeof(*output));
	memset(output, 0, sizeof(*output));
	
	ret = GetStructFromINCHIEx(&input, output);
	
	switch(ret) {
	 case inchi_Ret_OKAY:
	 case inchi_Ret_WARNING: {
	   char *szMsg = (ret == inchi_Ret_WARNING ? output->szMessage : "");
	   char *szLog = (ret == inchi_Ret_WARNING ? output->szLog : "");
		int numatoms, numstereo;
		numatoms = output->num_atoms;
		numstereo = output->num_stereo0D;
		char buf[numatoms*160 + numatoms*40 + numstereo];

	   getModelJSON(output, buf);
	   json = to_json_model(0, buf, szMsg, szLog);
	   break;
	 }
	 case inchi_Ret_ERROR:
	 case inchi_Ret_FATAL:
	 case inchi_Ret_UNKNOWN:
	 case inchi_Ret_BUSY:
	 case inchi_Ret_EOF:
	 case inchi_Ret_SKIP: {
	   json = to_json_molfile(-1, "", output->szMessage, output->szLog);
	   break;
	 }
	 default:
	   json = to_json_molfile(-1, "", "", "GetStructFromINCHIEx: Unknown return code");
	}

	  //Free_inchi_Input(input);
	  FreeStructFromINCHIEx(output);
	  free(output);
	
	  return json;
}
