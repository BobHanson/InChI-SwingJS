(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'javax.vecmath.Point2d','org.openscience.cdk.geometry.GeometryUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomContainerComparatorBy2DCenter", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['MAXIMUM','javax.vecmath.Point2d']]]

Clazz.newMeth(C$, ['compare$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','compare$O$O'],  function (a, b) {
var p1=C$.center$org_openscience_cdk_interfaces_IAtomContainer(a);
var p2=C$.center$org_openscience_cdk_interfaces_IAtomContainer(b);
if (p1.x > p2.x ) return 1;
if (p1.x < p2.x ) return -1;
if (p1.y > p2.y ) return 1;
if (p1.y < p2.y ) return -1;
return 0;
});

Clazz.newMeth(C$, 'center$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return container != null  ? $I$(2).get2DCenter$org_openscience_cdk_interfaces_IAtomContainer(container) : C$.MAXIMUM;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.MAXIMUM=Clazz.new_($I$(1,1).c$$D$D,[1.7976931348623157E308, 1.7976931348623157E308]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
