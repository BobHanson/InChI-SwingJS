(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),I$=[[0,'org.openscience.cdk.graph.ShortestPaths','org.openscience.cdk.graph.GraphUtil']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AllPairsShortestPaths");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['container','org.openscience.cdk.interfaces.IAtomContainer','shortestPaths','org.openscience.cdk.graph.ShortestPaths[]']]
,['O',['EMPTY_CONTAINER','org.openscience.cdk.interfaces.IAtomContainer','EMPTY_SHORTEST_PATHS','org.openscience.cdk.graph.ShortestPaths']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
;C$.$init$.apply(this);
var adjacent=$I$(2).toAdjList$org_openscience_cdk_interfaces_IAtomContainer(container);
var n=container.getAtomCount$();
this.container=container;
this.shortestPaths=Clazz.array($I$(1), [n]);
for (var i=0; i < n; i++) {
this.shortestPaths[i]=Clazz.new_($I$(1,1).c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I,[adjacent, container, i]);
}
}, 1);

Clazz.newMeth(C$, 'from$I',  function (start) {
return (start < 0 || start >= this.shortestPaths.length ) ? C$.EMPTY_SHORTEST_PATHS : this.shortestPaths[start];
});

Clazz.newMeth(C$, 'from$org_openscience_cdk_interfaces_IAtom',  function (start) {
return this.from$I(this.container.indexOf$org_openscience_cdk_interfaces_IAtom(start));
});

C$.$static$=function(){C$.$static$=0;
C$.EMPTY_CONTAINER=((P$.AllPairsShortestPaths$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AllPairsShortestPaths$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.openscience.cdk.interfaces.IAtomContainer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'addStereoElement$org_openscience_cdk_interfaces_IStereoElement',  function (element) {
});

Clazz.newMeth(C$, 'setStereoElements$java_util_List',  function (elements) {
});

Clazz.newMeth(C$, 'stereoElements$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'setAtoms$org_openscience_cdk_interfaces_IAtomA',  function (atoms) {
});

Clazz.newMeth(C$, 'setBonds$org_openscience_cdk_interfaces_IBondA',  function (bonds) {
});

Clazz.newMeth(C$, 'setAtom$I$org_openscience_cdk_interfaces_IAtom',  function (number, atom) {
});

Clazz.newMeth(C$, 'getAtom$I',  function (idx) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getBond$I',  function (idx) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getLonePair$I',  function (idx) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getSingleElectron$I',  function (idx) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'atoms$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'bonds$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'lonePairs$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'singleElectrons$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'electronContainers$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getFirstAtom$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getLastAtom$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getAtomNumber$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return -1;
});

Clazz.newMeth(C$, 'getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atom1, atom2) {
return -1;
});

Clazz.newMeth(C$, 'getBondNumber$org_openscience_cdk_interfaces_IBond',  function (bond) {
return -1;
});

Clazz.newMeth(C$, 'getLonePairNumber$org_openscience_cdk_interfaces_ILonePair',  function (lonePair) {
return -1;
});

Clazz.newMeth(C$, 'getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron',  function (singleElectron) {
return -1;
});

Clazz.newMeth(C$, 'getElectronContainer$I',  function (number) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atom1, atom2) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'indexOf$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return 0;
});

Clazz.newMeth(C$, 'indexOf$org_openscience_cdk_interfaces_IBond',  function (bond) {
return 0;
});

Clazz.newMeth(C$, 'indexOf$org_openscience_cdk_interfaces_ISingleElectron',  function (electron) {
return 0;
});

Clazz.newMeth(C$, 'indexOf$org_openscience_cdk_interfaces_ILonePair',  function (pair) {
return 0;
});

Clazz.newMeth(C$, 'getAtomCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getBondCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getLonePairCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getSingleElectronCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getElectronContainerCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom',  function (atom) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getConnectedBondsList$org_openscience_cdk_interfaces_IAtom',  function (atom) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom',  function (atom) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom',  function (atom) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom',  function (atom) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom',  function (atom) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom',  function (atom) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getConnectedBondsCount$I',  function (idx) {
return 0;
});

Clazz.newMeth(C$, 'getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return 0;
});

Clazz.newMeth(C$, 'getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return 0;
});

Clazz.newMeth(C$, 'getBondOrderSum$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return 0;
});

Clazz.newMeth(C$, 'getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom',  function (atom) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom',  function (atom) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'add$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
});

Clazz.newMeth(C$, 'addAtom$org_openscience_cdk_interfaces_IAtom',  function (atom) {
});

Clazz.newMeth(C$, 'addBond$org_openscience_cdk_interfaces_IBond',  function (bond) {
});

Clazz.newMeth(C$, 'addLonePair$org_openscience_cdk_interfaces_ILonePair',  function (lonePair) {
});

Clazz.newMeth(C$, 'addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron',  function (singleElectron) {
});

Clazz.newMeth(C$, 'addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer',  function (electronContainer) {
});

Clazz.newMeth(C$, 'remove$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
});

Clazz.newMeth(C$, 'removeAtomOnly$I',  function (position) {
});

Clazz.newMeth(C$, 'removeAtomOnly$org_openscience_cdk_interfaces_IAtom',  function (atom) {
});

