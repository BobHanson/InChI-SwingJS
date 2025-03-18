INCHI_WEB_NAME = jnainchi
MODULE_NAME = jnainchiModule

ifndef C_COMPILER
	C_COMPILER   = emcc
endif
ifndef LINKER
	LINKER = emcc
endif
# BH InChI-SwingJS outputs to GitHub web page site, not this directory
ifndef OUTPUTDIR
	OUTPUTDIR = ../../docs/inchi
endif
INCHI_WEB_JS = $(OUTPUTDIR)/$(INCHI_WEB_NAME).js
INCHI_WEB_WASM = $(OUTPUTDIR)/$(INCHI_WEB_NAME).wasm
P_BASE = ../INCHI_BASE/src
P_DLL = ../INCHI_API/libinchi/src
P_API = ../INCHI_API/libinchi/src/ixa

P_INCL = -I$(P_DLL) -I$(P_API)  -I$(P_BASE)   
C_COMPILER_OPTIONS = $(P_INCL) -ansi -DCOMPILE_ANSI_ONLY -DTARGET_EXE_STANDALONE -O1 -c

EXPORTED_FUNCTIONS = _inchi_from_inchi,_model_from_inchi,_inchi_from_molfile,_inchikey_from_inchi,_molfile_from_inchi,_molfile_from_auxinfo,_malloc,_free,_CheckINCHI,_CheckINCHIKey,_Free_inchi_Input,_Free_std_inchi_Input,_FreeINCHI,_FreeStdINCHI,_FreeStructFromINCHI,_FreeStructFromINCHIEx,_FreeStructFromStdINCHI,_Get_inchi_Input_FromAuxInfo,_Get_std_inchi_Input_FromAuxInfo,_GetINCHI,_GetINCHIEx,_GetINCHIfromINCHI,_GetINCHIKeyFromINCHI,_GetStdINCHI,_GetStdINCHIKeyFromStdINCHI,_GetStructFromINCHI,_GetStructFromINCHIEx,_GetStructFromStdINCHI,_IXA_INCHIBUILDER_GetInChIVersion,_IXA_INCHIBUILDER_CheckOption,_IXA_INCHIBUILDER_CheckOption_Stereo,_IXA_INCHIBUILDER_Create,_IXA_INCHIBUILDER_Destroy,_IXA_INCHIBUILDER_GetAuxInfo,_IXA_INCHIBUILDER_GetInChI,_IXA_INCHIBUILDER_GetInChIEx,_IXA_INCHIBUILDER_GetLog,_IXA_INCHIBUILDER_SetMolecule,_IXA_INCHIBUILDER_SetOption,_IXA_INCHIBUILDER_SetOption_Stereo,_IXA_INCHIBUILDER_SetOption_Timeout,_IXA_INCHIBUILDER_SetOption_Timeout_MilliSeconds,_IXA_INCHIKEYBUILDER_Create,_IXA_INCHIKEYBUILDER_Destroy,_IXA_INCHIKEYBUILDER_GetInChIKey,_IXA_INCHIKEYBUILDER_SetInChI,_IXA_MOL_Clear,_IXA_MOL_Create,_IXA_MOL_CreateAtom,_IXA_MOL_CreateBond,_IXA_MOL_CreateStereoAntiRectangle,_IXA_MOL_CreateStereoRectangle,_IXA_MOL_CreateStereoTetrahedron,_IXA_MOL_Destroy,_IXA_MOL_GetAtomAtomicNumber,_IXA_MOL_GetAtomBond,_IXA_MOL_GetAtomCharge,_IXA_MOL_GetAtomElement,_IXA_MOL_GetAtomHydrogens,_IXA_MOL_GetAtomId,_IXA_MOL_GetAtomIndex,_IXA_MOL_GetAtomMass,_IXA_MOL_GetAtomNumBonds,_IXA_MOL_GetAtomRadical,_IXA_MOL_GetAtomX,_IXA_MOL_GetAtomY,_IXA_MOL_GetAtomZ,_IXA_MOL_GetBondAtom1,_IXA_MOL_GetBondAtom2,_IXA_MOL_GetBondId,_IXA_MOL_GetBondIndex,_IXA_MOL_GetBondOtherAtom,_IXA_MOL_GetBondType,_IXA_MOL_GetBondWedge,_IXA_MOL_GetChiral,_IXA_MOL_GetCommonBond,_IXA_MOL_GetDblBondConfig,_IXA_MOL_GetNumAtoms,_IXA_MOL_GetNumBonds,_IXA_MOL_GetNumStereos,_IXA_MOL_GetStereoCentralAtom,_IXA_MOL_GetStereoCentralBond,_IXA_MOL_GetStereoId,_IXA_MOL_GetStereoIndex,_IXA_MOL_GetStereoNumVertices,_IXA_MOL_GetStereoParity,_IXA_MOL_GetStereoTopology,_IXA_MOL_GetStereoVertex,_IXA_MOL_ReadInChI,_IXA_MOL_ReadMolfile,_IXA_MOL_ReadInChI,_IXA_MOL_ReadAuxInfo,_IXA_MOL_ReserveSpace,_IXA_MOL_SetAtomAtomicNumber,_IXA_MOL_SetAtomCharge,_IXA_MOL_SetAtomElement,_IXA_MOL_SetAtomHydrogens,_IXA_MOL_SetAtomMass,_IXA_MOL_SetAtomRadical,_IXA_MOL_SetAtomX,_IXA_MOL_SetAtomY,_IXA_MOL_SetAtomZ,_IXA_MOL_SetBondType,_IXA_MOL_SetBondWedge,_IXA_MOL_SetChiral,_IXA_MOL_SetDblBondConfig,_IXA_MOL_SetStereoParity,_IXA_STATUS_Clear,_IXA_STATUS_Create,_IXA_STATUS_Destroy,_IXA_STATUS_GetCount,_IXA_STATUS_GetMessage,_IXA_STATUS_GetSeverity,_IXA_STATUS_HasError,_IXA_STATUS_HasWarning,_MakeINCHIFromMolfileText,_jna_createMol,_jna_createMolTest,_jna_getMolAtomX,_jna_createMolTest2



