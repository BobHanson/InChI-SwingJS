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
  const input = document.getElementById("inchi-tab3-inputTextarea").value.trim();
  const inchiVersion = getVersion("inchi-tab3-pane");
  //const ketcher = getKetcher("inchi-tab3-ketcher");
  const logTextElementId = "inchi-tab3-logs";

  // clear outputs
  //ketcher.editor.clear()
  writeResult("", logTextElementId);

  // input validation
  if (!input) {
    return;
  }
  if (!input.startsWith("InChI=") && !input.startsWith("AuxInfo=")) {
    writeResult("The input string should start with \"InChI=\" or \"AuxInfo=\".", logTextElementId);
    return;
  }

  // run conversion
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

