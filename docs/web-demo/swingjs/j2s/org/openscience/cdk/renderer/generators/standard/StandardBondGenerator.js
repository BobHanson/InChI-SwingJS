(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),p$1={},I$=[[0,'org.openscience.cdk.config.Elements','java.util.Arrays',['org.openscience.cdk.interfaces.IBond','.Order'],'org.openscience.cdk.tools.LoggingToolFactory','java.util.HashMap',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.BondLength'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.BondSeparation'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.SymbolMarginRatio'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.WedgeRatio'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.HashSpacing'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.WaveSpacing'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.FancyBoldWedges'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.FancyHashedWedges'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.AnnotationDistance'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.AnnotationFontScale'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.AnnotationColor'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.ForceDelocalisedBondDisplay'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.AtomColor'],'org.openscience.cdk.interfaces.IAtom','org.openscience.cdk.renderer.elements.IRenderingElement','org.openscience.cdk.renderer.generators.standard.StandardGenerator','org.openscience.cdk.geometry.GeometryUtil','org.openscience.cdk.renderer.generators.standard.ZOrdering','org.openscience.cdk.renderer.generators.standard.AwtArea','org.openscience.cdk.CDKConstants','org.openscience.cdk.renderer.elements.GeneralPath','org.openscience.cdk.renderer.elements.ElementGroup',['org.openscience.cdk.interfaces.IBond','.Display'],'org.openscience.cdk.renderer.generators.standard.VecmathUtil','org.openscience.cdk.renderer.elements.path.PathElement','org.openscience.cdk.renderer.elements.path.MoveTo','javax.vecmath.Point2d','org.openscience.cdk.renderer.elements.path.LineTo','org.openscience.cdk.renderer.elements.path.Close','java.util.ArrayList','org.openscience.cdk.renderer.elements.path.CubicTo',['org.openscience.cdk.interfaces.IBond','.Stereo'],'java.util.Collections','org.openscience.cdk.renderer.elements.LineElement','org.openscience.cdk.renderer.elements.MarkedElement',['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.DashSection'],'javax.vecmath.Tuple2d','org.openscience.cdk.renderer.elements.OvalElement','org.openscience.cdk.graph.Cycles','org.openscience.cdk.tools.manipulator.AtomContainerSetManipulator',['org.openscience.cdk.renderer.generators.standard.StandardBondGenerator','.RingBondOffsetComparator']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StandardBondGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['RingBondOffsetComparator',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.logger=$I$(4,"createLoggingTool$Class",[this.getClass$()]);
this.atomIndexMap=Clazz.new_($I$(5,1));
},1);

C$.$fields$=[['Z',['fancyBoldWedges','fancyHashedWedges','forceDelocalised'],'D',['scale','stroke','separation','backOff','wedgeWidth','hashSpacing','waveSpacing','annotationDistance','annotationScale'],'O',['container','org.openscience.cdk.interfaces.IAtomContainer','symbols','org.openscience.cdk.renderer.generators.standard.AtomSymbol[]','parameters','org.openscience.cdk.renderer.RendererModel','donutGenerator','org.openscience.cdk.renderer.generators.standard.StandardDonutGenerator','logger','org.openscience.cdk.tools.ILoggingTool','atomIndexMap','java.util.Map','+ringMap','foreground','java.awt.Color','+annotationColor','font','java.awt.Font','annotations','org.openscience.cdk.renderer.elements.ElementGroup']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_generators_standard_AtomSymbolA$org_openscience_cdk_renderer_RendererModel$org_openscience_cdk_renderer_elements_ElementGroup$java_awt_Font$D$org_openscience_cdk_renderer_generators_standard_StandardDonutGenerator',  function (container, symbols, parameters, annotations, font, stroke, donutGen) {
;C$.$init$.apply(this);
this.container=container;
this.symbols=symbols;
this.parameters=parameters;
this.annotations=annotations;
this.donutGenerator=donutGen;
for (var i=0; i < container.getAtomCount$(); i++) this.atomIndexMap.put$O$O(container.getAtom$I(i), Integer.valueOf$I(i));

this.ringMap=C$.ringPreferenceMap$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IRingSet(container, this.donutGenerator.smallest);
this.scale=(parameters.get$Class(Clazz.getClass($I$(6)))).valueOf();
this.stroke=stroke;
var length=(parameters.get$Class(Clazz.getClass($I$(7)))).$c() / this.scale;
this.separation=((parameters.get$Class(Clazz.getClass($I$(8)))).$c() * (parameters.get$Class(Clazz.getClass($I$(7)))).$c()) / this.scale;
this.backOff=(parameters.get$Class(Clazz.getClass($I$(9)))).$c() * stroke;
this.wedgeWidth=(parameters.get$Class(Clazz.getClass($I$(10)))).$c() * stroke;
this.hashSpacing=(parameters.get$Class(Clazz.getClass($I$(11)))).$c() / this.scale;
this.waveSpacing=(parameters.get$Class(Clazz.getClass($I$(12)))).$c() / this.scale;
this.fancyBoldWedges=(parameters.get$Class(Clazz.getClass($I$(13)))).valueOf();
this.fancyHashedWedges=(parameters.get$Class(Clazz.getClass($I$(14)))).valueOf();
this.annotationDistance=(parameters.get$Class(Clazz.getClass($I$(15)))).$c() * ((parameters.get$Class(Clazz.getClass($I$(7)))).$c() / this.scale);
this.annotationScale=(1 / this.scale) * (parameters.get$Class(Clazz.getClass($I$(16)))).$c();
this.annotationColor=parameters.get$Class(Clazz.getClass($I$(17)));
this.forceDelocalised=(parameters.get$Class(Clazz.getClass($I$(18)))).valueOf();
this.font=font;
this.foreground=parameters.get$Class(Clazz.getClass($I$(19))).getAtomColor$org_openscience_cdk_interfaces_IAtom(container.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(20),['bonds$','clone$','getBond$org_openscience_cdk_interfaces_IAtom','getBondCount$','getCharge$','getContainer$','getFractionalPoint3d$','getImplicitHydrogenCount$','getIndex$','getMapIdx$','getPoint2d$','getPoint3d$','getStereoParity$','getTotalHydrogenCount$','isAromatic$','isInRing$','neighbors$','setCharge$Double','setFractionalPoint3d$javax_vecmath_Point3d','setImplicitHydrogenCount$Integer','setIsAromatic$Z','setIsInRing$Z','setMapIdx$I','setPoint2d$javax_vecmath_Point2d','setPoint3d$javax_vecmath_Point3d','setStereoParity$Integer']), Clazz.array(java.lang.Object, -1, ["C"])));
}, 1);

