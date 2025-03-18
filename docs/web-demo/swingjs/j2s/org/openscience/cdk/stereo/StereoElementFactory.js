(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),p$1={},p$2={},p$3={},I$=[[0,'org.openscience.cdk.stereo.StereoElementFactory','org.openscience.cdk.interfaces.IAtom','java.util.ArrayList',['org.openscience.cdk.interfaces.IBond','.Stereo'],['org.openscience.cdk.stereo.Stereocenters','.Stereocenter'],['org.openscience.cdk.interfaces.ITetrahedralChirality','.Stereo'],'org.openscience.cdk.stereo.TetrahedralChirality','org.openscience.cdk.geometry.GeometryUtil','javax.vecmath.Point2d','org.openscience.cdk.stereo.Atropisomeric',['org.openscience.cdk.interfaces.IDoubleBondStereochemistry','.Conformation'],'org.openscience.cdk.stereo.DoubleBondStereochemistry','org.openscience.cdk.interfaces.IBond','org.openscience.cdk.stereo.ExtendedTetrahedral',['org.openscience.cdk.interfaces.IBond','.Order'],'org.openscience.cdk.stereo.ExtendedCisTrans','javax.vecmath.Vector2d','javax.vecmath.Vector3d','javax.vecmath.Point3d','java.util.EnumSet','org.openscience.cdk.stereo.Projection','org.openscience.cdk.tools.LoggingToolFactory','org.openscience.cdk.graph.Cycles','org.openscience.cdk.stereo.Stereocenters','org.openscience.cdk.stereo.FischerRecognition','org.openscience.cdk.stereo.CyclicCarbohydrateRecognition',['org.openscience.cdk.stereo.Stereocenters','.Type'],'java.util.Collections',['org.openscience.cdk.graph.GraphUtil','.EdgeToBondMap'],'org.openscience.cdk.graph.GraphUtil',['org.openscience.cdk.stereo.StereoElementFactory','.StereoElementFactory2D'],['org.openscience.cdk.stereo.StereoElementFactory','.StereoElementFactory3D']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StereoElementFactory", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StereoElementFactory2D',24],['StereoElementFactory3D',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.projections=$I$(20,"noneOf$Class",[Clazz.getClass($I$(21))]);
this.logger=$I$(22,"createLoggingTool$Class",[Clazz.getClass(C$)]);
this.check=false;
},1);

C$.$fields$=[['Z',['strict','check'],'O',['container','org.openscience.cdk.interfaces.IAtomContainer','graph','int[][]','bondMap','org.openscience.cdk.graph.GraphUtil.EdgeToBondMap','projections','java.util.Set','logger','org.openscience.cdk.tools.ILoggingTool']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (container, graph, bondMap) {
;C$.$init$.apply(this);
this.container=container;
this.graph=graph;
this.bondMap=bondMap;
}, 1);

Clazz.newMeth(C$, 'visitSmallRing$IA$I$I$I$I',  function (mark, aidx, prev, depth, max) {
if (mark[aidx] == 2) return true;
if (depth == max) return false;
if (mark[aidx] == 1) return false;
mark[aidx]=1;
for (var nbr, $nbr = 0, $$nbr = this.graph[aidx]; $nbr<$$nbr.length&&((nbr=($$nbr[$nbr])),1);$nbr++) {
if (nbr != prev && p$3.visitSmallRing$IA$I$I$I$I.apply(this, [mark, nbr, aidx, depth + 1, max]) ) return true;
}
mark[aidx]=0;
return false;
}, p$3);

Clazz.newMeth(C$, 'isInSmallRing$org_openscience_cdk_interfaces_IBond$I',  function (bond, max) {
if (!bond.isInRing$()) return false;
var beg=bond.getBegin$();
var end=bond.getEnd$();
var mark=Clazz.array(Integer.TYPE, [this.container.getAtomCount$()]);
var bidx=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(beg);
var eidx=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(end);
mark[bidx]=2;
return p$3.visitSmallRing$IA$I$I$I$I.apply(this, [mark, eidx, bidx, 1, max]);
}, p$3);

Clazz.newMeth(C$, 'isInSmallRing$org_openscience_cdk_interfaces_IAtom$I',  function (atom, max) {
if (!atom.isInRing$()) return false;
for (var bond, $bond = this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (p$3.isInSmallRing$org_openscience_cdk_interfaces_IBond$I.apply(this, [bond, max])) return true;
}
return false;
}, p$3);

Clazz.newMeth(C$, 'getOtherDb$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond',  function (a, other) {
var result=null;
for (var bond, $bond = this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(a).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.equals$O(other)) continue;
if (bond.getOrder$() !== $I$(15).DOUBLE ) continue;
if (result != null ) return null;
result=bond;
}
return result;
}, p$3);

Clazz.newMeth(C$, 'getShared$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond',  function (a, b) {
if (b.contains$org_openscience_cdk_interfaces_IAtom(a.getBegin$())) return a.getBegin$();
if (b.contains$org_openscience_cdk_interfaces_IAtom(a.getEnd$())) return a.getEnd$();
return null;
}, 1);

Clazz.newMeth(C$, 'getCumulatedDbs$org_openscience_cdk_interfaces_IBond',  function (endBond) {
var dbs=Clazz.new_($I$(3,1));
dbs.add$O(endBond);
var other=p$3.getOtherDb$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [endBond.getBegin$(), endBond]);
if (other == null ) other=p$3.getOtherDb$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [endBond.getEnd$(), endBond]);
if (other == null ) return null;
while (other != null ){
dbs.add$O(other);
var a=C$.getShared$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond(dbs.get$I(dbs.size$() - 1), dbs.get$I(dbs.size$() - 2));
other=p$3.getOtherDb$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [other.getOther$org_openscience_cdk_interfaces_IAtom(a), other]);
}
return dbs;
}, p$3);

