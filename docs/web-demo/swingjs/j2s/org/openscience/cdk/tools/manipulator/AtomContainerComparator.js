(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),p$1={},I$=[[0,'org.openscience.cdk.tools.LoggingToolFactory','org.openscience.cdk.tools.manipulator.AtomContainerManipulator','org.openscience.cdk.config.Isotopes']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomContainerComparator", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.logger=$I$(1,"createLoggingTool$Class",[Clazz.getClass(C$)]);
},1);

C$.$fields$=[['O',['logger','org.openscience.cdk.tools.ILoggingTool']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['compare$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','compare$O$O'],  function (o1, o2) {
if (o1 == null  && o2 == null  ) return 0;
if (o1 == null ) return 1;
if (o2 == null ) return -1;
var atomContainer1=o1;
var atomContainer2=o2;
if (atomContainer1.getAtomCount$() > atomContainer2.getAtomCount$()) return 1;
 else if (atomContainer1.getAtomCount$() < atomContainer2.getAtomCount$()) return -1;
 else {
var mw1;
var mw2;
try {
mw1=p$1.getMolecularWeight$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [atomContainer1]);
mw2=p$1.getMolecularWeight$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [atomContainer2]);
} catch (e) {
if (Clazz.exceptionOf(e,"org.openscience.cdk.exception.CDKException")){
this.logger.warn$O("Exception in molecular mass calculation.");
return 0;
} else {
throw e;
}
}
if (mw1 > mw2 ) return 1;
 else if (mw1 < mw2 ) return -1;
 else {
if (atomContainer1.getBondCount$() > atomContainer2.getBondCount$()) return 1;
 else if (atomContainer1.getBondCount$() < atomContainer2.getBondCount$()) return -1;
 else {
var bondOrderSum1=$I$(2).getSingleBondEquivalentSum$org_openscience_cdk_interfaces_IAtomContainer(atomContainer1);
var bondOrderSum2=$I$(2).getSingleBondEquivalentSum$org_openscience_cdk_interfaces_IAtomContainer(atomContainer2);
if (bondOrderSum1 > bondOrderSum2 ) return 1;
 else if (bondOrderSum1 < bondOrderSum2 ) return -1;
}}}return 0;
});

Clazz.newMeth(C$, 'getMolecularWeight$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var mw=0.0;
try {
var isotopeFactory=$I$(3).getInstance$();
for (var atom, $atom = atomContainer.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if ((atom.getAtomicNumber$()).$c() !== 1 ) {
var majorIsotope=isotopeFactory.getMajorIsotope$S(atom.getSymbol$());
if (majorIsotope != null  && majorIsotope.getExactMass$() != null  ) {
mw+=(majorIsotope.getExactMass$()).$c();
}}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.CDKException').c$$S$Throwable,[e.getMessage$(), e]);
} else {
throw e;
}
}
return mw;
}, p$1);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
