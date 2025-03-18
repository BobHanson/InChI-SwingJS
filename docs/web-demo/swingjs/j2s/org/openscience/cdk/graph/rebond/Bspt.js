(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph.rebond"),p$1={},I$=[[0,['org.openscience.cdk.graph.rebond.Bspt','.Node'],'Error',['org.openscience.cdk.graph.rebond.Bspt','.Leaf'],['org.openscience.cdk.graph.rebond.Bspt','.Tuple'],['org.openscience.cdk.graph.rebond.Bspt','.EnumerateAll'],['org.openscience.cdk.graph.rebond.Bspt','.EnumerateNear'],['org.openscience.cdk.graph.rebond.Bspt','.EnumerateSphere']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Bspt", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['EnumerateAll',0],['EnumerateNear',0],['EnumerateSphere',0],['Tuple',9],['Element',8],['Node',0],['Leaf',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['dimMax'],'O',['eleRoot','org.openscience.cdk.graph.rebond.Bspt.Element']]]

Clazz.newMeth(C$, 'c$$I',  function (dimMax) {
;C$.$init$.apply(this);
this.dimMax=dimMax;
this.eleRoot=Clazz.new_($I$(3,1),[this, null]);
}, 1);

Clazz.newMeth(C$, 'addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple',  function (tuple) {
if (!this.eleRoot.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple)) {
this.eleRoot=Clazz.new_($I$(1,1).c$$I$I$org_openscience_cdk_graph_rebond_Bspt_Leaf,[this, null, 0, this.dimMax, this.eleRoot]);
if (!this.eleRoot.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple)) throw Clazz.new_(["Bspt.addTuple() failed"],$I$(2,1).c$$S);
}});

Clazz.newMeth(C$, 'toString',  function () {
return this.eleRoot.toString();
});

Clazz.newMeth(C$, 'dump$',  function () {
this.eleRoot.dump$I(0);
});

Clazz.newMeth(C$, 'enumeration$',  function () {
return Clazz.new_($I$(5,1),[this, null]);
});

Clazz.newMeth(C$, 'enumNear$org_openscience_cdk_graph_rebond_Bspt_Tuple$D',  function (center, distance) {
return Clazz.new_($I$(6,1).c$$org_openscience_cdk_graph_rebond_Bspt_Tuple$D,[this, null, center, distance]);
});

Clazz.newMeth(C$, 'enumSphere$org_openscience_cdk_graph_rebond_Bspt_Tuple$D',  function (center, distance) {
return Clazz.new_($I$(7,1).c$$org_openscience_cdk_graph_rebond_Bspt_Tuple$D$Z,[this, null, center, distance, false]);
});

Clazz.newMeth(C$, 'enumHemiSphere$org_openscience_cdk_graph_rebond_Bspt_Tuple$D',  function (center, distance) {
return Clazz.new_($I$(7,1).c$$org_openscience_cdk_graph_rebond_Bspt_Tuple$D$Z,[this, null, center, distance, true]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bspt, "EnumerateAll", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['sp','i'],'O',['stack','org.openscience.cdk.graph.rebond.Bspt.Node[]','leaf','org.openscience.cdk.graph.rebond.Bspt.Leaf']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.stack=Clazz.array($I$(1), [64]);
this.sp=0;
var ele=this.b$['org.openscience.cdk.graph.rebond.Bspt'].eleRoot;
while (Clazz.instanceOf(ele, "org.openscience.cdk.graph.rebond.Bspt.Node")){
var node=ele;
if (this.sp == 64) throw Clazz.new_($I$(2,1).c$$S,["Bspt.EnumerateAll tree stack overflow"]);
this.stack[this.sp++]=node;
ele=node.eleLE;
}
this.leaf=ele;
this.i=0;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
return (this.i < this.leaf.count) || (this.sp > 0) ;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
if (this.i == this.leaf.count) {
var ele=this.stack[--this.sp].eleGE;
while (Clazz.instanceOf(ele, "org.openscience.cdk.graph.rebond.Bspt.Node")){
var node=ele;
this.stack[this.sp++]=node;
ele=node.eleLE;
}
this.leaf=ele;
this.i=0;
}return this.leaf.tuples[this.i++];
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bspt, "EnumerateNear", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['distance'],'I',['sp','i'],'O',['stack','org.openscience.cdk.graph.rebond.Bspt.Node[]','leaf','org.openscience.cdk.graph.rebond.Bspt.Leaf','center','org.openscience.cdk.graph.rebond.Bspt.Tuple']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_rebond_Bspt_Tuple$D',  function (center, distance) {
;C$.$init$.apply(this);
this.distance=distance;
this.center=center;
this.stack=Clazz.array($I$(1), [64]);
this.sp=0;
var ele=this.b$['org.openscience.cdk.graph.rebond.Bspt'].eleRoot;
while (Clazz.instanceOf(ele, "org.openscience.cdk.graph.rebond.Bspt.Node")){
var node=ele;
if (center.getDimValue$I(node.dim) - distance <= node.splitValue ) {
if (this.sp == 64) throw Clazz.new_($I$(2,1).c$$S,["Bspt.EnumerateNear tree stack overflow"]);
this.stack[this.sp++]=node;
ele=node.eleLE;
} else {
ele=node.eleGE;
}}
this.leaf=ele;
this.i=0;
}, 1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
if (this.i < this.leaf.count) return true;
if (this.sp == 0) return false;
var ele=this.stack[--this.sp];
while (Clazz.instanceOf(ele, "org.openscience.cdk.graph.rebond.Bspt.Node")){
var node=ele;
if (this.center.getDimValue$I(node.dim) + this.distance < node.splitValue ) {
if (this.sp == 0) return false;
ele=this.stack[--this.sp];
} else {
ele=node.eleGE;
while (Clazz.instanceOf(ele, "org.openscience.cdk.graph.rebond.Bspt.Node")){
var nodeLeft=ele;
this.stack[this.sp++]=nodeLeft;
ele=nodeLeft.eleLE;
}
}}
this.leaf=ele;
this.i=0;
return true;
});

