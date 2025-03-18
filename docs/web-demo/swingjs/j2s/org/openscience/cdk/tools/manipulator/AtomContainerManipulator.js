(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[[0,'java.util.Arrays','java.util.stream.Collectors','java.util.HashMap','java.util.ArrayList','org.openscience.cdk.sgroup.Sgroup','java.util.Collections','org.openscience.cdk.CDKConstants','org.openscience.cdk.config.Isotopes','org.openscience.cdk.config.Elements','org.openscience.cdk.interfaces.IAtom','org.openscience.cdk.interfaces.IBond',['org.openscience.cdk.interfaces.IBond','.Order'],'org.openscience.cdk.stereo.ExtendedTetrahedral','org.openscience.cdk.interfaces.IAtomContainer',['org.openscience.cdk.interfaces.IBond','.Stereo'],'org.openscience.cdk.tools.LoggingToolFactory','java.util.HashSet',['org.openscience.cdk.graph.GraphUtil','.EdgeToBondMap'],'org.openscience.cdk.graph.GraphUtil','org.openscience.cdk.stereo.TetrahedralChirality','java.util.Objects','org.openscience.cdk.stereo.DoubleBondStereochemistry','org.openscience.cdk.stereo.ExtendedCisTrans','org.openscience.cdk.sgroup.SgroupKey','org.openscience.cdk.interfaces.IElectronContainer','org.openscience.cdk.atomtype.CDKAtomTypeMatcher','org.openscience.cdk.tools.manipulator.AtomTypeManipulator','org.openscience.cdk.tools.manipulator.BondManipulator','javax.vecmath.Point2d','javax.vecmath.Point3d','org.openscience.cdk.ringsearch.RingSearch']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomContainerManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['NAT_ABUN_COMP','java.util.Comparator']]]

Clazz.newMeth(C$, 'extractSubstructure$org_openscience_cdk_interfaces_IAtomContainer$IA',  function (atomContainer, atomIndices) {
return C$.extractSubstructure$org_openscience_cdk_interfaces_IAtomContainer$java_util_Collection(atomContainer, $I$(1).stream$IA(atomIndices).mapToObj$java_util_function_IntFunction((function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomContainerManipulator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, ['apply$I','apply$O'],  function (t) { return $$.getAtom$I.apply($$,[t])});
})()
)); return Clazz.new_(P$.AtomContainerManipulator$lambda1.$init$,[this, null])})(atomContainer)).collect$java_util_stream_Collector($I$(2).toSet$()));
}, 1);

Clazz.newMeth(C$, 'copy$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$java_util_function_Predicate$java_util_function_Predicate',  function (dest, source, atomFilter, bondFilter) {
var remap=Clazz.new_($I$(3,1));
for (var atom, $atom = source.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (!atomFilter.test$O(atom)) continue;
dest.addAtom$org_openscience_cdk_interfaces_IAtom(atom);
remap.put$O$O(atom, dest.getAtom$I(dest.getAtomCount$() - 1));
}
for (var bond, $bond = source.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var beg=remap.get$O(bond.getBegin$());
var end=remap.get$O(bond.getEnd$());
if (beg != null  && end != null   && bondFilter.test$O(bond) ) {
dest.addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo(dest.indexOf$org_openscience_cdk_interfaces_IAtom(beg), dest.indexOf$org_openscience_cdk_interfaces_IAtom(end), bond.getOrder$(), bond.getStereo$());
var destBond=dest.getBond$I(dest.getBondCount$() - 1);
destBond.setIsInRing$Z(bond.isInRing$());
destBond.setIsAromatic$Z(bond.isAromatic$());
destBond.setProperties$java_util_Map(bond.getProperties$());
remap.put$O$O(bond, destBond);
}}
for (var se, $se = source.singleElectrons$().iterator$(); $se.hasNext$()&&((se=($se.next$())),1);) {
var newAtom=remap.get$O(se.getAtom$());
if (newAtom != null ) dest.addSingleElectron$I(dest.indexOf$org_openscience_cdk_interfaces_IAtom(newAtom));
}
for (var lp, $lp = source.lonePairs$().iterator$(); $lp.hasNext$()&&((lp=($lp.next$())),1);) {
var newAtom=remap.get$O(lp.getAtom$());
if (newAtom != null ) dest.addLonePair$I(dest.indexOf$org_openscience_cdk_interfaces_IAtom(newAtom));
}
for (var sourceStereo, $sourceStereo = source.stereoElements$().iterator$(); $sourceStereo.hasNext$()&&((sourceStereo=($sourceStereo.next$())),1);) {
var destStereo=sourceStereo.mapStrict$java_util_Map(remap);
if (destStereo != null ) dest.addStereoElement$org_openscience_cdk_interfaces_IStereoElement(destStereo);
}
}, 1);

Clazz.newMeth(C$, 'copy$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$java_util_function_Predicate',  function (dest, source, atomFilter) {
C$.copy$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$java_util_function_Predicate$java_util_function_Predicate(dest, source, atomFilter, (P$.AtomContainerManipulator$lambda2$||(P$.AtomContainerManipulator$lambda2$=(((P$.AtomContainerManipulator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomContainerManipulator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$org_openscience_cdk_interfaces_IBond','test$O'],  function (b) { return (true);});
})()
), Clazz.new_(P$.AtomContainerManipulator$lambda2.$init$,[this, null]))))));
}, 1);

Clazz.newMeth(C$, 'copy$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$java_util_Collection',  function (dest, source, atoms) {
C$.copy$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$java_util_function_Predicate$java_util_function_Predicate(dest, source, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomContainerManipulator$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'test$O',  function (t) { return $$.contains$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.AtomContainerManipulator$lambda3.$init$,[this, null])})(atoms), (P$.AtomContainerManipulator$lambda4$||(P$.AtomContainerManipulator$lambda4$=(((P$.AtomContainerManipulator$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomContainerManipulator$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$org_openscience_cdk_interfaces_IBond','test$O'],  function (b) { return (true);});
})()
), Clazz.new_(P$.AtomContainerManipulator$lambda4.$init$,[this, null]))))));
}, 1);

Clazz.newMeth(C$, 'extractSubstructure$org_openscience_cdk_interfaces_IAtomContainer$java_util_Collection',  function (source, atoms) {
var dest=source.getBuilder$().newAtomContainer$();
C$.copy$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer$java_util_function_Predicate$java_util_function_Predicate(dest, source, (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomContainerManipulator$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_M*/
Clazz.newMeth(C$, 'test$O',  function (t) { return $$.contains$O.apply($$,[t])});
})()
)); return Clazz.new_(P$.AtomContainerManipulator$lambda5.$init$,[this, null])})(atoms), (P$.AtomContainerManipulator$lambda6$||(P$.AtomContainerManipulator$lambda6$=(((P$.AtomContainerManipulator$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "AtomContainerManipulator$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Predicate', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['test$org_openscience_cdk_interfaces_IBond','test$O'],  function (b) { return (true);});
})()
), Clazz.new_(P$.AtomContainerManipulator$lambda6.$init$,[this, null]))))));
return dest;
}, 1);

Clazz.newMeth(C$, 'getAtomById$org_openscience_cdk_interfaces_IAtomContainer$S',  function (ac, id) {
for (var i=0; i < ac.getAtomCount$(); i++) {
if (ac.getAtom$I(i).getID$() != null  && ac.getAtom$I(i).getID$().equals$O(id) ) return ac.getAtom$I(i);
}
throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.CDKException').c$$S,["no suc atom"]);
}, 1);

