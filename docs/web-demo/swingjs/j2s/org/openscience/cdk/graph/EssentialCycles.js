(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'java.util.Arrays','org.openscience.cdk.graph.InitialCycles','org.openscience.cdk.graph.RelevantCycles','java.util.Objects','org.openscience.cdk.graph.GreedyBasis','java.util.ArrayList','java.util.LinkedList',['org.openscience.cdk.graph.EssentialCycles','.MyCycle'],'org.openscience.cdk.graph.BitMatrix']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EssentialCycles", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['MyCycle',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['essential','java.util.List','initial','org.openscience.cdk.graph.InitialCycles','basis','org.openscience.cdk.graph.GreedyBasis']]]

Clazz.newMeth(C$, 'c$$IAA',  function (graph) {
C$.c$$org_openscience_cdk_graph_InitialCycles.apply(this, [Clazz.new_($I$(2,1).c$$IAA,[graph])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_InitialCycles',  function (initial) {
C$.c$$org_openscience_cdk_graph_RelevantCycles$org_openscience_cdk_graph_InitialCycles.apply(this, [Clazz.new_($I$(3,1).c$$org_openscience_cdk_graph_InitialCycles,[initial]), initial]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_RelevantCycles$org_openscience_cdk_graph_InitialCycles',  function (relevant, initial) {
;C$.$init$.apply(this);
$I$(4).requireNonNull$O$S(relevant, "No RelevantCycles provided");
this.initial=$I$(4).requireNonNull$O$S(initial, "No InitialCycles provided");
this.basis=Clazz.new_([initial.numberOfCycles$(), initial.numberOfEdges$()],$I$(5,1).c$$I$I);
this.essential=Clazz.new_($I$(6,1));
for (var cycles, $cycles = p$1.groupByLength$org_openscience_cdk_graph_RelevantCycles.apply(this, [relevant]).iterator$(); $cycles.hasNext$()&&((cycles=($cycles.next$())),1);) {
for (var c, $c = p$1.membersOfBasis$java_util_List.apply(this, [cycles]).iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (p$1.isEssential$org_openscience_cdk_graph_InitialCycles_Cycle$java_util_Collection.apply(this, [c, cycles])) this.essential.add$O(c);
}
}
}, 1);

Clazz.newMeth(C$, 'paths$',  function () {
var paths=Clazz.array(Integer.TYPE, [this.size$(), null]);
for (var i=0; i < paths.length; i++) paths[i]=this.essential.get$I(i).path$();

return paths;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.essential.size$();
});

Clazz.newMeth(C$, 'groupByLength$org_openscience_cdk_graph_RelevantCycles',  function (relevant) {
var cyclesByLength=Clazz.new_($I$(7,1));
for (var path, $path = 0, $$path = relevant.paths$(); $path<$$path.length&&((path=($$path[$path])),1);$path++) {
if (cyclesByLength.isEmpty$() || path.length > cyclesByLength.getLast$().get$I(0).path$().length ) {
cyclesByLength.add$O(Clazz.new_($I$(6,1)));
}cyclesByLength.getLast$().add$O(Clazz.new_($I$(8,1).c$$IA,[this, null, path]));
}
return cyclesByLength;
}, p$1);

Clazz.newMeth(C$, 'membersOfBasis$java_util_List',  function (cycles) {
var start=this.basis.size$();
for (var c, $c = cycles.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (this.basis.isIndependent$org_openscience_cdk_graph_InitialCycles_Cycle(c)) this.basis.add$org_openscience_cdk_graph_InitialCycles_Cycle(c);
}
return this.basis.members$().subList$I$I(start, this.basis.size$());
}, p$1);

Clazz.newMeth(C$, 'isEssential$org_openscience_cdk_graph_InitialCycles_Cycle$java_util_Collection',  function (candidate, relevant) {
var alternate=Clazz.new_([relevant.size$() + this.basis.size$()],$I$(6,1).c$$I);
var weight=candidate.length$();
for (var cycle, $cycle = this.basis.members$().iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$())),1);) {
if (cycle.length$() < weight) alternate.add$O(cycle);
}
for (var cycle, $cycle = relevant.iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$())),1);) {
if (!cycle.equals$O(candidate)) alternate.add$O(cycle);
}
return $I$(9).from$Iterable(alternate).eliminate$() < this.basis.size$();
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.EssentialCycles, "MyCycle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.cdk.graph.InitialCycles','.Cycle']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$IA',  function (path) {
;C$.superclazz.c$$org_openscience_cdk_graph_ShortestPaths$IA.apply(this,[null, path]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'edges$IA',  function (path) {
return this.b$['org.openscience.cdk.graph.EssentialCycles'].initial.toEdgeVector$IA(path);
});

Clazz.newMeth(C$, 'family$',  function () {
return Clazz.array(Integer.TYPE, -2, [this.path$()]);
});

Clazz.newMeth(C$, 'sizeOfFamily$',  function () {
return 1;
});

Clazz.newMeth(C$, 'toString',  function () {
return $I$(1,"toString$IA",[this.path$()]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