Clazz.newMeth(C$, 'generateBonds$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_generators_standard_AtomSymbolA$org_openscience_cdk_renderer_RendererModel$D$java_awt_Font$org_openscience_cdk_renderer_elements_ElementGroup$org_openscience_cdk_renderer_generators_standard_StandardDonutGenerator',  function (container, symbols, parameters, stroke, font, annotations, donutGen) {
var bondGenerator;
bondGenerator=Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_generators_standard_AtomSymbolA$org_openscience_cdk_renderer_RendererModel$org_openscience_cdk_renderer_elements_ElementGroup$java_awt_Font$D$org_openscience_cdk_renderer_generators_standard_StandardDonutGenerator,[container, symbols, parameters, annotations, font, stroke, donutGen]);
var elements=Clazz.array($I$(21), [container.getBondCount$()]);
for (var i=0; i < container.getBondCount$(); i++) {
var bond=container.getBond$I(i);
if (!$I$(22).isHidden$org_openscience_cdk_interfaces_IChemObject(bond)) {
elements[i]=bondGenerator.generate$org_openscience_cdk_interfaces_IBond(bond);
}}
var crossing=$I$(23).intersectingBonds$org_openscience_cdk_interfaces_IAtomContainer(container);
if (!crossing.isEmpty$()) {
$I$(24).assign$org_openscience_cdk_interfaces_IAtomContainer(container);
for (var e, $e = crossing.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var b1=e.getKey$();
var b2=e.getValue$();
var area1=$I$(25,"toArea$org_openscience_cdk_renderer_elements_IRenderingElement",[elements[b1.getIndex$()]]);
var area2=$I$(25,"toArea$org_openscience_cdk_renderer_elements_IRenderingElement",[elements[b2.getIndex$()]]);
if (area1 == null  || area2 == null  ) continue;
var z1=b1.getProperty$O($I$(26).Z_ORDER);
var z2=b2.getProperty$O($I$(26).Z_ORDER);
Clazz.assert(C$, this, function(){return z1 != null });
Clazz.assert(C$, this, function(){return z2 != null });
if ((z1).$c() <= (z2).$c() ) {
area1.subtract$java_awt_geom_Area($I$(25).expand$java_awt_geom_Area$D(area2, stroke));
elements[b1.getIndex$()]=$I$(27).shapeOf$java_awt_Shape$java_awt_Color(area1, bondGenerator.foreground);
} else {
area2.subtract$java_awt_geom_Area($I$(25).expand$java_awt_geom_Area$D(area1, stroke));
elements[b2.getIndex$()]=$I$(27).shapeOf$java_awt_Shape$java_awt_Color(area2, bondGenerator.foreground);
}}
}return elements;
}, 1);

Clazz.newMeth(C$, 'generate$org_openscience_cdk_interfaces_IBond',  function (bond) {
var atom1=bond.getBegin$();
var atom2=bond.getEnd$();
var order=bond.getOrder$();
if (order == null ) order=$I$(3).UNSET;
var elem;
switch (order) {
case $I$(3).SINGLE:
if (bond.isAromatic$()) {
if (this.donutGenerator.isDelocalised$org_openscience_cdk_interfaces_IBond(bond)) elem=p$1.generateSingleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [bond, atom1, atom2]);
 else if (this.forceDelocalised && bond.isInRing$() ) elem=p$1.generateDoubleBond$org_openscience_cdk_interfaces_IBond$Z.apply(this, [bond, this.forceDelocalised]);
 else elem=p$1.generateSingleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [bond, atom1, atom2]);
} else elem=p$1.generateSingleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [bond, atom1, atom2]);
break;
case $I$(3).DOUBLE:
if (bond.isAromatic$()) {
if (this.donutGenerator.isDelocalised$org_openscience_cdk_interfaces_IBond(bond)) elem=p$1.generateSingleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [bond, atom1, atom2]);
 else elem=p$1.generateDoubleBond$org_openscience_cdk_interfaces_IBond$Z.apply(this, [bond, this.forceDelocalised]);
} else elem=p$1.generateDoubleBond$org_openscience_cdk_interfaces_IBond$Z.apply(this, [bond, false]);
break;
case $I$(3).TRIPLE:
elem=p$1.generateTripleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [bond, atom1, atom2]);
break;
default:
if (bond.isAromatic$() && order === $I$(3).UNSET  ) {
if (this.donutGenerator.isDelocalised$org_openscience_cdk_interfaces_IBond(bond)) elem=p$1.generateSingleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [bond, atom1, atom2]);
 else elem=p$1.generateDoubleBond$org_openscience_cdk_interfaces_IBond$Z.apply(this, [bond, true]);
} else {
elem=this.generateDashedBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom1, atom2);
}break;
}
if (p$1.isAttachPoint$org_openscience_cdk_interfaces_IAtom.apply(this, [atom1])) {
var elemGrp=Clazz.new_($I$(28,1));
elemGrp.add$org_openscience_cdk_renderer_elements_IRenderingElement(elem);
elemGrp.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generateAttachPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [atom1, bond]));
elem=elemGrp;
}if (p$1.isAttachPoint$org_openscience_cdk_interfaces_IAtom.apply(this, [atom2])) {
var elemGrp=Clazz.new_($I$(28,1));
elemGrp.add$org_openscience_cdk_renderer_elements_IRenderingElement(elem);
elemGrp.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generateAttachPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [atom2, bond]));
elem=elemGrp;
}return elem;
});

Clazz.newMeth(C$, 'generateSingleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (bond, from, to) {
var label=$I$(22).getAnnotationLabel$org_openscience_cdk_interfaces_IChemObject(bond);
if (label != null ) p$1.addAnnotation$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$S.apply(this, [from, to, label]);
var display=bond.getDisplay$();
if (display == null  || display === $I$(29).Solid  ) return this.generatePlainSingleBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
var fromBonds=this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(from);
var toBonds=this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(to);
fromBonds.remove$O(bond);
toBonds.remove$O(bond);
switch (display) {
case $I$(29).WedgedHashBegin:
return this.generateHashedWedgeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List(from, to, toBonds);
case $I$(29).WedgedHashEnd:
return this.generateHashedWedgeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List(to, from, fromBonds);
case $I$(29).WedgeBegin:
return this.generateBoldWedgeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List(from, to, toBonds);
case $I$(29).WedgeEnd:
return this.generateBoldWedgeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List(to, from, fromBonds);
case $I$(29).Wavy:
return this.generateWavyBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
case $I$(29).Dash:
return this.generateDashedBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
case $I$(29).ArrowEnd:
return this.generateArrowBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
case $I$(29).ArrowBeg:
return this.generateArrowBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from);
case $I$(29).Bold:
return this.generateBoldBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List(from, to, fromBonds, toBonds);
case $I$(29).Hash:
return this.generateHashBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List(from, to, fromBonds, toBonds);
case $I$(29).Dot:
return this.generateDotBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
default:
this.logger.warn$O$OA("Unknown single bond display=", Clazz.array(java.lang.Object, -1, [display, " is not displayed"]));
return this.generatePlainSingleBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
}
}, p$1);

Clazz.newMeth(C$, 'generatePlainSingleBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (from, to) {
return this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to), this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from));
});

