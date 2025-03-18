(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'java.util.HashMap',['org.openscience.cdk.graph.GraphUtil','.Tuple'],'java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "GraphUtil", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['EdgeToBondMap',25],['Tuple',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toAdjList$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
if (container == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["atom container was null"]);
var n=container.getAtomCount$();
var graph=Clazz.array(Integer.TYPE, [n, 4]);
var degree=Clazz.array(Integer.TYPE, [n]);
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var v=container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
var w=container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$());
if (v < 0 || w < 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bond at index " + container.indexOf$org_openscience_cdk_interfaces_IBond(bond) + " contained an atom not pressent in molecule" ]);
graph[v][degree[v]++]=w;
graph[w][degree[w]++]=v;
if (degree[v] == graph[v].length) graph[v]=$I$(3).copyOf$IA$I(graph[v], degree[v] * 2);
if (degree[w] == graph[w].length) graph[w]=$I$(3).copyOf$IA$I(graph[w], degree[w] * 2);
}
for (var v=0; v < n; v++) {
graph[v]=$I$(3).copyOf$IA$I(graph[v], degree[v]);
}
return graph;
}, 1);

Clazz.newMeth(C$, 'toAdjListSubgraph$org_openscience_cdk_interfaces_IAtomContainer$java_util_Set',  function (container, include) {
if (container == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["atom container was null"]);
var n=container.getAtomCount$();
var graph=Clazz.array(Integer.TYPE, [n, 4]);
var degree=Clazz.array(Integer.TYPE, [n]);
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (!include.contains$O(bond)) continue;
var v=container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
var w=container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$());
if (v < 0 || w < 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bond at index " + container.indexOf$org_openscience_cdk_interfaces_IBond(bond) + " contained an atom not pressent in molecule" ]);
graph[v][degree[v]++]=w;
graph[w][degree[w]++]=v;
if (degree[v] == graph[v].length) graph[v]=$I$(3).copyOf$IA$I(graph[v], degree[v] * 2);
if (degree[w] == graph[w].length) graph[w]=$I$(3).copyOf$IA$I(graph[w], degree[w] * 2);
}
for (var v=0; v < n; v++) {
graph[v]=$I$(3).copyOf$IA$I(graph[v], degree[v]);
}
return graph;
}, 1);

Clazz.newMeth(C$, 'toAdjList$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (container, bondMap) {
if (container == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["atom container was null"]);
var n=container.getAtomCount$();
var graph=Clazz.array(Integer.TYPE, [n, 4]);
var degree=Clazz.array(Integer.TYPE, [n]);
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var v=container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
var w=container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$());
if (v < 0 || w < 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bond at index " + container.indexOf$org_openscience_cdk_interfaces_IBond(bond) + " contained an atom not pressent in molecule" ]);
graph[v][degree[v]++]=w;
graph[w][degree[w]++]=v;
if (degree[v] == graph[v].length) graph[v]=$I$(3).copyOf$IA$I(graph[v], degree[v] * 2);
if (degree[w] == graph[w].length) graph[w]=$I$(3).copyOf$IA$I(graph[w], degree[w] * 2);
p$1.put$I$I$org_openscience_cdk_interfaces_IBond.apply(bondMap, [v, w, bond]);
}
for (var v=0; v < n; v++) {
graph[v]=$I$(3).copyOf$IA$I(graph[v], degree[v]);
}
return graph;
}, 1);

Clazz.newMeth(C$, 'subgraph$IAA$IA',  function (graph, include) {
var n=graph.length;
var m=include.length;
var mapping=Clazz.array(Integer.TYPE, [n]);
for (var i=0; i < m; i++) {
mapping[include[i]]=i + 1;
}
var degree=Clazz.array(Integer.TYPE, [m]);
var subgraph=Clazz.array(Integer.TYPE, [m, 4]);
for (var v=0; v < n; v++) {
var p=mapping[v] - 1;
if (p < 0) continue;
for (var w, $w = 0, $$w = graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var q=mapping[w] - 1;
if (q < 0) continue;
if (degree[p] == subgraph[p].length) subgraph[p]=$I$(3).copyOf$IA$I(subgraph[p], 2 * subgraph[p].length);
subgraph[p][degree[p]++]=q;
}
}
for (var p=0; p < m; p++) {
subgraph[p]=$I$(3).copyOf$IA$I(subgraph[p], degree[p]);
}
return subgraph;
}, 1);

Clazz.newMeth(C$, 'cycle$IAA$IA',  function (graph, vertices) {
var n=graph.length;
var m=vertices.length;
var marked=Clazz.array(Boolean.TYPE, [n]);
for (var v, $v = 0, $$v = vertices; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
marked[v]=true;
}
var path=Clazz.array(Integer.TYPE, [m + 1]);
path[0]=path[m]=vertices[0];
marked[vertices[0]]=false;
for (var i=1; i < m; i++) {
var w=C$.firstMarked$IA$ZA(graph[path[i - 1]], marked);
if (w < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["broken path"]);
path[i]=w;
marked[w]=false;
}
for (var w, $w = 0, $$w = graph[path[m - 1]]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (w == path[0]) return path;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["path does not make a cycle"]);
}, 1);

Clazz.newMeth(C$, 'firstMarked$IA$ZA',  function (xs, marked) {
for (var x, $x = 0, $$x = xs; $x<$$x.length&&((x=($$x[$x])),1);$x++) if (marked[x]) return x;

return -1;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.GraphUtil, "EdgeToBondMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['lookup','java.util.Map']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.lookup=Clazz.new_($I$(1,1).c$$I,[2 * n]);
}, 1);

Clazz.newMeth(C$, 'put$I$I$org_openscience_cdk_interfaces_IBond',  function (v, w, bond) {
return this.lookup.put$O$O(Clazz.new_($I$(2,1).c$$I$I,[v, w]), bond);
}, p$1);

Clazz.newMeth(C$, 'get$I$I',  function (v, w) {
return this.lookup.get$O(Clazz.new_($I$(2,1).c$$I$I,[v, w]));
});

Clazz.newMeth(C$, 'withSpaceFor$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return Clazz.new_(C$.c$$I,[container.getBondCount$()]);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GraphUtil, "Tuple", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['u','v']]]

Clazz.newMeth(C$, 'c$$I$I',  function (u, v) {
;C$.$init$.apply(this);
this.u=u;
this.v=v;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (this === o ) return true;
if (o == null  || this.getClass$() !== o.getClass$()  ) return false;
var that=o;
return this.u == that.u && this.v == that.v  || this.u == that.v && this.v == that.u  ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.u ^ this.v;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
