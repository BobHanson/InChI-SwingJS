(function(){var P$=Clazz.newPackage("org.openscience.cdk.ringsearch"),I$=[[0,'java.util.ArrayList','org.openscience.cdk.interfaces.IRingSet','org.openscience.cdk.interfaces.IAtomContainer']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RingPartitioner");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'partitionRings$org_openscience_cdk_interfaces_IRingSet',  function (ringSet) {
var ringSets=Clazz.new_($I$(1,1));
if (ringSet.getAtomContainerCount$() == 0) return ringSets;
var ring=ringSet.getAtomContainer$I(0);
if (ring == null ) return ringSets;
var rs=ring.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IRingSet','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IAtomContainer','getConnectedRings$org_openscience_cdk_interfaces_IRing','getRings$org_openscience_cdk_interfaces_IBond','getRings$org_openscience_cdk_interfaces_IAtom','isEmpty$']), Clazz.array(java.lang.Object, -1, []));
for (var f=0; f < ringSet.getAtomContainerCount$(); f++) {
rs.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(ringSet.getAtomContainer$I(f));
}
do {
ring=rs.getAtomContainer$I(0);
var newRs=ring.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IRingSet','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IAtomContainer','getConnectedRings$org_openscience_cdk_interfaces_IRing','getRings$org_openscience_cdk_interfaces_IBond','getRings$org_openscience_cdk_interfaces_IAtom','isEmpty$']), Clazz.array(java.lang.Object, -1, []));
newRs.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(ring);
ringSets.add$O(C$.walkRingSystem$org_openscience_cdk_interfaces_IRingSet$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_interfaces_IRingSet(rs, ring, newRs));
} while (rs.getAtomContainerCount$() > 0);
return ringSets;
}, 1);

Clazz.newMeth(C$, 'convertToAtomContainer$org_openscience_cdk_interfaces_IRingSet',  function (ringSet) {
var ring=ringSet.getAtomContainer$I(0);
if (ring == null ) return null;
var ac=ring.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(3),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
for (var i=0; i < ringSet.getAtomContainerCount$(); i++) {
ring=ringSet.getAtomContainer$I(i);
for (var r=0; r < ring.getBondCount$(); r++) {
var bond=ring.getBond$I(r);
if (!ac.contains$org_openscience_cdk_interfaces_IBond(bond)) {
for (var j=0; j < bond.getAtomCount$(); j++) {
ac.addAtom$org_openscience_cdk_interfaces_IAtom(bond.getAtom$I(j));
}
ac.addBond$org_openscience_cdk_interfaces_IBond(bond);
}}
}
return ac;
}, 1);

Clazz.newMeth(C$, 'walkRingSystem$org_openscience_cdk_interfaces_IRingSet$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_interfaces_IRingSet',  function (rs, ring, newRs) {
var tempRing;
var tempRings=rs.getConnectedRings$org_openscience_cdk_interfaces_IRing(ring);
rs.removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(ring);
for (var container, $container = tempRings.atomContainers$().iterator$(); $container.hasNext$()&&((container=($container.next$())),1);) {
tempRing=container;
if (!newRs.contains$org_openscience_cdk_interfaces_IAtomContainer(tempRing)) {
newRs.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(tempRing);
newRs.add$org_openscience_cdk_interfaces_IRingSet(C$.walkRingSystem$org_openscience_cdk_interfaces_IRingSet$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_interfaces_IRingSet(rs, tempRing, newRs));
}}
return newRs;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-12 17:49:16 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
