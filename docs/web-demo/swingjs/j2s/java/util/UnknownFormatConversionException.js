(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnknownFormatConversionException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['s']]]

Clazz.newMeth(C$, 'c$$S',  function (s) {
Clazz.super_(C$, this);
if (s == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.s=s;
}, 1);

Clazz.newMeth(C$, 'getConversion$',  function () {
return this.s;
});

Clazz.newMeth(C$, 'getMessage$',  function () {
return String.format$S$OA("Conversion = \'%s\'", Clazz.array(java.lang.Object, -1, [this.s]));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:28:23 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
