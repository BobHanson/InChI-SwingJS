(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'org.openscience.cdk.tools.manipulator.ReactionManipulator','org.openscience.cdk.interfaces.IAtomContainerSet','java.util.ArrayList','org.openscience.cdk.interfaces.IReactionSet','org.openscience.cdk.interfaces.IReactionScheme']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ReactionSchemeManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IReactionScheme$org_openscience_cdk_interfaces_IAtomContainerSet',  function (scheme, molSet) {
if (scheme.getReactionSchemeCount$() != 0) for (var rm, $rm = scheme.reactionSchemes$().iterator$(); $rm.hasNext$()&&((rm=($rm.next$())),1);) {
for (var ac, $ac = C$.getAllAtomContainers$org_openscience_cdk_interfaces_IReactionScheme$org_openscience_cdk_interfaces_IAtomContainerSet(rm, molSet).atomContainers$().iterator$(); $ac.hasNext$()&&((ac=($ac.next$())),1);) {
var contain=false;
for (var atomContainer, $atomContainer = molSet.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
if (atomContainer.equals$O(ac)) {
contain=true;
break;
}}
if (!contain) molSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(ac);
}
}
for (var reaction, $reaction = scheme.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
var newAtomContainerSet=$I$(1).getAllAtomContainers$org_openscience_cdk_interfaces_IReaction(reaction);
for (var ac, $ac = newAtomContainerSet.iterator$(); $ac.hasNext$()&&((ac=($ac.next$())),1);) {
var contain=false;
for (var atomContainer, $atomContainer = molSet.atomContainers$().iterator$(); $atomContainer.hasNext$()&&((atomContainer=($atomContainer.next$())),1);) {
if (atomContainer.equals$O(ac)) {
contain=true;
break;
}}
if (!contain) molSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(ac);
}
}
return molSet;
}, 1);

Clazz.newMeth(C$, 'getAllAtomContainers$org_openscience_cdk_interfaces_IReactionScheme',  function (scheme) {
return C$.getAllAtomContainers$org_openscience_cdk_interfaces_IReactionScheme$org_openscience_cdk_interfaces_IAtomContainerSet(scheme, scheme.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, [])));
}, 1);

Clazz.newMeth(C$, 'getAllIDs$org_openscience_cdk_interfaces_IReactionScheme',  function (scheme) {
var IDlist=Clazz.new_($I$(3,1));
if (scheme.getID$() != null ) IDlist.add$O(scheme.getID$());
for (var reaction, $reaction = scheme.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
IDlist.addAll$java_util_Collection($I$(1).getAllIDs$org_openscience_cdk_interfaces_IReaction(reaction));
}
if (scheme.getReactionSchemeCount$() != 0) for (var rs, $rs = scheme.reactionSchemes$().iterator$(); $rs.hasNext$()&&((rs=($rs.next$())),1);) {
IDlist.addAll$java_util_Collection(C$.getAllIDs$org_openscience_cdk_interfaces_IReactionScheme(rs));
}
return IDlist;
}, 1);

Clazz.newMeth(C$, 'getAllReactions$org_openscience_cdk_interfaces_IReactionScheme',  function (scheme) {
var reactionSet=scheme.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(4),['addReaction$org_openscience_cdk_interfaces_IReaction','getReaction$I','getReactionCount$','isEmpty$','reactions$','removeAllReactions$','removeReaction$I','removeReaction$org_openscience_cdk_interfaces_IReaction']), Clazz.array(java.lang.Object, -1, []));
if (scheme.getReactionSchemeCount$() != 0) for (var schemeInt, $schemeInt = scheme.reactionSchemes$().iterator$(); $schemeInt.hasNext$()&&((schemeInt=($schemeInt.next$())),1);) {
for (var reaction, $reaction = C$.getAllReactions$org_openscience_cdk_interfaces_IReactionScheme(schemeInt).reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) reactionSet.addReaction$org_openscience_cdk_interfaces_IReaction(reaction);

}
for (var reaction, $reaction = scheme.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) reactionSet.addReaction$org_openscience_cdk_interfaces_IReaction(reaction);

return reactionSet;
}, 1);

