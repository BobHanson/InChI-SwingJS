(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'org.openscience.cdk.interfaces.IAtomContainer','java.util.ArrayList','org.openscience.cdk.interfaces.IAtom','org.openscience.cdk.graph.matrix.AdjacencyMatrix']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "PathTools");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getInt2DColumnSum$IAA',  function (apsp) {
var colSum=Clazz.array(Integer.TYPE, [apsp.length]);
var sum;
for (var i=0; i < apsp.length; i++) {
sum=0;
for (var j=0; j < apsp.length; j++) {
sum+=apsp[i][j];
}
colSum[i]=sum;
}
return colSum;
}, 1);

Clazz.newMeth(C$, 'computeFloydAPSP$IAA',  function (costMatrix) {
var nrow=costMatrix.length;
var distMatrix=Clazz.array(Integer.TYPE, [nrow, nrow]);
for (var i=0; i < nrow; i++) {
for (var j=0; j < nrow; j++) {
if (costMatrix[i][j] == 0) {
distMatrix[i][j]=999999999;
} else {
distMatrix[i][j]=1;
}}
}
for (var i=0; i < nrow; i++) {
distMatrix[i][i]=0;
}
for (var k=0; k < nrow; k++) {
for (var i=0; i < nrow; i++) {
for (var j=0; j < nrow; j++) {
if (distMatrix[i][k] + distMatrix[k][j] < distMatrix[i][j]) {
distMatrix[i][j]=distMatrix[i][k] + distMatrix[k][j];
}}
}
}
return distMatrix;
}, 1);

Clazz.newMeth(C$, 'computeFloydAPSP$DAA',  function (costMatrix) {
var nrow=costMatrix.length;
var distMatrix=Clazz.array(Integer.TYPE, [nrow, nrow]);
for (var i=0; i < nrow; i++) {
for (var j=0; j < nrow; j++) {
if (costMatrix[i][j] == 0 ) {
distMatrix[i][j]=0;
} else {
distMatrix[i][j]=1;
}}
}
return C$.computeFloydAPSP$IAA(distMatrix);
}, 1);

Clazz.newMeth(C$, 'depthFirstTargetSearch$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer',  function (molecule, root, target, path) {
var bonds=molecule.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(root);
var nextAtom;
root.setFlag$I$Z(16, true);
var first=path.isEmpty$();
if (first) path.addAtom$org_openscience_cdk_interfaces_IAtom(root);
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
nextAtom=bond.getOther$org_openscience_cdk_interfaces_IAtom(root);
if (!nextAtom.getFlag$I(16)) {
path.addAtom$org_openscience_cdk_interfaces_IAtom(nextAtom);
path.addBond$org_openscience_cdk_interfaces_IBond(bond);
if (nextAtom.equals$O(target)) {
if (first) path.removeAtomOnly$org_openscience_cdk_interfaces_IAtom(root);
return true;
} else {
if (!C$.depthFirstTargetSearch$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer(molecule, nextAtom, target, path)) {
path.removeAtomOnly$org_openscience_cdk_interfaces_IAtom(nextAtom);
path.removeBond$org_openscience_cdk_interfaces_IBond(bond);
} else {
if (first) path.removeAtomOnly$org_openscience_cdk_interfaces_IAtom(root);
return true;
}}}}
if (first) path.removeAtomOnly$org_openscience_cdk_interfaces_IAtom(root);
return false;
}, 1);

Clazz.newMeth(C$, 'breadthFirstSearch$org_openscience_cdk_interfaces_IAtomContainer$java_util_List$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer, sphere, molecule) {
C$.breadthFirstSearch$org_openscience_cdk_interfaces_IAtomContainer$java_util_List$org_openscience_cdk_interfaces_IAtomContainer$I(atomContainer, sphere, molecule, -1);
}, 1);

Clazz.newMeth(C$, 'findClosestByBond$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$I',  function (atomContainer, atom, max) {
var mol=atomContainer.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(1),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
var v=Clazz.new_($I$(2,1));
v.add$O(atom);
C$.breadthFirstSearch$org_openscience_cdk_interfaces_IAtomContainer$java_util_List$org_openscience_cdk_interfaces_IAtomContainer$I(atomContainer, v, mol, max);
var returnValue=Clazz.array($I$(3), [mol.getAtomCount$() - 1]);
var k=0;
for (var i=0; i < mol.getAtomCount$(); i++) {
if (!mol.getAtom$I(i).equals$O(atom)) {
returnValue[k]=mol.getAtom$I(i);
++k;
}}
return (returnValue);
}, 1);

