(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},p$2={},I$=[[0,'org.openscience.cdk.graph.InitialCycles','org.openscience.cdk.graph.MinimumCycleBasis','org.openscience.cdk.graph.RelevantCycles','org.openscience.cdk.graph.Cycles','org.openscience.cdk.graph.EssentialCycles','org.openscience.cdk.graph.AllCycles','org.openscience.cdk.exception.Intractable','org.openscience.cdk.graph.TripletShortCycles','org.openscience.cdk.graph.VertexShortCycles','org.openscience.cdk.graph.EdgeShortCycles',['org.openscience.cdk.graph.Cycles','.CycleComputation'],['org.openscience.cdk.graph.GraphUtil','.EdgeToBondMap'],'org.openscience.cdk.graph.GraphUtil','org.openscience.cdk.ringsearch.RingSearch','java.util.ArrayList','java.util.Arrays','java.util.BitSet','org.openscience.cdk.tools.LoggingToolFactory',['org.openscience.cdk.graph.Cycles','.AllUpToLength'],'java.util.ArrayDeque','org.openscience.cdk.graph.BiconnectedComponents',['org.openscience.cdk.graph.Cycles','.Fallback'],['org.openscience.cdk.graph.Cycles','.Unchorded'],'org.openscience.cdk.interfaces.IRingSet','org.openscience.cdk.interfaces.IAtom','org.openscience.cdk.interfaces.IBond','org.openscience.cdk.interfaces.IAtomContainer','org.openscience.cdk.interfaces.IRing']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Cycles", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['CycleComputation',1034],['AllUpToLength',26],['Fallback',26],['Unchorded',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['paths','int[][]','container','org.openscience.cdk.interfaces.IAtomContainer','bondMap','org.openscience.cdk.graph.GraphUtil.EdgeToBondMap']]
,['J',['MAX_RELEVANT_CYCLES']]]

Clazz.newMeth(C$, 'getSystemInteger$S$J',  function (key, val) {
var prop=System.getProperty$S(key);
if (prop == null ) return val;
try {
return Long.parseLong$S(prop);
} catch (ex) {
if (Clazz.exceptionOf(ex,"NumberFormatException")){
$I$(18,"createLoggingTool$Class",[Clazz.getClass(C$)]).error$O("Error - Invalid number for system property=" + key);
} else {
throw ex;
}
}
return val;
}, 1);

Clazz.newMeth(C$, 'c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (paths, container, bondMap) {
;C$.$init$.apply(this);
this.paths=paths;
this.container=container;
this.bondMap=bondMap;
}, 1);

Clazz.newMeth(C$, 'numberOfCycles$',  function () {
return this.paths.length;
});

Clazz.newMeth(C$, 'paths$',  function () {
var cpy=Clazz.array(Integer.TYPE, [this.paths.length, null]);
for (var i=0; i < this.paths.length; i++) cpy[i]=this.paths[i].clone$();

return cpy;
});

Clazz.newMeth(C$, 'toRingSet$',  function () {
return C$.toRingSet$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(this.container, this.paths, this.bondMap);
});

Clazz.newMeth(C$, 'all$',  function () {
return $I$(11).ALL;
}, 1);

Clazz.newMeth(C$, 'all$I',  function (length) {
return Clazz.new_($I$(19,1).c$$I,[length]);
}, 1);

Clazz.newMeth(C$, 'mcb$',  function () {
return $I$(11).MCB;
}, 1);

Clazz.newMeth(C$, 'relevant$',  function () {
return $I$(11).RELEVANT;
}, 1);

Clazz.newMeth(C$, 'essential$',  function () {
return $I$(11).ESSENTIAL;
}, 1);

Clazz.newMeth(C$, 'tripletShort$',  function () {
return $I$(11).TRIPLET_SHORT;
}, 1);

Clazz.newMeth(C$, 'vertexShort$',  function () {
return $I$(11).VERTEX_SHORT;
}, 1);

Clazz.newMeth(C$, 'edgeShort$',  function () {
return $I$(11).EDGE_SHORT;
}, 1);

