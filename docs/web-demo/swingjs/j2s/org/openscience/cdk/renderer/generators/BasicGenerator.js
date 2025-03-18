(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,'org.openscience.cdk.renderer.generators.BasicAtomGenerator','org.openscience.cdk.renderer.generators.BasicBondGenerator','org.openscience.cdk.renderer.generators.BasicSceneGenerator','org.openscience.cdk.renderer.elements.ElementGroup','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicGenerator", null, null, 'org.openscience.cdk.renderer.generators.IGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['sceneGenerator','org.openscience.cdk.renderer.generators.BasicSceneGenerator','atomGenerator','org.openscience.cdk.renderer.generators.BasicAtomGenerator','bondGenerator','org.openscience.cdk.renderer.generators.BasicBondGenerator']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.atomGenerator=Clazz.new_($I$(1,1));
this.bondGenerator=Clazz.new_($I$(2,1));
this.sceneGenerator=Clazz.new_($I$(3,1));
}, 1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (ac, model) {
var diagram=Clazz.new_($I$(4,1));
diagram.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.sceneGenerator.generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel(ac, model));
diagram.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.bondGenerator.generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel(ac, model));
diagram.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.atomGenerator.generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel(ac, model));
return diagram;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
var list=Clazz.new_($I$(5,1));
list.addAll$java_util_Collection(this.atomGenerator.getParameters$());
list.addAll$java_util_Collection(this.bondGenerator.getParameters$());
list.addAll$java_util_Collection(this.sceneGenerator.getParameters$());
return list;
});
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:35 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
