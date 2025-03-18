(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'java.util.ArrayList','java.util.BitSet','java.util.Collections','org.openscience.cdk.graph.BitMatrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GreedyBasis");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['m'],'O',['basis','java.util.List','edgesOfBasis','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$I$I',  function (n, m) {
;C$.$init$.apply(this);
this.basis=Clazz.new_($I$(1,1).c$$I,[n]);
this.edgesOfBasis=Clazz.new_($I$(2,1).c$$I,[m]);
this.m=m;
}, 1);

Clazz.newMeth(C$, 'members$',  function () {
return $I$(3).unmodifiableList$java_util_List(this.basis);
});

Clazz.newMeth(C$, 'size$',  function () {
return this.members$().size$();
});

Clazz.newMeth(C$, 'add$org_openscience_cdk_graph_InitialCycles_Cycle',  function (cycle) {
this.basis.add$O(cycle);
this.edgesOfBasis.or$java_util_BitSet(cycle.edgeVector$());
});

Clazz.newMeth(C$, 'addAll$Iterable',  function (cycles) {
for (var cycle, $cycle = cycles.iterator$(); $cycle.hasNext$()&&((cycle=($cycle.next$())),1);) this.add$org_openscience_cdk_graph_InitialCycles_Cycle(cycle);

});

Clazz.newMeth(C$, 'isSubsetOfBasis$org_openscience_cdk_graph_InitialCycles_Cycle',  function (cycle) {
var edgeVector=cycle.edgeVector$();
var intersect=C$.and$java_util_BitSet$java_util_BitSet(this.edgesOfBasis, edgeVector).cardinality$();
return intersect == cycle.length$();
});

Clazz.newMeth(C$, 'isIndependent$org_openscience_cdk_graph_InitialCycles_Cycle',  function (candidate) {
if (this.basis.isEmpty$() || !this.isSubsetOfBasis$org_openscience_cdk_graph_InitialCycles_Cycle(candidate) ) return true;
var matrix=$I$(4).from$Iterable$org_openscience_cdk_graph_InitialCycles_Cycle(this.basis, candidate);
matrix.eliminate$();
return !matrix.eliminated$I(this.basis.size$());
});

Clazz.newMeth(C$, 'and$java_util_BitSet$java_util_BitSet',  function (s, t) {
var u=s.clone$();
u.and$java_util_BitSet(t);
return u;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
