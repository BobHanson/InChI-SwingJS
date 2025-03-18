(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.interfaces.IAtomContainer','org.openscience.cdk.interfaces.IAtomContainerSet',['org.openscience.cdk.interfaces.IReaction','.Direction'],'org.openscience.cdk.tools.manipulator.MoleculeSetManipulator','java.util.ArrayList','org.openscience.cdk.tools.manipulator.AtomContainerManipulator','org.openscience.cdk.ReactionRole','org.openscience.cdk.interfaces.IReaction','java.util.HashMap','java.util.HashSet',['org.openscience.cdk.tools.manipulator.ReactionManipulator','.IntTuple'],'java.util.Collections']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReactionManipulator", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['IntTuple',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAtomCount$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
return C$.getCount$org_openscience_cdk_interfaces_IReaction$java_util_function_ToIntFunction(reaction, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "ReactionManipulator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsInt$O',  function (t) { return t.getAtomCount$.apply(t,[])});
})()
)); return Clazz.new_(P$.ReactionManipulator$lambda1.$init$,[this, null])})($I$(1)));
}, 1);

Clazz.newMeth(C$, 'getBondCount$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
return C$.getCount$org_openscience_cdk_interfaces_IReaction$java_util_function_ToIntFunction(reaction, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "ReactionManipulator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'applyAsInt$O',  function (t) { return t.getBondCount$.apply(t,[])});
})()
)); return Clazz.new_(P$.ReactionManipulator$lambda2.$init$,[this, null])})($I$(1)));
}, 1);

Clazz.newMeth(C$, 'getCount$org_openscience_cdk_interfaces_IReaction$java_util_function_ToIntFunction',  function (reaction, chemObjectToIntFunction) {
var count=0;
var reactants=reaction.getReactants$();
for (var i=0; i < reactants.getAtomContainerCount$(); i++) {
count+=chemObjectToIntFunction.applyAsInt$O(reactants.getAtomContainer$I(i));
}
var agents=reaction.getAgents$();
for (var i=0; i < agents.getAtomContainerCount$(); i++) {
count+=chemObjectToIntFunction.applyAsInt$O(agents.getAtomContainer$I(i));
}
var products=reaction.getProducts$();
for (var i=0; i < products.getAtomContainerCount$(); i++) {
count+=chemObjectToIntFunction.applyAsInt$O(products.getAtomContainer$I(i));
}
return count;
}, 1);

Clazz.newMeth(C$, 'removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IAtom',  function (reaction, atom) {
C$.removeIChemObject$org_openscience_cdk_interfaces_IReaction$java_util_function_Predicate$java_util_function_Consumer(reaction, ((P$.ReactionManipulator$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReactionManipulator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$org_openscience_cdk_interfaces_IAtomContainer','test$O'],  function (atomContainer) { return (atomContainer.contains$org_openscience_cdk_interfaces_IAtom.apply(atomContainer, [this.$finals$.atom]));});
})()
), Clazz.new_(P$.ReactionManipulator$lambda3.$init$,[this, {atom:atom}])), ((P$.ReactionManipulator$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReactionManipulator$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$org_openscience_cdk_interfaces_IAtomContainer','accept$O'],  function (atomContainer) { return (atomContainer.removeAtom$org_openscience_cdk_interfaces_IAtom.apply(atomContainer, [this.$finals$.atom]));});
})()
), Clazz.new_(P$.ReactionManipulator$lambda4.$init$,[this, {atom:atom}])));
}, 1);