Clazz.newMeth(C$, 'replaceAtomByAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (container, oldAtom, newAtom) {
if (oldAtom == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Atom to be replaced was null!"]);
if (newAtom == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Replacement atom was null!"]);
var idx=container.indexOf$org_openscience_cdk_interfaces_IAtom(oldAtom);
if (idx < 0) return false;
container.setAtom$I$org_openscience_cdk_interfaces_IAtom(idx, newAtom);
var sgrougs=container.getProperty$O("cdk:CtabSgroups");
if (sgrougs != null ) {
var updated=false;
var replaced=Clazz.new_($I$(4,1));
for (var org, $org = sgrougs.iterator$(); $org.hasNext$()&&((org=($org.next$())),1);) {
if (org.getAtoms$().contains$O(oldAtom)) {
updated=true;
var cpy=Clazz.new_($I$(5,1));
for (var atom, $atom = org.getAtoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (!oldAtom.equals$O(atom)) cpy.addAtom$org_openscience_cdk_interfaces_IAtom(atom);
 else cpy.addAtom$org_openscience_cdk_interfaces_IAtom(newAtom);
}
for (var bond, $bond = org.getBonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) cpy.addBond$org_openscience_cdk_interfaces_IBond(bond);

for (var parent, $parent = org.getParents$().iterator$(); $parent.hasNext$()&&((parent=($parent.next$())),1);) cpy.addParent$org_openscience_cdk_sgroup_Sgroup(parent);

for (var key, $key = org.getAttributeKeys$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) cpy.putValue$org_openscience_cdk_sgroup_SgroupKey$O(key, org.getValue$org_openscience_cdk_sgroup_SgroupKey(key));

replaced.add$O(cpy);
} else {
replaced.add$O(org);
}}
if (updated) {
container.setProperty$O$O("cdk:CtabSgroups", $I$(6).unmodifiableList$java_util_List(replaced));
}}return true;
}, 1);

Clazz.newMeth(C$, 'getTotalCharge$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var charge=0.0;
for (var atom, $atom = atomContainer.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var thisCharge=atom.getCharge$();
if (thisCharge !== $I$(7).UNSET ) charge+=(thisCharge).$c();
}
return charge;
}, 1);

Clazz.newMeth(C$, 'hasIsotopeSpecified$org_openscience_cdk_interfaces_IIsotope',  function (atom) {
return atom.getMassNumber$() != null  && (atom.getMassNumber$()).$c() !== 0  ;
}, 1);

Clazz.newMeth(C$, 'getExactMass$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotope',  function (isofact, atom) {
if (atom.getExactMass$() != null ) return (atom.getExactMass$()).valueOf();
 else if (atom.getMassNumber$() != null ) return isofact.getExactMass$Integer$Integer(Integer.valueOf$I(C$.getAtomicNum$org_openscience_cdk_interfaces_IElement(atom)), atom.getMassNumber$());
 else return isofact.getMajorIsotopeMass$I(C$.getAtomicNum$org_openscience_cdk_interfaces_IElement(atom));
}, 1);

Clazz.newMeth(C$, 'getMassOrAvg$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotope',  function (isofact, atom) {
if (!C$.hasIsotopeSpecified$org_openscience_cdk_interfaces_IIsotope(atom)) return isofact.getNaturalMass$org_openscience_cdk_interfaces_IElement(atom);
return C$.getExactMass$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotope(isofact, atom);
}, 1);

Clazz.newMeth(C$, 'getDistMass$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotopeA$I$I',  function (isofact, isos, idx, count) {
if (count == 0) return 0;
var frac=100.0;
var res=0;
for (var i=0; i < idx; i++) frac-=(isos[i].getNaturalAbundance$()).$c();

var p=(isos[idx].getNaturalAbundance$()).$c() / frac;
if (p >= 1.0 ) return count * (isos[idx].getExactMass$()).$c();
var kMin=(count + 1) * (1 - p) - 1;
var kMax=(count + 1) * (1 - p);
if ((Math.ceil(kMin)|0) == (Math.floor(kMax)|0)) {
var k=(kMax|0);
res=(count - k) * C$.getExactMass$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotope(isofact, isos[idx]);
res+=C$.getDistMass$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotopeA$I$I(isofact, isos, idx + 1, k);
}return res;
}, 1);

Clazz.newMeth(C$, 'getImplHCount$org_openscience_cdk_interfaces_IAtom',  function (atom) {
var implh=atom.getImplicitHydrogenCount$();
if (implh == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["An atom had \'null\' implicit hydrogens!"]);
return (implh).$c();
}, 1);

Clazz.newMeth(C$, 'getAtomicNum$org_openscience_cdk_interfaces_IElement',  function (atom) {
var atno=atom.getAtomicNumber$();
if (atno == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["An atom had \'null\' atomic number!"]);
return (atno).$c();
}, 1);

Clazz.newMeth(C$, 'getMass$org_openscience_cdk_interfaces_IAtomContainer$I',  function (mol, flav) {
var isofact;
try {
isofact=$I$(8).getInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Could not load Isotopes!"]);
} else {
throw e;
}
}
var mass=0;
var hcnt=0;
switch (flav & 15) {
case 1:
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
mass+=C$.getMassOrAvg$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotope(isofact, atom);
hcnt+=C$.getImplHCount$org_openscience_cdk_interfaces_IAtom(atom);
}
mass+=hcnt * isofact.getNaturalMass$I(1);
break;
case 2:
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
mass+=isofact.getNaturalMass$I(C$.getAtomicNum$org_openscience_cdk_interfaces_IElement(atom));
hcnt+=C$.getImplHCount$org_openscience_cdk_interfaces_IAtom(atom);
}
mass+=hcnt * isofact.getNaturalMass$I(1);
break;
case 3:
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
mass+=C$.getExactMass$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotope(isofact, atom);
hcnt+=C$.getImplHCount$org_openscience_cdk_interfaces_IAtom(atom);
}
mass+=hcnt * isofact.getMajorIsotopeMass$I(1);
break;
case 4:
var mf=Clazz.array(Integer.TYPE, [128]);
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (C$.hasIsotopeSpecified$org_openscience_cdk_interfaces_IIsotope(atom)) mass+=C$.getExactMass$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotope(isofact, atom);
 else ++mf[C$.getAtomicNum$org_openscience_cdk_interfaces_IElement(atom)];
mf[1]=(mf[1]+((atom.getImplicitHydrogenCount$()).valueOf())|0);
}
for (var atno=0; atno < mf.length; atno++) {
if (mf[atno] == 0) continue;
var isotopes=isofact.getIsotopes$I(atno);
$I$(1).sort$OA$java_util_Comparator(isotopes, C$.NAT_ABUN_COMP);
mass+=C$.getDistMass$org_openscience_cdk_config_IsotopeFactory$org_openscience_cdk_interfaces_IIsotopeA$I$I(isofact, isotopes, 0, mf[atno]);
}
break;
}
return mass;
}, 1);

Clazz.newMeth(C$, 'getMass$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
return C$.getMass$org_openscience_cdk_interfaces_IAtomContainer$I(mol, 1);
}, 1);

Clazz.newMeth(C$, 'getTotalExactMass$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
return C$.getMass$org_openscience_cdk_interfaces_IAtomContainer$I(mol, 3);
}, 1);

Clazz.newMeth(C$, 'getNaturalExactMass$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
return C$.getMass$org_openscience_cdk_interfaces_IAtomContainer$I(mol, 2);
}, 1);

Clazz.newMeth(C$, 'getMolecularWeight$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
return C$.getMass$org_openscience_cdk_interfaces_IAtomContainer$I(mol, 1);
}, 1);

Clazz.newMeth(C$, 'getTotalNaturalAbundance$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
try {
var isotopes=$I$(8).getInstance$();
var abundance=1.0;
var hAbundance=(isotopes.getMajorIsotope$I(1).getNaturalAbundance$()).valueOf();
var nImplH=0;
for (var atom, $atom = atomContainer.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (atom.getImplicitHydrogenCount$() == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["an atom had with unknown (null) implicit hydrogens"]);
abundance*=(atom.getNaturalAbundance$()).$c();
for (var h=0; h < (atom.getImplicitHydrogenCount$()).$c() ; h++) abundance*=hAbundance;

nImplH=(nImplH+((atom.getImplicitHydrogenCount$()).valueOf())|0);
}
var acount=atomContainer.getAtomCount$();
return abundance / Math.pow(100, nImplH + acount);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Isotopes definitions could not be loaded", e]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'getTotalFormalCharge$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var chargeP=C$.getTotalNegativeFormalCharge$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
var chargeN=C$.getTotalPositiveFormalCharge$org_openscience_cdk_interfaces_IAtomContainer(atomContainer);
return chargeP + chargeN;
}, 1);

