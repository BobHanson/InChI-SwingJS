(function(){var P$=Clazz.newPackage("java.awt.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TextEvent", null, 'java.awt.AWTEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$O$I',  function (source, id) {
;C$.superclazz.c$$O$I.apply(this,[source, id]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'paramString$',  function () {
var typeStr;
switch (this.id) {
case 900:
typeStr="TEXT_VALUE_CHANGED";
break;
default:
typeStr="unknown type";
}
return typeStr;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:24 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
