(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'org.openscience.cdk.interfaces.IAtomContainer','org.openscience.cdk.graph.PathTools','org.openscience.cdk.interfaces.IRing','org.openscience.cdk.interfaces.IRingSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SpanningTree");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.parent=null;
this.cb=null;
this.sptSize=0;
this.edrSize=0;
this.bondsAcyclicCount=0;
this.bondsCyclicCount=0;
this.molecule=null;
this.totalEdgeCount=0;
this.totalVertexCount=0;
},1);

C$.$fields$=[['Z',['disconnected','identifiedBonds'],'I',['sptSize','edrSize','bondsAcyclicCount','bondsCyclicCount','totalEdgeCount','totalVertexCount'],'O',['parent','int[]','cb','int[][]','bondsInTree','boolean[]','molecule','org.openscience.cdk.interfaces.IAtomContainer']]]

Clazz.newMeth(C$, 'isDisconnected$',  function () {
return this.disconnected;
});

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
;C$.$init$.apply(this);
this.identifiedBonds=false;
p$1.buildSpanningTree$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [atomContainer]);
}, 1);

Clazz.newMeth(C$, 'fastfind$I$I$Z',  function (vertex1, vertex2, union) {
var i=vertex1;
while (this.parent[i] > 0)i=this.parent[i];

var j=vertex2;
while (this.parent[j] > 0)j=this.parent[j];

var t;
while (this.parent[vertex1] > 0){
t=vertex1;
vertex1=this.parent[vertex1];
this.parent[t]=i;
}
while (this.parent[vertex2] > 0){
t=vertex2;
vertex2=this.parent[vertex2];
this.parent[t]=j;
}
if (union && (i != j) ) {
if (this.parent[j] < this.parent[i]) {
this.parent[j]=this.parent[j] + this.parent[i] - 1;
this.parent[i]=j;
} else {
this.parent[i]=this.parent[i] + this.parent[j] - 1;
this.parent[j]=i;
}}return (i != j);
}, p$1);

Clazz.newMeth(C$, 'fastFindInit$I',  function (vertexCount) {
this.parent=Clazz.array(Integer.TYPE, [vertexCount + 1]);
for (var i=1; i <= vertexCount; i++) {
this.parent[i]=0;
}
}, p$1);

Clazz.newMeth(C$, 'buildSpanningTree$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
this.disconnected=false;
this.molecule=atomContainer;
this.totalVertexCount=atomContainer.getAtomCount$();
this.totalEdgeCount=atomContainer.getBondCount$();
this.sptSize=0;
this.edrSize=0;
p$1.fastFindInit$I.apply(this, [this.totalVertexCount]);
for (var i=0; i < this.totalVertexCount; i++) {
(atomContainer.getAtom$I(i)).setProperty$O$O("ST_ATOMNO", Integer.toString$I(i + 1));
}
var bond;
var vertex1;
var vertex2;
this.bondsInTree=Clazz.array(Boolean.TYPE, [this.totalEdgeCount]);
for (var b=0; b < this.totalEdgeCount; b++) {
this.bondsInTree[b]=false;
bond=atomContainer.getBond$I(b);
vertex1=Integer.parseInt$S((bond.getBegin$()).getProperty$O("ST_ATOMNO").toString());
vertex2=Integer.parseInt$S((bond.getEnd$()).getProperty$O("ST_ATOMNO").toString());
if (p$1.fastfind$I$I$Z.apply(this, [vertex1, vertex2, true])) {
this.bondsInTree[b]=true;
++this.sptSize;
}if (this.sptSize >= (this.totalVertexCount - 1)) break;
}
if (this.sptSize != (this.totalVertexCount - 1)) this.disconnected=true;
for (var b=0; b < this.totalEdgeCount; b++) if (!this.bondsInTree[b]) {
++this.edrSize;
}
this.cb=Clazz.array(Integer.TYPE, [this.edrSize, this.totalEdgeCount]);
for (var i=0; i < this.edrSize; i++) for (var a=0; a < this.totalEdgeCount; a++) this.cb[i][a]=0;


for (var atom, $atom = atomContainer.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) atom.removeProperty$O("ST_ATOMNO");

}, p$1);

