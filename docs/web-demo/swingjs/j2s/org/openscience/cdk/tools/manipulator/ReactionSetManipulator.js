(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.tools.manipulator.ReactionManipulator','org.openscience.cdk.interfaces.IAtomContainerSet','java.util.ArrayList','org.openscience.cdk.tools.manipulator.MoleculeSetManipulator','org.openscience.cdk.interfaces.IReactionSet','org.openscience.cdk.tools.manipulator.AtomContainerSetManipulator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReactionSetManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAtomCount$org_openscience_cdk_interfaces_IReactionSet',  function (set) {
var count=0;
for (var iReaction, $iReaction = set.reactions$().iterator$(); $iReaction.hasNext$()&&((iReaction=($iReaction.next$())),1);) {
count+=$I$(1).getAtomCount$org_openscience_cdk_interfaces_IReaction(iReaction);
}
return count;
}, 1);

Clazz.newMeth(C$, 'getBondCount$org_openscience_cdk_interfaces_IReactionSet',  function (set) {
var count=0;
for (var iReaction, $iReaction = set.reactions$().iterator$(); $iReaction.hasNext$()&&((iReaction=($iReaction.next$())),1);) {
count+=$I$(1).getBondCount$org_openscience_cdk_interfaces_IReaction(iReaction);
}
return count;
}, 1);

Clazz.newMeth(C$, 'removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtom',  function (set, atom) {
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
$I$(1).removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IAtom(reaction, atom);
}
}, 1);

Clazz.newMeth(C$, 'removeElectronContainer$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IElectronContainer',  function (set, electrons) {
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
$I$(1).removeElectronContainer$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IElectronContainer(reaction, electrons);
}
}, 1);

Clazz.newMeth(C$, 'getAllMolecules$org_openscience_cdk_interfaces_IReactionSet',  function (set) {
var moleculeSet=set.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
var molecules=$I$(1).getAllMolecules$org_openscience_cdk_interfaces_IReaction(reaction);
for (var ac, $ac = molecules.atomContainers$().iterator$(); $ac.hasNext$()&&((ac=($ac.next$())),1);) {
var contain=false;
for (var atomContainer, $atomContainer = moleculeSet.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
if (atomContainer.equals$O(ac)) {
contain=true;
break;
}}
if (!contain) moleculeSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(ac);
}
}
return moleculeSet;
}, 1);

Clazz.newMeth(C$, 'getAllIDs$org_openscience_cdk_interfaces_IReactionSet',  function (set) {
var IDlist=Clazz.new_($I$(3,1));
if (set.getID$() != null ) IDlist.add$O(set.getID$());
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
IDlist.addAll$java_util_Collection($I$(1).getAllIDs$org_openscience_cdk_interfaces_IReaction(reaction));
}
return IDlist;
}, 1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IReactionSet',  function (set) {
return $I$(4,"getAllAtomContainers$org_openscience_cdk_interfaces_IAtomContainerSet",[C$.getAllMolecules$org_openscience_cdk_interfaces_IReactionSet(set)]);
}, 1);

Clazz.newMeth(C$, 'getRelevantReaction$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtom',  function (set, atom) {
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
var container=$I$(1).getRelevantAtomContainer$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IAtom(reaction, atom);
if (container != null ) {
return reaction;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getRelevantReaction$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IBond',  function (set, bond) {
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
var container=$I$(1).getRelevantAtomContainer$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IBond(reaction, bond);
if (container != null ) {
return reaction;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getRelevantReactions$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtomContainer',  function (reactSet, molecule) {
var newReactSet=reactSet.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(5),['addReaction$org_openscience_cdk_interfaces_IReaction','getReaction$I','getReactionCount$','isEmpty$','reactions$','removeAllReactions$','removeReaction$I','removeReaction$org_openscience_cdk_interfaces_IReaction']), Clazz.array(java.lang.Object, -1, []));
var reactSetProd=C$.getRelevantReactionsAsProduct$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtomContainer(reactSet, molecule);
for (var reaction, $reaction = reactSetProd.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) newReactSet.addReaction$org_openscience_cdk_interfaces_IReaction(reaction);

var reactSetReact=C$.getRelevantReactionsAsReactant$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtomContainer(reactSet, molecule);
for (var reaction, $reaction = reactSetReact.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) newReactSet.addReaction$org_openscience_cdk_interfaces_IReaction(reaction);

return newReactSet;
}, 1);

