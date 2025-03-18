(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.tools.manipulator.MoleculeSetManipulator','org.openscience.cdk.tools.manipulator.ReactionSetManipulator','org.openscience.cdk.interfaces.IAtomContainer','org.openscience.cdk.interfaces.IAtomContainerSet','org.openscience.cdk.interfaces.IChemModel','org.openscience.cdk.tools.manipulator.AtomContainerSetManipulator','java.util.ArrayList','org.openscience.cdk.tools.manipulator.AtomContainerManipulator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChemModelManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAtomCount$org_openscience_cdk_interfaces_IChemModel',  function (chemModel) {
var count=0;
var crystal=chemModel.getCrystal$();
if (crystal != null ) {
count+=crystal.getAtomCount$();
}var moleculeSet=chemModel.getMoleculeSet$();
if (moleculeSet != null ) {
count+=$I$(1).getAtomCount$org_openscience_cdk_interfaces_IAtomContainerSet(moleculeSet);
}var reactionSet=chemModel.getReactionSet$();
if (reactionSet != null ) {
count+=$I$(2).getAtomCount$org_openscience_cdk_interfaces_IReactionSet(reactionSet);
}return count;
}, 1);

Clazz.newMeth(C$, 'getBondCount$org_openscience_cdk_interfaces_IChemModel',  function (chemModel) {
var count=0;
var crystal=chemModel.getCrystal$();
if (crystal != null ) {
count+=crystal.getBondCount$();
}var moleculeSet=chemModel.getMoleculeSet$();
if (moleculeSet != null ) {
count+=$I$(1).getBondCount$org_openscience_cdk_interfaces_IAtomContainerSet(moleculeSet);
}var reactionSet=chemModel.getReactionSet$();
if (reactionSet != null ) {
count+=$I$(2).getBondCount$org_openscience_cdk_interfaces_IReactionSet(reactionSet);
}return count;
}, 1);

Clazz.newMeth(C$, 'removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IChemModel$org_openscience_cdk_interfaces_IAtom',  function (chemModel, atom) {
var crystal=chemModel.getCrystal$();
if (crystal != null ) {
if (crystal.contains$org_openscience_cdk_interfaces_IAtom(atom)) {
crystal.removeAtom$org_openscience_cdk_interfaces_IAtom(atom);
}return;
}var moleculeSet=chemModel.getMoleculeSet$();
if (moleculeSet != null ) {
$I$(1).removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom(moleculeSet, atom);
}var reactionSet=chemModel.getReactionSet$();
if (reactionSet != null ) {
$I$(2).removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtom(reactionSet, atom);
}}, 1);

Clazz.newMeth(C$, 'removeElectronContainer$org_openscience_cdk_interfaces_IChemModel$org_openscience_cdk_interfaces_IElectronContainer',  function (chemModel, electrons) {
var crystal=chemModel.getCrystal$();
if (crystal != null ) {
if (crystal.contains$org_openscience_cdk_interfaces_IElectronContainer(electrons)) {
crystal.removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer(electrons);
}return;
}var moleculeSet=chemModel.getMoleculeSet$();
if (moleculeSet != null ) {
$I$(1).removeElectronContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IElectronContainer(moleculeSet, electrons);
}var reactionSet=chemModel.getReactionSet$();
if (reactionSet != null ) {
$I$(2).removeElectronContainer$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IElectronContainer(reactionSet, electrons);
}}, 1);

Clazz.newMeth(C$, 'createNewMolecule$org_openscience_cdk_interfaces_IChemModel',  function (chemModel) {
var molecule=chemModel.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(3),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
if (chemModel.getMoleculeSet$() != null ) {
var moleculeSet=chemModel.getMoleculeSet$();
for (var i=0; i < moleculeSet.getAtomContainerCount$(); i++) {
if (moleculeSet.getAtomContainer$I(i).getAtomCount$() == 0) {
moleculeSet.removeAtomContainer$I(i);
--i;
}}
moleculeSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(molecule);
} else {
var moleculeSet=chemModel.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(4),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
moleculeSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(molecule);
chemModel.setMoleculeSet$org_openscience_cdk_interfaces_IAtomContainerSet(moleculeSet);
}return molecule;
}, 1);

Clazz.newMeth(C$, 'newChemModel$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var model=atomContainer.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(5),['getCrystal$','getMoleculeSet$','getReactionSet$','getRingSet$','isEmpty$','setCrystal$org_openscience_cdk_interfaces_ICrystal','setMoleculeSet$org_openscience_cdk_interfaces_IAtomContainerSet','setReactionSet$org_openscience_cdk_interfaces_IReactionSet','setRingSet$org_openscience_cdk_interfaces_IRingSet']), Clazz.array(java.lang.Object, -1, []));
var moleculeSet=model.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(4),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
moleculeSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
model.setMoleculeSet$org_openscience_cdk_interfaces_IAtomContainerSet(moleculeSet);
return model;
}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IChemModel$org_openscience_cdk_interfaces_IAtom',  function (chemModel, atom) {
var result;
if (chemModel.getMoleculeSet$() != null ) {
var moleculeSet=chemModel.getMoleculeSet$();
result=$I$(1).getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom(moleculeSet, atom);
if (result != null ) {
return result;
}}if (chemModel.getReactionSet$() != null ) {
var reactionSet=chemModel.getReactionSet$();
return $I$(2).getRelevantAtomContainer$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtom(reactionSet, atom);
}if (chemModel.getCrystal$() != null  && chemModel.getCrystal$().contains$org_openscience_cdk_interfaces_IAtom(atom) ) {
return chemModel.getCrystal$();
}if (chemModel.getRingSet$() != null ) {
return $I$(6,"getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom",[chemModel.getRingSet$(), atom]);
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The provided atom is not part of this IChemModel."]);
}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IChemModel$org_openscience_cdk_interfaces_IBond',  function (chemModel, bond) {
var result;
if (chemModel.getMoleculeSet$() != null ) {
var moleculeSet=chemModel.getMoleculeSet$();
result=$I$(1).getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IBond(moleculeSet, bond);
if (result != null ) {
return result;
}}if (chemModel.getReactionSet$() != null ) {
var reactionSet=chemModel.getReactionSet$();
return $I$(2).getRelevantAtomContainer$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IBond(reactionSet, bond);
}return null;
}, 1);

