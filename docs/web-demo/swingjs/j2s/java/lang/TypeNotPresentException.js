(function(){var P$=java.lang,I$=[];
/*c*/var C$=Clazz.newClass(P$, "TypeNotPresentException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['typeName']]]

Clazz.newMeth(C$, 'c$$S$Throwable',  function (typeName, cause) {
;C$.superclazz.c$$S$Throwable.apply(this,["Type " + typeName + " not present" , cause]);C$.$init$.apply(this);
this.typeName=typeName;
}, 1);

Clazz.newMeth(C$, 'typeName$',  function () {
return this.typeName;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:42 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
