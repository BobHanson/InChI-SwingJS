(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph.rebond"),p$1={},I$=[[0,'org.openscience.cdk.graph.rebond.Bspt',['org.openscience.cdk.graph.rebond.RebondTool','.TupleAtom'],'org.openscience.cdk.graph.rebond.Point','org.openscience.cdk.interfaces.IBond',['org.openscience.cdk.interfaces.IBond','.Order']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RebondTool", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TupleAtom',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['maxCovalentRadius','minBondDistance','bondTolerance'],'O',['bspt','org.openscience.cdk.graph.rebond.Bspt']]]

Clazz.newMeth(C$, 'c$$D$D$D',  function (maxCovalentRadius, minBondDistance, bondTolerance) {
;C$.$init$.apply(this);
this.maxCovalentRadius=maxCovalentRadius;
this.bondTolerance=bondTolerance;
this.minBondDistance=minBondDistance;
this.bspt=null;
}, 1);

Clazz.newMeth(C$, 'rebond$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
container.removeAllBonds$();
this.maxCovalentRadius=0.0;
this.bspt=Clazz.new_($I$(1,1).c$$I,[3]);
var atoms=container.atoms$().iterator$();
while (atoms.hasNext$()){
var atom=atoms.next$();
var myCovalentRadius=(atom.getCovalentRadius$()).valueOf();
if (myCovalentRadius == 0.0 ) {
throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.CDKException').c$$S,["Atom(s) does not have covalentRadius defined."]);
}if (myCovalentRadius > this.maxCovalentRadius ) this.maxCovalentRadius=myCovalentRadius;
var tupleAtom=Clazz.new_($I$(2,1).c$$org_openscience_cdk_interfaces_IAtom,[this, null, atom]);
this.bspt.addTuple$org_openscience_cdk_graph_rebond_Bspt_Tuple(tupleAtom);
}
atoms=container.atoms$().iterator$();
while (atoms.hasNext$()){
p$1.bondAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom.apply(this, [container, atoms.next$()]);
}
});

Clazz.newMeth(C$, 'bondAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (container, atom) {
var myCovalentRadius=(atom.getCovalentRadius$()).valueOf();
var searchRadius=myCovalentRadius + this.maxCovalentRadius + this.bondTolerance ;
var tupleAtom=Clazz.new_([atom.getPoint3d$().x, atom.getPoint3d$().y, atom.getPoint3d$().z],$I$(3,1).c$$D$D$D);
for (var e=this.bspt.enumHemiSphere$org_openscience_cdk_graph_rebond_Bspt_Tuple$D(tupleAtom, searchRadius); e.hasMoreElements$(); ) {
var atomNear=(e.nextElement$()).getAtom$();
if (!atomNear.equals$O(atom) && container.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(atom, atomNear) == null  ) {
var bonded=p$1.isBonded$D$D$D.apply(this, [myCovalentRadius, (atomNear.getCovalentRadius$()).valueOf(), e.foundDistance2$()]);
if (bonded) {
var bond=atom.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(4),['atoms$','clone$','compare$O','contains$org_openscience_cdk_interfaces_IAtom','get2DCenter$','get3DCenter$','getAtom$I','getAtomCount$','getBegin$','getConnectedAtom$org_openscience_cdk_interfaces_IAtom','getConnectedAtom$org_openscience_cdk_interfaces_IBond','getConnectedAtoms$org_openscience_cdk_interfaces_IAtom','getContainer$','getDisplay$','getEnd$','getIndex$','getOrder$','getOther$org_openscience_cdk_interfaces_IAtom','getStereo$','isAromatic$','isConnectedTo$org_openscience_cdk_interfaces_IBond','isInRing$','setAtom$org_openscience_cdk_interfaces_IAtom$I','setAtoms$org_openscience_cdk_interfaces_IAtomA','setDisplay$org_openscience_cdk_interfaces_IBond_Display','setIsAromatic$Z','setIsInRing$Z','setOrder$org_openscience_cdk_interfaces_IBond_Order','setStereo$org_openscience_cdk_interfaces_IBond_Stereo']), Clazz.array(java.lang.Object, -1, [atom, atomNear, $I$(5).SINGLE]));
container.addBond$org_openscience_cdk_interfaces_IBond(bond);
}}}
}, p$1);

Clazz.newMeth(C$, 'isBonded$D$D$D',  function (covalentRadiusA, covalentRadiusB, distance2) {
var maxAcceptable=covalentRadiusA + covalentRadiusB + this.bondTolerance ;
var maxAcceptable2=maxAcceptable * maxAcceptable;
var minBondDistance2=this.minBondDistance * this.minBondDistance;
if (distance2 < minBondDistance2 ) return false;
return distance2 <= maxAcceptable2 ;
}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.RebondTool, "TupleAtom", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, [['org.openscience.cdk.graph.rebond.Bspt','org.openscience.cdk.graph.rebond.Bspt.Tuple']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['atom','org.openscience.cdk.interfaces.IAtom']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtom',  function (atom) {
;C$.$init$.apply(this);
this.atom=atom;
}, 1);

Clazz.newMeth(C$, 'getDimValue$I',  function (dim) {
if (dim == 0) return this.atom.getPoint3d$().x;
if (dim == 1) return this.atom.getPoint3d$().y;
return this.atom.getPoint3d$().z;
});

Clazz.newMeth(C$, 'getAtom$',  function () {
return this.atom;
});

Clazz.newMeth(C$, 'toString',  function () {
return ("<" + new Double(this.atom.getPoint3d$().x).toString() + "," + new Double(this.atom.getPoint3d$().y).toString() + "," + new Double(this.atom.getPoint3d$().z).toString() + ">" );
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
