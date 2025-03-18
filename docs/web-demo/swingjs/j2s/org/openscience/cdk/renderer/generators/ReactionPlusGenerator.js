(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),p$1={},I$=[[0,'org.openscience.cdk.renderer.elements.ElementGroup',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.ForegroundColor'],'org.openscience.cdk.renderer.BoundsCalculator','org.openscience.cdk.renderer.elements.TextElement','java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReactionPlusGenerator", null, null, 'org.openscience.cdk.renderer.generators.IGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (reaction, model) {
var diagram=Clazz.new_($I$(1,1));
var color=model.getParameter$Class(Clazz.getClass($I$(2))).getValue$();
var reactants=reaction.getReactants$();
if (reactants.getAtomContainerCount$() > 1) {
var totalBoundsReactants=$I$(3).calculateBounds$org_openscience_cdk_interfaces_IAtomContainerSet(reactants);
var bounds1=$I$(3,"calculateBounds$org_openscience_cdk_interfaces_IAtomContainer",[reactants.getAtomContainer$I(0)]);
var axis=totalBoundsReactants.getCenterY$();
for (var i=1; i < reaction.getReactantCount$(); i++) {
var bounds2=$I$(3,"calculateBounds$org_openscience_cdk_interfaces_IAtomContainer",[reactants.getAtomContainer$I(i)]);
diagram.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.makePlus$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$D$java_awt_Color.apply(this, [bounds1, bounds2, axis, color]));
bounds1=bounds2;
}
}var products=reaction.getProducts$();
if (products.getAtomContainerCount$() > 1) {
var totalBoundsProducts=$I$(3).calculateBounds$org_openscience_cdk_interfaces_IAtomContainerSet(products);
var axis=totalBoundsProducts.getCenterY$();
var bounds1=$I$(3,"calculateBounds$org_openscience_cdk_interfaces_IAtomContainer",[reactants.getAtomContainer$I(0)]);
for (var i=1; i < reaction.getProductCount$(); i++) {
var bounds2=$I$(3,"calculateBounds$org_openscience_cdk_interfaces_IAtomContainer",[products.getAtomContainer$I(i)]);
diagram.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.makePlus$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$D$java_awt_Color.apply(this, [bounds1, bounds2, axis, color]));
bounds1=bounds2;
}
}return diagram;
});

Clazz.newMeth(C$, 'makePlus$java_awt_geom_Rectangle2D$java_awt_geom_Rectangle2D$D$java_awt_Color',  function (moleculeBox1, moleculeBox2, axis, color) {
var arrowCenter=(moleculeBox1.getCenterX$() + moleculeBox2.getCenterX$()) / 2;
return Clazz.new_($I$(4,1).c$$D$D$S$java_awt_Color,[arrowCenter, axis, "+", color]);
}, p$1);

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(5,"asList$OA",[Clazz.array($I$(6), -1, [])]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:36 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