Clazz.newMeth(C$, 'getTotalNegativeFormalCharge$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var charge=0;
for (var i=0; i < atomContainer.getAtomCount$(); i++) {
var chargeI=(atomContainer.getAtom$I(i).getFormalCharge$()).$c();
if (chargeI < 0) charge+=chargeI;
}
return charge;
}, 1);

Clazz.newMeth(C$, 'getTotalPositiveFormalCharge$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var charge=0;
for (var i=0; i < atomContainer.getAtomCount$(); i++) {
var chargeI=(atomContainer.getAtom$I(i).getFormalCharge$()).$c();
if (chargeI > 0) charge+=chargeI;
}
return charge;
}, 1);

Clazz.newMeth(C$, 'getTotalHydrogenCount$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
if (container == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null container provided"]);
var hydrogens=0;
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if ($I$(9).HYDROGEN.getAtomicNumber$().equals$O(atom.getAtomicNumber$())) {
++hydrogens;
}var implicit=atom.getImplicitHydrogenCount$();
if (implicit != null ) {
hydrogens=(hydrogens+((implicit).valueOf())|0);
}}
return hydrogens;
}, 1);

Clazz.newMeth(C$, 'getImplicitHydrogenCount$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
if (container == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null container provided"]);
var count=0;
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var implicit=atom.getImplicitHydrogenCount$();
if (implicit != null ) {
count=(count+((implicit).valueOf())|0);
}}
return count;
}, 1);

Clazz.newMeth(C$, 'countExplicitHydrogens$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (atomContainer, atom) {
if (atomContainer == null  || atom == null  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null container or atom provided"]);
var hCount=0;
for (var connected, $connected = atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $connected.hasNext$()&&((connected=($connected.next$())),1);) {
if ($I$(9).HYDROGEN.getAtomicNumber$().equals$O(connected.getAtomicNumber$())) {
++hCount;
}}
return hCount;
}, 1);

Clazz.newMeth(C$, 'replaceAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (atoms, org, rep) {
for (var i=0; i < atoms.length; i++) {
if (atoms[i].equals$O(org)) atoms[i]=rep;
}
}, 1);

Clazz.newMeth(C$, 'convertImplicitToExplicitHydrogens$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var hydrogens=Clazz.new_($I$(4,1));
var newBonds=Clazz.new_($I$(4,1));
var hNeighbor=Clazz.new_([2 * atomContainer.getAtomCount$()],$I$(3,1).c$$I);
var oldAtomCount=atomContainer.getAtomCount$();
for (var atom, $atom = atomContainer.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if ((atom.getAtomicNumber$()).$c() !== 1 ) {
var hCount=atom.getImplicitHydrogenCount$();
if (hCount != null ) {
for (var i=0; i < (hCount).$c() ; i++) {
var hydrogen=atom.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(10),['bonds$','clone$','getBond$org_openscience_cdk_interfaces_IAtom','getBondCount$','getCharge$','getContainer$','getFractionalPoint3d$','getImplicitHydrogenCount$','getIndex$','getMapIdx$','getPoint2d$','getPoint3d$','getStereoParity$','getTotalHydrogenCount$','isAromatic$','isInRing$','neighbors$','setCharge$Double','setFractionalPoint3d$javax_vecmath_Point3d','setImplicitHydrogenCount$Integer','setIsAromatic$Z','setIsInRing$Z','setMapIdx$I','setPoint2d$javax_vecmath_Point2d','setPoint3d$javax_vecmath_Point3d','setStereoParity$Integer']), Clazz.array(java.lang.Object, -1, ["H"]));
hydrogen.setAtomTypeName$S("H");
hydrogen.setImplicitHydrogenCount$Integer(Integer.valueOf$I(0));
hydrogens.add$O(hydrogen);
newBonds.add$O(atom.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(11),['atoms$','clone$','compare$O','contains$org_openscience_cdk_interfaces_IAtom','get2DCenter$','get3DCenter$','getAtom$I','getAtomCount$','getBegin$','getConnectedAtom$org_openscience_cdk_interfaces_IAtom','getConnectedAtom$org_openscience_cdk_interfaces_IBond','getConnectedAtoms$org_openscience_cdk_interfaces_IAtom','getContainer$','getDisplay$','getEnd$','getIndex$','getOrder$','getOther$org_openscience_cdk_interfaces_IAtom','getStereo$','isAromatic$','isConnectedTo$org_openscience_cdk_interfaces_IBond','isInRing$','setAtom$org_openscience_cdk_interfaces_IAtom$I','setAtoms$org_openscience_cdk_interfaces_IAtomA','setDisplay$org_openscience_cdk_interfaces_IBond_Display','setIsAromatic$Z','setIsInRing$Z','setOrder$org_openscience_cdk_interfaces_IBond_Order','setStereo$org_openscience_cdk_interfaces_IBond_Stereo']), Clazz.array(java.lang.Object, -1, [atom, hydrogen, $I$(12).SINGLE])));
hNeighbor.putIfAbsent$O$O(atom, hydrogen);
}
atom.setImplicitHydrogenCount$Integer(Integer.valueOf$I(0));
}}}
for (var atom, $atom = hydrogens.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) atomContainer.addAtom$org_openscience_cdk_interfaces_IAtom(atom);

for (var bond, $bond = newBonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) atomContainer.addBond$org_openscience_cdk_interfaces_IBond(bond);

var stereos=Clazz.new_($I$(4,1));
var explHatoms=Clazz.new_($I$(4,1));
for (var stereo, $stereo = atomContainer.stereoElements$().iterator$(); $stereo.hasNext$()&&((stereo=($stereo.next$())),1);) {
if (Clazz.instanceOf(stereo, "org.openscience.cdk.interfaces.ITetrahedralChirality")) {
var atomStereo=stereo;
var explH=hNeighbor.get$O(atomStereo.getFocus$());
if (explH != null ) {
stereos.add$O(atomStereo.updateCarriers$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_interfaces_IChemObject(atomStereo.getFocus$(), explH));
} else {
stereos.add$O(atomStereo);
}} else if (Clazz.instanceOf(stereo, "org.openscience.cdk.stereo.SquarePlanar") || Clazz.instanceOf(stereo, "org.openscience.cdk.stereo.TrigonalBipyramidal") || Clazz.instanceOf(stereo, "org.openscience.cdk.stereo.Octahedral")  ) {
var atomStereo=stereo;
if (hNeighbor.get$O(atomStereo.getFocus$()) != null ) {
explHatoms.clear$();
for (var atom, $atom = atomContainer.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(atomStereo.getFocus$()).iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (atom.getIndex$() >= oldAtomCount) explHatoms.add$O(atom);
}
stereos.add$O(atomStereo.updateCarriers$org_openscience_cdk_interfaces_IChemObject$Iterable(atomStereo.getFocus$(), explHatoms));
} else {
stereos.add$O(atomStereo);
}} else if (Clazz.instanceOf(stereo, "org.openscience.cdk.stereo.ExtendedTetrahedral")) {
var tc=stereo;
var focus=tc.getFocus$();
var carriers=tc.getCarriers$().toArray$OA(Clazz.array($I$(10), [4]));
var ends=$I$(13).findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(atomContainer, focus);
var h1=hNeighbor.get$O(ends[0]);
var h2=hNeighbor.get$O(ends[1]);
if (h1 != null  || h2 != null  ) {
if (h1 != null ) C$.replaceAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(carriers, ends[0], h1);
if (h2 != null ) C$.replaceAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(carriers, ends[1], h2);
stereos.add$O(Clazz.new_([focus, carriers, tc.getConfigOrder$()],$I$(13,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I));
} else {
stereos.add$O(stereo);
}} else {
stereos.add$O(stereo);
}}
atomContainer.setStereoElements$java_util_List(stereos);
}, 1);

