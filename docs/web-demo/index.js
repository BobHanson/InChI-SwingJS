"use strict";

/*
 * Page loaded
 */
function onBodyLoad() {
  addVersions("inchi-tab3-pane", availableInchiVersions);
  initTooltips();
}

function addVersions(tabDivId, versions) {
  const targetSelect = document.getElementById(tabDivId).querySelector("select[data-version]");
  for (const [versionString, versionObject] of Object.entries(versions)) {
    const option = document.createElement("option");
    option.innerHTML = versionString;
    option.value = versionString;
    option.selected = Boolean(versionObject.default);
    targetSelect.appendChild(option);
  };
}

function initTooltips() {
  [...document.querySelectorAll('[data-bs-toggle="tooltip"]')].map(tooltipTriggerEl => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });
}

function getVersion(tabId) {
  return document.getElementById(tabId).querySelector("select[data-version]").value;
}

async function convertMolfileToInchiAndWriteResults(molfile, options, inchiVersion, inchiTextElementId, inchikeyTextElementId, auxinfoTextElementId, logTextElementId) {
  try {
    await readMolfile(molfile, options, inchiVersion);
    return;
  } catch(e) {
    writeResult(`Caught exception from inchiFromMolfile(): ${e}`, logTextElementId);
    console.error(e);
    return;
  }
}

function writeResult(text, ...ids) {
  for (let id of ids) {
	  try {
    document.getElementById(id).textContent = text;
	  } catch (e) {
		  console.log("id?" + id);
	  }
  }
}

async function updateInchiTab3() {
  const input = document.getElementById("inchi-tab3-inputTextarea").value.trim();
  const inchiVersion = getVersion("inchi-tab3-pane");
//  const ketcher = getKetcher("inchi-tab3-ketcher");
  const logTextElementId = "inchi-tab3-logs";

  // clear outputs
//  ketcher.editor.clear()
  writeResult("", logTextElementId);

  // input validation
  if (!input) {
    return;
  }
//  if (!input.startsWith("InChI=") && !input.startsWith("AuxInfo=")) {
//    writeResult("The input string should start with \"InChI=\" or \"AuxInfo=\".", logTextElementId);
//    return;
//  }

  // run conversion
  if (input.startsWith("InChI=")) {
    try {
      await readInchi(input, "", inchiVersion);
      return;
    } catch(e) {
      writeResult(`Caught exception from molfileFromInchi(): ${e}`, logTextElementId);
      console.error(e);
      return;
    }
  } else if (input.startsWith("AuxInfo=")) {
    try {
      await readAuxinfo(input, 0, 0, inchiVersion);
      return;
    } catch(e) {
      writeResult(`Caught exception from molfileFromAuxinfo(): ${e}`, logTextElementId);
      console.error(e);
      return;
    }
  } else if (input.length > 100) {
      try {
    	  await convertMolfileToInchiAndWriteResults(input, "fixamides", inchiVersion, "inchi-tab3-inchi", "", "", logTextElementId);
          return;
        } catch(e) {
          writeResult(`Caught exception from inchiFromMolfile(): ${e}`, logTextElementId);
          console.error(e);
          return;
        }	  
  }
}

/*
 * Drag-and-drop into the Molfile textarea
 */
function onTextareaDragover(event) {
  event.stopPropagation();
  event.preventDefault();
  event.dataTransfer.dropEffect = 'copy';
}

async function onTextareaDrop(event, updateFunction) {
  event.stopPropagation();
  event.preventDefault();

  const content = await extractContent(event.dataTransfer);
  if (!content) {
    return;
  }

  event.target.value = content;
  await updateFunction();
}

async function extractContent(dataTransfer) {
  const items = dataTransfer.items;
  if (!items || items.length == 0) {
    return null;
  }
  const item = items[0];

  if (item.kind === "file") {
    return await item.getAsFile().text();
  } else if (item.kind === "string") {
    return new Promise(resolve => {
      item.getAsString(data => resolve(data));
    });
  }
  return null;
}