Clazz.newMeth(C$, 'generateBoldWedgeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List',  function (from, to, toBonds) {
var fromPoint=from.getPoint2d$();
var toPoint=to.getPoint2d$();
var fromBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
var toBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, toPoint);
var perpendicular=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var halfNarrowEnd=this.stroke / 2;
var halfWideEnd=this.wedgeWidth / 2;
var opposite=halfWideEnd - halfNarrowEnd;
var adjacent=fromPoint.distance$javax_vecmath_Point2d(toPoint);
var fromOffset=halfNarrowEnd + opposite / adjacent * fromBackOffPoint.distance$javax_vecmath_Point2d(fromPoint);
var toOffset=halfNarrowEnd + opposite / adjacent * toBackOffPoint.distance$javax_vecmath_Point2d(fromPoint);
var a=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromBackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, fromOffset)]);
var b=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromBackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, -fromOffset)]);
var c=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[toBackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, -toOffset)]);
var e=toBackOffPoint;
var d=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[toBackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, toOffset)]);
var threshold=Math.toRadians(15);
if (this.fancyBoldWedges && !this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(to) ) {
if (toBonds.size$() == 1) {
var toBondNeighbor=toBonds.get$I(0);
var toNeighbor=toBondNeighbor.getOther$org_openscience_cdk_interfaces_IAtom(to);
var refVector=$I$(30,"newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[toPoint, toNeighbor.getPoint2d$()]);
var wideToWide=false;
if (p$1.atWideEndOfWedge$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [to, toBondNeighbor])) {
refVector=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[refVector, $I$(30).negate$javax_vecmath_Tuple2d(unit)]);
wideToWide=true;
}var theta=refVector.angle$javax_vecmath_Vector2d(unit);
if (theta > threshold  && theta + threshold + threshold  < 3.141592653589793  ) {
c=$I$(30,"intersection$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[b, $I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(b, c), toPoint, refVector]);
d=$I$(30,"intersection$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[a, $I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(a, d), toPoint, refVector]);
if (!wideToWide) {
var nudge=(this.stroke / 2) / Math.sin(theta);
c=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[c, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, nudge)]);
d=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[d, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, nudge)]);
e=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[e, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, nudge)]);
}}} else if (toBonds.size$() > 1) {
var refVectorA=$I$(30).getNearestVector$javax_vecmath_Vector2d$org_openscience_cdk_interfaces_IAtom$java_util_List(perpendicular, to, toBonds);
var refVectorB=$I$(30,"getNearestVector$javax_vecmath_Vector2d$org_openscience_cdk_interfaces_IAtom$java_util_List",[$I$(30).negate$javax_vecmath_Tuple2d(perpendicular), to, toBonds]);
if (refVectorB.angle$javax_vecmath_Vector2d(unit) > threshold ) c=$I$(30,"intersection$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[b, $I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(b, c), toPoint, refVectorB]);
if (refVectorA.angle$javax_vecmath_Vector2d(unit) > threshold ) d=$I$(30,"intersection$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[a, $I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(a, d), toPoint, refVectorA]);
}}return Clazz.new_([$I$(2,"asList$OA",[Clazz.array($I$(31), -1, [Clazz.new_([Clazz.new_($I$(33,1).c$$javax_vecmath_Tuple2d,[a])],$I$(32,1).c$$javax_vecmath_Point2d), Clazz.new_([Clazz.new_($I$(33,1).c$$javax_vecmath_Tuple2d,[b])],$I$(34,1).c$$javax_vecmath_Point2d), Clazz.new_([Clazz.new_($I$(33,1).c$$javax_vecmath_Tuple2d,[c])],$I$(34,1).c$$javax_vecmath_Point2d), Clazz.new_([Clazz.new_($I$(33,1).c$$javax_vecmath_Tuple2d,[e])],$I$(34,1).c$$javax_vecmath_Point2d), Clazz.new_([Clazz.new_($I$(33,1).c$$javax_vecmath_Tuple2d,[d])],$I$(34,1).c$$javax_vecmath_Point2d), Clazz.new_($I$(35,1))])]), this.foreground],$I$(27,1).c$$java_util_List$java_awt_Color);
});

Clazz.newMeth(C$, 'generateHashedWedgeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List',  function (from, to, toBonds) {
var fromPoint=from.getPoint2d$();
var toPoint=to.getPoint2d$();
var fromBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
var toBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, toPoint);
var perpendicular=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var halfNarrowEnd=this.stroke / 2;
var halfWideEnd=this.wedgeWidth / 2;
var opposite=halfWideEnd - halfNarrowEnd;
var adjacent=fromPoint.distance$javax_vecmath_Point2d(toPoint);
var nSections=((adjacent / this.hashSpacing)|0);
var step=adjacent / (nSections - 1);
var group=Clazz.new_($I$(28,1));
var start=this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(from) ? fromPoint.distance$javax_vecmath_Point2d(fromBackOffPoint) : -Infinity;
var end=this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(to) ? fromPoint.distance$javax_vecmath_Point2d(toBackOffPoint) : Infinity;
var threshold=Math.toRadians(35);
var hatchAngle=perpendicular;
if (p$1.canDrawFancyHashedWedge$org_openscience_cdk_interfaces_IAtom$java_util_List$D.apply(this, [to, toBonds, adjacent])) {
var toBondNeighbor=toBonds.get$I(0);
var toNeighbor=toBondNeighbor.getOther$org_openscience_cdk_interfaces_IAtom(to);
var refVector=$I$(30,"newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[toPoint, toNeighbor.getPoint2d$()]);
if (p$1.atWideEndOfWedge$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [to, toBondNeighbor])) {
refVector=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[refVector, $I$(30).negate$javax_vecmath_Tuple2d(unit)]);
refVector.normalize$();
}var theta=refVector.angle$javax_vecmath_Vector2d(unit);
if (theta > threshold  && theta + threshold + threshold  < 3.141592653589793  ) {
hatchAngle=refVector;
}}for (var i=0; i < nSections; i++) {
var distance=i * step;
if (distance < start  || distance > end  ) continue;
var offset=halfNarrowEnd + opposite / adjacent * distance;
var interval=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, distance)]);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d($I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[interval, $I$(30).scale$javax_vecmath_Tuple2d$D(hatchAngle, offset)]), $I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[interval, $I$(30).scale$javax_vecmath_Tuple2d$D(hatchAngle, -offset)])));
}
return group;
});

Clazz.newMeth(C$, 'canDrawFancyHashedWedge$org_openscience_cdk_interfaces_IAtom$java_util_List$D',  function (to, toBonds, length) {
var longBond=(length * this.scale) - (this.parameters.get$Class(Clazz.getClass($I$(7)))).$c() > 4 ;
return this.fancyHashedWedges && !longBond && !this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(to) && toBonds.size$() == 1  ;
}, p$1);

Clazz.newMeth(C$, 'generateWavyBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (from, to) {
var fromPoint=from.getPoint2d$();
var toPoint=to.getPoint2d$();
var fromBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
var toBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, toPoint);
var perpendicular=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var length=fromPoint.distance$javax_vecmath_Point2d(toPoint);
var nCurves=2 * ((length / this.waveSpacing)|0);
var step=length / nCurves;
var peak=$I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, step);
var started=false;
var start=fromPoint.equals$javax_vecmath_Tuple2d(fromBackOffPoint) ? 4.9E-324 : fromPoint.distance$javax_vecmath_Point2d(fromBackOffPoint);
var end=toPoint.equals$javax_vecmath_Tuple2d(toBackOffPoint) ? 1.7976931348623157E308 : fromPoint.distance$javax_vecmath_Point2d(toBackOffPoint);
var path=Clazz.new_($I$(36,1));
if (start == 4.9E-324 ) {
path.add$O(Clazz.new_($I$(32,1).c$$D$D,[fromPoint.x, fromPoint.y]));
started=true;
}for (var i=1; i < nCurves; i+=2) {
peak=$I$(30).negate$javax_vecmath_Tuple2d(peak);
{
var dist=i * step;
if (dist >= start  && dist <= end  ) {
var endPoint=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, dist)]), peak]);
if (started) {
var controlPoint1=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30,"scale$javax_vecmath_Tuple2d$D",[unit, (i - 1) * step])]), $I$(30).scale$javax_vecmath_Tuple2d$D(peak, 0.5)]);
var controlPoint2=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30,"scale$javax_vecmath_Tuple2d$D",[unit, (i - 0.5) * step])]), peak]);
path.add$O(Clazz.new_($I$(37,1).c$$D$D$D$D$D$D,[controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y]));
} else {
path.add$O(Clazz.new_($I$(32,1).c$$D$D,[endPoint.x, endPoint.y]));
started=true;
}}}{
var dist=(i + 1) * step;
if (dist >= start  && dist <= end  ) {
var endPoint=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, dist)]);
if (started) {
var controlPoint1=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30,"scale$javax_vecmath_Tuple2d$D",[unit, (i + 0.5) * step])]), peak]);
var controlPoint2=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, dist)]), $I$(30).scale$javax_vecmath_Tuple2d$D(peak, 0.5)]);
path.add$O(Clazz.new_($I$(37,1).c$$D$D$D$D$D$D,[controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y]));
} else {
path.add$O(Clazz.new_($I$(32,1).c$$D$D,[endPoint.x, endPoint.y]));
started=true;
}}}}
return Clazz.new_($I$(27,1).c$$java_util_List$java_awt_Color,[path, this.foreground]).outline$D(this.stroke);
});

