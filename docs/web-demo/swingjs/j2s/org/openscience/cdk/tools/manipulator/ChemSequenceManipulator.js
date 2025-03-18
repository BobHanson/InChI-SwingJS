(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.tools.manipulator.ChemModelManipulator','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChemSequenceManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAtomCount$org_openscience_cdk_interfaces_IChemSequence',  function (sequence) {
var count=0;
for (var i=0; i < sequence.getChemModelCount$(); i++) {
count+=$I$(1,"getAtomCount$org_openscience_cdk_interfaces_IChemModel",[sequence.getChemModel$I(i)]);
}
return count;
}, 1);

Clazz.newMeth(C$, 'getBondCount$org_openscience_cdk_interfaces_IChemSequence',  function (sequence) {
var count=0;
for (var i=0; i < sequence.getChemModelCount$(); i++) {
count+=$I$(1,"getBondCount$org_openscience_cdk_interfaces_IChemModel",[sequence.getChemModel$I(i)]);
}
return count;
}, 1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IChemSequence',  function (sequence) {
var acList=Clazz.new_($I$(2,1));
for (var model, $model = sequence.chemModels$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
acList.addAll$java_util_Collection($I$(1).getAllAtomContainers$org_openscience_cdk_interfaces_IChemModel(model));
}
return acList;
}, 1);

Clazz.newMeth(C$, 'getAllChemObjects$org_openscience_cdk_interfaces_IChemSequence',  function (sequence) {
var list=Clazz.new_($I$(2,1));
for (var i=0; i < sequence.getChemModelCount$(); i++) {
list.add$O(sequence.getChemModel$I(i));
var current=$I$(1,"getAllChemObjects$org_openscience_cdk_interfaces_IChemModel",[sequence.getChemModel$I(i)]);
for (var chemObject, $chemObject = current.iterator$(); $chemObject.hasNext$()&&((chemObject=($chemObject.next$())),1);) {
if (!list.contains$O(chemObject)) list.add$O(chemObject);
}
}
return list;
}, 1);

Clazz.newMeth(C$, 'getAllIDs$org_openscience_cdk_interfaces_IChemSequence',  function (sequence) {
var list=Clazz.new_($I$(2,1));
if (sequence.getID$() != null ) list.add$O(sequence.getID$());
for (var i=0; i < sequence.getChemModelCount$(); i++) {
list.addAll$java_util_Collection($I$(1,"getAllIDs$org_openscience_cdk_interfaces_IChemModel",[sequence.getChemModel$I(i)]));
}
return list;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
