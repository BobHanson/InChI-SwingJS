(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'java.util.Arrays','org.openscience.cdk.graph.GraphUtil',['org.openscience.cdk.graph.ShortestPaths','.Route'],['org.openscience.cdk.graph.ShortestPaths','.Source'],['org.openscience.cdk.graph.ShortestPaths','.SequentialRoute'],['org.openscience.cdk.graph.ShortestPaths','.Branch'],'org.openscience.cdk.interfaces.IAtom']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ShortestPaths", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Route',10],['Source',10],['SequentialRoute',2],['Branch',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['start','limit'],'O',['routeTo','org.openscience.cdk.graph.ShortestPaths.Route[]','distTo','int[]','+nPathsTo','precedes','boolean[]','container','org.openscience.cdk.interfaces.IAtomContainer']]
,['O',['EMPTY_PATH','int[]','EMPTY_PATHS','int[][]']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (container, start) {
C$.c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I.apply(this, [$I$(2).toAdjList$org_openscience_cdk_interfaces_IAtomContainer(container), container, container.indexOf$org_openscience_cdk_interfaces_IAtom(start)]);
}, 1);

Clazz.newMeth(C$, 'c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I',  function (adjacent, container, start) {
C$.c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I$IA.apply(this, [adjacent, container, start, null]);
}, 1);

Clazz.newMeth(C$, 'c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I$IA',  function (adjacent, container, start, ordering) {
C$.c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I$I$IA.apply(this, [adjacent, container, start, adjacent.length, ordering]);
}, 1);

Clazz.newMeth(C$, 'c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I$I$IA',  function (adjacent, container, start, limit, ordering) {
;C$.$init$.apply(this);
var n=adjacent.length;
this.container=container;
this.start=start;
this.limit=limit;
this.distTo=Clazz.array(Integer.TYPE, [n]);
this.routeTo=Clazz.array($I$(3), [n]);
this.nPathsTo=Clazz.array(Integer.TYPE, [n]);
this.precedes=Clazz.array(Boolean.TYPE, [n]);
if (n == 0) return;
if (start == -1) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["invalid vertex start - atom not found container"]);
for (var i=0; i < n; i++) {
this.distTo[i]=2147483647;
}
this.distTo[start]=0;
this.routeTo[start]=Clazz.new_($I$(4,1).c$$I,[start]);
this.nPathsTo[start]=1;
this.precedes[start]=true;
if (ordering != null ) {
p$1.compute$IAA$IA.apply(this, [adjacent, ordering]);
} else {
p$1.compute$IAA.apply(this, [adjacent]);
}}, 1);

