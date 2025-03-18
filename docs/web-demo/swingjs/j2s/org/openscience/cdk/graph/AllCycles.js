(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'java.util.ArrayList','org.openscience.cdk.graph.RegularPathGraph','org.openscience.cdk.graph.JumboPathGraph']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AllCycles");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cycles=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['completed'],'O',['cycles','java.util.List']]]

Clazz.newMeth(C$, 'c$$IAA$I$I',  function (graph, maxCycleSize, maxDegree) {
;C$.$init$.apply(this);
var rank=C$.rank$IAA(graph);
var vertices=C$.verticesInOrder$IA(rank);
var pGraph=graph.length < 64 ? Clazz.new_($I$(2,1).c$$IAA$IA$I,[graph, rank, maxCycleSize]) : Clazz.new_($I$(3,1).c$$IAA$IA$I,[graph, rank, maxCycleSize]);
var removed=0;
for (var v, $v = 0, $$v = vertices; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
if (pGraph.degree$I(v) > maxDegree) break;
pGraph.remove$I$java_util_List(v, this.cycles);
++removed;
}
this.completed=removed == graph.length;
}, 1);

Clazz.newMeth(C$, 'verticesInOrder$IA',  function (rank) {
var vs=Clazz.array(Integer.TYPE, [rank.length]);
for (var v=0; v < rank.length; v++) vs[rank[v]]=v;

return vs;
}, 1);

Clazz.newMeth(C$, 'rank$IAA',  function (g) {
var ord=g.length;
var count=Clazz.array(Integer.TYPE, [ord + 1]);
var rank=Clazz.array(Integer.TYPE, [ord]);
for (var ints, $ints = 0, $$ints = g; $ints<$$ints.length&&((ints=($$ints[$ints])),1);$ints++) ++count[ints.length + 1];

for (var i=0; count[i] < ord; i++) count[i + 1]+=count[i];

for (var v=0; v < ord; v++) rank[v]=count[g[v].length]++;

return rank;
}, 1);

Clazz.newMeth(C$, 'paths$',  function () {
var paths=Clazz.array(Integer.TYPE, [this.cycles.size$(), null]);
for (var i=0; i < this.cycles.size$(); i++) paths[i]=this.cycles.get$I(i).clone$();

return paths;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.cycles.size$();
});

Clazz.newMeth(C$, 'completed$',  function () {
return this.completed;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
