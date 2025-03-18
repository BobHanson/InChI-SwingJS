(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),p$1={},I$=[[0,'java.awt.Color',['org.openscience.cdk.renderer.generators.MappingGenerator','.AtomAtomMappingLineColor'],['org.openscience.cdk.renderer.generators.MappingGenerator','.MappingLineWidth'],['org.openscience.cdk.renderer.generators.MappingGenerator','.ShowAtomAtomMapping'],'org.openscience.cdk.renderer.elements.ElementGroup','org.openscience.cdk.renderer.elements.LineElement',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],'java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MappingGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.openscience.cdk.renderer.generators.IGenerator');
C$.$classes$=[['AtomAtomMappingLineColor',9],['MappingLineWidth',9],['ShowAtomAtomMapping',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomAtomMappingLineColor=Clazz.new_($I$(2,1));
this.mappingLineWidth=Clazz.new_($I$(3,1));
this.showAtomAtomMapping=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['atomAtomMappingLineColor','org.openscience.cdk.renderer.generators.IGeneratorParameter','+mappingLineWidth','+showAtomAtomMapping']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (reaction, model) {
if ((!((this.showAtomAtomMapping.getValue$()).$c()))) return null;
var elementGroup=Clazz.new_($I$(5,1));
var mappingColor=this.atomAtomMappingLineColor.getValue$();
for (var mapping, $mapping = reaction.mappings$().iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
var endPointA=mapping.getChemObject$I(0);
var endPointB=mapping.getChemObject$I(1);
var pointA=endPointA.getPoint2d$();
var pointB=endPointB.getPoint2d$();
elementGroup.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_([pointA.x, pointA.y, pointB.x, pointB.y, p$1.getWidthForMappingLine$org_openscience_cdk_renderer_RendererModel.apply(this, [model]), mappingColor],$I$(6,1).c$$D$D$D$D$D$java_awt_Color));
}
return elementGroup;
});

Clazz.newMeth(C$, 'getWidthForMappingLine$org_openscience_cdk_renderer_RendererModel',  function (model) {
var scale=(model.getParameter$Class(Clazz.getClass($I$(7))).getValue$()).valueOf();
return (this.mappingLineWidth.getValue$()).$c() / scale;
}, p$1);

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(8,"asList$OA",[Clazz.array($I$(9), -1, [this.showAtomAtomMapping, this.mappingLineWidth, this.atomAtomMappingLineColor])]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.MappingGenerator, "AtomAtomMappingLineColor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(1).gray;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MappingGenerator, "MappingLineWidth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(1.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MappingGenerator, "ShowAtomAtomMapping", function(){
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
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:32 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
