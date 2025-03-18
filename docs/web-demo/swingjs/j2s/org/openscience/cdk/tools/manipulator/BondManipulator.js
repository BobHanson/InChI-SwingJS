(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.interfaces.IAtom',['org.openscience.cdk.interfaces.IBond','.Order']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BondManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAtomArray$org_openscience_cdk_interfaces_IBond',  function (container) {
var ret=Clazz.array($I$(1), [container.getAtomCount$()]);
for (var i=0; i < ret.length; ++i) ret[i]=container.getAtom$I(i);

return ret;
}, 1);

Clazz.newMeth(C$, 'isLowerOrder$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Order',  function (first, second) {
if (first == null  || second == null   || first === $I$(2).UNSET   || second === $I$(2).UNSET  ) return false;
return first.compareTo$Enum(second) < 0;
}, 1);

Clazz.newMeth(C$, 'isHigherOrder$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Order',  function (first, second) {
if (first == null  || second == null   || first === $I$(2).UNSET   || second === $I$(2).UNSET  ) return false;
return first.compareTo$Enum(second) > 0;
}, 1);

Clazz.newMeth(C$, 'increaseBondOrder$org_openscience_cdk_interfaces_IBond_Order',  function (oldOrder) {
switch (oldOrder) {
case $I$(2).SINGLE:
return $I$(2).DOUBLE;
case $I$(2).DOUBLE:
return $I$(2).TRIPLE;
case $I$(2).TRIPLE:
return $I$(2).QUADRUPLE;
case $I$(2).QUADRUPLE:
return $I$(2).QUINTUPLE;
case $I$(2).QUINTUPLE:
return $I$(2).SEXTUPLE;
default:
return oldOrder;
}
}, 1);

Clazz.newMeth(C$, 'increaseBondOrder$org_openscience_cdk_interfaces_IBond',  function (bond) {
bond.setOrder$org_openscience_cdk_interfaces_IBond_Order(C$.increaseBondOrder$org_openscience_cdk_interfaces_IBond_Order(bond.getOrder$()));
}, 1);

Clazz.newMeth(C$, 'decreaseBondOrder$org_openscience_cdk_interfaces_IBond_Order',  function (oldOrder) {
switch (oldOrder) {
case $I$(2).DOUBLE:
return $I$(2).SINGLE;
case $I$(2).TRIPLE:
return $I$(2).DOUBLE;
case $I$(2).QUADRUPLE:
return $I$(2).TRIPLE;
case $I$(2).QUINTUPLE:
return $I$(2).QUADRUPLE;
case $I$(2).SEXTUPLE:
return $I$(2).QUINTUPLE;
default:
return oldOrder;
}
}, 1);

Clazz.newMeth(C$, 'decreaseBondOrder$org_openscience_cdk_interfaces_IBond',  function (bond) {
bond.setOrder$org_openscience_cdk_interfaces_IBond_Order(C$.decreaseBondOrder$org_openscience_cdk_interfaces_IBond_Order(bond.getOrder$()));
}, 1);

Clazz.newMeth(C$, 'createBondOrder$D',  function (bondOrder) {
for (var order, $order = 0, $$order = $I$(2).values$(); $order<$$order.length&&((order=($$order[$order])),1);$order++) {
if (order.numeric$().doubleValue$() == bondOrder ) return order;
}
return null;
}, 1);

Clazz.newMeth(C$, 'destroyBondOrder$org_openscience_cdk_interfaces_IBond_Order',  function (bondOrder) {
return bondOrder.numeric$().doubleValue$();
}, 1);

Clazz.newMeth(C$, 'getMaximumBondOrder$java_util_List',  function (bonds) {
return C$.getMaximumBondOrder$java_util_Iterator(bonds.iterator$());
}, 1);

Clazz.newMeth(C$, 'getMaximumBondOrder$java_util_Iterator',  function (bonds) {
var maxOrder=$I$(2).SINGLE;
while (bonds.hasNext$()){
var bond=bonds.next$();
if (C$.isHigherOrder$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Order(bond.getOrder$(), maxOrder)) maxOrder=bond.getOrder$();
}
return maxOrder;
}, 1);

Clazz.newMeth(C$, 'getMaximumBondOrder$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond',  function (firstBond, secondBond) {
if (firstBond == null  || secondBond == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null instance of IBond provided"]);
return C$.getMaximumBondOrder$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Order(firstBond.getOrder$(), secondBond.getOrder$());
}, 1);

Clazz.newMeth(C$, 'getMaximumBondOrder$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Order',  function (firstOrder, secondOrder) {
if (firstOrder === $I$(2).UNSET ) {
if (secondOrder === $I$(2).UNSET ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Both bond orders are unset"]);
return secondOrder;
}if (secondOrder === $I$(2).UNSET ) {
return firstOrder;
}if (C$.isHigherOrder$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Order(firstOrder, secondOrder)) return firstOrder;
 else return secondOrder;
}, 1);

Clazz.newMeth(C$, 'getMinimumBondOrder$java_util_List',  function (bonds) {
return C$.getMinimumBondOrder$java_util_Iterator(bonds.iterator$());
}, 1);

Clazz.newMeth(C$, 'getMinimumBondOrder$java_util_Iterator',  function (bonds) {
var minOrder=$I$(2).SEXTUPLE;
while (bonds.hasNext$()){
var bond=bonds.next$();
if (C$.isLowerOrder$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Order(bond.getOrder$(), minOrder)) minOrder=bond.getOrder$();
}
return minOrder;
}, 1);

Clazz.newMeth(C$, 'getSingleBondEquivalentSum$java_util_List',  function (bonds) {
return C$.getSingleBondEquivalentSum$java_util_Iterator(bonds.iterator$());
}, 1);

Clazz.newMeth(C$, 'getSingleBondEquivalentSum$java_util_Iterator',  function (bonds) {
var sum=0;
while (bonds.hasNext$()){
var order=bonds.next$().getOrder$();
if (order != null ) {
sum=(sum+((order.numeric$()).valueOf())|0);
}}
return sum;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:45 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