Clazz.newMeth(C$, 'countHydrogens$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (atomContainer, atom) {
var hCount=atom.getImplicitHydrogenCount$() === $I$(7).UNSET  ? 0 : (atom.getImplicitHydrogenCount$()).$c();
hCount+=C$.countExplicitHydrogens$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(atomContainer, atom);
return hCount;
}, 1);

Clazz.newMeth(C$, 'getAllIDs$org_openscience_cdk_interfaces_IAtomContainer',  function (mol) {
var idList=Clazz.new_($I$(4,1));
if (mol != null ) {
if (mol.getID$() != null ) idList.add$O(mol.getID$());
for (var atom, $atom = mol.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (atom.getID$() != null ) idList.add$O(atom.getID$());
}
for (var bond, $bond = mol.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.getID$() != null ) idList.add$O(bond.getID$());
}
}return idList;
}, 1);

Clazz.newMeth(C$, 'removeNonChiralHydrogens$org_openscience_cdk_interfaces_IAtomContainer',  function (org) {
var map=Clazz.new_($I$(3,1));
var remove=Clazz.new_($I$(4,1));
var cpy=org.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(14),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
var count=org.getAtomCount$();
for (var i=0; i < count; i++) {
var atom=org.getAtom$I(i);
var addToRemove=false;
if (C$.suppressibleHydrogen$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(org, atom)) {
if (org.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(atom).size$() == 1) {
var neighbour=org.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(atom).get$I(0);
var stereoParity=neighbour.getStereoParity$();
if (stereoParity == null  || (stereoParity).$c() === 0  ) {
addToRemove=true;
for (var bond, $bond = org.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(neighbour).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var bondStereo=bond.getStereo$();
if (bondStereo != null  && bondStereo !== $I$(15).NONE  ) addToRemove=false;
var neighboursNeighbour=bond.getOther$org_openscience_cdk_interfaces_IAtom(neighbour);
if ((neighboursNeighbour.getAtomicNumber$()).$c() === 1  && !neighboursNeighbour.equals$O(atom) ) {
addToRemove=true;
break;
}}
}}}if (addToRemove) remove.add$O(atom);
 else C$.addClone$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map(atom, cpy, map);
}
for (var stereoElement, $stereoElement = org.stereoElements$().iterator$(); $stereoElement.hasNext$()&&((stereoElement=($stereoElement.next$())),1);) {
if (Clazz.instanceOf(stereoElement, "org.openscience.cdk.interfaces.ITetrahedralChirality")) {
var tetChirality=stereoElement;
for (var atom, $atom = 0, $$atom = tetChirality.getLigands$(); $atom<$$atom.length&&((atom=($$atom[$atom])),1);$atom++) {
if ((atom.getAtomicNumber$()).$c() === 1  && remove.contains$O(atom) ) {
remove.remove$O(atom);
C$.addClone$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map(atom, cpy, map);
}}
} else if (Clazz.instanceOf(stereoElement, "org.openscience.cdk.interfaces.IDoubleBondStereochemistry")) {
var dbs=stereoElement;
var stereoBond=dbs.getStereoBond$();
for (var neighbor, $neighbor = org.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(stereoBond.getBegin$()).iterator$(); $neighbor.hasNext$()&&((neighbor=($neighbor.next$())),1);) {
if (remove.remove$O(neighbor)) C$.addClone$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map(neighbor, cpy, map);
}
for (var neighbor, $neighbor = org.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(stereoBond.getEnd$()).iterator$(); $neighbor.hasNext$()&&((neighbor=($neighbor.next$())),1);) {
if (remove.remove$O(neighbor)) C$.addClone$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map(neighbor, cpy, map);
}
}}
count=org.getBondCount$();
for (var i=0; i < count; i++) {
var bond=org.getBond$I(i);
var removedBond=false;
var length=bond.getAtomCount$();
for (var k=0; k < length; k++) {
if (remove.contains$O(bond.getAtom$I(k))) {
removedBond=true;
break;
}}
if (!removedBond) {
var clone=null;
try {
clone=org.getBond$I(i).clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
$I$(16,"createLoggingTool$Class",[Clazz.getClass(C$)]).warn$O$OA("Unexpected Error:", Clazz.array(java.lang.Object, -1, [e]));
} else {
throw e;
}
}
Clazz.assert(C$, this, function(){return clone != null });
clone.setAtoms$org_openscience_cdk_interfaces_IAtomA(Clazz.array($I$(10), -1, [map.get$O(bond.getBegin$()), map.get$O(bond.getEnd$())]));
cpy.addBond$org_openscience_cdk_interfaces_IBond(clone);
}}
for (var aRemove, $aRemove = remove.iterator$(); $aRemove.hasNext$()&&((aRemove=($aRemove.next$())),1);) {
for (var iAtom, $iAtom = org.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(aRemove).iterator$(); $iAtom.hasNext$()&&((iAtom=($iAtom.next$())),1);) {
var neighb=map.get$O(iAtom);
if (neighb == null ) continue;
neighb.setImplicitHydrogenCount$Integer(Integer.valueOf$I((neighb.getImplicitHydrogenCount$() == null  ? 0 : (neighb.getImplicitHydrogenCount$()).$c()) + 1));
}
}
for (var atom, $atom = cpy.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (atom.getImplicitHydrogenCount$() == null ) atom.setImplicitHydrogenCount$Integer(Integer.valueOf$I(0));
}
cpy.addProperties$java_util_Map(org.getProperties$());
cpy.setFlags$ZA(org.getFlags$());
return (cpy);
}, 1);

Clazz.newMeth(C$, 'addClone$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map',  function (atom, mol, map) {
var clonedAtom=null;
try {
clonedAtom=atom.clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
$I$(16,"createLoggingTool$Class",[Clazz.getClass(C$)]).warn$O$OA("Unexpected Error:", Clazz.array(java.lang.Object, -1, [e]));
} else {
throw e;
}
}
mol.addAtom$org_openscience_cdk_interfaces_IAtom(clonedAtom);
map.put$O$O(atom, clonedAtom);
}, 1);