Clazz.newMeth(C$, 'getRelevantReaction$org_openscience_cdk_interfaces_IChemModel$org_openscience_cdk_interfaces_IAtom',  function (chemModel, atom) {
var reaction=null;
if (chemModel.getReactionSet$() != null ) {
var reactionSet=chemModel.getReactionSet$();
reaction=$I$(2).getRelevantReaction$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtom(reactionSet, atom);
}return reaction;
}, 1);

Clazz.newMeth(C$, 'addAll$java_util_List$org_openscience_cdk_interfaces_IAtomContainerSet',  function (acList, acSet) {
for (var ac, $ac = acSet.atomContainers$().iterator$(); $ac.hasNext$()&&((ac=($ac.next$())),1);) acList.add$O(ac);

}, 1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IChemModel',  function (chemModel) {
var res=Clazz.new_($I$(7,1));
if (chemModel.getMoleculeSet$() != null ) {
C$.addAll$java_util_List$org_openscience_cdk_interfaces_IAtomContainerSet(res, chemModel.getMoleculeSet$());
}if (chemModel.getReactionSet$() != null ) {
C$.addAll$java_util_List$org_openscience_cdk_interfaces_IAtomContainerSet(res, $I$(2,"getAllMolecules$org_openscience_cdk_interfaces_IReactionSet",[chemModel.getReactionSet$()]));
}return res;
}, 1);

Clazz.newMeth(C$, 'setAtomProperties$org_openscience_cdk_interfaces_IChemModel$O$O',  function (chemModel, propKey, propVal) {
if (chemModel.getMoleculeSet$() != null ) {
$I$(1,"setAtomProperties$org_openscience_cdk_interfaces_IAtomContainerSet$O$O",[chemModel.getMoleculeSet$(), propKey, propVal]);
}if (chemModel.getReactionSet$() != null ) {
$I$(2,"setAtomProperties$org_openscience_cdk_interfaces_IReactionSet$O$O",[chemModel.getReactionSet$(), propKey, propVal]);
}if (chemModel.getCrystal$() != null ) {
$I$(8,"setAtomProperties$org_openscience_cdk_interfaces_IAtomContainer$O$O",[chemModel.getCrystal$(), propKey, propVal]);
}}, 1);

Clazz.newMeth(C$, 'getAllChemObjects$org_openscience_cdk_interfaces_IChemModel',  function (chemModel) {
var list=Clazz.new_($I$(7,1));
var crystal=chemModel.getCrystal$();
if (crystal != null ) {
list.add$O(crystal);
}var moleculeSet=chemModel.getMoleculeSet$();
if (moleculeSet != null ) {
list.add$O(moleculeSet);
var current=$I$(1).getAllChemObjects$org_openscience_cdk_interfaces_IAtomContainerSet(moleculeSet);
for (var chemObject, $chemObject = current.iterator$(); $chemObject.hasNext$()&&((chemObject=($chemObject.next$())),1);) {
if (!list.contains$O(chemObject)) list.add$O(chemObject);
}
}var reactionSet=chemModel.getReactionSet$();
if (reactionSet != null ) {
list.add$O(reactionSet);
var current=$I$(2).getAllChemObjects$org_openscience_cdk_interfaces_IReactionSet(reactionSet);
for (var chemObject, $chemObject = current.iterator$(); $chemObject.hasNext$()&&((chemObject=($chemObject.next$())),1);) {
if (!list.contains$O(chemObject)) list.add$O(chemObject);
}
}return list;
}, 1);

Clazz.newMeth(C$, 'getAllIDs$org_openscience_cdk_interfaces_IChemModel',  function (chemModel) {
var list=Clazz.new_($I$(7,1));
if (chemModel.getID$() != null ) list.add$O(chemModel.getID$());
var crystal=chemModel.getCrystal$();
if (crystal != null ) {
list.addAll$java_util_Collection($I$(8).getAllIDs$org_openscience_cdk_interfaces_IAtomContainer(crystal));
}var moleculeSet=chemModel.getMoleculeSet$();
if (moleculeSet != null ) {
list.addAll$java_util_Collection($I$(1).getAllIDs$org_openscience_cdk_interfaces_IAtomContainerSet(moleculeSet));
}var reactionSet=chemModel.getReactionSet$();
if (reactionSet != null ) {
list.addAll$java_util_Collection($I$(2).getAllIDs$org_openscience_cdk_interfaces_IReactionSet(reactionSet));
}return list;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
