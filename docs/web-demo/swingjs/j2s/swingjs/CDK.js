(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'io.github.dan2097.jnainchi.InchiAPI','org.openscience.cdk.inchi.InChIToStructure','org.openscience.cdk.DefaultChemObjectBuilder','org.openscience.cdk.inchi.InChIGeneratorFactory','org.openscience.cdk.tools.manipulator.AtomContainerManipulator','org.openscience.cdk.layout.StructureDiagramGenerator','java.io.ByteArrayOutputStream','org.openscience.cdk.io.MDLV2000Writer','org.openscience.cdk.depict.DepictionGenerator','javax.imageio.ImageIO','java.util.Base64','org.openscience.cdk.tools.LoggingToolFactory','swingjs.SwingJSLogger','io.github.dan2097.jnainchi.inchi.InchiLibrary']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CDK");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['get2DMolFromInChI$S','get2DMolFromInChI'],  function (inchi) {
try {
var mol=C$.getCDKMoleculeFromInChI$S(inchi);
return C$.get2DMolFromCDKMolecule$org_openscience_cdk_interfaces_IAtomContainer(mol);
} catch (e) {
return null;
}
}, 1);

Clazz.newMeth(C$, ['getDataURIFromInChI$S','getDataURIFromInChI'],  function (inchi) {
return C$.getDataURIFromCDKMolecule$org_openscience_cdk_interfaces_IAtomContainer(C$.getCDKMoleculeFromInChI$S(inchi));
}, 1);

Clazz.newMeth(C$, ['getInchiInputFromMoleculeHandle$com_sun_jna_Pointer$com_sun_jna_Pointer$S','getInchiInputFromMoleculeHandle'],  function (hStatus, hMolecule, moreOptions) {
return $I$(1).getInchiInputFromMoleculeHandle$com_sun_jna_Pointer$com_sun_jna_Pointer$S(hStatus, hMolecule, moreOptions);
}, 1);

Clazz.newMeth(C$, ['getCDKMoleculeFromInchiInput$io_github_dan2097_jnainchi_InchiInput','getCDKMoleculeFromInchiInput'],  function (input) {
return ((P$.CDK$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CDK$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('org.openscience.cdk.inchi.InChIToStructure'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
})()
), Clazz.new_([this, null, input, $I$(3).getInstance$()],$I$(2,1).c$$io_github_dan2097_jnainchi_InchiInput$org_openscience_cdk_interfaces_IChemObjectBuilder,P$.CDK$1)).getAtomContainer$();
}, 1);

Clazz.newMeth(C$, ['getCDKMoleculeFromInChI$S','getCDKMoleculeFromInChI'],  function (inchi) {
var builder=$I$(3).getInstance$();
var mol=$I$(4).getInstance$().getInChIToStructure$S$org_openscience_cdk_interfaces_IChemObjectBuilder$S(inchi, builder, "").getAtomContainer$();
mol=$I$(5).suppressHydrogens$org_openscience_cdk_interfaces_IAtomContainer(mol);
Clazz.new_($I$(6,1)).generateCoordinates$org_openscience_cdk_interfaces_IAtomContainer(mol);
return mol;
}, 1);

Clazz.newMeth(C$, ['get2DMolFromCDKMolecule$org_openscience_cdk_interfaces_IAtomContainer','get2DMolFromCDKMolecule'],  function (mol) {
var os=Clazz.new_($I$(7,1));
Clazz.new_($I$(8,1).c$$java_io_OutputStream,[os]).write$org_openscience_cdk_interfaces_IChemObject(mol);
var molfile= String.instantialize(os.toByteArray$());
os.close$();
return molfile;
}, 1);

Clazz.newMeth(C$, ['getDataURIFromCDKMolecule$org_openscience_cdk_interfaces_IAtomContainer','getDataURIFromCDKMolecule'],  function (mol) {
var dg=null;
try {
var os=Clazz.new_($I$(7,1));
try {
dg=Clazz.new_($I$(9,1));
var image=dg.depict$org_openscience_cdk_interfaces_IAtomContainer(mol).toImg$();
$I$(10).write$java_awt_image_RenderedImage$S$java_io_OutputStream(image, "PNG", os);
var bytes=$I$(11).getEncoder$().encode$BA(os.toByteArray$());
return "data:image/png;base64," +  String.instantialize(bytes);

}finally{/*res*/os&&os.close$&&os.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
e.printStackTrace$();
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, ['suppressHydrogens$org_openscience_cdk_interfaces_IAtomContainer','suppressHydrogens'],  function (mol) {
return $I$(5).suppressHydrogens$org_openscience_cdk_interfaces_IAtomContainer(mol);
}, 1);

Clazz.newMeth(C$, 'main$SA',  function (args) {
$I$(12,"setLoggingToolClass$Class",[Clazz.getClass($I$(13))]);
Clazz.getClass($I$(14)).getName$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-16 22:18:50 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
