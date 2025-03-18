(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),p$1={},I$=[[0,'java.awt.Color',['org.openscience.cdk.renderer.generators.BasicBondGenerator','.BondWidth'],['org.openscience.cdk.renderer.generators.BasicBondGenerator','.BondDistance'],['org.openscience.cdk.renderer.generators.BasicBondGenerator','.DefaultBondColor'],['org.openscience.cdk.renderer.generators.BasicBondGenerator','.WedgeWidth'],['org.openscience.cdk.renderer.generators.BasicBondGenerator','.TowardsRingCenterProportion'],'org.openscience.cdk.tools.LoggingToolFactory','org.openscience.cdk.interfaces.IRingSet','org.openscience.cdk.graph.ConnectivityChecker','org.openscience.cdk.graph.Cycles',['org.openscience.cdk.renderer.RendererModel','.ColorHash'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],'org.openscience.cdk.renderer.elements.ElementGroup','org.openscience.cdk.tools.manipulator.AtomContainerComparatorBy2DCenter','org.openscience.cdk.renderer.elements.MarkedElement','org.openscience.cdk.tools.manipulator.RingSetManipulator',['org.openscience.cdk.interfaces.IBond','.Order'],'org.openscience.cdk.renderer.elements.LineElement','javax.vecmath.Vector2d','javax.vecmath.Point2d','org.openscience.cdk.geometry.GeometryUtil',['org.openscience.cdk.renderer.elements.WedgeLineElement','.TYPE'],['org.openscience.cdk.renderer.elements.WedgeLineElement','.Direction'],['org.openscience.cdk.interfaces.IBond','.Stereo'],'org.openscience.cdk.renderer.elements.WedgeLineElement','org.openscience.cdk.CDKConstants',['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.ShowExplicitHydrogens'],'java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicBondGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.openscience.cdk.renderer.generators.IGenerator');
C$.$classes$=[['BondWidth',9],['BondDistance',9],['DefaultBondColor',9],['WedgeWidth',9],['TowardsRingCenterProportion',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bondWidth=Clazz.new_($I$(2,1));
this.bondDistance=Clazz.new_($I$(3,1));
this.defaultBondColor=Clazz.new_($I$(4,1));
this.wedgeWidth=Clazz.new_($I$(5,1));
this.ringCenterProportion=Clazz.new_($I$(6,1));
this.logger=$I$(7,"createLoggingTool$Class",[Clazz.getClass(C$)]);
this.overrideColor=null;
this.overrideBondWidth=-1;
this.IDEAL_RINGSIZE=6;
this.MIN_RINGSIZE_FACTOR=2.5;
},1);

C$.$fields$=[['D',['overrideBondWidth','MIN_RINGSIZE_FACTOR'],'I',['IDEAL_RINGSIZE'],'O',['bondWidth','org.openscience.cdk.renderer.generators.IGeneratorParameter','+bondDistance','+defaultBondColor','+wedgeWidth','+ringCenterProportion','logger','org.openscience.cdk.tools.ILoggingTool','ringSet','org.openscience.cdk.interfaces.IRingSet','overrideColor','java.awt.Color']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setOverrideColor$java_awt_Color',  function (color) {
this.overrideColor=color;
});

Clazz.newMeth(C$, 'setOverrideBondWidth$D',  function (bondWidth) {
this.overrideBondWidth=bondWidth;
});

Clazz.newMeth(C$, 'getRingSet$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var ringSet=atomContainer.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(8),['add$org_openscience_cdk_interfaces_IRingSet','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IAtomContainer','getConnectedRings$org_openscience_cdk_interfaces_IRing','getRings$org_openscience_cdk_interfaces_IBond','getRings$org_openscience_cdk_interfaces_IAtom','isEmpty$']), Clazz.array(java.lang.Object, -1, []));
try {
var molecules=$I$(9).partitionIntoMolecules$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
for (var mol, $mol = molecules.atomContainers$().iterator$(); $mol.hasNext$()&&((mol=($mol.next$())),1);) {
ringSet.add$org_openscience_cdk_interfaces_IRingSet($I$(10).sssr$org_openscience_cdk_interfaces_IAtomContainer(mol).toRingSet$());
}
return ringSet;
} catch (exception) {
if (Clazz.exceptionOf(exception,"Exception")){
this.logger.warn$O("Could not partition molecule: " + exception.getMessage$());
this.logger.debug$O(exception);
return ringSet;
} else {
throw exception;
}
}
});

