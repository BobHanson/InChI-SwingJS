(function(){var P$=Clazz.newPackage("java.net"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PasswordAuthentication");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['userName'],'O',['password','char[]']]]

Clazz.newMeth(C$, 'c$$S$CA',  function (userName, password) {
;C$.$init$.apply(this);
this.userName=userName;
this.password=password.clone$();
}, 1);

Clazz.newMeth(C$, 'getUserName$',  function () {
return this.userName;
});

Clazz.newMeth(C$, 'getPassword$',  function () {
return this.password;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:46 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
