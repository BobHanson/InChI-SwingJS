(function(){var P$=Clazz.newPackage("org.openscience.cdk.ringsearch"),p$1={},I$=[[0,['org.openscience.cdk.ringsearch.AllRingsFinder','.Threshold'],['org.openscience.cdk.graph.GraphUtil','.EdgeToBondMap'],'org.openscience.cdk.graph.GraphUtil','org.openscience.cdk.ringsearch.RingSearch','org.openscience.cdk.interfaces.IRingSet','org.openscience.cdk.graph.AllCycles','org.openscience.cdk.interfaces.IRing','org.openscience.cdk.interfaces.IAtom','org.openscience.cdk.interfaces.IBond']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AllRingsFinder", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Threshold',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['threshold','org.openscience.cdk.ringsearch.AllRingsFinder.Threshold']]]

Clazz.newMeth(C$, 'c$$Z',  function (logging) {
C$.c$$org_openscience_cdk_ringsearch_AllRingsFinder_Threshold.apply(this, [$I$(1).PubChem_99]);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$org_openscience_cdk_ringsearch_AllRingsFinder_Threshold.apply(this, [$I$(1).PubChem_99]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_ringsearch_AllRingsFinder_Threshold',  function (threshold) {
;C$.$init$.apply(this);
this.threshold=threshold;
}, 1);

Clazz.newMeth(C$, 'findAllRings$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return this.findAllRings$org_openscience_cdk_interfaces_IAtomContainer$I(container, container.getAtomCount$());
});

Clazz.newMeth(C$, 'findAllRings$org_openscience_cdk_interfaces_IAtomContainer$I',  function (container, maxRingSize) {
var edges=$I$(2).withSpaceFor$org_openscience_cdk_interfaces_IAtomContainer(container);
var graph=$I$(3).toAdjList$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(container, edges);
var rs=Clazz.new_($I$(4,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA,[container, graph]);
var ringSet=container.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(5),['add$org_openscience_cdk_interfaces_IRingSet','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IAtomContainer','getConnectedRings$org_openscience_cdk_interfaces_IRing','getRings$org_openscience_cdk_interfaces_IBond','getRings$org_openscience_cdk_interfaces_IAtom','isEmpty$']), Clazz.array(java.lang.Object, -1, []));
for (var isolated, $isolated = 0, $$isolated = rs.isolated$(); $isolated<$$isolated.length&&((isolated=($$isolated[$isolated])),1);$isolated++) {
if (isolated.length <= maxRingSize) {
var ring=p$1.toRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$IA.apply(this, [container, edges, $I$(3).cycle$IAA$IA(graph, isolated)]);
ringSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(ring);
}}
for (var fused, $fused = 0, $$fused = rs.fused$(); $fused<$$fused.length&&((fused=($$fused[$fused])),1);$fused++) {
var ac=Clazz.new_([$I$(3).subgraph$IAA$IA(graph, fused), Math.min(maxRingSize, fused.length), this.threshold.value],$I$(6,1).c$$IAA$I$I);
if (!ac.completed$()) throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.CDKException').c$$S,["Threshold exceeded for AllRingsFinder"]);
for (var path, $path = 0, $$path = ac.paths$(); $path<$$path.length&&((path=($$path[$path])),1);$path++) {
var ring=p$1.toRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$IA$IA.apply(this, [container, edges, path, fused]);
ringSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(ring);
}
}
return ringSet;
});

Clazz.newMeth(C$, 'findAllRingsInIsolatedRingSystem$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return this.findAllRingsInIsolatedRingSystem$org_openscience_cdk_interfaces_IAtomContainer$I(container, container.getAtomCount$());
});

Clazz.newMeth(C$, 'findAllRingsInIsolatedRingSystem$org_openscience_cdk_interfaces_IAtomContainer$I',  function (atomContainer, maxRingSize) {
var edges=$I$(2).withSpaceFor$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
var graph=$I$(3).toAdjList$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(atomContainer, edges);
var ac=Clazz.new_($I$(6,1).c$$IAA$I$I,[graph, maxRingSize, this.threshold.value]);
if (!ac.completed$()) throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.CDKException').c$$S,["Threshold exceeded for AllRingsFinder"]);
var ringSet=atomContainer.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(5),['add$org_openscience_cdk_interfaces_IRingSet','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IAtomContainer','getConnectedRings$org_openscience_cdk_interfaces_IRing','getRings$org_openscience_cdk_interfaces_IBond','getRings$org_openscience_cdk_interfaces_IAtom','isEmpty$']), Clazz.array(java.lang.Object, -1, []));
for (var path, $path = 0, $$path = ac.paths$(); $path<$$path.length&&((path=($$path[$path])),1);$path++) {
ringSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(p$1.toRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$IA.apply(this, [atomContainer, edges, path]));
}
return ringSet;
});