Clazz.newMeth(C$, 'createAll$',  function () {
$I$(23).markRingAtomsAndBonds$org_openscience_cdk_interfaces_IAtomContainer(this.container);
var centers=Clazz.new_($I$(24,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap,[this.container, this.graph, this.bondMap]);
if (this.check) {
centers.checkSymmetry$();
}var elements=Clazz.new_($I$(3,1));
var fischerRecon=Clazz.new_($I$(25,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$org_openscience_cdk_stereo_Stereocenters,[this.container, this.graph, this.bondMap, centers]);
var cycleRecon=Clazz.new_($I$(26,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$org_openscience_cdk_stereo_Stereocenters,[this.container, this.graph, this.bondMap, centers]);
elements.addAll$java_util_Collection(fischerRecon.recognise$java_util_Set(this.projections));
elements.addAll$java_util_Collection(cycleRecon.recognise$java_util_Set(this.projections));
for (var v=0; v < this.graph.length; v++) {
switch (centers.elementType$I(v)) {
case $I$(27).Bicoordinate:
for (var w, $w = 0, $$w = this.graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (centers.elementType$I(w) === $I$(27).Tricoordinate ) {
var dbs=p$3.getCumulatedDbs$org_openscience_cdk_interfaces_IBond.apply(this, [this.container.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(this.container.getAtom$I(w), this.container.getAtom$I(v))]);
if (dbs == null ) continue;
if (this.container.indexOf$org_openscience_cdk_interfaces_IBond(dbs.get$I(0)) > this.container.indexOf$org_openscience_cdk_interfaces_IBond(dbs.get$I(dbs.size$() - 1))) continue;
if ((dbs.size$() & 1) == 0) {
var focus=C$.getShared$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond(dbs.get$I((dbs.size$()/2|0)), dbs.get$I(((dbs.size$()/2|0)) - 1));
var element=this.createExtendedTetrahedral$I$org_openscience_cdk_stereo_Stereocenters(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(focus), centers);
if (element != null ) elements.add$O(element);
} else {
var element=this.createExtendedCisTrans$java_util_List$org_openscience_cdk_stereo_Stereocenters(dbs, centers);
if (element != null ) elements.add$O(element);
}break;
}}
break;
case $I$(27).Tetracoordinate:
var element=this.createTetrahedral$I$org_openscience_cdk_stereo_Stereocenters(v, centers);
if (element != null ) elements.add$O(element);
break;
case $I$(27).Tricoordinate:
for (var w, $w = 0, $$w = this.graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var bond=this.bondMap.get$I$I(v, w);
if (w > v && centers.elementType$I(w) === $I$(27).Tricoordinate   && bond.getOrder$() === $I$(15).SINGLE   && !p$3.isInSmallRing$org_openscience_cdk_interfaces_IBond$I.apply(this, [bond, 6])  && p$3.isInSmallRing$org_openscience_cdk_interfaces_IAtom$I.apply(this, [bond.getBegin$(), 6])  && p$3.isInSmallRing$org_openscience_cdk_interfaces_IAtom$I.apply(this, [bond.getEnd$(), 6]) ) {
element=this.createAtropisomer$I$I$org_openscience_cdk_stereo_Stereocenters(v, w, centers);
if (element != null ) elements.add$O(element);
break;
}}
break;
}
}
centers.checkSymmetry$();
for (var v=0; v < this.graph.length; v++) {
switch (centers.elementType$I(v)) {
case $I$(27).Tricoordinate:
if (!centers.isStereocenter$I(v)) continue;
for (var w, $w = 0, $$w = this.graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var bond=this.bondMap.get$I$I(v, w);
if (w > v && bond.getOrder$() === $I$(15).DOUBLE  ) {
if (centers.elementType$I(w) === $I$(27).Tricoordinate  && centers.isStereocenter$I(w)  && !p$3.isInSmallRing$org_openscience_cdk_interfaces_IBond$I.apply(this, [bond, 7]) ) {
var element=this.createGeometric$I$I$org_openscience_cdk_stereo_Stereocenters(v, w, centers);
if (element != null ) elements.add$O(element);
}break;
}}
break;
}
}
return elements;
});

Clazz.newMeth(C$, 'interpretProjections$org_openscience_cdk_stereo_ProjectionA',  function (projections) {
$I$(28).addAll$java_util_Collection$OA(this.projections, projections);
this.check=true;
return this;
});

Clazz.newMeth(C$, 'checkSymmetry$Z',  function (check) {
this.check=check;
return this;
});

Clazz.newMeth(C$, 'withStrictMode$',  function () {
this.check=true;
this.strict=true;
return this;
});

Clazz.newMeth(C$, 'using2DCoordinates$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var bondMap=$I$(29).withSpaceFor$org_openscience_cdk_interfaces_IAtomContainer(container);
var graph=$I$(30).toAdjList$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(container, bondMap);
return Clazz.new_($I$(31,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap,[container, graph, bondMap]);
}, 1);

Clazz.newMeth(C$, 'using3DCoordinates$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var bondMap=$I$(29).withSpaceFor$org_openscience_cdk_interfaces_IAtomContainer(container);
var graph=$I$(30).toAdjList$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(container, bondMap);
return Clazz.new_($I$(32,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap,[container, graph, bondMap]).checkSymmetry$Z(true);
}, 1);

Clazz.newMeth(C$, 'hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return atom.getStereoParity$() != null  && (atom.getStereoParity$()).$c() === 3  ;
}, 1);

Clazz.newMeth(C$, 'isHydrogen$org_openscience_cdk_interfaces_IAtom',  function (atom) {
var elem=atom.getAtomicNumber$();
return elem != null  && (elem).$c() === 1  ;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.StereoElementFactory, "StereoElementFactory2D", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.stereo.StereoElementFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (container, graph, bondMap) {
;C$.superclazz.c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap.apply(this,[container, graph, bondMap]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createTetrahedral$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_stereo_Stereocenters',  function (atom, stereocenters) {
return this.createTetrahedral$I$org_openscience_cdk_stereo_Stereocenters(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(atom), stereocenters);
});

Clazz.newMeth(C$, 'createGeometric$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_stereo_Stereocenters',  function (bond, stereocenters) {
return this.createGeometric$I$I$org_openscience_cdk_stereo_Stereocenters(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$()), this.container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$()), stereocenters);
});

Clazz.newMeth(C$, 'createTetrahedral$I$org_openscience_cdk_stereo_Stereocenters',  function (v, stereocenters) {
var focus=this.container.getAtom$I(v);
if ($I$(1).hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom(focus)) return null;
if (this.check) {
if (!stereocenters.isStereocenter$I(v)) return null;
}var neighbors=Clazz.array($I$(2), [4]);
var elevation=Clazz.array(Integer.TYPE, [4]);
neighbors[3]=focus;
var nonplanar=false;
var n=0;
var bonds=Clazz.new_($I$(3,1));
for (var w, $w = 0, $$w = this.graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var bond=this.bondMap.get$I$I(v, w);
bonds.add$O(bond);
if (p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [bond])) return null;
neighbors[n]=this.container.getAtom$I(w);
elevation[n]=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bond]);
if (elevation[n] != 0) nonplanar=true;
++n;
}
if (n < 3) return null;
if (this.strict) {
if (!p$1.verifyWedgePattern$org_openscience_cdk_interfaces_IAtom$I$java_util_List.apply(this, [focus, n, bonds])) return null;
}if (!nonplanar && !this.strict ) {
var ws=this.graph[v];
for (var i=0; i < ws.length; i++) {
var w=ws[i];
var bond=this.bondMap.get$I$I(v, w);
if (bond.getStereo$() === $I$(4).DOWN  || bond.getStereo$() === $I$(4).DOWN_INVERTED  ) {
if (stereocenters.stereocenterType$I(w) !== $I$(5).Non ) {
stereocenters.checkSymmetry$();
if (stereocenters.isStereocenter$I(w)) {
this.logger.error$O$OA("Ambiguous down wedge bond between atom indexes ", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(w), " and ", Integer.valueOf$I(v)]));
return null;
}}this.logger.warn$O$OA("Inverse wedge bond used for stereo at atom index ", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(v)]));
elevation[i]=-1;
nonplanar=true;
} else if (bond.getStereo$() === $I$(4).UP  || bond.getStereo$() === $I$(4).UP_INVERTED  ) {
this.logger.warn$O$OA("Ignoring inverted up wedge bond connected to atom idx=", Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(w)]));
return null;
}}
}if (!nonplanar) return null;
var parity=p$1.parity$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$IA.apply(this, [focus, neighbors, elevation]);
if (parity == 0) return null;
var winding=parity > 0 ? $I$(6).ANTI_CLOCKWISE : $I$(6).CLOCKWISE;
return Clazz.new_($I$(7,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo,[focus, neighbors, winding]);
});

