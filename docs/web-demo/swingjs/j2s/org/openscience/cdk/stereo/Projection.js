(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "Projection", null, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Fischer", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Haworth", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Chair", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:33 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
