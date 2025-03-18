(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,['org.openscience.cdk.interfaces.IBond','.Order'],'org.openscience.cdk.interfaces.IAtom','org.openscience.cdk.interfaces.IBond']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AminoAcidManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'removeAcidicOxygen$org_openscience_cdk_interfaces_IAminoAcid',  function (acid) {
if (acid.getCTerminus$() == null ) throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.CDKException').c$$S,["Cannot remove oxygen: C-terminus is not defined!"]);
var bonds=acid.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(acid.getCTerminus$());
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.getOrder$() === $I$(1).SINGLE ) {
for (var j=0; j < bond.getAtomCount$(); j++) {
if ((bond.getAtom$I(j).getAtomicNumber$()).$c() === 8 ) {
acid.removeAtom$org_openscience_cdk_interfaces_IAtom(bond.getAtom$I(j));
}}
}}
}, 1);

Clazz.newMeth(C$, 'addAcidicOxygen$org_openscience_cdk_interfaces_IAminoAcid',  function (acid) {
if (acid.getCTerminus$() == null ) throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.CDKException').c$$S,["Cannot add oxygen: C-terminus is not defined!"]);
var acidicOxygen=acid.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['bonds$','clone$','getBond$org_openscience_cdk_interfaces_IAtom','getBondCount$','getCharge$','getContainer$','getFractionalPoint3d$','getImplicitHydrogenCount$','getIndex$','getMapIdx$','getPoint2d$','getPoint3d$','getStereoParity$','getTotalHydrogenCount$','isAromatic$','isInRing$','neighbors$','setCharge$Double','setFractionalPoint3d$javax_vecmath_Point3d','setImplicitHydrogenCount$Integer','setIsAromatic$Z','setIsInRing$Z','setMapIdx$I','setPoint2d$javax_vecmath_Point2d','setPoint3d$javax_vecmath_Point3d','setStereoParity$Integer']), Clazz.array(java.lang.Object, -1, ["O"]));
acid.addAtom$org_openscience_cdk_interfaces_IAtom(acidicOxygen);
acid.addBond$org_openscience_cdk_interfaces_IBond(acid.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(3),['atoms$','clone$','compare$O','contains$org_openscience_cdk_interfaces_IAtom','get2DCenter$','get3DCenter$','getAtom$I','getAtomCount$','getBegin$','getConnectedAtom$org_openscience_cdk_interfaces_IAtom','getConnectedAtom$org_openscience_cdk_interfaces_IBond','getConnectedAtoms$org_openscience_cdk_interfaces_IAtom','getContainer$','getDisplay$','getEnd$','getIndex$','getOrder$','getOther$org_openscience_cdk_interfaces_IAtom','getStereo$','isAromatic$','isConnectedTo$org_openscience_cdk_interfaces_IBond','isInRing$','setAtom$org_openscience_cdk_interfaces_IAtom$I','setAtoms$org_openscience_cdk_interfaces_IAtomA','setDisplay$org_openscience_cdk_interfaces_IBond_Display','setIsAromatic$Z','setIsInRing$Z','setOrder$org_openscience_cdk_interfaces_IBond_Order','setStereo$org_openscience_cdk_interfaces_IBond_Stereo']), Clazz.array(java.lang.Object, -1, [acid.getCTerminus$(), acidicOxygen, $I$(1).SINGLE])));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
