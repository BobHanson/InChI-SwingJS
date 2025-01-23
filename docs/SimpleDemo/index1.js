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

function doConvertToMol() {
	var input = document.getElementById("inchi-tab3-inputTextarea").value.trim();
	if (!input) {
		return;
	}
	if (!input.startsWith("InChI=") && !input.startsWith("AuxInfo=")) {
		alert("The input string should start with \"InChI=\" or \"AuxInfo=\".");
		return;
	}
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
		alert(ret.molfile ? ret.molfile : ret.log);
}
