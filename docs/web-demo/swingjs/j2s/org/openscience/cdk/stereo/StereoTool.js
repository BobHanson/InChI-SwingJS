(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),I$=[[0,'javax.vecmath.Vector3d','javax.vecmath.Point3d',['org.openscience.cdk.stereo.StereoTool','.SquarePlanarShape'],['org.openscience.cdk.stereo.StereoTool','.TetrahedralSign'],['org.openscience.cdk.interfaces.ITetrahedralChirality','.Stereo']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StereoTool", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['StereoClass',25],['TetrahedralSign',25],['SquarePlanarShape',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'isSquarePlanar$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atomA, atomB, atomC, atomD) {
var pointA=atomA.getPoint3d$();
var pointB=atomB.getPoint3d$();
var pointC=atomC.getPoint3d$();
var pointD=atomD.getPoint3d$();
return C$.isSquarePlanar$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d(pointA, pointB, pointC, pointD);
}, 1);

Clazz.newMeth(C$, 'isSquarePlanar$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d',  function (pointA, pointB, pointC, pointD) {
return C$.isSquarePlanar$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d(pointA, pointB, pointC, pointD, Clazz.new_($I$(1,1)));
}, 1);

Clazz.newMeth(C$, 'isSquarePlanar$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d',  function (pointA, pointB, pointC, pointD, normal) {
var vectorAB=Clazz.new_($I$(1,1));
var vectorAC=Clazz.new_($I$(1,1));
C$.getRawNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d(pointA, pointB, pointC, normal, vectorAB, vectorAC);
if (C$.isColinear$javax_vecmath_Vector3d(normal)) return false;
return C$.allCoplanar$javax_vecmath_Vector3d$javax_vecmath_Point3d$javax_vecmath_Point3dA(normal, pointC, Clazz.array($I$(2), -1, [pointD]));
}, 1);

Clazz.newMeth(C$, 'getSquarePlanarShape$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atomA, atomB, atomC, atomD) {
var pointA=atomA.getPoint3d$();
var pointB=atomB.getPoint3d$();
var pointC=atomC.getPoint3d$();
var pointD=atomD.getPoint3d$();
var normalA=Clazz.new_($I$(1,1));
var normalB=Clazz.new_($I$(1,1));
var normalC=Clazz.new_($I$(1,1));
var tmpX=Clazz.new_($I$(1,1));
var tmpY=Clazz.new_($I$(1,1));
C$.getRawNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d(pointA, pointB, pointC, normalA, tmpX, tmpY);
C$.getRawNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d(pointB, pointC, pointD, normalB, tmpX, tmpY);
C$.getRawNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d(pointC, pointD, pointA, normalC, tmpX, tmpY);
normalA.normalize$();
normalB.normalize$();
normalC.normalize$();
var aDotB=normalA.dot$javax_vecmath_Vector3d(normalB);
var aDotC=normalA.dot$javax_vecmath_Vector3d(normalC);
var bDotC=normalB.dot$javax_vecmath_Vector3d(normalC);
if (aDotB > 0  && aDotC > 0   && bDotC > 0  ) {
return $I$(3).U_SHAPE;
} else if (aDotB > 0  && aDotC < 0   && bDotC < 0  ) {
return $I$(3).FOUR_SHAPE;
} else {
return $I$(3).Z_SHAPE;
}}, 1);

Clazz.newMeth(C$, 'allCoplanar$javax_vecmath_Vector3d$javax_vecmath_Point3d$javax_vecmath_Point3dA',  function (planeNormal, pointInPlane, points) {
for (var point, $point = 0, $$point = points; $point<$$point.length&&((point=($$point[$point])),1);$point++) {
var distance=C$.signedDistanceToPlane$javax_vecmath_Vector3d$javax_vecmath_Point3d$javax_vecmath_Point3d(planeNormal, pointInPlane, point);
if (distance < 0.05 ) {
continue;
} else {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'isOctahedral$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atomA, atomB, atomC, atomD, atomE, atomF, atomG) {
var pointA=atomA.getPoint3d$();
var pointB=atomB.getPoint3d$();
var pointC=atomC.getPoint3d$();
var pointD=atomD.getPoint3d$();
var pointE=atomE.getPoint3d$();
var pointF=atomF.getPoint3d$();
var pointG=atomG.getPoint3d$();
var isColinearABG=C$.isColinear$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d(pointA, pointB, pointG);
if (!isColinearABG) return false;
var normal=Clazz.new_($I$(1,1));
C$.isSquarePlanar$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d(pointC, pointD, pointE, pointF, normal);
var vectorAB=Clazz.new_($I$(1,1).c$$javax_vecmath_Tuple3d,[pointA]);
vectorAB.sub$javax_vecmath_Tuple3d(pointB);
return normal.dot$javax_vecmath_Vector3d(vectorAB) < 0 ;
}, 1);

Clazz.newMeth(C$, 'isTrigonalBipyramidal$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atomA, atomB, atomC, atomD, atomE, atomF) {
var pointA=atomA.getPoint3d$();
var pointB=atomB.getPoint3d$();
var pointC=atomC.getPoint3d$();
var pointD=atomD.getPoint3d$();
var pointE=atomE.getPoint3d$();
var pointF=atomF.getPoint3d$();
var isColinearABF=C$.isColinear$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d(pointA, pointB, pointF);
if (isColinearABF) {
var normal=C$.getNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d(pointC, pointD, pointE);
var handednessCDEA=C$.getHandedness$javax_vecmath_Vector3d$javax_vecmath_Point3d$javax_vecmath_Point3d(normal, pointC, pointF);
var handednessCDEF=C$.getHandedness$javax_vecmath_Vector3d$javax_vecmath_Point3d$javax_vecmath_Point3d(normal, pointC, pointA);
return handednessCDEA !== handednessCDEF ;
} else {
return false;
}}, 1);

Clazz.newMeth(C$, 'getStereo$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atom1, atom2, atom3, atom4) {
var sign=C$.getHandedness$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom2, atom3, atom4, atom1);
if (sign === $I$(4).PLUS ) {
return $I$(5).ANTI_CLOCKWISE;
} else {
return $I$(5).CLOCKWISE;
}}, 1);