Clazz.newMeth(C$, 'breadthFirstSearch$org_openscience_cdk_interfaces_IAtomContainer$java_util_List$org_openscience_cdk_interfaces_IAtomContainer$I',  function (atomContainer, sphere, molecule, max) {
var nextAtom;
var newSphere=Clazz.new_($I$(2,1));
for (var atom, $atom = sphere.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
molecule.addAtom$org_openscience_cdk_interfaces_IAtom(atom);
var lonePairs=atomContainer.getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom(atom);
for (var lonePair, $lonePair = lonePairs.iterator$(); $lonePair.hasNext$()&&((lonePair=($lonePair.next$())),1);) molecule.addLonePair$org_openscience_cdk_interfaces_ILonePair(lonePair);

var singleElectrons=atomContainer.getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom(atom);
for (var singleElectron, $singleElectron = singleElectrons.iterator$(); $singleElectron.hasNext$()&&((singleElectron=($singleElectron.next$())),1);) molecule.addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron(singleElectron);

var bonds=atomContainer.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom);
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
nextAtom=bond.getOther$org_openscience_cdk_interfaces_IAtom(atom);
if (!bond.getFlag$I(16)) {
molecule.addAtom$org_openscience_cdk_interfaces_IAtom(nextAtom);
molecule.addBond$org_openscience_cdk_interfaces_IBond(bond);
bond.setFlag$I$Z(16, true);
}if (!nextAtom.getFlag$I(16)) {
newSphere.add$O(nextAtom);
nextAtom.setFlag$I$Z(16, true);
}}
if (max > -1 && molecule.getAtomCount$() > max ) return;
}
if (newSphere.size$() > 0) {
C$.breadthFirstSearch$org_openscience_cdk_interfaces_IAtomContainer$java_util_List$org_openscience_cdk_interfaces_IAtomContainer$I(atomContainer, newSphere, molecule, max);
}}, 1);

Clazz.newMeth(C$, 'breadthFirstTargetSearch$org_openscience_cdk_interfaces_IAtomContainer$java_util_List$org_openscience_cdk_interfaces_IAtom$I$I',  function (atomContainer, sphere, target, pathLength, cutOff) {
if (pathLength == 0) C$.resetFlags$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
++pathLength;
if (pathLength > cutOff) {
return -1;
}var nextAtom;
var newSphere=Clazz.new_($I$(2,1));
for (var atom, $atom = sphere.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var bonds=atomContainer.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom);
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (!bond.getFlag$I(16)) {
bond.setFlag$I$Z(16, true);
}nextAtom=bond.getOther$org_openscience_cdk_interfaces_IAtom(atom);
if (!nextAtom.getFlag$I(16)) {
if (nextAtom.equals$O(target)) {
return pathLength;
}newSphere.add$O(nextAtom);
nextAtom.setFlag$I$Z(16, true);
}}
}
if (newSphere.size$() > 0) {
return C$.breadthFirstTargetSearch$org_openscience_cdk_interfaces_IAtomContainer$java_util_List$org_openscience_cdk_interfaces_IAtom$I$I(atomContainer, newSphere, target, pathLength, cutOff);
}return -1;
}, 1);

Clazz.newMeth(C$, 'resetFlags$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
for (var f=0; f < atomContainer.getAtomCount$(); f++) {
atomContainer.getAtom$I(f).setFlag$I$Z(16, false);
}
for (var f=0; f < atomContainer.getBondCount$(); f++) {
atomContainer.getBond$I(f).setFlag$I$Z(16, false);
}
}, 1);

