(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),p$1={},I$=[[0,'java.awt.Color',['org.openscience.cdk.renderer.generators.BoundsGenerator','.BoundsColor'],'org.openscience.cdk.renderer.elements.ElementGroup','org.openscience.cdk.renderer.BoundsCalculator','org.openscience.cdk.renderer.elements.RectangleElement','java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BoundsGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.openscience.cdk.renderer.generators.IGenerator');
C$.$classes$=[['BoundsColor',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.boundsColor=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['boundsColor','org.openscience.cdk.renderer.generators.IGeneratorParameter']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (reaction, model) {
var elementGroup=Clazz.new_($I$(3,1));
var reactants=reaction.getReactants$();
if (reactants != null ) {
elementGroup.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generate$org_openscience_cdk_interfaces_IAtomContainerSet.apply(this, [reactants]));
}var products=reaction.getProducts$();
if (products != null ) {
elementGroup.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generate$org_openscience_cdk_interfaces_IAtomContainerSet.apply(this, [products]));
}return elementGroup;
});

Clazz.newMeth(C$, 'generate$org_openscience_cdk_interfaces_IAtomContainerSet',  function (moleculeSet) {
var totalBounds=$I$(4).calculateBounds$org_openscience_cdk_interfaces_IAtomContainerSet(moleculeSet);
return Clazz.new_([totalBounds.getMinX$(), totalBounds.getMinY$(), totalBounds.getMaxX$(), totalBounds.getMaxY$(), this.boundsColor.getValue$()],$I$(5,1).c$$D$D$D$D$java_awt_Color);
}, p$1);

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(6,"asList$OA",[Clazz.array($I$(7), -1, [this.boundsColor])]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.BoundsGenerator, "BoundsColor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(1).LIGHT_GRAY;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:28 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
