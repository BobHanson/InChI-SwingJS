"use strict";

// debugging only;
// set this false to use local non-core set of files and also not any files from St. Olaf
var debugging = false;
var isLocal = debugging || J2S._isFile && J2S._debugCode; 
var useCore = !debugging && !J2S._debugCode;

function writeResult(text) {
	$("#txtlog").html(text);
}

/*
 * WASM module(s) initialization
 *
 * Calling the factory function returns a Promise which resolves to the module object.
 * See https://github.com/emscripten-core/emscripten/blob/fa339b76424ca9fbe5cf15faea0295d2ac8d58cc/src/settings.js#L1183
 */
if (!self.SwingJS)alert('swingjs2.js was not found. It needs to be in swingjs folder in the same directory as ' + document.location.href)
SwingJS.Inchi = {};

var jna = {};

(jna.module = jnainchiModule()).then(function(module) {
	J2S["jnainchi_module"] = module;
	var Info = {
	  code: null,
	  main: "swingjs.CDK",
	  core: (useCore ? "assets/core_jna-cdk-ocl.z.js" : "none"),
	  coreAssets: "assets/coreAssets.zip",
	  width: 850,
		height: 550,
	  readyFunction: function() {appletReady();},
		serverURL: 'https://chemapps.stolaf.edu/jmol/jsmol/php/jsmol.php',
		j2sPath: (isLocal ? 'swingjs/j2s' : 'https://chemapps.stolaf.edu/swingjs/chem/swingjs/j2s'),
		console:'sysoutdiv',
		allowjavascript: true
	}
	SwingJS.getApplet('demoApplet', Info);
});


var appletReady = function() {
	showVersion();	startOCL()	
	$("#optfixedh").change(function(){setTimeout(function() {
		onOCLChanged(null)}, 10)});
	$("#optfixamide").change(function(){setTimeout(function() {
		onOCLChanged(null)}, 10)});
	$("#optfixacid").change(function(){setTimeout(function() {
		onOCLChanged(null)}, 10)});
	$("#optatomnumbers").change(function(){setTimeout(function() {
		updateAtomNumbers(false)}, 10)});
	
	var inchi = getField("InChI");
	if (inchi) {
		updateTextArea("InChI=" + inchi, true, false);
	} else {
		var smiles = getField("SMILES");
		if (smiles)
			setSmiles(smiles);
	}
}

var getField = function(key) {
	key = "&" + key + "=";
	var f = "&" + (document.location.search + key).substring(1);
	return f.split(key)[1].split("&")[0];
}

async function processText(fromOCLChange) {
  const input = $("#txtinchi").val();
  writeResult("");
  if (!input || input.startsWith("InChI=")) {
    try {
      await readInchi(input.trim(), getOutputOptions(), !fromOCLChange);
    } catch(e) {
      writeResult(`Caught exception from readInchi(): ${e}`);
      console.error(e);
    }
  } else if (input.startsWith("AuxInfo=")) {
    try {
      await readAuxinfo(input.trim(), 0, 0);
    } catch(e) {
      writeResult(`Caught exception from readAuxinfo(): ${e}`);
      console.error(e);
    }
  } else if (input.startsWith("SMILES=")) {
	  setSmiles(input.substring(7))
  } else if (input.length > 100) {
	  if (input.trim().indexOf("\n") < 0) {
		  // assume SMILES
		  return setSmiles(input);
	  }
	  // assume MOL file
	  try {
	    await readMolfile(input, getOutputOptions());
	  } catch(e) {
	    writeResult(`Caught exception from readMolfile(): ${e}`);
	    console.error(e);
	  }
  }
}

var getInputOptions = function() {
	return ($("#optfixedh:checked").val()? "fixedh" : "");	
}

var getOutputOptions = function() {
	return (($("#optfixamide:checked").val()? " fixamide" : "")
	+ ($("#optfixacid:checked").val()? " fixacid" : "")).trim();	
}

var readFromOCL = false;

var lastSmiles = "CN(CC[C@]12c3c(C4)ccc(O)c3O[C@H]11)[C@H]4[C@@H]2C=C[C@@H]1O";

