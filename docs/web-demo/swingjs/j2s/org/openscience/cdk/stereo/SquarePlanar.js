(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),I$=[[0,'org.openscience.cdk.stereo.AbstractStereo','org.openscience.cdk.interfaces.IAtom','org.openscience.cdk.stereo.Octahedral']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "SquarePlanar", null, 'org.openscience.cdk.stereo.AbstractStereo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['PERMUTATIONS','int[][]']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I',  function (focus, carriers, order) {
;C$.superclazz.c$$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_interfaces_IChemObjectA$I.apply(this,[focus, carriers, 17664 | order & 255]);C$.$init$.apply(this);
if (this.getConfigOrder$() < 0 || this.getConfigOrder$() > 3 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid configuration order,should be between 1-3"]);
}, 1);

Clazz.newMeth(C$, 'normalize$',  function () {
var cfg=this.getConfigOrder$();
if (cfg == 1) return this;
var carriers=$I$(1,"invapply$OA$IA",[this.getCarriers$().toArray$OA(Clazz.array($I$(2), [4])), C$.PERMUTATIONS[cfg - 1]]);
return Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I,[this.getFocus$(), carriers, 17665]);
});

Clazz.newMeth(C$, 'asOctahedral$',  function () {
var carriers=this.getCarriers$();
var cfg=24832;
if (this.getConfigOrder$() == 1) {
cfg=1;
} else if (this.getConfigOrder$() == 2) {
cfg=8;
} else if (this.getConfigOrder$() == 3) {
cfg=4;
}return Clazz.new_([this.getFocus$(), Clazz.array($I$(2), -1, [this.getFocus$(), carriers.get$I(0), carriers.get$I(1), carriers.get$I(2), carriers.get$I(3), this.getFocus$()]), cfg],$I$(3,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I);
});

Clazz.newMeth(C$, ['create$org_openscience_cdk_interfaces_IAtom$java_util_List$I','create$org_openscience_cdk_interfaces_IChemObject$java_util_List$I'],  function (focus, carriers, cfg) {
return Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I,[focus, carriers.toArray$OA(Clazz.array($I$(2), [4])), cfg]);
});

C$.$static$=function(){C$.$static$=0;
C$.PERMUTATIONS=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 0, 3, 2, 1, 1, 2, 3, 0, 1, 0, 3, 2, 2, 3, 0, 1, 2, 1, 0, 3, 3, 2, 1, 0, 3, 0, 1, 2]), Clazz.array(Integer.TYPE, -1, [0, 2, 1, 3, 0, 3, 1, 2, 1, 3, 0, 2, 1, 2, 0, 3, 2, 0, 3, 1, 2, 1, 3, 0, 3, 1, 2, 0, 3, 0, 2, 1]), Clazz.array(Integer.TYPE, -1, [0, 1, 3, 2, 0, 2, 3, 1, 1, 0, 2, 3, 1, 3, 2, 0, 2, 3, 1, 0, 2, 0, 1, 3, 3, 2, 0, 1, 3, 1, 0, 2])]);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:33 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
