(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),I$=[[0,'javax.vecmath.Vector2d','java.util.HashSet','java.util.Arrays','org.openscience.cdk.config.Elements','org.openscience.cdk.renderer.generators.standard.VecmathUtil','java.util.HashMap',['org.openscience.cdk.renderer.generators.standard.HydrogenPosition','.OffsetExtent'],['org.openscience.cdk.renderer.generators.standard.HydrogenPosition','.ExtentPriority']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*e*/var C$=Clazz.newClass(P$, "HydrogenPosition", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'Enum');
C$.$classes$=[['OffsetExtent',26],['ExtentPriority',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['direction'],'O',['vector','javax.vecmath.Vector2d']]
,['O',['PREFIXED_H','java.util.Set']]]

Clazz.newMeth(C$, 'c$$D$javax_vecmath_Vector2d',  function (direction, vector) {
;C$.$init$.apply(this);
this.direction=direction;
this.vector=vector;
}, 1);

Clazz.newMeth(C$, 'vector$',  function () {
return this.vector;
});

Clazz.newMeth(C$, 'position$org_openscience_cdk_interfaces_IAtom$java_util_List',  function (atom, neighbors) {
var vectors=$I$(5).newUnitVectors$org_openscience_cdk_interfaces_IAtom$java_util_List(atom, neighbors);
if (neighbors.size$() > 2) {
return C$.usingAngularExtent$java_util_List(vectors);
} else if (neighbors.size$() > 1) {
return C$.usingCardinalDirection$javax_vecmath_Vector2d($I$(5).average$java_util_Collection(vectors));
} else if (neighbors.size$() == 1) {
return vectors.get$I(0).x > 0.1  ? C$.Left : C$.Right;
} else {
return C$.usingDefaultPlacement$org_openscience_cdk_interfaces_IAtom(atom);
}}, 1);

Clazz.newMeth(C$, 'usingAngularExtent$java_util_List',  function (vectors) {
var extents=$I$(5).extents$java_util_List(vectors);
$I$(3).sort$DA(extents);
var extentMap=Clazz.new_($I$(6,1));
for (var i=0; i < extents.length; i++) {
var before=extents[i];
var after=extents[(i + 1) % extents.length];
for (var position, $position = 0, $$position = C$.values$(); $position<$$position.length&&((position=($$position[$position])),1);$position++) {
var bias=6.283185307179586 - position.direction;
var afterBias=after + bias;
var beforeBias=before + bias;
if (beforeBias >= 6.283185307179586 ) beforeBias-=6.283185307179586;
if (afterBias >= 6.283185307179586 ) afterBias-=6.283185307179586;
var afterExtent=afterBias;
var beforeExtent=6.283185307179586 - beforeBias;
var totalExtent=afterExtent + beforeExtent;
var offset=Math.abs(totalExtent / 2 - beforeExtent);
var offsetExtent=extentMap.get$O(position);
if (offsetExtent == null  || totalExtent < offsetExtent.extent  ) {
extentMap.put$O$O(position, Clazz.new_($I$(7,1).c$$D$D,[totalExtent, offset]));
}}
}
var extentEntries=extentMap.entrySet$();
var best=null;
for (var e, $e = extentEntries.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (best == null  || $I$(8).INSTANCE.compare$java_util_Map_Entry$java_util_Map_Entry(e, best) < 0 ) best=e;
}
Clazz.assert(C$, this, function(){return best != null });
return best.getKey$();
}, 1);

Clazz.newMeth(C$, 'usingCardinalDirection$javax_vecmath_Vector2d',  function (opposite) {
var theta=Math.atan2(opposite.y, opposite.x);
var direction=Long.$ival(Math.round$D(theta / (0.7853981633974483)));
switch (direction) {
case -4:
case -3:
return C$.Right;
case -2:
return C$.Above;
case -1:
case 0:
case 1:
return C$.Left;
case 2:
return C$.Below;
case 3:
case 4:
return C$.Right;
}
return C$.Right;
}, 1);

Clazz.newMeth(C$, 'usingDefaultPlacement$org_openscience_cdk_interfaces_IAtom',  function (atom) {
if (C$.PREFIXED_H.contains$O($I$(4,"ofNumber$I",[(atom.getAtomicNumber$()).$c()]))) return C$.Left;
return C$.Right;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$D$javax_vecmath_Vector2d, "Right", 0, [0, Clazz.new_($I$(1,1).c$$D$D,[1, 0])]);
Clazz.newEnumConst($vals, C$.c$$D$javax_vecmath_Vector2d, "Left", 1, [3.141592653589793, Clazz.new_($I$(1,1).c$$D$D,[-1, 0])]);
Clazz.newEnumConst($vals, C$.c$$D$javax_vecmath_Vector2d, "Above", 2, [1.5707963267948966, Clazz.new_($I$(1,1).c$$D$D,[0, 1])]);
Clazz.newEnumConst($vals, C$.c$$D$javax_vecmath_Vector2d, "Below", 3, [4.71238898038469, Clazz.new_($I$(1,1).c$$D$D,[0, -1])]);
C$.PREFIXED_H=Clazz.new_([$I$(3,"asList$OA",[Clazz.array($I$(4), -1, [$I$(4).Oxygen, $I$(4).Sulfur, $I$(4).Selenium, $I$(4).Tellurium, $I$(4).Fluorine, $I$(4).Chlorine, $I$(4).Bromine, $I$(4).Iodine])])],$I$(2,1).c$$java_util_Collection);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.HydrogenPosition, "OffsetExtent", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['extent','offset']]]

Clazz.newMeth(C$, 'c$$D$D',  function (extent, offset) {
;C$.$init$.apply(this);
this.extent=extent;
this.offset=offset;
}, 1);

Clazz.newMeth(C$, 'toString',  function () {
return String.format$S$OA("%.2f, %.2f", Clazz.array(java.lang.Object, -1, [Double.valueOf$D(this.extent), Double.valueOf$D(this.offset)]));
});

Clazz.newMeth(C$);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.HydrogenPosition, "ExtentPriority", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum', 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$java_util_Map_Entry$java_util_Map_Entry','compare$O$O'],  function (a, b) {
var aExtent=a.getValue$();
var bExtent=b.getValue$();
var extentDiff=bExtent.extent - aExtent.extent;
if (Math.abs(extentDiff) > 0.05 ) return (Math.signum(extentDiff)|0);
var offsetDiff=bExtent.offset - aExtent.offset;
if (Math.abs(offsetDiff) > 0.05 ) return (-Math.signum(offsetDiff)|0);
return a.getKey$().compareTo$Enum(b.getKey$());
});

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "INSTANCE", 0, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:29 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