async function getSMILES() {
	var smiles = prompt("Enter a SMILES, such as 'CCC=O'", lastSmiles);
	smiles = smiles.trim();
	if (smiles) {
		lastSmiles = smiles;
		setSmiles(smiles);
	}	
}

var setSmiles = function(smiles) {
	setTimeout(function() {updateTextArea(swingjs.OCL.get2DMolFromSmiles(smiles.trim()), true, false);}, 100);
}

async function readInchi(inchi, outputOptions, fromTextChange, fromMolfile) {
//  another way to do it
//	  var mol = swingjs.CDK.getCDKMoleculeFromInChI(inchi);
//	  var s = swingjs.CDK.get2DMolFromCDKMolecule(mol);
//	  console.log(s);
//	  showStructureImage(mol, false, true);
  try {
	  var ixa = J2S.wasm.jnainchi;
	  var hStatus = ixa.IXA_STATUS_Create();
	  var hMolecule =  ixa.IXA_MOL_Create(hStatus);
	  ixa.IXA_MOL_ReadInChI(hStatus, hMolecule, inchi);
	  processMoleculeHandle(hStatus, hMolecule, outputOptions, false, fromTextChange, fromMolfile);
  } catch (e) {
	  throw e;
  } finally {
	  ixa.IXA_STATUS_Destroy(hStatus);
	  ixa.IXA_MOL_Destroy(null, hMolecule);		  
  }
}

async function readMolfile(molfile, options) {
  try {
	  var ixa = J2S.wasm.jnainchi;
	  var hStatus = ixa.IXA_STATUS_Create();
	  var hMolecule =  ixa.IXA_MOL_Create(hStatus);
	  ixa.IXA_MOL_ReadMolfile(hStatus, hMolecule, molfile);
	  processMoleculeHandle(hStatus, hMolecule, getOutputOptions(), true, true, true);
  } catch (e) {
	  throw e;
  } finally {
	  ixa.IXA_STATUS_Destroy(hStatus);
	  ixa.IXA_MOL_Destroy(null, hMolecule);		  
  }
}

async function readAuxinfo(auxinfo, bDoNotAddH, bDiffUnkUndfStereo) {
  var ixa = J2S.wasm.jnainchi;
  var hStatus = ixa.IXA_STATUS_Create();
  var hMolecule =  ixa.IXA_MOL_Create(hStatus);
  try {
	  //ixa.IXA_MOL_ReadAuxInfo(hStatus, hMolecule, auxinfo, bDoNotAddH, bDiffUnkUndfStereo);
	  // temporary, until JNA-InChI also includes this method;
	  // right now it is just in WASM
	  // "peer" is the JNA field that is the actual memory address, as a number
	  const module = await jna.module;
	  var inchi = module.ccall("IXA_MOL_ReadAuxInfo", "string", ["number", "number", "string", "number", "number"], [hStatus.peer, hMolecule.peer, auxinfo, bDoNotAddH, bDiffUnkUndfStereo]);
	  processMoleculeHandle(hStatus, hMolecule, getOutputOptions(), false, true, false);
  } finally {
	  ixa.IXA_MOL_Destroy(null, hMolecule);
	  ixa.IXA_STATUS_Destroy(hStatus);
  }
}

var wasTextChange = false;

/**
 * A general method that processes the IXA molecule to generate an InChI or CDK model
 */
var processMoleculeHandle = function(hStatus, hMolecule, outputOptions, isMolfile, fromTextChange, fromMolfile) {
  var CDK = swingjs.CDK;
  var input = CDK.getInchiInputFromMoleculeHandle(hStatus, hMolecule, outputOptions);
  if (isMolfile) {
	  // mol file, so we want to also generate an InChI and produce its CDK model
	  // we do this first, because it hides the MOL file structure from the previous call
	  var inchi = CDK.getInChIFromInchiInput(input, getInputOptions());
	  updateTextArea(inchi, true, false);
	  return;
  }
  var mol = CDK.getCDKMoleculeFromInchiInput(input);
  showStructureImage(mol, isMolfile, fromMolfile, true);
  if (!isMolfile) {
	 if (fromTextChange) {
	   wasTextChange = true;
	   showOCL(input, fromMolfile);
     } else {
	   wasTextChange = false;
     } 
  }

}