Clazz.newMeth(C$, 'isOkay$I$I',  function (a, b) {
return a == 0 || b == 0  || a == b ;
}, p$1);

Clazz.newMeth(C$, 'verifyWedgePattern$org_openscience_cdk_interfaces_IAtom$I$java_util_List',  function (focus, n, bonds) {
bonds.sort$java_util_Comparator($I$(8).polarBondComparator$org_openscience_cdk_interfaces_IAtom(focus));
if (n == 3) {
var angle=p$1.getMaxSweep$org_openscience_cdk_interfaces_IAtom$java_util_List.apply(this, [focus, bonds]);
var delta=angle - 3.141592653589793;
var threshold=0.01;
if (delta > threshold ) {
var ref=0;
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var curr=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bond]);
if (!p$1.isOkay$I$I.apply(this, [ref, curr])) {
this.logger.error$O("Invalid wedge pattern, up/down bonds should be mixed when there is an acute angle!");
return false;
} else ref=curr;
ref=-ref;
}
} else if (delta < -threshold ) {
var ref=0;
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var curr=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bond]);
if (!p$1.isOkay$I$I.apply(this, [ref, curr])) {
this.logger.error$O("Invalid wedge pattern, up/down bonds should be same when there is not an acute angle!");
return false;
} else ref=curr;
}
} else {
if (bonds.size$() != 3) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["3 bonds only!"]);
var v1=p$1.toUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [focus, bonds.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom(focus)]);
var v2=p$1.toUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [focus, bonds.get$I(1).getOther$org_openscience_cdk_interfaces_IAtom(focus)]);
var v3=p$1.toUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [focus, bonds.get$I(2).getOther$org_openscience_cdk_interfaces_IAtom(focus)]);
var ambiuousStereoMesg="Ambiguous stereochemistry - 3 neighbours and two bonds are co-linear";
if (Math.abs(p$1.signedAngle$javax_vecmath_Vector2d$javax_vecmath_Vector2d.apply(this, [v1, v2]) - 3.141592653589793) < threshold ) {
if (p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bonds.get$I(0)]) == 0 && p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bonds.get$I(1)]) == 0  && p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bonds.get$I(2)]) != 0 ) {
this.logger.error$O(ambiuousStereoMesg);
return false;
}} else if (Math.abs(p$1.signedAngle$javax_vecmath_Vector2d$javax_vecmath_Vector2d.apply(this, [v2, v3]) - 3.141592653589793) < threshold ) {
if (p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bonds.get$I(0)]) != 0 && p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bonds.get$I(1)]) == 0  && p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bonds.get$I(2)]) == 0 ) {
this.logger.error$O(ambiuousStereoMesg);
return false;
}} else if (Math.abs(p$1.signedAngle$javax_vecmath_Vector2d$javax_vecmath_Vector2d.apply(this, [v3, v1]) - 3.141592653589793) < threshold ) {
if (p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bonds.get$I(0)]) == 0 && p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bonds.get$I(1)]) != 0  && p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bonds.get$I(2)]) == 0 ) {
this.logger.error$O(ambiuousStereoMesg);
return false;
}}}} else {
var ref=0;
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var curr=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [focus, bond]);
if (curr != 0) {
if (ref != 0 && ref != curr ) {
this.logger.error$O("Badly drawn stereochemistry with 4 neighbours, up/down bonds should alternate!");
return false;
} else {
ref=curr;
}}ref=-ref;
}
}return true;
}, p$1);

