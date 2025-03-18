(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'java.util.Random']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Permutor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['currentRank','maxRank','size'],'O',['random','java.util.Random']]]

Clazz.newMeth(C$, 'c$$I',  function (size) {
;C$.$init$.apply(this);
this.currentRank=0;
this.size=size;
this.maxRank=this.calculateMaxRank$();
this.random=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'hasNext$',  function () {
return this.currentRank < this.maxRank;
});

Clazz.newMeth(C$, 'setRank$I',  function (rank) {
this.currentRank=rank;
});

Clazz.newMeth(C$, 'setPermutation$IA',  function (permutation) {
this.currentRank=p$1.rankPermutationLexicographically$IA.apply(this, [permutation]);
});

Clazz.newMeth(C$, 'getRank$',  function () {
return this.currentRank;
});

Clazz.newMeth(C$, 'getRandomNextPermutation$',  function () {
var d=this.maxRank - this.currentRank;
var r=this.random.nextInt$I(d);
this.currentRank+=Math.max(1, r);
return this.getCurrentPermutation$();
});

Clazz.newMeth(C$, 'getNextPermutation$',  function () {
++this.currentRank;
return this.getCurrentPermutation$();
});

Clazz.newMeth(C$, 'getCurrentPermutation$',  function () {
return p$1.unrankPermutationLexicographically$I$I.apply(this, [this.currentRank, this.size]);
});

Clazz.newMeth(C$, 'calculateMaxRank$',  function () {
return p$1.factorial$I.apply(this, [this.size]) - 1;
});

Clazz.newMeth(C$, 'factorial$I',  function (i) {
if (i > 0) {
return i * p$1.factorial$I.apply(this, [i - 1]);
} else {
return 1;
}}, p$1);

Clazz.newMeth(C$, 'rankPermutationLexicographically$IA',  function (permutation) {
var rank=0;
var n=permutation.length;
var counter=Clazz.array(Integer.TYPE, [n + 1]);
for (var i=1; i < permutation.length; i++) {
counter[i]=permutation[i - 1] + 1;
}
for (var j=1; j <= n; j++) {
rank+=(counter[j] - 1) * p$1.factorial$I.apply(this, [n - j]);
for (var i=j + 1; i <= n; i++) {
if (counter[i] > counter[j]) {
--counter[i];
}}
}
return rank + 1;
}, p$1);

Clazz.newMeth(C$, 'unrankPermutationLexicographically$I$I',  function (rank, size) {
var permutation=Clazz.array(Integer.TYPE, [size + 1]);
permutation[size]=1;
for (var j=1; j < size; j++) {
var d=((rank % p$1.factorial$I.apply(this, [j + 1]))/p$1.factorial$I.apply(this, [j])|0);
rank=rank - d * p$1.factorial$I.apply(this, [j]);
permutation[size - j]=d + 1;
for (var i=size - j + 1; i <= size; i++) {
if (permutation[i] > d) {
++permutation[i];
}}
}
var shiftedPermutation=Clazz.array(Integer.TYPE, [size]);
for (var i=1; i < permutation.length; i++) {
shiftedPermutation[i - 1]=permutation[i] - 1;
}
return shiftedPermutation;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