var timeoutID = 0;

var	cDModeSuppressChiralText = 0x0020;
var	cDModeSuppressCIPParity  = 0x0040;
var cDModeSuppressESR        = 0x0080;
var cDModeBHNoSimpleHydrogens  = 0x100000;
var cDModeNoImplicitCHydrogens = 0x200000;
var cDModeAtomNoPlusOne        = 0x400000; // BH 2025.04.19

var oclDefaultMode = cDModeSuppressChiralText 
	| cDModeSuppressCIPParity 
	| cDModeSuppressESR;

var getOCLAbstractDepictorMode = function() {
	return oclDefaultMode | (getShowAtomNumbers() ? cDModeAtomNoPlusOne : 0);
}

var updateAtomNumbers = function(){
	if (SwingJS.Inchi.oclDrawing)
		swingjs.OCL.showAtomNumbers(SwingJS.Inchi.oclDrawing, getShowAtomNumbers());
	if (SwingJS.Inchi.cdkMolecule)
		  showStructureImage(SwingJS.Inchi.cdkMolecule);
}

function doShowModelJSON() {
	var inchi = $("#txtinchi").val();
	var json = swingjs.OCL.getInchiModelJSONOpts(inchi, getOutputOptions());
	alert(json);	
}

var getShowAtomNumbers = function(){
	return $("#optatomnumbers:checked").val();
}

var showStructureImage = function(mol, isMolFile, fromMolfile, updateLabel) {
	  var CDK = swingjs.CDK;
	  SwingJS.Inchi.cdkMolecule = mol;
	  var src = (mol.getAtomCount$() == 0 ? "" : CDK.getDataURIFromCDKMolecule(mol, getShowAtomNumbers()));
	  var divImg;
	  if (isMolFile) {
		  if (updateLabel)
			  $("#mollabel").html("MOL \u27A1 InChI \u27A1 MOL");
		  divImg = $("#molimage")[0];
		  $("#molimagediv").show();
	  } else {
		  if (updateLabel)
			  $("#cdklabel").html((fromMolfile ? "MOL \u27A1 ":"")+"InChI \u27A1 CDK");
		  divImg = $("#cdkimage")[0];
		  $("#molimagediv").hide();
	  }
	  displayImage(divImg, src);
}

/** 
 * smoother operation with a 1-second delay for failed InChI
 * 
 * @param src
 * @returns
 */
function displayImage(divImg,src) {
	timeoutID && clearTimeout(timeoutID);
	if (src && src.length > 100) {
		divImg.src = src;
	} else {
		// invalid image
		timeoutID = setTimeout(function() {
			divImg.src = "";
			timeoutID = 0;
			$("#"+divImg.id + "div").show();	
		},1000);
	}
}

function doProcessTextBox(what) {
	updateTextArea(getData(what), true, false);
}

function doToOCL() {
  processText(false);	
}

var updateTextArea = function(text, doProcessText, fromOCL) {
	setTimeout(function() {
	 $('#txtinchi').val(text);	
	 if (doProcessText)
		 processText(fromOCL);
	}, 50);
}

var addDnD = function() {
	const textarea = $("#txtinchi")[0];
	
	textarea.addEventListener('input', (event) => {
		processText(false);
	});

	textarea.addEventListener('dragover', (event) => {
	  event.preventDefault();
	  event.dataTransfer.dropEffect = 'copy';
	});

	textarea.addEventListener('drop', (event) => {
	  event.preventDefault();
	  const file = event.dataTransfer.files[0];
	  const reader = new FileReader();
	  reader.onload = (e) => {
		  var val = e.target.result;
		  setTimeout(function() {
			  textarea.value = val;
			  processText(false);
		  },10);
	  };
	  reader.readAsText(file);
	});	
}; addDnD();

var onOCLChangedTimeoutID = 0;
var itest = 0;


var showOCL = function(inchiInput, fromMolfile) {
  wasTextChange = true;
  var mol = swingjs.OCL.getOCLMoleculeFromInchiInput(inchiInput);
  swingjs.OCL.setMolecule(SwingJS.Inchi.oclDrawing, mol, getOCLAbstractDepictorMode());	
  var title = (fromMolfile ? "MOL \u27A1 ":"")+"InChI \u27A1 OCL";
  SwingJS.Inchi.OCLFrame.setTitle$S(title);
}

