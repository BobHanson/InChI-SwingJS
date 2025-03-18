(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'org.openscience.cdk.graph.InitialCycles','java.util.Objects','org.openscience.cdk.graph.GreedyBasis','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RelevantCycles");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['basis','org.openscience.cdk.graph.GreedyBasis']]]

Clazz.newMeth(C$, 'c$$IAA',  function (graph) {
C$.c$$org_openscience_cdk_graph_InitialCycles.apply(this, [Clazz.new_($I$(1,1).c$$IAA,[graph])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_InitialCycles',  function (initial) {
;C$.$init$.apply(this);
$I$(2).requireNonNull$O$S(initial, "No InitialCycles provided");
this.basis=Clazz.new_([initial.numberOfCycles$(), initial.numberOfEdges$()],$I$(3,1).c$$I$I);
for (var length, $length = initial.lengths$().iterator$(); $length.hasNext$()&&((length=($length.next$()).intValue$()),1);) {
this.basis.addAll$Iterable(p$1.independent$java_util_Collection.apply(this, [initial.cyclesOfLength$I(length)]));
}
}, 1);

Clazz.newMeth(C$, 'independent$java_util_Collection',  function (cycles) {
var independent=Clazz.new_([cycles.size$()],$I$(4,1).c$$I);
for (var cycle, $cycle = cycles.iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$())),1);) {
if (this.basis.isIndependent$org_openscience_cdk_graph_InitialCycles_Cycle(cycle)) independent.add$O(cycle);
}
return independent;
}, p$1);

Clazz.newMeth(C$, 'paths$',  function () {
var paths=Clazz.array(Integer.TYPE, [this.size$(), 0]);
var i=0;
for (var c, $c = this.basis.members$().iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
for (var path, $path = 0, $$path = c.family$(); $path<$$path.length&&((path=($$path[$path])),1);$path++) paths[i++]=path;

}
return paths;
});

Clazz.newMeth(C$, 'size$',  function () {
var size=0;
for (var c, $c = this.basis.members$().iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) size+=c.sizeOfFamily$();

return size;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
