(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PrivilegedActionException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['exception','Exception']]]

Clazz.newMeth(C$, 'c$$Exception',  function (exception) {
;C$.superclazz.c$$Throwable.apply(this,[null]);C$.$init$.apply(this);
this.exception=exception;
}, 1);

Clazz.newMeth(C$, 'getException$',  function () {
return this.exception;
});

Clazz.newMeth(C$, 'getCause$',  function () {
return this.exception;
});

Clazz.newMeth(C$, 'toString',  function () {
var s=this.getClass$().getName$();
return (this.exception != null ) ? (s + ": " + this.exception.toString() ) : s;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v5');//Created 2025-03-05 22:15:58 Java2ScriptVisitor version 5.0.1-v5 net.sf.j2s.core.jar version 5.0.1-v5
