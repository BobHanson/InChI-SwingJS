(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),I$=[[0,'org.openscience.cdk.graph.ConnectivityChecker','org.openscience.cdk.graph.invariant.Canon','org.openscience.cdk.graph.GraphUtil','org.openscience.cdk.CDKConstants','org.openscience.cdk.sgroup.SgroupType',['org.openscience.cdk.interfaces.IBond','.Display']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ZOrdering");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'assign$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
C$.raiseMultiattach$org_openscience_cdk_interfaces_IAtomContainer(mol);
for (var part, $part = $I$(1).partitionIntoMolecules$org_openscience_cdk_interfaces_IAtomContainer(mol).iterator$(); $part.hasNext$()&&((part=($part.next$())),1);) {
var z=C$.init$org_openscience_cdk_interfaces_IAtomContainer(part);
z=$I$(2,"label$org_openscience_cdk_interfaces_IAtomContainer$IAA$JA",[part, $I$(3).toAdjList$org_openscience_cdk_interfaces_IAtomContainer(part), z]);
for (var bond, $bond = part.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.getProperty$O($I$(4).Z_ORDER) != null ) continue;
bond.setProperty$O$O($I$(4).Z_ORDER, Integer.valueOf$I(Long.$ival(Math.max$J$J(z[bond.getBegin$().getIndex$()], z[bond.getEnd$().getIndex$()]))));
}
}
}, 1);

Clazz.newMeth(C$, 'raiseMultiattach$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
var sgroups=mol.getProperty$O("cdk:CtabSgroups");
if (sgroups == null ) return;
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) {
if (sgroup.getType$() !== $I$(5).ExtMulticenter ) continue;
for (var bond, $bond = sgroup.getBonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.getProperty$O($I$(4).Z_ORDER) == null ) bond.setProperty$O$O($I$(4).Z_ORDER, Integer.valueOf$I(999999));
}
}
}, 1);

Clazz.newMeth(C$, 'init$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
var z=Clazz.array(Long.TYPE, [mol.getAtomCount$()]);
if (C$.initUsingInternalWedges$org_openscience_cdk_interfaces_IAtomContainer$JA(mol, z)) return z;
if (C$.initUsingExternalWedges$org_openscience_cdk_interfaces_IAtomContainer$JA(mol, z)) return z;
var low=null;
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var p=atom.getPoint2d$();
Clazz.assert(C$, this, function(){return p != null });
if (low == null  || p.y < low.getPoint2d$().y  ) low=atom;
}
if (low != null ) {
(z[$k$=low.getIndex$()]=Long.$add(z[$k$],(10)));
}return z;
}, 1);

Clazz.newMeth(C$, 'initUsingInternalWedges$org_openscience_cdk_interfaces_IAtomContainer$JA',  function (mol, z) {
var init=false;
for (var bond, $bond = mol.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var bgn=bond.getBegin$();
var end=bond.getEnd$();
if (bgn.getBondCount$() == 1 || end.getBondCount$() == 1 ) continue;
switch (bond.getDisplay$()) {
case $I$(6).WedgedHashBegin:
case $I$(6).WedgeEnd:
(z[$k$=bgn.getIndex$()]=Long.$add(z[$k$],(10)));
(z[$k$=end.getIndex$()]=Long.$sub(z[$k$],(10)));
init=true;
break;
case $I$(6).WedgedHashEnd:
case $I$(6).WedgeBegin:
(z[$k$=bgn.getIndex$()]=Long.$sub(z[$k$],(10)));
(z[$k$=end.getIndex$()]=Long.$add(z[$k$],(10)));
init=true;
break;
case $I$(6).Bold:
(z[$k$=bgn.getIndex$()]=Long.$add(z[$k$],(10)));
(z[$k$=end.getIndex$()]=Long.$add(z[$k$],(10)));
init=true;
break;
case $I$(6).Hash:
(z[$k$=bgn.getIndex$()]=Long.$sub(z[$k$],(10)));
(z[$k$=end.getIndex$()]=Long.$sub(z[$k$],(10)));
init=true;
break;
}
}
return init;
}, 1);

Clazz.newMeth(C$, 'initUsingExternalWedges$org_openscience_cdk_interfaces_IAtomContainer$JA',  function (mol, z) {
var init=false;
for (var bond, $bond = mol.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var bgn=bond.getBegin$();
var end=bond.getEnd$();
if (bgn.getBondCount$() != 1 && end.getBondCount$() != 1 ) continue;
switch (bond.getDisplay$()) {
case $I$(6).WedgedHashBegin:
case $I$(6).WedgeEnd:
(z[$k$=bgn.getIndex$()]=Long.$sub(z[$k$],(10)));
(z[$k$=end.getIndex$()]=Long.$add(z[$k$],(10)));
break;
case $I$(6).WedgedHashEnd:
case $I$(6).WedgeBegin:
(z[$k$=bgn.getIndex$()]=Long.$add(z[$k$],(10)));
(z[$k$=end.getIndex$()]=Long.$sub(z[$k$],(10)));
init=true;
break;
}
}
return init;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:29 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