Clazz.newMeth(C$, 'signedAngle$javax_vecmath_Vector2d$javax_vecmath_Vector2d',  function (a, b) {
var angle=Math.atan2(a.x * b.y - a.y * b.x, a.x * b.x + a.y * b.y);
return angle >= 0  ? (6.283185307179586) - angle : -angle;
}, p$1);

Clazz.newMeth(C$, 'max$D$D$D',  function (a, b, c) {
return Math.max(a, Math.max(b, c));
}, p$1);

Clazz.newMeth(C$, 'getMaxSweep$org_openscience_cdk_interfaces_IAtom$java_util_List',  function (atom, bonds) {
if (bonds.size$() != 3) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["3 bonds only!"]);
var v1=p$1.toUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [atom, bonds.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom(atom)]);
var v2=p$1.toUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [atom, bonds.get$I(1).getOther$org_openscience_cdk_interfaces_IAtom(atom)]);
var v3=p$1.toUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom.apply(this, [atom, bonds.get$I(2).getOther$org_openscience_cdk_interfaces_IAtom(atom)]);
return p$1.max$D$D$D.apply(this, [p$1.signedAngle$javax_vecmath_Vector2d$javax_vecmath_Vector2d.apply(this, [v1, v2]), p$1.signedAngle$javax_vecmath_Vector2d$javax_vecmath_Vector2d.apply(this, [v2, v3]), p$1.signedAngle$javax_vecmath_Vector2d$javax_vecmath_Vector2d.apply(this, [v3, v1])]);
}, p$1);

Clazz.newMeth(C$, 'isWedged$org_openscience_cdk_interfaces_IBond',  function (bond) {
switch (bond.getStereo$()) {
case $I$(4).UP:
case $I$(4).DOWN:
case $I$(4).UP_INVERTED:
case $I$(4).DOWN_INVERTED:
return true;
default:
return false;
}
}, 1);

Clazz.newMeth(C$, 'createAtropisomer$I$I$org_openscience_cdk_stereo_Stereocenters',  function (u, v, stereocenters) {
var end1=this.container.getAtom$I(u);
var end2=this.container.getAtom$I(v);
if ($I$(1).hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom(end1) || $I$(1).hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom(end2) ) return null;
if (this.graph[u].length != 3 || this.graph[v].length != 3 ) return null;
var sum1=this.graph[this.graph[u][0]].length + this.graph[this.graph[u][1]].length + this.graph[this.graph[u][2]].length ;
var sum2=this.graph[this.graph[v][0]].length + this.graph[this.graph[v][1]].length + this.graph[this.graph[v][2]].length ;
if (sum1 > 9 || sum1 < 8 ) return null;
if (sum2 > 9 || sum2 < 8 ) return null;
if (sum1 + sum2 < 17) return null;
var carriers=Clazz.array($I$(2), [4]);
var elevation=Clazz.array(Integer.TYPE, [4]);
var n=0;
for (var w, $w = 0, $$w = this.graph[u]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var bond=this.bondMap.get$I$I(u, w);
if (w == v) continue;
if (p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [bond])) return null;
carriers[n]=this.container.getAtom$I(w);
elevation[n]=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [end1, bond]);
for (var w2, $w2 = 0, $$w2 = this.graph[w]; $w2<$$w2.length&&((w2=($$w2[$w2])),1);$w2++) {
if ($I$(1,"isHydrogen$org_openscience_cdk_interfaces_IAtom",[this.container.getAtom$I(w2)])) --sum1;
 else if (elevation[n] == 0 && C$.isWedged$org_openscience_cdk_interfaces_IBond(this.bondMap.get$I$I(w, w2)) ) {
elevation[n]=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [this.container.getAtom$I(w), this.bondMap.get$I$I(w, w2)]);
}}
++n;
}
n=2;
for (var w, $w = 0, $$w = this.graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var bond=this.bondMap.get$I$I(v, w);
if (w == u) continue;
if (p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [bond])) return null;
carriers[n]=this.container.getAtom$I(w);
elevation[n]=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [end2, bond]);
for (var w2, $w2 = 0, $$w2 = this.graph[w]; $w2<$$w2.length&&((w2=($$w2[$w2])),1);$w2++) {
if ($I$(1,"isHydrogen$org_openscience_cdk_interfaces_IAtom",[this.container.getAtom$I(w2)])) --sum2;
 else if (elevation[n] == 0 && C$.isWedged$org_openscience_cdk_interfaces_IBond(this.bondMap.get$I$I(w, w2)) ) {
elevation[n]=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [this.container.getAtom$I(w), this.bondMap.get$I$I(w, w2)]);
}}
++n;
}
if (n != 4) return null;
if (sum1 > 9 || sum1 < 8 ) return null;
if (sum2 > 9 || sum2 < 8 ) return null;
if (sum1 + sum2 < 17) return null;
if (elevation[0] != 0 || elevation[1] != 0 ) {
if (elevation[2] != 0 || elevation[3] != 0 ) return null;
} else {
if (elevation[2] == 0 && elevation[3] == 0 ) return null;
}var tmp=end1.getBuilder$().newAtom$();
tmp.setPoint2d$javax_vecmath_Point2d(Clazz.new_([(end1.getPoint2d$().x + end2.getPoint2d$().x) / 2, (end2.getPoint2d$().y + end2.getPoint2d$().y) / 2],$I$(9,1).c$$D$D));
var parity=p$1.parity$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$IA.apply(this, [tmp, carriers, elevation]);
var cfg=parity > 0 ? 1 : 2;
return Clazz.new_([this.container.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(end1, end2), carriers, cfg],$I$(10,1).c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtomA$I);
});

