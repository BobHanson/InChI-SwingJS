(function(){var P$=Clazz.newPackage("org.openscience.cdk.exception"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Intractable", null, 'org.openscience.cdk.exception.CDKException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$S',  function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'timeout$J',  function (t) {
return C$.timeout$S$J("Operation", t);
}, 1);

Clazz.newMeth(C$, 'timeout$S$J',  function (desc, t) {
return Clazz.new_(C$.c$$S,[desc + " did not finish after " + Long.$s(t) + " ms." ]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-12 17:49:11 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