Clazz.newMeth(C$, 'getHandedness$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (baseAtomA, baseAtomB, baseAtomC, apexAtom) {
var pointA=baseAtomA.getPoint3d$();
var pointB=baseAtomB.getPoint3d$();
var pointC=baseAtomC.getPoint3d$();
var pointD=apexAtom.getPoint3d$();
return C$.getHandedness$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d(pointA, pointB, pointC, pointD);
}, 1);

Clazz.newMeth(C$, 'getHandedness$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d',  function (pointA, pointB, pointC, pointD) {
var normal=C$.getNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d(pointA, pointB, pointC);
return C$.getHandedness$javax_vecmath_Vector3d$javax_vecmath_Point3d$javax_vecmath_Point3d(normal, pointA, pointD);
}, 1);

Clazz.newMeth(C$, 'getHandedness$javax_vecmath_Vector3d$javax_vecmath_Point3d$javax_vecmath_Point3d',  function (planeNormal, pointInPlane, testPoint) {
var distance=C$.signedDistanceToPlane$javax_vecmath_Vector3d$javax_vecmath_Point3d$javax_vecmath_Point3d(planeNormal, pointInPlane, testPoint);
if (distance > 0 ) {
return $I$(4).PLUS;
} else {
return $I$(4).MINUS;
}}, 1);

Clazz.newMeth(C$, 'isColinear$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d',  function (ptA, ptB, ptC) {
var vectorAB=Clazz.new_($I$(1,1));
var vectorAC=Clazz.new_($I$(1,1));
var normal=Clazz.new_($I$(1,1));
C$.getRawNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d(ptA, ptB, ptC, normal, vectorAB, vectorAC);
return C$.isColinear$javax_vecmath_Vector3d(normal);
}, 1);

Clazz.newMeth(C$, 'isColinear$javax_vecmath_Vector3d',  function (normal) {
var baCrossACLen=normal.length$();
return baCrossACLen < 0.05 ;
}, 1);

Clazz.newMeth(C$, 'signedDistanceToPlane$javax_vecmath_Vector3d$javax_vecmath_Point3d$javax_vecmath_Point3d',  function (planeNormal, pointInPlane, point) {
if (planeNormal == null ) return NaN;
var pointPointDiff=Clazz.new_($I$(1,1));
pointPointDiff.sub$javax_vecmath_Tuple3d$javax_vecmath_Tuple3d(point, pointInPlane);
return planeNormal.dot$javax_vecmath_Vector3d(pointPointDiff);
}, 1);

Clazz.newMeth(C$, 'getNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d',  function (ptA, ptB, ptC) {
var vectorAB=Clazz.new_($I$(1,1));
var vectorAC=Clazz.new_($I$(1,1));
var normal=Clazz.new_($I$(1,1));
C$.getRawNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d(ptA, ptB, ptC, normal, vectorAB, vectorAC);
normal.normalize$();
return normal;
}, 1);

Clazz.newMeth(C$, 'getRawNormal$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Point3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d$javax_vecmath_Vector3d',  function (ptA, ptB, ptC, normal, vcAB, vcAC) {
vcAB.sub$javax_vecmath_Tuple3d$javax_vecmath_Tuple3d(ptB, ptA);
vcAC.sub$javax_vecmath_Tuple3d$javax_vecmath_Tuple3d(ptC, ptA);
normal.cross$javax_vecmath_Vector3d$javax_vecmath_Vector3d(vcAB, vcAC);
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.StereoTool, "StereoClass", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "TETRAHEDRAL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SQUARE_PLANAR", 1, []);
Clazz.newEnumConst($vals, C$.c$, "TRIGONAL_BIPYRAMIDAL", 2, []);
Clazz.newEnumConst($vals, C$.c$, "OCTAHEDRAL", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.StereoTool, "TetrahedralSign", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PLUS", 0, []);
Clazz.newEnumConst($vals, C$.c$, "MINUS", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.StereoTool, "SquarePlanarShape", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "U_SHAPE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "FOUR_SHAPE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Z_SHAPE", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:36 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
