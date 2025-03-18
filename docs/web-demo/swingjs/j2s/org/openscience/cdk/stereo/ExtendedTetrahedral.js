(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),I$=[[0,['org.openscience.cdk.interfaces.ITetrahedralChirality','.Stereo'],'org.openscience.cdk.interfaces.IAtom',['org.openscience.cdk.interfaces.IBond','.Order']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ExtendedTetrahedral", null, 'org.openscience.cdk.stereo.AbstractStereo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo',  function (focus, peripherals, winding) {
C$.c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I.apply(this, [focus, peripherals, $I$(1).toConfig$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo(winding)]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I',  function (focus, peripherals, config) {
;C$.superclazz.c$$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_interfaces_IChemObjectA$I.apply(this,[focus, peripherals, 17152 | (255 & config)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'focus$',  function () {
return this.getFocus$();
});

Clazz.newMeth(C$, 'peripherals$',  function () {
return this.getCarriers$().toArray$OA(Clazz.array($I$(2), [4]));
});

Clazz.newMeth(C$, 'winding$',  function () {
return $I$(1,"toStereo$I",[this.getConfigOrder$()]);
});

Clazz.newMeth(C$, 'getOtherNbr$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (mol, atom, other) {
var res=null;
for (var bond, $bond = mol.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.getOrder$() !== $I$(3).DOUBLE ) continue;
var nbr=bond.getOther$org_openscience_cdk_interfaces_IAtom(atom);
if (!nbr.equals$O(other)) {
if (res != null ) return null;
res=nbr;
}}
return res;
}, 1);

Clazz.newMeth(C$, 'findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (container, focus) {
var focusBonds=container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(focus);
if (focusBonds.size$() != 2) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["focus must have exactly 2 neighbors"]);
var leftPrev=focus;
var rightPrev=focus;
var left=focusBonds.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom(focus);
var right=focusBonds.get$I(1).getOther$org_openscience_cdk_interfaces_IAtom(focus);
var tmp;
while (left != null  && right != null  ){
tmp=C$.getOtherNbr$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(container, left, leftPrev);
leftPrev=left;
left=tmp;
tmp=C$.getOtherNbr$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(container, right, rightPrev);
rightPrev=right;
right=tmp;
}
return Clazz.array($I$(2), -1, [leftPrev, rightPrev]);
}, 1);

Clazz.newMeth(C$, 'findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var atoms=C$.findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(container, this.getFocus$());
var carriers=this.getCarriers$();
if (container.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atoms[0], carriers.get$I(2)) != null  || container.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atoms[0], carriers.get$I(3)) != null  ) {
var tmp=atoms[0];
atoms[0]=atoms[1];
atoms[1]=tmp;
}return atoms;
});

Clazz.newMeth(C$, 'getLength$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (container, focus) {
var length=0;
var focusBonds=container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(focus);
if (focusBonds.size$() != 2) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["focus must have exactly 2 neighbors"]);
var leftPrev=focus;
var rightPrev=focus;
var left=focusBonds.get$I(0).getOther$org_openscience_cdk_interfaces_IAtom(focus);
var right=focusBonds.get$I(1).getOther$org_openscience_cdk_interfaces_IAtom(focus);
var tmp;
while (left != null  && right != null  ){
tmp=C$.getOtherNbr$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(container, left, leftPrev);
leftPrev=left;
left=tmp;
tmp=C$.getOtherNbr$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(container, right, rightPrev);
rightPrev=right;
right=tmp;
++length;
}
return 2 * length;
}, 1);

Clazz.newMeth(C$, ['create$org_openscience_cdk_interfaces_IAtom$java_util_List$I','create$org_openscience_cdk_interfaces_IChemObject$java_util_List$I'],  function (focus, carriers, cfg) {
return Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I,[focus, carriers.toArray$OA(Clazz.array($I$(2), [4])), cfg]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:36 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
