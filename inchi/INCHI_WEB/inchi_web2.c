#include <stdlib.h>
#include <string.h>
#include "inchi_api.h"
#include <emscripten.h>


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


void createAtoms(int numatoms, inchi_Atom atoms[], char *s) {
	  strcat(s, "\"atoms\":[")
	  int i;
	  for (i = 0; i < numatoms; i++) {
	    inchi_Atom iatom = atoms[i];
	    char *elem = iatom.elname;
	    int charge = iatom.charge;
	    int radical = iatom.radical;
	    int implicitH = iatom.num_iso_H[0];
	    int implicitProtium = iatom.num_iso_H[1];
	    int implicitDeuterium = iatom.num_iso_H[2];
	    int implicitTritium = iatom.num_iso_H[3];
	    int isotopicMass = iatom.isotopic_mass;
		if (i > 0)
			strcat(s, ",");
		sprintf(s, "{\"element\":\"%s\"");
		if (charge != 0) {
			sprintf(s, ",\"charge\":"%d", charge);
		}
		if (radical != 0) {
			sprintf(s, ",\"radical\":"%d", radical);
		}
		if (implicitH != 0) {
			sprintf(s, ",\"implicitH\":"%d", implicitH);
		}
		if (implicitP != 0) {
			sprintf(s, ",\"implicitProtium\":"%d", implicitProtium);
		}
		if (implicitD != 0) {
			sprintf(s, ",\"implicitDeuterium\":"%d", implicitDeuterium);
		}
		if (implicitT != 0) {
			sprintf(s, ",\"implicitTritium\":"%d", implicitTritium);
		}
		if (isotopicMass != 0) {
			sprintf(s, ",\"isotopicMass\":"%d", isotopicMass);
		}
		strcat(s, "}");
	  }
	  strcat(s, "]");
}

void createBonds(int numatoms, inchi_Atom atoms[], char* s) {
	  strcat(s, ",\"bonds\":[")
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
	        	sprintf(s, "[%d,%d,%d,%d]", i, k, iatom.bond_type[j], iatom.bond_stereo[j]);
	        }
	      }
	    }
	  }
	  strcat(s, "]");
}


void createStereos(int numstereo, inchi_Stereo0D stereos[], char* s) {
	  strcat(s, ",\"stereo0d\":[")
	  int i;
	  for (i = 0; i < numstereo; i++) {
		if (i > 0)
			strcat(s, ",");
		strcat (s, "{");
	    jobject atC, an0, an1, an2, an3, stereo;
	    inchi_Stereo0D istereo = stereos[i];
	    if (istereo.central_atom != NO_ATOM) {
	    	sprintf(s, "\"centralAtom\":%d,",istereo.central_atom);
	    }
    	sprintf(s, "\"neighbors\":[%d,%d,%d,%d],", istereo.neighbor[0], istereo.neighbor[1], istereo.neighbor[2], istereo.neighbor[3]);
    	sprintf(s, "\"type\":%d,", istereo.type);
    	sprintf(s, "\"parity\":%d}",istereo.parity);
	  }
	  strcat(s, "]");
}

char* getModelJSON(inchi_OutputStruct inchi_out) {

	int i, j, ret;
	int numatoms, numstereo;
	numatoms = inchi_out.num_atoms;
	numstereo = inchi_out.num_stereo0D;
	char json[numatoms*160 + numatoms*40 + numstereo];
	strcat(json,"{");
	createAtoms(numatoms, inchi_out.atom, json);
	createBonds(numatoms, inchi_out.atom, json);
	createStereos(numstereo, inchi_out.stereo0D, output);
	strcat(json, "}");
	return json;
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
	   char *szMsg = (ret == inchi_Ret_WARNING ? output->szMessage, "");
	   char *szLog = (ret == inchi_Ret_WARNING ? output->szLog, "");
	   char *szJSON = getModelJSON(output);
	   json = to_json_model(0, szJSON, szMsg, szLog);
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

	  Free_inchi_Input(input);
	  FreeStructFromINCHIEx(output);
	  free(output);
	
	  return json;
}

///* sizes definitions */
//#define MAXVAL                   20 /* max number of bonds per atom                 */
//#define ATOM_EL_LEN               6 /* length of ASCIIZ element symbol field        */
//#define NUM_H_ISOTOPES            3 /* number of hydrogen isotopes: protium, D, T   */
//#define ISOTOPIC_SHIFT_FLAG   10000 /* add to isotopic mass if isotopic_mass =      */
//                               /* (isotopic mass - average atomic mass)        */
//#define ISOTOPIC_SHIFT_MAX      100 /* max abs(isotopic mass - average atomic mass) */
//
//#ifndef INCHI_US_CHAR_DEF
//typedef signed char   S_CHAR;
//typedef unsigned char U_CHAR;
//#define INCHI_US_CHAR_DEF
//#endif
//typedef  S_SHORT AT_NUM;        /* atom number; starts from 0 */

//typedef struct tagInchiAtom {
///* atom coordinates */
//double x;
//double y;
//double z;
///* connectivity */
//AT_NUM  neighbor[MAXVAL];     /* adjacency list: ordering numbers of */
//                             /*            the adjacent atoms, >= 0 */
//S_CHAR  bond_type[MAXVAL];    /* inchi_BondType */
///* 2D stereo */
//S_CHAR  bond_stereo[MAXVAL];  /* inchi_BondStereo2D; negative if the */
//                             /* sharp end points to opposite atom */
///* other atom properties */
//char    elname[ATOM_EL_LEN];  /* zero-terminated chemical element name:*/
//                             /* "H", "Si", etc. */
//AT_NUM  num_bonds;            /* number of neighbors, bond types and bond*/
//                             /* stereo in the adjacency list */
//S_CHAR  num_iso_H[NUM_H_ISOTOPES + 1]; /* implicit hydrogen atoms */
//                             /* [0]: number of implicit non-isotopic H
//                                  (exception: num_iso_H[0]=-1 means INCHI
//                                  adds implicit H automatically),
//                                [1]: number of implicit isotopic 1H (protium),
//                                [2]: number of implicit 2H (deuterium),
//                                [3]: number of implicit 3H (tritium) */
//AT_NUM  isotopic_mass;        /* 0 => non-isotopic; isotopic mass or  */
//                             /* ISOTOPIC_SHIFT_FLAG + mass - (average atomic mass) */
//S_CHAR  radical;              /* inchi_Radical */
//S_CHAR  charge;               /* positive or negative; 0 => no charge */
//}inchi_Atom;



//from inchi_api.h
//typedef struct tagINCHI_OutputStructEx
//{
///* Pointers are allocated by GetStructFromINCHIEx()                                                 */
///* to deallocate all of them call FreeStructFromNCHIEx()                                            */
//inchi_Atom           *atom;             /* array of num_atoms elements                              */
//inchi_Stereo0D       *stereo0D;         /* array of num_stereo0D 0D stereo elements or NULL         */
//AT_NUM               num_atoms;         /* number of atoms in the structure                         */
//AT_NUM               num_stereo0D;      /* number of 0D stereo elements                             */
//char                 *szMessage;        /* Error/warning ASCIIZ message                             */
//char                 *szLog;            /* log-file ASCIIZ string, contains a human-readable list   */
//                                      /* of recognized options and possibly an Error/Warn message */
//unsigned long        WarningFlags[2][2];/* warnings, see INCHIDIFF in inchicmp.h                    */
//                                      /* [x][y]: x=0 => Reconnected if present in InChI           */
//                                      /*                otherwise Disconnected/Normal             */
//                                      /*  x=1 => Disconnected layer if Reconne layer is present   */
//                                      /*  y=1 => Main layer or Mobile-H                           */
//                                      /*  y=0 => Fixed-H layer                                    */
//inchi_Output_Polymer *polymer;          /* v. 1.05+ extended data, polymers                          */
//inchi_Output_V3000   *v3000;            /* v. 1.05+ extended data, V3000 Molfile features            */
//} inchi_OutputStructEx;
