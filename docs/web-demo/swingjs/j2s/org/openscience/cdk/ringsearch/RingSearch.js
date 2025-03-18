(function(){var P$=Clazz.newPackage("org.openscience.cdk.ringsearch"),p$1={},I$=[[0,'org.openscience.cdk.graph.GraphUtil','org.openscience.cdk.ringsearch.RegularCyclicVertexSearch','org.openscience.cdk.ringsearch.JumboCyclicVertexSearch','org.openscience.cdk.interfaces.IAtom','java.util.ArrayList','org.openscience.cdk.interfaces.IAtomContainer','org.openscience.cdk.interfaces.IBond','java.util.HashSet']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RingSearch");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['searcher','org.openscience.cdk.ringsearch.CyclicVertexSearch','container','org.openscience.cdk.interfaces.IAtomContainer']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
C$.c$$org_openscience_cdk_interfaces_IAtomContainer$IAA.apply(this, [container, $I$(1).toAdjList$org_openscience_cdk_interfaces_IAtomContainer(container)]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$IAA',  function (container, graph) {
C$.c$$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_ringsearch_CyclicVertexSearch.apply(this, [container, C$.makeSearcher$IAA(graph)]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_ringsearch_CyclicVertexSearch',  function (container, searcher) {
;C$.$init$.apply(this);
if (container == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["container must not be null"]);
if (searcher == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["searcher was null"]);
this.searcher=searcher;
this.container=container;
}, 1);

Clazz.newMeth(C$, 'makeSearcher$IAA',  function (graph) {
if (graph == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["graph[][] must not be null"]);
if (graph.length <= 64) {
return Clazz.new_($I$(2,1).c$$IAA,[graph]);
} else {
return Clazz.new_($I$(3,1).c$$IAA,[graph]);
}}, 1);

Clazz.newMeth(C$, 'numRings$',  function () {
return this.searcher.numCycles$();
});

Clazz.newMeth(C$, 'cyclic$I$I',  function (u, v) {
return this.searcher.cyclic$I$I(u, v);
});

Clazz.newMeth(C$, 'cyclic$org_openscience_cdk_interfaces_IAtom',  function (atom) {
var i=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(atom);
if (i < 0) throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.NoSuchAtomException').c$$S,["no such atom"]);
return this.cyclic$I(i);
});

Clazz.newMeth(C$, 'cyclic$org_openscience_cdk_interfaces_IBond',  function (bond) {
var u=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
var v=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$());
if (u < 0 || v < 0 ) throw Clazz.new_(Clazz.load('java.util.NoSuchElementException').c$$S,["atoms of the bond are not found in the container"]);
return this.searcher.cyclic$I$I(u, v);
});

Clazz.newMeth(C$, 'cyclic$I',  function (i) {
return this.searcher.cyclic$I(i);
});

Clazz.newMeth(C$, 'cyclic$',  function () {
return this.searcher.cyclic$();
});

Clazz.newMeth(C$, 'isolated$',  function () {
return this.searcher.isolated$();
});

Clazz.newMeth(C$, 'fused$',  function () {
return this.searcher.fused$();
});

Clazz.newMeth(C$, 'ringFragments$',  function () {
var vertices=this.cyclic$();
var n=vertices.length;
var atoms=Clazz.array($I$(4), [n]);
var bonds=Clazz.new_($I$(5,1));
for (var i=0; i < vertices.length; i++) {
atoms[i]=this.container.getAtom$I(vertices[i]);
}
for (var bond, $bond = this.container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var either=bond.getBegin$();
var other=bond.getEnd$();
var u=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(either);
var v=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(other);
if (this.searcher.cyclic$I$I(u, v)) bonds.add$O(bond);
}
var builder=this.container.getBuilder$();
var fragment=builder.newInstance$Class$OA(Clazz.getClass($I$(6),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0)]));
fragment.setAtoms$org_openscience_cdk_interfaces_IAtomA(atoms);
fragment.setBonds$org_openscience_cdk_interfaces_IBondA(bonds.toArray$OA(Clazz.array($I$(7), [bonds.size$()])));
return fragment;
});

Clazz.newMeth(C$, 'match$I$I',  function (eitherColor, otherColor) {
return (eitherColor != -1 && otherColor != -1 ) && (eitherColor == otherColor || (eitherColor == 0 || otherColor == 0 ) ) ;
}, 1);

Clazz.newMeth(C$, 'isolatedRingFragments$',  function () {
return p$1.toFragments$IAA.apply(this, [this.isolated$()]);
});

Clazz.newMeth(C$, 'fusedRingFragments$',  function () {
return p$1.toFragments$IAA.apply(this, [this.fused$()]);
});

Clazz.newMeth(C$, 'toFragments$IAA',  function (verticesList) {
var fragments=Clazz.new_($I$(5,1));
for (var vertices, $vertices = 0, $$vertices = verticesList; $vertices<$$vertices.length&&((vertices=($$vertices[$vertices])),1);$vertices++) {
fragments.add$O(p$1.toFragment$IA.apply(this, [vertices]));
}
return fragments;
}, p$1);

Clazz.newMeth(C$, 'toFragment$IA',  function (vertices) {
var n=vertices.length;
var atoms=Clazz.new_([n > 3 ? n + 1 + (n/3|0)  : n],$I$(8,1).c$$I);
var bonds=Clazz.new_($I$(5,1));
for (var v, $v = 0, $$v = vertices; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
atoms.add$O(this.container.getAtom$I(v));
}
for (var bond, $bond = this.container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var either=bond.getBegin$();
var other=bond.getEnd$();
if (atoms.contains$O(either) && atoms.contains$O(other) ) {
bonds.add$O(bond);
}}
var fragment=this.container.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(6),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0)]));
fragment.setAtoms$org_openscience_cdk_interfaces_IAtomA(atoms.toArray$OA(Clazz.array($I$(4), [n])));
fragment.setBonds$org_openscience_cdk_interfaces_IBondA(bonds.toArray$OA(Clazz.array($I$(7), [bonds.size$()])));
return fragment;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-12 17:49:08 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