Clazz.newMeth(C$, 'generateDoubleBond$org_openscience_cdk_interfaces_IBond$Z',  function (bond, arom) {
var cyclic=this.ringMap.containsKey$O(bond);
var refContainer=cyclic ? this.ringMap.get$O(bond) : this.container;
var length=refContainer.getAtomCount$();
var index1=refContainer.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
var index2=refContainer.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$());
var outOfOrder=cyclic && index1 == (index2 + 1) % length ;
var atom1=outOfOrder ? bond.getEnd$() : bond.getBegin$();
var atom2=outOfOrder ? bond.getBegin$() : bond.getEnd$();
if ($I$(38).E_OR_Z.equals$O(bond.getStereo$())) return p$1.generateCrossedDoubleBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [atom1, atom2]);
var atom1Bonds=refContainer.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom1);
var atom2Bonds=refContainer.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom2);
atom1Bonds.remove$O(bond);
atom2Bonds.remove$O(bond);
if (cyclic) {
var wind1=C$.winding$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond(atom1Bonds.get$I(0), bond);
var wind2=C$.winding$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond(bond, atom2Bonds.get$I(0));
if (wind1 > 0) {
return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom1, atom2, atom1Bonds.get$I(0), atom2Bonds, arom]);
} else if (wind2 > 0) {
return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom2, atom1, atom2Bonds.get$I(0), atom1Bonds, arom]);
} else {
return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z$Z.apply(this, [bond, atom1, atom2, atom1Bonds.get$I(0), atom2Bonds, true, arom]);
}} else if (!(this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(atom1) && this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(atom2) )) {
if (atom1Bonds.size$() == 1 && atom2Bonds.isEmpty$() ) return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom1, atom2, atom1Bonds.get$I(0), atom2Bonds, arom]);
 else if (atom2Bonds.size$() == 1 && atom1Bonds.isEmpty$() ) return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom2, atom1, atom2Bonds.get$I(0), atom1Bonds, arom]);
 else if (p$1.specialOffsetBondNextToWedge$org_openscience_cdk_interfaces_IAtom$java_util_List.apply(this, [atom1, atom1Bonds])) return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom1, atom2, p$1.selectPlainSingleBond$java_util_List.apply(this, [atom1Bonds]), atom2Bonds, arom]);
 else if (p$1.specialOffsetBondNextToWedge$org_openscience_cdk_interfaces_IAtom$java_util_List.apply(this, [atom2, atom2Bonds])) return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom2, atom1, p$1.selectPlainSingleBond$java_util_List.apply(this, [atom2Bonds]), atom1Bonds, arom]);
 else if (atom1Bonds.size$() == 1) return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom1, atom2, atom1Bonds.get$I(0), atom2Bonds, arom]);
 else if (atom2Bonds.size$() == 1) return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom2, atom1, atom2Bonds.get$I(0), atom1Bonds, arom]);
 else if (p$1.selectUnsetAromBond$java_util_List.apply(this, [atom1Bonds]) != null ) return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom1, atom2, p$1.selectUnsetAromBond$java_util_List.apply(this, [atom1Bonds]), atom2Bonds, arom]);
 else if (p$1.selectUnsetAromBond$java_util_List.apply(this, [atom2Bonds]) != null ) return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z.apply(this, [bond, atom2, atom1, p$1.selectUnsetAromBond$java_util_List.apply(this, [atom2Bonds]), atom1Bonds, arom]);
 else return p$1.generateCenteredDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List.apply(this, [bond, atom1, atom2, atom1Bonds, atom2Bonds]);
} else {
if (arom) {
return this.generateDashedBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom1, atom2);
} else {
return p$1.generateCenteredDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List.apply(this, [bond, atom1, atom2, atom1Bonds, atom2Bonds]);
}}}, p$1);

Clazz.newMeth(C$, 'specialOffsetBondNextToWedge$org_openscience_cdk_interfaces_IAtom$java_util_List',  function (atom, bonds) {
if (bonds.size$() != 2) return false;
if (p$1.atWideEndOfWedge$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [atom, bonds.get$I(0)]) && C$.isPlainBond$org_openscience_cdk_interfaces_IBond(bonds.get$I(1)) ) return true;
if (p$1.atWideEndOfWedge$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [atom, bonds.get$I(1)]) && C$.isPlainBond$org_openscience_cdk_interfaces_IBond(bonds.get$I(0)) ) return true;
return false;
}, p$1);

Clazz.newMeth(C$, 'selectPlainSingleBond$java_util_List',  function (bonds) {
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (C$.isPlainBond$org_openscience_cdk_interfaces_IBond(bond)) return bond;
}
return bonds.get$I(0);
}, p$1);

Clazz.newMeth(C$, 'selectUnsetAromBond$java_util_List',  function (bonds) {
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.isAromatic$() && bond.getOrder$() === $I$(3).UNSET  ) return bond;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'isPlainBond$org_openscience_cdk_interfaces_IBond',  function (bond) {
return $I$(3).SINGLE.equals$O(bond.getOrder$()) && (bond.getStereo$() == null  || bond.getStereo$() === $I$(38).NONE  ) ;
}, 1);

Clazz.newMeth(C$, 'atWideEndOfWedge$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond',  function (atom, bond) {
if (bond.getStereo$() == null ) return false;
switch (bond.getDisplay$()) {
case $I$(29).Bold:
case $I$(29).Hash:
return true;
case $I$(29).WedgeBegin:
case $I$(29).WedgedHashBegin:
return bond.getEnd$().equals$O(atom);
case $I$(29).WedgeEnd:
case $I$(29).WedgedHashEnd:
return bond.getBegin$().equals$O(atom);
default:
return false;
}
}, p$1);

Clazz.newMeth(C$, 'generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z',  function (bond, atom1, atom2, atom1Bond, atom2Bonds, dashed) {
return p$1.generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z$Z.apply(this, [bond, atom1, atom2, atom1Bond, atom2Bonds, false, dashed]);
}, p$1);

