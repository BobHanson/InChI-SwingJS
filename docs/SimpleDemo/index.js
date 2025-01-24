"use strict";

/*
 * Page loaded
 */
function onBodyLoad() {
}

function getVersion(tabId) {
	return "1.07.2";
}

async function convertMolfileToInchiAndWriteResults(molfile, options, inchiVersion, inchiTextElementId, inchikeyTextElementId, auxinfoTextElementId, logTextElementId) {
  const log = [];
  log.push("InChI options: " + options);

  let inchiResult;
  try {
    inchiResult = await inchiFromMolfile(molfile, options, inchiVersion);
  } catch(e) {
    writeResult(`Caught exception from inchiFromMolfile(): ${e}`, logTextElementId);
    console.error(e);
    return;
  }
  writeResult(inchiResult.inchi, inchiTextElementId);
  writeResult(inchiResult.auxinfo, auxinfoTextElementId);

  if (inchiResult.log !== "") {
    log.push(inchiResult.log);
  }

  if ((inchiResult.return_code != -1) && (inchiResult.inchi !== "")) {
    let inchikeyResult;
    try {
      inchikeyResult = await inchikeyFromInchi(inchiResult.inchi, inchiVersion);
    } catch(e) {
      log.push(`Caught exception from inchikeyFromInchi(): ${e}`);
      console.error(e);
    }
    writeResult(inchikeyResult.inchikey, inchikeyTextElementId);

    if ((inchikeyResult.return_code == -1) && (inchikeyResult.message !== "")) {
      log.push(inchikeyResult.message);
    }
  }

  writeResult(log.join("\n"), logTextElementId);	
}

function writeResult(text, ...ids) {
  console.log(text);
}

async function doConvertToMol() {
  var input = getInput3(true);
  if (!input) {
    return;
  }
  // run conversion
  const logTextElementId = "inchi-tab3-logs";
  const inchiVersion = getVersion("inchi-tab3-pane");
  let molfileResult;
  if (input.startsWith("InChI=")) {
    try {
      molfileResult = await molfileFromInchi(input, "", inchiVersion);
    } catch(e) {
      writeResult(`Caught exception from molfileFromInchi(): ${e}`, logTextElementId);
      console.error(e);
      return;
    }
  } else if (input.startsWith("AuxInfo=")) {
    try {
      molfileResult = await molfileFromAuxinfo(input, 0, 0, inchiVersion);
    } catch(e) {
      writeResult(`Caught exception from molfileFromAuxinfo(): ${e}`, logTextElementId);
      console.error(e);
      return;
    }
  }
  const molfile = molfileResult.molfile;
  if (molfile !== "") {
	  alert(molfile);
//    await ketcher.setMolecule(molfile);
//    if (input.startsWith("InChI=")) {
//      await ketcher.layout();
//    }
  }

  const log = [];
  if (molfileResult.log !== "") {
    log.push(molfileResult.log);
  }
  if (molfileResult.message !== "") {
    log.push(molfileResult.message);
  }
  writeResult(log.join("\n"), logTextElementId);
}

function getInput3(allowAux) {
	  const input = document.getElementById("inchi-tab3-inputTextarea").value.trim();
	  const logTextElementId = "inchi-tab3-logs";

	  // clear outputs
	  writeResult("", logTextElementId);

	  // input validation
	  if (!input) {
	    return;
	  }
	  if (input.startsWith("InChI=") || allowAux && input.startsWith("AuxInfo=")) {
		  return input;
	  }
      writeResult("The input string should start with \"InChI=\"" +
    		(allowAux ? " or \"AuxInfo=\"." : "."), logTextElementId);
}

async function doGetModel() {
  var input = getInput3(false);
  if (!input)
	  return;
  const logTextElementId = "inchi-tab3-logs";
  const inchiVersion = getVersion("inchi-tab3-pane");
  // run conversion
  let modelResult;
  if (input.startsWith("InChI=")) {
    try {
      modelResult = await modelFromInchi(input, "", inchiVersion);
    } catch(e) {
      writeResult(`Caught exception from modelFromInchi(): ${e}`, logTextElementId);
      console.error(e);
      return;
    }
  }
  const model = modelResult.model;
  if (model !== "") {
	  alert(model);
  }

  const log = [];
  if (modelResult.log !== "") {
    log.push(molfileResult.log);
  }
  if (modelResult.message !== "") {
    log.push(modelResult.message);
  }
  writeResult(log.join("\n"), logTextElementId);
}