Clazz.newMeth(C$, 'createGeometric$I$I$org_openscience_cdk_stereo_Stereocenters',  function (u, v, stereocenters) {
if ($I$(1,"hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom",[this.container.getAtom$I(u)]) || $I$(1,"hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom",[this.container.getAtom$I(v)]) ) return null;
var us=this.graph[u];
var vs=this.graph[v];
if (us.length < 2 || us.length > 3  || vs.length < 2  || vs.length > 3 ) return null;
C$.moveToBack$IA$I(us, v);
C$.moveToBack$IA$I(vs, u);
var vAtoms=Clazz.array($I$(2), -1, [this.container.getAtom$I(us[0]), this.container.getAtom$I(us.length > 2 ? us[1] : u), this.container.getAtom$I(v)]);
var wAtoms=Clazz.array($I$(2), -1, [this.container.getAtom$I(vs[0]), this.container.getAtom$I(vs.length > 2 ? vs[1] : v), this.container.getAtom$I(u)]);
if (p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [this.bondMap.get$I$I(u, us[0])]) || p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [this.bondMap.get$I$I(u, us[1])]) || p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [this.bondMap.get$I$I(v, vs[0])]) || p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [this.bondMap.get$I$I(v, vs[1])])  ) return null;
var parity=p$1.parity$org_openscience_cdk_interfaces_IAtomA.apply(this, [vAtoms]) * p$1.parity$org_openscience_cdk_interfaces_IAtomA.apply(this, [wAtoms]);
var conformation=parity > 0 ? $I$(11).OPPOSITE : $I$(11).TOGETHER;
if (parity == 0) return null;
var bond=this.bondMap.get$I$I(u, v);
if (p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [bond])) return null;
bond.setAtoms$org_openscience_cdk_interfaces_IAtomA(Clazz.array($I$(2), -1, [this.container.getAtom$I(u), this.container.getAtom$I(v)]));
return Clazz.new_([bond, Clazz.array($I$(13), -1, [this.bondMap.get$I$I(u, us[0]), this.bondMap.get$I$I(v, vs[0])]), conformation],$I$(12,1).c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$org_openscience_cdk_interfaces_IDoubleBondStereochemistry_Conformation);
});

Clazz.newMeth(C$, 'createExtendedTetrahedral$I$org_openscience_cdk_stereo_Stereocenters',  function (v, stereocenters) {
var focus=this.container.getAtom$I(v);
if ($I$(1).hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom(focus)) return null;
var terminals=$I$(14).findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(this.container, focus);
var t0=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(terminals[0]);
var t1=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(terminals[1]);
if (stereocenters.isSymmetryChecked$() && (!stereocenters.isStereocenter$I(t0) || !stereocenters.isStereocenter$I(t1) ) ) return null;
var neighbors=Clazz.array($I$(2), [4]);
var elevation=Clazz.array(Integer.TYPE, [4]);
neighbors[1]=terminals[0];
neighbors[3]=terminals[1];
var n=0;
for (var w, $w = 0, $$w = this.graph[t0]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var bond=this.bondMap.get$I$I(t0, w);
if (w == v) continue;
if (bond.getOrder$() !== $I$(15).SINGLE ) continue;
if (p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [bond])) return null;
if (n == 2) return null;
neighbors[n]=this.container.getAtom$I(w);
elevation[n]=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [terminals[0], bond]);
++n;
}
if (n == 0) return null;
n=2;
for (var w, $w = 0, $$w = this.graph[t1]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var bond=this.bondMap.get$I$I(t1, w);
if (bond.getOrder$() !== $I$(15).SINGLE ) continue;
if (p$1.isUnspecified$org_openscience_cdk_interfaces_IBond.apply(this, [bond])) return null;
if (n == 4) return null;
neighbors[n]=this.container.getAtom$I(w);
elevation[n]=p$1.elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond.apply(this, [terminals[1], bond]);
++n;
}
if (n == 2) return null;
if (elevation[0] != 0 || elevation[1] != 0 ) {
if (elevation[2] != 0 || elevation[3] != 0 ) return null;
} else {
if (elevation[2] == 0 && elevation[3] == 0 ) return null;
}var parity=p$1.parity$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$IA.apply(this, [focus, neighbors, elevation]);
var winding=parity > 0 ? $I$(6).ANTI_CLOCKWISE : $I$(6).CLOCKWISE;
return Clazz.new_($I$(14,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo,[focus, neighbors, winding]);
});

Clazz.newMeth(C$, 'createExtendedCisTrans$java_util_List$org_openscience_cdk_stereo_Stereocenters',  function (dbs, stereocenters) {
if ((dbs.size$() & 1) == 0) return null;
var focus=dbs.get$I((dbs.size$()/2|0));
var carriers=Clazz.array($I$(13), [2]);
var config;
var begAtom=dbs.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom($I$(1,"getShared$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond",[dbs.get$I(0), dbs.get$I(1)]));
var endAtom=dbs.get$I(dbs.size$() - 1).getOther$org_openscience_cdk_interfaces_IAtom($I$(1,"getShared$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond",[dbs.get$I(dbs.size$() - 1), dbs.get$I(dbs.size$() - 2)]));
var begBonds=this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(begAtom);
var endBonds=this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(endAtom);
if (stereocenters.isSymmetryChecked$() && (!stereocenters.isStereocenter$I(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(begAtom)) || !stereocenters.isStereocenter$I(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(endAtom)) ) ) return null;
if (begBonds.size$() < 2 || endBonds.size$() < 2 ) return null;
begBonds.remove$O(dbs.get$I(0));
endBonds.remove$O(dbs.get$I(dbs.size$() - 1));
var ends=$I$(16).findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IBond(this.container, focus);
Clazz.assert(C$, this, function(){return ends != null });
if (ends[0].equals$O(begAtom)) {
carriers[0]=begBonds.get$I(0);
carriers[1]=endBonds.get$I(0);
} else {
carriers[1]=begBonds.get$I(0);
carriers[0]=endBonds.get$I(0);
}var begNbr=begBonds.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom(begAtom);
var endNbr=endBonds.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom(endAtom);
var begVec=Clazz.new_([begNbr.getPoint2d$().x - begAtom.getPoint2d$().x, begNbr.getPoint2d$().y - begAtom.getPoint2d$().y],$I$(17,1).c$$D$D);
var endVec=Clazz.new_([endNbr.getPoint2d$().x - endAtom.getPoint2d$().x, endNbr.getPoint2d$().y - endAtom.getPoint2d$().y],$I$(17,1).c$$D$D);
begVec.normalize$();
endVec.normalize$();
var dot=begVec.dot$javax_vecmath_Vector2d(endVec);
if (dot < 0 ) config=1;
 else config=2;
return Clazz.new_($I$(16,1).c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$I,[focus, carriers, config]);
});