var onOCLChanged = function(drawing) {
	if (drawing)
		SwingJS.Inchi.oclDrawing = drawing;
	else
		drawing = SwingJS.Inchi.oclDrawing;
	onOCLChangedTimeoutID && clearTimeout(onOCLChangedTimeoutID);
	onOCLChangedTimeoutID = setTimeout(
		function() {
			if (!wasTextChange) {
				SwingJS.Inchi.OCLFrame.setTitle$S("OCL \u27A1 InChI");
				updateTextArea(swingjs.OCL.getInChIFromOCLMolecule(drawing.mMol, getInputOptions()), true, true);
			}
			wasTextChange = false;
		}, 
		50
	);
};

function startOCL() {
	Clazz.loadClass("swingjs.OCL");
	swingjs.OCL.initInchi({
		run$: function() {
			var frame = SwingJS.Inchi.OCLFrame = swingjs.OCL.getFrame("InChI \u27A1 OCL \u27A1 InChI", 400,400,-1, {
				accept$O : function(drawing) {onOCLChanged(drawing)}
			});
			frame.setLocation$I$I(700,0);
			SwingJS.Inchi.oclDrawing = swingjs.OCL.getGenericDrawArea(frame);
		}
	});
}

var VERSION, APP_DESCRIPTION;

async function showVersion(module) {
	if (!module)
		module = await jna.module;
	if (!VERSION) {
		// temporary, until JNA-InChI adds this
	  var ptr = module.ccall("IXA_INCHIBUILDER_GetInChIVersion", "number", ["number"], [true]);
	  APP_DESCRIPTION = module.UTF8ToString(ptr);
	  module._free(ptr);	
	  ptr = module.ccall("IXA_INCHIBUILDER_GetInChIVersion", "number", ["number"], [false]);
	  VERSION =module.UTF8ToString(ptr);
	  module._free(ptr);		
	} 
	var msg = "<span style='color:red'>VERSION=" + VERSION + "&nbsp;&nbsp;&nbsp;&nbsp; APP_DESCRIPTION=" + APP_DESCRIPTION + "</span>";
	$("#txtlog").html(msg);

}