Clazz.newMeth(C$, 'createReactionScheme$org_openscience_cdk_interfaces_IReactionSet',  function (reactionSet) {
var reactionScheme=reactionSet.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(5),['add$org_openscience_cdk_interfaces_IReactionScheme','clone$','getReactionSchemeCount$','reactionSchemes$','removeAllReactionSchemes$','removeReactionScheme$org_openscience_cdk_interfaces_IReactionScheme']), Clazz.array(java.lang.Object, -1, []));
var listTopR=Clazz.new_($I$(3,1));
for (var reaction, $reaction = reactionSet.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
if (C$.extractPrecursorReaction$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IReactionSet(reaction, reactionSet).getReactionCount$() == 0) listTopR.add$O(reaction);
}
for (var reaction, $reaction = listTopR.iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
reactionScheme.addReaction$org_openscience_cdk_interfaces_IReaction(reaction);
var newReactionScheme=C$.setScheme$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IReactionSet(reaction, reactionSet);
if (newReactionScheme.getReactionCount$() != 0 || newReactionScheme.getReactionSchemeCount$() != 0 ) reactionScheme.add$org_openscience_cdk_interfaces_IReactionScheme(newReactionScheme);
}
return reactionScheme;
}, 1);

Clazz.newMeth(C$, 'extractTopReactions$org_openscience_cdk_interfaces_IReactionScheme',  function (reactionScheme) {
var reactionSet=reactionScheme.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(4),['addReaction$org_openscience_cdk_interfaces_IReaction','getReaction$I','getReactionCount$','isEmpty$','reactions$','removeAllReactions$','removeReaction$I','removeReaction$org_openscience_cdk_interfaces_IReaction']), Clazz.array(java.lang.Object, -1, []));
var allSet=C$.getAllReactions$org_openscience_cdk_interfaces_IReactionScheme(reactionScheme);
for (var reaction, $reaction = allSet.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
var precuSet=C$.extractPrecursorReaction$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IReactionSet(reaction, allSet);
if (precuSet.getReactionCount$() == 0) {
var found=false;
for (var reactIn, $reactIn = reactionSet.reactions$().iterator$(); $reactIn.hasNext$()&&((reactIn=($reactIn.next$())),1);) {
if (reactIn.equals$O(reaction)) found=true;
}
if (!found) reactionSet.addReaction$org_openscience_cdk_interfaces_IReaction(reaction);
}}
return reactionSet;
}, 1);

Clazz.newMeth(C$, 'setScheme$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IReactionSet',  function (reaction, reactionSet) {
var reactionScheme=reaction.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(5),['add$org_openscience_cdk_interfaces_IReactionScheme','clone$','getReactionSchemeCount$','reactionSchemes$','removeAllReactionSchemes$','removeReactionScheme$org_openscience_cdk_interfaces_IReactionScheme']), Clazz.array(java.lang.Object, -1, []));
var reactConSet=C$.extractSubsequentReaction$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IReactionSet(reaction, reactionSet);
if (reactConSet.getReactionCount$() != 0) {
for (var reactionInt, $reactionInt = reactConSet.reactions$().iterator$(); $reactionInt.hasNext$()&&((reactionInt=($reactionInt.next$())),1);) {
reactionScheme.addReaction$org_openscience_cdk_interfaces_IReaction(reactionInt);
var newRScheme=C$.setScheme$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IReactionSet(reactionInt, reactionSet);
if (newRScheme.getReactionCount$() != 0 || newRScheme.getReactionSchemeCount$() != 0 ) {
reactionScheme.add$org_openscience_cdk_interfaces_IReactionScheme(newRScheme);
}}
}return reactionScheme;
}, 1);

Clazz.newMeth(C$, 'extractPrecursorReaction$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IReactionSet',  function (reaction, reactionSet) {
var reactConSet=reaction.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(4),['addReaction$org_openscience_cdk_interfaces_IReaction','getReaction$I','getReactionCount$','isEmpty$','reactions$','removeAllReactions$','removeReaction$I','removeReaction$org_openscience_cdk_interfaces_IReaction']), Clazz.array(java.lang.Object, -1, []));
for (var reactant, $reactant = reaction.getReactants$().atomContainers$().iterator$(); $reactant.hasNext$()&&((reactant=($reactant.next$())),1);) {
for (var reactionInt, $reactionInt = reactionSet.reactions$().iterator$(); $reactionInt.hasNext$()&&((reactionInt=($reactionInt.next$())),1);) {
for (var precursor, $precursor = reactionInt.getProducts$().atomContainers$().iterator$(); $precursor.hasNext$()&&((precursor=($precursor.next$())),1);) {
if (reactant.equals$O(precursor)) {
reactConSet.addReaction$org_openscience_cdk_interfaces_IReaction(reactionInt);
}}
}
}
return reactConSet;
}, 1);

