(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'org.openscience.cdk.interfaces.IBond']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomContainerBondPermutor", null, 'org.openscience.cdk.graph.AtomContainerPermutor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
;C$.superclazz.c$$I$org_openscience_cdk_interfaces_IAtomContainer.apply(this,[atomContainer.getBondCount$(), atomContainer]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'containerFromPermutation$IA',  function (permutation) {
try {
var permutedContainer=this.atomContainer.clone$();
var n=permutedContainer.getBondCount$();
var permutedBonds=Clazz.array($I$(1), [n]);
for (var i=0; i < n; i++) {
permutedBonds[i]=permutedContainer.getBond$I(permutation[i]);
}
permutedContainer.setBonds$org_openscience_cdk_interfaces_IBondA(permutedBonds);
return permutedContainer;
} catch (cne) {
if (Clazz.exceptionOf(cne,"CloneNotSupportedException")){
return null;
} else {
throw cne;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