Clazz.newMeth(C$, 'cdkAromaticSet$',  function () {
return $I$(11).CDK_AROMATIC;
}, 1);

Clazz.newMeth(C$, 'allOrVertexShort$',  function () {
return C$.or$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_graph_CycleFinder(C$.all$(), C$.vertexShort$());
}, 1);

Clazz.newMeth(C$, 'smallRingSizes$org_openscience_cdk_interfaces_IAtomContainer$IA',  function (mol, rsizes) {
var acount=mol.getAtomCount$();
var marker=acount + 1;
if (rsizes == null  || acount > rsizes.length ) throw Clazz.new_(Clazz.load('IllegalArgumentException'));
$I$(16).fill$IA$I$I$I(rsizes, 0, acount, marker);
var cycles=C$.vertexShort$org_openscience_cdk_interfaces_IAtomContainer(mol);
for (var path, $path = 0, $$path = cycles.paths$(); $path<$$path.length&&((path=($$path[$path])),1);$path++) {
var rsize=path.length - 1;
for (var v, $v = 0, $$v = path; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
rsizes[v]=Math.min(rsize, rsizes[v]);
}
}
for (var i=0; i < acount; i++) {
if (rsizes[i] == marker) rsizes[i]=0;
}
}, 1);

Clazz.newMeth(C$, 'smallRingSize$org_openscience_cdk_interfaces_IAtom$I',  function (atom, max) {
if (!atom.isInRing$()) return 0;
var mol=atom.getContainer$();
var distTo=Clazz.array(Integer.TYPE, [mol.getAtomCount$()]);
$I$(16).fill$IA$I(distTo, 1 + distTo.length);
distTo[atom.getIndex$()]=0;
var queue=Clazz.new_($I$(20,1));
queue.add$O(atom);
var smallest=1 + distTo.length;
while (!queue.isEmpty$()){
var a=queue.poll$();
var dist=1 + distTo[a.getIndex$()];
for (var b, $b = a.bonds$().iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
if (!b.isInRing$()) continue;
var nbr=b.getOther$org_openscience_cdk_interfaces_IAtom(a);
if (dist < distTo[nbr.getIndex$()]) {
distTo[nbr.getIndex$()]=dist;
queue.add$O(nbr);
} else if (dist != 2 + distTo[nbr.getIndex$()]) {
var tmp=dist + distTo[nbr.getIndex$()];
if (tmp < smallest) smallest=tmp;
}}
if (2 * dist > 1 + max) break;
}
return smallest <= max ? smallest : 0;
}, 1);

Clazz.newMeth(C$, 'smallRingSize$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return C$.smallRingSize$org_openscience_cdk_interfaces_IAtom$I(atom, atom.getContainer$().getAtomCount$());
}, 1);

Clazz.newMeth(C$, 'smallRingSize$org_openscience_cdk_interfaces_IBond$I',  function (bond, max) {
if (!bond.isInRing$()) return 0;
var mol=bond.getContainer$();
var distTo=Clazz.array(Integer.TYPE, [mol.getAtomCount$()]);
$I$(16).fill$IA$I(distTo, 1 + distTo.length);
distTo[bond.getBegin$().getIndex$()]=0;
distTo[bond.getEnd$().getIndex$()]=0;
var queue=Clazz.new_($I$(20,1));
queue.add$O(bond.getBegin$());
queue.add$O(bond.getEnd$());
var smallest=1 + distTo.length;
while (!queue.isEmpty$()){
var a=queue.poll$();
var dist=1 + distTo[a.getIndex$()];
for (var b, $b = a.bonds$().iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
if (b === bond  || !b.isInRing$() ) continue;
var nbr=b.getOther$org_openscience_cdk_interfaces_IAtom(a);
if (dist < distTo[nbr.getIndex$()]) {
distTo[nbr.getIndex$()]=dist;
queue.add$O(nbr);
} else if (dist != 2 + distTo[nbr.getIndex$()]) {
var tmp=1 + dist + distTo[nbr.getIndex$()] ;
if (tmp < smallest) smallest=tmp;
}}
if (2 * dist > 1 + max) break;
}
return smallest <= max ? smallest : 0;
}, 1);

