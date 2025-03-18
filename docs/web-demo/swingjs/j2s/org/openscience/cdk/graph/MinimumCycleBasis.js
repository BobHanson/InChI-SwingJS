(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'org.openscience.cdk.graph.InitialCycles','java.util.Objects','org.openscience.cdk.graph.GreedyBasis']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MinimumCycleBasis");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['basis','org.openscience.cdk.graph.GreedyBasis','graph','int[][]']]]

Clazz.newMeth(C$, 'c$$IAA',  function (graph) {
C$.c$$org_openscience_cdk_graph_InitialCycles.apply(this, [Clazz.new_([$I$(2).requireNonNull$O$S(graph, "No graph provided")],$I$(1,1).c$$IAA)]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_InitialCycles',  function (initial) {
C$.c$$org_openscience_cdk_graph_InitialCycles$Z.apply(this, [initial, false]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_InitialCycles$Z',  function (initial, connected) {
;C$.$init$.apply(this);
$I$(2).requireNonNull$O$S(initial, "No InitialCycles provided");
this.graph=initial.graph$();
this.basis=Clazz.new_([initial.numberOfCycles$(), initial.numberOfEdges$()],$I$(3,1).c$$I$I);
var lim=connected ? initial.numberOfEdges$() - this.graph.length + 1 : 2147483647;
for (var cycle, $cycle = initial.cycles$().iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$())),1);) {
if (this.basis.size$() < lim && this.basis.isIndependent$org_openscience_cdk_graph_InitialCycles_Cycle(cycle) ) this.basis.add$org_openscience_cdk_graph_InitialCycles_Cycle(cycle);
}
}, 1);

Clazz.newMeth(C$, 'paths$',  function () {
var paths=Clazz.array(Integer.TYPE, [this.size$(), 0]);
var i=0;
for (var c, $c = this.basis.members$().iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) paths[i++]=c.path$();

return paths;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.basis.size$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