Clazz.newMeth(C$, 'removeElectronContainer$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IElectronContainer',  function (reaction, electrons) {
C$.removeIChemObject$org_openscience_cdk_interfaces_IReaction$java_util_function_Predicate$java_util_function_Consumer(reaction, ((P$.ReactionManipulator$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReactionManipulator$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$org_openscience_cdk_interfaces_IAtomContainer','test$O'],  function (atomContainer) { return (atomContainer.contains$org_openscience_cdk_interfaces_IElectronContainer.apply(atomContainer, [this.$finals$.electrons]));});
})()
), Clazz.new_(P$.ReactionManipulator$lambda5.$init$,[this, {electrons:electrons}])), ((P$.ReactionManipulator$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "ReactionManipulator$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['accept$org_openscience_cdk_interfaces_IAtomContainer','accept$O'],  function (atomContainer) { return (atomContainer.removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer.apply(atomContainer, [this.$finals$.electrons]));});
})()
), Clazz.new_(P$.ReactionManipulator$lambda6.$init$,[this, {electrons:electrons}])));
}, 1);

Clazz.newMeth(C$, 'removeIChemObject$org_openscience_cdk_interfaces_IReaction$java_util_function_Predicate$java_util_function_Consumer',  function (reaction, containsChemObjectPredicate, removeChemObjectConsumer) {
var reactants=reaction.getReactants$();
for (var i=0; i < reactants.getAtomContainerCount$(); i++) {
var mol=reactants.getAtomContainer$I(i);
if (containsChemObjectPredicate.test$O(mol)) {
removeChemObjectConsumer.accept$O(mol);
}}
var agents=reaction.getReactants$();
for (var i=0; i < agents.getAtomContainerCount$(); i++) {
var mol=agents.getAtomContainer$I(i);
if (containsChemObjectPredicate.test$O(mol)) {
removeChemObjectConsumer.accept$O(mol);
}}
var products=reaction.getProducts$();
for (var i=0; i < products.getAtomContainerCount$(); i++) {
var mol=products.getAtomContainer$I(i);
if (containsChemObjectPredicate.test$O(mol)) {
removeChemObjectConsumer.accept$O(mol);
}}
}, 1);

Clazz.newMeth(C$, 'getAllMolecules$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
var moleculeSet=reaction.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
moleculeSet.add$org_openscience_cdk_interfaces_IAtomContainerSet(C$.getAllReactants$org_openscience_cdk_interfaces_IReaction(reaction));
moleculeSet.add$org_openscience_cdk_interfaces_IAtomContainerSet(C$.getAllAgents$org_openscience_cdk_interfaces_IReaction(reaction));
moleculeSet.add$org_openscience_cdk_interfaces_IAtomContainerSet(C$.getAllProducts$org_openscience_cdk_interfaces_IReaction(reaction));
return moleculeSet;
}, 1);

Clazz.newMeth(C$, 'getAllProducts$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
var moleculeSet=reaction.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
var products=reaction.getProducts$();
for (var i=0; i < products.getAtomContainerCount$(); i++) {
moleculeSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(products.getAtomContainer$I(i));
}
return moleculeSet;
}, 1);

Clazz.newMeth(C$, 'getAllReactants$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
var moleculeSet=reaction.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
var reactants=reaction.getReactants$();
for (var i=0; i < reactants.getAtomContainerCount$(); i++) {
moleculeSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(reactants.getAtomContainer$I(i));
}
return moleculeSet;
}, 1);

Clazz.newMeth(C$, 'getAllAgents$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
var moleculeSet=reaction.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
var agents=reaction.getAgents$();
for (var i=0; i < agents.getAtomContainerCount$(); i++) {
moleculeSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(agents.getAtomContainer$I(i));
}
return moleculeSet;
}, 1);

