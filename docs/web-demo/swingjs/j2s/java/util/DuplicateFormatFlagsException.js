(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "DuplicateFormatFlagsException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['flags']]]

Clazz.newMeth(C$, 'c$$S',  function (f) {
Clazz.super_(C$, this);
if (f == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.flags=f;
}, 1);

Clazz.newMeth(C$, 'getFlags$',  function () {
return this.flags;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return String.format$S$OA("Flags = \'%s\'", Clazz.array(java.lang.Object, -1, [this.flags]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:28:15 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
