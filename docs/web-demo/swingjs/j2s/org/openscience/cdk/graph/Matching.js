(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'java.util.Arrays','org.openscience.cdk.graph.EdmondsMaximumMatching','java.util.BitSet','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Matching");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['match','int[]']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.match=Clazz.array(Integer.TYPE, [n]);
$I$(1).fill$IA$I(this.match, -1);
}, 1);

Clazz.newMeth(C$, 'match$I$I',  function (u, v) {
this.match[u]=v;
this.match[v]=u;
});

Clazz.newMeth(C$, 'other$I',  function (v) {
if (this.unmatched$I(v)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[v + " is not matched"]);
return this.match[v];
});

Clazz.newMeth(C$, 'unmatch$I',  function (v) {
this.match[v]=-1;
});

Clazz.newMeth(C$, 'matched$I',  function (v) {
return !this.unmatched$I(v);
});

Clazz.newMeth(C$, 'unmatched$I',  function (v) {
return this.match[v] == -1 || this.match[this.match[v]] != v ;
});

Clazz.newMeth(C$, 'perfect$IAA$java_util_BitSet',  function (graph, subset) {
if (graph.length != this.match.length || subset.cardinality$() > graph.length ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["graph and matching had different capacity"]);
if ((subset.cardinality$() & 1) == 1) return false;
if (this.arbitaryMatching$IAA$java_util_BitSet(graph, subset)) return true;
$I$(2).maxamise$org_openscience_cdk_graph_Matching$IAA$java_util_BitSet(this, graph, subset);
for (var v=subset.nextSetBit$I(0); v >= 0; v=subset.nextSetBit$I(v + 1)) if (this.unmatched$I(v)) return false;

return true;
});

Clazz.newMeth(C$, 'arbitaryMatching$IAA$java_util_BitSet',  function (graph, subset) {
var unmatched=Clazz.new_($I$(3,1));
var deg=Clazz.array(Integer.TYPE, [graph.length]);
var deg1=Clazz.array(Integer.TYPE, [graph.length]);
var nd1=0;
var nMatched=0;
for (var v=subset.nextSetBit$I(0); v >= 0; v=subset.nextSetBit$I(v + 1)) {
if (this.matched$I(v)) {
Clazz.assert(C$, this, function(){return subset.get$I(this.other$I(v))});
++nMatched;
continue;
}unmatched.set$I(v);
for (var w, $w = 0, $$w = graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) if (subset.get$I(w) && this.unmatched$I(w) ) ++deg[v];

if (deg[v] == 1) deg1[nd1++]=v;
}
while (!unmatched.isEmpty$()){
var v=-1;
while (nd1 > 0){
v=deg1[--nd1];
if (unmatched.get$I(v)) break;
}
if (v < 0 || unmatched.get$I(v) ) v=unmatched.nextSetBit$I(0);
unmatched.clear$I(v);
for (var w, $w = 0, $$w = graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (unmatched.get$I(w)) {
this.match$I$I(v, w);
nMatched+=2;
unmatched.clear$I(w);
for (var u, $u = 0, $$u = graph[w]; $u<$$u.length&&((u=($$u[$u])),1);$u++) if (--deg[u] == 1 && unmatched.get$I(u) ) deg1[nd1++]=u;

if (deg[v] > 1) {
for (var u, $u = 0, $$u = graph[v]; $u<$$u.length&&((u=($$u[$u])),1);$u++) if (--deg[u] == 1 && unmatched.get$I(u) ) deg1[nd1++]=u;

}break;
}}
}
return nMatched == subset.cardinality$();
});

Clazz.newMeth(C$, 'withCapacity$I',  function (capacity) {
return Clazz.new_(C$.c$$I,[capacity]);
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_($I$(4,1).c$$I,[4 * this.match.length]);
sb.append$C("[");
for (var u=0; u < this.match.length; u++) {
var v=this.match[u];
if (v > u && this.match[v] == u ) {
if (sb.length$() > 1) sb.append$S(", ");
sb.append$I(u).append$C("=").append$I(v);
}}
sb.append$C("]");
return sb.toString();
});

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
