(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.CDKConstants']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomTypeManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'configure$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomType',  function (atom, atomType) {
if (atomType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The IAtomType was null."]);
}if ("X".equals$O(atomType.getAtomTypeName$())) {
atom.setAtomTypeName$S("X");
return;
}atom.setAtomTypeName$S(atomType.getAtomTypeName$());
if (!(Clazz.instanceOf(atom, "org.openscience.cdk.interfaces.IPseudoAtom"))) {
atom.setSymbol$S(atomType.getSymbol$());
atom.setMaxBondOrder$org_openscience_cdk_interfaces_IBond_Order(atomType.getMaxBondOrder$());
atom.setBondOrderSum$Double(atomType.getBondOrderSum$());
atom.setCovalentRadius$Double(atomType.getCovalentRadius$());
atom.setValency$Integer(atomType.getValency$());
atom.setFormalCharge$Integer(atomType.getFormalCharge$());
atom.setHybridization$org_openscience_cdk_interfaces_IAtomType_Hybridization(atomType.getHybridization$());
atom.setFormalNeighbourCount$Integer(atomType.getFormalNeighbourCount$());
atom.setFlag$I$Z(512, atomType.getFlag$I(512));
atom.setFlag$I$Z(256, atomType.getFlag$I(256));
var constant=atomType.getProperty$O("cdk:Chemical Group");
if (constant != null ) {
atom.setProperty$O$O("cdk:Chemical Group", constant);
}if (atomType.getFlag$I(32)) atom.setFlag$I$Z(32, atomType.getFlag$I(32));
var color=atomType.getProperty$O("org.openscience.cdk.renderer.color");
if (color != null ) {
atom.setProperty$O$O("org.openscience.cdk.renderer.color", color);
}if (atomType.getAtomicNumber$() !== $I$(1).UNSET ) atom.setAtomicNumber$Integer(atomType.getAtomicNumber$());
if (atomType.getExactMass$() !== $I$(1).UNSET ) atom.setExactMass$Double(atomType.getExactMass$());
}}, 1);

Clazz.newMeth(C$, 'configureUnsetProperties$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomType',  function (atom, atomType) {
if (atomType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The IAtomType was null."]);
}if ("X".equals$O(atomType.getAtomTypeName$())) {
if (atom.getAtomTypeName$() == null ) atom.setAtomTypeName$S("X");
return;
}if (atom.getSymbol$() === $I$(1).UNSET  && atomType.getSymbol$() !== $I$(1).UNSET  ) atom.setSymbol$S(atomType.getSymbol$());
if (atom.getAtomTypeName$() === $I$(1).UNSET  && atomType.getAtomTypeName$() !== $I$(1).UNSET  ) atom.setAtomTypeName$S(atomType.getAtomTypeName$());
if (atom.getMaxBondOrder$() === $I$(1).UNSET  && atomType.getMaxBondOrder$() !== $I$(1).UNSET  ) atom.setMaxBondOrder$org_openscience_cdk_interfaces_IBond_Order(atomType.getMaxBondOrder$());
if (atom.getBondOrderSum$() === $I$(1).UNSET  && atomType.getBondOrderSum$() !== $I$(1).UNSET  ) atom.setBondOrderSum$Double(atomType.getBondOrderSum$());
if (atom.getCovalentRadius$() === $I$(1).UNSET  && atomType.getCovalentRadius$() !== $I$(1).UNSET  ) atom.setCovalentRadius$Double(atomType.getCovalentRadius$());
if (atom.getValency$() === $I$(1).UNSET  && atomType.getValency$() !== $I$(1).UNSET  ) atom.setValency$Integer(atomType.getValency$());
if (atom.getFormalCharge$() === $I$(1).UNSET  && atomType.getFormalCharge$() !== $I$(1).UNSET  ) atom.setFormalCharge$Integer(atomType.getFormalCharge$());
if (atom.getHybridization$() === $I$(1).UNSET  && atomType.getHybridization$() !== $I$(1).UNSET  ) atom.setHybridization$org_openscience_cdk_interfaces_IAtomType_Hybridization(atomType.getHybridization$());
if (atom.getFormalNeighbourCount$() === $I$(1).UNSET  && atomType.getFormalNeighbourCount$() !== $I$(1).UNSET  ) atom.setFormalNeighbourCount$Integer(atomType.getFormalNeighbourCount$());
if (atom.getAtomicNumber$() === $I$(1).UNSET  && atomType.getAtomicNumber$() !== $I$(1).UNSET  ) atom.setAtomicNumber$Integer(atomType.getAtomicNumber$());
if (atom.getExactMass$() === $I$(1).UNSET  && atomType.getExactMass$() !== $I$(1).UNSET  ) atom.setExactMass$Double(atomType.getExactMass$());
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