Clazz.newMeth(C$, 'getSpanningTree$',  function () {
var container=this.molecule.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(1),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
for (var a=0; a < this.totalVertexCount; a++) container.addAtom$org_openscience_cdk_interfaces_IAtom(this.molecule.getAtom$I(a));

for (var b=0; b < this.totalEdgeCount; b++) if (this.bondsInTree[b]) container.addBond$org_openscience_cdk_interfaces_IBond(this.molecule.getBond$I(b));

return container;
});

Clazz.newMeth(C$, 'getPath$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (spt, atom1, atom2) {
var path=spt.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(1),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
$I$(2).resetFlags$org_openscience_cdk_interfaces_IAtomContainer(spt);
path.addAtom$org_openscience_cdk_interfaces_IAtom(atom1);
$I$(2).depthFirstTargetSearch$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer(spt, atom1, atom2, path);
if (path.getAtomCount$() == 1) path.removeAtomOnly$org_openscience_cdk_interfaces_IAtom(atom1);
return path;
});

Clazz.newMeth(C$, 'getRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IBond',  function (spt, bond) {
var ring=spt.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(3),['clone$','getBondOrderSum$','getNextBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom','getRingSize$']), Clazz.array(java.lang.Object, -1, []));
$I$(2).resetFlags$org_openscience_cdk_interfaces_IAtomContainer(spt);
ring.addAtom$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
$I$(2,"depthFirstTargetSearch$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer",[spt, bond.getBegin$(), bond.getEnd$(), ring]);
ring.addBond$org_openscience_cdk_interfaces_IBond(bond);
return ring;
}, p$1);

Clazz.newMeth(C$, 'getBondsInRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IRing$IA',  function (mol, ring, bonds) {
for (var i=0; i < ring.getBondCount$(); i++) {
var m=mol.indexOf$org_openscience_cdk_interfaces_IBond(ring.getBond$I(i));
bonds[m]=1;
}
}, p$1);

Clazz.newMeth(C$, 'getBasicRings$',  function () {
var ringset=this.molecule.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(4),['add$org_openscience_cdk_interfaces_IRingSet','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IAtomContainer','getConnectedRings$org_openscience_cdk_interfaces_IRing','getRings$org_openscience_cdk_interfaces_IBond','getRings$org_openscience_cdk_interfaces_IAtom','isEmpty$']), Clazz.array(java.lang.Object, -1, []));
var spt=this.getSpanningTree$();
for (var i=0; i < this.totalEdgeCount; i++) if (!this.bondsInTree[i]) ringset.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(p$1.getRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IBond.apply(this, [spt, this.molecule.getBond$I(i)]));

return ringset;
});

Clazz.newMeth(C$, 'getCyclicFragmentsContainer$',  function () {
var fragContainer=this.molecule.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(1),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
var spt=this.getSpanningTree$();
for (var i=0; i < this.totalEdgeCount; i++) if (!this.bondsInTree[i]) {
var ring=p$1.getRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IBond.apply(this, [spt, this.molecule.getBond$I(i)]);
for (var b=0; b < ring.getBondCount$(); b++) {
var ringBond=ring.getBond$I(b);
if (!fragContainer.contains$org_openscience_cdk_interfaces_IBond(ringBond)) {
for (var atomCount=0; atomCount < ringBond.getAtomCount$(); atomCount++) {
var atom=ringBond.getAtom$I(atomCount);
if (!fragContainer.contains$org_openscience_cdk_interfaces_IAtom(atom)) {
atom.setFlag$I$Z(2, true);
fragContainer.addAtom$org_openscience_cdk_interfaces_IAtom(atom);
}}
fragContainer.addBond$org_openscience_cdk_interfaces_IBond(ringBond);
}}
}
return fragContainer;
});

