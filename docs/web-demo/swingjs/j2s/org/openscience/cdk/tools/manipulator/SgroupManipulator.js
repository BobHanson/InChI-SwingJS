(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'java.util.HashMap','org.openscience.cdk.sgroup.Sgroup','org.openscience.cdk.sgroup.SgroupKey','java.util.ArrayList','org.openscience.cdk.sgroup.SgroupBracket']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SgroupManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$java_util_Map$org_openscience_cdk_interfaces_IChemObject',  function (map, obj) {
if (map == null ) return obj;
var val=map.get$O(obj);
if (val == null ) return obj;
return val;
}, 1);

Clazz.newMeth(C$, 'copy$java_util_Collection$java_util_Map',  function (sgroups, replace) {
if (sgroups == null ) return null;
var sgroupMap=Clazz.new_($I$(1,1));
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) sgroupMap.put$O$O(sgroup, Clazz.new_($I$(2,1)));

for (var e, $e = sgroupMap.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var orgSgroup=e.getKey$();
var cpySgroup=e.getValue$();
cpySgroup.setType$org_openscience_cdk_sgroup_SgroupType(orgSgroup.getType$());
for (var atom, $atom = orgSgroup.getAtoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) cpySgroup.addAtom$org_openscience_cdk_interfaces_IAtom(C$.get$java_util_Map$org_openscience_cdk_interfaces_IChemObject(replace, atom));

for (var bond, $bond = orgSgroup.getBonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) cpySgroup.addBond$org_openscience_cdk_interfaces_IBond(C$.get$java_util_Map$org_openscience_cdk_interfaces_IChemObject(replace, bond));

for (var parent, $parent = orgSgroup.getParents$().iterator$(); $parent.hasNext$()&&((parent=($parent.next$())),1);) cpySgroup.addParent$org_openscience_cdk_sgroup_Sgroup(sgroupMap.get$O(parent));

for (var key, $key = 0, $$key = $I$(3).values$(); $key<$$key.length&&((key=($$key[$key])),1);$key++) {
switch (key) {
case $I$(3).CtabParentAtomList:
{
var orgVal=orgSgroup.getValue$org_openscience_cdk_sgroup_SgroupKey(key);
if (orgVal != null ) {
var cpyVal=Clazz.new_($I$(4,1));
for (var atom, $atom = orgVal.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) cpyVal.add$O(C$.get$java_util_Map$org_openscience_cdk_interfaces_IChemObject(replace, atom));

cpySgroup.putValue$org_openscience_cdk_sgroup_SgroupKey$O(key, cpyVal);
}}break;
case $I$(3).CtabBracket:
{
var orgVals=orgSgroup.getValue$org_openscience_cdk_sgroup_SgroupKey(key);
if (orgVals != null ) {
for (var bracket, $bracket = orgVals.iterator$(); $bracket.hasNext$()&&((bracket=($bracket.next$())),1);) cpySgroup.addBracket$org_openscience_cdk_sgroup_SgroupBracket(Clazz.new_($I$(5,1).c$$org_openscience_cdk_sgroup_SgroupBracket,[bracket]));

}}break;
default:
var val=orgSgroup.getValue$org_openscience_cdk_sgroup_SgroupKey(key);
if (val != null ) cpySgroup.putValue$org_openscience_cdk_sgroup_SgroupKey$O(key, val);
break;
}
}
}
return Clazz.new_([sgroupMap.values$()],$I$(4,1).c$$java_util_Collection);
}, 1);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:45 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
