(function(){var P$=java.io,I$=[];
/*c*/var C$=Clazz.newClass(P$, "FilterOutputStream", null, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['out','java.io.OutputStream']]]

Clazz.newMeth(C$, 'c$$java_io_OutputStream',  function (out) {
Clazz.super_(C$, this);
this.out=out;
}, 1);

Clazz.newMeth(C$, 'write$I',  function (b) {
this.out.write$I(b);
});

Clazz.newMeth(C$, 'write$BA',  function (b) {
this.write$BA$I$I(b, 0, b.length);
});

Clazz.newMeth(C$, 'write$BA$I$I',  function (b, off, len) {
if ((off | len | (b.length - (len + off)) | (off + len) ) < 0) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
for (var i=0; i < len; i++) {
this.write$I(b[off + i]);
}
});

Clazz.newMeth(C$, 'flush$',  function () {
this.out.flush$();
});

Clazz.newMeth(C$, 'close$',  function () {
try {
var ostream=this.out;
try {
this.flush$();

}finally{/*res*/ostream&&ostream.close$&&ostream.close$();}
}finally{}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:34 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
