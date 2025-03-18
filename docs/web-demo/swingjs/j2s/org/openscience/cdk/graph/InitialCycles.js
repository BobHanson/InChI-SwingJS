(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'org.openscience.cdk.graph.InitialCycles','java.util.TreeMap','java.util.Objects','java.util.HashMap',['org.openscience.cdk.graph.InitialCycles','.Edge'],'java.util.Collections','java.util.TreeSet','java.util.BitSet','org.openscience.cdk.graph.ShortestPaths',['org.openscience.cdk.graph.InitialCycles','.OddCycle'],['org.openscience.cdk.graph.InitialCycles','.EvenCycle'],'java.util.Arrays']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InitialCycles", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Cycle',1032],['EvenCycle',0],['OddCycle',0],['Edge',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.cycles=Clazz.new_($I$(2,1));
},1);

C$.$fields$=[['Z',['biconnected'],'I',['nDeg2Vertices','limit'],'O',['graph','int[][]','ordering','int[]','cycles','java.util.Map','+edgeToIndex','edges','org.openscience.cdk.graph.InitialCycles.Edge[]']]]

Clazz.newMeth(C$, 'c$$IAA',  function (graph) {
C$.c$$IAA$I$Z.apply(this, [graph, graph.length, false]);
}, 1);

Clazz.newMeth(C$, 'c$$IAA$I',  function (graph, limit) {
C$.c$$IAA$I$Z.apply(this, [graph, limit, false]);
}, 1);

Clazz.newMeth(C$, 'c$$IAA$I$Z',  function (graph, limit, biconnected) {
;C$.$init$.apply(this);
this.graph=$I$(3).requireNonNull$O$S(graph, "no graph provided");
this.biconnected=biconnected;
this.limit=limit;
this.ordering=p$1.ordering$IAA.apply(this, [graph]);
this.edgeToIndex=Clazz.new_($I$(4,1).c$$I,[2 * graph.length]);
var n=graph.length;
for (var v=0; v < n; v++) {
for (var w, $w = 0, $$w = graph[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (w > v) {
var edge=Clazz.new_($I$(5,1).c$$I$I,[v, w]);
this.edgeToIndex.put$O$O(edge, Integer.valueOf$I(this.edgeToIndex.size$()));
}}
}
this.edges=Clazz.array($I$(5), [this.edgeToIndex.size$()]);
for (var e, $e = this.edgeToIndex.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) this.edges[(e.getValue$()).$c()]=e.getKey$();

p$1.compute.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'graph$',  function () {
return this.graph;
});

Clazz.newMeth(C$, 'lengths$',  function () {
return this.cycles.keySet$();
});

Clazz.newMeth(C$, 'cyclesOfLength$I',  function (length) {
return $I$(6,"unmodifiableSet$java_util_Set",[this.cycles.getOrDefault$O$O(Integer.valueOf$I(length), $I$(6).emptySet$())]);
});

Clazz.newMeth(C$, 'cycles$',  function () {
var res=Clazz.new_($I$(7,1));
for (var val, $val = this.cycles.values$().iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) res.addAll$java_util_Collection(val);

return $I$(6).unmodifiableSet$java_util_Set(res);
});

Clazz.newMeth(C$, 'numberOfCycles$',  function () {
var count=0;
for (var val, $val = this.cycles.values$().iterator$(); $val.hasNext$()&&((val=($val.next$())),1);) count+=val.size$();

return count;
});

Clazz.newMeth(C$, 'numberOfEdges$',  function () {
return this.edgeToIndex.size$();
});

Clazz.newMeth(C$, 'edge$I',  function (i) {
return this.edges[i];
});

Clazz.newMeth(C$, 'indexOfEdge$I$I',  function (u, v) {
return (this.edgeToIndex.get$O(Clazz.new_($I$(5,1).c$$I$I,[u, v]))).$c();
});

Clazz.newMeth(C$, 'toEdgeVector$IA',  function (path) {
var incidence=Clazz.new_([this.edgeToIndex.size$()],$I$(8,1).c$$I);
var len=path.length - 1;
for (var i=0; i < len; i++) {
incidence.set$I(this.indexOfEdge$I$I(path[i], path[i + 1]));
}
return incidence;
});

Clazz.newMeth(C$, 'compute',  function () {
var n=this.graph.length;
var s=Clazz.array(Integer.TYPE, [n]);
var sizeOfS;
var vertices=Clazz.array(Integer.TYPE, [n]);
for (var v=0; v < n; v++) {
vertices[this.ordering[v]]=v;
}
var first=this.biconnected && this.nDeg2Vertices < n  ? this.nDeg2Vertices : 2;
for (var i=first; i < n; i++) {
var r=vertices[i];
var pathsFromR=Clazz.new_([this.graph, null, r, (this.limit/2|0), this.ordering],$I$(9,1).c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I$I$IA);
for (var j=0; j < i; j++) {
var y=vertices[j];
if (!pathsFromR.isPrecedingPathTo$I(y)) continue;
sizeOfS=0;
for (var z, $z = 0, $$z = this.graph[y]; $z<$$z.length&&((z=($$z[$z])),1);$z++) {
if (!pathsFromR.isPrecedingPathTo$I(z)) continue;
var distToZ=pathsFromR.distanceTo$I(z);
var distToY=pathsFromR.distanceTo$I(y);
if (distToZ + 1 == distToY) {
s[sizeOfS++]=z;
} else if (distToZ == distToY && this.ordering[z] < this.ordering[y] ) {
var pathToY=pathsFromR.pathTo$I(y);
var pathToZ=pathsFromR.pathTo$I(z);
if (C$.singletonIntersect$IA$IA(pathToZ, pathToY)) {
var cycle=Clazz.new_($I$(10,1).c$$org_openscience_cdk_graph_ShortestPaths$IA$IA,[this, null, pathsFromR, pathToY, pathToZ]);
p$1.add$org_openscience_cdk_graph_InitialCycles_Cycle.apply(this, [cycle]);
}}}
for (var k=0; k < sizeOfS; k++) {
for (var l=k + 1; l < sizeOfS; l++) {
var pathToP=pathsFromR.pathTo$I(s[k]);
var pathToQ=pathsFromR.pathTo$I(s[l]);
if (C$.singletonIntersect$IA$IA(pathToP, pathToQ)) {
var cycle=Clazz.new_($I$(11,1).c$$org_openscience_cdk_graph_ShortestPaths$IA$I$IA,[this, null, pathsFromR, pathToP, y, pathToQ]);
p$1.add$org_openscience_cdk_graph_InitialCycles_Cycle.apply(this, [cycle]);
}}
}
}
}
}, p$1);

Clazz.newMeth(C$, 'add$org_openscience_cdk_graph_InitialCycles_Cycle',  function (cycle) {
if (cycle.length$() <= this.limit) this.cycles.computeIfAbsent$O$java_util_function_Function(Integer.valueOf$I(cycle.length$()), (P$.InitialCycles$lambda1$||(P$.InitialCycles$lambda1$=(((P$.InitialCycles$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "InitialCycles$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$Integer','apply$O'],  function (k) { return (Clazz.new_($I$(7,1)));});
})()
), Clazz.new_(P$.InitialCycles$lambda1.$init$,[this, null])))))).add$O(cycle);
}, p$1);