Clazz.newMeth(C$, 'generateOffsetDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$java_util_List$Z$Z',  function (bond, atom1, atom2, atom1Bond, atom2Bonds, invert, dashed) {
Clazz.assert(C$, this, function(){return atom1Bond != null });
var atom1Point=atom1.getPoint2d$();
var atom2Point=atom2.getPoint2d$();
var atom1BackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom1, atom2);
var atom2BackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom2, atom1);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(atom1Point, atom2Point);
var perpendicular=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var reference=$I$(30,"newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom1.getPoint2d$(), atom1Bond.getOther$org_openscience_cdk_interfaces_IAtom(atom1).getPoint2d$()]);
if (reference.dot$javax_vecmath_Vector2d(perpendicular) < 0 ) perpendicular=$I$(30).negate$javax_vecmath_Tuple2d(perpendicular);
if (invert) perpendicular=$I$(30).negate$javax_vecmath_Tuple2d(perpendicular);
if (atom2Bonds.isEmpty$() && this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(atom2) ) {
var atom2index=(this.atomIndexMap.get$O(atom2)).$c();
var nudge=$I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, this.separation / 2);
this.symbols[atom2index]=this.symbols[atom2index].translate$D$D(nudge.x, nudge.y);
}var atom1Offset=0;
var atom2Offset=0;
if (dashed || !this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(atom1) ) {
atom1Offset=$I$(30,"adjacentLength$javax_vecmath_Vector2d$javax_vecmath_Vector2d$D",[$I$(30).sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(reference, unit), perpendicular, this.separation]);
}if (reference.dot$javax_vecmath_Vector2d(perpendicular) < 0 ) atom1Offset=-atom1Offset;
if (!atom2Bonds.isEmpty$() && (dashed || !this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(atom2) ) ) {
var closest=$I$(30).getNearestVector$javax_vecmath_Vector2d$org_openscience_cdk_interfaces_IAtom$java_util_List(perpendicular, atom2, atom2Bonds);
atom2Offset=$I$(30,"adjacentLength$javax_vecmath_Vector2d$javax_vecmath_Vector2d$D",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[closest, $I$(30).negate$javax_vecmath_Tuple2d(unit)]), perpendicular, this.separation]);
if (closest.dot$javax_vecmath_Vector2d(perpendicular) < 0 ) atom2Offset=-atom2Offset;
}var halfBondLength=atom1Point.distance$javax_vecmath_Point2d(atom2BackOffPoint) / 2;
if (atom1Offset > halfBondLength  || atom1Offset < 0  ) atom1Offset=0;
if (atom2Offset > halfBondLength  || atom2Offset < 0  ) atom2Offset=0;
var group=Clazz.new_($I$(28,1));
switch (bond.getDisplay$()) {
case $I$(29).Bold:
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateBoldBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List(atom1, atom2, $I$(39).singletonList$O(atom1Bond), atom2Bonds));
break;
case $I$(29).Hash:
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateHashBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List(atom1, atom2, $I$(39).singletonList$O(atom1Bond), atom2Bonds));
break;
case $I$(29).Dash:
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateDashedBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom1, atom2));
break;
case $I$(29).Dot:
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateDashedBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom1, atom2));
break;
default:
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(atom1BackOffPoint, atom2BackOffPoint));
break;
}
if (dashed) {
var beg=Clazz.new_([$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom1Point, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, this.separation)])],$I$(33,1).c$$javax_vecmath_Tuple2d);
var end=Clazz.new_([$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom2Point, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, this.separation)])],$I$(33,1).c$$javax_vecmath_Tuple2d);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateDashedBond$javax_vecmath_Point2d$javax_vecmath_Point2d$D$D(beg, end, atom1Offset, beg.distance$javax_vecmath_Point2d(end) - atom2Offset));
} else {
var beg=Clazz.new_([$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom1BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, this.separation)])],$I$(33,1).c$$javax_vecmath_Tuple2d);
var end=Clazz.new_([$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom2BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, this.separation)])],$I$(33,1).c$$javax_vecmath_Tuple2d);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d($I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[beg, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, atom1Offset)]), $I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[end, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, -atom2Offset)])));
}var label=$I$(22).getAnnotationLabel$org_openscience_cdk_interfaces_IChemObject(bond);
if (label != null ) p$1.addAnnotation$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$S$javax_vecmath_Vector2d.apply(this, [atom1, atom2, label, $I$(30).negate$javax_vecmath_Tuple2d(perpendicular)]);
return group;
}, p$1);

Clazz.newMeth(C$, 'generateCenteredDoubleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List',  function (bond, atom1, atom2, atom1Bonds, atom2Bonds) {
var atom1BackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom1, atom2);
var atom2BackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom2, atom1);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(atom1BackOffPoint, atom2BackOffPoint);
var perpendicular1=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var perpendicular2=$I$(30).negate$javax_vecmath_Tuple2d(perpendicular1);
var halfBondLength=atom1BackOffPoint.distance$javax_vecmath_Point2d(atom2BackOffPoint) / 2;
var halfSeparation=this.separation / 2;
var group=Clazz.new_($I$(28,1));
var line1Atom1Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom1BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular1, halfSeparation)]);
var line1Atom2Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom2BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular1, halfSeparation)]);
var line2Atom1Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom1BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular2, halfSeparation)]);
var line2Atom2Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom2BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular2, halfSeparation)]);
if (!this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(atom1) && atom1Bonds.size$() > 1 ) {
var nearest1=$I$(30).getNearestVector$javax_vecmath_Vector2d$org_openscience_cdk_interfaces_IAtom$java_util_List(perpendicular1, atom1, atom1Bonds);
var nearest2=$I$(30).getNearestVector$javax_vecmath_Vector2d$org_openscience_cdk_interfaces_IAtom$java_util_List(perpendicular2, atom1, atom1Bonds);
var line1Adjust=$I$(30).adjacentLength$javax_vecmath_Vector2d$javax_vecmath_Vector2d$D(nearest1, perpendicular1, halfSeparation);
var line2Adjust=$I$(30).adjacentLength$javax_vecmath_Vector2d$javax_vecmath_Vector2d$D(nearest2, perpendicular2, halfSeparation);
if (line1Adjust > halfBondLength  || line1Adjust < 0  ) line1Adjust=0;
if (line2Adjust > halfBondLength  || line2Adjust < 0  ) line2Adjust=0;
if (nearest1.dot$javax_vecmath_Vector2d(unit) > 0 ) line1Adjust=-line1Adjust;
if (nearest2.dot$javax_vecmath_Vector2d(unit) > 0 ) line2Adjust=-line2Adjust;
line1Atom1Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[line1Atom1Point, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, -line1Adjust)]);
line2Atom1Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[line2Atom1Point, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, -line2Adjust)]);
}if (!this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(atom2) && atom2Bonds.size$() > 1 ) {
var nearest1=$I$(30).getNearestVector$javax_vecmath_Vector2d$org_openscience_cdk_interfaces_IAtom$java_util_List(perpendicular1, atom2, atom2Bonds);
var nearest2=$I$(30).getNearestVector$javax_vecmath_Vector2d$org_openscience_cdk_interfaces_IAtom$java_util_List(perpendicular2, atom2, atom2Bonds);
var line1Adjust=$I$(30).adjacentLength$javax_vecmath_Vector2d$javax_vecmath_Vector2d$D(nearest1, perpendicular1, halfSeparation);
var line2Adjust=$I$(30).adjacentLength$javax_vecmath_Vector2d$javax_vecmath_Vector2d$D(nearest2, perpendicular2, halfSeparation);
if (line1Adjust > halfBondLength  || line1Adjust < 0  ) line1Adjust=0;
if (line2Adjust > halfBondLength  || line2Adjust < 0  ) line2Adjust=0;
if (nearest1.dot$javax_vecmath_Vector2d(unit) < 0 ) line1Adjust=-line1Adjust;
if (nearest2.dot$javax_vecmath_Vector2d(unit) < 0 ) line2Adjust=-line2Adjust;
line1Atom2Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[line1Atom2Point, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, line1Adjust)]);
line2Atom2Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[line2Atom2Point, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, line2Adjust)]);
}group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(line1Atom1Point, line1Atom2Point));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(line2Atom1Point, line2Atom2Point));
var label=$I$(22).getAnnotationLabel$org_openscience_cdk_interfaces_IChemObject(bond);
if (label != null ) p$1.addAnnotation$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$S.apply(this, [atom1, atom2, label]);
return group;
}, p$1);

Clazz.newMeth(C$, 'generateCrossedDoubleBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (from, to) {
var atom1BackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
var atom2BackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(atom1BackOffPoint, atom2BackOffPoint);
var perpendicular1=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var perpendicular2=$I$(30).negate$javax_vecmath_Tuple2d(perpendicular1);
var halfSeparation=this.separation / 2;
var line1Atom1Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom1BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular1, halfSeparation)]);
var line1Atom2Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom2BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular1, halfSeparation)]);
var line2Atom1Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom1BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular2, halfSeparation)]);
var line2Atom2Point=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom2BackOffPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular2, halfSeparation)]);
var group=Clazz.new_($I$(28,1));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(line1Atom1Point, line2Atom2Point));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(line2Atom1Point, line1Atom2Point));
return group;
}, p$1);