Clazz.newMeth(C$, 'copyAndSuppressedHydrogens$org_openscience_cdk_interfaces_IAtomContainer',  function (org) {
try {
return C$.suppressHydrogens$org_openscience_cdk_interfaces_IAtomContainer(org.clone$());
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["atom container could not be cloned"]);
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$, 'suppressHydrogens$org_openscience_cdk_interfaces_IAtomContainer',  function (org) {
var anyHydrogenPresent=false;
for (var atom, $atom = org.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if ((atom.getAtomicNumber$()).$c() === 1 ) {
anyHydrogenPresent=true;
break;
}}
if (!anyHydrogenPresent) return org;
var xatoms=$I$(6).emptySet$();
var sgroups=org.getProperty$O("cdk:CtabSgroups");
if (sgroups != null ) {
xatoms=Clazz.new_($I$(17,1));
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) {
for (var bond, $bond = sgroup.getBonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
xatoms.add$O(bond.getBegin$());
xatoms.add$O(bond.getEnd$());
}
}
}var bondmap=$I$(18).withSpaceFor$org_openscience_cdk_interfaces_IAtomContainer(org);
var graph=$I$(19).toAdjList$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap(org, bondmap);
var nOrgAtoms=org.getAtomCount$();
var nOrgBonds=org.getBondCount$();
var nCpyAtoms=0;
var nCpyBonds=0;
var hydrogens=Clazz.new_($I$(17,1).c$$I,[nOrgAtoms]);
var bondsToHydrogens=Clazz.new_($I$(17,1));
var cpyAtoms=Clazz.array($I$(10), [nOrgAtoms]);
for (var v=0; v < nOrgAtoms; v++) {
var atom=org.getAtom$I(v);
if (C$.suppressibleHydrogen$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$I(org, graph, bondmap, v) && !xatoms.contains$O(atom) ) {
hydrogens.add$O(atom);
C$.incrementImplHydrogenCount$org_openscience_cdk_interfaces_IAtom(org.getAtom$I(graph[v][0]));
} else {
cpyAtoms[nCpyAtoms++]=atom;
}}
if (hydrogens.isEmpty$()) return org;
var cpyBonds=Clazz.array($I$(11), [nOrgBonds - hydrogens.size$()]);
var remaining=hydrogens.size$();
for (var bond, $bond = org.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (remaining > 0 && (hydrogens.contains$O(bond.getBegin$()) || hydrogens.contains$O(bond.getEnd$()) ) ) {
bondsToHydrogens.add$O(bond);
--remaining;
continue;
}cpyBonds[nCpyBonds++]=bond;
}
if (nCpyBonds != cpyBonds.length) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["number of removed bonds was less than the number of removed hydrogens"]);
var elements=Clazz.new_($I$(4,1));
for (var se, $se = org.stereoElements$().iterator$(); $se.hasNext$()&&((se=($se.next$())),1);) {
if (Clazz.instanceOf(se, "org.openscience.cdk.interfaces.ITetrahedralChirality")) {
var tc=se;
var focus=tc.getChiralAtom$();
var neighbors=tc.getLigands$();
var updated=false;
for (var i=0; i < neighbors.length; i++) {
if (hydrogens.contains$O(neighbors[i])) {
neighbors[i]=focus;
updated=true;
}}
if (!updated) {
elements.add$O(tc);
} else {
var e=Clazz.new_([focus, neighbors, tc.getStereo$()],$I$(20,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$org_openscience_cdk_interfaces_ITetrahedralChirality_Stereo);
e.setGroupInfo$I(tc.getGroupInfo$());
elements.add$O(e);
}} else if (Clazz.instanceOf(se, "org.openscience.cdk.stereo.ExtendedTetrahedral")) {
var tc=se;
var focus=tc.getFocus$();
var carriers=tc.getCarriers$().toArray$OA(Clazz.array($I$(10), [4]));
var ends=$I$(13).findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(org, focus);
var updated=false;
for (var i=0; i < carriers.length; i++) {
if (hydrogens.contains$O(carriers[i])) {
if (org.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(carriers[i], ends[0]) != null ) carriers[i]=ends[0];
 else carriers[i]=ends[1];
updated=true;
}}
if (!updated) {
elements.add$O(tc);
} else {
elements.add$O(Clazz.new_([focus, carriers, tc.getConfigOrder$()],$I$(13,1).c$$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomA$I));
}} else if (Clazz.instanceOf(se, "org.openscience.cdk.interfaces.IDoubleBondStereochemistry")) {
var db=se;
var conformation=db.getStereo$();
var orgStereo=db.getStereoBond$();
var orgLeft=db.getBonds$()[0];
var orgRight=db.getBonds$()[1];
var u=orgStereo.getBegin$();
var v=orgStereo.getEnd$();
var x=orgLeft.getOther$org_openscience_cdk_interfaces_IAtom(u);
var y=orgRight.getOther$org_openscience_cdk_interfaces_IAtom(v);
var xNew=x;
var yNew=y;
if (hydrogens.contains$O(x)) {
conformation=conformation.invert$();
xNew=C$.findSingleBond$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(org, u, x);
}if (hydrogens.contains$O(y)) {
conformation=conformation.invert$();
yNew=C$.findSingleBond$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(org, v, y);
}if (x == null  || y == null   || xNew == null   || yNew == null  ) continue;
if (x.equals$O(xNew) && y.equals$O(yNew) ) {
elements.add$O(db);
continue;
}var cpyLeft=!$I$(21).equals$O$O(xNew, x) ? org.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(u, xNew) : orgLeft;
var cpyRight=!$I$(21).equals$O$O(yNew, y) ? org.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(v, yNew) : orgRight;
elements.add$O(Clazz.new_([orgStereo, Clazz.array($I$(11), -1, [cpyLeft, cpyRight]), conformation],$I$(22,1).c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$org_openscience_cdk_interfaces_IDoubleBondStereochemistry_Conformation));
} else if (Clazz.instanceOf(se, "org.openscience.cdk.stereo.ExtendedCisTrans")) {
var db=se;
var config=db.getConfigOrder$();
var focus=db.getFocus$();
var orgLeft=db.getCarriers$().get$I(0);
var orgRight=db.getCarriers$().get$I(1);
var ends=$I$(23).findTerminalAtoms$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IBond(org, focus);
var u=ends[0];
var v=ends[1];
var x=orgLeft.getOther$org_openscience_cdk_interfaces_IAtom(u);
var y=orgRight.getOther$org_openscience_cdk_interfaces_IAtom(v);
var xNew=x;
var yNew=y;
if (hydrogens.contains$O(x)) {
config^=3;
xNew=C$.findSingleBond$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(org, u, x);
}if (hydrogens.contains$O(y)) {
config^=3;
yNew=C$.findSingleBond$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(org, v, y);
}if (x == null  || y == null   || xNew == null   || yNew == null  ) continue;
if (x.equals$O(xNew) && y.equals$O(yNew) ) {
elements.add$O(db);
continue;
}var cpyLeft=!$I$(21).equals$O$O(xNew, x) ? org.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(u, xNew) : orgLeft;
var cpyRight=!$I$(21).equals$O$O(yNew, y) ? org.getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom(v, yNew) : orgRight;
elements.add$O(Clazz.new_([focus, Clazz.array($I$(11), -1, [cpyLeft, cpyRight]), config],$I$(23,1).c$$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBondA$I));
} else if (Clazz.instanceOf(se, "org.openscience.cdk.stereo.Atropisomeric")) {
elements.add$O(se);
} else {
var focus=se.getFocus$();
elements.add$O(se.updateCarriers$java_util_Set$org_openscience_cdk_interfaces_IChemObject(hydrogens, focus));
}}
org.setAtoms$org_openscience_cdk_interfaces_IAtomA($I$(1).copyOf$OA$I(cpyAtoms, nCpyAtoms));
org.setBonds$org_openscience_cdk_interfaces_IBondA(cpyBonds);
org.setStereoElements$java_util_List(elements);
if (org.getSingleElectronCount$() > 0) {
var remove=Clazz.new_($I$(17,1));
for (var se, $se = org.singleElectrons$().iterator$(); $se.hasNext$()&&((se=($se.next$())),1);) {
if (hydrogens.contains$O(se.getAtom$())) remove.add$O(se);
}
for (var se, $se = remove.iterator$(); $se.hasNext$()&&((se=($se.next$())),1);) {
org.removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron(se);
}
}if (org.getLonePairCount$() > 0) {
var remove=Clazz.new_($I$(17,1));
for (var lp, $lp = org.lonePairs$().iterator$(); $lp.hasNext$()&&((lp=($lp.next$())),1);) {
if (hydrogens.contains$O(lp.getAtom$())) remove.add$O(lp);
}
for (var lp, $lp = remove.iterator$(); $lp.hasNext$()&&((lp=($lp.next$())),1);) {
org.removeLonePair$org_openscience_cdk_interfaces_ILonePair(lp);
}
}if (sgroups != null ) {
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) {
if (sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(24).CtabParentAtomList) != null ) {
var pal=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(24).CtabParentAtomList);
pal.removeAll$java_util_Collection(hydrogens);
}for (var hydrogen, $hydrogen = hydrogens.iterator$(); $hydrogen.hasNext$()&&((hydrogen=($hydrogen.next$())),1);) sgroup.removeAtom$org_openscience_cdk_interfaces_IAtom(hydrogen);

for (var bondToHydrogen, $bondToHydrogen = bondsToHydrogens.iterator$(); $bondToHydrogen.hasNext$()&&((bondToHydrogen=($bondToHydrogen.next$())),1);) sgroup.removeBond$org_openscience_cdk_interfaces_IBond(bondToHydrogen);

}
org.setProperty$O$O("cdk:CtabSgroups", sgroups);
}return org;
}, 1);

