(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),p$1={},I$=[[0,['org.openscience.cdk.stereo.Stereocenters','.Type'],'java.util.Arrays',['org.openscience.cdk.graph.GraphUtil','.EdgeToBondMap'],'org.openscience.cdk.graph.GraphUtil','org.openscience.cdk.ringsearch.RingSearch',['org.openscience.cdk.stereo.Stereocenters','.StereoElement'],['org.openscience.cdk.stereo.Stereocenters','.Stereocenter'],'org.openscience.cdk.graph.invariant.Canon',['org.openscience.cdk.interfaces.IBond','.Order'],['org.openscience.cdk.stereo.Stereocenters','.Bicoordinate'],['org.openscience.cdk.stereo.Stereocenters','.Tricoordinate'],['org.openscience.cdk.stereo.Stereocenters','.Tetracoordinate'],'java.util.ArrayList','java.util.BitSet']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "Stereocenters", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Stereocenter',25],['Type',25],['StereoElement',1034],['Bicoordinate',26],['Tetracoordinate',26],['Tricoordinate',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.checkSymmetry=false;
},1);

C$.$fields$=[['Z',['checkSymmetry'],'I',['numStereoElements'],'O',['container','org.openscience.cdk.interfaces.IAtomContainer','g','int[][]','bondMap','org.openscience.cdk.graph.GraphUtil.EdgeToBondMap','stereocenters','org.openscience.cdk.stereo.Stereocenters.Stereocenter[]','elements','org.openscience.cdk.stereo.Stereocenters.StereoElement[]','ringSearch','org.openscience.cdk.ringsearch.RingSearch']]]

