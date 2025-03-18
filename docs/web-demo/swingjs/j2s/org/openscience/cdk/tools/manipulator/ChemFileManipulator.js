(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.tools.manipulator.ChemSequenceManipulator','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ChemFileManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAtomCount$org_openscience_cdk_interfaces_IChemFile',  function (file) {
var count=0;
for (var i=0; i < file.getChemSequenceCount$(); i++) {
count+=$I$(1,"getAtomCount$org_openscience_cdk_interfaces_IChemSequence",[file.getChemSequence$I(i)]);
}
return count;
}, 1);

Clazz.newMeth(C$, 'getBondCount$org_openscience_cdk_interfaces_IChemFile',  function (file) {
var count=0;
for (var i=0; i < file.getChemSequenceCount$(); i++) {
count+=$I$(1,"getBondCount$org_openscience_cdk_interfaces_IChemSequence",[file.getChemSequence$I(i)]);
}
return count;
}, 1);

Clazz.newMeth(C$, 'getAllChemObjects$org_openscience_cdk_interfaces_IChemFile',  function (file) {
var list=Clazz.new_($I$(2,1));
for (var i=0; i < file.getChemSequenceCount$(); i++) {
list.add$O(file.getChemSequence$I(i));
list.addAll$java_util_Collection($I$(1,"getAllChemObjects$org_openscience_cdk_interfaces_IChemSequence",[file.getChemSequence$I(i)]));
}
return list;
}, 1);

Clazz.newMeth(C$, 'getAllIDs$org_openscience_cdk_interfaces_IChemFile',  function (file) {
var list=Clazz.new_($I$(2,1));
if (file.getID$() != null ) list.add$O(file.getID$());
for (var i=0; i < file.getChemSequenceCount$(); i++) {
list.addAll$java_util_Collection($I$(1,"getAllIDs$org_openscience_cdk_interfaces_IChemSequence",[file.getChemSequence$I(i)]));
}
return list;
}, 1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IChemFile',  function (file) {
var acList=Clazz.new_($I$(2,1));
for (var sequence, $sequence = file.chemSequences$().iterator$(); $sequence.hasNext$()&&((sequence=($sequence.next$())),1);) {
acList.addAll$java_util_Collection($I$(1).getAllAtomContainers$org_openscience_cdk_interfaces_IChemSequence(sequence));
}
return acList;
}, 1);

Clazz.newMeth(C$, 'getAllChemModels$org_openscience_cdk_interfaces_IChemFile',  function (file) {
var modelsList=Clazz.new_($I$(2,1));
for (var f=0; f < file.getChemSequenceCount$(); f++) {
for (var model, $model = file.getChemSequence$I(f).chemModels$().iterator$(); $model.hasNext$()&&((model=($model.next$())),1);) {
modelsList.add$O(model);
}
}
return modelsList;
}, 1);

Clazz.newMeth(C$, 'getAllReactions$org_openscience_cdk_interfaces_IChemFile',  function (file) {
var reactonList=Clazz.new_($I$(2,1));
var chemModel=C$.getAllChemModels$org_openscience_cdk_interfaces_IChemFile(file);
for (var iChemModel, $iChemModel = chemModel.iterator$(); $iChemModel.hasNext$()&&((iChemModel=($iChemModel.next$())),1);) {
for (var reaction, $reaction = iChemModel.getReactionSet$().reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
reactonList.add$O(reaction);
}
}
return reactonList;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