Clazz.newMeth(C$, 'getMolecularGraphRadius$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var natom=atomContainer.getAtomCount$();
var admat=$I$(4).getMatrix$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
var distanceMatrix=C$.computeFloydAPSP$IAA(admat);
var eta=Clazz.array(Integer.TYPE, [natom]);
for (var i=0; i < natom; i++) {
var max=-99999;
for (var j=0; j < natom; j++) {
if (distanceMatrix[i][j] > max) max=distanceMatrix[i][j];
}
eta[i]=max;
}
var min=999999;
for (var anEta, $anEta = 0, $$anEta = eta; $anEta<$$anEta.length&&((anEta=($$anEta[$anEta])),1);$anEta++) {
if (anEta < min) min=anEta;
}
return min;
}, 1);

Clazz.newMeth(C$, 'getMolecularGraphDiameter$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var natom=atomContainer.getAtomCount$();
var admat=$I$(4).getMatrix$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
var distanceMatrix=C$.computeFloydAPSP$IAA(admat);
var eta=Clazz.array(Integer.TYPE, [natom]);
for (var i=0; i < natom; i++) {
var max=-99999;
for (var j=0; j < natom; j++) {
if (distanceMatrix[i][j] > max) max=distanceMatrix[i][j];
}
eta[i]=max;
}
var max=-999999;
for (var anEta, $anEta = 0, $$anEta = eta; $anEta<$$anEta.length&&((anEta=($$anEta[$anEta])),1);$anEta++) {
if (anEta > max) max=anEta;
}
return max;
}, 1);

Clazz.newMeth(C$, 'getVertexCountAtDistance$org_openscience_cdk_interfaces_IAtomContainer$I',  function (atomContainer, distance) {
var natom=atomContainer.getAtomCount$();
var admat=$I$(4).getMatrix$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
var distanceMatrix=C$.computeFloydAPSP$IAA(admat);
var matches=0;
for (var i=0; i < natom; i++) {
for (var j=0; j < natom; j++) {
if (distanceMatrix[i][j] == distance) ++matches;
}
}
return (matches/2|0);
}, 1);

Clazz.newMeth(C$, 'getShortestPath$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atomContainer, start, end) {
var natom=atomContainer.getAtomCount$();
var endNumber=atomContainer.indexOf$org_openscience_cdk_interfaces_IAtom(end);
var startNumber=atomContainer.indexOf$org_openscience_cdk_interfaces_IAtom(start);
var dist=Clazz.array(Integer.TYPE, [natom]);
var previous=Clazz.array(Integer.TYPE, [natom]);
for (var i=0; i < natom; i++) {
dist[i]=99999999;
previous[i]=-1;
}
dist[atomContainer.indexOf$org_openscience_cdk_interfaces_IAtom(start)]=0;
var qList=Clazz.new_($I$(2,1));
for (var i=0; i < natom; i++) qList.add$O(Integer.valueOf$I(i));

while (true){
if (qList.size$() == 0) break;
var u=999999;
var index=0;
for (var tmp, $tmp = qList.iterator$(); $tmp.hasNext$()&&((tmp=($tmp.next$())),1);) {
if (dist[(tmp).$c()] < u) {
u=dist[(tmp).$c()];
index=(tmp).$c();
}}
qList.remove$O(index);
if (index == endNumber) break;
var connected=atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(atomContainer.getAtom$I(index));
for (var aConnected, $aConnected = connected.iterator$(); $aConnected.hasNext$()&&((aConnected=($aConnected.next$())),1);) {
var anum=atomContainer.indexOf$org_openscience_cdk_interfaces_IAtom(aConnected);
if (dist[anum] > dist[index] + 1) {
dist[anum]=dist[index] + 1;
previous[anum]=index;
}}
}
var tmp=Clazz.new_($I$(2,1));
var tmpSerial=endNumber;
while (true){
tmp.add$I$O(0, atomContainer.getAtom$I(tmpSerial));
tmpSerial=previous[tmpSerial];
if (tmpSerial == startNumber) {
tmp.add$I$O(0, atomContainer.getAtom$I(tmpSerial));
break;
}}
return tmp;
}, 1);

Clazz.newMeth(C$, 'getAllPaths$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atomContainer, start, end) {
var allPaths=Clazz.new_($I$(2,1));
if (start.equals$O(end)) return allPaths;
C$.findPathBetween$java_util_List$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List(allPaths, atomContainer, start, end, Clazz.new_($I$(2,1)));
return allPaths;
}, 1);

