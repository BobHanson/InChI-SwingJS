(function(){var P$=Clazz.newPackage("java.awt"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FocusTraversalPolicy");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getInitialComponent$java_awt_Window',  function (window) {
if (window == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["window cannot be equal to null."]);
}var def=this.getDefaultComponent$java_awt_Container(window);
if (def == null  && window.isFocusableWindow$() ) {
def=window;
}return def;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:27:10 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
