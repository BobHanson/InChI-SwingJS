(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),I$=[[0,['org.openscience.cdk.interfaces.IDoubleBondStereochemistry','.Conformation'],'org.openscience.cdk.interfaces.IBond']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "DoubleBondStereochemistry", null, 'org.openscience.cdk.stereo.AbstractStereo', 'org.openscience.cdk.interfaces.IDoubleBondStereochemistry');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$org_openscience_cdk_interfaces_IDoubleBondStereochemistry_Conformation',  function (stereoBond, ligandBonds, stereo) {
C$.c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$I.apply(this, [stereoBond, ligandBonds, $I$(1).toConfig$org_openscience_cdk_interfaces_IDoubleBondStereochemistry_Conformation(stereo)]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$I',  function (stereoBond, ligandBonds, config) {
;C$.superclazz.c$$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_interfaces_IChemObjectA$I.apply(this,[stereoBond, ligandBonds, 8448 | (255 & config)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setBuilder$org_openscience_cdk_interfaces_IChemObjectBuilder',  function (builder) {
C$.superclazz.prototype.setBuilder$org_openscience_cdk_interfaces_IChemObjectBuilder.apply(this, [builder]);
});

Clazz.newMeth(C$, 'getBonds$',  function () {
return this.getCarriers$().toArray$OA(Clazz.array($I$(2), [0]));
});

Clazz.newMeth(C$, 'getStereoBond$',  function () {
return this.getFocus$();
});

Clazz.newMeth(C$, 'getStereo$',  function () {
return $I$(1,"toConformation$I",[this.getConfigOrder$()]);
});

Clazz.newMeth(C$, 'map$java_util_Map$java_util_Map',  function (atoms, bonds) {
return C$.superclazz.prototype.map$java_util_Map$java_util_Map.apply(this, [atoms, bonds]);
});

Clazz.newMeth(C$, ['create$org_openscience_cdk_interfaces_IBond$java_util_List$I','create$org_openscience_cdk_interfaces_IChemObject$java_util_List$I'],  function (focus, carriers, cfg) {
return Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$I,[focus, carriers.toArray$OA(Clazz.array($I$(2), [2])), cfg]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:25 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