Clazz.newMeth(C$, 'checkTimeout$',  function () {
});

Clazz.newMeth(C$, 'setTimeout$J',  function (timeout) {
System.err.println$S("AllRingsFinder.setTimeout() is not used, please use the new threshold values");
return this;
});

Clazz.newMeth(C$, 'getTimeout$',  function () {
return 0;
});

Clazz.newMeth(C$, 'toRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$IA',  function (container, edges, cycle) {
var ring=container.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(7),['clone$','getBondOrderSum$','getNextBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom','getRingSize$']), Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(0)]));
var len=cycle.length - 1;
var atoms=Clazz.array($I$(8), [len]);
var bonds=Clazz.array($I$(9), [len]);
for (var i=0; i < len; i++) {
atoms[i]=container.getAtom$I(cycle[i]);
bonds[i]=edges.get$I$I(cycle[i], cycle[i + 1]);
atoms[i].setFlag$I$Z(2, true);
}
ring.setAtoms$org_openscience_cdk_interfaces_IAtomA(atoms);
ring.setBonds$org_openscience_cdk_interfaces_IBondA(bonds);
return ring;
}, p$1);

Clazz.newMeth(C$, 'toRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$IA$IA',  function (container, edges, cycle, mapping) {
var ring=container.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(7),['clone$','getBondOrderSum$','getNextBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom','getRingSize$']), Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(0)]));
var len=cycle.length - 1;
var atoms=Clazz.array($I$(8), [len]);
var bonds=Clazz.array($I$(9), [len]);
for (var i=0; i < len; i++) {
atoms[i]=container.getAtom$I(mapping[cycle[i]]);
bonds[i]=edges.get$I$I(mapping[cycle[i]], mapping[cycle[i + 1]]);
atoms[i].setFlag$I$Z(2, true);
}
ring.setAtoms$org_openscience_cdk_interfaces_IAtomA(atoms);
ring.setBonds$org_openscience_cdk_interfaces_IBondA(bonds);
return ring;
}, p$1);

Clazz.newMeth(C$, 'usingThreshold$org_openscience_cdk_ringsearch_AllRingsFinder_Threshold',  function (threshold) {
return Clazz.new_(C$.c$$org_openscience_cdk_ringsearch_AllRingsFinder_Threshold,[threshold]);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.AllRingsFinder, "Threshold", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['value']]]

Clazz.newMeth(C$, 'c$$I',  function (value) {
;C$.$init$.apply(this);
this.value=value;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I, "PubChem_95", 0, [72]);
Clazz.newEnumConst($vals, C$.c$$I, "PubChem_96", 1, [84]);
Clazz.newEnumConst($vals, C$.c$$I, "PubChem_97", 2, [126]);
Clazz.newEnumConst($vals, C$.c$$I, "PubChem_98", 3, [216]);
Clazz.newEnumConst($vals, C$.c$$I, "PubChem_99", 4, [684]);
Clazz.newEnumConst($vals, C$.c$$I, "PubChem_991", 5, [882]);
Clazz.newEnumConst($vals, C$.c$$I, "PubChem_992", 6, [1062]);
Clazz.newEnumConst($vals, C$.c$$I, "PubChem_993", 7, [1440]);
Clazz.newEnumConst($vals, C$.c$$I, "PubChem_994", 8, [3072]);
Clazz.newEnumConst($vals, C$.c$$I, "None", 9, [2147483647]);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-12 17:49:16 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
