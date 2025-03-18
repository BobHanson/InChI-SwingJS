(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'java.util.HashMap','java.util.LinkedList','org.openscience.cdk.group.DisjointSetForest','java.util.BitSet','java.util.Arrays',['org.openscience.cdk.graph.EdmondsMaximumMatching','.Tuple']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "EdmondsMaximumMatching", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Tuple',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bridges=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['O',['graph','int[][]','matching','org.openscience.cdk.graph.Matching','subset','java.util.BitSet','even','int[]','+odd','queue','java.util.List','dsf','org.openscience.cdk.group.DisjointSetForest','bridges','java.util.Map','path','int[]','vAncestors','java.util.BitSet','+wAncestors']]]

Clazz.newMeth(C$, 'c$$IAA$org_openscience_cdk_graph_Matching$java_util_BitSet',  function (graph, matching, subset) {
;C$.$init$.apply(this);
this.graph=graph;
this.matching=matching;
this.subset=subset;
this.even=Clazz.array(Integer.TYPE, [graph.length]);
this.odd=Clazz.array(Integer.TYPE, [graph.length]);
this.queue=Clazz.new_($I$(2,1));
this.dsf=Clazz.new_($I$(3,1).c$$I,[graph.length]);
this.path=Clazz.array(Integer.TYPE, [graph.length]);
this.vAncestors=Clazz.new_($I$(4,1).c$$I,[graph.length]);
this.wAncestors=Clazz.new_($I$(4,1).c$$I,[graph.length]);
while (p$1.augment.apply(this, []));
}, 1);

Clazz.newMeth(C$, 'augment',  function () {
$I$(5).fill$IA$I(this.even, -1);
$I$(5).fill$IA$I(this.odd, -1);
this.dsf=Clazz.new_($I$(3,1).c$$I,[this.graph.length]);
this.bridges.clear$();
this.queue.clear$();
for (var v=0; v < this.graph.length; v++) {
if (this.subset.get$I(v) && this.matching.unmatched$I(v) ) {
this.even[v]=v;
this.queue.add$O(Integer.valueOf$I(v));
}}
while (!this.queue.isEmpty$()){
var v=(this.queue.remove$I(0)).$c();
for (var w, $w = 0, $$w = this.graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (!this.subset.get$I(w)) continue;
if (this.even[this.dsf.getRoot$I(w)] != -1) {
if (p$1.check$I$I.apply(this, [v, w])) return true;
} else if (this.odd[w] == -1) {
this.odd[w]=v;
var u=this.matching.other$I(w);
if (this.even[this.dsf.getRoot$I(u)] == -1) {
this.even[u]=w;
this.queue.add$O(Integer.valueOf$I(u));
}}}
}
return false;
}, p$1);

Clazz.newMeth(C$, 'check$I$I',  function (v, w) {
if (this.dsf.getRoot$I(v) == this.dsf.getRoot$I(w)) return false;
this.vAncestors.clear$();
this.wAncestors.clear$();
var vCurr=v;
var wCurr=w;
while (true){
vCurr=p$1.parent$java_util_BitSet$I.apply(this, [this.vAncestors, vCurr]);
wCurr=p$1.parent$java_util_BitSet$I.apply(this, [this.wAncestors, wCurr]);
if (vCurr == wCurr) {
p$1.blossom$I$I$I.apply(this, [v, w, vCurr]);
return false;
}if (this.dsf.getRoot$I(this.even[vCurr]) == vCurr && this.dsf.getRoot$I(this.even[wCurr]) == wCurr ) {
p$1.augment$I.apply(this, [v]);
p$1.augment$I.apply(this, [w]);
this.matching.match$I$I(v, w);
return true;
}if (this.wAncestors.get$I(vCurr)) {
p$1.blossom$I$I$I.apply(this, [v, w, vCurr]);
return false;
}if (this.vAncestors.get$I(wCurr)) {
p$1.blossom$I$I$I.apply(this, [v, w, wCurr]);
return false;
}}
}, p$1);

Clazz.newMeth(C$, 'parent$java_util_BitSet$I',  function (ancestors, curr) {
curr=this.dsf.getRoot$I(curr);
ancestors.set$I(curr);
var parent=this.dsf.getRoot$I(this.even[curr]);
if (parent == curr) return curr;
ancestors.set$I(parent);
return this.dsf.getRoot$I(this.odd[parent]);
}, p$1);

Clazz.newMeth(C$, 'blossom$I$I$I',  function (v, w, base) {
base=this.dsf.getRoot$I(base);
var supports1=p$1.blossomSupports$I$I$I.apply(this, [v, w, base]);
var supports2=p$1.blossomSupports$I$I$I.apply(this, [w, v, base]);
for (var k, $k = 0, $$k = supports1; $k<$$k.length&&((k=($$k[$k])),1);$k++) this.dsf.makeUnion$I$I(k, supports1[0]);

for (var j, $j = 0, $$j = supports2; $j<$$j.length&&((j=($$j[$j])),1);$j++) this.dsf.makeUnion$I$I(j, supports2[0]);

this.even[this.dsf.getRoot$I(base)]=this.even[base];
}, p$1);

Clazz.newMeth(C$, 'blossomSupports$I$I$I',  function (v, w, base) {
var n=0;
this.path[n++]=this.dsf.getRoot$I(v);
var b=Clazz.new_($I$(6,1).c$$I$I,[v, w]);
while (this.path[n - 1] != base){
var u=this.even[this.path[n - 1]];
this.path[n++]=u;
this.bridges.put$O$O(Integer.valueOf$I(u), b);
this.queue.add$O(Integer.valueOf$I(u));
this.path[n++]=this.dsf.getRoot$I(this.odd[u]);
}
return $I$(5).copyOf$IA$I(this.path, n);
}, p$1);

Clazz.newMeth(C$, 'augment$I',  function (v) {
var n=p$1.buildPath$IA$I$I$I.apply(this, [this.path, 0, v, -1]);
for (var i=2; i < n; i+=2) {
this.matching.match$I$I(this.path[i], this.path[i - 1]);
}
}, p$1);

Clazz.newMeth(C$, 'buildPath$IA$I$I$I',  function (path, i, start, goal) {
while (true){
while (this.odd[start] != -1){
var bridge=this.bridges.get$O(Integer.valueOf$I(start));
var j=p$1.buildPath$IA$I$I$I.apply(this, [path, i, bridge.first, start]);
C$.reverse$IA$I$I(path, i, j - 1);
i=j;
start=bridge.second;
}
path[i++]=start;
if (this.matching.unmatched$I(start)) return i;
path[i++]=this.matching.other$I(start);
if (path[i - 1] == goal) return i;
start=this.odd[path[i - 1]];
}
}, p$1);

Clazz.newMeth(C$, 'reverse$IA$I$I',  function (path, i, j) {
while (i < j){
var tmp=path[i];
path[i]=path[j];
path[j]=tmp;
++i;
--j;
}
}, 1);

Clazz.newMeth(C$, 'maxamise$org_openscience_cdk_graph_Matching$IAA$java_util_BitSet',  function (matching, graph, subset) {
Clazz.new_(C$.c$$IAA$org_openscience_cdk_graph_Matching$java_util_BitSet,[graph, matching, subset]);
return matching;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.EdmondsMaximumMatching, "Tuple", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['first','second']]]

Clazz.newMeth(C$, 'c$$I$I',  function (first, second) {
;C$.$init$.apply(this);
this.first=first;
this.second=second;
}, 1);

Clazz.newMeth(C$, 'hashCode$',  function () {
return 31 * this.first + this.second;
});

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (this === o ) return true;
if (o == null  || this.getClass$() !== o.getClass$()  ) return false;
var that=o;
return this.first == that.first && this.second == that.second ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
