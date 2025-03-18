(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),p$1={},I$=[[0,'org.openscience.cdk.renderer.generators.standard.ConvexHull','java.util.Collections',['java.awt.geom.Path2D','.Double'],'java.util.ArrayList',['java.awt.geom.Point2D','.Double'],['org.openscience.cdk.renderer.generators.standard.ConvexHull','.CompareYThenX'],['org.openscience.cdk.renderer.generators.standard.ConvexHull','.PolarComparator'],'java.util.ArrayDeque',['java.awt.geom.Line2D','.Double']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConvexHull", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['PolarComparator',24],['CompareYThenX',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['hull','java.awt.Shape']]]

Clazz.newMeth(C$, 'c$$java_awt_Shape',  function (hull) {
;C$.$init$.apply(this);
this.hull=hull;
}, 1);

Clazz.newMeth(C$, 'ofShape$java_awt_Shape',  function (shape) {
return C$.ofShapes$java_util_List($I$(2).singletonList$O(shape));
}, 1);

Clazz.newMeth(C$, 'ofShapes$java_util_List',  function (shapes) {
var combined=Clazz.new_($I$(3,1));
for (var shape, $shape = shapes.iterator$(); $shape.hasNext$()&&((shape=($shape.next$())),1);) combined.append$java_awt_Shape$Z(shape, false);

return Clazz.new_(C$.c$$java_awt_Shape,[C$.shapeOf$java_util_List(C$.grahamScan$java_util_List(C$.pointsOf$java_awt_Shape(combined)))]);
}, 1);

Clazz.newMeth(C$, 'outline$',  function () {
return this.hull;
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (transform) {
return Clazz.new_(C$.c$$java_awt_Shape,[transform.createTransformedShape$java_awt_Shape(this.hull)]);
});

Clazz.newMeth(C$, 'shapeOf$java_util_List',  function (points) {
var path=Clazz.new_($I$(3,1));
if (!points.isEmpty$()) {
path.moveTo$D$D(points.get$I(0).getX$(), points.get$I(0).getY$());
for (var point, $point = points.iterator$(); $point.hasNext$()&&((point=($point.next$())),1);) path.lineTo$D$D(point.getX$(), point.getY$());

path.closePath$();
}return path;
}, 1);

Clazz.newMeth(C$, 'pointsOf$java_awt_Shape',  function (shape) {
var points=Clazz.new_($I$(4,1));
var coordinates=Clazz.array(Double.TYPE, [6]);
for (var i=shape.getPathIterator$java_awt_geom_AffineTransform(null); !i.isDone$(); i.next$()) {
switch (i.currentSegment$DA(coordinates)) {
case 4:
break;
case 0:
case 1:
points.add$O(Clazz.new_($I$(5,1).c$$D$D,[coordinates[0], coordinates[1]]));
break;
case 2:
points.add$O(Clazz.new_($I$(5,1).c$$D$D,[coordinates[0], coordinates[1]]));
points.add$O(Clazz.new_($I$(5,1).c$$D$D,[coordinates[2], coordinates[3]]));
break;
case 3:
points.add$O(Clazz.new_($I$(5,1).c$$D$D,[coordinates[0], coordinates[1]]));
points.add$O(Clazz.new_($I$(5,1).c$$D$D,[coordinates[2], coordinates[3]]));
points.add$O(Clazz.new_($I$(5,1).c$$D$D,[coordinates[4], coordinates[5]]));
break;
}
}
if (!points.isEmpty$() && points.get$I(points.size$() - 1).equals$O(points.get$I(0)) ) {
points.remove$I(points.size$() - 1);
}return points;
}, 1);

Clazz.newMeth(C$, 'grahamScan$java_util_List',  function (points) {
if (points.size$() <= 3) return Clazz.new_($I$(4,1).c$$java_util_Collection,[points]);
points.sort$java_util_Comparator(Clazz.new_($I$(6,1)));
points.sort$java_util_Comparator(Clazz.new_([points.get$I(0)],$I$(7,1).c$$java_awt_geom_Point2D));
var hull=Clazz.new_($I$(8,1));
hull.push$O(points.get$I(0));
hull.push$O(points.get$I(1));
hull.push$O(points.get$I(2));
for (var i=3; i < points.size$(); i++) {
var top=hull.pop$();
while (!hull.isEmpty$() && !C$.isLeftTurn$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D(hull.peek$(), top, points.get$I(i)) ){
top=hull.pop$();
}
hull.push$O(top);
hull.push$O(points.get$I(i));
}
return Clazz.new_($I$(4,1).c$$java_util_Collection,[hull]);
}, 1);

Clazz.newMeth(C$, 'intersect$java_util_List$java_awt_geom_Line2D',  function (outline, line) {
var previousPoint=outline.get$I(outline.size$() - 1);
for (var point, $point = outline.iterator$(); $point.hasNext$()&&((point=($point.next$())),1);) {
var currentLine=Clazz.new_([point.getX$(), point.getY$(), previousPoint.getX$(), previousPoint.getY$()],$I$(9,1).c$$D$D$D$D);
if (line.intersectsLine$java_awt_geom_Line2D(currentLine)) {
return C$.lineLineIntersect$java_awt_geom_Line2D$java_awt_geom_Line2D(currentLine, line);
}previousPoint=point;
}
return Clazz.new_([line.getX1$(), line.getY1$()],$I$(5,1).c$$D$D);
}, p$1);

Clazz.newMeth(C$, 'intersect$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (a, b) {
return p$1.intersect$java_util_List$java_awt_geom_Line2D.apply(this, [C$.pointsOf$java_awt_Shape(this.hull), Clazz.new_([a.getX$(), a.getY$(), b.getX$(), b.getY$()],$I$(9,1).c$$D$D$D$D)]);
});

Clazz.newMeth(C$, 'lineLineIntersect$java_awt_geom_Line2D$java_awt_geom_Line2D',  function (lineA, lineB) {
return C$.lineLineIntersect$D$D$D$D$D$D$D$D(lineA.getX1$(), lineA.getY1$(), lineA.getX2$(), lineA.getY2$(), lineB.getX1$(), lineB.getY1$(), lineB.getX2$(), lineB.getY2$());
}, 1);

Clazz.newMeth(C$, 'lineLineIntersect$D$D$D$D$D$D$D$D',  function (x1, y1, x2, y2, x3, y3, x4, y4) {
var x=((x2 - x1) * (x3 * y4 - x4 * y3) - (x4 - x3) * (x1 * y2 - x2 * y1)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
var y=((y3 - y4) * (x1 * y2 - x2 * y1) - (y1 - y2) * (x3 * y4 - x4 * y3)) / ((x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4));
return Clazz.new_($I$(5,1).c$$D$D,[x, y]);
}, 1);

Clazz.newMeth(C$, 'isLeftTurn$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (a, b, c) {
return C$.winding$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D(a, b, c) > 0;
}, 1);

Clazz.newMeth(C$, 'winding$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D',  function (a, b, c) {
return (Math.signum((b.getX$() - a.getX$()) * (c.getY$() - a.getY$()) - (b.getY$() - a.getY$()) * (c.getX$() - a.getX$()))|0);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConvexHull, "PolarComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['reference','java.awt.geom.Point2D']]]

Clazz.newMeth(C$, 'c$$java_awt_geom_Point2D',  function (reference) {
;C$.$init$.apply(this);
this.reference=reference;
}, 1);

Clazz.newMeth(C$, ['compare$java_awt_geom_Point2D$java_awt_geom_Point2D','compare$O$O'],  function (a, b) {
var deltaX1=a.getX$() - this.reference.getX$();
var deltaY1=a.getY$() - this.reference.getY$();
var deltaX2=b.getX$() - this.reference.getX$();
var deltaY2=b.getY$() - this.reference.getY$();
if (deltaY1 >= 0  && deltaY2 < 0  ) return -1;
 else if (deltaY2 >= 0  && deltaY1 < 0  ) return 1;
 else if (deltaY1 == 0  && deltaY2 == 0  ) {
if (deltaX1 >= 0  && deltaX2 < 0  ) return -1;
 else if (deltaX2 >= 0  && deltaX1 < 0  ) return 1;
 else return 0;
} else return -$I$(1).winding$java_awt_geom_Point2D$java_awt_geom_Point2D$java_awt_geom_Point2D(this.reference, a, b);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ConvexHull, "CompareYThenX", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$java_awt_geom_Point2D$java_awt_geom_Point2D','compare$O$O'],  function (a, b) {
if (a.getY$() < b.getY$() ) return -1;
if (a.getY$() > b.getY$() ) return 1;
if (a.getX$() < b.getX$() ) return -1;
if (a.getX$() > b.getX$() ) return 1;
return 0;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:30 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