Clazz.newMeth(C$, 'getColorForBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel',  function (bond, model) {
if (this.overrideColor != null ) {
return this.overrideColor;
}var color=model.getParameter$Class(Clazz.getClass($I$(11))).getValue$().get$O(bond);
if (color == null ) {
return model.getParameter$Class(Clazz.getClass($I$(4))).getValue$();
} else {
return color;
}});

Clazz.newMeth(C$, 'getWidthForBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel',  function (bond, model) {
var scale=(model.getParameter$Class(Clazz.getClass($I$(12))).getValue$()).valueOf();
if (this.overrideBondWidth != -1 ) {
return this.overrideBondWidth / scale;
} else {
return (model.getParameter$Class(Clazz.getClass($I$(2))).getValue$()).$c() / scale;
}});

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (container, model) {
var group=Clazz.new_($I$(13,1));
this.ringSet=this.getRingSet$org_openscience_cdk_interfaces_IAtomContainer(container);
this.ringSet.sortAtomContainers$java_util_Comparator(Clazz.new_($I$(14,1)));
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
group.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(15,"markupBond$org_openscience_cdk_renderer_elements_IRenderingElement$org_openscience_cdk_interfaces_IBond",[this.generate$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(bond, model), bond]));
}
return group;
});

Clazz.newMeth(C$, 'generate$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel',  function (currentBond, model) {
var ring=$I$(16).getHeaviestRing$org_openscience_cdk_interfaces_IRingSet$org_openscience_cdk_interfaces_IBond(this.ringSet, currentBond);
if (ring != null ) {
return this.generateRingElements$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_renderer_RendererModel(currentBond, ring, model);
} else {
return this.generateBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(currentBond, model);
}});

Clazz.newMeth(C$, 'generateBondElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel',  function (bond, model) {
return this.generateBondElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_renderer_RendererModel(bond, bond.getOrder$(), model);
});

Clazz.newMeth(C$, 'generateBondElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_renderer_RendererModel',  function (bond, type, model) {
if (bond.getAtomCount$() > 2) return null;
var point1=bond.getBegin$().getPoint2d$();
var point2=bond.getEnd$().getPoint2d$();
var color=this.getColorForBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(bond, model);
var bondWidth=this.getWidthForBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(bond, model);
var bondDistance=(model.get$Class(Clazz.getClass($I$(3)))).$c() / (model.getParameter$Class(Clazz.getClass($I$(12))).getValue$()).$c();
if (type === $I$(17).SINGLE ) {
return Clazz.new_($I$(18,1).c$$D$D$D$D$D$java_awt_Color,[point1.x, point1.y, point2.x, point2.y, bondWidth, color]);
} else {
var group=Clazz.new_($I$(13,1));
switch (type) {
case $I$(17).DOUBLE:
p$1.createLines$javax_vecmath_Point2d$javax_vecmath_Point2d$D$D$java_awt_Color$org_openscience_cdk_renderer_elements_ElementGroup.apply(this, [point1, point2, bondWidth, bondDistance, color, group]);
break;
case $I$(17).TRIPLE:
p$1.createLines$javax_vecmath_Point2d$javax_vecmath_Point2d$D$D$java_awt_Color$org_openscience_cdk_renderer_elements_ElementGroup.apply(this, [point1, point2, bondWidth, bondDistance * 2, color, group]);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(18,1).c$$D$D$D$D$D$java_awt_Color,[point1.x, point1.y, point2.x, point2.y, bondWidth, color]));
break;
case $I$(17).QUADRUPLE:
p$1.createLines$javax_vecmath_Point2d$javax_vecmath_Point2d$D$D$java_awt_Color$org_openscience_cdk_renderer_elements_ElementGroup.apply(this, [point1, point2, bondWidth, bondDistance, color, group]);
p$1.createLines$javax_vecmath_Point2d$javax_vecmath_Point2d$D$D$java_awt_Color$org_openscience_cdk_renderer_elements_ElementGroup.apply(this, [point1, point2, bondWidth, bondDistance * 4, color, group]);
default:
break;
}
return group;
}});