Clazz.newMeth(C$, 'ordering$IAA',  function (graph) {
var n=graph.length;
var order=Clazz.array(Integer.TYPE, [n]);
var count=Clazz.array(Integer.TYPE, [5]);
for (var ints, $ints = 0, $$ints = graph; $ints<$$ints.length&&((ints=($$ints[$ints])),1);$ints++) {
var key=ints.length + 1;
if (key >= count.length) count=$I$(12).copyOf$IA$I(count, key * 2);
++count[key];
}
for (var i=1; i < count.length; i++) {
count[i]+=count[i - 1];
}
for (var v=0; v < n; v++) {
order[v]=count[graph[v].length]++;
}
this.nDeg2Vertices=count[2];
return order;
}, p$1);

Clazz.newMeth(C$, 'singletonIntersect$IA$IA',  function (p, q) {
var n=p.length;
for (var i=1; i < n; i++) if (p[i] == q[i]) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'join$IA$IA',  function (pathToY, pathToZ) {
var path=$I$(12).copyOf$IA$I(pathToY, pathToY.length + pathToZ.length);
var j=path.length - 1;
for (var k, $k = 0, $$k = pathToZ; $k<$$k.length&&((k=($$k[$k])),1);$k++) {
path[j--]=k;
}
return path;
}, 1);

Clazz.newMeth(C$, 'join$IA$I$IA',  function (pathToP, y, pathToQ) {
var path=$I$(12).copyOf$IA$I(pathToP, 1 + pathToQ.length + pathToQ.length );
path[pathToP.length]=y;
var j=path.length - 1;
for (var k, $k = 0, $$k = pathToQ; $k<$$k.length&&((k=($$k[$k])),1);$k++) {
path[j--]=k;
}
return path;
}, 1);

Clazz.newMeth(C$, 'ofBiconnectedComponent$IAA',  function (graph) {
return C$.ofBiconnectedComponent$IAA$I(graph, graph.length);
}, 1);

Clazz.newMeth(C$, 'ofBiconnectedComponent$IAA$I',  function (graph, limit) {
return Clazz.new_(C$.c$$IAA$I$Z,[graph, limit, true]);
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.InitialCycles, "Cycle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['path','int[]','paths','org.openscience.cdk.graph.ShortestPaths','edgeVector','java.util.BitSet']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_ShortestPaths$IA',  function (paths, path) {
;C$.$init$.apply(this);
this.path=path;
this.paths=paths;
this.edgeVector=this.edges$IA(path);
}, 1);

Clazz.newMeth(C$, 'edgeVector$',  function () {
return this.edgeVector;
});

Clazz.newMeth(C$, 'path$',  function () {
return this.path;
});

Clazz.newMeth(C$, 'length$',  function () {
return this.path.length - 1;
});

Clazz.newMeth(C$, ['compareTo$org_openscience_cdk_graph_InitialCycles_Cycle','compareTo$O'],  function (that) {
var cmp=this.path.length - that.path.length;
if (cmp != 0) return cmp;
for (var i=0; i < this.path.length; i++) {
cmp=Integer.compare$I$I(this.path[i], that.path[i]);
if (cmp != 0) return cmp;
}
return 0;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.InitialCycles, "EvenCycle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.cdk.graph.InitialCycles','.Cycle']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['p','q','y']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_ShortestPaths$IA$I$IA',  function (paths, pathToP, y, pathToQ) {
;C$.superclazz.c$$org_openscience_cdk_graph_ShortestPaths$IA.apply(this,[paths, $I$(1).join$IA$I$IA(pathToP, y, pathToQ)]);C$.$init$.apply(this);
this.p=pathToP[pathToP.length - 1];
this.q=pathToQ[pathToQ.length - 1];
this.y=y;
}, 1);

Clazz.newMeth(C$, 'edges$IA',  function (path) {
return this.b$['org.openscience.cdk.graph.InitialCycles'].toEdgeVector$IA.apply(this.b$['org.openscience.cdk.graph.InitialCycles'], [path]);
});

Clazz.newMeth(C$, 'family$',  function () {
var pathsToP=this.paths.pathsTo$I(this.p);
var pathsToQ=this.paths.pathsTo$I(this.q);
var paths=Clazz.array(Integer.TYPE, [this.sizeOfFamily$(), 0]);
var i=0;
for (var pathToP, $pathToP = 0, $$pathToP = pathsToP; $pathToP<$$pathToP.length&&((pathToP=($$pathToP[$pathToP])),1);$pathToP++) {
for (var pathToQ, $pathToQ = 0, $$pathToQ = pathsToQ; $pathToQ<$$pathToQ.length&&((pathToQ=($$pathToQ[$pathToQ])),1);$pathToQ++) {
paths[i++]=$I$(1).join$IA$I$IA(pathToP, this.y, pathToQ);
}
}
return paths;
});

Clazz.newMeth(C$, 'sizeOfFamily$',  function () {
return this.paths.nPathsTo$I(this.p) * this.paths.nPathsTo$I(this.q);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.InitialCycles, "OddCycle", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, ['org.openscience.cdk.graph.InitialCycles','.Cycle']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['y','z']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_ShortestPaths$IA$IA',  function (paths, pathToY, pathToZ) {
;C$.superclazz.c$$org_openscience_cdk_graph_ShortestPaths$IA.apply(this,[paths, $I$(1).join$IA$IA(pathToY, pathToZ)]);C$.$init$.apply(this);
this.y=pathToY[pathToY.length - 1];
this.z=pathToZ[pathToY.length - 1];
}, 1);

Clazz.newMeth(C$, 'edges$IA',  function (path) {
return this.b$['org.openscience.cdk.graph.InitialCycles'].toEdgeVector$IA.apply(this.b$['org.openscience.cdk.graph.InitialCycles'], [path]);
});

Clazz.newMeth(C$, 'family$',  function () {
var pathsToY=this.paths.pathsTo$I(this.y);
var pathsToZ=this.paths.pathsTo$I(this.z);
var paths=Clazz.array(Integer.TYPE, [this.sizeOfFamily$(), 0]);
var i=0;
for (var pathToY, $pathToY = 0, $$pathToY = pathsToY; $pathToY<$$pathToY.length&&((pathToY=($$pathToY[$pathToY])),1);$pathToY++) {
for (var pathToZ, $pathToZ = 0, $$pathToZ = pathsToZ; $pathToZ<$$pathToZ.length&&((pathToZ=($$pathToZ[$pathToZ])),1);$pathToZ++) {
paths[i++]=$I$(1).join$IA$IA(pathToY, pathToZ);
}
}
return paths;
});

Clazz.newMeth(C$, 'sizeOfFamily$',  function () {
return this.paths.nPathsTo$I(this.y) * this.paths.nPathsTo$I(this.z);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.InitialCycles, "Edge", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['v','w']]]

Clazz.newMeth(C$, 'c$$I$I',  function (v, w) {
;C$.$init$.apply(this);
this.v=v;
this.w=w;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (!(Clazz.instanceOf(o, "org.openscience.cdk.graph.InitialCycles.Edge"))) return false;
var that=o;
return ((this.v == that.v && this.w == that.w ) || (this.v == that.w && this.w == that.v ) );
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.v ^ this.w;
});

Clazz.newMeth(C$, 'toString',  function () {
return "{" + this.v + ", " + this.w + "}" ;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
