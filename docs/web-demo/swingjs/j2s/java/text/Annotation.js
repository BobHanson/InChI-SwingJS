(function(){var P$=Clazz.newPackage("java.text"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Annotation");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['value','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O',  function (value) {
;C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'getValue$',  function () {
return this.value;
});

Clazz.newMeth(C$, 'toString',  function () {
return this.getClass$().getName$() + "[value=" + this.value + "]" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v5');//Created 2025-03-05 22:16:01 Java2ScriptVisitor version 5.0.1-v5 net.sf.j2s.core.jar version 5.0.1-v5
