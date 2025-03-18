(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'org.openscience.cdk.interfaces.IAtom']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomContainerAtomPermutor", null, 'org.openscience.cdk.graph.AtomContainerPermutor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
;C$.superclazz.c$$I$org_openscience_cdk_interfaces_IAtomContainer.apply(this,[atomContainer.getAtomCount$(), atomContainer]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'containerFromPermutation$IA',  function (permutation) {
try {
var permutedContainer=this.atomContainer.clone$();
var atoms=Clazz.array($I$(1), [this.atomContainer.getAtomCount$()]);
for (var i=0; i < this.atomContainer.getAtomCount$(); i++) {
atoms[permutation[i]]=permutedContainer.getAtom$I(i);
}
permutedContainer.setAtoms$org_openscience_cdk_interfaces_IAtomA(atoms);
return permutedContainer;
} catch (c) {
if (Clazz.exceptionOf(c,"CloneNotSupportedException")){
return null;
} else {
throw c;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
