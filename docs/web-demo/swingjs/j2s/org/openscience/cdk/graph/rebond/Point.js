(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph.rebond"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Point", null, null, [['org.openscience.cdk.graph.rebond.Bspt','org.openscience.cdk.graph.rebond.Bspt.Tuple']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['x','y','z']]]

Clazz.newMeth(C$, 'c$$D$D$D',  function (x, y, z) {
;C$.$init$.apply(this);
this.x=x;
this.y=y;
this.z=z;
}, 1);

Clazz.newMeth(C$, 'getDimValue$I',  function (dim) {
if (dim == 0) return this.x;
if (dim == 1) return this.y;
return this.z;
});

Clazz.newMeth(C$, 'toString',  function () {
return "<" + new Double(this.x).toString() + "," + new Double(this.y).toString() + "," + new Double(this.z).toString() + ">" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