Clazz.newMeth(C$, 'smallRingSize$org_openscience_cdk_interfaces_IBond',  function (bond) {
return C$.smallRingSize$org_openscience_cdk_interfaces_IBond$I(bond, bond.getContainer$().getAtomCount$());
}, 1);

Clazz.newMeth(C$, 'markRingAtomsAndBonds$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
return $I$(21).mark$org_openscience_cdk_interfaces_IAtomContainer(mol);
}, 1);

Clazz.newMeth(C$, 'markRingAtomsAndBonds$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (mol, adjList, bondMap) {
return C$.markRingAtomsAndBonds$org_openscience_cdk_interfaces_IAtomContainer(mol);
}, 1);

Clazz.newMeth(C$, 'or$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_graph_CycleFinder',  function (primary, auxiliary) {
return Clazz.new_($I$(22,1).c$$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_graph_CycleFinder,[primary, auxiliary]);
}, 1);

Clazz.newMeth(C$, 'all$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return C$.all$().find$org_openscience_cdk_interfaces_IAtomContainer$I(container, container.getAtomCount$());
}, 1);

Clazz.newMeth(C$, 'all$org_openscience_cdk_interfaces_IAtomContainer$I',  function (container, length) {
return C$.all$().find$org_openscience_cdk_interfaces_IAtomContainer$I(container, length);
}, 1);

Clazz.newMeth(C$, 'mcb$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return C$._invoke$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_interfaces_IAtomContainer(C$.mcb$(), container);
}, 1);

Clazz.newMeth(C$, 'sssr$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return C$.mcb$org_openscience_cdk_interfaces_IAtomContainer(container);
}, 1);

Clazz.newMeth(C$, 'relevant$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return C$._invoke$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_interfaces_IAtomContainer(C$.relevant$(), container);
}, 1);

Clazz.newMeth(C$, 'essential$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return C$._invoke$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_interfaces_IAtomContainer(C$.essential$(), container);
}, 1);

Clazz.newMeth(C$, 'tripletShort$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return C$._invoke$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_interfaces_IAtomContainer(C$.tripletShort$(), container);
}, 1);

Clazz.newMeth(C$, 'vertexShort$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return C$._invoke$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_interfaces_IAtomContainer(C$.vertexShort$(), container);
}, 1);

Clazz.newMeth(C$, 'edgeShort$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return C$._invoke$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_interfaces_IAtomContainer(C$.edgeShort$(), container);
}, 1);

Clazz.newMeth(C$, 'unchorded$org_openscience_cdk_graph_CycleFinder',  function (original) {
return Clazz.new_($I$(23,1).c$$org_openscience_cdk_graph_CycleFinder,[original]);
}, 1);

Clazz.newMeth(C$, '_invoke$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_interfaces_IAtomContainer',  function (finder, container) {
return C$._invoke$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_interfaces_IAtomContainer$I(finder, container, container.getAtomCount$());
}, 1);

