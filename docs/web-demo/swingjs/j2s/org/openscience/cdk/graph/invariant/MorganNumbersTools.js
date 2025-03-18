(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph.invariant"),I$=[[0,'java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "MorganNumbersTools");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMorganNumbers$org_openscience_cdk_interfaces_IAtomContainer',  function (molecule) {
var order=molecule.getAtomCount$();
var currentInvariants=Clazz.array(Long.TYPE, [order]);
var previousInvariants=Clazz.array(Long.TYPE, [order]);
var graph=Clazz.array(Integer.TYPE, [order, 4]);
var degree=Clazz.array(Integer.TYPE, [order]);
var nonHydrogens=Clazz.array(Integer.TYPE, [order]);
for (var v=0; v < order; v++) nonHydrogens[v]=(molecule.getAtom$I(v).getAtomicNumber$()).$c() === 1  ? 0 : 1;

for (var bond, $bond = molecule.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var u=molecule.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
var v=molecule.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$());
graph[u]=C$.ensureCapacity$IA$I(graph[u], degree[u] + 1);
graph[v]=C$.ensureCapacity$IA$I(graph[v], degree[v] + 1);
graph[u][degree[u]++]=v;
graph[v][degree[v]++]=u;
(currentInvariants[u]=Long.$add(currentInvariants[u],(nonHydrogens[v])));
(currentInvariants[v]=Long.$add(currentInvariants[v],(nonHydrogens[u])));
}
for (var i=0; i < order; i++) {
System.arraycopy$O$I$O$I$I(currentInvariants, 0, previousInvariants, 0, order);
for (var u=0; u < order; u++) {
currentInvariants[u]=0;
var neighbors=graph[u];
for (var j=0; j < degree[u]; j++) {
var v=neighbors[j];
(currentInvariants[u]=Long.$add(currentInvariants[u],(Long.$mul(previousInvariants[v],nonHydrogens[v]))));
}
}
}
return currentInvariants;
}, 1);

Clazz.newMeth(C$, 'ensureCapacity$IA$I',  function (arr, cap) {
return cap < arr.length ? arr : $I$(1).copyOf$IA$I(arr, cap);
}, 1);

Clazz.newMeth(C$, 'getMorganNumbersWithElementSymbol$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var morgannumbers=C$.getMorganNumbers$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
var morgannumberswithelement=Clazz.array(String, [morgannumbers.length]);
for (var i=0; i < morgannumbers.length; i++) {
morgannumberswithelement[i]=atomContainer.getAtom$I(i).getSymbol$() + "-" + Long.$s(morgannumbers[i]) ;
}
return (morgannumberswithelement);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