Clazz.newMeth(C$, 'reverse$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
var reversedReaction=reaction.getBuilder$().newReaction$();
switch (reaction.getDirection$()) {
case $I$(3).BIDIRECTIONAL:
reversedReaction.setDirection$org_openscience_cdk_interfaces_IReaction_Direction($I$(3).BIDIRECTIONAL);
case $I$(3).FORWARD:
reversedReaction.setDirection$org_openscience_cdk_interfaces_IReaction_Direction($I$(3).BACKWARD);
case $I$(3).BACKWARD:
reversedReaction.setDirection$org_openscience_cdk_interfaces_IReaction_Direction($I$(3).FORWARD);
}
var reactants=reaction.getReactants$();
for (var i=0; i < reactants.getAtomContainerCount$(); i++) {
var coefficient=(reaction.getReactantCoefficient$org_openscience_cdk_interfaces_IAtomContainer(reactants.getAtomContainer$I(i))).valueOf();
reversedReaction.addProduct$org_openscience_cdk_interfaces_IAtomContainer$Double(reactants.getAtomContainer$I(i), Double.valueOf$D(coefficient));
}
var products=reaction.getProducts$();
for (var i=0; i < products.getAtomContainerCount$(); i++) {
var coefficient=(reaction.getProductCoefficient$org_openscience_cdk_interfaces_IAtomContainer(products.getAtomContainer$I(i))).valueOf();
reversedReaction.addReactant$org_openscience_cdk_interfaces_IAtomContainer$Double(products.getAtomContainer$I(i), Double.valueOf$D(coefficient));
}
return reversedReaction;
}, 1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
return $I$(4,"getAllAtomContainers$org_openscience_cdk_interfaces_IAtomContainerSet",[C$.getAllMolecules$org_openscience_cdk_interfaces_IReaction(reaction)]);
}, 1);

Clazz.newMeth(C$, 'getAllIDs$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
var idList=Clazz.new_($I$(5,1));
if (reaction.getID$() != null ) idList.add$O(reaction.getID$());
var reactants=reaction.getReactants$();
for (var i=0; i < reactants.getAtomContainerCount$(); i++) {
var mol=reactants.getAtomContainer$I(i);
idList.addAll$java_util_Collection($I$(6).getAllIDs$org_openscience_cdk_interfaces_IAtomContainer(mol));
}
var products=reaction.getProducts$();
for (var i=0; i < products.getAtomContainerCount$(); i++) {
var mol=products.getAtomContainer$I(i);
idList.addAll$java_util_Collection($I$(6).getAllIDs$org_openscience_cdk_interfaces_IAtomContainer(mol));
}
return idList;
}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IAtom',  function (reaction, atom) {
var result=$I$(4,"getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom",[reaction.getReactants$(), atom]);
if (result != null ) {
return result;
}return $I$(4,"getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IAtom",[reaction.getProducts$(), atom]);
}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IBond',  function (reaction, bond) {
var result=$I$(4,"getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IBond",[reaction.getReactants$(), bond]);
if (result != null ) {
return result;
}return $I$(4,"getRelevantAtomContainer$org_openscience_cdk_interfaces_IAtomContainerSet$org_openscience_cdk_interfaces_IBond",[reaction.getProducts$(), bond]);
}, 1);

Clazz.newMeth(C$, 'setAtomProperties$org_openscience_cdk_interfaces_IReaction$O$O',  function (reaction, propKey, propVal) {
var reactants=reaction.getReactants$();
for (var j=0; j < reactants.getAtomContainerCount$(); j++) {
$I$(6,"setAtomProperties$org_openscience_cdk_interfaces_IAtomContainer$O$O",[reactants.getAtomContainer$I(j), propKey, propVal]);
}
var products=reaction.getProducts$();
for (var j=0; j < products.getAtomContainerCount$(); j++) {
$I$(6,"setAtomProperties$org_openscience_cdk_interfaces_IAtomContainer$O$O",[products.getAtomContainer$I(j), propKey, propVal]);
}
}, 1);

Clazz.newMeth(C$, 'getAllChemObjects$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
var list=Clazz.new_($I$(5,1));
list.add$O(reaction);
var reactants=reaction.getReactants$();
for (var i=0; i < reactants.getAtomContainerCount$(); i++) {
list.add$O(reactants.getAtomContainer$I(i));
}
var products=reaction.getProducts$();
for (var i=0; i < products.getAtomContainerCount$(); i++) {
list.add$O(products.getAtomContainer$I(i));
}
return list;
}, 1);

