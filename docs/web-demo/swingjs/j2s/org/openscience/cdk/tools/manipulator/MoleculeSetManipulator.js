(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.tools.manipulator.AtomContainerSetManipulator','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MoleculeSetManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAtomCount$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
return $I$(1).getAtomCount$org_openscience_cdk_interfaces_IAtomContainerSet(set);
}, 1);

Clazz.newMeth(C$, 'getBondCount$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
return $I$(1).getBondCount$org_openscience_cdk_interfaces_IAtomContainerSet(set);
}, 1);

Clazz.newMeth(C$, 'removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom',  function (set, atom) {
$I$(1).removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom(set, atom);
}, 1);

Clazz.newMeth(C$, 'removeElectronContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IElectronContainer',  function (set, electrons) {
$I$(1).removeElectronContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IElectronContainer(set, electrons);
}, 1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
return $I$(1).getAllAtomContainers$org_openscience_cdk_interfaces_IAtomContainerSet(set);
}, 1);

Clazz.newMeth(C$, 'getTotalCharge$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
return $I$(1).getTotalCharge$org_openscience_cdk_interfaces_IAtomContainerSet(set);
}, 1);

Clazz.newMeth(C$, 'getTotalFormalCharge$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
return $I$(1).getTotalFormalCharge$org_openscience_cdk_interfaces_IAtomContainerSet(set);
}, 1);

Clazz.newMeth(C$, 'getTotalHydrogenCount$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
return $I$(1).getTotalHydrogenCount$org_openscience_cdk_interfaces_IAtomContainerSet(set);
}, 1);

Clazz.newMeth(C$, 'getAllIDs$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
var list=Clazz.new_($I$(2,1));
list.addAll$java_util_Collection($I$(1).getAllIDs$org_openscience_cdk_interfaces_IAtomContainerSet(set));
return list;
}, 1);

Clazz.newMeth(C$, 'setAtomProperties$org_openscience_cdk_interfaces_IAtomContainerSet$O$O',  function (set, propKey, propVal) {
$I$(1).setAtomProperties$org_openscience_cdk_interfaces_IAtomContainerSet$O$O(set, propKey, propVal);
}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom',  function (moleculeSet, atom) {
return $I$(1).getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom(moleculeSet, atom);
}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IBond',  function (moleculeSet, bond) {
return $I$(1).getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IBond(moleculeSet, bond);
}, 1);

Clazz.newMeth(C$, 'getAllChemObjects$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
return $I$(1).getAllChemObjects$org_openscience_cdk_interfaces_IAtomContainerSet(set);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
