(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),I$=[[0,'org.openscience.cdk.stereo.AbstractStereo','org.openscience.cdk.interfaces.IAtom','java.util.ArrayList','org.openscience.cdk.stereo.Octahedral']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TrigonalBipyramidal", null, 'org.openscience.cdk.stereo.AbstractStereo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['PERMUTATIONS','int[][]']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I',  function (focus, carriers, order) {
;C$.superclazz.c$$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_interfaces_IChemObjectA$I.apply(this,[focus, carriers, 20992 | order & 255]);C$.$init$.apply(this);
if (this.getConfigOrder$() < 0 || this.getConfigOrder$() > 20 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid configuration order,should be between 1-20"]);
}, 1);

Clazz.newMeth(C$, 'normalize$',  function () {
var cfg=this.getConfigOrder$();
if (cfg == 1) return this;
var carriers=$I$(1,"invapply$OA$IA",[this.getCarriers$().toArray$OA(Clazz.array($I$(2), [5])), C$.PERMUTATIONS[cfg - 1]]);
return Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I,[this.getFocus$(), carriers, 1]);
});

Clazz.newMeth(C$, ['create$org_openscience_cdk_interfaces_IAtom$java_util_List$I','create$org_openscience_cdk_interfaces_IChemObject$java_util_List$I'],  function (focus, carriers, cfg) {
return Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I,[focus, carriers.toArray$OA(Clazz.array($I$(2), [5])), cfg]);
});