Clazz.newMeth(C$, 'compute$IAA',  function (adjacent) {
var queue=Clazz.array(Integer.TYPE, [adjacent.length]);
queue[0]=this.start;
var n=1;
for (var i=0; i < n; i++) {
var v=queue[i];
var dist=this.distTo[v] + 1;
for (var w, $w = 0, $$w = adjacent[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (dist > this.limit) continue;
if (dist < this.distTo[w]) {
this.distTo[w]=dist;
this.routeTo[w]=Clazz.new_($I$(5,1).c$$org_openscience_cdk_graph_ShortestPaths_Route$I,[this, null, this.routeTo[v], w]);
this.nPathsTo[w]=this.nPathsTo[v];
queue[n++]=w;
} else if (this.distTo[w] == dist) {
this.routeTo[w]=Clazz.new_([this, null, this.routeTo[w], Clazz.new_($I$(5,1).c$$org_openscience_cdk_graph_ShortestPaths_Route$I,[this, null, this.routeTo[v], w])],$I$(6,1).c$$org_openscience_cdk_graph_ShortestPaths_Route$org_openscience_cdk_graph_ShortestPaths_Route);
this.nPathsTo[w]+=this.nPathsTo[v];
}}
}
}, p$1);

Clazz.newMeth(C$, 'compute$IAA$IA',  function (adjacent, ordering) {
var queue=Clazz.array(Integer.TYPE, [adjacent.length]);
queue[0]=this.start;
var n=1;
for (var i=0; i < n; i++) {
var v=queue[i];
var dist=this.distTo[v] + 1;
for (var w, $w = 0, $$w = adjacent[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (dist < this.distTo[w]) {
this.distTo[w]=dist;
this.routeTo[w]=Clazz.new_($I$(5,1).c$$org_openscience_cdk_graph_ShortestPaths_Route$I,[this, null, this.routeTo[v], w]);
this.nPathsTo[w]=this.nPathsTo[v];
this.precedes[w]=this.precedes[v] && ordering[w] < ordering[this.start] ;
queue[n++]=w;
} else if (this.distTo[w] == dist) {
if (this.precedes[v] && ordering[w] < ordering[this.start] ) {
if (this.precedes[w]) {
this.routeTo[w]=Clazz.new_([this, null, this.routeTo[w], Clazz.new_($I$(5,1).c$$org_openscience_cdk_graph_ShortestPaths_Route$I,[this, null, this.routeTo[v], w])],$I$(6,1).c$$org_openscience_cdk_graph_ShortestPaths_Route$org_openscience_cdk_graph_ShortestPaths_Route);
this.nPathsTo[w]+=this.nPathsTo[v];
} else {
this.precedes[w]=true;
this.routeTo[w]=Clazz.new_($I$(5,1).c$$org_openscience_cdk_graph_ShortestPaths_Route$I,[this, null, this.routeTo[v], w]);
this.nPathsTo[w]=this.nPathsTo[v];
}}}}
}
}, p$1);

Clazz.newMeth(C$, 'pathTo$I',  function (end) {
if (end < 0 || end >= this.routeTo.length ) return C$.EMPTY_PATH;
return this.routeTo[end] != null  ? this.routeTo[end].toPath$I(this.distTo[end] + 1) : C$.EMPTY_PATH;
});

Clazz.newMeth(C$, 'pathTo$org_openscience_cdk_interfaces_IAtom',  function (end) {
return this.pathTo$I(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(end));
});

Clazz.newMeth(C$, 'isPrecedingPathTo$I',  function (end) {
return (end >= 0 && end < this.routeTo.length ) && this.precedes[end] ;
});

Clazz.newMeth(C$, 'pathsTo$I',  function (end) {
if (end < 0 || end >= this.routeTo.length ) return C$.EMPTY_PATHS;
return this.routeTo[end] != null  ? this.routeTo[end].toPaths$I(this.distTo[end] + 1) : C$.EMPTY_PATHS;
});

Clazz.newMeth(C$, 'pathsTo$org_openscience_cdk_interfaces_IAtom',  function (end) {
return this.pathsTo$I(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(end));
});

Clazz.newMeth(C$, 'atomsTo$I',  function (end) {
var path=this.pathTo$I(end);
var atoms=Clazz.array($I$(7), [path.length]);
for (var i=0, n=path.length; i < n; i++) atoms[i]=this.container.getAtom$I(path[i]);

return atoms;
});

Clazz.newMeth(C$, 'atomsTo$org_openscience_cdk_interfaces_IAtom',  function (end) {
return this.atomsTo$I(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(end));
});

Clazz.newMeth(C$, 'nPathsTo$I',  function (end) {
return (end < 0 || end >= this.nPathsTo.length ) ? 0 : this.nPathsTo[end];
});

Clazz.newMeth(C$, 'nPathsTo$org_openscience_cdk_interfaces_IAtom',  function (end) {
return this.nPathsTo$I(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(end));
});

Clazz.newMeth(C$, 'distanceTo$I',  function (end) {
return (end < 0 || end >= this.nPathsTo.length ) ? 2147483647 : this.distTo[end];
});

Clazz.newMeth(C$, 'distanceTo$org_openscience_cdk_interfaces_IAtom',  function (end) {
return this.distanceTo$I(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(end));
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_PATH=Clazz.array(Integer.TYPE, [0]);
C$.EMPTY_PATHS=Clazz.array(Integer.TYPE, [0, null]);
};
;
(function(){/*i*/var C$=Clazz.newInterface(P$.ShortestPaths, "Route", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ShortestPaths, "Source", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, [['org.openscience.cdk.graph.ShortestPaths','org.openscience.cdk.graph.ShortestPaths.Route']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['v']]]

Clazz.newMeth(C$, 'c$$I',  function (v) {
;C$.$init$.apply(this);
this.v=v;
}, 1);

Clazz.newMeth(C$, 'toPaths$I',  function (n) {
return Clazz.array(Integer.TYPE, -2, [this.toPath$I(n)]);
});

Clazz.newMeth(C$, 'toPath$I',  function (n) {
var path=Clazz.array(Integer.TYPE, [n]);
path[0]=this.v;
return path;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ShortestPaths, "SequentialRoute", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['org.openscience.cdk.graph.ShortestPaths','org.openscience.cdk.graph.ShortestPaths.Route']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['v'],'O',['parent','org.openscience.cdk.graph.ShortestPaths.Route']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_ShortestPaths_Route$I',  function (parent, v) {
;C$.$init$.apply(this);
this.v=v;
this.parent=parent;
}, 1);

Clazz.newMeth(C$, 'toPaths$I',  function (n) {
var paths=this.parent.toPaths$I(n);
var i=this.b$['org.openscience.cdk.graph.ShortestPaths'].distTo[this.v];
for (var path, $path = 0, $$path = paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) path[i]=this.v;

return paths;
});

Clazz.newMeth(C$, 'toPath$I',  function (n) {
var path=this.parent.toPath$I(n);
path[this.b$['org.openscience.cdk.graph.ShortestPaths'].distTo[this.v]]=this.v;
return path;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ShortestPaths, "Branch", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['org.openscience.cdk.graph.ShortestPaths','org.openscience.cdk.graph.ShortestPaths.Route']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['left','org.openscience.cdk.graph.ShortestPaths.Route','+right']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_ShortestPaths_Route$org_openscience_cdk_graph_ShortestPaths_Route',  function (left, right) {
;C$.$init$.apply(this);
this.left=left;
this.right=right;
}, 1);

Clazz.newMeth(C$, 'toPaths$I',  function (n) {
var leftPaths=this.left.toPaths$I(n);
var rightPaths=this.right.toPaths$I(n);
var paths=$I$(1).copyOf$OA$I(leftPaths, leftPaths.length + rightPaths.length);
System.arraycopy$O$I$O$I$I(rightPaths, 0, paths, leftPaths.length, rightPaths.length);
return paths;
});

Clazz.newMeth(C$, 'toPath$I',  function (n) {
return this.left.toPath$I(n);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
