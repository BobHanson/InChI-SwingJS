(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'swingjs.JSToolkit']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PointerInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['device','java.awt.GraphicsDevice','location','java.awt.Point']]]

Clazz.newMeth(C$, 'c$$java_awt_GraphicsDevice$java_awt_Point',  function (device, location) {
;C$.$init$.apply(this);
this.device=device;
this.location=location;
}, 1);

Clazz.newMeth(C$, 'getDevice$',  function () {
return this.device;
});

Clazz.newMeth(C$, 'getLocation$',  function () {
return $I$(1).getMouseLocation$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:16 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
