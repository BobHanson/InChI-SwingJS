(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),I$=[[0,['java.awt.geom.Point2D','.Double'],'javax.vecmath.Point2d','javax.vecmath.Vector2d','java.util.ArrayList','java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "VecmathUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toAwtPoint$javax_vecmath_Point2d',  function (point) {
return Clazz.new_($I$(1,1).c$$D$D,[point.x, point.y]);
}, 1);

Clazz.newMeth(C$, 'toVecmathPoint$java_awt_geom_Point2D',  function (point) {
return Clazz.new_([point.getX$(), point.getY$()],$I$(2,1).c$$D$D);
}, 1);

Clazz.newMeth(C$, 'newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d',  function (from, to) {
var vector=Clazz.new_($I$(3,1).c$$D$D,[to.x - from.x, to.y - from.y]);
vector.normalize$();
return vector;
}, 1);

Clazz.newMeth(C$, 'newUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond',  function (atom, bond) {
return C$.newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(atom.getPoint2d$(), bond.getOther$org_openscience_cdk_interfaces_IAtom(atom).getPoint2d$());
}, 1);

Clazz.newMeth(C$, 'newUnitVectors$org_openscience_cdk_interfaces_IAtom$java_util_List',  function (fromAtom, toAtoms) {
var unitVectors=Clazz.new_([toAtoms.size$()],$I$(4,1).c$$I);
for (var toAtom, $toAtom = toAtoms.iterator$(); $toAtom.hasNext$()&&((toAtom=($toAtom.next$())),1);) {
unitVectors.add$O(C$.newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(fromAtom.getPoint2d$(), toAtom.getPoint2d$()));
}
return unitVectors;
}, 1);

Clazz.newMeth(C$, 'newPerpendicularVector$javax_vecmath_Vector2d',  function (vector) {
return Clazz.new_($I$(3,1).c$$D$D,[-vector.y, vector.x]);
}, 1);

Clazz.newMeth(C$, 'midpoint$javax_vecmath_Point2d$javax_vecmath_Point2d',  function (a, b) {
return Clazz.new_([(a.x + b.x) / 2, (a.y + b.y) / 2],$I$(2,1).c$$D$D);
}, 1);

Clazz.newMeth(C$, 'scale$javax_vecmath_Tuple2d$D',  function (vector, factor) {
var cpy=Clazz.new_($I$(3,1).c$$javax_vecmath_Tuple2d,[vector]);
cpy.scale$D(factor);
return cpy;
}, 1);

Clazz.newMeth(C$, 'sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d',  function (a, b) {
return Clazz.new_($I$(3,1).c$$D$D,[a.x + b.x, a.y + b.y]);
}, 1);

Clazz.newMeth(C$, 'negate$javax_vecmath_Tuple2d',  function (vector) {
return Clazz.new_($I$(3,1).c$$D$D,[-vector.x, -vector.y]);
}, 1);

Clazz.newMeth(C$, 'intersection$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d',  function (p1, d1, p2, d2) {
var p1End=C$.sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(p1, d1);
var p2End=C$.sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(p2, d2);
return C$.intersection$D$D$D$D$D$D$D$D(p1.x, p1.y, p1End.x, p1End.y, p2.x, p2.y, p2End.x, p2End.y);
}, 1);

Clazz.newMeth(C$, 'intersection$D$D$D$D$D$D$D$D',  function (x1, y1, x2, y2, x3, y3, x4, y4) {
var x=((x2 - x1) * (x3 * y4 - x4 * y3) - (x4 - x3) * (x1 * y2 - x2 * y1)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
var y=((y3 - y4) * (x1 * y2 - x2 * y1) - (y1 - y2) * (x3 * y4 - x4 * y3)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
return Clazz.new_($I$(2,1).c$$D$D,[x, y]);
}, 1);

Clazz.newMeth(C$, 'adjacentLength$javax_vecmath_Vector2d$javax_vecmath_Vector2d$D',  function (hypotenuse, adjacent, oppositeLength) {
return Math.tan(hypotenuse.angle$javax_vecmath_Vector2d(adjacent)) * oppositeLength;
}, 1);

Clazz.newMeth(C$, 'average$java_util_Collection',  function (vectors) {
var average=Clazz.new_($I$(3,1).c$$D$D,[0, 0]);
for (var vector, $vector = vectors.iterator$(); $vector.hasNext$()&&((vector=($vector.next$())),1);) {
average.add$javax_vecmath_Tuple2d(vector);
}
average.scale$D(1.0 / vectors.size$());
return average;
}, 1);

Clazz.newMeth(C$, 'getNearestVector$javax_vecmath_Vector2d$java_util_List',  function (reference, vectors) {
if (vectors.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No vectors provided"]);
var closest=vectors.get$I(0);
var maxProd=reference.dot$javax_vecmath_Vector2d(closest);
for (var i=1; i < vectors.size$(); i++) {
var newProd=reference.dot$javax_vecmath_Vector2d(vectors.get$I(i));
if (newProd > maxProd ) {
maxProd=newProd;
closest=vectors.get$I(i);
}}
return closest;
}, 1);

Clazz.newMeth(C$, 'getNearestVector$javax_vecmath_Vector2d$org_openscience_cdk_interfaces_IAtom$java_util_List',  function (reference, fromAtom, bonds) {
var toAtoms=Clazz.new_($I$(4,1));
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
toAtoms.add$O(bond.getOther$org_openscience_cdk_interfaces_IAtom(fromAtom));
}
return C$.getNearestVector$javax_vecmath_Vector2d$java_util_List(reference, C$.newUnitVectors$org_openscience_cdk_interfaces_IAtom$java_util_List(fromAtom, toAtoms));
}, 1);

Clazz.newMeth(C$, 'extent$javax_vecmath_Vector2d',  function (vector) {
var radians=Math.atan2(vector.y, vector.x);
return radians < 0  ? 6.283185307179586 + radians : radians;
}, 1);

Clazz.newMeth(C$, 'extents$java_util_List',  function (vectors) {
var n=vectors.size$();
var extents=Clazz.array(Double.TYPE, [n]);
for (var i=0; i < n; i++) extents[i]=C$.extent$javax_vecmath_Vector2d(vectors.get$I(i));

return extents;
}, 1);

Clazz.newMeth(C$, 'newVectorInLargestGap$java_util_List',  function (vectors) {
Clazz.assert(C$, this, function(){return vectors.size$() > 1});
var extents=C$.extents$java_util_List(vectors);
$I$(5).sort$DA(extents);
var max=-1;
var index=-1;
for (var i=0; i < vectors.size$(); i++) {
var extent=extents[(i + 1) % vectors.size$()] - extents[i];
if (extent < 0 ) extent+=6.283185307179586;
var delta=extent - max;
if (delta > 0.01 ) {
max=extent;
index=i;
} else if ((extents[i] < 6.283185307179586  && extents[i] + extent > 6.283185307179586  ) || (extents[i] < 3.141592653589793  && extents[i] + extent > 3.141592653589793  ) ) {
max=extent;
index=i;
}}
Clazz.assert(C$, this, function(){return index >= 0});
var mid=(max / 2);
var theta=extents[index] + mid;
return Clazz.new_([Math.cos(theta), Math.sin(theta)],$I$(3,1).c$$D$D);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:32 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
