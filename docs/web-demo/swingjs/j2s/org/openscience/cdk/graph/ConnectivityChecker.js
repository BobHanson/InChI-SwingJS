(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'org.openscience.cdk.graph.ConnectedComponents','org.openscience.cdk.graph.GraphUtil','org.openscience.cdk.interfaces.IAtomContainerSet','java.util.ArrayList','org.openscience.cdk.interfaces.IAtomContainer','java.util.HashMap','org.openscience.cdk.tools.manipulator.SgroupManipulator','java.util.HashSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConnectivityChecker");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isConnected$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
if (atomContainer.getAtomCount$() < 2) return true;
var cc=Clazz.new_([$I$(2).toAdjList$org_openscience_cdk_interfaces_IAtomContainer(atomContainer)],$I$(1,1).c$$IAA);
return cc.nComponents$() == 1;
}, 1);

Clazz.newMeth(C$, 'partitionIntoMolecules$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var cc=Clazz.new_([$I$(2).toAdjList$org_openscience_cdk_interfaces_IAtomContainer(container)],$I$(1,1).c$$IAA);
if (cc.nComponents$() == 1) {
return C$.singleton$org_openscience_cdk_interfaces_IAtomContainer(container);
}return C$.partitionIntoMolecules$org_openscience_cdk_interfaces_IAtomContainer$IA(container, cc.components$());
}, 1);

Clazz.newMeth(C$, 'singleton$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var bldr=container.getBuilder$();
var acSet=bldr.newInstance$Class$OA(Clazz.getClass($I$(3),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
acSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(container);
return acSet;
}, 1);

Clazz.newMeth(C$, 'empty$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var bldr=container.getBuilder$();
return bldr.newInstance$Class$OA(Clazz.getClass($I$(3),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
}, 1);

Clazz.newMeth(C$, 'getComponent$java_util_Map$org_openscience_cdk_interfaces_IChemObject',  function (cmap, cobj) {
if (Clazz.instanceOf(cobj, "org.openscience.cdk.interfaces.IAtom")) return cmap.get$O(cobj);
 else if (Clazz.instanceOf(cobj, "org.openscience.cdk.interfaces.IBond")) {
var begMol=cmap.get$O((cobj).getBegin$());
var endMol=cmap.get$O((cobj).getEnd$());
return begMol === endMol  ? begMol : null;
}return null;
}, 1);

Clazz.newMeth(C$, 'getComponent$java_util_Map$org_openscience_cdk_interfaces_IStereoElement',  function (cmap, se) {
var mol=C$.getComponent$java_util_Map$org_openscience_cdk_interfaces_IChemObject(cmap, se.getFocus$());
for (var cobj, $cobj = se.getCarriers$().iterator$(); $cobj.hasNext$()&&((cobj=($cobj.next$())),1);) {
var tmp=C$.getComponent$java_util_Map$org_openscience_cdk_interfaces_IChemObject(cmap, cobj);
if (tmp !== mol ) return null;
}
return mol;
}, 1);

Clazz.newMeth(C$, 'getComponent$java_util_Map$org_openscience_cdk_sgroup_Sgroup',  function (cmap, sgroup) {
var mol=null;
for (var atom, $atom = sgroup.getAtoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var tmp=cmap.get$O(atom);
if (mol == null ) mol=tmp;
 else if (mol !== tmp ) return null;
}
return mol;
}, 1);

Clazz.newMeth(C$, 'addSgroup$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_sgroup_Sgroup',  function (component, sgroup) {
var sgroups=component.getProperty$O("cdk:CtabSgroups");
if (sgroups == null ) {
sgroups=Clazz.new_($I$(4,1));
component.setProperty$O$O("cdk:CtabSgroups", sgroups);
}sgroups.add$O(sgroup);
}, 1);

Clazz.newMeth(C$, 'partitionIntoMolecules$org_openscience_cdk_interfaces_IAtomContainer$IA',  function (container, components) {
var minComponentIndex=2147483647;
var maxComponentIndex=0;
for (var component, $component = 0, $$component = components; $component<$$component.length&&((component=($$component[$component])),1);$component++) {
minComponentIndex=Math.min(component, minComponentIndex);
maxComponentIndex=Math.max(component, maxComponentIndex);
}
if (minComponentIndex == maxComponentIndex) {
if (maxComponentIndex == 0) return C$.empty$org_openscience_cdk_interfaces_IAtomContainer(container);
 else return C$.singleton$org_openscience_cdk_interfaces_IAtomContainer(container);
}var containers=Clazz.array($I$(5), [maxComponentIndex + 1]);
var componentsMap=Clazz.new_([2 * container.getAtomCount$()],$I$(6,1).c$$I);
for (var i=1; i < containers.length; i++) containers[i]=container.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(5),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));

var containerSet=container.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(3),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
for (var i=0; i < container.getAtomCount$(); i++) {
var origAtom=container.getAtom$I(i);
var newContainer=containers[components[i]];
componentsMap.put$O$O(origAtom, newContainer);
newContainer.addAtom$org_openscience_cdk_interfaces_IAtom(origAtom);
}
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var begComp=componentsMap.get$O(bond.getBegin$());
var endComp=componentsMap.get$O(bond.getEnd$());
if (begComp === endComp ) {
begComp.addBond$org_openscience_cdk_interfaces_IBond(bond);
}}
for (var electron, $electron = container.singleElectrons$().iterator$(); $electron.hasNext$()&&((electron=($electron.next$())),1);) componentsMap.get$O(electron.getAtom$()).addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron(electron);

for (var lonePair, $lonePair = container.lonePairs$().iterator$(); $lonePair.hasNext$()&&((lonePair=($lonePair.next$())),1);) componentsMap.get$O(lonePair.getAtom$()).addLonePair$org_openscience_cdk_interfaces_ILonePair(lonePair);

for (var stereo, $stereo = container.stereoElements$().iterator$(); $stereo.hasNext$()&&((stereo=($stereo.next$())),1);) {
var component=C$.getComponent$java_util_Map$org_openscience_cdk_interfaces_IStereoElement(componentsMap, stereo);
if (component != null ) component.addStereoElement$org_openscience_cdk_interfaces_IStereoElement(stereo);
}
var sgroups=$I$(7,"copy$java_util_Collection$java_util_Map",[container.getProperty$O("cdk:CtabSgroups"), Clazz.new_($I$(6,1))]);
if (sgroups != null ) {
var sgroupMap=Clazz.new_($I$(6,1));
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) {
var component=C$.getComponent$java_util_Map$org_openscience_cdk_sgroup_Sgroup(componentsMap, sgroup);
if (component != null ) {
C$.addSgroup$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_sgroup_Sgroup(component, sgroup);
}}
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) {
var toremove=Clazz.new_($I$(8,1));
for (var parent, $parent = sgroup.getParents$().iterator$(); $parent.hasNext$()&&((parent=($parent.next$())),1);) {
if (sgroupMap.get$O(parent) == null ) toremove.add$O(parent);
}
sgroup.removeParents$java_util_Collection(toremove);
}
}for (var i=1; i < containers.length; i++) containerSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(containers[i]);

return containerSet;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
