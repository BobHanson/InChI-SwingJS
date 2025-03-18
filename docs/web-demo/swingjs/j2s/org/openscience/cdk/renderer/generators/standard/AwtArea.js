(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),I$=[[0,'org.openscience.cdk.tools.LoggingToolFactory','javax.vecmath.Vector2d',['java.awt.geom.Path2D','.Double'],'org.openscience.cdk.renderer.elements.path.Type','java.awt.geom.AffineTransform','java.awt.geom.Area']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AwtArea");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'toArea$org_openscience_cdk_renderer_elements_IRenderingElement',  function (e) {
if (Clazz.instanceOf(e, "org.openscience.cdk.renderer.elements.LineElement")) return (e).toArea$();
 else if (Clazz.instanceOf(e, "org.openscience.cdk.renderer.elements.GeneralPath")) return (e).toArea$();
 else if (Clazz.instanceOf(e, "org.openscience.cdk.renderer.elements.ElementGroup")) {
var total=null;
var grp=e;
for (var child, $child = grp.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
var childArea=C$.toArea$org_openscience_cdk_renderer_elements_IRenderingElement(child);
if (childArea == null ) continue;
if (total == null ) total=childArea;
 else total.add$java_awt_geom_Area(childArea);
}
return total;
} else if (e == null ) {
return null;
}$I$(1,"createLoggingTool$Class",[Clazz.getClass(C$)]).warn$O("Unsupported awt.Area of rendering element: " + e.getClass$().getSimpleName$());
return null;
}, 1);

Clazz.newMeth(C$, 'newVector$D$D$D',  function (x, y, len) {
var v=Clazz.new_($I$(2,1).c$$D$D,[x, y]);
v.normalize$();
v.scale$D(len);
return v;
}, 1);

Clazz.newMeth(C$, 'expand$java_awt_geom_Area$D',  function (area, width) {
var path=Clazz.new_($I$(3,1));
var started=false;
var first=Clazz.array(Double.TYPE, [2]);
var p=Clazz.array(Double.TYPE, [2]);
var data=Clazz.array(Double.TYPE, [6]);
var flip=false;
var types=$I$(4).values$();
var it=area.getPathIterator$java_awt_geom_AffineTransform(Clazz.new_($I$(5,1)));
for (; !it.isDone$(); it.next$()) {
var type=types[it.currentSegment$DA(data)];
switch (type) {
case $I$(4).MoveTo:
p[0]=data[0];
p[1]=data[1];
first[0]=p[0];
first[1]=p[1];
break;
case $I$(4).LineTo:
var dx=data[0] - p[0];
var dy=data[1] - p[1];
if (!started) {
var p1=C$.newVector$D$D$D(dy, -dx, 0.01);
var mid=Clazz.array(Double.TYPE, -1, [p[0] + dx / 2, p[1] + dy / 2]);
flip=!area.contains$D$D(mid[0] + p1.x, mid[1] + p1.y) && area.contains$D$D(mid[0] - p1.x, mid[1] - p1.y) ;
}var v=flip ? C$.newVector$D$D$D(dy, -dx, width) : C$.newVector$D$D$D(-dy, dx, width);
if (started) {
path.lineTo$D$D(p[0] + v.x, p[1] + v.y);
path.lineTo$D$D(data[0] + v.x, data[1] + v.y);
} else {
path.moveTo$D$D(p[0] + v.x, p[1] + v.y);
path.lineTo$D$D(data[0] + v.x, data[1] + v.y);
}p[0]=data[0];
p[1]=data[1];
started=true;
break;
case $I$(4).CubicTo:
dx=data[4] - p[0];
dy=data[5] - p[1];
v=flip ? C$.newVector$D$D$D(dy, -dx, width) : C$.newVector$D$D$D(-dy, dx, width);
if (started) {
path.lineTo$D$D(p[0] + v.x, p[1] + v.y);
path.lineTo$D$D(data[0] + v.x, data[1] + v.y);
} else {
path.moveTo$D$D(p[0] + v.x, p[1] + v.y);
path.lineTo$D$D(data[0] + v.x, data[1] + v.y);
}p[0]=data[0];
p[1]=data[1];
started=true;
break;
case $I$(4).QuadTo:
dx=data[2] - p[0];
dy=data[3] - p[1];
v=flip ? C$.newVector$D$D$D(dy, -dx, width) : C$.newVector$D$D$D(-dy, dx, width);
v.normalize$();
v.scale$D(width);
if (started) {
path.lineTo$D$D(p[0] + v.x, p[1] + v.y);
path.lineTo$D$D(data[0] + v.x, data[1] + v.y);
} else {
path.moveTo$D$D(p[0] + v.x, p[1] + v.y);
path.lineTo$D$D(data[0] + v.x, data[1] + v.y);
}p[0]=data[0];
p[1]=data[1];
started=true;
break;
case $I$(4).Close:
dx=first[0] - p[0];
dy=first[1] - p[1];
if (Math.abs(dx) >= 0.01  || Math.abs(dy) >= 0.01  ) {
v=flip ? C$.newVector$D$D$D(dy, -dx, width) : C$.newVector$D$D$D(-dy, dx, width);
v.normalize$();
v.scale$D(width);
path.lineTo$D$D(p[0] + v.x, p[1] + v.y);
path.lineTo$D$D(first[0] + v.x, first[1] + v.y);
}path.closePath$();
started=false;
break;
}
}
return Clazz.new_($I$(6,1).c$$java_awt_Shape,[path]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:32 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