Clazz.newMeth(C$, '_invoke$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_interfaces_IAtomContainer$I',  function (finder, container, length) {
try {
return finder.find$org_openscience_cdk_interfaces_IAtomContainer$I(container, length);
} catch (e) {
if (Clazz.exceptionOf(e,"org.openscience.cdk.exception.Intractable")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Cycle computation should not be intractable: ", e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'numberOfCyclesCheck$org_openscience_cdk_graph_RelevantCycles',  function (rc) {
if (Long.$gt(rc.size$(),C$.MAX_RELEVANT_CYCLES )) throw Clazz.new_(["Too many relevant cycles cycles! max=" + Long.$s(C$.MAX_RELEVANT_CYCLES) + " was=" + rc.size$() + "." + " Increase this limit with System property -D" + "cdk.maxRelevantCycles" + "=<num>" ],$I$(7,1).c$$S);
}, 1);

Clazz.newMeth(C$, 'lift$IA$IA',  function (path, mapping) {
for (var i=0; i < path.length; i++) {
path[i]=mapping[path[i]];
}
return path;
}, 1);

Clazz.newMeth(C$, 'toRingSet$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (container, cycles, bondMap) {
var builder=container.getBuilder$();
var rings=builder.newInstance$Class$OA(Clazz.getClass($I$(24),['add$org_openscience_cdk_interfaces_IRingSet','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IAtomContainer','getConnectedRings$org_openscience_cdk_interfaces_IRing','getRings$org_openscience_cdk_interfaces_IBond','getRings$org_openscience_cdk_interfaces_IAtom','isEmpty$']), Clazz.array(java.lang.Object, -1, []));
for (var cycle, $cycle = 0, $$cycle = cycles; $cycle<$$cycle.length&&((cycle=($$cycle[$cycle])),1);$cycle++) {
rings.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(C$.toRing$org_openscience_cdk_interfaces_IAtomContainer$IA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(container, cycle, bondMap));
}
return rings;
}, 1);

Clazz.newMeth(C$, 'toRing$org_openscience_cdk_interfaces_IAtomContainer$IA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (container, cycle, bondMap) {
var atoms=Clazz.array($I$(25), [cycle.length - 1]);
var bonds=Clazz.array($I$(26), [cycle.length - 1]);
for (var i=1; i < cycle.length; i++) {
var v=cycle[i];
var u=cycle[i - 1];
atoms[i - 1]=container.getAtom$I(u);
bonds[i - 1]=C$.getBond$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$I$I(container, bondMap, u, v);
}
var builder=container.getBuilder$();
var ring=builder.newInstance$Class$OA(Clazz.getClass($I$(27),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0)]));
ring.setAtoms$org_openscience_cdk_interfaces_IAtomA(atoms);
ring.setBonds$org_openscience_cdk_interfaces_IBondA(bonds);
return builder.newInstance$Class$OA(Clazz.getClass($I$(28),['clone$','getBondOrderSum$','getNextBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom','getRingSize$']), Clazz.array(java.lang.Object, -1, [ring]));
}, 1);