Clazz.newMeth(C$, 'generateTripleBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (bond, atom1, atom2) {
var group=Clazz.new_($I$(28,1));
var p1=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom1, atom2);
var p2=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom2, atom1);
var perp=$I$(30,"newPerpendicularVector$javax_vecmath_Vector2d",[$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(p1, p2)]);
perp.scale$D(this.separation);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(40,1).c$$D$D$D$D$D$java_awt_Color,[p1.x, p1.y, p2.x, p2.y, this.stroke, this.foreground]));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(40,1).c$$D$D$D$D$D$java_awt_Color,[p1.x + perp.x, p1.y + perp.y, p2.x + perp.x, p2.y + perp.y, this.stroke, this.foreground]));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(40,1).c$$D$D$D$D$D$java_awt_Color,[p1.x - perp.x, p1.y - perp.y, p2.x - perp.x, p2.y - perp.y, this.stroke, this.foreground]));
var label=$I$(22).getAnnotationLabel$org_openscience_cdk_interfaces_IChemObject(bond);
if (label != null ) p$1.addAnnotation$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$S.apply(this, [atom1, atom2, label]);
return group;
}, p$1);

Clazz.newMeth(C$, 'generateAttachPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond',  function (atom, bond) {
var mid=atom.getPoint2d$();
var bndVec=$I$(30).newUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond(atom, bond);
var bndXVec=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(bndVec);
var length=atom.getPoint2d$().distance$javax_vecmath_Point2d(bond.getOther$org_openscience_cdk_interfaces_IAtom(atom).getPoint2d$());
bndXVec.scale$D(length / 2);
var beg=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom.getPoint2d$(), bndXVec]);
bndXVec.scale$D(-1);
var end=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom.getPoint2d$(), bndXVec]);
var nCurves=((2 * Math.ceil(length / this.waveSpacing))|0);
var step=length / nCurves;
bndXVec.normalize$();
var peak=$I$(30).scale$javax_vecmath_Tuple2d$D(bndVec, step);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(beg, end);
var path=Clazz.new_($I$(36,1));
var halfNCurves=(nCurves/2|0);
path.add$O(Clazz.new_($I$(32,1).c$$D$D,[mid.x, mid.y]));
for (var i=1; i < halfNCurves; i+=2) {
peak.negate$();
{
var dist=i * step;
var endPoint=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, dist)]), peak]);
var controlPoint1=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30,"scale$javax_vecmath_Tuple2d$D",[unit, (i - 1) * step])]), $I$(30).scale$javax_vecmath_Tuple2d$D(peak, 0.5)]);
var controlPoint2=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30,"scale$javax_vecmath_Tuple2d$D",[unit, (i - 0.5) * step])]), peak]);
path.add$O(Clazz.new_($I$(37,1).c$$D$D$D$D$D$D,[controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y]));
}{
var dist=(i + 1) * step;
var endPoint=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, dist)]);
var controlPoint1=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30,"scale$javax_vecmath_Tuple2d$D",[unit, (i + 0.5) * step])]), peak]);
var controlPoint2=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, dist)]), $I$(30).scale$javax_vecmath_Tuple2d$D(peak, 0.5)]);
path.add$O(Clazz.new_($I$(37,1).c$$D$D$D$D$D$D,[controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y]));
}}
unit.negate$();
peak.negate$();
path.add$O(Clazz.new_($I$(32,1).c$$D$D,[mid.x, mid.y]));
for (var i=1; i < halfNCurves; i+=2) {
peak.negate$();
{
var dist=i * step;
var endPoint=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, dist)]), peak]);
var controlPoint1=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30,"scale$javax_vecmath_Tuple2d$D",[unit, (i - 1) * step])]), $I$(30).scale$javax_vecmath_Tuple2d$D(peak, 0.5)]);
var controlPoint2=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30,"scale$javax_vecmath_Tuple2d$D",[unit, (i - 0.5) * step])]), peak]);
path.add$O(Clazz.new_($I$(37,1).c$$D$D$D$D$D$D,[controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y]));
}{
var dist=(i + 1) * step;
var endPoint=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, dist)]);
var controlPoint1=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30,"scale$javax_vecmath_Tuple2d$D",[unit, (i + 0.5) * step])]), peak]);
var controlPoint2=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[mid, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, dist)]), $I$(30).scale$javax_vecmath_Tuple2d$D(peak, 0.5)]);
path.add$O(Clazz.new_($I$(37,1).c$$D$D$D$D$D$D,[controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, endPoint.x, endPoint.y]));
}}
return Clazz.new_($I$(27,1).c$$java_util_List$java_awt_Color,[path, this.foreground]).outline$D(this.stroke);
}, p$1);

Clazz.newMeth(C$, 'isAttachPoint$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return Clazz.instanceOf(atom, "org.openscience.cdk.interfaces.IPseudoAtom") && (atom).getAttachPointNum$() > 0 ;
}, p$1);

Clazz.newMeth(C$, 'addAnnotation$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$S',  function (atom1, atom2, label) {
var perpendicular=$I$(30,"newPerpendicularVector$javax_vecmath_Vector2d",[$I$(30,"newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[atom1.getPoint2d$(), atom2.getPoint2d$()])]);
p$1.addAnnotation$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$S$javax_vecmath_Vector2d.apply(this, [atom1, atom2, label, perpendicular]);
}, p$1);

Clazz.newMeth(C$, 'addAnnotation$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$S$javax_vecmath_Vector2d',  function (atom1, atom2, label, perpendicular) {
var midPoint=$I$(30,"midpoint$javax_vecmath_Point2d$javax_vecmath_Point2d",[atom1.getPoint2d$(), atom2.getPoint2d$()]);
var outline=$I$(22).generateAnnotation$javax_vecmath_Point2d$S$javax_vecmath_Vector2d$D$D$java_awt_Font$org_openscience_cdk_renderer_generators_standard_AtomSymbol(midPoint, label, perpendicular, this.annotationDistance, this.annotationScale, this.font, null);
this.annotations.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(41,"markup$org_openscience_cdk_renderer_elements_IRenderingElement$SA",[$I$(27,"shapeOf$java_awt_Shape$java_awt_Color",[outline.getOutline$(), this.annotationColor]), Clazz.array(String, -1, ["annotation"])]));
}, p$1);

Clazz.newMeth(C$, 'generateDashedBond$javax_vecmath_Point2d$javax_vecmath_Point2d$D$D',  function (fromPoint, toPoint, start, end) {
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, toPoint);
var nDashes=(this.parameters.get$Class(Clazz.getClass($I$(42)))).$c();
var step=fromPoint.distance$javax_vecmath_Point2d(toPoint) / ((3 * nDashes) - 2);
var group=Clazz.new_($I$(28,1));
var distance=0;
for (var i=0; i < nDashes; i++) {
if (distance > start  && distance + step < end  ) {
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d($I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, distance)]), $I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, distance + step)])));
} else if (distance + step > start  && distance + step < end  ) {
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d($I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, start)]), $I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, distance + step)])));
} else if (distance > start  && distance < end  ) {
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d($I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, distance)]), $I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, end)])));
}distance+=step;
distance+=step;
distance+=step;
}
return group;
});

