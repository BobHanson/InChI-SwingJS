(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "BiconnectedComponents");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['remaining','numBackEdges'],'O',['visit','int[]']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
;C$.$init$.apply(this);
this.visit=Clazz.array(Integer.TYPE, [mol.getAtomCount$()]);
this.remaining=mol.getAtomCount$();
}, 1);

Clazz.newMeth(C$, 'visit$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$I',  function (atom, prev, depth) {
this.visit[atom.getIndex$()]=depth;
--this.remaining;
var lo=depth + 1;
for (var bond, $bond = atom.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond === prev ) continue;
var nbr=bond.getOther$org_openscience_cdk_interfaces_IAtom(atom);
var visit=this.visit[nbr.getIndex$()];
if (visit == 0) {
var res=p$1.visit$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$I.apply(this, [nbr, bond, depth + 1]);
bond.setIsInRing$Z(res <= depth);
lo=Math.min(res, lo);
} else if (visit < depth) {
++this.numBackEdges;
bond.setIsInRing$Z(true);
lo=Math.min(visit, lo);
}}
atom.setIsInRing$Z(lo <= depth);
return lo;
}, p$1);

Clazz.newMeth(C$, 'mark$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
var state=Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IAtomContainer,[mol]);
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (state.visit[atom.getIndex$()] == 0) p$1.visit$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond$I.apply(state, [atom, null, 1]);
if (state.remaining == 0) break;
}
return state.numBackEdges;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
