(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),I$=[[0,['org.openscience.cdk.interfaces.ITetrahedralChirality','.Stereo'],'org.openscience.cdk.interfaces.IAtom','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TetrahedralChirality", null, 'org.openscience.cdk.stereo.AbstractStereo', 'org.openscience.cdk.interfaces.ITetrahedralChirality');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo',  function (chiralAtom, ligands, stereo) {
C$.c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I.apply(this, [chiralAtom, ligands, $I$(1).toConfig$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo(stereo)]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I',  function (chiralAtom, ligands, config) {
;C$.superclazz.c$$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_interfaces_IChemObjectA$I.apply(this,[chiralAtom, ligands, 16896 | (255 & config)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getLigands$',  function () {
return this.getCarriers$().toArray$OA(Clazz.array($I$(2), [4]));
});

Clazz.newMeth(C$, 'getChiralAtom$',  function () {
return this.getFocus$();
});

Clazz.newMeth(C$, 'getStereo$',  function () {
return $I$(1,"toStereo$I",[this.getConfigOrder$()]);
});

Clazz.newMeth(C$, 'setStereo$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo',  function (stereo) {
this.setConfigOrder$I($I$(1).toConfig$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo(stereo));
});

Clazz.newMeth(C$, ['create$org_openscience_cdk_interfaces_IAtom$java_util_List$I','create$org_openscience_cdk_interfaces_IChemObject$java_util_List$I'],  function (focus, carriers, config) {
return Clazz.new_(C$.c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I,[focus, carriers.toArray$OA(Clazz.array($I$(2), [4])), config]);
});

Clazz.newMeth(C$, 'map$java_util_Map$java_util_Map',  function (atoms, bonds) {
return C$.superclazz.prototype.map$java_util_Map$java_util_Map.apply(this, [atoms, bonds]);
});

Clazz.newMeth(C$, 'map$java_util_Map',  function (chemobjs) {
return C$.superclazz.prototype.map$java_util_Map.apply(this, [chemobjs]);
});

Clazz.newMeth(C$, 'setBuilder$org_openscience_cdk_interfaces_IChemObjectBuilder',  function (builder) {
C$.superclazz.prototype.setBuilder$org_openscience_cdk_interfaces_IChemObjectBuilder.apply(this, [builder]);
});

Clazz.newMeth(C$, 'toString',  function () {
var builder=Clazz.new_($I$(3,1));
builder.append$S("Tetrahedral{").append$I(this.hashCode$()).append$S(", ");
builder.append$O(this.getStereo$()).append$S(", ");
builder.append$S("c:").append$O(this.getChiralAtom$()).append$S(", ");
var ligands=this.getLigands$();
for (var i=0; i < ligands.length; i++) {
builder.append$I(i + 1).append$C(":").append$O(ligands[i]).append$S(", ");
}
builder.append$C("}");
return builder.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:27 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
