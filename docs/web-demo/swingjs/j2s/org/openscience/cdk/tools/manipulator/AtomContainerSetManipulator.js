(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.graph.ConnectivityChecker','java.util.ArrayList','org.openscience.cdk.tools.manipulator.AtomContainerManipulator','org.openscience.cdk.tools.manipulator.AtomContainerComparator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomContainerSetManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAtomCount$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
var count=0;
for (var atomContainer, $atomContainer = set.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
count+=(atomContainer).getAtomCount$();
}
return count;
}, 1);

Clazz.newMeth(C$, 'getBondCount$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
var count=0;
for (var atomContainer, $atomContainer = set.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
count+=(atomContainer).getBondCount$();
}
return count;
}, 1);

Clazz.newMeth(C$, 'removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom',  function (set, atom) {
for (var atomContainer, $atomContainer = set.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
if (atomContainer.contains$org_openscience_cdk_interfaces_IAtom(atom)) {
atomContainer.removeAtom$org_openscience_cdk_interfaces_IAtom(atom);
var molecules=$I$(1).partitionIntoMolecules$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
if (molecules.getAtomContainerCount$() > 1) {
set.removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
for (var k=0; k < molecules.getAtomContainerCount$(); k++) {
set.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(molecules.getAtomContainer$I(k));
}
}return;
}}
}, 1);

Clazz.newMeth(C$, 'removeElectronContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IElectronContainer',  function (set, electrons) {
for (var atomContainer, $atomContainer = set.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
if (atomContainer.contains$org_openscience_cdk_interfaces_IElectronContainer(electrons)) {
atomContainer.removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer(electrons);
var molecules=$I$(1).partitionIntoMolecules$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
if (molecules.getAtomContainerCount$() > 1) {
set.removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
for (var k=0; k < molecules.getAtomContainerCount$(); k++) {
set.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(molecules.getAtomContainer$I(k));
}
}return;
}}
}, 1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
var atomContainerList=Clazz.new_($I$(2,1));
for (var atomContainer, $atomContainer = set.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
atomContainerList.add$O(atomContainer);
}
return atomContainerList;
}, 1);

Clazz.newMeth(C$, 'getTotalCharge$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
var charge=0;
for (var i=0; i < set.getAtomContainerCount$(); i++) {
var thisCharge=$I$(3,"getTotalFormalCharge$org_openscience_cdk_interfaces_IAtomContainer",[set.getAtomContainer$I(i)]);
var stoich=(set.getMultiplier$I(i)).valueOf();
charge+=stoich * thisCharge;
}
return charge;
}, 1);

Clazz.newMeth(C$, 'getTotalFormalCharge$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
var charge=0;
for (var i=0; i < set.getAtomContainerCount$(); i++) {
var thisCharge=$I$(3,"getTotalFormalCharge$org_openscience_cdk_interfaces_IAtomContainer",[set.getAtomContainer$I(i)]);
var stoich=(set.getMultiplier$I(i)).valueOf();
charge=(charge+(stoich * thisCharge)|0);
}
return charge;
}, 1);

Clazz.newMeth(C$, 'getTotalHydrogenCount$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
var hCount=0;
for (var i=0; i < set.getAtomContainerCount$(); i++) {
hCount+=$I$(3,"getTotalHydrogenCount$org_openscience_cdk_interfaces_IAtomContainer",[set.getAtomContainer$I(i)]);
}
return hCount;
}, 1);

Clazz.newMeth(C$, 'getAllIDs$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
var idList=Clazz.new_($I$(2,1));
if (set != null ) {
if (set.getID$() != null ) idList.add$O(set.getID$());
for (var i=0; i < set.getAtomContainerCount$(); i++) {
idList.addAll$java_util_Collection($I$(3,"getAllIDs$org_openscience_cdk_interfaces_IAtomContainer",[set.getAtomContainer$I(i)]));
}
}return idList;
}, 1);

Clazz.newMeth(C$, 'setAtomProperties$org_openscience_cdk_interfaces_IAtomContainerSet$O$O',  function (set, propKey, propVal) {
if (set != null ) {
for (var i=0; i < set.getAtomContainerCount$(); i++) {
$I$(3,"setAtomProperties$org_openscience_cdk_interfaces_IAtomContainer$O$O",[set.getAtomContainer$I(i), propKey, propVal]);
}
}}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom',  function (containerSet, atom) {
for (var atomContainer, $atomContainer = containerSet.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
if (atomContainer.contains$org_openscience_cdk_interfaces_IAtom(atom)) {
return atomContainer;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IBond',  function (containerSet, bond) {
for (var atomContainer, $atomContainer = containerSet.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
if (atomContainer.contains$org_openscience_cdk_interfaces_IBond(bond)) {
return atomContainer;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getAllChemObjects$org_openscience_cdk_interfaces_IAtomContainerSet',  function (set) {
var list=Clazz.new_($I$(2,1));
list.add$O(set);
for (var atomContainer, $atomContainer = set.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
list.add$O(atomContainer);
}
return list;
}, 1);

Clazz.newMeth(C$, 'sort$org_openscience_cdk_interfaces_IAtomContainerSet',  function (atomContainerSet) {
var atomContainerList=C$.getAllAtomContainers$org_openscience_cdk_interfaces_IAtomContainerSet(atomContainerSet);
atomContainerList.sort$java_util_Comparator(Clazz.new_($I$(4,1)));
atomContainerSet.removeAllAtomContainers$();
for (var anAtomContainerList, $anAtomContainerList = atomContainerList.iterator$(); $anAtomContainerList.hasNext$()&&((anAtomContainerList=($anAtomContainerList.next$())),1);) atomContainerSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(anAtomContainerList);

}, 1);

Clazz.newMeth(C$, 'containsByID$org_openscience_cdk_interfaces_IAtomContainerSet$S',  function (atomContainerSet, id) {
for (var ac, $ac = atomContainerSet.atomContainers$().iterator$(); $ac.hasNext$()&&((ac=($ac.next$())),1);) {
if (ac.getID$() != null  && ac.getID$().equals$O(id) ) return true;
}
return false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