Clazz.newMeth(C$, 'generateDashedBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (from, to) {
var fromPoint=from.getPoint2d$();
var toPoint=to.getPoint2d$();
var start=this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(from) ? fromPoint.distance$javax_vecmath_Point2d(this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to)) : -Infinity;
var end=this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(to) ? fromPoint.distance$javax_vecmath_Point2d(this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from)) : Infinity;
return this.generateDashedBond$javax_vecmath_Point2d$javax_vecmath_Point2d$D$D(fromPoint, toPoint, start, end);
});

Clazz.newMeth(C$, 'generateArrowBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (from, to) {
var group=Clazz.new_($I$(28,1));
var fromPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
var toPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, toPoint);
var perpendicular=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var arrowHeadLen=$I$(30).scale$javax_vecmath_Tuple2d$D(unit, -1.25 * this.wedgeWidth);
var arrowHeadIndent=$I$(30).scale$javax_vecmath_Tuple2d$D(unit, -this.wedgeWidth);
var a=toPoint;
var b=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30).sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(toPoint, arrowHeadLen), $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, 0.6 * this.wedgeWidth)]);
var c=$I$(30).sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(toPoint, arrowHeadIndent);
var d=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[$I$(30).sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(toPoint, arrowHeadLen), $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, -0.6 * this.wedgeWidth)]);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, $I$(30).sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(toPoint, arrowHeadIndent)));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newPolygon$java_awt_Color$javax_vecmath_Tuple2dA(this.foreground, Clazz.array($I$(43), -1, [a, b, c, d])));
return group;
});

Clazz.newMeth(C$, 'generateBoldBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List',  function (from, to, fromBonds, toBonds) {
var fromPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
var toPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, toPoint);
var perpendicular=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var halfWideEnd=this.wedgeWidth / 2;
var a=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, halfWideEnd)]);
var b=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, -halfWideEnd)]);
var c=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[toPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, -halfWideEnd)]);
var d=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[toPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, halfWideEnd)]);
var threshold=Math.toRadians(15);
if (this.fancyBoldWedges) {
if (!this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(to)) {
if (toBonds.size$() == 1) {
var toBondNeighbor=toBonds.get$I(0);
var toNeighbor=toBondNeighbor.getOther$org_openscience_cdk_interfaces_IAtom(to);
var refVector=$I$(30,"newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[toPoint, toNeighbor.getPoint2d$()]);
var wideToWide=false;
if (p$1.atWideEndOfWedge$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [to, toBondNeighbor])) {
refVector=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[refVector, $I$(30).negate$javax_vecmath_Tuple2d(unit)]);
wideToWide=true;
}var theta=refVector.angle$javax_vecmath_Vector2d(unit);
if (theta > threshold  && theta + threshold + threshold  < 3.141592653589793  ) {
c=$I$(30,"intersection$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[b, $I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(b, c), toPoint, refVector]);
d=$I$(30,"intersection$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[a, $I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(a, d), toPoint, refVector]);
if (!wideToWide) {
var nudge=(this.stroke / 2) / Math.sin(theta);
c=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[c, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, nudge)]);
d=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[d, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, nudge)]);
}}}}if (!this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(from)) {
unit=$I$(30).negate$javax_vecmath_Tuple2d(unit);
if (fromBonds.size$() == 1) {
var fromNbrBond=fromBonds.get$I(0);
var fromNbr=fromNbrBond.getOther$org_openscience_cdk_interfaces_IAtom(from);
var refVector=$I$(30,"newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, fromNbr.getPoint2d$()]);
var wideToWide=false;
if (p$1.atWideEndOfWedge$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [from, fromNbrBond])) {
refVector=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[refVector, $I$(30).negate$javax_vecmath_Tuple2d(unit)]);
wideToWide=true;
}var theta=refVector.angle$javax_vecmath_Vector2d(unit);
if (theta > threshold  && theta + threshold + threshold  < 3.141592653589793  ) {
b=$I$(30,"intersection$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[c, $I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(c, b), fromPoint, refVector]);
a=$I$(30,"intersection$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[d, $I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(d, a), fromPoint, refVector]);
if (!wideToWide) {
var nudge=(this.stroke / 2) / Math.sin(theta);
a=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[a, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, nudge)]);
b=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[b, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, nudge)]);
}}}}}return this.newPolygon$java_awt_Color$javax_vecmath_Tuple2dA(this.foreground, Clazz.array($I$(43), -1, [a, b, c, d]));
});

Clazz.newMeth(C$, 'generateHashBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List',  function (from, to, fromBonds, toBonds) {
var fromPoint=from.getPoint2d$();
var toPoint=to.getPoint2d$();
var fromBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
var toBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, toPoint);
var perpendicular=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var halfWideEnd=this.wedgeWidth / 2;
var adjacent=fromPoint.distance$javax_vecmath_Point2d(toPoint);
var nSections=((adjacent / this.hashSpacing)|0);
var step=adjacent / (nSections - 1);
var group=Clazz.new_($I$(28,1));
var start=this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(from) ? fromPoint.distance$javax_vecmath_Point2d(fromBackOffPoint) : -Infinity;
var end=this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(to) ? fromPoint.distance$javax_vecmath_Point2d(toBackOffPoint) : Infinity;
var threshold=Math.toRadians(35);
for (var i=0; i < nSections; i++) {
var distance=i * step;
if (distance < start  || distance > end  ) continue;
var interval=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, distance)]);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d($I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[interval, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, halfWideEnd)]), $I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[interval, $I$(30).scale$javax_vecmath_Tuple2d$D(perpendicular, -halfWideEnd)])));
}
return group;
});

Clazz.newMeth(C$, 'generateDotBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (from, to) {
var fromPoint=from.getPoint2d$();
var toPoint=to.getPoint2d$();
var fromBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(from, to);
var toBackOffPoint=this.backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(to, from);
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, toPoint);
var perpendicular=$I$(30).newPerpendicularVector$javax_vecmath_Vector2d(unit);
var adjacent=fromPoint.distance$javax_vecmath_Point2d(toPoint);
var nSections=((adjacent / (3 * this.stroke))|0);
var step=adjacent / (nSections - 1);
var group=Clazz.new_($I$(28,1));
var start=this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(from) ? fromPoint.distance$javax_vecmath_Point2d(fromBackOffPoint) : -Infinity;
var end=this.hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom(to) ? fromPoint.distance$javax_vecmath_Point2d(toBackOffPoint) : Infinity;
for (var i=0; i < nSections; i++) {
var distance=i * step;
if (distance < start  || distance > end  ) continue;
var interval=$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[fromPoint, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, distance)]);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(44,1).c$$D$D$D$java_awt_Color,[interval.x, interval.y, 0.75 * this.stroke, this.foreground]));
}
return group;
});

Clazz.newMeth(C$, 'newLineElement$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d',  function (a, b) {
return Clazz.new_($I$(40,1).c$$D$D$D$D$D$java_awt_Color,[a.x, a.y, b.x, b.y, this.stroke, this.foreground]);
});

Clazz.newMeth(C$, 'newPolygon$java_awt_Color$javax_vecmath_Tuple2dA',  function (c, points) {
var elements=Clazz.new_($I$(36,1));
for (var i=0; i < points.length; i++) {
var point=points[i];
if (i == 0) elements.add$O(Clazz.new_([Clazz.new_($I$(33,1).c$$javax_vecmath_Tuple2d,[point])],$I$(32,1).c$$javax_vecmath_Point2d));
 else elements.add$O(Clazz.new_([Clazz.new_($I$(33,1).c$$javax_vecmath_Tuple2d,[point])],$I$(34,1).c$$javax_vecmath_Point2d));
}
elements.add$O(Clazz.new_($I$(35,1)));
return Clazz.new_($I$(27,1).c$$java_util_List$java_awt_Color,[elements, c]);
});

