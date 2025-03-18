(function(){var P$=Clazz.newPackage("org.openscience.cdk.ringsearch"),p$1={},I$=[[0,'java.util.ArrayList','java.util.BitSet','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JumboCyclicVertexSearch", null, null, 'org.openscience.cdk.ringsearch.CyclicVertexSearch');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cycles=Clazz.new_($I$(1,1).c$$I,[1]);
this.fused=Clazz.new_($I$(1,1).c$$I,[1]);
this.numCycles=0;
this.lock= Clazz.new_();
},1);

C$.$fields$=[['I',['numCycles'],'O',['g','int[][]','cyclic','java.util.BitSet','cycles','java.util.List','+fused','visited','java.util.BitSet','state','java.util.BitSet[]','colors','int[]','lock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$IAA',  function (graph) {
;C$.$init$.apply(this);
this.g=graph;
var n=graph.length;
this.cyclic=Clazz.new_($I$(2,1).c$$I,[n]);
if (n == 0) return;
this.state=Clazz.array($I$(2), [n]);
this.visited=Clazz.new_($I$(2,1).c$$I,[n]);
var empty=Clazz.new_($I$(2,1).c$$I,[n]);
p$1.search$I$java_util_BitSet$java_util_BitSet.apply(this, [0, C$.copy$java_util_BitSet(empty), C$.copy$java_util_BitSet(empty)]);
var v=0;
while (this.visited.cardinality$() != n){
++v;
if (!this.visited.get$I(v)) {
p$1.search$I$java_util_BitSet$java_util_BitSet.apply(this, [v, C$.copy$java_util_BitSet(empty), C$.copy$java_util_BitSet(empty)]);
}}
this.state=null;
this.visited=null;
}, 1);

Clazz.newMeth(C$, 'search$I$java_util_BitSet$java_util_BitSet',  function (v, prev, curr) {
this.state[v]=curr;
curr=C$.copy$java_util_BitSet(curr);
curr.set$I(v);
this.visited.or$java_util_BitSet(curr);
for (var w, $w = 0, $$w = this.g[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (prev.get$I(w)) {
++this.numCycles;
p$1.add$java_util_BitSet.apply(this, [C$.xor$java_util_BitSet$java_util_BitSet(this.state[w], curr)]);
} else if (!this.visited.get$I(w)) {
p$1.search$I$java_util_BitSet$java_util_BitSet.apply(this, [w, this.state[v], curr]);
}}
}, p$1);

Clazz.newMeth(C$, 'numCycles$',  function () {
return this.numCycles;
});

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
$I$(3).fill$IA$I(color, -1);
for (var cycle, $cycle = this.cycles.iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$())),1);) {
for (var i=cycle.nextSetBit$I(0); i >= 0; i=cycle.nextSetBit$I(i + 1)) {
color[i]=color[i] < 0 ? n : 0;
}
++n;
}
return color;
}, p$1);

Clazz.newMeth(C$, 'cyclic$I',  function (v) {
return this.cyclic.get$I(v);
});

Clazz.newMeth(C$, 'cyclic$I$I',  function (u, v) {
var colors=this.vertexColor$();
if (colors[u] < 0 || colors[v] < 0 ) return false;
if (colors[u] == 0 || colors[v] == 0 ) {
for (var cycle, $cycle = this.cycles.iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$())),1);) {
if (cycle.get$I(u) && cycle.get$I(v) ) return true;
}
return false;
}return colors[u] == colors[v];
});

Clazz.newMeth(C$, 'cyclic$',  function () {
return C$.toArray$java_util_BitSet(this.cyclic);
});

Clazz.newMeth(C$, 'isolated$',  function () {
var isolated=Clazz.new_([this.cycles.size$()],$I$(1,1).c$$I);
for (var i=0; i < this.cycles.size$(); i++) {
if ((!((this.fused.get$I(i)).$c()))) isolated.add$O(C$.toArray$java_util_BitSet(this.cycles.get$I(i)));
}
return isolated.toArray$OA(Clazz.array(Integer.TYPE, [isolated.size$(), null]));
});

Clazz.newMeth(C$, 'fused$',  function () {
var fused=Clazz.new_([this.cycles.size$()],$I$(1,1).c$$I);
for (var i=0; i < this.cycles.size$(); i++) {
if ((this.fused.get$I(i)).valueOf()) fused.add$O(C$.toArray$java_util_BitSet(this.cycles.get$I(i)));
}
return fused.toArray$OA(Clazz.array(Integer.TYPE, [fused.size$(), null]));
});

Clazz.newMeth(C$, 'add$java_util_BitSet',  function (cycle) {
var intersect=C$.and$java_util_BitSet$java_util_BitSet(cycle, this.cyclic);
if (intersect.cardinality$() > 1) {
p$1.addFused$java_util_BitSet.apply(this, [cycle]);
} else {
p$1.addIsolated$java_util_BitSet.apply(this, [cycle]);
}this.cyclic.or$java_util_BitSet(cycle);
}, p$1);

Clazz.newMeth(C$, 'addIsolated$java_util_BitSet',  function (cycle) {
this.cycles.add$O(cycle);
this.fused.add$O(Boolean.valueOf$Z(false));
}, p$1);

Clazz.newMeth(C$, 'addFused$java_util_BitSet',  function (cycle) {
var i=p$1.indexOfFused$I$java_util_BitSet.apply(this, [0, cycle]);
if (i != -1) {
this.cycles.get$I(i).or$java_util_BitSet(cycle);
this.fused.set$I$O(i, Boolean.valueOf$Z(true));
var j=i;
while ((j=p$1.indexOfFused$I$java_util_BitSet.apply(this, [j + 1, cycle])) != -1){
this.cycles.get$I(i).or$java_util_BitSet(this.cycles.remove$I(j));
this.fused.remove$I(j);
--j;
}
} else {
p$1.addIsolated$java_util_BitSet.apply(this, [cycle]);
}}, p$1);

Clazz.newMeth(C$, 'indexOfFused$I$java_util_BitSet',  function (start, cycle) {
for (var i=start; i < this.cycles.size$(); i++) {
if (C$.and$java_util_BitSet$java_util_BitSet(this.cycles.get$I(i), cycle).cardinality$() > 1) {
return i;
}}
return -1;
}, p$1);

Clazz.newMeth(C$, 'toArray$java_util_BitSet',  function (set) {
var vertices=Clazz.array(Integer.TYPE, [set.cardinality$()]);
var i=0;
for (var v=0; i < vertices.length; v++) {
if (set.get$I(v)) {
vertices[i++]=v;
}}
return vertices;
}, 1);

Clazz.newMeth(C$, 'xor$java_util_BitSet$java_util_BitSet',  function (x, y) {
var z=C$.copy$java_util_BitSet(x);
z.xor$java_util_BitSet(y);
return z;
}, 1);

Clazz.newMeth(C$, 'and$java_util_BitSet$java_util_BitSet',  function (x, y) {
var z=C$.copy$java_util_BitSet(x);
z.and$java_util_BitSet(y);
return z;
}, 1);

Clazz.newMeth(C$, 'copy$java_util_BitSet',  function (org) {
var cpy=org.clone$();
return cpy;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-12 17:49:08 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
