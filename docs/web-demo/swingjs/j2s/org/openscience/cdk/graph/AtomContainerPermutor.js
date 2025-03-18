(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AtomContainerPermutor", null, 'org.openscience.cdk.graph.Permutor', 'java.util.Iterator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['atomContainer','org.openscience.cdk.interfaces.IAtomContainer']]]

Clazz.newMeth(C$, 'c$$I$org_openscience_cdk_interfaces_IAtomContainer',  function (size, atomContainer) {
;C$.superclazz.c$$I.apply(this,[size]);C$.$init$.apply(this);
this.atomContainer=atomContainer;
}, 1);

Clazz.newMeth(C$, 'randomNext$',  function () {
if (!this.hasNext$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
} else {
return this.containerFromPermutation$IA(this.getRandomNextPermutation$());
}});

Clazz.newMeth(C$, 'next$',  function () {
if (!this.hasNext$()) {
throw Clazz.new_(Clazz.load('java.util.NoSuchElementException'));
} else {
return this.containerFromPermutation$IA(this.getNextPermutation$());
}});

Clazz.newMeth(C$, 'remove$',  function () {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
