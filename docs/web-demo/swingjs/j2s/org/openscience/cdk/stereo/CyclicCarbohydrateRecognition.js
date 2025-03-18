(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),p$1={},I$=[[0,'java.util.Arrays','org.openscience.cdk.stereo.Projection',['org.openscience.cdk.interfaces.ITetrahedralChirality','.Stereo'],'java.util.HashMap',['org.openscience.cdk.stereo.CyclicCarbohydrateRecognition','.WoundProjection','.Key'],['org.openscience.cdk.stereo.CyclicCarbohydrateRecognition','.Turn'],'java.util.Collections','java.util.ArrayList','org.openscience.cdk.ringsearch.RingSearch','org.openscience.cdk.graph.GraphUtil',['org.openscience.cdk.stereo.CyclicCarbohydrateRecognition','.WoundProjection'],['org.openscience.cdk.stereo.CyclicCarbohydrateRecognition','.Direction'],'org.openscience.cdk.stereo.TetrahedralChirality','org.openscience.cdk.interfaces.IAtom','javax.vecmath.Point2d',['org.openscience.cdk.interfaces.IBond','.Order'],['org.openscience.cdk.interfaces.IBond','.Stereo']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CyclicCarbohydrateRecognition", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Direction',24],['Turn',24],['WoundProjection',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['container','org.openscience.cdk.interfaces.IAtomContainer','graph','int[][]','bonds','org.openscience.cdk.graph.GraphUtil.EdgeToBondMap','stereocenters','org.openscience.cdk.stereo.Stereocenters']]
,['D',['CARDINALITY_THRESHOLD','QUART_CARDINALITY_THRESHOLD']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$org_openscience_cdk_stereo_Stereocenters',  function (container, graph, bonds, stereocenters) {
;C$.$init$.apply(this);
this.container=container;
this.graph=graph;
this.bonds=bonds;
this.stereocenters=stereocenters;
}, 1);

Clazz.newMeth(C$, 'recognise$java_util_Set',  function (projections) {
if (!projections.contains$O($I$(2).Haworth) && !projections.contains$O($I$(2).Chair) ) return $I$(7).emptyList$();
var elements=Clazz.new_($I$(8,1));
var ringSearch=Clazz.new_($I$(9,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA,[this.container, this.graph]);
for (var isolated, $isolated = 0, $$isolated = ringSearch.isolated$(); $isolated<$$isolated.length&&((isolated=($$isolated[$isolated])),1);$isolated++) {
if (isolated.length < 5 || isolated.length > 7 ) continue;
var cycle=$I$(1,"copyOf$IA$I",[$I$(10).cycle$IAA$IA(this.graph, isolated), isolated.length]);
var points=C$.coordinatesOfCycle$IA$org_openscience_cdk_interfaces_IAtomContainer(cycle, this.container);
var turns=C$.turns$javax_vecmath_Point2dA(points);
var projection=$I$(11).ofTurns$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA(turns);
if (!projections.contains$O(projection.projection)) continue;
if (projection.projection === $I$(2).Haworth  && !p$1.checkHaworthAlignment$javax_vecmath_Point2dA.apply(this, [points]) ) continue;
var horizontalXy=p$1.horizontalOffset$javax_vecmath_Point2dA$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA$org_openscience_cdk_stereo_Projection.apply(this, [points, turns, projection.projection]);
if (1 - Math.abs(horizontalXy.y) < C$.QUART_CARDINALITY_THRESHOLD ) continue;
var above=cycle.clone$();
var below=cycle.clone$();
if (!p$1.assignSubstituents$IA$IA$IA$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_WoundProjection$javax_vecmath_Point2d.apply(this, [cycle, above, below, projection, horizontalXy])) continue;
elements.addAll$java_util_Collection(p$1.newTetrahedralCenters$IA$IA$IA$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_WoundProjection.apply(this, [cycle, above, below, projection]));
}
return elements;
});

Clazz.newMeth(C$, 'turns$javax_vecmath_Point2dA',  function (points) {
var turns=Clazz.array($I$(6), [points.length]);
for (var i=1; i <= points.length; i++) {
var prevXy=points[i - 1];
var currXy=points[i % points.length];
var nextXy=points[(i + 1) % points.length];
var parity=(Math.signum(C$.det$D$D$D$D$D$D(prevXy.x, prevXy.y, currXy.x, currXy.y, nextXy.x, nextXy.y))|0);
if (parity == 0) return null;
turns[i % points.length]=parity < 0 ? $I$(6).Right : $I$(6).Left;
}
return turns;
}, 1);

Clazz.newMeth(C$, 'assignSubstituents$IA$IA$IA$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_WoundProjection$javax_vecmath_Point2d',  function (cycle, above, below, projection, horizontalXy) {
var haworth=projection.projection === $I$(2).Haworth ;
var found=0;
for (var i=1; i <= cycle.length; i++) {
var j=i % cycle.length;
var prev=cycle[i - 1];
var curr=cycle[j];
var next=cycle[(i + 1) % cycle.length];
var ws=C$.filter$IA$I$I(this.graph[curr], prev, next);
if (ws.length > 2 || ws.length < 1 ) continue;
var centerXy=this.container.getAtom$I(curr).getPoint2d$();
for (var w, $w = 0, $$w = ws; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var otherXy=this.container.getAtom$I(w).getPoint2d$();
var direction=C$.direction$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Point2d$Z(centerXy, otherXy, horizontalXy, haworth);
switch (direction) {
case $I$(12).Up:
if (above[j] != curr) return false;
above[j]=w;
break;
case $I$(12).Down:
if (below[j] != curr) return false;
below[j]=w;
break;
case $I$(12).Other:
return false;
}
}
if (above[j] != curr || below[j] != curr ) ++found;
}
return found > 1 || projection.projection !== $I$(2).Haworth  ;
}, p$1);

Clazz.newMeth(C$, 'newTetrahedralCenters$IA$IA$IA$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_WoundProjection',  function (cycle, above, below, type) {
var centers=Clazz.new_($I$(8,1).c$$I,[cycle.length]);
for (var i=1; i <= cycle.length; i++) {
var prev=cycle[i - 1];
var curr=cycle[i % cycle.length];
var next=cycle[(i + 1) % cycle.length];
var up=above[i % cycle.length];
var down=below[i % cycle.length];
if (!this.stereocenters.isStereocenter$I(curr)) continue;
if (!C$.isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond(this.bonds.get$I$I(curr, prev)) || !C$.isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond(this.bonds.get$I$I(curr, next)) || (up != curr && !C$.isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond(this.bonds.get$I$I(curr, up)) ) || (down != curr && !C$.isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond(this.bonds.get$I$I(curr, down)) )  ) return $I$(7).emptyList$();
centers.add$O(Clazz.new_([this.container.getAtom$I(curr), Clazz.array($I$(14), -1, [this.container.getAtom$I(up), this.container.getAtom$I(prev), this.container.getAtom$I(down), this.container.getAtom$I(next)]), type.winding],$I$(13,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo));
}
return centers;
}, p$1);

Clazz.newMeth(C$, 'coordinatesOfCycle$IA$org_openscience_cdk_interfaces_IAtomContainer',  function (cycle, container) {
var points=Clazz.array($I$(15), [cycle.length]);
for (var i=0; i < cycle.length; i++) {
points[i]=container.getAtom$I(cycle[i]).getPoint2d$();
}
return points;
}, 1);

Clazz.newMeth(C$, 'filter$IA$I$I',  function (org, skip1, skip2) {
var n=0;
var dest=Clazz.array(Integer.TYPE, [org.length - 2]);
for (var w, $w = 0, $$w = org; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (w != skip1 && w != skip2 ) dest[n++]=w;
}
return dest;
}, 1);

Clazz.newMeth(C$, 'direction$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Point2d$Z',  function (centerXy, substituentXy, horizontalXy, haworth) {
var deltaX=substituentXy.x - centerXy.x;
var deltaY=substituentXy.y - centerXy.y;
var mag=Math.sqrt(deltaX * deltaX + deltaY * deltaY);
deltaX/=mag;
deltaY/=mag;
if (deltaX > 0 ) {
deltaX-=horizontalXy.x;
deltaY-=horizontalXy.y;
} else {
deltaX+=horizontalXy.x;
deltaY+=horizontalXy.y;
}mag=Math.sqrt(deltaX * deltaX + deltaY * deltaY);
deltaX/=mag;
deltaY/=mag;
if (haworth && Math.abs(deltaX) > C$.CARDINALITY_THRESHOLD  ) return $I$(12).Other;
return deltaY > 0  ? $I$(12).Up : $I$(12).Down;
}, 1);

Clazz.newMeth(C$, 'checkHaworthAlignment$javax_vecmath_Point2dA',  function (points) {
for (var i=0; i < points.length; i++) {
var curr=points[i];
var next=points[(i + 1) % points.length];
var deltaY=curr.y - next.y;
if (Math.abs(deltaY) < C$.CARDINALITY_THRESHOLD ) return true;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'horizontalOffset$javax_vecmath_Point2dA$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA$org_openscience_cdk_stereo_Projection',  function (points, turns, projection) {
if (projection !== $I$(2).Chair ) return Clazz.new_($I$(15,1).c$$D$D,[0, 0]);
var offset=C$.chairCenterOffset$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA(turns);
var prev=(offset + 5) % 6;
var next=(offset + 7) % 6;
var deltaX=points[prev].x - points[next].x;
var deltaY=points[prev].y - points[next].y;
var mag=Math.sqrt(deltaX * deltaX + deltaY * deltaY);
deltaX/=mag;
deltaY/=mag;
if (deltaX < 0 ) {
deltaX=-deltaX;
deltaY=-deltaY;
}return Clazz.new_($I$(15,1).c$$D$D,[1 - deltaX, deltaY]);
}, p$1);

Clazz.newMeth(C$, 'chairCenterOffset$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA',  function (turns) {
if (turns[1] === turns[2] ) {
return 0;
} else if (turns[0] === turns[2] ) {
return 1;
} else {
return 2;
}}, 1);

Clazz.newMeth(C$, 'det$D$D$D$D$D$D',  function (xa, ya, xb, yb, xc, yc) {
return (xa - xc) * (yb - yc) - (ya - yc) * (xb - xc);
}, 1);

Clazz.newMeth(C$, 'isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond',  function (bond) {
return bond != null  && $I$(16).SINGLE.equals$O(bond.getOrder$())  && $I$(17).NONE.equals$O(bond.getStereo$()) ;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.CARDINALITY_THRESHOLD=Math.toRadians(5);
C$.QUART_CARDINALITY_THRESHOLD=C$.CARDINALITY_THRESHOLD / 4;
};
;
(function(){/*e*/var C$=Clazz.newClass(P$.CyclicCarbohydrateRecognition, "Direction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Up", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Down", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Other", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.CyclicCarbohydrateRecognition, "Turn", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Left", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Right", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.CyclicCarbohydrateRecognition, "WoundProjection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');
C$.$classes$=[['Key',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['projection','org.openscience.cdk.stereo.Projection','winding','org.openscience.cdk.interfaces.ITetrahedralChirality.Stereo']]
,['O',['map','java.util.Map']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_stereo_Projection$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo',  function (projection, winding) {
;C$.$init$.apply(this);
this.projection=projection;
this.winding=winding;
}, 1);

Clazz.newMeth(C$, 'ofTurns$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA',  function (turns) {
if (turns == null ) return C$.Other;
var type=C$.map.get$O(Clazz.new_($I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA,[turns]));
return type != null  ? type : C$.Other;
}, 1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$org_openscience_cdk_stereo_Projection$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo, "HaworthClockwise", 0, [$I$(2).Haworth, $I$(3).CLOCKWISE]);
Clazz.newEnumConst($vals, C$.c$$org_openscience_cdk_stereo_Projection$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo, "HaworthAnticlockwise", 1, [$I$(2).Haworth, $I$(3).ANTI_CLOCKWISE]);
Clazz.newEnumConst($vals, C$.c$$org_openscience_cdk_stereo_Projection$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo, "ChairClockwise", 2, [$I$(2).Chair, $I$(3).CLOCKWISE]);
Clazz.newEnumConst($vals, C$.c$$org_openscience_cdk_stereo_Projection$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo, "ChairAnticlockwise", 3, [$I$(2).Chair, $I$(3).ANTI_CLOCKWISE]);
Clazz.newEnumConst($vals, C$.c$$org_openscience_cdk_stereo_Projection$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo, "BoatClockwise", 4, [null, $I$(3).CLOCKWISE]);
Clazz.newEnumConst($vals, C$.c$$org_openscience_cdk_stereo_Projection$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo, "BoatAnticlockwise", 5, [null, $I$(3).ANTI_CLOCKWISE]);
Clazz.newEnumConst($vals, C$.c$$org_openscience_cdk_stereo_Projection$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo, "Other", 6, [null, null]);
C$.map=Clazz.new_($I$(4,1));
{
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.HaworthAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.HaworthClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.HaworthAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.HaworthClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.HaworthAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.HaworthClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Right, $I$(6).Right, $I$(6).Left, $I$(6).Right, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.ChairClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Left, $I$(6).Right, $I$(6).Right, $I$(6).Left, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.ChairClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Right, $I$(6).Left, $I$(6).Right, $I$(6).Right, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.ChairClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Left, $I$(6).Left, $I$(6).Right, $I$(6).Left, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.ChairAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Right, $I$(6).Left, $I$(6).Left, $I$(6).Right, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.ChairAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Left, $I$(6).Right, $I$(6).Left, $I$(6).Left, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.ChairAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Right, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Right, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Left, $I$(6).Left, $I$(6).Right, $I$(6).Right, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Left, $I$(6).Right, $I$(6).Right, $I$(6).Left, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Right, $I$(6).Right, $I$(6).Left, $I$(6).Left, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatAnticlockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Left, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Left, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Left, $I$(6).Left])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Right, $I$(6).Right, $I$(6).Left, $I$(6).Left, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Right, $I$(6).Left, $I$(6).Left, $I$(6).Right, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatClockwise);
C$.map.put$O$O(Clazz.new_([Clazz.array($I$(6), -1, [$I$(6).Right, $I$(6).Left, $I$(6).Left, $I$(6).Right, $I$(6).Right, $I$(6).Right])],$I$(5,1).c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA), C$.BoatClockwise);
};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.CyclicCarbohydrateRecognition.WoundProjection, "Key", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['turns','org.openscience.cdk.stereo.CyclicCarbohydrateRecognition.Turn[]']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_stereo_CyclicCarbohydrateRecognition_TurnA',  function (turns) {
;C$.$init$.apply(this);
this.turns=turns;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (this === o ) return true;
if (o == null  || this.getClass$() !== o.getClass$()  ) return false;
var key=o;
return $I$(1).equals$OA$OA(this.turns, key.turns);
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.turns != null  ? $I$(1).hashCode$OA(this.turns) : 0;
});
})()

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:26 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