EXPORTED_RUNTIME_METHODS = ccall,cwrap,writeArrayToMemory,setValue,getValue,UTF8ToString,stringToUTF8,lengthBytesUTF8

# BH had to remove -sSTACK_SIZE=1048576 second session I tried to make

LINKER_OPTIONS = -sEXPORTED_FUNCTIONS=$(EXPORTED_FUNCTIONS) -sEXPORTED_RUNTIME_METHODS=$(EXPORTED_RUNTIME_METHODS) -sEXPORT_NAME=$(MODULE_NAME) -sMODULARIZE -sENVIRONMENT=web 

# TODO:
# closure ...
# optimize ...

INCHI_OBJS = ichi_bns.o	\
ichi_io.o	\
ichicano.o	\
ichican2.o	\
ichicans.o	\
ichierr.o	\
ichiisot.o	\
ichimake.o	\
ichimak2.o	\
ichimap1.o	\
ichimap2.o	\
ichimap4.o	\
ichinorm.o	\
ichiprt1.o	\
ichiprt2.o	\
ichiprt3.o	\
ichiqueu.o	\
ichiring.o	\
ichisort.o	\
ichister.o	\
ichitaut.o	\
ichiparm.o	\
ichiread.o	\
ichirvr1.o	\
ichirvr2.o	\
ichirvr3.o	\
ichirvr4.o	\
ichirvr5.o	\
ichirvr6.o	\
ichirvr7.o	\
ikey_base26.o	\
ikey_dll.o	\
mol_fmt1.o	\
mol_fmt2.o	\
mol_fmt3.o	\
mol_fmt4.o	\
mol2atom.o	\
readinch.o	\
runichi.o	\
runichi2.o	\
runichi3.o	\
runichi4.o	\
sha2.o	\
strutil.o	\
util.o	\
ichilnct.o	\
inchi_dll.o	\
inchi_dll_a.o	\
inchi_dll_a2.o	\
inchi_dll_b.o	\
inchi_dll_main.o \
ixa_builder.o \
ixa_inchikey_builder.o \
ixa_mol.o \
ixa_read_inchi.o \
ixa_read_mol.o \
ixa_status.o \
inchi_web_jna.o

$(INCHI_WEB_JS): $(INCHI_OBJS)
	$(LINKER) $(LINKER_OPTIONS) -o $(INCHI_WEB_JS) $(INCHI_OBJS) -lm
%.o: $(P_BASE)/%.c
	$(C_COMPILER) $(C_COMPILER_OPTIONS) -DTARGET_API_LIB $<
%.o: $(P_API)/%.c
	$(C_COMPILER) $(C_COMPILER_OPTIONS) -DTARGET_API_LIB $<
%.o: $(P_DLL)/%.c
	$(C_COMPILER) $(C_COMPILER_OPTIONS) -DTARGET_API_LIB $<
%.o: %.c
	$(C_COMPILER) $(C_COMPILER_OPTIONS) $<
.PHONY: clean
clean:
	rm -f $(INCHI_WEB_JS) $(INCHI_WEB_WASM) $(INCHI_OBJS)
