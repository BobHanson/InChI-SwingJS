(function(){var P$=Clazz.newPackage("java.util.prefs"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "NodeChangeEvent", null, 'java.util.EventObject');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['child','java.util.prefs.Preferences']]]

Clazz.newMeth(C$, 'c$$java_util_prefs_Preferences$java_util_prefs_Preferences',  function (parent, child) {
;C$.superclazz.c$$O.apply(this,[parent]);C$.$init$.apply(this);
this.child=child;
}, 1);

Clazz.newMeth(C$, 'getParent$',  function () {
return this.getSource$();
});

Clazz.newMeth(C$, 'getChild$',  function () {
return this.child;
});

Clazz.newMeth(C$, 'writeObject$java_io_ObjectOutputStream',  function (out) {
throw Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["Not serializable."]);
}, p$1);

Clazz.newMeth(C$, 'readObject$java_io_ObjectInputStream',  function ($in) {
throw Clazz.new_(Clazz.load('java.io.NotSerializableException').c$$S,["Not serializable."]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:28:34 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
