(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph.invariant"),p$1={},I$=[[0,'java.util.ArrayList','StringBuilder','org.openscience.cdk.CDKConstants','org.openscience.cdk.tools.periodictable.PeriodicTable','org.openscience.cdk.smiles.InvPair']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "CanonicalLabeler");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'canonLabel$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
if (atomContainer.getAtomCount$() == 0) return;
if (atomContainer.getAtomCount$() == 1) {
atomContainer.getAtom$I(0).setProperty$O$O("CanonicalLabel", Integer.valueOf$I(1));
}var vect=p$1.createInvarLabel$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [atomContainer]);
p$1.step3$java_util_List$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [vect, atomContainer]);
});

Clazz.newMeth(C$, 'step2$java_util_List$org_openscience_cdk_interfaces_IAtomContainer',  function (v, atoms) {
p$1.primeProduct$java_util_List$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [v, atoms]);
p$1.step3$java_util_List$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [v, atoms]);
}, p$1);

Clazz.newMeth(C$, 'step3$java_util_List$org_openscience_cdk_interfaces_IAtomContainer',  function (v, atoms) {
p$1.sortArrayList$java_util_List.apply(this, [v]);
p$1.rankArrayList$java_util_List.apply(this, [v]);
if (!p$1.isInvPart$java_util_List.apply(this, [v])) {
p$1.step2$java_util_List$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [v, atoms]);
} else {
if (Long.$lt(v.get$I(v.size$() - 1).getCurr$(),v.size$() )) {
p$1.breakTies$java_util_List.apply(this, [v]);
p$1.step2$java_util_List$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [v, atoms]);
}for (var aV, $aV = v.iterator$(); $aV.hasNext$()&&((aV=($aV.next$())),1);) {
(aV).commit$();
}
}}, p$1);

Clazz.newMeth(C$, 'createInvarLabel$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var atoms=atomContainer.atoms$().iterator$();
var a;
var inv;
var vect=Clazz.new_($I$(1,1));
while (atoms.hasNext$()){
a=atoms.next$();
inv=Clazz.new_($I$(2,1));
inv.append$I(atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(a).size$() + (a.getImplicitHydrogenCount$() === $I$(3).UNSET  ? 0 : (a.getImplicitHydrogenCount$()).$c()));
inv.append$I(atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(a).size$());
inv.append$O($I$(4,"getAtomicNumber$S",[a.getSymbol$()]));
var charge=a.getCharge$();
if (charge === $I$(3).UNSET ) charge=Double.valueOf$D(0.0);
if ((charge).$c() < 0 ) inv.append$I(1);
 else inv.append$I(0);
inv.append$I((Math.abs((a.getFormalCharge$() === $I$(3).UNSET  ? 0.0 : (a.getFormalCharge$()).valueOf()))|0));
inv.append$I((a.getImplicitHydrogenCount$() === $I$(3).UNSET  ? 0 : (a.getImplicitHydrogenCount$()).$c()));
vect.add$O(Clazz.new_([Long.parseLong$S(inv.toString()), a],$I$(5,1).c$$J$org_openscience_cdk_interfaces_IAtom));
}
return vect;
}, p$1);

Clazz.newMeth(C$, 'primeProduct$java_util_List$org_openscience_cdk_interfaces_IAtomContainer',  function (v, atomContainer) {
var it=v.iterator$();
var n;
var inv;
var a;
var summ;
while (it.hasNext$()){
inv=it.next$();
var neighbour=atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(inv.getAtom$());
n=neighbour.iterator$();
summ=1;
while (n.hasNext$()){
a=n.next$();
var next=(a.getProperty$O("InvariancePair")).getPrime$();
summ=Long.$mul(summ,next);
}
inv.setLast$J(inv.getCurr$());
inv.setCurr$J(summ);
}
}, p$1);

Clazz.newMeth(C$, 'sortArrayList$java_util_List',  function (v) {
v.sort$java_util_Comparator(((P$.CanonicalLabeler$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "CanonicalLabeler$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$org_openscience_cdk_smiles_InvPair$org_openscience_cdk_smiles_InvPair','compare$O$O'],  function (o1, o2) {
if (Long.$gt(o1.getCurr$(),o2.getCurr$() )) return 1;
if (Long.$lt(o1.getCurr$(),o2.getCurr$() )) return -1;
return 0;
});
})()
), Clazz.new_(P$.CanonicalLabeler$1.$init$,[this, null])));
v.sort$java_util_Comparator(((P$.CanonicalLabeler$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "CanonicalLabeler$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$org_openscience_cdk_smiles_InvPair$org_openscience_cdk_smiles_InvPair','compare$O$O'],  function (o1, o2) {
if (Long.$gt(o1.getLast$(),o2.getLast$() )) return 1;
if (Long.$lt(o1.getLast$(),o2.getLast$() )) return -1;
return 0;
});
})()
), Clazz.new_(P$.CanonicalLabeler$2.$init$,[this, null])));
}, p$1);

Clazz.newMeth(C$, 'rankArrayList$java_util_List',  function (v) {
var num=1;
var temp=Clazz.array(Integer.TYPE, [v.size$()]);
var last=v.get$I(0);
var it=v.iterator$();
var curr;
for (var x=0; it.hasNext$(); x++) {
curr=it.next$();
if (!last.equals$O(curr)) {
++num;
}temp[x]=num;
last=curr;
}
it=v.iterator$();
for (var x=0; it.hasNext$(); x++) {
curr=it.next$();
curr.setCurr$J(temp[x]);
curr.setPrime$();
}
}, p$1);

Clazz.newMeth(C$, 'isInvPart$java_util_List',  function (v) {
if (Long.$eq(v.get$I(v.size$() - 1).getCurr$(),v.size$() )) return true;
var it=v.iterator$();
var curr;
while (it.hasNext$()){
curr=it.next$();
if (Long.$ne(curr.getCurr$(),curr.getLast$() )) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'breakTies$java_util_List',  function (v) {
var it=v.iterator$();
var curr;
var last=null;
var tie=0;
var found=false;
for (var x=0; it.hasNext$(); x++) {
curr=it.next$();
curr.setCurr$J(Long.$mul(curr.getCurr$(),2));
curr.setPrime$();
if (x != 0 && !found  && Long.$eq(curr.getCurr$(),last.getCurr$() ) ) {
tie=x - 1;
found=true;
}last=curr;
}
curr=v.get$I(tie);
curr.setCurr$J(Long.$sub(curr.getCurr$(),1));
curr.setPrime$();
}, p$1);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
