"use strict";

var IxaFunctions = {};

/*
 * WASM module(s) initialization
 *
 * Calling the factory function returns a Promise which resolves to the module object.
 * See https://github.com/emscripten-core/emscripten/blob/fa339b76424ca9fbe5cf15faea0295d2ac8d58cc/src/settings.js#L1183
 */
const availableInchiVersions = {
  "1.07.2": {
    "module": inchiModule(),
    "optionsTemplateId": "inchiOptionsTemplate",
    "default": true
  }
};

/*
 * Glue code to invoke the C functions in inchi_web.c
 *
 * Char pointers returned by inchi_from_molfile, inchikey_from_inchi,
 * molfile_from_inchi and molfile_from_auxinfo need to be freed here.
 * See https://github.com/emscripten-core/emscripten/issues/6484 (Emscripten does
 * not do this on its own when using "string" as return type.)
 */
async function inchiFromMolfile(molfile, options, inchiVersion) {
  const module = await availableInchiVersions[inchiVersion].module;
  const ptr = module.ccall("inchi_from_molfile", "number", ["string", "string"], [molfile, options]);
  const result = module.UTF8ToString(ptr);
  module._free(ptr);
  return JSON.parse(result);
}

async function inchikeyFromInchi(inchi, inchiVersion) {
  const module = await availableInchiVersions[inchiVersion].module;
  const ptr = module.ccall("inchikey_from_inchi", "number", ["string"], [inchi]);
  const result = module.UTF8ToString(ptr);
  module._free(ptr)
  return JSON.parse(result);
}

async function molfileFromInchi(inchi, options, inchiVersion) {
  const module = await availableInchiVersions[inchiVersion].module;
  const ptr = module.ccall("molfile_from_inchi", "number", ["string", "string"], [inchi, options]);
  const result = module.UTF8ToString(ptr);
  module._free(ptr);
  return JSON.parse(result);
}

async function molfileFromAuxinfo(auxinfo, bDoNotAddH, bDiffUnkUndfStereo, inchiVersion) {
  const module = await availableInchiVersions[inchiVersion].module;
  const ptr = module.ccall("molfile_from_auxinfo", "number", ["string", "number", "number"], [auxinfo, bDoNotAddH, bDiffUnkUndfStereo]);
  const result = module.UTF8ToString(ptr);
  module._free(ptr);
  return JSON.parse(result);
}

async function modelFromInchi(inchi, options, inchiVersion) {
  const module = await availableInchiVersions[inchiVersion].module;
  const ptr = module.ccall("model_from_inchi", "number", ["string", "string"], [inchi, options]);
  const result = module.UTF8ToString(ptr);
  module._free(ptr);
  return JSON.parse(result);
}

async function test(inchiVersion) {
  const module = await availableInchiVersions[inchiVersion].module;
  //var ptr = module.ccall("jna_createMolString", "number", [], []);
  //var s = module.ccall("jna_getMolAtomX", "string", ["number", "number"], [ptr, 1]);
  //alert(ptr); 
  var s = module.ccall("jna_createMolString", "string", [], []);
  //alert("s " + s);

  var mol =  module.ccall("jna_createMolAddress", "number", [], []);
  var s  =  module.ccall("jna_getMolAtomX", "string", ["number", "number"], [mol, 1]);
  alert("s " + s);
  var x  =  module.ccall("IXA_MOL_GetAtomX", "number", ["String", "number", "number"], [null, mol, 1]);
  //alert(x);

  var mol =  module.ccall("jna_createMolAddress", "number", [], []);
  var s  =  module.ccall("jna_getMolAtomX", "string", ["number", "number"], [mol, 1]);
  //alert("s " + s);

  var x  =  module.ccall("IXA_MOL_GetAtomX", "number", ["string", "number", "number"], [null, mol, 1]);
  //alert(x);

  var nativeMol = module.ccall("IXA_MOL_Create", "number", ["string"], [null]);
  module.ccall("IXA_MOL_ReserveSpace", "number", ["string", "number", "number", "number", "number"], [null, nativeMol, 3, 3, 3]);
  var nativeAtom = module.ccall("IXA_MOL_CreateAtom", "number", ["string", "number"], [null, nativeMol]);
  module.ccall("IXA_MOL_SetAtomX", "string", ["string", "number", "number", "number"], [null, nativeMol, nativeAtom, 543.21]);
  var x  =  module.ccall("IXA_MOL_GetAtomX", "number", ["String", "number", "number"], [null, nativeMol, nativeAtom]);
  //alert(x);

  IxaFunctions.IXA_STATUS_Create = module.cwrap("IXA_STATUS_Create", null, []);
  IxaFunctions.IXA_MOL_Create = module.cwrap("IXA_MOL_Create", "number", ["number"]);
  IxaFunctions.IXA_MOL_ReserveSpace = module.cwrap("IXA_MOL_ReserveSpace", null, ["number", "number", "number", "number", "number"]);
  IxaFunctions.IXA_MOL_CreateAtom = module.cwrap("IXA_MOL_CreateAtom", "number", ["number", "number"]);
  IxaFunctions.IXA_MOL_SetAtomX = module.cwrap("IXA_MOL_SetAtomX", null, ["number", "number", "number", "number"]);
  IxaFunctions.IXA_MOL_GetAtomX = module.cwrap("IXA_MOL_GetAtomX", "number", ["number", "number", "number"]);
  IxaFunctions.IXA_MOL_Destroy = module.cwrap("IXA_MOL_Destroy", null, ["number", "number"]);

  var logger = IxaFunctions.IXA_STATUS_Create();
  var nativeMol = IxaFunctions.IXA_MOL_Create(logger);
  IxaFunctions.IXA_MOL_ReserveSpace(logger, nativeMol, 3, 3, 3);  
  var nativeAtom = IxaFunctions.IXA_MOL_CreateAtom(logger, nativeMol);
  IxaFunctions.IXA_MOL_SetAtomX(logger, nativeMol, nativeAtom, 543.21);
  var x = IxaFunctions.IXA_MOL_GetAtomX(logger, nativeMol, nativeAtom);
  IxaFunctions.IXA_MOL_Destroy(logger, nativeMol);

  alert(x);



}


