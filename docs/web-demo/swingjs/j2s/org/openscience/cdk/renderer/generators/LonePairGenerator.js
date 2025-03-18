(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,'org.openscience.cdk.renderer.elements.ElementGroup','java.awt.Color',['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.AtomRadius'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],'org.openscience.cdk.geometry.GeometryUtil','org.openscience.cdk.renderer.elements.OvalElement','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "LonePairGenerator", null, null, 'org.openscience.cdk.renderer.generators.IGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (container, model) {
var group=Clazz.new_($I$(1,1));
var SCREEN_RADIUS=1.0;
var SCREEN_SEPARATION=2.5;
var RADICAL_COLOR=$I$(2).BLACK;
var ATOM_RADIUS=(model.getParameter$Class(Clazz.getClass($I$(3))).getValue$()).valueOf();
var scale=(model.getParameter$Class(Clazz.getClass($I$(4))).getValue$()).valueOf();
var modelAtomRadius=ATOM_RADIUS / scale;
var modelPointRadius=1.0 / scale;
var modelSeparation=2.5 / scale;
for (var lonePair, $lonePair = container.lonePairs$().iterator$(); $lonePair.hasNext$()&&((lonePair=($lonePair.next$())),1);) {
var atom=lonePair.getAtom$();
var point=atom.getPoint2d$();
var align=$I$(5).getBestAlignmentForLabelXY$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(container, atom);
var xRadius=point.x;
var yRadius=point.y;
var diffx=0;
var diffy=0;
if (align == 1) {
xRadius+=modelAtomRadius;
diffy+=modelSeparation;
} else if (align == -1) {
xRadius-=modelAtomRadius;
diffy+=modelSeparation;
} else if (align == 2) {
yRadius-=modelAtomRadius;
diffx+=modelSeparation;
} else if (align == -2) {
yRadius+=modelAtomRadius;
diffx+=modelSeparation;
}group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(6,1).c$$D$D$D$Z$java_awt_Color,[xRadius + diffx, yRadius + diffy, modelPointRadius, true, RADICAL_COLOR]));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(6,1).c$$D$D$D$Z$java_awt_Color,[xRadius - diffx, yRadius - diffy, modelPointRadius, true, RADICAL_COLOR]));
}
return group;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(7).emptyList$();
});
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:34 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
