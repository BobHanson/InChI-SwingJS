(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,'org.openscience.cdk.renderer.BoundsCalculator',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.BondLength'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.ForegroundColor'],'org.openscience.cdk.renderer.elements.ArrowElement','java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReactionArrowGenerator", null, null, 'org.openscience.cdk.renderer.generators.IGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (reaction, model) {
var totalBoundsReactants=$I$(1,"calculateBounds$org_openscience_cdk_interfaces_IAtomContainerSet",[reaction.getReactants$()]);
var totalBoundsProducts=$I$(1,"calculateBounds$org_openscience_cdk_interfaces_IAtomContainerSet",[reaction.getProducts$()]);
if (totalBoundsReactants == null  || totalBoundsProducts == null  ) return null;
var separation=(model.getParameter$Class(Clazz.getClass($I$(2))).getValue$()).$c() / (model.getParameter$Class(Clazz.getClass($I$(3))).getValue$()).$c();
var foregroundColor=model.getParameter$Class(Clazz.getClass($I$(4))).getValue$();
return Clazz.new_([totalBoundsReactants.getMaxX$() + separation, totalBoundsReactants.getCenterY$(), totalBoundsProducts.getMinX$() - separation, totalBoundsReactants.getCenterY$(), 1 / (model.getParameter$Class(Clazz.getClass($I$(3))).getValue$()).$c(), true, foregroundColor],$I$(5,1).c$$D$D$D$D$D$Z$java_awt_Color);
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(6,"asList$OA",[Clazz.array($I$(7), -1, [])]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:30 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
