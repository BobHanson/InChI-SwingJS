(function(){var P$=java.lang,I$=[];
/*c*/var C$=Clazz.newClass(P$, "String9");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.coder=($b$[0] = 0, $b$[0]);
},1);

C$.$fields$=[['B',['coder']]
,['Z',['COMPACT_STRINGS']]]

Clazz.newMeth(C$, 'checkIndex$I$I',  function (index, length) {
if (index < 0 || index >= length ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["index " + index]);
}}, 1);

Clazz.newMeth(C$, 'checkOffset$I$I',  function (offset, length) {
if (offset < 0 || offset > length ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["offset " + offset + ",length " + length ]);
}}, 1);

Clazz.newMeth(C$, 'checkBoundsOffCount$I$I$I',  function (offset, count, length) {
if (offset < 0 || count < 0  || offset > length - count ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["offset " + offset + ", count " + count + ", length " + length ]);
}}, 1);

C$.$static$=function(){C$.$static$=0;
{
C$.COMPACT_STRINGS=true;
};
};
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:40 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