Clazz.newMeth(C$, 'nextElement$',  function () {
return this.leaf.tuples[this.i++];
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bspt, "EnumerateSphere", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'java.util.Enumeration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['tHemisphere'],'D',['distance','distance2','foundDistance2'],'I',['sp','i'],'O',['stack','org.openscience.cdk.graph.rebond.Bspt.Node[]','leaf','org.openscience.cdk.graph.rebond.Bspt.Leaf','center','org.openscience.cdk.graph.rebond.Bspt.Tuple','centerValues','double[]']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_rebond_Bspt_Tuple$D$Z',  function (center, distance, tHemisphere) {
;C$.$init$.apply(this);
this.distance=distance;
this.distance2=distance * distance;
this.center=center;
this.tHemisphere=tHemisphere;
this.centerValues=Clazz.array(Double.TYPE, [this.b$['org.openscience.cdk.graph.rebond.Bspt'].dimMax]);
for (var dim=this.b$['org.openscience.cdk.graph.rebond.Bspt'].dimMax; --dim >= 0; ) this.centerValues[dim]=center.getDimValue$I(dim);

this.stack=Clazz.array($I$(1), [64]);
this.sp=0;
var ele=this.b$['org.openscience.cdk.graph.rebond.Bspt'].eleRoot;
while (Clazz.instanceOf(ele, "org.openscience.cdk.graph.rebond.Bspt.Node")){
var node=ele;
if (center.getDimValue$I(node.dim) - distance <= node.splitValue ) {
if (this.sp == 64) throw Clazz.new_($I$(2,1).c$$S,["Bspt.EnumerateSphere tree stack overflow"]);
this.stack[this.sp++]=node;
ele=node.eleLE;
} else {
ele=node.eleGE;
}}
this.leaf=ele;
this.i=0;
}, 1);

Clazz.newMeth(C$, 'isWithin$org_openscience_cdk_graph_rebond_Bspt_Tuple',  function (t) {
var dist2;
var distT;
distT=t.getDimValue$I(0) - this.centerValues[0];
if (this.tHemisphere && distT < 0  ) {
return false;
}dist2=distT * distT;
if (dist2 > this.distance2 ) {
return false;
}for (var dim=this.b$['org.openscience.cdk.graph.rebond.Bspt'].dimMax; --dim > 0; ) {
distT=t.getDimValue$I(dim) - this.centerValues[dim];
dist2+=distT * distT;
if (dist2 > this.distance2 ) {
return false;
}}
this.foundDistance2=dist2;
return true;
}, p$1);

Clazz.newMeth(C$, 'hasMoreElements$',  function () {
while (true){
for (; this.i < this.leaf.count; ++this.i) if (p$1.isWithin$org_openscience_cdk_graph_rebond_Bspt_Tuple.apply(this, [this.leaf.tuples[this.i]])) return true;

if (this.sp == 0) return false;
var ele=this.stack[--this.sp];
while (Clazz.instanceOf(ele, "org.openscience.cdk.graph.rebond.Bspt.Node")){
var node=ele;
if (this.center.getDimValue$I(node.dim) + this.distance < node.splitValue ) {
if (this.sp == 0) return false;
ele=this.stack[--this.sp];
} else {
ele=node.eleGE;
while (Clazz.instanceOf(ele, "org.openscience.cdk.graph.rebond.Bspt.Node")){
var nodeLeft=ele;
this.stack[this.sp++]=nodeLeft;
ele=nodeLeft.eleLE;
}
}}
this.leaf=ele;
this.i=0;
}
});

Clazz.newMeth(C$, 'nextElement$',  function () {
return this.leaf.tuples[this.i++];
});

Clazz.newMeth(C$, 'foundDistance2$',  function () {
return this.foundDistance2;
});

Clazz.newMeth(C$);
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Bspt, "Tuple", function(){
});
})()
;
(function(){/*i*/var C$=Clazz.newInterface(P$.Bspt, "Element", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bspt, "Node", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['org.openscience.cdk.graph.rebond.Bspt','org.openscience.cdk.graph.rebond.Bspt.Element']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['splitValue'],'I',['dim','dimMax'],'O',['eleLE','org.openscience.cdk.graph.rebond.Bspt.Element','+eleGE']]]

Clazz.newMeth(C$, 'c$$I$I$org_openscience_cdk_graph_rebond_Bspt_Leaf',  function (dim, dimMax, leafLE) {
;C$.$init$.apply(this);
this.eleLE=leafLE;
this.dim=dim;
this.dimMax=dimMax;
this.splitValue=leafLE.getSplitValue$I(dim);
this.eleGE=Clazz.new_($I$(3,1).c$$org_openscience_cdk_graph_rebond_Bspt_Leaf$I$D,[this, null, leafLE, dim, this.splitValue]);
}, 1);

Clazz.newMeth(C$, 'addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple',  function (tuple) {
if (tuple.getDimValue$I(this.dim) < this.splitValue ) {
if (this.eleLE.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple)) return true;
this.eleLE=Clazz.new_(C$.c$$I$I$org_openscience_cdk_graph_rebond_Bspt_Leaf,[this, null, (this.dim + 1) % this.dimMax, this.dimMax, this.eleLE]);
return this.eleLE.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple);
}if (tuple.getDimValue$I(this.dim) > this.splitValue ) {
if (this.eleGE.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple)) return true;
this.eleGE=Clazz.new_(C$.c$$I$I$org_openscience_cdk_graph_rebond_Bspt_Leaf,[this, null, (this.dim + 1) % this.dimMax, this.dimMax, this.eleGE]);
return this.eleGE.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple);
}if (this.eleLE.isLeafWithSpace$()) this.eleLE.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple);
 else if (this.eleGE.isLeafWithSpace$()) this.eleGE.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple);
 else if (Clazz.instanceOf(this.eleLE, "org.openscience.cdk.graph.rebond.Bspt.Node")) this.eleLE.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple);
 else if (Clazz.instanceOf(this.eleGE, "org.openscience.cdk.graph.rebond.Bspt.Node")) this.eleGE.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple);
 else {
this.eleLE=Clazz.new_(C$.c$$I$I$org_openscience_cdk_graph_rebond_Bspt_Leaf,[this, null, (this.dim + 1) % this.dimMax, this.dimMax, this.eleLE]);
return this.eleLE.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tuple);
}return true;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.eleLE.toString() + this.dim + ":" + new Double(this.splitValue).toString() + "\n" + this.eleGE.toString() ;
});