Clazz.newMeth(C$, 'createLines$javax_vecmath_Point2d$javax_vecmath_Point2d$D$D$java_awt_Color$org_openscience_cdk_renderer_elements_ElementGroup',  function (point1, point2, width, dist, color, group) {
var out=p$1.generateDistanceData$javax_vecmath_Point2d$javax_vecmath_Point2d$D.apply(this, [point1, point2, dist]);
var l1=Clazz.new_($I$(18,1).c$$D$D$D$D$D$java_awt_Color,[out[0], out[1], out[4], out[5], width, color]);
var l2=Clazz.new_($I$(18,1).c$$D$D$D$D$D$java_awt_Color,[out[2], out[3], out[6], out[7], width, color]);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(l1);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(l2);
}, p$1);

Clazz.newMeth(C$, 'generateDistanceData$javax_vecmath_Point2d$javax_vecmath_Point2d$D',  function (point1, point2, dist) {
var normal=Clazz.new_($I$(19,1));
normal.sub$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(point2, point1);
normal=Clazz.new_($I$(19,1).c$$D$D,[-normal.y, normal.x]);
normal.normalize$();
normal.scale$D(dist);
var line1p1=Clazz.new_($I$(20,1));
var line1p2=Clazz.new_($I$(20,1));
line1p1.add$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(point1, normal);
line1p2.add$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(point2, normal);
normal.negate$();
var line2p1=Clazz.new_($I$(20,1));
var line2p2=Clazz.new_($I$(20,1));
line2p1.add$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(point1, normal);
line2p2.add$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(point2, normal);
return Clazz.array(Double.TYPE, -1, [line1p1.x, line1p1.y, line2p1.x, line2p1.y, line1p2.x, line1p2.y, line2p2.x, line2p2.y]);
}, p$1);

Clazz.newMeth(C$, 'generateRingElements$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_renderer_RendererModel',  function (bond, ring, model) {
if (p$1.isSingle$org_openscience_cdk_interfaces_IBond.apply(this, [bond]) && p$1.isStereoBond$org_openscience_cdk_interfaces_IBond.apply(this, [bond]) ) {
return p$1.generateStereoElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel.apply(this, [bond, model]);
} else if (p$1.isDouble$org_openscience_cdk_interfaces_IBond.apply(this, [bond])) {
var pair=Clazz.new_($I$(13,1));
pair.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateBondElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_renderer_RendererModel(bond, $I$(17).SINGLE, model));
pair.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateInnerElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_renderer_RendererModel(bond, ring, model));
return pair;
} else {
return this.generateBondElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(bond, model);
}});

Clazz.newMeth(C$, 'generateInnerElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_renderer_RendererModel',  function (bond, ring, model) {
var center=$I$(21).get2DCenter$org_openscience_cdk_interfaces_IAtomContainer(ring);
var a=bond.getBegin$().getPoint2d$();
var b=bond.getEnd$().getPoint2d$();
var distanceFactor=(model.getParameter$Class(Clazz.getClass($I$(6))).getValue$()).valueOf();
var ringDistance=distanceFactor * 6 / ring.getAtomCount$();
if (ringDistance < distanceFactor / 2.5 ) ringDistance=distanceFactor / 2.5;
var w=Clazz.new_($I$(20,1));
w.interpolate$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$D(a, center, ringDistance);
var u=Clazz.new_($I$(20,1));
u.interpolate$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$D(b, center, ringDistance);
var alpha=0.2;
var ww=Clazz.new_($I$(20,1));
ww.interpolate$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$D(w, u, alpha);
var uu=Clazz.new_($I$(20,1));
uu.interpolate$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$D(u, w, alpha);
var width=this.getWidthForBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(bond, model);
var color=this.getColorForBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(bond, model);
return Clazz.new_($I$(18,1).c$$D$D$D$D$D$java_awt_Color,[u.x, u.y, w.x, w.y, width, color]);
});

