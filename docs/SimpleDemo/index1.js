"use strict";

/*
 * Page loaded
 */
function onBodyLoad() {
}

function convertMolfileToInchi(molfile, options) {
	try {
		return Jmol.inchiFromMolfile(molfile, options);
	} catch (e) {
		console.error(e);
		alert(`Caught exception from inchiFromMolfile(): ${e}`);
		return null;
	}
}

function writeResult(text) {
	console.log(text);
}

var getInput3 = function(allowAux) {
	  var input = document.getElementById("inchi-tab3-inputTextarea").value.trim();
	  
	  // input validation
	  if (!input) {
	    return;
	  }
	  if (input.startsWith("InChI=") || allowAux && input.startsWith("AuxInfo=")) {
		  return input;
	  }
	  alert("The input string should start with \"InChI=\"" +
  		(allowAux ? " or \"AuxInfo=\"." : "."));
}


function doConvertToMol() {
	var input = getInput3(true);
	// run conversion
	var ret;
	if (input.startsWith("InChI=")) {
		try {
			var ret = Jmol.molfileFromInchi(input);
		} catch (e) {
			console.error(e);
			alert(`Caught exception from molfileFromInchi(): ${e}`);
			return;
		}
	} else if (input.startsWith("AuxInfo=")) {
		try {
			ret = Jmol.molfileFromAuxinfo(input);
		} catch (e) {
			console.error(e);
			alert(`Caught exception from molfileFromAuxinfo(): ${e}`);
			return;
		}
	}
	if (ret)
		alert(ret.molfile ? ret.molfile : ret.msg + "\n" + ret.log);
}

function doGetStandardInchi() {
	var input = getInput3(false);
	var ret;
	try {
		var ret = Jmol.inchiFromInchi(input);
	} catch (e) {
		console.error(e);
		alert(`Caught exception from inchiFromInchi(): ${e}`);
		return;
	}
	if (ret)
		alert(ret.inchi ? ret.inchi : ret.msg + "\n" + ret.log);
}

function doGetModel() {
	var input = getInput3(false);
	var ret;
		try {
			var ret = Jmol.modelFromInchi(input);
		} catch (e) {
			console.error(e);
			alert(`Caught exception from modelFromInchi(): ${e}`);
			return;
		}
	if (ret)
		alert(ret.model ? ret.model : ret.msg + "\n" + ret.log);
}