Clazz.newMeth(C$, 'getBond$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$I$I',  function (container, bondMap, u, v) {
if (bondMap != null ) return bondMap.get$I$I(u, v);
return container.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(container.getAtom$I(u), container.getAtom$I(v));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MAX_RELEVANT_CYCLES=C$.getSystemInteger$S$J("cdk.maxRelevantCycles", 512000);
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.Cycles, "CycleComputation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum', 'org.openscience.cdk.graph.CycleFinder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer',  function (molecule) {
return this.find$org_openscience_cdk_interfaces_IAtomContainer$I(molecule, molecule.getAtomCount$());
});

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer$I',  function (molecule, length) {
var bondMap=$I$(12).withSpaceFor$org_openscience_cdk_interfaces_IAtomContainer(molecule);
var graph=$I$(13).toAdjList$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(molecule, bondMap);
var ringSearch=Clazz.new_($I$(14,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA,[molecule, graph]);
var walks=Clazz.new_($I$(15,1).c$$I,[6]);
for (var isolated, $isolated = 0, $$isolated = ringSearch.isolated$(); $isolated<$$isolated.length&&((isolated=($$isolated[$isolated])),1);$isolated++) {
if (isolated.length <= length) walks.add$O($I$(13).cycle$IAA$IA(graph, isolated));
}
for (var fused, $fused = 0, $$fused = ringSearch.fused$(); $fused<$$fused.length&&((fused=($$fused[$fused])),1);$fused++) {
for (var cycle, $cycle = 0, $$cycle = this.apply$IAA$I($I$(13).subgraph$IAA$IA(graph, fused), length); $cycle<$$cycle.length&&((cycle=($$cycle[$cycle])),1);$cycle++) {
walks.add$O($I$(4).lift$IA$IA(cycle, fused));
}
}
return Clazz.new_([walks.toArray$OA(Clazz.array(Integer.TYPE, [walks.size$(), 0])), molecule, bondMap],$I$(4,1).c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap);
});

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I',  function (molecule, graph, length) {
var ringSearch=Clazz.new_($I$(14,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA,[molecule, graph]);
var walks=Clazz.new_($I$(15,1).c$$I,[6]);
for (var isolated, $isolated = 0, $$isolated = ringSearch.isolated$(); $isolated<$$isolated.length&&((isolated=($$isolated[$isolated])),1);$isolated++) {
walks.add$O($I$(13).cycle$IAA$IA(graph, isolated));
}
for (var fused, $fused = 0, $$fused = ringSearch.fused$(); $fused<$$fused.length&&((fused=($$fused[$fused])),1);$fused++) {
for (var cycle, $cycle = 0, $$cycle = this.apply$IAA$I($I$(13).subgraph$IAA$IA(graph, fused), length); $cycle<$$cycle.length&&((cycle=($$cycle[$cycle])),1);$cycle++) {
walks.add$O($I$(4).lift$IA$IA(cycle, fused));
}
}
return Clazz.new_([walks.toArray$OA(Clazz.array(Integer.TYPE, [walks.size$(), 0])), molecule, null],$I$(4,1).c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap);
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
(P$.Cycles$CycleComputation$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cycles$CycleComputation$1", null, Clazz.load(['org.openscience.cdk.graph.Cycles','.CycleComputation']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$IAA$I',  function (graph, length) {
var ic=$I$(1).ofBiconnectedComponent$IAA$I(graph, length);
return Clazz.new_($I$(2,1).c$$org_openscience_cdk_graph_InitialCycles$Z,[ic, true]).paths$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "MCB", 0, [], org.openscience.cdk.graph.Cycles$CycleComputation$1);
(P$.Cycles$CycleComputation$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cycles$CycleComputation$2", null, Clazz.load(['org.openscience.cdk.graph.Cycles','.CycleComputation']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$IAA$I',  function (graph, length) {
var ic=$I$(1).ofBiconnectedComponent$IAA$I(graph, length);
var rc=Clazz.new_($I$(3,1).c$$org_openscience_cdk_graph_InitialCycles,[ic]);
$I$(4).numberOfCyclesCheck$org_openscience_cdk_graph_RelevantCycles(rc);
var essentialCycles=Clazz.new_($I$(5,1).c$$org_openscience_cdk_graph_RelevantCycles$org_openscience_cdk_graph_InitialCycles,[rc, ic]);
return essentialCycles.paths$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "ESSENTIAL", 1, [], org.openscience.cdk.graph.Cycles$CycleComputation$2);
(P$.Cycles$CycleComputation$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cycles$CycleComputation$3", null, Clazz.load(['org.openscience.cdk.graph.Cycles','.CycleComputation']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$IAA$I',  function (graph, length) {
var ic=$I$(1).ofBiconnectedComponent$IAA$I(graph, length);
var rc=Clazz.new_($I$(3,1).c$$org_openscience_cdk_graph_InitialCycles,[ic]);
$I$(4).numberOfCyclesCheck$org_openscience_cdk_graph_RelevantCycles(rc);
return rc.paths$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "RELEVANT", 2, [], org.openscience.cdk.graph.Cycles$CycleComputation$3);
(P$.Cycles$CycleComputation$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cycles$CycleComputation$4", null, Clazz.load(['org.openscience.cdk.graph.Cycles','.CycleComputation']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$IAA$I',  function (graph, length) {
var threshold=3072;
var ac=Clazz.new_([graph, Math.min(length, graph.length), 3072],$I$(6,1).c$$IAA$I$I);
if (!ac.completed$()) throw Clazz.new_(["A large number of cycles were being generated and the computation was aborted. Please use AllCycles/AllRingsFinder with and specify a larger threshold or use a CycleFinder with a fall-back to a set unique cycles: e.g. Cycles.allOrVertexShort()."],$I$(7,1).c$$S);
return ac.paths$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "ALL", 3, [], org.openscience.cdk.graph.Cycles$CycleComputation$4);
(P$.Cycles$CycleComputation$5||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cycles$CycleComputation$5", null, Clazz.load(['org.openscience.cdk.graph.Cycles','.CycleComputation']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$IAA$I',  function (graph, length) {
var ic=$I$(1).ofBiconnectedComponent$IAA$I(graph, length);
return Clazz.new_([Clazz.new_($I$(2,1).c$$org_openscience_cdk_graph_InitialCycles$Z,[ic, true]), false],$I$(8,1).c$$org_openscience_cdk_graph_MinimumCycleBasis$Z).paths$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "TRIPLET_SHORT", 4, [], org.openscience.cdk.graph.Cycles$CycleComputation$5);
(P$.Cycles$CycleComputation$6||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cycles$CycleComputation$6", null, Clazz.load(['org.openscience.cdk.graph.Cycles','.CycleComputation']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$IAA$I',  function (graph, length) {
var ic=$I$(1).ofBiconnectedComponent$IAA$I(graph, length);
return Clazz.new_($I$(9,1).c$$org_openscience_cdk_graph_InitialCycles,[ic]).paths$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "VERTEX_SHORT", 5, [], org.openscience.cdk.graph.Cycles$CycleComputation$6);
(P$.Cycles$CycleComputation$7||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cycles$CycleComputation$7", null, Clazz.load(['org.openscience.cdk.graph.Cycles','.CycleComputation']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$IAA$I',  function (graph, length) {
var ic=$I$(1).ofBiconnectedComponent$IAA$I(graph, length);
return Clazz.new_($I$(10,1).c$$org_openscience_cdk_graph_InitialCycles,[ic]).paths$();
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "EDGE_SHORT", 6, [], org.openscience.cdk.graph.Cycles$CycleComputation$7);
(P$.Cycles$CycleComputation$8||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cycles$CycleComputation$8", null, Clazz.load(['org.openscience.cdk.graph.Cycles','.CycleComputation']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$IAA$I',  function (graph, length) {
var ic=$I$(1).ofBiconnectedComponent$IAA$I(graph, length);
var mcb=Clazz.new_($I$(2,1).c$$org_openscience_cdk_graph_InitialCycles$Z,[ic, true]);
if (mcb.size$() > 3) {
return mcb.paths$();
} else {
return $I$(11).ALL.apply$IAA$I(graph, length);
}});
})()
)
Clazz.newEnumConst($vals, C$.c$, "CDK_AROMATIC", 7, [], org.openscience.cdk.graph.Cycles$CycleComputation$8);
(P$.Cycles$CycleComputation$9||
(function(){/*a*/var C$=Clazz.newClass(P$, "Cycles$CycleComputation$9", null, Clazz.load(['org.openscience.cdk.graph.Cycles','.CycleComputation']), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'apply$IAA$I',  function (graph, length) {
var threshold=3072;
var ac=Clazz.new_([graph, Math.min(length, graph.length), 3072],$I$(6,1).c$$IAA$I$I);
return ac.completed$() ? ac.paths$() : $I$(11).VERTEX_SHORT.apply$IAA$I(graph, length);
});
})()
)
Clazz.newEnumConst($vals, C$.c$, "ALL_OR_VERTEX_SHORT", 8, [], org.openscience.cdk.graph.Cycles$CycleComputation$9);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Cycles, "AllUpToLength", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.openscience.cdk.graph.CycleFinder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.threshold=3072;
},1);