Clazz.newMeth(C$, 'backOffPoint$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (from, to) {
return C$.backOffPointOf$org_openscience_cdk_renderer_generators_standard_AtomSymbol$javax_vecmath_Point2d$javax_vecmath_Point2d$D(this.symbols[(this.atomIndexMap.get$O(from)).$c()], from.getPoint2d$(), to.getPoint2d$(), this.backOff);
});

Clazz.newMeth(C$, 'hasDisplayedSymbol$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return this.symbols[(this.atomIndexMap.get$O(atom)).$c()] != null ;
});

Clazz.newMeth(C$, 'backOffPointOf$org_openscience_cdk_renderer_generators_standard_AtomSymbol$javax_vecmath_Point2d$javax_vecmath_Point2d$D',  function (symbol, fromPoint, toPoint, backOff) {
if (symbol == null ) return fromPoint;
var intersect=$I$(30,"toVecmathPoint$java_awt_geom_Point2D",[symbol.getConvexHull$().intersect$java_awt_geom_Point2D$java_awt_geom_Point2D($I$(30).toAwtPoint$javax_vecmath_Point2d(fromPoint), $I$(30).toAwtPoint$javax_vecmath_Point2d(toPoint))]);
if (intersect == null ) return fromPoint;
var unit=$I$(30).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromPoint, toPoint);
return Clazz.new_([$I$(30,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[intersect, $I$(30).scale$javax_vecmath_Tuple2d$D(unit, backOff)])],$I$(33,1).c$$javax_vecmath_Tuple2d);
}, 1);

Clazz.newMeth(C$, 'winding$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond',  function (bond1, bond2) {
var atom1=bond1.getBegin$();
var atom2=bond1.getEnd$();
if (bond2.contains$org_openscience_cdk_interfaces_IAtom(atom1)) {
return C$.winding$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Point2d(atom2.getPoint2d$(), atom1.getPoint2d$(), bond2.getOther$org_openscience_cdk_interfaces_IAtom(atom1).getPoint2d$());
} else if (bond2.contains$org_openscience_cdk_interfaces_IAtom(atom2)) {
return C$.winding$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Point2d(atom1.getPoint2d$(), atom2.getPoint2d$(), bond2.getOther$org_openscience_cdk_interfaces_IAtom(atom2).getPoint2d$());
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bonds do not share any atoms"]);
}}, 1);

Clazz.newMeth(C$, 'ringPreferenceMap$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IRingSet',  function (container, smallest) {
if (smallest == null ) smallest=$I$(45).edgeShort$org_openscience_cdk_interfaces_IAtomContainer(container).toRingSet$();
var rings=$I$(46).getAllAtomContainers$org_openscience_cdk_interfaces_IAtomContainerSet(smallest);
rings.sort$java_util_Comparator(Clazz.new_($I$(47,1).c$$org_openscience_cdk_interfaces_IAtomContainer,[container]));
var ringMap=Clazz.new_($I$(5,1));
for (var ring, $ring = rings.iterator$(); $ring.hasNext$()&&((ring=($ring.next$())),1);) {
C$.normalizeRingWinding$org_openscience_cdk_interfaces_IAtomContainer(ring);
for (var bond, $bond = ring.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (ringMap.containsKey$O(bond)) continue;
ringMap.put$O$O(bond, ring);
}
}
return $I$(39).unmodifiableMap$java_util_Map(ringMap);
}, 1);

Clazz.newMeth(C$, 'ringPreferenceMap$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return C$.ringPreferenceMap$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IRingSet(container, $I$(45).edgeShort$org_openscience_cdk_interfaces_IAtomContainer(container).toRingSet$());
}, 1);

Clazz.newMeth(C$, 'normalizeRingWinding$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var prev=container.getAtomCount$() - 1;
var curr=0;
var next=1;
var n=container.getAtomCount$();
var winding=0;
while (curr < n){
winding+=C$.winding$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Point2d(container.getAtom$I(prev).getPoint2d$(), container.getAtom$I(curr).getPoint2d$(), container.getAtom$I(next % n).getPoint2d$());
prev=curr;
curr=next;
next=next + 1;
}
if (winding < 0) {
var atoms=Clazz.array($I$(20), [n]);
for (var i=0; i < n; i++) atoms[n - i - 1 ]=container.getAtom$I(i);

container.setAtoms$org_openscience_cdk_interfaces_IAtomA(atoms);
}}, 1);

Clazz.newMeth(C$, 'winding$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Point2d',  function (a, b, c) {
return (Math.signum((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x))|0);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardBondGenerator, "RingBondOffsetComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['hasMetal']]
,['O',['PREFERENCE_INDEX','int[]']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
;C$.$init$.apply(this);
this.hasMetal=C$.hasMetal$org_openscience_cdk_interfaces_IAtomContainer(mol);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.hasMetal=false;
}, 1);

Clazz.newMeth(C$, 'hasMetal$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) if ($I$(1).isMetal$org_openscience_cdk_interfaces_IAtom(atom)) return true;

return false;
}, 1);

Clazz.newMeth(C$, ['compare$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','compare$O$O'],  function (ringa, ringb) {
if (this.hasMetal) {
var cmp=Boolean.compare$Z$Z(C$.hasMetal$org_openscience_cdk_interfaces_IAtomContainer(ringa), C$.hasMetal$org_openscience_cdk_interfaces_IAtomContainer(ringb));
if (cmp != 0) return cmp;
}var sizeCmp=Integer.compare$I$I(C$.sizePreference$I(ringa.getAtomCount$()), C$.sizePreference$I(ringb.getAtomCount$()));
if (sizeCmp != 0) return sizeCmp;
var piBondCmp=Integer.compare$I$I(C$.nDoubleBonds$org_openscience_cdk_interfaces_IAtomContainer(ringa), C$.nDoubleBonds$org_openscience_cdk_interfaces_IAtomContainer(ringb));
if (piBondCmp != 0) return -piBondCmp;
var freqA=C$.countLightElements$org_openscience_cdk_interfaces_IAtomContainer(ringa);
var freqB=C$.countLightElements$org_openscience_cdk_interfaces_IAtomContainer(ringb);
for (var element, $element = $I$(2,"asList$OA",[Clazz.array($I$(1), -1, [$I$(1).Carbon, $I$(1).Nitrogen, $I$(1).Oxygen, $I$(1).Sulfur, $I$(1).Phosphorus])]).iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
var elemCmp=Integer.compare$I$I(freqA[element.number$()], freqB[element.number$()]);
if (elemCmp != 0) return -elemCmp;
}
return 0;
});

Clazz.newMeth(C$, 'sizePreference$I',  function (size) {
if (size < 3) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["a ring must have at least 3 atoms"]);
if (size > 7) return size;
return C$.PREFERENCE_INDEX[size];
}, 1);

Clazz.newMeth(C$, 'nDoubleBonds$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var count=0;
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) if ($I$(3).DOUBLE.equals$O(bond.getOrder$())) ++count;

return count;
}, 1);

Clazz.newMeth(C$, 'countLightElements$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var freq=Clazz.array(Integer.TYPE, [19]);
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if ((atom.getAtomicNumber$()).$c() >= 0  && (atom.getAtomicNumber$()).$c() < 19  ) ++freq[(atom.getAtomicNumber$()).$c()];
}
return freq;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PREFERENCE_INDEX=Clazz.array(Integer.TYPE, [8]);
{
var preference=0;
for (var size, $size = 0, $$size = Clazz.array(Integer.TYPE, -1, [6, 5, 7, 4, 3]); $size<$$size.length&&((size=($$size[$size])),1);$size++) {
C$.PREFERENCE_INDEX[size]=preference++;
}
};
};
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:25 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