Clazz.newMeth(C$, 'findPathBetween$java_util_List$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List',  function (allPaths, atomContainer, start, end, path) {
if (start.equals$O(end)) {
path.add$O(start);
allPaths.add$O(Clazz.new_($I$(2,1).c$$java_util_Collection,[path]));
path.remove$I(path.size$() - 1);
return;
}if (path.contains$O(start)) return;
path.add$O(start);
var nbrs=atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(start);
for (var nbr, $nbr = nbrs.iterator$(); $nbr.hasNext$()&&((nbr=($nbr.next$())),1);) C$.findPathBetween$java_util_List$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$java_util_List(allPaths, atomContainer, nbr, end, path);

path.remove$I(path.size$() - 1);
}, 1);

Clazz.newMeth(C$, 'getPathsOfLength$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$I',  function (atomContainer, start, length) {
var curPath=Clazz.new_($I$(2,1));
var paths=Clazz.new_($I$(2,1));
curPath.add$O(start);
paths.add$O(curPath);
for (var i=0; i < length; i++) {
var tmpList=Clazz.new_($I$(2,1));
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
curPath=path;
var lastVertex=curPath.get$I(curPath.size$() - 1);
var neighbors=atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(lastVertex);
for (var neighbor, $neighbor = neighbors.iterator$(); $neighbor.hasNext$()&&((neighbor=($neighbor.next$())),1);) {
var newPath=Clazz.new_($I$(2,1).c$$java_util_Collection,[curPath]);
if (newPath.contains$O(neighbor)) continue;
newPath.add$O(neighbor);
tmpList.add$O(newPath);
}
}
paths.clear$();
paths.addAll$java_util_Collection(tmpList);
}
return (paths);
}, 1);

Clazz.newMeth(C$, 'getPathsOfLengthUpto$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$I',  function (atomContainer, start, length) {
var curPath=Clazz.new_($I$(2,1));
var paths=Clazz.new_($I$(2,1));
var allpaths=Clazz.new_($I$(2,1));
curPath.add$O(start);
paths.add$O(curPath);
allpaths.add$O(curPath);
for (var i=0; i < length; i++) {
var tmpList=Clazz.new_($I$(2,1));
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
curPath=path;
var lastVertex=curPath.get$I(curPath.size$() - 1);
var neighbors=atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(lastVertex);
for (var neighbor, $neighbor = neighbors.iterator$(); $neighbor.hasNext$()&&((neighbor=($neighbor.next$())),1);) {
var newPath=Clazz.new_($I$(2,1).c$$java_util_Collection,[curPath]);
if (newPath.contains$O(neighbor)) continue;
newPath.add$O(neighbor);
tmpList.add$O(newPath);
}
}
paths.clear$();
paths.addAll$java_util_Collection(tmpList);
allpaths.addAll$java_util_Collection(tmpList);
}
return (allpaths);
}, 1);

Clazz.newMeth(C$, 'getLimitedPathsOfLengthUpto$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$I$I',  function (atomContainer, start, length, limit) {
var curPath=Clazz.new_($I$(2,1));
var paths=Clazz.new_($I$(2,1));
var allpaths=Clazz.new_($I$(2,1));
curPath.add$O(start);
paths.add$O(curPath);
allpaths.add$O(curPath);
for (var i=0; i < length; i++) {
var tmpList=Clazz.new_($I$(2,1));
for (var path, $path = paths.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
curPath=path;
var lastVertex=curPath.get$I(curPath.size$() - 1);
var neighbors=atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(lastVertex);
for (var neighbor, $neighbor = neighbors.iterator$(); $neighbor.hasNext$()&&((neighbor=($neighbor.next$())),1);) {
var newPath=Clazz.new_($I$(2,1).c$$java_util_Collection,[curPath]);
if (newPath.contains$O(neighbor)) continue;
newPath.add$O(neighbor);
tmpList.add$O(newPath);
}
}
if (allpaths.size$() + tmpList.size$() > limit) throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.CDKException').c$$S,["Too many paths generate. We\'re working making this faster but for now try generating paths with a smaller length"]);
paths.clear$();
paths.addAll$java_util_Collection(tmpList);
allpaths.addAll$java_util_Collection(tmpList);
}
return (allpaths);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
