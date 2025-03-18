(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),I$=[[0,['org.openscience.cdk.interfaces.IBond','.Order'],'org.openscience.cdk.interfaces.IAtom','java.util.ArrayList','org.openscience.cdk.interfaces.IBond']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExtendedCisTrans", null, 'org.openscience.cdk.stereo.AbstractStereo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$I',  function (focus, peripherals, config) {
;C$.superclazz.c$$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_interfaces_IChemObjectA$I.apply(this,[focus, peripherals, 8704 | (255 & config)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getOtherAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (mol, atom, other) {
var bonds=mol.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom);
if (bonds.size$() != 2) return null;
if (bonds.get$I(0).contains$org_openscience_cdk_interfaces_IAtom(other)) return bonds.get$I(1).getOrder$() === $I$(1).DOUBLE  ? bonds.get$I(1).getOther$org_openscience_cdk_interfaces_IAtom(atom) : null;
return bonds.get$I(0).getOrder$() === $I$(1).DOUBLE  ? bonds.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom(atom) : null;
}, 1);

Clazz.newMeth(C$, 'findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IBond',  function (container, focus) {
var a=focus.getBegin$();
var b=focus.getEnd$();
var aPrev=a;
var bPrev=b;
var aNext;
var bNext;
aNext=C$.getOtherAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(container, a, b);
bNext=C$.getOtherAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(container, b, a);
while (aNext != null  && bNext != null  ){
var tmp=C$.getOtherAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(container, aNext, aPrev);
aPrev=aNext;
aNext=tmp;
tmp=C$.getOtherAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(container, bNext, bPrev);
bPrev=bNext;
bNext=tmp;
}
if (aPrev != null  && bPrev != null  ) return Clazz.array($I$(2), -1, [aPrev, bPrev]);
return null;
}, 1);

Clazz.newMeth(C$, 'findCentralBond$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (mol, atom) {
var bonds=Clazz.new_($I$(3,1));
var prevAtom=atom;
var prevBond=null;
var found;
do {
found=false;
for (var bond, $bond = mol.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(prevAtom).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (prevBond === bond ) continue;
if (bond.getOrder$() === $I$(1).DOUBLE ) {
bonds.add$O(bond);
found=true;
prevBond=bond;
prevAtom=bond.getOther$org_openscience_cdk_interfaces_IAtom(prevAtom);
break;
}}
} while (found);
var nbonds=bonds.size$();
if ((nbonds & 1) == 0) return null;
return bonds.get$I((nbonds/2|0));
}, 1);

Clazz.newMeth(C$, ['create$org_openscience_cdk_interfaces_IBond$java_util_List$I','create$org_openscience_cdk_interfaces_IChemObject$java_util_List$I'],  function (focus, carriers, cfg) {
return Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$I,[focus, carriers.toArray$OA(Clazz.array($I$(4), [2])), cfg]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:33 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
