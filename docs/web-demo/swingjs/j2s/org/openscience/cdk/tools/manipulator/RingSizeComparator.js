(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RingSizeComparator", null, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['sortOrder']]]

Clazz.newMeth(C$, 'c$$I',  function (order) {
;C$.$init$.apply(this);
this.sortOrder=order;
}, 1);

Clazz.newMeth(C$, ['compare$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_interfaces_IRing','compare$O$O'],  function (object1, object2) {
var size1=object1.getAtomCount$();
var size2=object2.getAtomCount$();
if (size1 == size2) return 0;
if (size1 > size2 && this.sortOrder == 2 ) {
return 1;
}if (size1 > size2 && this.sortOrder == 1 ) {
return -1;
}if (size1 < size2 && this.sortOrder == 2 ) {
return -1;
}if (size1 < size2 && this.sortOrder == 1 ) {
return 1;
}return 0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