Clazz.newMeth(C$, 'isUnspecified$org_openscience_cdk_interfaces_IBond',  function (bond) {
switch (bond.getStereo$()) {
case $I$(4).UP_OR_DOWN:
case $I$(4).UP_OR_DOWN_INVERTED:
case $I$(4).E_OR_Z:
return true;
default:
return false;
}
}, p$1);

Clazz.newMeth(C$, 'parity$org_openscience_cdk_interfaces_IAtomA',  function (atoms) {
if (atoms.length != 3) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["incorrect number of atoms"]);
var a=atoms[0].getPoint2d$();
var b=atoms[1].getPoint2d$();
var c=atoms[2].getPoint2d$();
if (a == null  || b == null   || c == null  ) return 0;
var det=C$.det$D$D$D$D$D$D(a.x, a.y, b.x, b.y, c.x, c.y);
if (Math.abs(det) < 0.1 ) return 0;
return (Math.signum(det)|0);
}, p$1);

Clazz.newMeth(C$, 'parity$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$IA',  function (focus, atoms, elevations) {
if (atoms.length != 4) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["incorrect number of atoms"]);
var coordinates=Clazz.array($I$(9), [atoms.length]);
for (var i=0; i < atoms.length; i++) {
coordinates[i]=atoms[i].getPoint2d$();
if (coordinates[i] == null ) return 0;
coordinates[i]=p$1.toUnitVector$javax_vecmath_Point2d$javax_vecmath_Point2d.apply(this, [focus.getPoint2d$(), atoms[i].getPoint2d$()]);
}
var det=p$1.parity$javax_vecmath_Point2dA$IA.apply(this, [coordinates, elevations]);
return (Math.signum(det)|0);
}, p$1);

Clazz.newMeth(C$, 'toUnitVector$javax_vecmath_Point2d$javax_vecmath_Point2d',  function (from, to) {
if (from.equals$javax_vecmath_Tuple2d(to)) return Clazz.new_($I$(9,1).c$$D$D,[0, 0]);
var v2d=Clazz.new_($I$(17,1).c$$D$D,[to.x - from.x, to.y - from.y]);
v2d.normalize$();
return Clazz.new_($I$(9,1).c$$javax_vecmath_Tuple2d,[v2d]);
}, p$1);

Clazz.newMeth(C$, 'toUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (from, to) {
if (from.equals$O(to)) return Clazz.new_($I$(17,1).c$$D$D,[0, 0]);
return Clazz.new_([p$1.toUnitVector$javax_vecmath_Point2d$javax_vecmath_Point2d.apply(this, [from.getPoint2d$(), to.getPoint2d$()])],$I$(17,1).c$$javax_vecmath_Tuple2d);
}, p$1);

Clazz.newMeth(C$, 'parity$javax_vecmath_Point2dA$IA',  function (coordinates, elevations) {
var x1=coordinates[0].x;
var x2=coordinates[1].x;
var x3=coordinates[2].x;
var x4=coordinates[3].x;
var y1=coordinates[0].y;
var y2=coordinates[1].y;
var y3=coordinates[2].y;
var y4=coordinates[3].y;
return (elevations[0] * C$.det$D$D$D$D$D$D(x2, y2, x3, y3, x4, y4)) - (elevations[1] * C$.det$D$D$D$D$D$D(x1, y1, x3, y3, x4, y4)) + (elevations[2] * C$.det$D$D$D$D$D$D(x1, y1, x2, y2, x4, y4)) - (elevations[3] * C$.det$D$D$D$D$D$D(x1, y1, x2, y2, x3, y3));
}, p$1);

Clazz.newMeth(C$, 'det$D$D$D$D$D$D',  function (xa, ya, xb, yb, xc, yc) {
return (xa - xc) * (yb - yc) - (ya - yc) * (xb - xc);
}, 1);

Clazz.newMeth(C$, 'moveToBack$IA$I',  function (vs, v) {
for (var i=0; i < vs.length; i++) {
if (vs[i] == v) {
System.arraycopy$O$I$O$I$I(vs, i + 1, vs, i + 1 - 1, vs.length - (i + 1));
vs[vs.length - 1]=v;
return;
}}
}, 1);

Clazz.newMeth(C$, 'elevationOf$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond',  function (focus, bond) {
switch (bond.getStereo$()) {
case $I$(4).UP:
return bond.getBegin$().equals$O(focus) ? 1 : 0;
case $I$(4).UP_INVERTED:
return bond.getEnd$().equals$O(focus) ? 1 : 0;
case $I$(4).DOWN:
return bond.getBegin$().equals$O(focus) ? -1 : 0;
case $I$(4).DOWN_INVERTED:
return bond.getEnd$().equals$O(focus) ? -1 : 0;
}
return 0;
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StereoElementFactory, "StereoElementFactory3D", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.stereo.StereoElementFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (container, graph, bondMap) {
;C$.superclazz.c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap.apply(this,[container, graph, bondMap]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createTetrahedral$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_stereo_Stereocenters',  function (atom, stereocenters) {
return this.createTetrahedral$I$org_openscience_cdk_stereo_Stereocenters(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(atom), stereocenters);
});

Clazz.newMeth(C$, 'createGeometric$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_stereo_Stereocenters',  function (bond, stereocenters) {
return this.createGeometric$I$I$org_openscience_cdk_stereo_Stereocenters(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$()), this.container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$()), stereocenters);
});

