(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "MissingResourceException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['className','key']]]

Clazz.newMeth(C$, 'c$$S$S$S',  function (s, className, key) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
this.className=className;
this.key=key;
}, 1);

Clazz.newMeth(C$, 'c$$S$S$S$Throwable',  function (message, className, key, cause) {
;C$.superclazz.c$$S$Throwable.apply(this,[message, cause]);C$.$init$.apply(this);
this.className=className;
this.key=key;
}, 1);

Clazz.newMeth(C$, 'getClassName$',  function () {
return this.className;
});

Clazz.newMeth(C$, 'getKey$',  function () {
return this.key;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:28:19 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
