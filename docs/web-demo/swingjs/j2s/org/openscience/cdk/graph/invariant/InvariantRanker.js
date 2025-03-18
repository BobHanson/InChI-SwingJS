(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph.invariant"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "InvariantRanker");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['aux','int[]']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.aux=Clazz.array(Integer.TYPE, [n]);
}, 1);

Clazz.newMeth(C$, 'rank$IA$IA$I$JA$JA',  function (currEq, nextEq, n, curr, prev) {
this.sortBy$IA$I$I$JA$JA(currEq, 0, n, curr, prev);
var nEquivalent=0;
var nRanks=1 + curr.length - n;
var tmp=this.aux;
var u=currEq[0];
var labelTick=tmp[u]=Long.$ival(prev[u]);
var label=labelTick;
for (var i=1; i < n; i++) {
var v=currEq[i];
if (Long.$ne(prev[v],tmp[u] )) labelTick=Long.$ival(prev[v]);
 else ++labelTick;
if (Long.$ne(curr[v],curr[u] ) || Long.$ne(prev[v],tmp[u] ) ) {
tmp[v]=Long.$ival(prev[v]);
prev[v]=labelTick;
label=labelTick;
++nRanks;
} else {
if (nEquivalent == 0 || nextEq[nEquivalent - 1] != u ) nextEq[nEquivalent++]=u;
nextEq[nEquivalent++]=v;
tmp[v]=Long.$ival(prev[v]);
prev[v]=label;
}u=v;
}
if (nEquivalent < nextEq.length) nextEq[nEquivalent]=-1;
return nRanks;
});

Clazz.newMeth(C$, 'sortBy$IA$I$I$JA$JA',  function (vs, lo, len, curr, prev) {
if (len < 42) {
C$.insertionSortBy$IA$I$I$JA$JA(vs, lo, len, curr, prev);
return;
}var split=(len/2|0);
this.sortBy$IA$I$I$JA$JA(vs, lo, split, curr, prev);
this.sortBy$IA$I$I$JA$JA(vs, lo + split, len - split, curr, prev);
if (!C$.less$I$I$JA$JA(vs[lo + split], vs[lo + split - 1], curr, prev)) return;
p$1.merge$IA$I$I$I$JA$JA.apply(this, [vs, lo, split, len, curr, prev]);
});

Clazz.newMeth(C$, 'merge$IA$I$I$I$JA$JA',  function (vs, lo, split, len, curr, prev) {
System.arraycopy$O$I$O$I$I(vs, lo, this.aux, lo, len);
var i=lo;
var j=lo + split;
var iMax=lo + split;
var jMax=lo + len;
for (var k=lo, end=lo + len; k < end; k++) {
if (i == iMax) vs[k]=this.aux[j++];
 else if (j == jMax) vs[k]=this.aux[i++];
 else if (C$.less$I$I$JA$JA(this.aux[i], this.aux[j], curr, prev)) vs[k]=this.aux[i++];
 else vs[k]=this.aux[j++];
}
}, p$1);

Clazz.newMeth(C$, 'insertionSortBy$IA$I$I$JA$JA',  function (vs, lo, len, curr, prev) {
for (var j=lo + 1, hi=lo + len; j < hi; j++) {
var v=vs[j];
var i=j - 1;
while ((i >= lo) && C$.less$I$I$JA$JA(v, vs[i], curr, prev) )vs[i + 1]=vs[i--];

vs[i + 1]=v;
}
}, 1);

Clazz.newMeth(C$, 'less$I$I$JA$JA',  function (i, j, curr, prev) {
return Long.$lt(prev[i],prev[j] ) || Long.$eq(prev[i],prev[j] ) && Long.$lt(curr[i],curr[j] )  ;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
