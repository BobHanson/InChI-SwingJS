(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.parameter"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractGeneratorParameter", null, null, 'org.openscience.cdk.renderer.generators.IGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['parameterSetting','<T>']]]

Clazz.newMeth(C$, 'setValue$O',  function (value) {
this.parameterSetting=value;
});

Clazz.newMeth(C$, 'getValue$',  function () {
if (this.parameterSetting == null ) return this.getDefault$();
 else return this.parameterSetting;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:34 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
