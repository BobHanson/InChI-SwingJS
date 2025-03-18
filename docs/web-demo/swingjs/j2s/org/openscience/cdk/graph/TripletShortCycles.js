(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},p$2={},I$=[[0,'org.openscience.cdk.graph.TripletShortCycles','java.util.Arrays','java.util.TreeSet',['org.openscience.cdk.graph.TripletShortCycles','.Path'],'org.openscience.cdk.graph.ShortestPaths']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TripletShortCycles", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Path',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.basis=Clazz.new_($I$(3,1));
},1);

C$.$fields$=[['Z',['canonical'],'O',['graph','int[][]','basis','java.util.Set']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_MinimumCycleBasis$Z',  function (mcb, canonical) {
;C$.$init$.apply(this);
this.graph=C$.copy$IAA(mcb.graph);
this.canonical=canonical;
for (var path, $path = 0, $$path = mcb.paths$(); $path<$$path.length&&((path=($$path[$path])),1);$path++) this.basis.add$O(Clazz.new_([$I$(2).copyOf$IA$I(path, path.length - 1)],$I$(4,1).c$$IA));

var ord=this.graph.length;
var nCycles=C$.nCycles$Iterable$I(this.basis, ord);
for (var v=0; v < ord; v++) {
if (nCycles[v] > 1) p$2.findTriple$I.apply(this, [v]);
}
}, 1);

Clazz.newMeth(C$, 'paths$',  function () {
var i=0;
var paths=Clazz.array(Integer.TYPE, [this.size$(), null]);
for (var path, $path = this.basis.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) paths[i++]=p$1.toArray.apply(path, []);

return paths;
});

Clazz.newMeth(C$, 'size$',  function () {
return this.basis.size$();
});

Clazz.newMeth(C$, 'findTriple$I',  function (v) {
var ws=this.graph[v];
var deg=ws.length;
p$2.disconnect$IA$I.apply(this, [ws, v]);
for (var i=0; i < deg; i++) {
var sp=Clazz.new_($I$(5,1).c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I,[this.graph, null, ws[i]]);
for (var j=i + 1; j < deg; j++) {
if (this.canonical && p$2.exists$I$I$I.apply(this, [ws[i], v, ws[j]]) ) continue;
if (sp.nPathsTo$I(ws[j]) > 0) {
var paths=this.canonical ? Clazz.array(Integer.TYPE, -2, [sp.pathTo$I(ws[j])]) : sp.pathsTo$I(ws[j]);
for (var path, $path = 0, $$path = paths; $path<$$path.length&&((path=($$path[$path])),1);$path++) this.basis.add$O(Clazz.new_([C$.append$IA$I(path, v)],$I$(4,1).c$$IA));

}}
}
p$2.reconnect$IA$I.apply(this, [ws, v]);
}, p$2);

Clazz.newMeth(C$, 'exists$I$I$I',  function (u, v, w) {
for (var path, $path = this.basis.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
if (p$1.contains$I$I$I.apply(path, [u, v, w])) return true;
}
return false;
}, p$2);

Clazz.newMeth(C$, 'disconnect$IA$I',  function (ws, v) {
for (var w, $w = 0, $$w = ws; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var deg=this.graph[w].length;
for (var i=0; i < deg; i++) {
if (this.graph[w][i] == v) this.graph[w][i]=w;
}
}
}, p$2);

Clazz.newMeth(C$, 'reconnect$IA$I',  function (ws, v) {
for (var w, $w = 0, $$w = ws; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var deg=this.graph[w].length;
for (var i=0; i < deg; i++) {
if (this.graph[w][i] == w) this.graph[w][i]=v;
}
}
}, p$2);

Clazz.newMeth(C$, 'append$IA$I',  function (p, v) {
var q=$I$(2).copyOf$IA$I(p, p.length + 1);
q[p.length]=v;
return q;
}, 1);

Clazz.newMeth(C$, 'nCycles$Iterable$I',  function (basis, ord) {
var nCycles=Clazz.array(Integer.TYPE, [ord]);
for (var path, $path = basis.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) for (var v, $v = 0, $$v = path.vertices; $v<$$v.length&&((v=($$v[$v])),1);$v++) ++nCycles[v];


return nCycles;
}, 1);

Clazz.newMeth(C$, 'lexicographic$IA',  function (p) {
var off=C$.min$IA(p);
var len=p.length;
var rev=p[(off + 1) % len] > p[(len + off - 1) % len];
var q=Clazz.array(Integer.TYPE, [len]);
if (rev) {
for (var i=0; i < len; i++) q[(len - i) % len]=p[(off + i) % len];

} else {
for (var i=0; i < len; i++) q[i]=p[(off + i) % len];

}return q;
}, 1);

Clazz.newMeth(C$, 'min$IA',  function (xs) {
var min=0;
for (var i=0; i < xs.length; i++) {
if (xs[i] < xs[min]) min=i;
}
return min;
}, 1);

Clazz.newMeth(C$, 'copy$IAA',  function (g) {
var ord=g.length;
var h=Clazz.array(Integer.TYPE, [ord, null]);
for (var v=0; v < ord; v++) h[v]=$I$(2).copyOf$IA$I(g[v], g[v].length);

return h;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.TripletShortCycles, "Path", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Comparable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['vertices','int[]']]]

Clazz.newMeth(C$, 'c$$IA',  function (vertices) {
;C$.$init$.apply(this);
this.vertices=$I$(1).lexicographic$IA(vertices);
}, 1);

Clazz.newMeth(C$, 'contains$I$I$I',  function (u, v, w) {
var len=this.vertices.length;
for (var i=0; i < len; i++) {
if (this.vertices[i] == v) {
var next=this.vertices[(i + 1) % len];
var prev=this.vertices[(len + i - 1) % len];
return (prev == u && next == w ) || (prev == w && next == u ) ;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'len',  function () {
return this.vertices.length;
}, p$1);

Clazz.newMeth(C$, 'toArray',  function () {
var p=$I$(2,"copyOf$IA$I",[this.vertices, p$1.len.apply(this, []) + 1]);
p[p$1.len.apply(this, [])]=p[0];
return p;
}, p$1);

Clazz.newMeth(C$, ['compareTo$org_openscience_cdk_graph_TripletShortCycles_Path','compareTo$O'],  function (that) {
if (p$1.len.apply(this, []) > p$1.len.apply(that, [])) return 1;
if (p$1.len.apply(this, []) < p$1.len.apply(that, [])) return -1;
for (var i=0; i < p$1.len.apply(this, []); i++) {
if (this.vertices[i] > that.vertices[i]) return 1;
if (this.vertices[i] < that.vertices[i]) return -1;
}
return 0;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
