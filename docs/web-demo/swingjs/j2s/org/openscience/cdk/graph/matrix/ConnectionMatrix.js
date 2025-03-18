(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph.matrix"),I$=[[0,'org.openscience.cdk.tools.manipulator.BondManipulator']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConnectionMatrix", null, null, 'org.openscience.cdk.graph.matrix.IGraphMatrix');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getMatrix$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var bond;
var indexAtom1;
var indexAtom2;
var conMat=Clazz.array(Double.TYPE, [container.getAtomCount$(), container.getAtomCount$()]);
for (var f=0; f < container.getBondCount$(); f++) {
bond=container.getBond$I(f);
indexAtom1=container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
indexAtom2=container.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$());
conMat[indexAtom1][indexAtom2]=$I$(1,"destroyBondOrder$org_openscience_cdk_interfaces_IBond_Order",[bond.getOrder$()]);
conMat[indexAtom2][indexAtom1]=$I$(1,"destroyBondOrder$org_openscience_cdk_interfaces_IBond_Order",[bond.getOrder$()]);
}
return conMat;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:51 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