var getData = function(what) {
	switch (what) {
	case 'fixtest':
		// phenol-carboxylate and amide
		return "InChI=1S/C10H9NO5/c12-7-3-1-6(2-4-7)10(16)11-8(13)5-9(14)15/h1-4,12H,5H2,(H,14,15)(H,11,13,16)/p-1";
	case 'morphine':
		return 'InChI=1S/C17H19NO3/c1-18-7-6-17-10-3-5-13(20)16(17)21-15-12(19)4-2-9(14(15)17)8-11(10)18/h2-5,10-11,13,16,19-20H,6-8H2,1H3/t10-,11+,13-,16-,17-/m0/s1';
	case '(+)-morphine':
		return 'InChI=1S/C17H19NO3/c1-18-7-6-17-10-3-5-13(20)16(17)21-15-12(19)4-2-9(14(15)17)8-11(10)18/h2-5,10-11,13,16,19-20H,6-8H2,1H3/t10-,11+,13-,16-,17-/m1/s1';
	case 'auxinfo':
		return 'AuxInfo=1/0/N:1,3,5,2,6,4/E:(1,2,3,4,5,6)/rA:6nCCCCCC/rB:;d1s2;d2;s1;s4d5;/rC:7.8848,-4.7251,0;9.6152,-4.7246,0;8.7516,-4.225,0;9.6152,-5.7255,0;7.8848,-5.73,0;8.7538,-6.225,0;';
	case 'taxol':
		return `http://www.rcsb.org/pdb/files/ligand/ta1.cif
__Jmol-(U_03081619493D 1   1.00000     0.00000     0
Jmol version (Unknown version)  2016-03-08 14:49 EXTRACT: ({0:112})
113119  0  0  0  0              1 V2000
  -1.44600   2.75600   1.66300 O   0  0  0  0  0  0
  -0.43800   1.72800   1.71500 C   0  0  0  0  0  0
  -1.02000   0.58900   2.58100 C   0  0  0  0  0  0
  -2.27500   0.21100   1.90500 O   0  0  0  0  0  0
  -3.42500   0.84000   2.21700 C   0  0  0  0  0  0
  -3.42800   1.71900   3.05600 O   0  0  0  0  0  0
  -4.68200   0.46100   1.54000 C   0  0  0  0  0  0
  -5.87500   1.11100   1.86100 C   0  0  0  0  0  0
  -7.04500   0.75300   1.22400 C   0  0  0  0  0  0
  -7.03800  -0.24800   0.27000 C   0  0  0  0  0  0
  -5.86000  -0.89600  -0.05300 C   0  0  0  0  0  0
  -4.68100  -0.54400   0.57100 C   0  0  0  0  0  0
  -0.10700  -0.63100   2.65800 C   0  0  0  0  0  0
  -0.70700  -1.84500   1.99700 C   0  0  0  0  0  0
  -0.54200  -1.78300   0.54300 O   0  0  0  0  0  0
  -0.89400  -2.83000  -0.21800 C   0  0  0  0  0  0
  -1.44300  -3.78300   0.28200 O   0  0  0  0  0  0
  -0.60500  -2.81800  -1.69700 C   0  0  0  0  0  0
  -2.12600  -2.23500   2.41300 C   0  0  0  0  0  0
  -1.62300  -3.28100   3.25200 O   0  0  0  0  0  0
  -0.39600  -3.24000   2.52200 C   0  0  0  0  0  0
   0.82900  -3.29300   3.43500 C   0  0  0  0  0  0
   0.65300  -2.22000   4.50300 C   0  0  0  0  0  0
  -0.58400  -2.34800   5.18700 O   0  0  0  0  0  0
   0.74100  -0.82700   3.87000 C   0  0  0  0  0  0
   0.25100   0.04300   5.01600 C   0  0  0  0  0  0
   2.20800  -0.52500   3.69700 C   0  0  0  0  0  0
   3.02000  -1.43900   3.78700 O   0  0  0  0  0  0
   2.69500   0.88400   3.42400 C   0  0  0  0  0  0
   2.67200   1.71700   4.59900 O   0  0  0  0  0  0
   3.72900   1.74000   5.42700 C   0  0  0  0  0  0
   4.70000   1.06300   5.18500 O   0  0  0  0  0  0
   3.70400   2.61100   6.65600 C   0  0  0  0  0  0
   1.88900   1.35800   2.25000 C   0  0  0  0  0  0
   2.14100   0.83000   1.05500 C   0  0  0  0  0  0
   1.26300   1.20600  -0.11500 C   0  0  0  0  0  0
   1.40800   0.17700  -1.14500 O   0  0  0  0  0  0
   2.37000   0.28900  -2.07500 C   0  0  0  0  0  0
   3.11600   1.24000  -2.06100 O   0  0  0  0  0  0
   2.51900  -0.76900  -3.13600 C   0  0  0  0  0  0
   3.60400  -0.42700  -4.00100 O   0  0  0  0  0  0
   1.22700  -0.86100  -3.95100 C   0  0  0  0  0  0
   0.95700   0.43100  -4.58500 N   0  0  0  0  0  0
  -0.31300   0.81100  -4.82500 C   0  0  0  0  0  0
  -1.23400   0.08200  -4.51500 O   0  0  0  0  0  0
  -0.58600   2.11500  -5.46500 C   0  0  0  0  0  0
  -1.90000   2.51200  -5.71500 C   0  0  0  0  0  0
  -2.14800   3.73100  -6.31200 C   0  0  0  0  0  0
  -1.09700   4.55900  -6.66400 C   0  0  0  0  0  0
   0.20800   4.17100  -6.42000 C   0  0  0  0  0  0
   0.46900   2.95800  -5.81800 C   0  0  0  0  0  0
   1.37700  -1.92000  -5.01200 C   0  0  0  0  0  0
   0.52300  -3.00800  -5.02900 C   0  0  0  0  0  0
   0.66100  -3.97900  -6.00200 C   0  0  0  0  0  0
   1.65100  -3.86300  -6.96000 C   0  0  0  0  0  0
   2.50400  -2.77600  -6.94400 C   0  0  0  0  0  0
   2.36400  -1.80200  -5.97300 C   0  0  0  0  0  0
  -0.20300   1.27700   0.28700 C   0  0  0  0  0  0
   3.30100  -0.12200   0.83700 C   0  0  0  0  0  0
   0.80100   2.37500   2.31100 C   0  0  0  0  0  0
   1.19000   3.61000   1.47700 C   0  0  0  0  0  0
   0.47300   2.89500   3.70600 C   0  0  0  0  0  0
  -2.23100   2.35700   1.26200 H   0  0  0  0  0  0
  -1.33500   0.98000   3.54300 H   0  0  0  0  0  0
  -5.88200   1.89300   2.60700 H   0  0  0  0  0  0
  -7.96900   1.25500   1.47200 H   0  0  0  0  0  0
  -7.95700  -0.52400  -0.22500 H   0  0  0  0  0  0
  -5.86100  -1.67700  -0.79800 H   0  0  0  0  0  0
  -3.76200  -1.05100   0.31800 H   0  0  0  0  0  0
   0.66300  -0.38200   1.89100 H   0  0  0  0  0  0
  -0.96000  -3.74600  -2.14400 H   0  0  0  0  0  0
  -1.11400  -1.97300  -2.16000 H   0  0  0  0  0  0
   0.46900  -2.72600  -1.85600 H   0  0  0  0  0  0
  -2.73700  -2.60800   1.58500 H   0  0  0  0  0  0
  -2.66300  -1.48700   3.00300 H   0  0  0  0  0  0
  -0.34600  -3.99000   1.73000 H   0  0  0  0  0  0
   1.72800  -3.10500   2.85100 H   0  0  0  0  0  0
   0.89300  -4.27800   3.90000 H   0  0  0  0  0  0
   1.47100  -2.29700   5.22700 H   0  0  0  0  0  0
  -0.60100  -3.23500   5.57000 H   0  0  0  0  0  0
   0.67600   1.04300   4.92000 H   0  0  0  0  0  0
  -0.83600   0.10600   4.98500 H   0  0  0  0  0  0
   0.56300  -0.39300   5.96400 H   0  0  0  0  0  0
   3.76700   0.82500   3.12100 H   0  0  0  0  0  0
   4.64200   2.49900   7.20000 H   0  0  0  0  0  0
   3.57700   3.65300   6.36100 H   0  0  0  0  0  0
   2.87400   2.31100   7.29700 H   0  0  0  0  0  0
   1.59000   2.14700  -0.55400 H   0  0  0  0  0  0
   2.72000  -1.73100  -2.66400 H   0  0  0  0  0  0
   3.38700   0.42700  -4.39800 H   0  0  0  0  0  0
   0.40000  -1.12200  -3.29100 H   0  0  0  0  0  0
   1.69200   1.01300  -4.83300 H   0  0  0  0  0  0
  -2.72200   1.86700  -5.44100 H   0  0  0  0  0  0
  -3.16500   4.03900  -6.50600 H   0  0  0  0  0  0
  -1.29600   5.51100  -7.13200 H   0  0  0  0  0  0
   1.02400   4.82200  -6.69700 H   0  0  0  0  0  0
   1.48900   2.65600  -5.62700 H   0  0  0  0  0  0
  -0.24900  -3.09800  -4.28000 H   0  0  0  0  0  0
  -0.00500  -4.82900  -6.01500 H   0  0  0  0  0  0
   1.75800  -4.62300  -7.72000 H   0  0  0  0  0  0
   3.27800  -2.68500  -7.69200 H   0  0  0  0  0  0
   3.03000  -0.95200  -5.96000 H   0  0  0  0  0  0
  -0.67500   0.31200   0.12300 H   0  0  0  0  0  0
  -0.70400   1.99300  -0.38000 H   0  0  0  0  0  0
   3.33500  -0.41900  -0.21000 H   0  0  0  0  0  0
   4.23400   0.37400   1.10400 H   0  0  0  0  0  0
   3.16900  -1.00500   1.46100 H   0  0  0  0  0  0
   1.20400   3.34400   0.42000 H   0  0  0  0  0  0
   0.46200   4.40400   1.64300 H   0  0  0  0  0  0
   2.17900   3.95500   1.77900 H   0  0  0  0  0  0
   1.39800   3.11900   4.23700 H   0  0  0  0  0  0
  -0.12700   3.80100   3.62400 H   0  0  0  0  0  0
  -0.08500   2.13600   4.25400 H   0  0  0  0  0  0
  1  2  1  0  0  0
  1 63  1  0  0  0
  2  3  1  0  0  0
  2 58  1  0  0  0
  2 60  1  0  0  0
  3  4  1  0  0  0
  3 13  1  0  0  0
  3 64  1  0  0  0
  4  5  1  0  0  0
  5  6  2  0  0  0
  5  7  1  0  0  0
  7  8  2  0  0  0
  7 12  1  0  0  0
  8  9  1  0  0  0
  8 65  1  0  0  0
  9 10  2  0  0  0
  9 66  1  0  0  0
 10 11  1  0  0  0
 10 67  1  0  0  0
 11 12  2  0  0  0
 11 68  1  0  0  0
 12 69  1  0  0  0
 13 14  1  0  0  0
 13 25  1  0  0  0
 13 70  1  0  0  0
 14 15  1  0  0  0
 14 19  1  0  0  0
 14 21  1  0  0  0
 15 16  1  0  0  0
 16 17  2  0  0  0
 16 18  1  0  0  0
 18 71  1  0  0  0
 18 72  1  0  0  0
 18 73  1  0  0  0
 19 20  1  0  0  0
 19 74  1  0  0  0
 19 75  1  0  0  0
 20 21  1  0  0  0
 21 22  1  0  0  0
 21 76  1  0  0  0
 22 23  1  0  0  0
 22 77  1  0  0  0
 22 78  1  0  0  0
 23 24  1  0  0  0
 23 25  1  0  0  0
 23 79  1  0  0  0
 24 80  1  0  0  0
 25 26  1  0  0  0
 25 27  1  0  0  0
 26 81  1  0  0  0
 26 82  1  0  0  0
 26 83  1  0  0  0
 27 28  2  0  0  0
 27 29  1  0  0  0
 29 30  1  0  0  0
 29 34  1  0  0  0
 29 84  1  0  0  0
 30 31  1  0  0  0
 31 32  2  0  0  0
 31 33  1  0  0  0
 33 85  1  0  0  0
 33 86  1  0  0  0
 33 87  1  0  0  0
 34 35  2  0  0  0
 34 60  1  0  0  0
 35 36  1  0  0  0
 35 59  1  0  0  0
 36 37  1  0  0  0
 36 58  1  0  0  0
 36 88  1  0  0  0
 37 38  1  0  0  0
 38 39  2  0  0  0
 38 40  1  0  0  0
 40 41  1  0  0  0
 40 42  1  0  0  0
 40 89  1  0  0  0
 41 90  1  0  0  0
 42 43  1  0  0  0
 42 52  1  0  0  0
 42 91  1  0  0  0
 43 44  1  0  0  0
 43 92  1  0  0  0
 44 45  2  0  0  0
 44 46  1  0  0  0
 46 47  2  0  0  0
 46 51  1  0  0  0
 47 48  1  0  0  0
 47 93  1  0  0  0
 48 49  2  0  0  0
 48 94  1  0  0  0
 49 50  1  0  0  0
 49 95  1  0  0  0
 50 51  2  0  0  0
 50 96  1  0  0  0
 51 97  1  0  0  0
 52 53  2  0  0  0
 52 57  1  0  0  0
 53 54  1  0  0  0
 53 98  1  0  0  0
 54 55  2  0  0  0
 54 99  1  0  0  0
 55 56  1  0  0  0
 55100  1  0  0  0
 56 57  2  0  0  0
 56101  1  0  0  0
 57102  1  0  0  0
 58103  1  0  0  0
 58104  1  0  0  0
 59105  1  0  0  0
 59106  1  0  0  0
 59107  1  0  0  0
 60 61  1  0  0  0
 60 62  1  0  0  0
 61108  1  0  0  0
 61109  1  0  0  0
 61110  1  0  0  0
 62111  1  0  0  0
 62112  1  0  0  0
 62113  1  0  0  0
M  END
`;
	}
return null;
}
