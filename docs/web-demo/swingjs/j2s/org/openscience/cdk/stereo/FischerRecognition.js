(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),p$1={},I$=[[0,'org.openscience.cdk.stereo.Projection','java.util.Collections','java.util.HashMap','org.openscience.cdk.ringsearch.RingSearch','java.util.ArrayList','org.openscience.cdk.config.Elements',['org.openscience.cdk.stereo.Stereocenters','.Type'],'org.openscience.cdk.interfaces.IAtom','org.openscience.cdk.stereo.TetrahedralChirality',['org.openscience.cdk.interfaces.ITetrahedralChirality','.Stereo'],'org.openscience.cdk.interfaces.IBond',['org.openscience.cdk.interfaces.IBond','.Order'],['org.openscience.cdk.interfaces.IBond','.Stereo']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "FischerRecognition");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['container','org.openscience.cdk.interfaces.IAtomContainer','graph','int[][]','bonds','org.openscience.cdk.graph.GraphUtil.EdgeToBondMap','stereocenters','org.openscience.cdk.stereo.Stereocenters']]
,['D',['CARDINALITY_THRESHOLD']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$org_openscience_cdk_stereo_Stereocenters',  function (container, graph, bonds, stereocenters) {
;C$.$init$.apply(this);
this.container=container;
this.graph=graph;
this.bonds=bonds;
this.stereocenters=stereocenters;
}, 1);

Clazz.newMeth(C$, 'recognise$java_util_Set',  function (projections) {
if (!projections.contains$O($I$(1).Fischer)) return $I$(2).emptyList$();
var atomToIndex=Clazz.new_($I$(3,1));
for (var atom, $atom = this.container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (atom.getPoint2d$() == null ) return $I$(2).emptyList$();
atomToIndex.put$O$O(atom, Integer.valueOf$I(atomToIndex.size$()));
}
var ringSearch=Clazz.new_($I$(4,1).c$$org_openscience_cdk_interfaces_IAtomContainer$IAA,[this.container, this.graph]);
var elements=Clazz.new_($I$(5,1).c$$I,[5]);
for (var v=0; v < this.container.getAtomCount$(); v++) {
var focus=this.container.getAtom$I(v);
var elem=$I$(6,"ofNumber$I",[(focus.getAtomicNumber$()).$c()]);
if (elem !== $I$(6).Carbon ) continue;
if (ringSearch.cyclic$I(v)) continue;
if (this.stereocenters.elementType$I(v) !== $I$(7).Tetracoordinate ) continue;
if (!this.stereocenters.isStereocenter$I(v)) continue;
var element=C$.newTetrahedralCenter$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBondA(focus, C$.neighbors$I$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(v, this.graph, this.bonds));
if (element == null ) continue;
var east=element.getLigands$()[1];
var west=element.getLigands$()[3];
if (!east.equals$O(focus) && !p$1.isTerminal$org_openscience_cdk_interfaces_IAtom$java_util_Map.apply(this, [east, atomToIndex]) ) continue;
if (!west.equals$O(focus) && !p$1.isTerminal$org_openscience_cdk_interfaces_IAtom$java_util_Map.apply(this, [west, atomToIndex]) ) continue;
elements.add$O(element);
}
return elements;
});

Clazz.newMeth(C$, 'newTetrahedralCenter$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBondA',  function (focus, bonds) {
var cardinalBonds=C$.cardinalBonds$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBondA(focus, bonds);
if (cardinalBonds == null ) return null;
if (!C$.isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond(cardinalBonds[0]) || !C$.isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond(cardinalBonds[2]) ) return null;
if (cardinalBonds[1] == null  && cardinalBonds[3] == null  ) return null;
var neighbors=Clazz.array($I$(8), -1, [cardinalBonds[0].getOther$org_openscience_cdk_interfaces_IAtom(focus), focus, cardinalBonds[2].getOther$org_openscience_cdk_interfaces_IAtom(focus), focus]);
if (C$.isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond(cardinalBonds[1])) {
neighbors[1]=cardinalBonds[1].getOther$org_openscience_cdk_interfaces_IAtom(focus);
} else if (cardinalBonds[1] != null  || bonds.length == 4 ) {
return null;
}if (C$.isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond(cardinalBonds[3])) {
neighbors[3]=cardinalBonds[3].getOther$org_openscience_cdk_interfaces_IAtom(focus);
} else if (cardinalBonds[3] != null  || bonds.length == 4 ) {
return null;
}return Clazz.new_([focus, neighbors, $I$(10).ANTI_CLOCKWISE],$I$(9,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo);
}, 1);

Clazz.newMeth(C$, 'cardinalBonds$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBondA',  function (focus, bonds) {
var centerXy=focus.getPoint2d$();
var cardinal=Clazz.array($I$(11), [4]);
for (var bond, $bond = 0, $$bond = bonds; $bond<$$bond.length&&((bond=($$bond[$bond])),1);$bond++) {
var other=bond.getOther$org_openscience_cdk_interfaces_IAtom(focus);
var otherXy=other.getPoint2d$();
var deltaX=otherXy.x - centerXy.x;
var deltaY=otherXy.y - centerXy.y;
var mag=Math.sqrt(deltaX * deltaX + deltaY * deltaY);
deltaX/=mag;
deltaY/=mag;
var absDeltaX=Math.abs(deltaX);
var absDeltaY=Math.abs(deltaY);
if (absDeltaX < C$.CARDINALITY_THRESHOLD  && absDeltaY > C$.CARDINALITY_THRESHOLD  ) {
cardinal[deltaY > 0  ? 0 : 2]=bond;
} else if (absDeltaX > C$.CARDINALITY_THRESHOLD  && absDeltaY < C$.CARDINALITY_THRESHOLD  ) {
cardinal[deltaX > 0  ? 1 : 3]=bond;
} else {
return null;
}}
return cardinal;
}, 1);

Clazz.newMeth(C$, 'isTerminal$org_openscience_cdk_interfaces_IAtom$java_util_Map',  function (atom, atomToIndex) {
return this.graph[(atomToIndex.get$O(atom)).$c()].length == 1;
}, p$1);

Clazz.newMeth(C$, 'isPlanarSigmaBond$org_openscience_cdk_interfaces_IBond',  function (bond) {
return bond != null  && $I$(12).SINGLE.equals$O(bond.getOrder$())  && $I$(13).NONE.equals$O(bond.getStereo$()) ;
}, 1);

Clazz.newMeth(C$, 'neighbors$I$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap',  function (v, g, bondMap) {
var ws=g[v];
var bonds=Clazz.array($I$(11), [ws.length]);
for (var i=0; i < ws.length; i++) {
bonds[i]=bondMap.get$I$I(v, ws[i]);
}
return bonds;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.CARDINALITY_THRESHOLD=Math.toRadians(5);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:31 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
