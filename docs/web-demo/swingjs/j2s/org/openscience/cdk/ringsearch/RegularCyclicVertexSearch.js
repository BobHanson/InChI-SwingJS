(function(){var P$=Clazz.newPackage("org.openscience.cdk.ringsearch"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RegularCyclicVertexSearch", null, null, 'org.openscience.cdk.ringsearch.CyclicVertexSearch');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cycles=Clazz.new_($I$(1,1).c$$I,[1]);
this.fused=Clazz.new_($I$(1,1).c$$I,[1]);
this.numCycles=0;
},1);

C$.$fields$=[['I',['numCycles'],'J',['cyclic','visited'],'O',['g','int[][]','cycles','java.util.List','+fused','state','long[]','colors','int[]']]]

Clazz.newMeth(C$, 'c$$IAA',  function (graph) {
;C$.$init$.apply(this);
this.g=graph;
var n=graph.length;
if (n == 0) return;
this.state=Clazz.array(Long.TYPE, [n]);
p$1.search$I$J$J.apply(this, [0, 0, 0]);
var v=1;
while (Long.bitCount$J(this.visited) != n){
if (!p$1.visited$I.apply(this, [v])) {
p$1.search$I$J$J.apply(this, [v, 0, 0]);
}++v;
}
this.state=null;
}, 1);

Clazz.newMeth(C$, 'search$I$J$J',  function (v, prev, curr) {
this.state[v]=curr;
curr=C$.setBit$J$I(curr, v);
(this.visited=Long.$or(this.visited,(curr)));
for (var w, $w = 0, $$w = this.g[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (p$1.visited$I.apply(this, [w])) {
if (C$.isBitSet$J$I(prev, w)) {
++this.numCycles;
p$1.add$J.apply(this, [Long.$xor(this.state[w],curr)]);
}} else {
p$1.search$I$J$J.apply(this, [w, this.state[v], curr]);
}}
}, p$1);

Clazz.newMeth(C$, 'numCycles$',  function () {
return this.numCycles;
});

Clazz.newMeth(C$, 'visited$I',  function (v) {
return C$.isBitSet$J$I(this.visited, v);
}, p$1);

Clazz.newMeth(C$, 'add$J',  function (cycle) {
var intersect=Long.$and(this.cyclic,cycle);
if (Long.$ne(intersect,0 ) && Long.bitCount$J(intersect) > 1 ) {
p$1.addFused$J.apply(this, [cycle]);
} else {
p$1.addIsolated$J.apply(this, [cycle]);
}(this.cyclic=Long.$or(this.cyclic,(cycle)));
}, p$1);

Clazz.newMeth(C$, 'addIsolated$J',  function (cycle) {
this.cycles.add$O(Long.valueOf$J(cycle));
this.fused.add$O(Boolean.FALSE);
}, p$1);

Clazz.newMeth(C$, 'addFused$J',  function (cycle) {
var i=p$1.indexOfFused$I$J.apply(this, [0, cycle]);
if (i != -1) {
this.cycles.set$I$O(i, Long.valueOf$J(Long.$or(cycle,(this.cycles.get$I(i)).$c())));
this.fused.set$I$O(i, Boolean.TRUE);
var j=i;
while ((j=p$1.indexOfFused$I$J.apply(this, [j + 1, (this.cycles.get$I(i)).valueOf()])) != -1){
this.cycles.set$I$O(i, Long.valueOf$J(Long.$or((this.cycles.remove$I(j)).$c(),(this.cycles.get$I(i)).$c())));
this.fused.remove$I(j);
--j;
}
} else {
p$1.addIsolated$J.apply(this, [cycle]);
}}, p$1);

Clazz.newMeth(C$, 'indexOfFused$I$J',  function (start, cycle) {
for (var i=start; i < this.cycles.size$(); i++) {
var intersect=Long.$and((this.cycles.get$I(i)).$c(),cycle);
if (Long.$ne(intersect,0 ) && Long.bitCount$J(intersect) > 1 ) {
return i;
}}
return -1;
}, p$1);

Clazz.newMeth(C$, 'vertexColor$',  function () {
var result=this.colors;
if (result == null ) {
{
result=this.colors;
if (result == null ) {
this.colors=result=p$1.buildVertexColor.apply(this, []);
}}}return result;
});

Clazz.newMeth(C$, 'buildVertexColor',  function () {
var color=Clazz.array(Integer.TYPE, [this.g.length]);
var n=1;
$I$(2).fill$IA$I(color, -1);
for (var cycle, $cycle = this.cycles.iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$()).objectValue$()),1);) {
for (var i=0; i < this.g.length; i++) {
if (Long.$eq((Long.$and(cycle,1)),1 )) color[i]=color[i] < 0 ? n : 0;
(cycle=Long.$sr(cycle,(1)));
}
++n;
}
return color;
}, p$1);

Clazz.newMeth(C$, 'cyclic$I',  function (v) {
return C$.isBitSet$J$I(this.cyclic, v);
});

Clazz.newMeth(C$, 'cyclic$I$I',  function (u, v) {
var colors=this.vertexColor$();
if (colors[u] < 0 || colors[v] < 0 ) return false;
if (colors[u] == 0 || colors[v] == 0 ) {
for (var cycle, $cycle = this.cycles.iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$()).objectValue$()),1);) {
if (C$.isBitSet$J$I(cycle, u) && C$.isBitSet$J$I(cycle, v) ) {
return true;
}}
return false;
}return colors[u] == colors[v];
});

Clazz.newMeth(C$, 'cyclic$',  function () {
return C$.toArray$J(this.cyclic);
});

Clazz.newMeth(C$, 'isolated$',  function () {
var isolated=Clazz.new_([this.cycles.size$()],$I$(1,1).c$$I);
for (var i=0; i < this.cycles.size$(); i++) {
if ((!((this.fused.get$I(i)).$c()))) isolated.add$O(C$.toArray$J((this.cycles.get$I(i)).valueOf()));
}
return isolated.toArray$OA(Clazz.array(Integer.TYPE, [isolated.size$(), null]));
});

Clazz.newMeth(C$, 'fused$',  function () {
var fused=Clazz.new_([this.cycles.size$()],$I$(1,1).c$$I);
for (var i=0; i < this.cycles.size$(); i++) {
if ((this.fused.get$I(i)).valueOf()) fused.add$O(C$.toArray$J((this.cycles.get$I(i)).valueOf()));
}
return fused.toArray$OA(Clazz.array(Integer.TYPE, [fused.size$(), null]));
});

Clazz.newMeth(C$, 'toArray$J',  function (set) {
var vertices=Clazz.array(Integer.TYPE, [Long.bitCount$J(set)]);
var i=0;
for (var v=0; i < vertices.length; v++) {
if (C$.isBitSet$J$I(set, v)) vertices[i++]=v;
}
return vertices;
}, 1);

Clazz.newMeth(C$, 'isBitSet$J$I',  function (value, bit) {
return Long.$ne((Long.$and(value,Long.$sl(1,bit))),0 );
}, 1);

Clazz.newMeth(C$, 'setBit$J$I',  function (value, bit) {
return Long.$or(value,Long.$sl(1,bit));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-12 17:49:08 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