C$.$fields$=[['I',['predefinedLength','threshold']]]

Clazz.newMeth(C$, 'c$$I',  function (length) {
;C$.$init$.apply(this);
this.predefinedLength=length;
}, 1);

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer',  function (molecule) {
return this.find$org_openscience_cdk_interfaces_IAtomContainer$I(molecule, molecule.getAtomCount$());
});

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer$I',  function (molecule, length) {
return this.find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(molecule, $I$(13).toAdjList$org_openscience_cdk_interfaces_IAtomContainer(molecule), length);
});

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I',  function (molecule, graph, length) {
var ringSearch=Clazz.new_($I$(14,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA,[molecule, graph]);
if (this.predefinedLength < length) length=this.predefinedLength;
var walks=Clazz.new_($I$(15,1).c$$I,[6]);
for (var isolated, $isolated = 0, $$isolated = ringSearch.isolated$(); $isolated<$$isolated.length&&((isolated=($$isolated[$isolated])),1);$isolated++) {
if (isolated.length <= length) walks.add$O($I$(13).cycle$IAA$IA(graph, isolated));
}
for (var fused, $fused = 0, $$fused = ringSearch.fused$(); $fused<$$fused.length&&((fused=($$fused[$fused])),1);$fused++) {
for (var cycle, $cycle = 0, $$cycle = p$1.findInFused$IAA$I.apply(this, [$I$(13).subgraph$IAA$IA(graph, fused), length]); $cycle<$$cycle.length&&((cycle=($$cycle[$cycle])),1);$cycle++) {
walks.add$O($I$(4).lift$IA$IA(cycle, fused));
}
}
return Clazz.new_([walks.toArray$OA(Clazz.array(Integer.TYPE, [walks.size$(), 0])), molecule, null],$I$(4,1).c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap);
});

