(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,['org.openscience.cdk.renderer.generators.ReactionSceneGenerator','.ShowReactionBoxes'],['org.openscience.cdk.renderer.generators.ReactionSceneGenerator','.ArrowHeadWidth'],'org.openscience.cdk.renderer.elements.ElementGroup','java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReactionSceneGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.openscience.cdk.renderer.generators.IGenerator');
C$.$classes$=[['ShowReactionBoxes',9],['ArrowHeadWidth',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showReactionBoxes=Clazz.new_($I$(1,1));
this.arrowHeadWidth=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['showReactionBoxes','org.openscience.cdk.renderer.generators.IGeneratorParameter','+arrowHeadWidth']]]

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (reaction, model) {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(4,"asList$OA",[Clazz.array($I$(5), -1, [this.showReactionBoxes, this.arrowHeadWidth])]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReactionSceneGenerator, "ShowReactionBoxes", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.TRUE;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReactionSceneGenerator, "ArrowHeadWidth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(10.0);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:29 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
