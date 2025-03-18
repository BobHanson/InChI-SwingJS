(function(){var P$=java.io,I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionalDataException", null, 'java.io.ObjectStreamException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['eof'],'I',['length']]]

Clazz.newMeth(C$, 'c$$I',  function (len) {
Clazz.super_(C$, this);
this.eof=false;
this.length=len;
}, 1);

Clazz.newMeth(C$, 'c$$Z',  function (end) {
Clazz.super_(C$, this);
this.length=0;
this.eof=end;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:36 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