Clazz.newMeth(C$, 'removeHydrogens$org_openscience_cdk_interfaces_IAtomContainer',  function (org) {
return C$.copyAndSuppressedHydrogens$org_openscience_cdk_interfaces_IAtomContainer(org);
}, 1);

Clazz.newMeth(C$, 'suppressibleHydrogen$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (container, atom) {
if ((atom.getAtomicNumber$()).$c() !== 1 ) return false;
if (atom.getFormalCharge$() != null  && (atom.getFormalCharge$()).$c() !== 0  ) return false;
if (atom.getMassNumber$() != null ) return false;
if (atom.getImplicitHydrogenCount$() != null  && (atom.getImplicitHydrogenCount$()).$c() !== 0  ) return false;
var neighbors=container.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(atom);
if (neighbors.size$() == 1 && ((neighbors.get$I(0).getAtomicNumber$()).$c() === 1  || Clazz.instanceOf(neighbors.get$I(0), "org.openscience.cdk.interfaces.IPseudoAtom") ) ) return false;
return true;
}, 1);

Clazz.newMeth(C$, 'incrementImplHydrogenCount$org_openscience_cdk_interfaces_IAtom',  function (atom) {
var hCount=atom.getImplicitHydrogenCount$();
if (hCount == null ) {
if (!(Clazz.instanceOf(atom, "org.openscience.cdk.interfaces.IPseudoAtom"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["a non-pseudo atom had an unset hydrogen count"]);
hCount=Integer.valueOf$I(0);
}atom.setImplicitHydrogenCount$Integer(Integer.valueOf$I(((hCount).$c() + 1)|0));
}, 1);

Clazz.newMeth(C$, 'suppressibleHydrogen$org_openscience_cdk_interfaces_IAtomContainer$IAA$org_openscience_cdk_graph_GraphUtil_EdgeToBondMap$I',  function (container, graph, bondmap, v) {
var atom=container.getAtom$I(v);
if ((atom.getAtomicNumber$()).$c() !== 1 ) return false;
if (atom.getFormalCharge$() != null  && (atom.getFormalCharge$()).$c() !== 0  ) return false;
if (atom.getMassNumber$() != null ) return false;
if (graph[v].length != 1) return false;
if (bondmap.get$I$I(v, graph[v][0]).getOrder$() !== $I$(12).SINGLE ) return false;
if ((container.getAtom$I(graph[v][0]).getAtomicNumber$()).$c() === 1 ) return false;
if (Clazz.instanceOf(container.getAtom$I(graph[v][0]), "org.openscience.cdk.interfaces.IPseudoAtom")) return false;
return true;
}, 1);

Clazz.newMeth(C$, 'findSingleBond$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom',  function (container, atom, exclude) {
for (var bond, $bond = container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.getOrder$() !== $I$(12).SINGLE ) continue;
var neighbor=bond.getOther$org_openscience_cdk_interfaces_IAtom(atom);
if (!neighbor.equals$O(exclude)) return neighbor;
}
return null;
}, 1);

Clazz.newMeth(C$, 'removeHydrogensPreserveMultiplyBonded$org_openscience_cdk_interfaces_IAtomContainer',  function (ac) {
return C$.copyAndSuppressedHydrogens$org_openscience_cdk_interfaces_IAtomContainer(ac);
}, 1);

Clazz.newMeth(C$, 'removeHydrogens$org_openscience_cdk_interfaces_IAtomContainer$java_util_List',  function (ac, preserve) {
var map=Clazz.new_($I$(3,1));
var remove=Clazz.new_($I$(4,1));
var mol=ac.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(14),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
var count=ac.getAtomCount$();
for (var i=0; i < count; i++) {
var atom=ac.getAtom$I(i);
if (!C$.suppressibleHydrogen$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(ac, atom) || preserve.contains$O(atom) ) {
var a=null;
try {
a=atom.clone$();
a.setImplicitHydrogenCount$Integer(Integer.valueOf$I(0));
mol.addAtom$org_openscience_cdk_interfaces_IAtom(a);
map.put$O$O(atom, a);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["Could nod clone atom", e]);
} else {
throw e;
}
}
} else {
remove.add$O(atom);
}}
count=ac.getBondCount$();
for (var i=0; i < count; i++) {
var bond=ac.getBond$I(i);
var atom0=bond.getBegin$();
var atom1=bond.getEnd$();
var remove_bond=false;
for (var atom, $atom = bond.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (remove.contains$O(atom)) {
remove_bond=true;
break;
}}
if (!remove_bond) {
var clone=null;
try {
clone=ac.getBond$I(i).clone$();
clone.setAtoms$org_openscience_cdk_interfaces_IAtomA(Clazz.array($I$(10), -1, [map.get$O(atom0), map.get$O(atom1)]));
mol.addBond$org_openscience_cdk_interfaces_IBond(clone);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["Could nod clone bond", e]);
} else {
throw e;
}
}
}}
for (var removeAtom, $removeAtom = remove.iterator$(); $removeAtom.hasNext$()&&((removeAtom=($removeAtom.next$())),1);) {
for (var neighbor, $neighbor = ac.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(removeAtom).iterator$(); $neighbor.hasNext$()&&((neighbor=($neighbor.next$())),1);) {
var neighb=map.get$O(neighbor);
neighb.setImplicitHydrogenCount$Integer(Integer.valueOf$I(((neighb.getImplicitHydrogenCount$()).$c() + 1)|0));
}
}
return (mol);
}, 1);

Clazz.newMeth(C$, 'setAtomProperties$org_openscience_cdk_interfaces_IAtomContainer$O$O',  function (container, propKey, propVal) {
if (container != null ) {
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
atom.setProperty$O$O(propKey, propVal);
}
}}, 1);

Clazz.newMeth(C$, 'unregisterElectronContainerListeners$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
for (var electronContainer, $electronContainer = container.electronContainers$().iterator$(); $electronContainer.hasNext$()&&((electronContainer=($electronContainer.next$())),1);) electronContainer.removeListener$org_openscience_cdk_interfaces_IChemObjectListener(container);

}, 1);

Clazz.newMeth(C$, 'unregisterAtomListeners$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) atom.removeListener$org_openscience_cdk_interfaces_IChemObjectListener(container);

}, 1);

Clazz.newMeth(C$, 'getIntersection$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtomContainer',  function (container1, container2) {
var intersection=container1.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(14),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, []));
for (var i=0; i < container1.getAtomCount$(); i++) {
if (container2.contains$org_openscience_cdk_interfaces_IAtom(container1.getAtom$I(i))) {
intersection.addAtom$org_openscience_cdk_interfaces_IAtom(container1.getAtom$I(i));
}}
for (var i=0; i < container1.getElectronContainerCount$(); i++) {
if (container2.contains$org_openscience_cdk_interfaces_IElectronContainer(container1.getElectronContainer$I(i))) {
intersection.addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer(container1.getElectronContainer$I(i));
}}
return intersection;
}, 1);

Clazz.newMeth(C$, 'getAtomArray$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var ret=Clazz.array($I$(10), [container.getAtomCount$()]);
for (var i=0; i < ret.length; ++i) ret[i]=container.getAtom$I(i);

return ret;
}, 1);

Clazz.newMeth(C$, 'getAtomArray$java_util_List',  function (list) {
var ret=Clazz.array($I$(10), [list.size$()]);
for (var i=0; i < ret.length; ++i) ret[i]=list.get$I(i);

return ret;
}, 1);

