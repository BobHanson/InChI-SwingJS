(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.interfaces.IAtomContainer','java.util.ArrayList','org.openscience.cdk.tools.manipulator.RingSizeComparator','org.openscience.cdk.tools.manipulator.RingManipulator']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RingSetManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAtomCount$org_openscience_cdk_interfaces_IRingSet',  function (set) {
var count=0;
for (var atomContainer, $atomContainer = set.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
count+=atomContainer.getAtomCount$();
}
return count;
}, 1);

Clazz.newMeth(C$, 'getAllInOneContainer$org_openscience_cdk_interfaces_IRingSet',  function (ringSet) {
var resultContainer=ringSet.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(1),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
for (var container, $container = C$.getAllAtomContainers$org_openscience_cdk_interfaces_IRingSet(ringSet).iterator$(); $container.hasNext$()&&((container=($container.next$())),1);) {
resultContainer.add$org_openscience_cdk_interfaces_IAtomContainer(container);
}
return resultContainer;
}, 1);

Clazz.newMeth(C$, 'getLargestRingSet$java_util_List',  function (ringSystems) {
var largestRingSet=null;
var atomNumber=0;
var container;
for (var ringSystem, $ringSystem = ringSystems.iterator$(); $ringSystem.hasNext$()&&((ringSystem=($ringSystem.next$())),1);) {
container=C$.getAllInOneContainer$org_openscience_cdk_interfaces_IRingSet(ringSystem);
if (atomNumber < container.getAtomCount$()) {
atomNumber=container.getAtomCount$();
largestRingSet=ringSystem;
}}
return largestRingSet;
}, 1);

Clazz.newMeth(C$, 'getBondCount$org_openscience_cdk_interfaces_IRingSet',  function (set) {
var count=0;
for (var atomContainer, $atomContainer = set.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
count+=atomContainer.getBondCount$();
}
return count;
}, 1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IRingSet',  function (set) {
var atomContainerList=Clazz.new_($I$(2,1));
for (var atomContainer, $atomContainer = set.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
atomContainerList.add$O(atomContainer);
}
return atomContainerList;
}, 1);

Clazz.newMeth(C$, 'sort$org_openscience_cdk_interfaces_IRingSet',  function (ringSet) {
var ringList=Clazz.new_($I$(2,1));
for (var atomContainer, $atomContainer = ringSet.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
ringList.add$O(atomContainer);
}
ringList.sort$java_util_Comparator(Clazz.new_($I$(3,1).c$$I,[2]));
ringSet.removeAllAtomContainers$();
for (var aRingList, $aRingList = ringList.iterator$(); $aRingList.hasNext$()&&((aRingList=($aRingList.next$())),1);) ringSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(aRingList);

}, 1);

Clazz.newMeth(C$, 'getHeaviestRing$org_openscience_cdk_interfaces_IRingSet$org_openscience_cdk_interfaces_IBond',  function (ringSet, bond) {
var rings=ringSet.getRings$org_openscience_cdk_interfaces_IBond(bond);
var ring=null;
var maxOrderSum=0;
for (var ring1, $ring1 = rings.atomContainers$().iterator$(); $ring1.hasNext$()&&((ring1=($ring1.next$())),1);) {
if (maxOrderSum < (ring1).getBondOrderSum$()) {
ring=ring1;
maxOrderSum=ring.getBondOrderSum$();
}}
return ring;
}, 1);

Clazz.newMeth(C$, 'getMostComplexRing$org_openscience_cdk_interfaces_IRingSet',  function (ringSet) {
var neighbors=Clazz.array(Integer.TYPE, [ringSet.getAtomContainerCount$()]);
var ring1;
var ring2;
var atom1;
var atom2;
var mostComplex=0;
var mostComplexPosition=0;
for (var i=0; i < ringSet.getAtomContainerCount$(); i++) {
ring1=ringSet.getAtomContainer$I(i);
for (var j=0; j < ring1.getAtomCount$(); j++) {
atom1=ring1.getAtom$I(j);
for (var k=i + 1; k < ringSet.getAtomContainerCount$(); k++) {
ring2=ringSet.getAtomContainer$I(k);
if (ring1 !== ring2 ) {
for (var l=0; l < ring2.getAtomCount$(); l++) {
atom2=ring2.getAtom$I(l);
if (atom1.equals$O(atom2)) {
++neighbors[i];
++neighbors[k];
break;
}}
}}
}
}
for (var i=0; i < neighbors.length; i++) {
if (neighbors[i] >= mostComplex) {
mostComplex=neighbors[i];
mostComplexPosition=i;
}}
return ringSet.getAtomContainer$I(mostComplexPosition);
}, 1);

Clazz.newMeth(C$, 'isSameRing$org_openscience_cdk_interfaces_IRingSet$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (ringSet, atom1, atom2) {
for (var atomContainer, $atomContainer = ringSet.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
var ring=atomContainer;
if (ring.contains$org_openscience_cdk_interfaces_IAtom(atom1) && ring.contains$org_openscience_cdk_interfaces_IAtom(atom2) ) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'ringAlreadyInSet$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_interfaces_IRingSet',  function (newRing, ringSet) {
var ring;
var equalCount;
var equals;
for (var f=0; f < ringSet.getAtomContainerCount$(); f++) {
equals=false;
equalCount=0;
ring=ringSet.getAtomContainer$I(f);
if (ring.getBondCount$() == newRing.getBondCount$()) {
for (var newBond, $newBond = newRing.bonds$().iterator$(); $newBond.hasNext$()&&((newBond=($newBond.next$())),1);) {
for (var bond, $bond = ring.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (newBond.equals$O(bond)) {
equals=true;
++equalCount;
break;
}}
if (!equals) break;
}
}if (equalCount == ring.getBondCount$()) {
return true;
}}
return false;
}, 1);

Clazz.newMeth(C$, 'markAromaticRings$org_openscience_cdk_interfaces_IRingSet',  function (ringset) {
for (var atomContainer, $atomContainer = ringset.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
$I$(4).markAromaticRings$org_openscience_cdk_interfaces_IRing(atomContainer);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