Clazz.newMeth(C$, 'extractSubsequentReaction$org_openscience_cdk_interfaces_IReaction$org_openscience_cdk_interfaces_IReactionSet',  function (reaction, reactionSet) {
var reactConSet=reaction.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(4),['addReaction$org_openscience_cdk_interfaces_IReaction','getReaction$I','getReactionCount$','isEmpty$','reactions$','removeAllReactions$','removeReaction$I','removeReaction$org_openscience_cdk_interfaces_IReaction']), Clazz.array(java.lang.Object, -1, []));
for (var reactant, $reactant = reaction.getProducts$().atomContainers$().iterator$(); $reactant.hasNext$()&&((reactant=($reactant.next$())),1);) {
for (var reactionInt, $reactionInt = reactionSet.reactions$().iterator$(); $reactionInt.hasNext$()&&((reactionInt=($reactionInt.next$())),1);) {
for (var precursor, $precursor = reactionInt.getReactants$().atomContainers$().iterator$(); $precursor.hasNext$()&&((precursor=($precursor.next$())),1);) {
if (reactant.equals$O(precursor)) {
reactConSet.addReaction$org_openscience_cdk_interfaces_IReaction(reactionInt);
}}
}
}
return reactConSet;
}, 1);

Clazz.newMeth(C$, 'getAtomContainerSet$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IReactionScheme',  function (origenMol, finalMol, reactionScheme) {
var listPath=Clazz.new_($I$(3,1));
var reactionSet=C$.getAllReactions$org_openscience_cdk_interfaces_IReactionScheme(reactionScheme);
var found=false;
for (var reaction, $reaction = reactionSet.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
if (found) break;
for (var reactant, $reactant = reaction.getReactants$().atomContainers$().iterator$(); $reactant.hasNext$()&&((reactant=($reactant.next$())),1);) {
if (found) break;
if (reactant.equals$O(origenMol)) {
var allSet=reactionSet.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
for (var product, $product = reaction.getProducts$().atomContainers$().iterator$(); $product.hasNext$()&&((product=($product.next$())),1);) {
if (found) break;
if (!product.equals$O(finalMol)) {
var allSet2=C$.getReactionPath$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IReactionSet(product, finalMol, reactionSet);
if (allSet2.getAtomContainerCount$() != 0) {
allSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(origenMol);
allSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(product);
allSet.add$org_openscience_cdk_interfaces_IAtomContainerSet(allSet2);
}} else {
allSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(origenMol);
allSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(product);
}if (allSet.getAtomContainerCount$() != 0) {
listPath.add$O(allSet);
found=true;
}}
break;
}}
}
return listPath;
}, 1);

Clazz.newMeth(C$, 'getReactionPath$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IReactionSet',  function (reactant, finalMol, reactionSet) {
var allSet=reactionSet.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(2),['add$org_openscience_cdk_interfaces_IAtomContainerSet','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$D','atomContainers$','getAtomContainer$I','getAtomContainerCount$','getMultiplier$I','getMultiplier$org_openscience_cdk_interfaces_IAtomContainer','getMultipliers$','isEmpty$','iterator$','removeAllAtomContainers$','removeAtomContainer$org_openscience_cdk_interfaces_IAtomContainer','removeAtomContainer$I','replaceAtomContainer$I$org_openscience_cdk_interfaces_IAtomContainer','setMultiplier$org_openscience_cdk_interfaces_IAtomContainer$Double','setMultiplier$I$Double','setMultipliers$DoubleA','sortAtomContainers$java_util_Comparator']), Clazz.array(java.lang.Object, -1, []));
for (var reaction, $reaction = reactionSet.reactions$().iterator$(); $reaction.hasNext$()&&((reaction=($reaction.next$())),1);) {
for (var reactant2, $reactant2 = reaction.getReactants$().atomContainers$().iterator$(); $reactant2.hasNext$()&&((reactant2=($reactant2.next$())),1);) {
if (reactant2.equals$O(reactant)) {
for (var product, $product = reaction.getProducts$().atomContainers$().iterator$(); $product.hasNext$()&&((product=($product.next$())),1);) {
if (!product.equals$O(finalMol)) {
var allSet2=C$.getReactionPath$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IReactionSet(product, finalMol, reactionSet);
if (allSet2.getAtomContainerCount$() != 0) {
allSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(reactant);
allSet.add$org_openscience_cdk_interfaces_IAtomContainerSet(allSet2);
}} else {
allSet.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(product);
return allSet;
}}
}}
}
return allSet;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