Clazz.newMeth(C$, 'of$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var bondMap=$I$(3).withSpaceFor$org_openscience_cdk_interfaces_IAtomContainer(container);
var g=$I$(4).toAdjList$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(container, bondMap);
var stereocenters=Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap,[container, g, bondMap]);
stereocenters.checkSymmetry$();
return stereocenters;
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (container, graph, bondMap) {
;C$.$init$.apply(this);
this.container=container;
this.bondMap=bondMap;
this.g=graph;
this.ringSearch=Clazz.new_($I$(5,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA,[container, graph]);
this.elements=Clazz.array($I$(6), [this.g.length]);
this.stereocenters=Clazz.array($I$(7), [this.g.length]);
this.numStereoElements=p$1.createElements.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'checkSymmetry$',  function () {
if (!this.checkSymmetry) {
this.checkSymmetry=true;
this.numStereoElements=p$1.createElements.apply(this, []);
var symmetry=C$.toIntArray$JA($I$(8).symmetry$org_openscience_cdk_interfaces_IAtomContainer$IAA(this.container, this.g));
p$1.labelTrueCenters$IA.apply(this, [symmetry]);
p$1.labelIsolatedPara$IA.apply(this, [symmetry]);
}});

Clazz.newMeth(C$, 'elementType$I',  function (v) {
if (this.stereocenters[v] === $I$(7).Non  || this.elements[v] == null  ) return $I$(1).None;
 else return this.elements[v].type;
});

Clazz.newMeth(C$, 'isSymmetryChecked$',  function () {
return this.checkSymmetry;
});

Clazz.newMeth(C$, 'isStereocenter$I',  function (v) {
return this.stereocenters[v] === $I$(7).True  || this.stereocenters[v] === $I$(7).Para  ;
});

Clazz.newMeth(C$, 'stereocenterType$I',  function (v) {
return this.stereocenters[v];
});

Clazz.newMeth(C$, 'createElements',  function () {
var tricoordinate=Clazz.array(Boolean.TYPE, [this.g.length]);
var nElements=0;
$I$(2,"fill$OA$O",[this.stereocenters, $I$(7).Non]);
 VERTICES : for (var i=0; i < this.g.length; i++) {
var h=(this.container.getAtom$I(i).getImplicitHydrogenCount$()).$c();
var x=this.g[i].length + h;
var d=this.g[i].length;
var v=h;
if (x < 2 || x > 4  || h > 1 ) continue;
var piNeighbor=0;
for (var w, $w = 0, $$w = this.g[i]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (C$.atomicNumber$org_openscience_cdk_interfaces_IAtom(this.container.getAtom$I(w)) == 1 && this.container.getAtom$I(w).getMassNumber$() == null  ) ++h;
switch (this.bondMap.get$I$I(i, w).getOrder$()) {
case $I$(9).SINGLE:
++v;
break;
case $I$(9).DOUBLE:
v+=2;
piNeighbor=w;
break;
default:
continue VERTICES;
}
}
switch (p$1.supportedType$I$I$I$I$I.apply(this, [i, v, d, h, x])) {
case $I$(1).Bicoordinate:
this.stereocenters[i]=$I$(7).Potential;
this.elements[i]=Clazz.new_($I$(10,1).c$$I$IA,[i, this.g[i]]);
++nElements;
var u=this.g[i][0];
var w=this.g[i][1];
if (tricoordinate[u]) {
this.stereocenters[u]=$I$(7).Potential;
this.elements[u]=Clazz.new_($I$(11,1).c$$I$I$IA,[u, i, this.g[u]]);
}if (tricoordinate[w]) {
this.stereocenters[w]=$I$(7).Potential;
this.elements[w]=Clazz.new_($I$(11,1).c$$I$I$IA,[w, i, this.g[w]]);
}break;
case $I$(1).Tricoordinate:
u=i;
w=piNeighbor;
tricoordinate[u]=true;
if (!tricoordinate[w]) {
if (this.elements[w] != null  && this.elements[w].type === $I$(1).Bicoordinate  ) {
this.stereocenters[u]=$I$(7).Potential;
this.elements[u]=Clazz.new_($I$(11,1).c$$I$I$IA,[u, w, this.g[u]]);
}continue;
}this.stereocenters[w]=$I$(7).Potential;
this.stereocenters[u]=$I$(7).Potential;
this.elements[u]=Clazz.new_($I$(11,1).c$$I$I$IA,[u, w, this.g[u]]);
this.elements[w]=Clazz.new_($I$(11,1).c$$I$I$IA,[w, u, this.g[w]]);
++nElements;
break;
case $I$(1).Tetracoordinate:
this.elements[i]=Clazz.new_($I$(12,1).c$$I$IA,[i, this.g[i]]);
this.stereocenters[i]=$I$(7).Potential;
++nElements;
break;
default:
this.stereocenters[i]=$I$(7).Non;
}
}
for (var v=0; v < this.g.length; v++) {
if (this.elements[v] != null  && this.elements[v].type === $I$(1).Bicoordinate  ) {
var u=this.elements[v].neighbors[0];
var w=this.elements[v].neighbors[1];
if (this.elements[u] != null  && this.elements[w] != null   && this.elements[u].type === $I$(1).Tricoordinate   && this.elements[w].type === $I$(1).Tricoordinate  ) {
(this.elements[u]).other=w;
(this.elements[w]).other=u;
}}}
return nElements;
}, p$1);

Clazz.newMeth(C$, 'labelTrueCenters$IA',  function (symmetry) {
var visited=Clazz.array(Boolean.TYPE, [symmetry.length + 1]);
for (var v=0; v < this.g.length; v++) {
if (this.stereocenters[v] === $I$(7).Potential ) {
var ws=this.elements[v].neighbors;
var nUnique=0;
var terminal=true;
for (var w, $w = 0, $$w = ws; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (!visited[symmetry[w]]) {
visited[symmetry[w]]=true;
++nUnique;
} else {
if (this.g[w].length > 1) terminal=false;
}}
for (var w, $w = 0, $$w = ws; $w<$$w.length&&((w=($$w[$w])),1);$w++) visited[symmetry[w]]=false;

if (nUnique == ws.length) this.stereocenters[v]=$I$(7).True;
 else if (terminal) this.stereocenters[v]=$I$(7).Non;
}}
}, p$1);

Clazz.newMeth(C$, 'labelIsolatedPara$IA',  function (symmetry) {
var visited=Clazz.array(Boolean.TYPE, [symmetry.length + 1]);
for (var isolated, $isolated = 0, $$isolated = this.ringSearch.isolated$(); $isolated<$$isolated.length&&((isolated=($$isolated[$isolated])),1);$isolated++) {
var potential=Clazz.new_($I$(13,1));
var trueCentres=Clazz.new_($I$(13,1));
var cyclic=Clazz.new_($I$(14,1));
for (var v, $v = 0, $$v = isolated; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
cyclic.set$I(v);
if (this.stereocenters[v] === $I$(7).Potential ) potential.add$O(this.elements[v]);
 else if (this.stereocenters[v] === $I$(7).True ) trueCentres.add$O(this.elements[v]);
}
if (potential.size$() + trueCentres.size$() < 2) {
for (var element, $element = potential.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) this.stereocenters[element.focus]=$I$(7).Non;

continue;
}var paraElements=Clazz.new_($I$(13,1));
for (var element, $element = potential.iterator$(); $element.hasNext$()&&((element=($element.next$())),1);) {
if (element.type === $I$(1).Tetracoordinate ) {
var ws=element.neighbors;
var nUnique=0;
var terminal=true;
for (var w, $w = 0, $$w = ws; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
if (!cyclic.get$I(w)) {
if (!visited[symmetry[w]]) {
visited[symmetry[w]]=true;
++nUnique;
} else {
if (this.g[w].length > 1) terminal=false;
}}}
for (var w, $w = 0, $$w = ws; $w<$$w.length&&((w=($$w[$w])),1);$w++) visited[symmetry[w]]=false;

var deg=this.g[element.focus].length;
if (deg == 3 || (deg == 4 && nUnique == 2 ) ) paraElements.add$O(element);
if (deg == 4 && nUnique == 1  && terminal ) this.stereocenters[element.focus]=$I$(7).Non;
} else if (element.type === $I$(1).Tricoordinate ) {
var either=element;
if (this.stereocenters[either.other] === $I$(7).True ) paraElements.add$O(element);
}}
if (paraElements.size$() + trueCentres.size$() >= 2) for (var para, $para = paraElements.iterator$(); $para.hasNext$()&&((para=($para.next$())),1);) this.stereocenters[para.focus]=$I$(7).Para;

 else for (var para, $para = paraElements.iterator$(); $para.hasNext$()&&((para=($para.next$())),1);) this.stereocenters[para.focus]=$I$(7).Non;

}
}, p$1);

Clazz.newMeth(C$, 'supportedType$I$I$I$I$I',  function (i, v, d, h, x) {
var atom=this.container.getAtom$I(i);
var q=C$.charge$org_openscience_cdk_interfaces_IAtom(atom);
if (this.checkSymmetry && h > 1 ) return $I$(1).None;
switch (C$.atomicNumber$org_openscience_cdk_interfaces_IAtom(atom)) {
case 0:
return $I$(1).None;
case 5:
return q == -1 && v == 4  && x == 4  ? $I$(1).Tetracoordinate : $I$(1).None;
case 6:
if (v != 4 || q != 0 ) return $I$(1).None;
if (x == 2) return $I$(1).Bicoordinate;
if (x == 3) return $I$(1).Tricoordinate;
if (x == 4) return $I$(1).Tetracoordinate;
return $I$(1).None;
case 7:
if (x == 2 && v == 3  && d == 2  && q == 0 ) return $I$(1).Tricoordinate;
if (x == 3 && v == 4  && q == 1 ) return $I$(1).Tricoordinate;
if (x == 4 && h == 0  && (q == 0 && v == 5  || q == 1 && v == 4  ) ) return p$1.verifyTerminalHCount$I.apply(this, [i]) ? $I$(1).Tetracoordinate : $I$(1).None;
return x == 3 && h == 0  && v == 3  && q == 0  && (p$1.isBridgeHead$I.apply(this, [i]) || p$1.inThreeMemberRing$I.apply(this, [i]) )  ? $I$(1).Tetracoordinate : $I$(1).None;
case 14:
if (v != 4 || q != 0 ) return $I$(1).None;
if (x == 3) return $I$(1).Tricoordinate;
if (x == 4) return $I$(1).Tetracoordinate;
return $I$(1).None;
case 15:
if (x == 4 && (q == 0 && v == 5  && h == 0  || q == 1 && v == 4  ) ) return p$1.verifyTerminalHCount$I.apply(this, [i]) ? $I$(1).Tetracoordinate : $I$(1).None;
if (x == 3 && q == 0  && v == 3  && h == 0 ) return p$1.verifyTerminalHCount$I.apply(this, [i]) ? $I$(1).Tetracoordinate : $I$(1).None;
case 16:
if (h > 0) return $I$(1).None;
if (q == 0 && ((v == 4 && x == 3 ) || (v == 6 && x == 4 ) ) ) return p$1.verifyTerminalHCount$I.apply(this, [i]) ? $I$(1).Tetracoordinate : $I$(1).None;
if (q == 1 && ((v == 3 && x == 3 ) || (v == 5 && x == 4 ) ) ) return p$1.verifyTerminalHCount$I.apply(this, [i]) ? $I$(1).Tetracoordinate : $I$(1).None;
return $I$(1).None;
case 32:
if (v != 4 || q != 0 ) return $I$(1).None;
if (x == 3) return $I$(1).Tricoordinate;
if (x == 4) return $I$(1).Tetracoordinate;
return $I$(1).None;
case 33:
if (x == 4 && q == 1  && v == 4 ) return p$1.verifyTerminalHCount$I.apply(this, [i]) ? $I$(1).Tetracoordinate : $I$(1).None;
return $I$(1).None;
case 34:
if (h > 0) return $I$(1).None;
if (q == 0 && ((v == 4 && x == 3 ) || (v == 6 && x == 4 ) ) ) return p$1.verifyTerminalHCount$I.apply(this, [i]) ? $I$(1).Tetracoordinate : $I$(1).None;
if (q == 1 && ((v == 3 && x == 3 ) || (v == 5 && x == 4 ) ) ) return p$1.verifyTerminalHCount$I.apply(this, [i]) ? $I$(1).Tetracoordinate : $I$(1).None;
return $I$(1).None;
case 50:
return q == 0 && v == 4  && x == 4  ? $I$(1).Tetracoordinate : $I$(1).None;
}
return $I$(1).None;
}, p$1);

Clazz.newMeth(C$, 'verifyTerminalHCount$I',  function (v) {
if (!this.checkSymmetry) return true;
var counts=Clazz.array(Integer.TYPE, [6]);
var atoms=Clazz.array(Integer.TYPE, [6, this.g[v].length]);
var found=false;
for (var w, $w = 0, $$w = this.g[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var idx=C$.indexNeighbor$org_openscience_cdk_interfaces_IAtom(this.container.getAtom$I(w));
atoms[idx][counts[idx]++]=w;
found=found || (idx > 0 && counts[idx] > 1 ) ;
}
if (!found) return true;
for (var i=1; i < counts.length; i++) {
if (counts[i] < 2) continue;
var terminalCount=0;
var terminalHCount=0;
for (var j=0; j < counts[i]; j++) {
var explHCount=0;
var ws=this.g[atoms[i][j]];
for (var w, $w = 0, $$w = this.g[atoms[i][j]]; $w<$$w.length&&((w=($$w[$w])),1);$w++) {
var atom=this.container.getAtom$I(w);
if (C$.atomicNumber$org_openscience_cdk_interfaces_IAtom(atom) == 1 && atom.getMassNumber$() == null  ) {
++explHCount;
}}
var degree=ws.length - explHCount;
if (degree == 1) {
++terminalCount;
terminalHCount+=explHCount;
var atom=this.container.getAtom$I(atoms[i][j]);
var implHCount=atom.getImplicitHydrogenCount$();
if (implHCount != null ) terminalHCount=(terminalHCount+((implHCount).valueOf())|0);
if ((atom.getFormalCharge$()).$c() === -1 ) ++terminalHCount;
}}
if (terminalCount > 1 && terminalHCount > 0 ) return false;
}
return true;
}, p$1);

Clazz.newMeth(C$, 'indexNeighbor$org_openscience_cdk_interfaces_IAtom',  function (atom) {
switch (C$.atomicNumber$org_openscience_cdk_interfaces_IAtom(atom)) {
case 7:
return 1;
case 8:
return 2;
case 16:
return 3;
case 34:
return 4;
case 52:
return 5;
default:
return 0;
}
}, 1);

Clazz.newMeth(C$, 'inThreeMemberRing$I',  function (v) {
var adj=Clazz.new_($I$(14,1));
for (var w, $w = 0, $$w = this.g[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) adj.set$I(w);

for (var w, $w = 0, $$w = this.g[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) for (var u, $u = 0, $$u = this.g[w]; $u<$$u.length&&((u=($$u[$u])),1);$u++) if (adj.get$I(u)) return true;


return false;
}, p$1);

Clazz.newMeth(C$, 'visitPart$ZA$org_openscience_cdk_interfaces_IAtom',  function (visit, atom) {
visit[this.container.indexOf$org_openscience_cdk_interfaces_IAtom(atom)]=true;
for (var bond, $bond = this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var nbr=bond.getOther$org_openscience_cdk_interfaces_IAtom(atom);
if (!visit[this.container.indexOf$org_openscience_cdk_interfaces_IAtom(nbr)]) p$1.visitPart$ZA$org_openscience_cdk_interfaces_IAtom.apply(this, [visit, nbr]);
}
}, p$1);

Clazz.newMeth(C$, 'isFusedBond$org_openscience_cdk_interfaces_IBond',  function (bond) {
var beg=bond.getBegin$();
var end=bond.getEnd$();
if (p$1.getRingDegree$I.apply(this, [this.container.indexOf$org_openscience_cdk_interfaces_IAtom(beg)]) < 3 && p$1.getRingDegree$I.apply(this, [this.container.indexOf$org_openscience_cdk_interfaces_IAtom(end)]) < 3 ) return false;
var avisit=Clazz.array(Boolean.TYPE, [this.container.getAtomCount$()]);
avisit[this.container.indexOf$org_openscience_cdk_interfaces_IAtom(beg)]=true;
avisit[this.container.indexOf$org_openscience_cdk_interfaces_IAtom(end)]=true;
var count=0;
for (var nbond, $nbond = this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(beg).iterator$(); $nbond.hasNext$()&&((nbond=($nbond.next$())),1);) {
var nbr=nbond.getOther$org_openscience_cdk_interfaces_IAtom(beg);
if (nbr.equals$O(end) || !this.ringSearch.cyclic$org_openscience_cdk_interfaces_IBond(nbond) ) continue;
if (count == 0) {
++count;
p$1.visitPart$ZA$org_openscience_cdk_interfaces_IAtom.apply(this, [avisit, nbr]);
} else {
if (!avisit[this.container.indexOf$org_openscience_cdk_interfaces_IAtom(nbr)]) return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'getRingDegree$I',  function (v) {
var x=0;
for (var w, $w = 0, $$w = this.g[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) if (this.ringSearch.cyclic$I$I(v, w)) ++x;

return x;
}, p$1);

Clazz.newMeth(C$, 'isBridgeHead$I',  function (v) {
if (p$1.getRingDegree$I.apply(this, [v]) < 3) return false;
var atom=this.container.getAtom$I(v);
for (var bond, $bond = this.container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) if (p$1.isFusedBond$org_openscience_cdk_interfaces_IBond.apply(this, [bond])) return false;

return true;
}, p$1);

Clazz.newMeth(C$, 'atomicNumber$org_openscience_cdk_interfaces_IAtom',  function (a) {
var elem=a.getAtomicNumber$();
if (elem != null ) return (elem).$c();
if (Clazz.instanceOf(a, "org.openscience.cdk.interfaces.IPseudoAtom")) return 0;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["an atom had an undefieind atomic number"]);
}, 1);

Clazz.newMeth(C$, 'charge$org_openscience_cdk_interfaces_IAtom',  function (a) {
var chg=a.getFormalCharge$();
return chg != null  ? (chg).$c() : 0;
}, 1);

Clazz.newMeth(C$, 'toIntArray$JA',  function (org) {
var cpy=Clazz.array(Integer.TYPE, [org.length]);
for (var i=0; i < cpy.length; i++) cpy[i]=Long.$ival(org[i]);

return cpy;
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.Stereocenters, "Stereocenter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "True", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Para", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Potential", 2, []);
Clazz.newEnumConst($vals, C$.c$, "Non", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.Stereocenters, "Type", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Bicoordinate", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Tricoordinate", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Tetracoordinate", 2, []);
Clazz.newEnumConst($vals, C$.c$, "None", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Stereocenters, "StereoElement", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['focus'],'O',['neighbors','int[]','type','org.openscience.cdk.stereo.Stereocenters.Type']]]

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Stereocenters, "Bicoordinate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.openscience.cdk.stereo.Stereocenters','.StereoElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$IA',  function (v, neighbors) {
Clazz.super_(C$, this);
this.focus=v;
this.type=$I$(1).Bicoordinate;
this.neighbors=$I$(2).copyOf$IA$I(neighbors, neighbors.length);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Stereocenters, "Tetracoordinate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.openscience.cdk.stereo.Stereocenters','.StereoElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$I$IA',  function (v, neighbors) {
Clazz.super_(C$, this);
this.focus=v;
this.type=$I$(1).Tetracoordinate;
this.neighbors=$I$(2).copyOf$IA$I(neighbors, neighbors.length);
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.Stereocenters, "Tricoordinate", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['org.openscience.cdk.stereo.Stereocenters','.StereoElement']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['other']]]

Clazz.newMeth(C$, 'c$$I$I$IA',  function (v, w, neighbors) {
Clazz.super_(C$, this);
this.focus=v;
this.other=w;
this.type=$I$(1).Tricoordinate;
this.neighbors=Clazz.array(Integer.TYPE, [neighbors.length - 1]);
var n=0;
for (var neighbor, $neighbor = 0, $$neighbor = neighbors; $neighbor<$$neighbor.length&&((neighbor=($$neighbor[$neighbor])),1);$neighbor++) {
if (neighbor != this.other) this.neighbors[n++]=neighbor;
}
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:32 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