Clazz.newMeth(C$, 'getBondArray$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var ret=Clazz.array($I$(11), [container.getBondCount$()]);
for (var i=0; i < ret.length; ++i) ret[i]=container.getBond$I(i);

return ret;
}, 1);

Clazz.newMeth(C$, 'getBondArray$java_util_List',  function (list) {
var ret=Clazz.array($I$(11), [list.size$()]);
for (var i=0; i < ret.length; ++i) ret[i]=list.get$I(i);

return ret;
}, 1);

Clazz.newMeth(C$, 'getElectronContainerArray$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var ret=Clazz.array($I$(25), [container.getElectronContainerCount$()]);
for (var i=0; i < ret.length; ++i) ret[i]=container.getElectronContainer$I(i);

return ret;
}, 1);

Clazz.newMeth(C$, 'getElectronContainerArray$java_util_List',  function (list) {
var ret=Clazz.array($I$(25), [list.size$()]);
for (var i=0; i < ret.length; ++i) ret[i]=list.get$I(i);

return ret;
}, 1);

Clazz.newMeth(C$, 'percieveAtomTypesAndConfigureAtoms$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var matcher=$I$(26,"getInstance$org_openscience_cdk_interfaces_IChemObjectBuilder",[container.getBuilder$()]);
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var matched=matcher.findMatchingAtomType$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(container, atom);
if (matched != null ) $I$(27).configure$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomType(atom, matched);
}
}, 1);

Clazz.newMeth(C$, 'percieveAtomTypesAndConfigureUnsetProperties$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var matcher=$I$(26,"getInstance$org_openscience_cdk_interfaces_IChemObjectBuilder",[container.getBuilder$()]);
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var matched=matcher.findMatchingAtomType$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(container, atom);
if (matched != null ) $I$(27).configureUnsetProperties$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomType(atom, matched);
}
}, 1);

Clazz.newMeth(C$, 'clearAtomConfigurations$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
atom.setAtomTypeName$S($I$(7).UNSET);
atom.setMaxBondOrder$org_openscience_cdk_interfaces_IBond_Order($I$(7).UNSET);
atom.setBondOrderSum$Double($I$(7).UNSET);
atom.setCovalentRadius$Double($I$(7).UNSET);
atom.setValency$Integer($I$(7).UNSET);
atom.setFormalCharge$Integer($I$(7).UNSET);
atom.setHybridization$org_openscience_cdk_interfaces_IAtomType_Hybridization($I$(7).UNSET);
atom.setFormalNeighbourCount$Integer($I$(7).UNSET);
atom.setFlag$I$Z(512, false);
atom.setFlag$I$Z(256, false);
atom.setProperty$O$O("cdk:Chemical Group", $I$(7).UNSET);
atom.setFlag$I$Z(32, false);
atom.setProperty$O$O("org.openscience.cdk.renderer.color", $I$(7).UNSET);
atom.setExactMass$Double($I$(7).UNSET);
}
}, 1);

Clazz.newMeth(C$, 'getSingleBondEquivalentSum$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var sum=0;
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var order=bond.getOrder$();
if (order != null ) {
sum=(sum+((order.numeric$()).valueOf())|0);
}}
return sum;
}, 1);

Clazz.newMeth(C$, 'getMaximumBondOrder$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
return $I$(28,"getMaximumBondOrder$java_util_Iterator",[container.bonds$().iterator$()]);
}, 1);

Clazz.newMeth(C$, 'getHeavyAtoms$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var newAc=Clazz.new_($I$(4,1));
for (var f=0; f < container.getAtomCount$(); f++) {
if ((container.getAtom$I(f).getAtomicNumber$()).$c() !== 1 ) {
newAc.add$O(container.getAtom$I(f));
}}
return newAc;
}, 1);

Clazz.newMeth(C$, 'createAllCarbonAllSingleNonAromaticBondAtomContainer$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var query=atomContainer.clone$();
for (var i=0; i < query.getBondCount$(); i++) {
query.getBond$I(i).setOrder$org_openscience_cdk_interfaces_IBond_Order($I$(12).SINGLE);
query.getBond$I(i).setFlag$I$Z(32, false);
query.getBond$I(i).setFlag$I$Z(4096, false);
query.getBond$I(i).getBegin$().setSymbol$S("C");
query.getBond$I(i).getBegin$().setHybridization$org_openscience_cdk_interfaces_IAtomType_Hybridization(null);
query.getBond$I(i).getEnd$().setSymbol$S("C");
query.getBond$I(i).getEnd$().setHybridization$org_openscience_cdk_interfaces_IAtomType_Hybridization(null);
query.getBond$I(i).getBegin$().setFlag$I$Z(32, false);
query.getBond$I(i).getEnd$().setFlag$I$Z(32, false);
}
return query;
}, 1);

Clazz.newMeth(C$, 'anonymise$org_openscience_cdk_interfaces_IAtomContainer',  function (src) {
var builder=src.getBuilder$();
var atoms=Clazz.array($I$(10), [src.getAtomCount$()]);
var bonds=Clazz.array($I$(11), [src.getBondCount$()]);
for (var i=0; i < atoms.length; i++) {
atoms[i]=builder.newAtom$();
atoms[i].setAtomicNumber$Integer(Integer.valueOf$I(6));
atoms[i].setSymbol$S("C");
atoms[i].setImplicitHydrogenCount$Integer(Integer.valueOf$I(0));
var srcAtom=src.getAtom$I(i);
if (srcAtom.getPoint2d$() != null ) atoms[i].setPoint2d$javax_vecmath_Point2d(Clazz.new_([srcAtom.getPoint2d$()],$I$(29,1).c$$javax_vecmath_Point2d));
if (srcAtom.getPoint3d$() != null ) atoms[i].setPoint3d$javax_vecmath_Point3d(Clazz.new_([srcAtom.getPoint3d$()],$I$(30,1).c$$javax_vecmath_Point3d));
}
for (var i=0; i < bonds.length; i++) {
var bond=src.getBond$I(i);
var u=src.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
var v=src.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$());
bonds[i]=builder.newInstance$Class$OA(Clazz.getClass($I$(11),['atoms$','clone$','compare$O','contains$org_openscience_cdk_interfaces_IAtom','get2DCenter$','get3DCenter$','getAtom$I','getAtomCount$','getBegin$','getConnectedAtom$org_openscience_cdk_interfaces_IAtom','getConnectedAtom$org_openscience_cdk_interfaces_IBond','getConnectedAtoms$org_openscience_cdk_interfaces_IAtom','getContainer$','getDisplay$','getEnd$','getIndex$','getOrder$','getOther$org_openscience_cdk_interfaces_IAtom','getStereo$','isAromatic$','isConnectedTo$org_openscience_cdk_interfaces_IBond','isInRing$','setAtom$org_openscience_cdk_interfaces_IAtom$I','setAtoms$org_openscience_cdk_interfaces_IAtomA','setDisplay$org_openscience_cdk_interfaces_IBond_Display','setIsAromatic$Z','setIsInRing$Z','setOrder$org_openscience_cdk_interfaces_IBond_Order','setStereo$org_openscience_cdk_interfaces_IBond_Stereo']), Clazz.array(java.lang.Object, -1, [atoms[u], atoms[v]]));
}
var dest=builder.newInstance$Class$OA(Clazz.getClass($I$(14),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0)]));
dest.setAtoms$org_openscience_cdk_interfaces_IAtomA(atoms);
dest.setBonds$org_openscience_cdk_interfaces_IBondA(bonds);
return dest;
}, 1);