Clazz.newMeth(C$, 'dump$I',  function (level) {
System.out.println$S("");
this.eleLE.dump$I(level + 1);
for (var i=0; i < level; ++i) System.out.print$S("-");

System.out.println$S(">" + new Double(this.splitValue).toString());
this.eleGE.dump$I(level + 1);
});

Clazz.newMeth(C$, 'isLeafWithSpace$',  function () {
return false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Bspt, "Leaf", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['org.openscience.cdk.graph.rebond.Bspt','org.openscience.cdk.graph.rebond.Bspt.Element']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['count'],'O',['tuples','org.openscience.cdk.graph.rebond.Bspt.Tuple[]']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
this.count=0;
this.tuples=Clazz.array($I$(4), [4]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_graph_rebond_Bspt_Leaf$I$D',  function (leaf, dim, splitValue) {
C$.c$.apply(this, []);
for (var i=4; --i >= 0; ) {
var tuple=leaf.tuples[i];
var value=tuple.getDimValue$I(dim);
if (value > splitValue  || (value == splitValue  && ((i & 1) == 1) ) ) {
leaf.tuples[i]=null;
this.tuples[this.count++]=tuple;
}}
var dest=0;
for (var src=0; src < 4; ++src) if (leaf.tuples[src] != null ) leaf.tuples[dest++]=leaf.tuples[src];

leaf.count=dest;
if (this.count == 0) this.tuples[4]=null;
}, 1);

Clazz.newMeth(C$, 'getSplitValue$I',  function (dim) {
if (this.count != 4) this.tuples[4]=null;
return (this.tuples[0].getDimValue$I(dim) + this.tuples[3].getDimValue$I(dim)) / 2;
});

Clazz.newMeth(C$, 'toString',  function () {
return "leaf:" + this.count + "\n" ;
});

Clazz.newMeth(C$, 'addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple',  function (tuple) {
if (this.count == 4) return false;
this.tuples[this.count++]=tuple;
return true;
});

Clazz.newMeth(C$, 'dump$I',  function (level) {
for (var i=0; i < this.count; ++i) {
var t=this.tuples[i];
for (var j=0; j < level; ++j) System.out.print$S(".");

for (var dim=0; dim < this.b$['org.openscience.cdk.graph.rebond.Bspt'].dimMax - 1; ++dim) System.out.print$S("" + new Double(t.getDimValue$I(dim)).toString() + "," );

System.out.println$S("" + new Double(t.getDimValue$I(this.b$['org.openscience.cdk.graph.rebond.Bspt'].dimMax - 1)).toString());
}
});

Clazz.newMeth(C$, 'isLeafWithSpace$',  function () {
return this.count < 4;
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
