(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph.invariant"),p$1={},I$=[[0,'org.openscience.cdk.tools.manipulator.AtomContainerManipulator','java.util.Arrays','org.openscience.cdk.graph.invariant.InvariantRanker','java.io.BufferedReader','java.io.InputStreamReader']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Canon");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['symOnly'],'O',['g','int[][]','labelling','long[]','+symmetry']]
,['O',['PRIMES','int[]']]]

Clazz.newMeth(C$, 'c$$IAA$JA$ZA$Z',  function (g, partition, hydrogens, symOnly) {
;C$.$init$.apply(this);
this.g=g;
this.symOnly=symOnly;
this.labelling=partition.clone$();
this.symmetry=p$1.refine$JA$ZA.apply(this, [this.labelling, hydrogens]);
}, 1);

Clazz.newMeth(C$, 'label$org_openscience_cdk_interfaces_IAtomContainer$IAA$I',  function (container, g, opts) {
return C$.label$org_openscience_cdk_interfaces_IAtomContainer$IAA$JA(container, g, C$.basicInvariants$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(container, g, opts));
}, 1);

Clazz.newMeth(C$, 'label$org_openscience_cdk_interfaces_IAtomContainer$IAA',  function (container, g) {
return C$.label$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(container, g, 0);
}, 1);

Clazz.newMeth(C$, 'label$org_openscience_cdk_interfaces_IAtomContainer$IAA$JA',  function (container, g, initial) {
if (initial.length != g.length) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of initial != number of atoms"]);
return Clazz.new_(C$.c$$IAA$JA$ZA$Z,[g, initial, C$.terminalHydrogens$org_openscience_cdk_interfaces_IAtomContainer$IAA(container, g), false]).labelling;
}, 1);

Clazz.newMeth(C$, 'label$org_openscience_cdk_interfaces_IAtomContainer$IAA$java_util_Comparator',  function (container, g, cmp) {
if (g.length == 0) return Clazz.array(Long.TYPE, [0]);
var atoms=$I$(1).getAtomArray$org_openscience_cdk_interfaces_IAtomContainer(container);
$I$(2).sort$OA$java_util_Comparator(atoms, cmp);
var initial=Clazz.array(Long.TYPE, [atoms.length]);
var part=1;
initial[container.indexOf$org_openscience_cdk_interfaces_IAtom(atoms[0])]=part;
for (var i=1; i < atoms.length; i++) {
if (cmp.compare$O$O(atoms[i], atoms[i - 1]) != 0) (part=Long.$inc(part,1));
initial[container.indexOf$org_openscience_cdk_interfaces_IAtom(atoms[i])]=part;
}
return C$.label$org_openscience_cdk_interfaces_IAtomContainer$IAA$JA(container, g, initial);
}, 1);

Clazz.newMeth(C$, 'symmetry$org_openscience_cdk_interfaces_IAtomContainer$IAA$I',  function (container, g, opts) {
return Clazz.new_(C$.c$$IAA$JA$ZA$Z,[g, C$.basicInvariants$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(container, g, opts), C$.terminalHydrogens$org_openscience_cdk_interfaces_IAtomContainer$IAA(container, g), true]).symmetry;
}, 1);

Clazz.newMeth(C$, 'symmetry$org_openscience_cdk_interfaces_IAtomContainer$IAA',  function (container, g) {
return C$.symmetry$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(container, g, 0);
}, 1);

Clazz.newMeth(C$, 'refine$JA$ZA',  function (invariants, hydrogens) {
var ord=this.g.length;
var ranker=Clazz.new_($I$(3,1).c$$I,[ord]);
var currVs=Clazz.array(Integer.TYPE, [ord]);
var nextVs=Clazz.array(Integer.TYPE, [ord]);
var nnu=ord;
for (var i=0; i < ord; i++) currVs[i]=i;

var prev=invariants;
var curr=$I$(2).copyOf$JA$I(invariants, ord);
$I$(2).fill$JA$J(prev, 1);
var n=0;
var m=0;
var symmetry=null;
while (n < ord){
while ((n=ranker.rank$IA$IA$I$JA$JA(currVs, nextVs, nnu, curr, prev)) > m && n < ord ){
nnu=0;
for (var i=0; i < ord && nextVs[i] >= 0 ; i++) {
var v=nextVs[i];
currVs[nnu++]=v;
curr[v]=hydrogens[v] ? prev[v] : p$1.primeProduct$IA$JA$ZA.apply(this, [this.g[v], prev, hydrogens]);
}
m=n;
}
if (symmetry == null ) {
for (var i=0; i < this.g.length; i++) {
if (hydrogens[i]) {
curr[i]=prev[this.g[i][0]];
hydrogens[i]=false;
}}
n=ranker.rank$IA$IA$I$JA$JA(currVs, nextVs, nnu, curr, prev);
symmetry=$I$(2).copyOf$JA$I(prev, ord);
nnu=0;
for (var i=0; i < ord && nextVs[i] >= 0 ; i++) {
currVs[nnu++]=nextVs[i];
}
}if (this.symOnly || n == ord ) return symmetry;
var lo=nextVs[0];
for (var i=1; i < ord && nextVs[i] >= 0  && Long.$eq(prev[nextVs[i]],prev[lo] ) ; i++) (Clazz.incrAN(prev,nextVs[i],1,false));

System.arraycopy$O$I$O$I$I(nextVs, 0, currVs, 0, nnu);
}
if (symmetry == null ) symmetry=Clazz.array(Long.TYPE, [0]);
return symmetry;
}, p$1);