Clazz.newMeth(C$, 'getMappedChemObject$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IChemObject',  function (reaction, chemObject) {
for (var mapping, $mapping = reaction.mappings$().iterator$(); $mapping.hasNext$()&&((mapping=($mapping.next$())),1);) {
if (mapping.getChemObject$I(0).equals$O(chemObject)) {
return mapping.getChemObject$I(1);
} else if (mapping.getChemObject$I(1).equals$O(chemObject)) return mapping.getChemObject$I(0);
}
return null;
}, 1);

Clazz.newMeth(C$, 'assignRoleAndGrp$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_ReactionRole$I',  function (mol, role, grpId) {
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
atom.setProperty$O$O("cdk:ReactionRole", role);
atom.setProperty$O$O("cdk:ReactionGroup", Integer.valueOf$I(grpId));
}
}, 1);

Clazz.newMeth(C$, 'toMolecule$org_openscience_cdk_interfaces_IReaction',  function (rxn) {
if (rxn == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null reaction provided"]);
var bldr=rxn.getBuilder$();
var mol=bldr.newInstance$Class$OA(Clazz.getClass($I$(1),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
mol.setProperties$java_util_Map(rxn.getProperties$());
mol.setID$S(rxn.getID$());
var grpId=0;
for (var comp, $comp = rxn.getReactants$().atomContainers$().iterator$(); $comp.hasNext$()&&((comp=($comp.next$())),1);) {
C$.assignRoleAndGrp$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_ReactionRole$I(comp, $I$(7).Reactant, ++grpId);
mol.add$org_openscience_cdk_interfaces_IAtomContainer(comp);
}
for (var comp, $comp = rxn.getAgents$().atomContainers$().iterator$(); $comp.hasNext$()&&((comp=($comp.next$())),1);) {
C$.assignRoleAndGrp$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_ReactionRole$I(comp, $I$(7).Agent, ++grpId);
mol.add$org_openscience_cdk_interfaces_IAtomContainer(comp);
}
for (var comp, $comp = rxn.getProducts$().atomContainers$().iterator$(); $comp.hasNext$()&&((comp=($comp.next$())),1);) {
C$.assignRoleAndGrp$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_ReactionRole$I(comp, $I$(7).Product, ++grpId);
mol.add$org_openscience_cdk_interfaces_IAtomContainer(comp);
}
return mol;
}, 1);

Clazz.newMeth(C$, 'toReaction$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
if (mol == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Null molecule provided"]);
var bldr=mol.getBuilder$();
var rxn=bldr.newInstance$Class$OA(Clazz.getClass($I$(8),['addAgent$org_openscience_cdk_interfaces_IAtomContainer','addMapping$org_openscience_cdk_interfaces_IMapping','addProduct$org_openscience_cdk_interfaces_IAtomContainer','addProduct$org_openscience_cdk_interfaces_IAtomContainer$Double','addReactant$org_openscience_cdk_interfaces_IAtomContainer','addReactant$org_openscience_cdk_interfaces_IAtomContainer$Double','getAgentCount$','getAgents$','getDirection$','getMapping$I','getMappingCount$','getProductCoefficient$org_openscience_cdk_interfaces_IAtomContainer','getProductCoefficients$','getProductCount$','getProducts$','getReactantCoefficient$org_openscience_cdk_interfaces_IAtomContainer','getReactantCoefficients$','getReactantCount$','getReactants$','iterator$','mappings$','removeMapping$I','setDirection$org_openscience_cdk_interfaces_IReaction_Direction','setProductCoefficient$org_openscience_cdk_interfaces_IAtomContainer$Double','setProductCoefficients$DoubleA','setProducts$org_openscience_cdk_interfaces_IAtomContainerSet','setReactantCoefficient$org_openscience_cdk_interfaces_IAtomContainer$Double','setReactantCoefficients$DoubleA','setReactants$org_openscience_cdk_interfaces_IAtomContainerSet']), Clazz.array(java.lang.Object, -1, []));
rxn.setProperties$java_util_Map(mol.getProperties$());
rxn.setID$S(mol.getID$());
var components=Clazz.new_($I$(9,1));
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var role=atom.getProperty$O("cdk:ReactionRole");
var grpIdx=atom.getProperty$O("cdk:ReactionGroup");
if (role == null  || role === $I$(7).None  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Atom " + mol.indexOf$org_openscience_cdk_interfaces_IAtom(atom) + " had undefined role" ]);
if (grpIdx == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Atom " + mol.indexOf$org_openscience_cdk_interfaces_IAtom(atom) + " had no reaction group id" ]);
var comp=components.get$O(grpIdx);
if (comp == null ) {
components.put$O$O(grpIdx, comp=bldr.newInstance$Class$OA(Clazz.getClass($I$(1),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(20), Integer.valueOf$I(20), Integer.valueOf$I(0), Integer.valueOf$I(0)])));
switch (role) {
case $I$(7).Reactant:
rxn.addReactant$org_openscience_cdk_interfaces_IAtomContainer(comp);
break;
case $I$(7).Product:
rxn.addProduct$org_openscience_cdk_interfaces_IAtomContainer(comp);
break;
case $I$(7).Agent:
rxn.addAgent$org_openscience_cdk_interfaces_IAtomContainer(comp);
break;
}
}comp.addAtom$org_openscience_cdk_interfaces_IAtom(atom);
}
for (var bond, $bond = mol.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var beg=bond.getBegin$();
var end=bond.getEnd$();
var begIdx=beg.getProperty$O("cdk:ReactionGroup");
var endIdx=end.getProperty$O("cdk:ReactionGroup");
if (begIdx == null  || endIdx == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bond " + mol.indexOf$org_openscience_cdk_interfaces_IBond(bond) + " had atoms with no reaction group id" ]);
if (!begIdx.equals$O(endIdx)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bond " + mol.indexOf$org_openscience_cdk_interfaces_IBond(bond) + " had atoms with different reaction group id" ]);
components.get$O(begIdx).addBond$org_openscience_cdk_interfaces_IBond(bond);
}
for (var se, $se = mol.stereoElements$().iterator$(); $se.hasNext$()&&((se=($se.next$())),1);) {
var focus=null;
if (Clazz.instanceOf(se, "org.openscience.cdk.interfaces.ITetrahedralChirality")) {
focus=(se).getChiralAtom$();
} else if (Clazz.instanceOf(se, "org.openscience.cdk.interfaces.IDoubleBondStereochemistry")) {
focus=(se).getStereoBond$().getBegin$();
} else if (Clazz.instanceOf(se, "org.openscience.cdk.stereo.ExtendedTetrahedral")) {
focus=(se).focus$();
}if (focus == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Stereochemistry had no focus"]);
var grpIdx=focus.getProperty$O("cdk:ReactionGroup");
components.get$O(grpIdx).addStereoElement$org_openscience_cdk_interfaces_IStereoElement(se);
}
for (var se, $se = mol.singleElectrons$().iterator$(); $se.hasNext$()&&((se=($se.next$())),1);) {
var grpIdx=se.getAtom$().getProperty$O("cdk:ReactionGroup");
components.get$O(grpIdx).addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron(se);
}
for (var lp, $lp = mol.lonePairs$().iterator$(); $lp.hasNext$()&&((lp=($lp.next$())),1);) {
var grpIdx=lp.getAtom$().getProperty$O("cdk:ReactionGroup");
components.get$O(grpIdx).addLonePair$org_openscience_cdk_interfaces_ILonePair(lp);
}
return rxn;
}, 1);

Clazz.newMeth(C$, 'findMappedBonds$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
var mapped=Clazz.new_($I$(10,1));
var mappedReactantBonds=Clazz.new_($I$(10,1));
var mappedProductBonds=Clazz.new_($I$(10,1));
for (var reactant, $reactant = reaction.getReactants$().atomContainers$().iterator$(); $reactant.hasNext$()&&((reactant=($reactant.next$())),1);) {
for (var bond, $bond = reactant.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var begidx=bond.getBegin$().getProperty$O("cdk:AtomAtomMapping");
var endidx=bond.getEnd$().getProperty$O("cdk:AtomAtomMapping");
if (begidx != null  && endidx != null  ) mappedReactantBonds.add$O(Clazz.new_([(begidx).$c(), (endidx).$c()],$I$(11,1).c$$I$I));
}
}
if (mappedReactantBonds.isEmpty$()) return $I$(12).emptySet$();
for (var product, $product = reaction.getProducts$().atomContainers$().iterator$(); $product.hasNext$()&&((product=($product.next$())),1);) {
for (var bond, $bond = product.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var begidx=bond.getBegin$().getProperty$O("cdk:AtomAtomMapping");
var endidx=bond.getEnd$().getProperty$O("cdk:AtomAtomMapping");
if (begidx != null  && endidx != null  ) mappedProductBonds.add$O(Clazz.new_([(begidx).$c(), (endidx).$c()],$I$(11,1).c$$I$I));
}
}
if (mappedProductBonds.isEmpty$()) return $I$(12).emptySet$();
for (var reactant, $reactant = reaction.getReactants$().atomContainers$().iterator$(); $reactant.hasNext$()&&((reactant=($reactant.next$())),1);) {
for (var bond, $bond = reactant.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var begidx=bond.getBegin$().getProperty$O("cdk:AtomAtomMapping");
var endidx=bond.getEnd$().getProperty$O("cdk:AtomAtomMapping");
if (begidx != null  && endidx != null   && mappedProductBonds.contains$O(Clazz.new_([(begidx).$c(), (endidx).$c()],$I$(11,1).c$$I$I)) ) mapped.add$O(bond);
}
}
for (var product, $product = reaction.getProducts$().atomContainers$().iterator$(); $product.hasNext$()&&((product=($product.next$())),1);) {
for (var bond, $bond = product.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var begidx=bond.getBegin$().getProperty$O("cdk:AtomAtomMapping");
var endidx=bond.getEnd$().getProperty$O("cdk:AtomAtomMapping");
if (begidx != null  && endidx != null   && mappedReactantBonds.contains$O(Clazz.new_([(begidx).$c(), (endidx).$c()],$I$(11,1).c$$I$I)) ) mapped.add$O(bond);
}
}
return mapped;
}, 1);

Clazz.newMeth(C$, 'perceiveAtomTypesAndConfigureAtoms$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
if (reaction == null ) {
return;
}for (var atomContainer, $atomContainer = C$.getAllMolecules$org_openscience_cdk_interfaces_IReaction(reaction).atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
$I$(6).percieveAtomTypesAndConfigureAtoms$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
}
}, 1);

Clazz.newMeth(C$, 'perceiveAtomTypesAndConfigureUnsetProperties$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
if (reaction == null ) {
return;
}for (var atomContainer, $atomContainer = C$.getAllMolecules$org_openscience_cdk_interfaces_IReaction(reaction).atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
$I$(6).percieveAtomTypesAndConfigureUnsetProperties$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
}
}, 1);

Clazz.newMeth(C$, 'clearAtomConfigurations$org_openscience_cdk_interfaces_IReaction',  function (reaction) {
if (reaction == null ) {
return;
}for (var atomContainer, $atomContainer = C$.getAllMolecules$org_openscience_cdk_interfaces_IReaction(reaction).atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
$I$(6).clearAtomConfigurations$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
}
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReactionManipulator, "IntTuple", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['beg','end']]]

Clazz.newMeth(C$, 'c$$I$I',  function (beg, end) {
;C$.$init$.apply(this);
this.beg=beg;
this.end=end;
}, 1);

Clazz.newMeth(C$, 'equals$O',  function (o) {
if (this === o ) return true;
if (o == null  || this.getClass$() !== o.getClass$()  ) return false;
var that=o;
return (this.beg == that.beg && this.end == that.end ) || (this.beg == that.end && this.end == that.beg ) ;
});

Clazz.newMeth(C$, 'hashCode$',  function () {
return this.beg ^ this.end;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
