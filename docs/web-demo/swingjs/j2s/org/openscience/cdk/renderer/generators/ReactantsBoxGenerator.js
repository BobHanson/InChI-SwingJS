(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,['org.openscience.cdk.renderer.generators.ReactionSceneGenerator','.ShowReactionBoxes'],'org.openscience.cdk.renderer.elements.ElementGroup',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.BondLength'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],'org.openscience.cdk.renderer.BoundsCalculator',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.ForegroundColor'],'org.openscience.cdk.renderer.elements.RectangleElement','org.openscience.cdk.renderer.elements.TextElement','java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReactantsBoxGenerator", null, null, 'org.openscience.cdk.renderer.generators.IGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (reaction, model) {
if ((!((model.getParameter$Class(Clazz.getClass($I$(1))).getValue$()).$c()))) return null;
if (reaction.getReactantCount$() == 0) return Clazz.new_($I$(2,1));
var separation=(model.getParameter$Class(Clazz.getClass($I$(3))).getValue$()).$c() / (model.getParameter$Class(Clazz.getClass($I$(4))).getValue$()).$c() / 2 ;
var totalBounds=$I$(5,"calculateBounds$org_openscience_cdk_interfaces_IAtomContainerSet",[reaction.getReactants$()]);
var diagram=Clazz.new_($I$(2,1));
var minX=totalBounds.getMinX$();
var minY=totalBounds.getMinY$();
var maxX=totalBounds.getMaxX$();
var maxY=totalBounds.getMaxY$();
var foregroundColor=model.getParameter$Class(Clazz.getClass($I$(6))).getValue$();
diagram.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(7,1).c$$D$D$D$D$java_awt_Color,[minX - separation, minY - separation, maxX + separation, maxY + separation, foregroundColor]));
diagram.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_([(minX + maxX) / 2, minY - separation, "Reactants", foregroundColor],$I$(8,1).c$$D$D$S$java_awt_Color));
return diagram;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(9,"asList$OA",[Clazz.array($I$(10), -1, [])]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:35 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