Clazz.newMeth(C$, 'primeProduct$IA$JA$ZA',  function (ws, ranks, hydrogens) {
var prod=1;
for (var w, $w = 0, $$w = ws; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (!hydrogens[w]) {
(prod=Long.$mul(prod,(C$.PRIMES[Long.$ival(ranks[w])])));
}}
return prod;
}, p$1);

Clazz.newMeth(C$, 'basicInvariants$org_openscience_cdk_interfaces_IAtomContainer$IAA',  function (container, graph) {
return C$.basicInvariants$org_openscience_cdk_interfaces_IAtomContainer$IAA$I(container, graph, 0);
}, 1);

Clazz.newMeth(C$, 'basicInvariants$org_openscience_cdk_interfaces_IAtomContainer$IAA$I',  function (container, graph, flav) {
var labels=Clazz.array(Long.TYPE, [graph.length]);
for (var v=0; v < graph.length; v++) {
var atom=container.getAtom$I(v);
var deg=graph[v].length;
var impH=C$.implH$org_openscience_cdk_interfaces_IAtom(atom);
var expH=0;
var elem=C$.atomicNumber$org_openscience_cdk_interfaces_IAtom(atom);
var chg=C$.charge$org_openscience_cdk_interfaces_IAtom(atom);
for (var w, $w = 0, $$w = graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) if (C$.atomicNumber$org_openscience_cdk_interfaces_IAtom(container.getAtom$I(w)) == 1) ++expH;

var label=0;
(label=Long.$or(label,(deg + impH & 15)));
(label=Long.$sl(label,(4)));
(label=Long.$or(label,(deg - expH & 15)));
(label=Long.$sl(label,(7)));
(label=Long.$or(label,(elem & 127)));
(label=Long.$sl(label,(1)));
(label=Long.$or(label,(chg >> 31 & 1)));
(label=Long.$sl(label,(2)));
(label=Long.$or(label,(Math.abs(chg) & 3)));
(label=Long.$sl(label,(4)));
(label=Long.$or(label,(impH + expH & 15)));
if ((flav & 8) != 0 && atom.getMassNumber$() != null  ) {
(label=Long.$sl(label,(10)));
(label=Long.$or(label,((atom.getMassNumber$()).valueOf())));
}labels[v]=label;
}
return labels;
}, 1);

Clazz.newMeth(C$, 'atomicNumber$org_openscience_cdk_interfaces_IAtom',  function (atom) {
var elem=atom.getAtomicNumber$();
if (elem != null ) return (elem).$c();
if (Clazz.instanceOf(atom, "org.openscience.cdk.interfaces.IPseudoAtom")) return 0;
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["a non-pseudoatom had unset atomic number"]);
}, 1);

Clazz.newMeth(C$, 'implH$org_openscience_cdk_interfaces_IAtom',  function (atom) {
var h=atom.getImplicitHydrogenCount$();
if (h != null ) return (h).$c();
if (Clazz.instanceOf(atom, "org.openscience.cdk.interfaces.IPseudoAtom")) return 0;
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["a non-pseudoatom had unset hydrogen count"]);
}, 1);

Clazz.newMeth(C$, 'charge$org_openscience_cdk_interfaces_IAtom',  function (atom) {
var charge=atom.getFormalCharge$();
if (charge != null ) return (charge).$c();
return 0;
}, 1);

Clazz.newMeth(C$, 'terminalHydrogens$org_openscience_cdk_interfaces_IAtomContainer$IAA',  function (ac, g) {
var hydrogens=Clazz.array(Boolean.TYPE, [ac.getAtomCount$()]);
for (var i=0; i < ac.getAtomCount$(); i++) {
var atom=ac.getAtom$I(i);
hydrogens[i]=(atom.getAtomicNumber$()).$c() === 1  && atom.getMassNumber$() == null   && g[i].length == 1 ;
}
return hydrogens;
}, 1);

Clazz.newMeth(C$, 'loadPrimes$',  function () {
try {
var br=Clazz.new_([Clazz.new_([Clazz.getClass(C$).getResourceAsStream$S("primes.dat")],$I$(5,1).c$$java_io_InputStream)],$I$(4,1).c$$java_io_Reader);
try {
var primes=Clazz.array(Integer.TYPE, [10000]);
var i=0;
var line;
while ((line=br.readLine$()) != null ){
primes[i++]=Integer.parseInt$S(line);
}
Clazz.assert(C$, this, function(){return i == 10000});
return primes;

}finally{/*res*/br&&br.close$&&br.close$();}
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException") || Clazz.exceptionOf(e,"java.io.IOException")){
System.err.println$S("Critical - could not load primes table for canonical labelling!");
return Clazz.array(Integer.TYPE, [0]);
} else {
throw e;
}
}
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.PRIMES=C$.loadPrimes$();
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
