(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'java.util.BitSet','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BitMatrix");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['max','n','m'],'O',['rows','java.util.BitSet[]','indices','int[]']]]

Clazz.newMeth(C$, 'c$$I$I',  function (columns, rows) {
;C$.$init$.apply(this);
this.n=columns;
this.max=rows;
this.rows=Clazz.array($I$(1), [rows]);
this.indices=Clazz.array(Integer.TYPE, [rows]);
}, 1);

Clazz.newMeth(C$, 'swap$I$I',  function (i, j) {
var row=this.rows[i];
var k=this.indices[i];
this.rows[i]=this.rows[j];
this.indices[i]=this.indices[j];
this.rows[j]=row;
this.indices[j]=k;
});

Clazz.newMeth(C$, 'rowIndex$I',  function (j) {
for (var i=0; i < this.indices.length; i++) {
if (this.indices[i] == j) return i;
}
return -1;
}, p$1);

Clazz.newMeth(C$, 'row$I',  function (j) {
return this.rows[p$1.rowIndex$I.apply(this, [j])];
});

Clazz.newMeth(C$, 'eliminated$I',  function (j) {
return this.row$I(j).isEmpty$();
});

Clazz.newMeth(C$, 'clear$',  function () {
this.m=0;
});

Clazz.newMeth(C$, 'add$java_util_BitSet',  function (row) {
if (this.m >= this.max) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["initialise matrix with more rows"]);
this.rows[this.m]=row;
this.indices[this.m]=this.m;
++this.m;
});

Clazz.newMeth(C$, 'eliminate$',  function () {
return p$1.eliminate$I$I.apply(this, [0, 0]);
});

Clazz.newMeth(C$, 'eliminate$I$I',  function (x, y) {
while (x < this.n && y < this.m ){
var i=this.indexOf$I$I(x, y);
if (i < 0) return p$1.eliminate$I$I.apply(this, [x + 1, y]);
if (i != y) this.swap$I$I(i, y);
for (var j=y + 1; j < this.m; j++) if (this.rows[j].get$I(x)) this.rows[j]=C$.xor$java_util_BitSet$java_util_BitSet(this.rows[j], this.rows[y]);

++y;
}
return y;
}, p$1);

Clazz.newMeth(C$, 'indexOf$I$I',  function (x, y) {
for (var j=y; j < this.m; j++) {
if (this.rows[j].get$I(x)) return j;
}
return -1;
});

Clazz.newMeth(C$, 'toString',  function () {
var sb=Clazz.new_([(4 + this.n) * this.m],$I$(2,1).c$$I);
for (var j=0; j < this.m; j++) {
sb.append$I(this.indices[j]).append$S(": ");
for (var i=0; i < this.n; i++) {
sb.append$C(this.rows[j].get$I(i) ? "1" : "-");
}
sb.append$C("\n");
}
return sb.toString();
});

Clazz.newMeth(C$, 'xor$java_util_BitSet$java_util_BitSet',  function (u, v) {
var w=u.clone$();
w.xor$java_util_BitSet(v);
return w;
}, 1);

Clazz.newMeth(C$, 'from$Iterable',  function (cycles) {
var rows=0;
var cols=0;
for (var c, $c = cycles.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (c.edgeVector$().length$() > cols) cols=c.edgeVector$().length$();
++rows;
}
var matrix=Clazz.new_(C$.c$$I$I,[cols, rows]);
for (var c, $c = cycles.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) matrix.add$java_util_BitSet(c.edgeVector$());

return matrix;
}, 1);

Clazz.newMeth(C$, 'from$Iterable$org_openscience_cdk_graph_InitialCycles_Cycle',  function (cycles, cycle) {
var rows=1;
var cols=cycle.edgeVector$().length$();
for (var c, $c = cycles.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if (c.edgeVector$().length$() > cols) cols=c.edgeVector$().length$();
++rows;
}
var matrix=Clazz.new_(C$.c$$I$I,[cols, rows]);
for (var c, $c = cycles.iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) matrix.add$java_util_BitSet(c.edgeVector$());

matrix.add$java_util_BitSet(cycle.edgeVector$());
return matrix;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
