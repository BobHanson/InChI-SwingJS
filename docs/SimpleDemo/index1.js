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
	process(ret, "molfile");
}

function doGetStandardInchi(options) {
	var input = getInput3(false);
	var ret;
	try {
		var ret = Jmol.inchiFromInchi(input,options);
	} catch (e) {
		console.error(e);
		alert(`Caught exception from inchiFromInchi(): ${e}`);
		return;
	}
	process(ret, "inchi");
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
		process(ret, "model");
}

function process(ret, key) {
	if (!ret)
		return;
	document.getElementById("ver").innerHTML = ret.ver;
	document.getElementById("message").innerHTML = ret.message;
	document.getElementById("log").innerHTML = ret.log.replaceAll("\n","<br>");
	if (ret[key] && ret.return_code <= 0)
		alert(ret[key])

		
	
	
	
}
