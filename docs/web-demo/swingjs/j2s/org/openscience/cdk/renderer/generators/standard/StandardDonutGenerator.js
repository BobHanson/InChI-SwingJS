(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),p$1={},I$=[[0,'java.util.HashSet',['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.ForceDelocalisedBondDisplay'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.DelocalisedDonutsBondDisplay'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.BondSeparation'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.AtomColor'],'org.openscience.cdk.interfaces.IAtom',['org.openscience.cdk.interfaces.IBond','.Order'],'org.openscience.cdk.renderer.elements.ElementGroup','org.openscience.cdk.graph.Cycles','org.openscience.cdk.geometry.GeometryUtil','org.openscience.cdk.renderer.generators.standard.TextOutline','org.openscience.cdk.renderer.elements.GeneralPath','org.openscience.cdk.renderer.elements.OvalElement']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StandardDonutGenerator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bonds=Clazz.new_($I$(1,1));
this.atoms=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['Z',['forceDelocalised','delocalisedDonuts'],'D',['dbSpacing','scale','stroke'],'O',['bonds','java.util.Set','+atoms','smallest','org.openscience.cdk.interfaces.IRingSet','fgColor','java.awt.Color','font','java.awt.Font','mol','org.openscience.cdk.interfaces.IAtomContainer']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$java_awt_Font$org_openscience_cdk_renderer_RendererModel$D',  function (mol, font, model, stroke) {
;C$.$init$.apply(this);
this.mol=mol;
this.font=font;
this.forceDelocalised=(model.get$Class(Clazz.getClass($I$(2)))).valueOf();
this.delocalisedDonuts=(model.get$Class(Clazz.getClass($I$(3)))).valueOf();
this.dbSpacing=(model.get$Class(Clazz.getClass($I$(4)))).valueOf();
this.scale=(model.get$Class(Clazz.getClass($I$(5)))).valueOf();
this.stroke=stroke;
this.fgColor=model.get$Class(Clazz.getClass($I$(6))).getAtomColor$org_openscience_cdk_interfaces_IAtom(mol.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(7),['bonds$','clone$','getBond$org_openscience_cdk_interfaces_IAtom','getBondCount$','getCharge$','getContainer$','getFractionalPoint3d$','getImplicitHydrogenCount$','getIndex$','getMapIdx$','getPoint2d$','getPoint3d$','getStereoParity$','getTotalHydrogenCount$','isAromatic$','isInRing$','neighbors$','setCharge$Double','setFractionalPoint3d$javax_vecmath_Point3d','setImplicitHydrogenCount$Integer','setIsAromatic$Z','setIsInRing$Z','setMapIdx$I','setPoint2d$javax_vecmath_Point2d','setPoint3d$javax_vecmath_Point3d','setStereoParity$Integer']), Clazz.array(java.lang.Object, -1, ["C"])));
}, 1);

Clazz.newMeth(C$, 'canDelocalise$org_openscience_cdk_interfaces_IAtomContainer',  function (ring) {
var okay=ring.getBondCount$() < 8;
if (!okay) return false;
for (var bond, $bond = ring.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (!bond.isAromatic$()) okay=false;
if ((bond.getOrder$() != null  && bond.getOrder$() !== $I$(8).UNSET  ) && !this.forceDelocalised ) okay=false;
}
return okay;
}, p$1);

Clazz.newMeth(C$, 'generate$',  function () {
if (!this.delocalisedDonuts) return null;
var group=Clazz.new_($I$(9,1));
this.smallest=$I$(10).edgeShort$org_openscience_cdk_interfaces_IAtomContainer(this.mol).toRingSet$();
for (var ring, $ring = this.smallest.atomContainers$().iterator$(); $ring.hasNext$()&&((ring=($ring.next$())),1);) {
if (!p$1.canDelocalise$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [ring])) continue;
for (var bond, $bond = ring.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
this.bonds.add$O(bond);
}
var charge=0;
var unpaired=0;
for (var atom, $atom = ring.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var q=atom.getFormalCharge$();
if (q == null  || (q).$c() === 0  ) {
continue;
}var nCyclic=0;
for (var bond, $bond = this.mol.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) if (bond.isInRing$()) ++nCyclic;

if (nCyclic > 2) continue;
this.atoms.add$O(atom);
charge=(charge+((atom.getFormalCharge$()).valueOf())|0);
}
var p2=$I$(11).get2DCenter$org_openscience_cdk_interfaces_IAtomContainer(ring);
if (charge != 0) {
var qText=charge < 0 ? "\u2013" : "+";
if (charge < -1) qText=Math.abs(charge) + qText;
 else if (charge > 1) qText=Math.abs(charge) + qText;
var qSym=Clazz.new_($I$(12,1).c$$S$java_awt_Font,[qText, this.font]);
qSym=qSym.resize$D$D(1 / this.scale, -1 / this.scale);
qSym=qSym.translate$D$D(p2.x - qSym.getCenter$().getX$(), p2.y - qSym.getCenter$().getY$());
group.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(13,"shapeOf$java_awt_Shape$java_awt_Color",[qSym.getOutline$(), this.fgColor]));
}var s=$I$(11).getBondLengthMedian$org_openscience_cdk_interfaces_IAtomContainer(ring);
var n=ring.getBondCount$();
var r=s / (2 * Math.tan(3.141592653589793 / n));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_($I$(14,1).c$$D$D$D$D$Z$java_awt_Color,[p2.x, p2.y, r - 1.5 * this.dbSpacing, this.stroke, false, this.fgColor]));
}
return group;
});

Clazz.newMeth(C$, 'isDelocalised$org_openscience_cdk_interfaces_IBond',  function (bond) {
return this.bonds.contains$O(bond);
});

Clazz.newMeth(C$, 'isChargeDelocalised$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return this.atoms.contains$O(atom);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:34 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