Clazz.newMeth(C$, 'generateStereoElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel',  function (bond, model) {
var stereo=bond.getStereo$();
var type=$I$(22).WEDGED;
var dir=$I$(23).toSecond;
if (stereo === $I$(24).DOWN  || stereo === $I$(24).DOWN_INVERTED  ) type=$I$(22).DASHED;
if (stereo === $I$(24).UP_OR_DOWN  || stereo === $I$(24).UP_OR_DOWN_INVERTED  ) type=$I$(22).INDIFF;
if (stereo === $I$(24).DOWN_INVERTED  || stereo === $I$(24).UP_INVERTED   || stereo === $I$(24).UP_OR_DOWN_INVERTED  ) dir=$I$(23).toFirst;
var base=this.generateBondElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_renderer_RendererModel(bond, $I$(17).SINGLE, model);
return Clazz.new_([base, type, dir, this.getColorForBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(bond, model)],$I$(25,1).c$$org_openscience_cdk_renderer_elements_LineElement$org_openscience_cdk_renderer_elements_WedgeLineElement_TYPE$org_openscience_cdk_renderer_elements_WedgeLineElement_Direction$java_awt_Color);
}, p$1);

Clazz.newMeth(C$, 'isDouble$org_openscience_cdk_interfaces_IBond',  function (bond) {
return bond.getOrder$() === $I$(17).DOUBLE ;
}, p$1);

Clazz.newMeth(C$, 'isSingle$org_openscience_cdk_interfaces_IBond',  function (bond) {
return bond.getOrder$() === $I$(17).SINGLE ;
}, p$1);

Clazz.newMeth(C$, 'isStereoBond$org_openscience_cdk_interfaces_IBond',  function (bond) {
return bond.getStereo$() !== $I$(24).NONE  && bond.getStereo$() !== $I$(26).UNSET   && bond.getStereo$() !== $I$(24).E_Z_BY_COORDINATES  ;
}, p$1);

Clazz.newMeth(C$, 'bindsHydrogen$org_openscience_cdk_interfaces_IBond',  function (bond) {
for (var i=0; i < bond.getAtomCount$(); i++) {
var atom=bond.getAtom$I(i);
if ((atom.getAtomicNumber$()).$c() === 1 ) return true;
}
return false;
});

Clazz.newMeth(C$, 'generateBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel',  function (bond, model) {
var showExplicitHydrogens=true;
if (model.hasParameter$Class(Clazz.getClass($I$(27)))) {
showExplicitHydrogens=(model.getParameter$Class(Clazz.getClass($I$(27))).getValue$()).valueOf();
}if (!showExplicitHydrogens && this.bindsHydrogen$org_openscience_cdk_interfaces_IBond(bond) ) {
return null;
}if (p$1.isStereoBond$org_openscience_cdk_interfaces_IBond.apply(this, [bond])) {
return p$1.generateStereoElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel.apply(this, [bond, model]);
} else {
return this.generateBondElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(bond, model);
}});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(28,"asList$OA",[Clazz.array($I$(29), -1, [this.bondWidth, this.defaultBondColor, this.wedgeWidth, this.bondDistance, this.ringCenterProportion])]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBondGenerator, "BondWidth", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBondGenerator, "BondDistance", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(2.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBondGenerator, "DefaultBondColor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(1).BLACK;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBondGenerator, "WedgeWidth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(2.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicBondGenerator, "TowardsRingCenterProportion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(0.15);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:34 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