Clazz.newMeth(C$, 'skeleton$org_openscience_cdk_interfaces_IAtomContainer',  function (src) {
var builder=src.getBuilder$();
var atoms=Clazz.array($I$(10), [src.getAtomCount$()]);
var bonds=Clazz.array($I$(11), [src.getBondCount$()]);
for (var i=0; i < atoms.length; i++) {
atoms[i]=builder.newInstance$Class$OA(Clazz.getClass($I$(10),['bonds$','clone$','getBond$org_openscience_cdk_interfaces_IAtom','getBondCount$','getCharge$','getContainer$','getFractionalPoint3d$','getImplicitHydrogenCount$','getIndex$','getMapIdx$','getPoint2d$','getPoint3d$','getStereoParity$','getTotalHydrogenCount$','isAromatic$','isInRing$','neighbors$','setCharge$Double','setFractionalPoint3d$javax_vecmath_Point3d','setImplicitHydrogenCount$Integer','setIsAromatic$Z','setIsInRing$Z','setMapIdx$I','setPoint2d$javax_vecmath_Point2d','setPoint3d$javax_vecmath_Point3d','setStereoParity$Integer']), Clazz.array(java.lang.Object, -1, [src.getAtom$I(i).getAtomicNumber$()]));
}
for (var i=0; i < bonds.length; i++) {
var bond=src.getBond$I(i);
var u=src.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getBegin$());
var v=src.indexOf$org_openscience_cdk_interfaces_IAtom(bond.getEnd$());
bonds[i]=builder.newInstance$Class$OA(Clazz.getClass($I$(11),['atoms$','clone$','compare$O','contains$org_openscience_cdk_interfaces_IAtom','get2DCenter$','get3DCenter$','getAtom$I','getAtomCount$','getBegin$','getConnectedAtom$org_openscience_cdk_interfaces_IAtom','getConnectedAtom$org_openscience_cdk_interfaces_IBond','getConnectedAtoms$org_openscience_cdk_interfaces_IAtom','getContainer$','getDisplay$','getEnd$','getIndex$','getOrder$','getOther$org_openscience_cdk_interfaces_IAtom','getStereo$','isAromatic$','isConnectedTo$org_openscience_cdk_interfaces_IBond','isInRing$','setAtom$org_openscience_cdk_interfaces_IAtom$I','setAtoms$org_openscience_cdk_interfaces_IAtomA','setDisplay$org_openscience_cdk_interfaces_IBond_Display','setIsAromatic$Z','setIsInRing$Z','setOrder$org_openscience_cdk_interfaces_IBond_Order','setStereo$org_openscience_cdk_interfaces_IBond_Stereo']), Clazz.array(java.lang.Object, -1, [atoms[u], atoms[v]]));
}
var dest=builder.newInstance$Class$OA(Clazz.getClass($I$(14),['add$org_openscience_cdk_interfaces_IAtomContainer','addAtom$org_openscience_cdk_interfaces_IAtom','addBond$org_openscience_cdk_interfaces_IBond','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_interfaces_IBond_Stereo','addBond$I$I$org_openscience_cdk_interfaces_IBond_Order','addElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','addLonePair$org_openscience_cdk_interfaces_ILonePair','addLonePair$I','addSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','addSingleElectron$I','addStereoElement$org_openscience_cdk_interfaces_IStereoElement','atoms$','bonds$','clone$','contains$org_openscience_cdk_interfaces_IAtom','contains$org_openscience_cdk_interfaces_IBond','contains$org_openscience_cdk_interfaces_ILonePair','contains$org_openscience_cdk_interfaces_ISingleElectron','contains$org_openscience_cdk_interfaces_IElectronContainer','electronContainers$','getAtom$I','getAtomCount$','getAtomNumber$org_openscience_cdk_interfaces_IAtom','getBond$I','getBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondCount$','getBondNumber$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','getBondNumber$org_openscience_cdk_interfaces_IBond','getBondOrderSum$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsCount$org_openscience_cdk_interfaces_IAtom','getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$org_openscience_cdk_interfaces_IAtom','getConnectedBondsCount$I','getConnectedBondsList$org_openscience_cdk_interfaces_IAtom','getConnectedElectronContainersList$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsCount$org_openscience_cdk_interfaces_IAtom','getConnectedLonePairsList$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom','getConnectedSingleElectronsList$org_openscience_cdk_interfaces_IAtom','getElectronContainer$I','getElectronContainerCount$','getFirstAtom$','getLastAtom$','getLonePair$I','getLonePairCount$','getLonePairNumber$org_openscience_cdk_interfaces_ILonePair','getMaximumBondOrder$org_openscience_cdk_interfaces_IAtom','getMinimumBondOrder$org_openscience_cdk_interfaces_IAtom','getSingleElectron$I','getSingleElectronCount$','getSingleElectronNumber$org_openscience_cdk_interfaces_ISingleElectron','getTitle$','indexOf$org_openscience_cdk_interfaces_IAtom','indexOf$org_openscience_cdk_interfaces_IBond','indexOf$org_openscience_cdk_interfaces_ISingleElectron','indexOf$org_openscience_cdk_interfaces_ILonePair','isEmpty$','lonePairs$','newAtom$','newAtom$I','newAtom$I$I','newAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','newBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond_Order','remove$org_openscience_cdk_interfaces_IAtomContainer','removeAllBonds$','removeAllElectronContainers$','removeAllElements$','removeAtom$org_openscience_cdk_interfaces_IAtom','removeAtom$I','removeAtomAndConnectedElectronContainers$org_openscience_cdk_interfaces_IAtom','removeAtomOnly$I','removeAtomOnly$org_openscience_cdk_interfaces_IAtom','removeBond$I','removeBond$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtom','removeBond$org_openscience_cdk_interfaces_IBond','removeElectronContainer$I','removeElectronContainer$org_openscience_cdk_interfaces_IElectronContainer','removeLonePair$I','removeLonePair$org_openscience_cdk_interfaces_ILonePair','removeSingleElectron$I','removeSingleElectron$org_openscience_cdk_interfaces_ISingleElectron','setAtom$I$org_openscience_cdk_interfaces_IAtom','setAtoms$org_openscience_cdk_interfaces_IAtomA','setBonds$org_openscience_cdk_interfaces_IBondA','setStereoElements$java_util_List','setTitle$S','singleElectrons$','stereoElements$']), Clazz.array(java.lang.Object, -1, [Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0), Integer.valueOf$I(0)]));
dest.setAtoms$org_openscience_cdk_interfaces_IAtomA(atoms);
dest.setBonds$org_openscience_cdk_interfaces_IBondA(bonds);
return dest;
}, 1);

Clazz.newMeth(C$, 'getBondOrderSum$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (container, atom) {
var count=0;
for (var bond, $bond = container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var order=bond.getOrder$();
if (order != null ) {
count+=(order.numeric$()).$c();
}}
return count;
}, 1);

Clazz.newMeth(C$, 'setSingleOrDoubleFlags$org_openscience_cdk_interfaces_IAtomContainer',  function (ac) {
var rs=Clazz.new_($I$(31,1).c$$org_openscience_cdk_interfaces_IAtomContainer,[ac]);
var singleOrDouble=false;
for (var bond, $bond = rs.ringFragments$().bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.getFlag$I(32)) {
bond.setFlag$I$Z(4096, true);
bond.getBegin$().setFlag$I$Z(4096, true);
bond.getEnd$().setFlag$I$Z(4096, true);
singleOrDouble=!!(singleOrDouble | true);
}}
if (singleOrDouble) {
ac.setFlag$I$Z(4096, true);
}return ac;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
C$.NAT_ABUN_COMP=((P$.AtomContainerManipulator$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AtomContainerManipulator$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.Comparator', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, ['compare$org_openscience_cdk_interfaces_IIsotope$org_openscience_cdk_interfaces_IIsotope','compare$O$O'],  function (o1, o2) {
return -Double.compare$D$D((o1.getNaturalAbundance$()).valueOf(), (o2.getNaturalAbundance$()).valueOf());
});
})()
), Clazz.new_(P$.AtomContainerManipulator$1.$init$,[this, null]));
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
