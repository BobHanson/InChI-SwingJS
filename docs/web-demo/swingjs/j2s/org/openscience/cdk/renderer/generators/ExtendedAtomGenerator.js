(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),p$1={},I$=[[0,['org.openscience.cdk.renderer.generators.ExtendedAtomGenerator','.ShowImplicitHydrogens'],['org.openscience.cdk.renderer.generators.ExtendedAtomGenerator','.ShowAtomTypeNames'],['org.openscience.cdk.renderer.generators.AtomNumberGenerator','.WillDrawAtomNumbers'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.CompactAtom'],'org.openscience.cdk.renderer.elements.TextGroupElement','org.openscience.cdk.config.Isotopes',['org.openscience.cdk.renderer.elements.TextGroupElement','.Position'],'java.util.Stack','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExtendedAtomGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.openscience.cdk.renderer.generators.BasicAtomGenerator');
C$.$classes$=[['ShowImplicitHydrogens',9],['ShowAtomTypeNames',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showImplicitHydrogens=Clazz.new_($I$(1,1));
this.showAtomTypeNames=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['O',['showImplicitHydrogens','org.openscience.cdk.renderer.generators.IGeneratorParameter','showAtomTypeNames','org.openscience.cdk.renderer.generators.ExtendedAtomGenerator.ShowAtomTypeNames']]]

Clazz.newMeth(C$, 'generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel',  function (container, atom, model) {
var drawNumbers=false;
if (model.hasParameter$Class(Clazz.getClass($I$(3)))) {
drawNumbers=(model.getParameter$Class(Clazz.getClass($I$(3))).getValue$()).valueOf();
}if (!this.hasCoordinates$org_openscience_cdk_interfaces_IAtom(atom) || this.invisibleHydrogen$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel(atom, model) || (this.invisibleCarbon$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel(atom, container, model) && !drawNumbers )  ) {
return null;
} else if ((model.getParameter$Class(Clazz.getClass($I$(4))).getValue$()).valueOf()) {
return this.generateCompactElement$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel(atom, model);
} else {
var text;
if (Clazz.instanceOf(atom, "org.openscience.cdk.interfaces.IPseudoAtom")) {
text=(atom).getLabel$();
} else if (this.invisibleCarbon$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel(atom, container, model) && drawNumbers ) {
text=String.valueOf$I(container.indexOf$org_openscience_cdk_interfaces_IAtom(atom) + 1);
} else {
text=atom.getSymbol$();
}var point=atom.getPoint2d$();
var ccolor=this.getAtomColor$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel(atom, model);
var textGroup=Clazz.new_($I$(5,1).c$$D$D$S$java_awt_Color,[point.x, point.y, text, ccolor]);
p$1.decorate$org_openscience_cdk_renderer_elements_TextGroupElement$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel.apply(this, [textGroup, container, atom, model]);
return textGroup;
}});

Clazz.newMeth(C$, 'decorate$org_openscience_cdk_renderer_elements_TextGroupElement$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel',  function (textGroup, container, atom, model) {
var unused=p$1.getUnusedPositions$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom.apply(this, [container, atom]);
if (model.hasParameter$Class(Clazz.getClass($I$(3)))) {
var drawNumbers=(model.getParameter$Class(Clazz.getClass($I$(3))).getValue$()).valueOf();
if (!this.invisibleCarbon$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel(atom, container, model) && drawNumbers ) {
var position=p$1.getNextPosition$java_util_Stack.apply(this, [unused]);
var number=String.valueOf$I(container.indexOf$org_openscience_cdk_interfaces_IAtom(atom) + 1);
textGroup.addChild$S$org_openscience_cdk_renderer_elements_TextGroupElement_Position(number, position);
}}if ((this.showImplicitHydrogens.getValue$()).valueOf()) {
if (atom.getImplicitHydrogenCount$() != null ) {
var hCount=(atom.getImplicitHydrogenCount$()).$c();
if (hCount > 0) {
var position=p$1.getNextPosition$java_util_Stack.apply(this, [unused]);
if (hCount == 1) {
textGroup.addChild$S$org_openscience_cdk_renderer_elements_TextGroupElement_Position("H", position);
} else {
textGroup.addChild$S$S$org_openscience_cdk_renderer_elements_TextGroupElement_Position("H", String.valueOf$I(hCount), position);
}}}}var massNumber=atom.getMassNumber$();
if (massNumber != null ) {
try {
var factory=$I$(6).getInstance$();
var majorMass=(factory.getMajorIsotope$S(atom.getSymbol$()).getMassNumber$()).$c();
if ((massNumber).$c() !== majorMass ) {
var position=p$1.getNextPosition$java_util_Stack.apply(this, [unused]);
textGroup.addChild$S$org_openscience_cdk_renderer_elements_TextGroupElement_Position(String.valueOf$O(massNumber), position);
}} catch (io) {
if (Clazz.exceptionOf(io,"java.io.IOException")){
} else {
throw io;
}
}
}}, p$1);

Clazz.newMeth(C$, 'getNextPosition$java_util_Stack',  function (unused) {
if (unused.size$() > 0) {
return unused.pop$();
} else {
return $I$(7).N;
}}, p$1);

Clazz.newMeth(C$, 'getUnusedPositions$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (container, atom) {
var unused=Clazz.new_($I$(8,1));
for (var p, $p = 0, $$p = $I$(7).values$(); $p<$$p.length&&((p=($$p[$p])),1);$p++) {
unused.add$O(p);
}
for (var connectedAtom, $connectedAtom = container.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $connectedAtom.hasNext$()&&((connectedAtom=($connectedAtom.next$())),1);) {
var used=p$1.getPosition$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [atom, connectedAtom]);
if (unused.contains$O(used)) {
unused.remove$O(used);
}}
return unused;
}, p$1);

Clazz.newMeth(C$, 'getPosition$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atom, connectedAtom) {
var pointA=atom.getPoint2d$();
var pointB=connectedAtom.getPoint2d$();
var diffx=pointB.x - pointA.x;
var diffy=pointB.y - pointA.y;
var DELTA=0.2;
if (diffx < -0.2 ) {
if (diffy < -0.2 ) {
return $I$(7).NW;
} else if (diffy > -0.2  && diffy < 0.2  ) {
return $I$(7).W;
} else {
return $I$(7).SW;
}} else if (diffx > -0.2  && diffx < 0.2  ) {
if (diffy < -0.2 ) {
return $I$(7).N;
} else if (diffy > -0.2  && diffy < 0.2  ) {
return $I$(7).N;
} else {
return $I$(7).S;
}} else {
if (diffy < -0.2 ) {
return $I$(7).NE;
} else if (diffy > -0.2  && diffy < 0.2  ) {
return $I$(7).E;
} else {
return $I$(7).SE;
}}}, p$1);

Clazz.newMeth(C$, 'getParameters$',  function () {
var parameters=Clazz.new_($I$(9,1));
parameters.add$O(this.showImplicitHydrogens);
parameters.add$O(this.showAtomTypeNames);
parameters.addAll$java_util_Collection(C$.superclazz.prototype.getParameters$.apply(this, []));
return parameters;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExtendedAtomGenerator, "ShowImplicitHydrogens", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.ExtendedAtomGenerator, "ShowAtomTypeNames", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.FALSE;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:30 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
