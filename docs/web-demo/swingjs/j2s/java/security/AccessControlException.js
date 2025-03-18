(function(){var P$=Clazz.newPackage("java.security"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AccessControlException", null, 'SecurityException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['perm','java.security.Permission']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_security_Permission',  function (s, p) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
this.perm=p;
}, 1);

Clazz.newMeth(C$, 'getPermission$',  function () {
return this.perm;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:59 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
