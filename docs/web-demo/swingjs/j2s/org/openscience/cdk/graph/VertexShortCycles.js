(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'org.openscience.cdk.graph.InitialCycles','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VertexShortCycles");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['paths','java.util.List']]]

Clazz.newMeth(C$, 'c$$IAA',  function (graph) {
C$.c$$org_openscience_cdk_graph_InitialCycles.apply(this, [Clazz.new_($I$(1,1).c$$IAA,[graph])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_InitialCycles',  function (initialCycles) {
;C$.$init$.apply(this);
var graph=initialCycles.graph$();
var sizeOf=Clazz.array(Integer.TYPE, [graph.length]);
this.paths=Clazz.new_([initialCycles.numberOfCycles$()],$I$(2,1).c$$I);
for (var cycle, $cycle = initialCycles.cycles$().iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$())),1);) {
var length=cycle.length$();
var path=cycle.path$();
var found=false;
for (var v, $v = 0, $$v = path; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
if (sizeOf[v] < 1 || length <= sizeOf[v] ) {
found=true;
sizeOf[v]=length;
}}
if (found) {
for (var p, $p = 0, $$p = cycle.family$(); $p<$$p.length&&((p=($$p[$p])),1);$p++) {
this.paths.add$O(p);
}
}}
}, 1);

Clazz.newMeth(C$, 'paths$',  function () {
var paths=Clazz.array(Integer.TYPE, [this.paths.size$(), 0]);
for (var i=0; i < this.paths.size$(); i++) paths[i]=this.paths.get$I(i);

return paths;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.paths.size$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