Clazz.newMeth(C$, 'identifyBonds',  function () {
var spt=this.getSpanningTree$();
var ring;
var nBasicRings=0;
for (var i=0; i < this.totalEdgeCount; i++) {
if (!this.bondsInTree[i]) {
ring=p$1.getRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IBond.apply(this, [spt, this.molecule.getBond$I(i)]);
for (var b=0; b < ring.getBondCount$(); b++) {
var m=this.molecule.indexOf$org_openscience_cdk_interfaces_IBond(ring.getBond$I(b));
this.cb[nBasicRings][m]=1;
}
++nBasicRings;
}}
this.bondsAcyclicCount=0;
this.bondsCyclicCount=0;
for (var i=0; i < this.totalEdgeCount; i++) {
var s=0;
for (var j=0; j < nBasicRings; j++) {
s+=this.cb[j][i];
}
switch (s) {
case (0):
{
++this.bondsAcyclicCount;
break;
}case (1):
{
++this.bondsCyclicCount;
break;
}default:
{
++this.bondsCyclicCount;
}}
}
this.identifiedBonds=true;
}, p$1);

Clazz.newMeth(C$, 'getAllRings$',  function () {
var ringset=this.getBasicRings$();
var newring;
var nBasicRings=ringset.getAtomContainerCount$();
for (var i=0; i < nBasicRings; i++) p$1.getBondsInRing$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IRing$IA.apply(this, [this.molecule, ringset.getAtomContainer$I(i), this.cb[i]]);

for (var i=0; i < nBasicRings; i++) {
for (var j=i + 1; j < nBasicRings; j++) {
newring=p$1.combineRings$org_openscience_cdk_interfaces_IRingSet$I$I.apply(this, [ringset, i, j]);
if (newring != null ) ringset.addAtomContainer$org_openscience_cdk_interfaces_IAtomContainer(newring);
}
}
return ringset;
});

Clazz.newMeth(C$, 'getSpanningTreeSize$',  function () {
return this.sptSize;
});

Clazz.newMeth(C$, 'combineRings$org_openscience_cdk_interfaces_IRingSet$I$I',  function (ringset, i, j) {
var c=0;
for (var b=0; b < this.cb[i].length; b++) {
c=this.cb[i][b] + this.cb[j][b];
if (c > 1) break;
}
if (c < 2) return null;
var ring=this.molecule.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(3),['clone$','getBondOrderSum$','getNextBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IAtom','getRingSize$']), Clazz.array(java.lang.Object, -1, []));
var ring1=ringset.getAtomContainer$I(i);
var ring2=ringset.getAtomContainer$I(j);
for (var a=0; a < ring1.getAtomCount$(); a++) ring.addAtom$org_openscience_cdk_interfaces_IAtom(ring1.getAtom$I(a));

for (var a=0; a < ring2.getAtomCount$(); a++) ring.addAtom$org_openscience_cdk_interfaces_IAtom(ring2.getAtom$I(a));

for (var b=0; b < this.cb[i].length; b++) {
c=this.cb[i][b] + this.cb[j][b];
if ((c == 1) && (this.cb[i][b] == 1) ) ring.addBond$org_openscience_cdk_interfaces_IBond(this.molecule.getBond$I(b));
 else if ((c == 1) && (this.cb[j][b] == 1) ) ring.addBond$org_openscience_cdk_interfaces_IBond(this.molecule.getBond$I(b));
}
return ring;
}, p$1);

Clazz.newMeth(C$, 'getBondsAcyclicCount$',  function () {
if (!this.identifiedBonds) p$1.identifyBonds.apply(this, []);
return this.bondsAcyclicCount;
});

Clazz.newMeth(C$, 'getBondsCyclicCount$',  function () {
if (!this.identifiedBonds) p$1.identifyBonds.apply(this, []);
return this.bondsCyclicCount;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