Clazz.newMeth(C$, 'same$java_util_List$java_util_List$IA$I',  function (a, b, perm, i) {
for (var j=i; j < i + 5; ++j) {
if (!(b.get$I(j - i)).equals$O(a.get$I(perm[j]))) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'reorder$java_util_List$java_util_List',  function (current, required) {
for (var order=0; order < C$.PERMUTATIONS.length; ++order) {
var local=C$.PERMUTATIONS[order];
for (var k=0; k < local.length; k+=5) {
if (C$.same$java_util_List$java_util_List$IA$I(current, required, local, k)) {
return order + 1;
}}
}
return -1;
}, 1);

Clazz.newMeth(C$, 'canBeOctahedral$',  function () {
var numExplicit=0;
var focus=this.getFocus$();
for (var atom, $atom = this.getCarriers$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (!atom.equals$O(focus)) {
++numExplicit;
}}
if (numExplicit > 3) {
return false;
} else {
var normalized=this.normalize$();
var carriers=normalized.getCarriers$();
var numEquatorial=0;
for (var i=1; i < 4; ++i) {
if (!carriers.get$I(i).equals$O(focus)) {
++numEquatorial;
}}
return numEquatorial <= 1;
}});

Clazz.newMeth(C$, 'asOctahedral$',  function () {
var normalized=this.normalize$();
if (!normalized.canBeOctahedral$()) {
return null;
} else {
var focus=normalized.getFocus$();
var carriers=Clazz.new_([normalized.getCarriers$()],$I$(3,1).c$$java_util_Collection);
carriers.add$I$O(1, focus);
return Clazz.new_([this.getFocus$(), carriers.toArray$OA(Clazz.array($I$(2), [6])), 1],$I$(4,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I);
}});

C$.$static$=function(){C$.$static$=0;
C$.PERMUTATIONS=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 0, 2, 3, 1, 4, 0, 3, 1, 2, 4, 4, 3, 2, 1, 0, 4, 1, 3, 2, 0, 4, 2, 1, 3, 0]), Clazz.array(Integer.TYPE, -1, [0, 3, 2, 1, 4, 0, 2, 1, 3, 4, 0, 1, 3, 2, 4, 4, 1, 2, 3, 0, 4, 3, 1, 2, 0, 4, 2, 3, 1, 0]), Clazz.array(Integer.TYPE, -1, [0, 1, 2, 4, 3, 0, 2, 4, 1, 3, 0, 4, 1, 2, 3, 3, 4, 2, 1, 0, 3, 1, 4, 2, 0, 3, 2, 1, 4, 0]), Clazz.array(Integer.TYPE, -1, [0, 4, 2, 1, 3, 0, 2, 1, 4, 3, 0, 1, 4, 2, 3, 3, 1, 2, 4, 0, 3, 4, 1, 2, 0, 3, 2, 4, 1, 0]), Clazz.array(Integer.TYPE, -1, [0, 1, 3, 4, 2, 0, 3, 4, 1, 2, 0, 4, 1, 3, 2, 2, 4, 3, 1, 0, 2, 1, 4, 3, 0, 2, 3, 1, 4, 0]), Clazz.array(Integer.TYPE, -1, [0, 4, 3, 1, 2, 0, 3, 1, 4, 2, 0, 1, 4, 3, 2, 2, 1, 3, 4, 0, 2, 4, 1, 3, 0, 2, 3, 4, 1, 0]), Clazz.array(Integer.TYPE, -1, [0, 2, 3, 4, 1, 0, 3, 4, 2, 1, 0, 4, 2, 3, 1, 1, 4, 3, 2, 0, 1, 2, 4, 3, 0, 1, 3, 2, 4, 0]), Clazz.array(Integer.TYPE, -1, [0, 4, 3, 2, 1, 0, 3, 2, 4, 1, 0, 2, 4, 3, 1, 1, 2, 3, 4, 0, 1, 4, 2, 3, 0, 1, 3, 4, 2, 0]), Clazz.array(Integer.TYPE, -1, [1, 0, 2, 3, 4, 1, 2, 3, 0, 4, 1, 3, 0, 2, 4, 4, 3, 2, 0, 1, 4, 0, 3, 2, 1, 4, 2, 0, 3, 1]), Clazz.array(Integer.TYPE, -1, [1, 0, 2, 4, 3, 1, 2, 4, 0, 3, 1, 4, 0, 2, 3, 3, 4, 2, 0, 1, 3, 0, 4, 2, 1, 3, 2, 0, 4, 1]), Clazz.array(Integer.TYPE, -1, [1, 3, 2, 0, 4, 1, 2, 0, 3, 4, 1, 0, 3, 2, 4, 4, 0, 2, 3, 1, 4, 3, 0, 2, 1, 4, 2, 3, 0, 1]), Clazz.array(Integer.TYPE, -1, [1, 4, 2, 0, 3, 1, 2, 0, 4, 3, 1, 0, 4, 2, 3, 3, 0, 2, 4, 1, 3, 4, 0, 2, 1, 3, 2, 4, 0, 1]), Clazz.array(Integer.TYPE, -1, [1, 0, 3, 4, 2, 1, 3, 4, 0, 2, 1, 4, 0, 3, 2, 2, 4, 3, 0, 1, 2, 0, 4, 3, 1, 2, 3, 0, 4, 1]), Clazz.array(Integer.TYPE, -1, [1, 4, 3, 0, 2, 1, 3, 0, 4, 2, 1, 0, 4, 3, 2, 2, 0, 3, 4, 1, 2, 4, 0, 3, 1, 2, 3, 4, 0, 1]), Clazz.array(Integer.TYPE, -1, [2, 0, 1, 3, 4, 2, 1, 3, 0, 4, 2, 3, 0, 1, 4, 4, 3, 1, 0, 2, 4, 0, 3, 1, 2, 4, 1, 0, 3, 2]), Clazz.array(Integer.TYPE, -1, [2, 0, 1, 4, 3, 2, 1, 4, 0, 3, 2, 4, 0, 1, 3, 3, 4, 1, 0, 2, 3, 0, 4, 1, 2, 3, 1, 0, 4, 2]), Clazz.array(Integer.TYPE, -1, [3, 0, 1, 2, 4, 3, 1, 2, 0, 4, 3, 2, 0, 1, 4, 4, 2, 1, 0, 3, 4, 0, 2, 1, 3, 4, 1, 0, 2, 3]), Clazz.array(Integer.TYPE, -1, [3, 2, 1, 0, 4, 3, 1, 0, 2, 4, 3, 0, 2, 1, 4, 4, 0, 1, 2, 3, 4, 2, 0, 1, 3, 4, 1, 2, 0, 3]), Clazz.array(Integer.TYPE, -1, [2, 4, 1, 0, 3, 2, 1, 0, 4, 3, 2, 0, 4, 1, 3, 3, 0, 1, 4, 2, 3, 4, 0, 1, 2, 3, 1, 4, 0, 2]), Clazz.array(Integer.TYPE, -1, [2, 3, 1, 0, 4, 2, 1, 0, 3, 4, 2, 0, 3, 1, 4, 4, 0, 1, 3, 2, 4, 3, 0, 1, 2, 4, 1, 3, 0, 2])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:31 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