Clazz.newMeth(C$, 'getRelevantReactionsAsReactant$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtomContainer',  function (reactSet, molecule) {
var newReactSet=reactSet.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(5),['addReaction$org_openscience_cdk_interfaces_IReaction','getReaction$I','getReactionCount$','isEmpty$','reactions$','removeAllReactions$','removeReaction$I','removeReaction$org_openscience_cdk_interfaces_IReaction']), Clazz.array(java.lang.Object, -1, []));
for (var reaction, $reaction = reactSet.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
for (var atomContainer, $atomContainer = reaction.getReactants$().atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) if (atomContainer.equals$O(molecule)) newReactSet.addReaction$org_openscience_cdk_interfaces_IReaction(reaction);

}
return newReactSet;
}, 1);

Clazz.newMeth(C$, 'getRelevantReactionsAsProduct$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtomContainer',  function (reactSet, molecule) {
var newReactSet=reactSet.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(5),['addReaction$org_openscience_cdk_interfaces_IReaction','getReaction$I','getReactionCount$','isEmpty$','reactions$','removeAllReactions$','removeReaction$I','removeReaction$org_openscience_cdk_interfaces_IReaction']), Clazz.array(java.lang.Object, -1, []));
for (var reaction, $reaction = reactSet.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
for (var atomContainer, $atomContainer = reaction.getProducts$().atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) if (atomContainer.equals$O(molecule)) newReactSet.addReaction$org_openscience_cdk_interfaces_IReaction(reaction);

}
return newReactSet;
}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IAtom',  function (set, atom) {
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
var container=$I$(1).getRelevantAtomContainer$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IAtom(reaction, atom);
if (container != null ) {
return container;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'getRelevantAtomContainer$org_openscience_cdk_interfaces_IReactionSet$org_openscience_cdk_interfaces_IBond',  function (set, bond) {
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
var container=$I$(1).getRelevantAtomContainer$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IBond(reaction, bond);
if (container != null ) {
return container;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'setAtomProperties$org_openscience_cdk_interfaces_IReactionSet$O$O',  function (set, propKey, propVal) {
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
$I$(1).setAtomProperties$org_openscience_cdk_interfaces_IReaction$O$O(reaction, propKey, propVal);
}
}, 1);

Clazz.newMeth(C$, 'getAllChemObjects$org_openscience_cdk_interfaces_IReactionSet',  function (set) {
var list=Clazz.new_($I$(3,1));
list.add$O(set);
for (var reaction, $reaction = set.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
list.addAll$java_util_Collection($I$(1).getAllChemObjects$org_openscience_cdk_interfaces_IReaction(reaction));
}
return list;
}, 1);

Clazz.newMeth(C$, 'getReactionByAtomContainerID$org_openscience_cdk_interfaces_IReactionSet$S',  function (reactionSet, id) {
for (var reaction, $reaction = reactionSet.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
if ($I$(6,"containsByID$org_openscience_cdk_interfaces_IAtomContainerSet$S",[reaction.getProducts$(), id])) return reaction;
}
for (var reaction, $reaction = reactionSet.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
if ($I$(6,"containsByID$org_openscience_cdk_interfaces_IAtomContainerSet$S",[reaction.getReactants$(), id])) return reaction;
}
return null;
}, 1);

Clazz.newMeth(C$, 'getReactionByReactionID$org_openscience_cdk_interfaces_IReactionSet$S',  function (reactionSet, id) {
var reactionIter=reactionSet.reactions$();
for (var reaction, $reaction = reactionIter.iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
if (reaction.getID$() != null  && reaction.getID$().equals$O(id) ) {
return reaction;
}}
return null;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