Clazz.newMeth(C$, 'findInFused$IAA$I',  function (g, length) {
var allCycles=Clazz.new_([g, Math.min(g.length, length), 3072],$I$(6,1).c$$IAA$I$I);
if (!allCycles.completed$()) throw Clazz.new_($I$(7,1).c$$S,["A large number of cycles were being generated and the computation was aborted. Please us AllCycles/AllRingsFinder with and specify a larger threshold or an alternative cycle set."]);
return allCycles.paths$();
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Cycles, "Fallback", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.openscience.cdk.graph.CycleFinder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['primary','org.openscience.cdk.graph.CycleFinder','+auxiliary']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_CycleFinder$org_openscience_cdk_graph_CycleFinder',  function (primary, auxiliary) {
;C$.$init$.apply(this);
this.primary=primary;
this.auxiliary=auxiliary;
}, 1);

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer',  function (molecule) {
return this.find$org_openscience_cdk_interfaces_IAtomContainer$I(molecule, molecule.getAtomCount$());
});

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer$I',  function (molecule, length) {
return this.find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(molecule, $I$(13).toAdjList$org_openscience_cdk_interfaces_IAtomContainer(molecule), length);
});

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I',  function (molecule, graph, length) {
try {
return this.primary.find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(molecule, graph, length);
} catch (e) {
if (Clazz.exceptionOf(e,"org.openscience.cdk.exception.Intractable")){
return this.auxiliary.find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(molecule, graph, length);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Cycles, "Unchorded", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'org.openscience.cdk.graph.CycleFinder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['primary','org.openscience.cdk.graph.CycleFinder']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_CycleFinder',  function (primary) {
;C$.$init$.apply(this);
this.primary=primary;
}, 1);

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer',  function (molecule) {
return this.find$org_openscience_cdk_interfaces_IAtomContainer$I(molecule, molecule.getAtomCount$());
});

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer$I',  function (molecule, length) {
return this.find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(molecule, $I$(13).toAdjList$org_openscience_cdk_interfaces_IAtomContainer(molecule), length);
});

Clazz.newMeth(C$, 'find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I',  function (molecule, graph, length) {
var inital=this.primary.find$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(molecule, graph, length);
var filtered=Clazz.array(Integer.TYPE, [inital.numberOfCycles$(), 0]);
var n=0;
for (var path, $path = 0, $$path = inital.paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) {
if (p$2.accept$IA$IAA.apply(this, [path, graph])) filtered[n++]=path;
}
return Clazz.new_([$I$(16).copyOf$OA$I(filtered, n), inital.container, inital.bondMap],$I$(4,1).c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap);
});

Clazz.newMeth(C$, 'accept$IA$IAA',  function (path, graph) {
var vertices=Clazz.new_($I$(17,1));
for (var v, $v = 0, $$v = path; $v<$$v.length&&((v=($$v[$v])),1);$v++) vertices.set$I(v);

for (var j=1; j < path.length; j++) {
var v=path[j];
var prev=path[j - 1];
var next=path[(j + 1) % (path.length - 1)];
for (var w, $w = 0, $$w = graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (w != prev && w != next  && vertices.get$I(w) ) return false;
}
}
return true;
}, p$2);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
