(function(){var P$=Clazz.newPackage("java.nio.file.spi"),I$=[[0,'RuntimePermission']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FileTypeDetector");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'checkPermission$',  function () {
var sm=System.getSecurityManager$();
if (sm != null ) sm.checkPermission$java_security_Permission(Clazz.new_($I$(1,1).c$$S,["fileTypeDetector"]));
return null;
}, 1);

Clazz.newMeth(C$, 'c$$Void',  function (ignore) {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$',  function () {
C$.c$$Void.apply(this, [C$.checkPermission$()]);
}, 1);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:59 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
