(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,'org.openscience.cdk.geometry.GeometryUtil','org.openscience.cdk.renderer.elements.RectangleElement','java.awt.Color','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomContainerBoundsGenerator", null, null, 'org.openscience.cdk.renderer.generators.IGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (container, model) {
var minMax=$I$(1).getMinMax$org_openscience_cdk_interfaces_IAtomContainer(container);
return Clazz.new_([minMax[0], minMax[1], minMax[2], minMax[3], Clazz.new_($I$(3,1).c$$F$F$F,[0.7, 0.7, 1.0])],$I$(2,1).c$$D$D$D$D$java_awt_Color);
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(4).emptyList$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:35 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
