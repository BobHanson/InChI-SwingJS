(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,'org.openscience.cdk.tools.LoggingToolFactory','org.openscience.cdk.config.Isotopes']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomMassGenerator", null, 'org.openscience.cdk.renderer.generators.BasicAtomGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.logger=$I$(1,"createLoggingTool$Class",[Clazz.getClass(C$)]);
},1);

C$.$fields$=[['O',['logger','org.openscience.cdk.tools.ILoggingTool']]]

Clazz.newMeth(C$, 'showCarbon$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel',  function (atom, container, model) {
var massNumber=atom.getMassNumber$();
if (massNumber != null ) {
try {
var expectedMassNumber=$I$(2).getInstance$().getMajorIsotope$S(atom.getSymbol$()).getMassNumber$();
if (!massNumber.equals$O(expectedMassNumber)) return true;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.logger.warn$O(e);
} else {
throw e;
}
}
}return C$.superclazz.prototype.showCarbon$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel.apply(this, [atom, container, model]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:30 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
