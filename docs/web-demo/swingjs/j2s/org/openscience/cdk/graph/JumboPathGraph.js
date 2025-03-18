(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,['org.openscience.cdk.graph.JumboPathGraph','.ArrayBuilder'],'org.openscience.cdk.graph.JumboPathGraph','java.util.BitSet','java.util.Objects','java.util.List','java.util.ArrayList',['org.openscience.cdk.graph.JumboPathGraph','.SimpleEdge'],'java.util.Collections',['org.openscience.cdk.graph.JumboPathGraph','.ReducedEdge']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "JumboPathGraph", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.openscience.cdk.graph.PathGraph');
C$.$classes$=[['PathEdge',1032],['SimpleEdge',24],['ReducedEdge',24],['ArrayBuilder',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['limit'],'O',['graph','java.util.List[]','rank','int[]']]
,['O',['EMPTY_SET','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$IAA$IA$I',  function (mGraph, rank, limit) {
Clazz.super_(C$, this);
$I$(4).requireNonNull$O$S(mGraph, "no molecule graph");
$I$(4).requireNonNull$O$S(rank, "no rank provided");
this.graph=Clazz.array($I$(5), [mGraph.length]);
this.rank=rank;
this.limit=limit + 1;
var ord=this.graph.length;
if (ord <= 2) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["graph was acyclic"]);
if (limit < 3 || limit > ord ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["limit should be from 3 to |V|"]);
for (var v=0; v < ord; v++) this.graph[v]=Clazz.new_($I$(6,1));

for (var v=0; v < ord; v++) {
for (var w, $w = 0, $$w = mGraph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (w > v) p$1.add$org_openscience_cdk_graph_JumboPathGraph_PathEdge.apply(this, [Clazz.new_($I$(7,1).c$$I$I,[v, w])]);
}
}
}, 1);

Clazz.newMeth(C$, 'add$org_openscience_cdk_graph_JumboPathGraph_PathEdge',  function (edge) {
var u=edge.either$();
var v=edge.other$I(u);
if (this.rank[u] < this.rank[v]) this.graph[u].add$O(edge);
 else this.graph[v].add$O(edge);
}, p$1);

Clazz.newMeth(C$, 'degree$I',  function (x) {
return this.graph[x].size$();
});

Clazz.newMeth(C$, 'remove$I',  function (x) {
var edges=this.graph[x];
this.graph[x]=$I$(8).emptyList$();
return edges;
}, p$1);

Clazz.newMeth(C$, 'combine$java_util_List$I',  function (edges, x) {
var n=edges.size$();
var reduced=Clazz.new_($I$(6,1).c$$I,[n]);
for (var i=0; i < n; i++) {
var e=edges.get$I(i);
for (var j=i + 1; j < n; j++) {
var f=edges.get$I(j);
if (e.disjoint$org_openscience_cdk_graph_JumboPathGraph_PathEdge(f)) reduced.add$O(Clazz.new_($I$(9,1).c$$org_openscience_cdk_graph_JumboPathGraph_PathEdge$org_openscience_cdk_graph_JumboPathGraph_PathEdge$I,[e, f, x]));
}
}
return reduced;
}, p$1);

Clazz.newMeth(C$, 'remove$I$java_util_List',  function (x, cycles) {
var edges=p$1.remove$I.apply(this, [x]);
var reduced=p$1.combine$java_util_List$I.apply(this, [edges, x]);
for (var e, $e = reduced.iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
if (e.len$() <= this.limit) {
if (e.loop$()) cycles.add$O(e.path$());
 else p$1.add$org_openscience_cdk_graph_JumboPathGraph_PathEdge.apply(this, [e]);
}}
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_SET=Clazz.new_($I$(3,1).c$$I,[0]);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.JumboPathGraph, "PathEdge", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['u','v'],'O',['xs','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$I$I$java_util_BitSet',  function (u, v, xs) {
;C$.$init$.apply(this);
this.u=u;
this.v=v;
this.xs=xs;
}, 1);

Clazz.newMeth(C$, 'disjoint$org_openscience_cdk_graph_JumboPathGraph_PathEdge',  function (other) {
return !this.xs.intersects$java_util_BitSet(other.xs);
});

Clazz.newMeth(C$, 'loop$',  function () {
return this.u == this.v;
});

Clazz.newMeth(C$, 'either$',  function () {
return this.u;
});

Clazz.newMeth(C$, 'other$I',  function (x) {
return this.u == x ? this.v : this.u;
});

Clazz.newMeth(C$, 'path$',  function () {
return this.reconstruct$org_openscience_cdk_graph_JumboPathGraph_ArrayBuilder(Clazz.new_([this.len$()],$I$(1,1).c$$I).append$I(this.either$())).xs;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JumboPathGraph, "SimpleEdge", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.openscience.cdk.graph.JumboPathGraph','.PathEdge']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$I',  function (u, v) {
;C$.superclazz.c$$I$I$java_util_BitSet.apply(this,[u, v, $I$(2).EMPTY_SET]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'reconstruct$org_openscience_cdk_graph_JumboPathGraph_ArrayBuilder',  function (ab) {
return ab.append$I(this.other$I(ab.prev$()));
});

Clazz.newMeth(C$, 'len$',  function () {
return 2;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JumboPathGraph, "ReducedEdge", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.openscience.cdk.graph.JumboPathGraph','.PathEdge']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['e','org.openscience.cdk.graph.JumboPathGraph.PathEdge','+f']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_JumboPathGraph_PathEdge$org_openscience_cdk_graph_JumboPathGraph_PathEdge$I',  function (e, f, x) {
;C$.superclazz.c$$I$I$java_util_BitSet.apply(this,[e.other$I(x), f.other$I(x), C$.union$java_util_BitSet$java_util_BitSet$I(e.xs, f.xs, x)]);C$.$init$.apply(this);
this.e=e;
this.f=f;
}, 1);

Clazz.newMeth(C$, 'reconstruct$org_openscience_cdk_graph_JumboPathGraph_ArrayBuilder',  function (ab) {
return this.u == ab.prev$() ? this.f.reconstruct$org_openscience_cdk_graph_JumboPathGraph_ArrayBuilder(this.e.reconstruct$org_openscience_cdk_graph_JumboPathGraph_ArrayBuilder(ab)) : this.e.reconstruct$org_openscience_cdk_graph_JumboPathGraph_ArrayBuilder(this.f.reconstruct$org_openscience_cdk_graph_JumboPathGraph_ArrayBuilder(ab));
});

Clazz.newMeth(C$, 'len$',  function () {
return this.xs.cardinality$() + 2;
});

Clazz.newMeth(C$, 'union$java_util_BitSet$java_util_BitSet$I',  function (s, t, x) {
var u=s.clone$();
u.or$java_util_BitSet(t);
u.set$I(x);
return u;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JumboPathGraph, "ArrayBuilder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
},1);

C$.$fields$=[['I',['i'],'O',['xs','int[]']]]

Clazz.newMeth(C$, 'c$$I',  function (n) {
;C$.$init$.apply(this);
this.xs=Clazz.array(Integer.TYPE, [n]);
}, 1);

Clazz.newMeth(C$, 'append$I',  function (x) {
this.xs[this.i++]=x;
return this;
});

Clazz.newMeth(C$, 'prev$',  function () {
return this.xs[this.i - 1];
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
