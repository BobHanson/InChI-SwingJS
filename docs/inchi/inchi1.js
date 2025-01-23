"use strict";

var module;
/*
 * singleton asynchronous WASM module(s) initialization required 
 * BEFORE processing any query.
 * 
 * In Jmol we will need to do this before the actual command script is executed.
 *
 * Calling the factory function returns a Promise which resolves to the module object.
 * See https://github.com/emscripten-core/emscripten/blob/fa339b76424ca9fbe5cf15faea0295d2ac8d58cc/src/settings.js#L1183
 */
 (async function getInchiModule() {
	 module = await inchiModule();
 })();
 

 self.Jmol || (self.Jmol = {});
 
/*
 * Glue code to invoke the C functions in inchi_web.c
 *
 * Char pointers returned by inchi_from_molfile, inchikey_from_inchi,
 * molfile_from_inchi and molfile_from_auxinfo need to be freed here.
 * See https://github.com/emscripten-core/emscripten/issues/6484 (Emscripten does
 * not do this on its own when using "string" as return type.)
 */
Jmol.inchiFromMolfile = function(molfile, options) {
  const ptr = module.ccall("inchi_from_molfile", "number", ["string", "string"], [molfile, options]);
  const result = module.UTF8ToString(ptr);
  module._free(ptr);
  return JSON.parse(result);
}

Jmol.inchikeyFromInchi = function(inchi) {
  const ptr = module.ccall("inchikey_from_inchi", "number", ["string"], [inchi]);
  const result = module.UTF8ToString(ptr);
  module._free(ptr)
  return JSON.parse(result);
}

Jmol.molfileFromInchi = function(inchi, options) {
  const ptr = module.ccall("molfile_from_inchi", "number", ["string", "string"], [inchi, options]);
  const result = module.UTF8ToString(ptr);
  module._free(ptr);
  return JSON.parse(result);
}

Jmol.molfileFromAuxinfo = function(auxinfo, bDoNotAddH, bDiffUnkUndfStereo) {
  const ptr = module.ccall("molfile_from_auxinfo", "number", ["string", "number", "number"], [auxinfo, bDoNotAddH, bDiffUnkUndfStereo]);
  const result = module.UTF8ToString(ptr);
  module._free(ptr);
  return JSON.parse(result);
}

