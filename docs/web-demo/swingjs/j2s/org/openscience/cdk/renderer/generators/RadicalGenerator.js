(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,'org.openscience.cdk.renderer.elements.ElementGroup','java.awt.Color',['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.AtomRadius'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],'java.util.HashMap','org.openscience.cdk.geometry.GeometryUtil','org.openscience.cdk.renderer.elements.OvalElement','java.util.Collections']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RadicalGenerator", null, null, 'org.openscience.cdk.renderer.generators.IGenerator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (container, model) {
var group=Clazz.new_($I$(1,1));
var SCREEN_RADIUS=2.0;
var RADICAL_COLOR=$I$(2).BLACK;
var ATOM_RADIUS=(model.getParameter$Class(Clazz.getClass($I$(3))).getValue$()).$c() / (model.getParameter$Class(Clazz.getClass($I$(4))).getValue$()).$c();
var modelRadius=2.0 / (model.getParameter$Class(Clazz.getClass($I$(4))).getValue$()).$c();
var modelSpacing=modelRadius * 2.5;
var singleElectronsPerAtom=Clazz.new_($I$(5,1));
for (var electron, $electron = container.singleElectrons$().iterator$(); $electron.hasNext$()&&((electron=($electron.next$())),1);) {
var atom=electron.getAtom$();
if (singleElectronsPerAtom.get$O(atom) == null ) singleElectronsPerAtom.put$O$O(atom, Integer.valueOf$I(0));
var point=atom.getPoint2d$();
var align=$I$(6).getBestAlignmentForLabelXY$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(container, atom);
var xRadius=point.x;
var yRadius=point.y;
if (align == 1) {
xRadius+=ATOM_RADIUS * 4 + (singleElectronsPerAtom.get$O(atom)).$c() * modelSpacing;
} else if (align == -1) {
xRadius-=ATOM_RADIUS * 4 + (singleElectronsPerAtom.get$O(atom)).$c() * modelSpacing;
} else if (align == 2) {
yRadius+=ATOM_RADIUS * 4 + (singleElectronsPerAtom.get$O(atom)).$c() * modelSpacing;
} else if (align == -2) {
yRadius-=ATOM_RADIUS * 4 + (singleElectronsPerAtom.get$O(atom)).$c() * modelSpacing;
}singleElectronsPerAtom.put$O$O(atom, Integer.valueOf$I(((singleElectronsPerAtom.get$O(atom)).$c() + 1)|0));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(7,1).c$$D$D$D$Z$java_awt_Color,[xRadius, yRadius, modelRadius, true, RADICAL_COLOR]));
}
return group;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(8).emptyList$();
});
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:26 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