Clazz.newMeth(C$, 'removeBond$I',  function (position) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atom1, atom2) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'removeBond$org_openscience_cdk_interfaces_IBond',  function (bond) {
});

Clazz.newMeth(C$, 'removeLonePair$I',  function (position) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'removeLonePair$org_openscience_cdk_interfaces_ILonePair',  function (lonePair) {
});

Clazz.newMeth(C$, 'removeSingleElectron$I',  function (position) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron',  function (singleElectron) {
});

Clazz.newMeth(C$, 'removeElectronContainer$I',  function (position) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer',  function (electronContainer) {
});

Clazz.newMeth(C$, 'removeAtom$org_openscience_cdk_interfaces_IAtom',  function (atom) {
});

Clazz.newMeth(C$, 'removeAtom$I',  function (pos) {
});

Clazz.newMeth(C$, 'removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom',  function (atom) {
});

Clazz.newMeth(C$, 'removeAllElements$',  function () {
});

Clazz.newMeth(C$, 'removeAllElectronContainers$',  function () {
});

Clazz.newMeth(C$, 'removeAllBonds$',  function () {
});

Clazz.newMeth(C$, 'addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo',  function (atom1, atom2, order, stereo) {
});

Clazz.newMeth(C$, 'addBond$I$I$org_openscience_cdk_interfaces_IBond_Order',  function (atom1, atom2, order) {
});

Clazz.newMeth(C$, 'addLonePair$I',  function (atomID) {
});

Clazz.newMeth(C$, 'addSingleElectron$I',  function (atomID) {
});

Clazz.newMeth(C$, 'contains$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return false;
});

Clazz.newMeth(C$, 'contains$org_openscience_cdk_interfaces_IBond',  function (bond) {
return false;
});

Clazz.newMeth(C$, 'contains$org_openscience_cdk_interfaces_ILonePair',  function (lonePair) {
return false;
});

Clazz.newMeth(C$, 'contains$org_openscience_cdk_interfaces_ISingleElectron',  function (singleElectron) {
return false;
});

Clazz.newMeth(C$, 'contains$org_openscience_cdk_interfaces_IElectronContainer',  function (electronContainer) {
return false;
});

Clazz.newMeth(C$, 'isEmpty$',  function () {
return true;
});

Clazz.newMeth(C$, 'clone$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'addListener$org_openscience_cdk_interfaces_IChemObjectListener',  function (col) {
});

Clazz.newMeth(C$, 'getListenerCount$',  function () {
return 0;
});

Clazz.newMeth(C$, 'removeListener$org_openscience_cdk_interfaces_IChemObjectListener',  function (col) {
});

Clazz.newMeth(C$, 'setNotification$Z',  function (bool) {
});

Clazz.newMeth(C$, 'getNotification$',  function () {
return false;
});

Clazz.newMeth(C$, 'notifyChanged$',  function () {
});

Clazz.newMeth(C$, 'notifyChanged$org_openscience_cdk_interfaces_IChemObjectChangeEvent',  function (evt) {
});

Clazz.newMeth(C$, 'setProperty$O$O',  function (description, property) {
});

Clazz.newMeth(C$, 'removeProperty$O',  function (description) {
});

Clazz.newMeth(C$, 'getProperty$O',  function (description) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getProperty$O$Class',  function (description, c) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'getProperties$',  function () {
return null;
});

Clazz.newMeth(C$, 'getID$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'setID$S',  function (identifier) {
});

Clazz.newMeth(C$, 'setFlag$I$Z',  function (mask, value) {
});

Clazz.newMeth(C$, 'getFlag$I',  function (mask) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'setProperties$java_util_Map',  function (properties) {
});

Clazz.newMeth(C$, 'addProperties$java_util_Map',  function (properties) {
});

Clazz.newMeth(C$, 'setFlags$ZA',  function (newFlags) {
});

Clazz.newMeth(C$, 'getFlags$',  function () {
return Clazz.array(Boolean.TYPE, [0]);
});

Clazz.newMeth(C$, 'getFlagValue$',  function () {
return Integer.valueOf$I(0);
});

Clazz.newMeth(C$, 'getBuilder$',  function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not supported"]);
});

Clazz.newMeth(C$, 'stateChanged$org_openscience_cdk_interfaces_IChemObjectChangeEvent',  function (event) {
});

Clazz.newMeth(C$, 'getTitle$',  function () {
return null;
});

Clazz.newMeth(C$, 'setTitle$S',  function (title) {
});

Clazz.newMeth(C$, 'set$I',  function (flags) {
});

Clazz.newMeth(C$, 'clear$I',  function (flags) {
});

Clazz.newMeth(C$, 'is$I',  function (flags) {
return false;
});

Clazz.newMeth(C$, 'flags$',  function () {
return 0;
});
})()
), Clazz.new_(P$.AllPairsShortestPaths$1.$init$,[this, null]));
C$.EMPTY_SHORTEST_PATHS=Clazz.new_([Clazz.array(Integer.TYPE, [0, 0]), C$.EMPTY_CONTAINER, 0],$I$(1,1).c$$IAA$org_openscience_cdk_interfaces_IAtomContainer$I);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