Clazz.newMeth(C$, 'createTetrahedral$I$org_openscience_cdk_stereo_Stereocenters',  function (v, stereocenters) {
if (!stereocenters.isStereocenter$I(v)) return null;
var focus=this.container.getAtom$I(v);
if ($I$(1).hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom(focus)) return null;
var neighbors=Clazz.array($I$(2), [4]);
neighbors[3]=focus;
var n=0;
for (var w, $w = 0, $$w = this.graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) neighbors[n++]=this.container.getAtom$I(w);

if (n < 3 || n > 4 ) return null;
var parity=p$2.parity$org_openscience_cdk_interfaces_IAtomA.apply(this, [neighbors]);
var winding=parity > 0 ? $I$(6).ANTI_CLOCKWISE : $I$(6).CLOCKWISE;
return Clazz.new_($I$(7,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo,[focus, neighbors, winding]);
});

Clazz.newMeth(C$, 'createAtropisomer$I$I$org_openscience_cdk_stereo_Stereocenters',  function (u, v, stereocenters) {
var end1=this.container.getAtom$I(u);
var end2=this.container.getAtom$I(v);
if ($I$(1).hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom(end1) || $I$(1).hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom(end2) ) return null;
if (this.graph[u].length != 3 || this.graph[v].length != 3 ) return null;
var sum1=this.graph[this.graph[u][0]].length + this.graph[this.graph[u][1]].length + this.graph[this.graph[u][2]].length ;
var sum2=this.graph[this.graph[v][0]].length + this.graph[this.graph[v][1]].length + this.graph[this.graph[v][2]].length ;
if (sum1 > 9 || sum1 < 8 ) return null;
if (sum2 > 9 || sum2 < 8 ) return null;
if (sum1 + sum2 < 17) return null;
var carriers=Clazz.array($I$(2), [4]);
var n=0;
for (var w, $w = 0, $$w = this.graph[u]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (w == v) continue;
carriers[n]=this.container.getAtom$I(w);
for (var w2, $w2 = 0, $$w2 = this.graph[w]; $w2<$$w2.length&&((w2=($$w2[$w2])),1);$w2++) {
if ($I$(1,"isHydrogen$org_openscience_cdk_interfaces_IAtom",[this.container.getAtom$I(w2)])) --sum1;
}
++n;
}
n=2;
for (var w, $w = 0, $$w = this.graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (w == u) continue;
carriers[n]=this.container.getAtom$I(w);
for (var w2, $w2 = 0, $$w2 = this.graph[w]; $w2<$$w2.length&&((w2=($$w2[$w2])),1);$w2++) {
if ($I$(1,"isHydrogen$org_openscience_cdk_interfaces_IAtom",[this.container.getAtom$I(w2)])) --sum2;
}
++n;
}
if (n != 4) return null;
if (sum1 > 9 || sum1 < 8 ) return null;
if (sum2 > 9 || sum2 < 8 ) return null;
if (sum1 + sum2 < 17) return null;
var parity=p$2.parity$org_openscience_cdk_interfaces_IAtomA.apply(this, [carriers]);
var cfg=parity > 0 ? 1 : 2;
return Clazz.new_([this.container.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(end1, end2), carriers, cfg],$I$(10,1).c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtomA$I);
});

Clazz.newMeth(C$, 'createGeometric$I$I$org_openscience_cdk_stereo_Stereocenters',  function (u, v, stereocenters) {
if ($I$(1,"hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom",[this.container.getAtom$I(u)]) || $I$(1,"hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom",[this.container.getAtom$I(v)]) ) return null;
var us=this.graph[u];
var vs=this.graph[v];
var x=us[0] == v ? us[1] : us[0];
var w=vs[0] == u ? vs[1] : vs[0];
var uAtom=this.container.getAtom$I(u);
var vAtom=this.container.getAtom$I(v);
var uSubstituentAtom=this.container.getAtom$I(x);
var vSubstituentAtom=this.container.getAtom$I(w);
if (uAtom.getPoint3d$() == null  || vAtom.getPoint3d$() == null   || uSubstituentAtom.getPoint3d$() == null   || vSubstituentAtom.getPoint3d$() == null  ) return null;
var parity=p$2.parity$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d.apply(this, [uAtom.getPoint3d$(), vAtom.getPoint3d$(), uSubstituentAtom.getPoint3d$(), vSubstituentAtom.getPoint3d$()]);
var conformation=parity > 0 ? $I$(11).OPPOSITE : $I$(11).TOGETHER;
var bond=this.bondMap.get$I$I(u, v);
bond.setAtoms$org_openscience_cdk_interfaces_IAtomA(Clazz.array($I$(2), -1, [uAtom, vAtom]));
return Clazz.new_([bond, Clazz.array($I$(13), -1, [this.bondMap.get$I$I(u, x), this.bondMap.get$I$I(v, w)]), conformation],$I$(12,1).c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$org_openscience_cdk_interfaces_IDoubleBondStereochemistry_Conformation);
});

Clazz.newMeth(C$, 'createExtendedTetrahedral$I$org_openscience_cdk_stereo_Stereocenters',  function (v, stereocenters) {
var focus=this.container.getAtom$I(v);
if ($I$(1).hasUnspecifiedParity$org_openscience_cdk_interfaces_IAtom(focus)) return null;
if (this.container.getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom(focus) != 2) return null;
var terminals=$I$(14).findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(this.container, focus);
var neighbors=Clazz.array($I$(2), [4]);
var t0=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(terminals[0]);
var t1=this.container.indexOf$org_openscience_cdk_interfaces_IAtom(terminals[1]);
if (!p$2.isColinear$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA.apply(this, [focus, terminals])) return null;
neighbors[1]=terminals[0];
neighbors[3]=terminals[1];
var n=0;
for (var w, $w = 0, $$w = this.graph[t0]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (this.bondMap.get$I$I(t0, w).getOrder$() !== $I$(15).SINGLE ) continue;
neighbors[n++]=this.container.getAtom$I(w);
}
if (n == 0) return null;
n=2;
for (var w, $w = 0, $$w = this.graph[t1]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (this.bondMap.get$I$I(t1, w).getOrder$() !== $I$(15).SINGLE ) continue;
neighbors[n++]=this.container.getAtom$I(w);
}
if (n == 2) return null;
var parity=p$2.parity$org_openscience_cdk_interfaces_IAtomA.apply(this, [neighbors]);
var winding=parity > 0 ? $I$(6).ANTI_CLOCKWISE : $I$(6).CLOCKWISE;
return Clazz.new_($I$(14,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo,[focus, neighbors, winding]);
});

Clazz.newMeth(C$, 'createExtendedCisTrans$java_util_List$org_openscience_cdk_stereo_Stereocenters',  function (dbs, centers) {
if ((dbs.size$() & 1) == 0) return null;
var focus=dbs.get$I((dbs.size$()/2|0));
var carriers=Clazz.array($I$(13), [2]);
var config;
var begAtom=dbs.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom($I$(1,"getShared$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond",[dbs.get$I(0), dbs.get$I(1)]));
var endAtom=dbs.get$I(dbs.size$() - 1).getOther$org_openscience_cdk_interfaces_IAtom($I$(1,"getShared$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond",[dbs.get$I(dbs.size$() - 1), dbs.get$I(dbs.size$() - 2)]));
var begBonds=this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(begAtom);
var endBonds=this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(endAtom);
if (begBonds.size$() < 2 || endBonds.size$() < 2 ) return null;
begBonds.remove$O(dbs.get$I(0));
endBonds.remove$O(dbs.get$I(dbs.size$() - 1));
var ends=$I$(16).findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IBond(this.container, focus);
Clazz.assert(C$, this, function(){return ends != null });
if (ends[0].equals$O(begAtom)) {
carriers[0]=begBonds.get$I(0);
carriers[1]=endBonds.get$I(0);
} else {
carriers[1]=begBonds.get$I(0);
carriers[0]=endBonds.get$I(0);
}var begNbr=begBonds.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom(begAtom);
var endNbr=endBonds.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom(endAtom);
var begVec=Clazz.new_([begNbr.getPoint3d$().x - begAtom.getPoint3d$().x, begNbr.getPoint3d$().y - begAtom.getPoint3d$().y, begNbr.getPoint3d$().z - begAtom.getPoint3d$().z],$I$(18,1).c$$D$D$D);
var endVec=Clazz.new_([endNbr.getPoint3d$().x - endAtom.getPoint3d$().x, endNbr.getPoint3d$().y - endAtom.getPoint3d$().y, endNbr.getPoint3d$().z - endAtom.getPoint3d$().z],$I$(18,1).c$$D$D$D);
begVec.normalize$();
endVec.normalize$();
var dot=begVec.dot$javax_vecmath_Vector3d(endVec);
if (dot < 0 ) config=1;
 else config=2;
return Clazz.new_($I$(16,1).c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$I,[focus, carriers, config]);
});

Clazz.newMeth(C$, 'isColinear$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA',  function (focus, terminals) {
var vec0=Clazz.new_([terminals[0].getPoint3d$().x - focus.getPoint3d$().x, terminals[0].getPoint3d$().y - focus.getPoint3d$().y, terminals[0].getPoint3d$().z - focus.getPoint3d$().z],$I$(18,1).c$$D$D$D);
var vec1=Clazz.new_([terminals[1].getPoint3d$().x - focus.getPoint3d$().x, terminals[1].getPoint3d$().y - focus.getPoint3d$().y, terminals[1].getPoint3d$().z - focus.getPoint3d$().z],$I$(18,1).c$$D$D$D);
vec0.normalize$();
vec1.normalize$();
return Math.abs(vec0.dot$javax_vecmath_Vector3d(vec1) + 1) < 0.05 ;
}, p$2);

Clazz.newMeth(C$, 'det$D$D$D$D$D$D',  function (xa, ya, xb, yb, xc, yc) {
return (xa - xc) * (yb - yc) - (ya - yc) * (xb - xc);
}, 1);

Clazz.newMeth(C$, 'parity$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d',  function (u, v, x, w) {
var vu=C$.toVector$javax_vecmath_Point3d$javax_vecmath_Point3d(v, u);
var vw=C$.toVector$javax_vecmath_Point3d$javax_vecmath_Point3d(v, w);
var ux=C$.toVector$javax_vecmath_Point3d$javax_vecmath_Point3d(u, x);
var normal=C$.crossProduct$DA$DA(vu, C$.crossProduct$DA$DA(vu, vw));
var parity=(Math.signum(C$.dot$DA$DA(normal, vw))|0) * (Math.signum(C$.dot$DA$DA(normal, ux))|0);
return parity * -1;
}, p$2);

Clazz.newMeth(C$, 'parity$org_openscience_cdk_interfaces_IAtomA',  function (atoms) {
if (atoms.length != 4) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["incorrect number of atoms"]);
var coordinates=Clazz.array($I$(19), [atoms.length]);
for (var i=0; i < atoms.length; i++) {
coordinates[i]=atoms[i].getPoint3d$();
if (coordinates[i] == null ) return 0;
}
var x1=coordinates[0].x;
var x2=coordinates[1].x;
var x3=coordinates[2].x;
var x4=coordinates[3].x;
var y1=coordinates[0].y;
var y2=coordinates[1].y;
var y3=coordinates[2].y;
var y4=coordinates[3].y;
var z1=coordinates[0].z;
var z2=coordinates[1].z;
var z3=coordinates[2].z;
var z4=coordinates[3].z;
var det=(z1 * C$.det$D$D$D$D$D$D(x2, y2, x3, y3, x4, y4)) - (z2 * C$.det$D$D$D$D$D$D(x1, y1, x3, y3, x4, y4)) + (z3 * C$.det$D$D$D$D$D$D(x1, y1, x2, y2, x4, y4)) - (z4 * C$.det$D$D$D$D$D$D(x1, y1, x2, y2, x3, y3));
return (Math.signum(det)|0);
}, p$2);

Clazz.newMeth(C$, 'toVector$javax_vecmath_Point3d$javax_vecmath_Point3d',  function (src, dest) {
return Clazz.array(Double.TYPE, -1, [dest.x - src.x, dest.y - src.y, dest.z - src.z]);
}, 1);

Clazz.newMeth(C$, 'dot$DA$DA',  function (u, v) {
return (u[0] * v[0]) + (u[1] * v[1]) + (u[2] * v[2]) ;
}, 1);

Clazz.newMeth(C$, 'crossProduct$DA$DA',  function (u, v) {
return Clazz.array(Double.TYPE, -1, [(u[1] * v[2]) - (v[1] * u[2]), (u[2] * v[0]) - (v[2] * u[0]), (u[0] * v[1]) - (v[0] * u[1])]);
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:36 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
