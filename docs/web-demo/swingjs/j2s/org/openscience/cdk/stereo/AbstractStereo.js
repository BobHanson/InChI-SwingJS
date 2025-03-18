(function(){var P$=Clazz.newPackage("org.openscience.cdk.stereo"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Collections','java.util.HashMap']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbstractStereo", null, null, 'org.openscience.cdk.interfaces.IStereoElement');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['value'],'O',['focus','<F extends org.openscience.cdk.interfaces.IChemObject>','carriers','java.util.List','builder','org.openscience.cdk.interfaces.IChemObjectBuilder']]]

Clazz.newMeth(C$, 'numCarriers$I',  function (cfg) {
return ((cfg >>> 12) & 15);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_interfaces_IChemObjectA$I',  function (focus, carriers, value) {
;C$.$init$.apply(this);
if (focus == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Focus of stereochemistry can not be null!"]);
if (carriers == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Carriers of the configuration can not be null!"]);
if (carriers.length != C$.numCarriers$I(value)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected number of stereo carriers! expected " + ((value >>> 12) & 15) + " was " + carriers.length ]);
for (var carrier, $carrier = 0, $$carrier = carriers; $carrier<$$carrier.length&&((carrier=($$carrier[$carrier])),1);$carrier++) {
if (carrier == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["A carrier was undefined!"]);
}
this.value=value;
this.focus=focus;
var tmp=Clazz.new_($I$(1,1));
$I$(2).addAll$java_util_Collection$OA(tmp, carriers);
this.carriers=$I$(2).unmodifiableList$java_util_List(tmp);
}, 1);

Clazz.newMeth(C$, 'getFocus$',  function () {
return this.focus;
});

Clazz.newMeth(C$, 'getCarriers$',  function () {
return this.carriers;
});

Clazz.newMeth(C$, 'getConfigClass$',  function () {
return this.value & 65280;
});

Clazz.newMeth(C$, 'getConfigOrder$',  function () {
return this.value & 255;
});

Clazz.newMeth(C$, 'getConfig$',  function () {
return this.value & 65535;
});

Clazz.newMeth(C$, 'setConfigOrder$I',  function (cfg) {
this.value=this.getConfigClass$() | cfg;
});

Clazz.newMeth(C$, 'getGroupInfo$',  function () {
return this.value & 16711680;
});

Clazz.newMeth(C$, 'setGroupInfo$I',  function (grp) {
this.value&=~16711680;
this.value|=(grp & 16711680);
});

Clazz.newMeth(C$, 'contains$org_openscience_cdk_interfaces_IAtom',  function (atom) {
if (this.focus.equals$O(atom) || (Clazz.instanceOf(this.focus, "org.openscience.cdk.interfaces.IBond") && (this.focus).contains$org_openscience_cdk_interfaces_IAtom(atom) ) ) return true;
for (var carrier, $carrier = this.carriers.iterator$(); $carrier.hasNext$()&&((carrier=($carrier.next$())),1);) {
if (carrier.equals$O(atom) || (Clazz.instanceOf(carrier, "org.openscience.cdk.interfaces.IBond") && (carrier).contains$org_openscience_cdk_interfaces_IAtom(atom) ) ) return true;
}
return false;
});

Clazz.newMeth(C$, 'map$java_util_Map$java_util_Map',  function (atoms, bonds) {
if (atoms == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Atom map should be non-null"]);
if (bonds == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bond map should be non-null"]);
var map=Clazz.new_([atoms.size$() + bonds.size$()],$I$(3,1).c$$I);
map.putAll$java_util_Map(atoms);
map.putAll$java_util_Map(bonds);
return this.map$java_util_Map(map);
});

Clazz.newMeth(C$, 'map$java_util_Map',  function (chemobjs) {
if (chemobjs == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["chemobj map was not provided!"]);
var newfocus=chemobjs.get$O(this.focus);
if (newfocus == null ) newfocus=this.focus;
var newcarriers=this.carriers;
for (var i=0; i < newcarriers.size$(); i++) {
var newcarrier=chemobjs.get$O(newcarriers.get$I(i));
if (newcarrier != null ) {
if (newcarriers === this.carriers ) newcarriers=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.carriers]);
newcarriers.set$I$O(i, newcarrier);
}}
if (newfocus === this.focus  && newcarriers === this.carriers  ) return this;
var se=this.create$org_openscience_cdk_interfaces_IChemObject$java_util_List$I(newfocus, newcarriers, this.value);
se.setGroupInfo$I(this.getGroupInfo$());
return se;
});

Clazz.newMeth(C$, 'updateCarriers$java_util_List',  function (carriers) {
var se=this.create$org_openscience_cdk_interfaces_IChemObject$java_util_List$I(this.focus, carriers, this.value);
se.setGroupInfo$I(this.getGroupInfo$());
return se;
}, p$1);

Clazz.newMeth(C$, 'updateCarriers$org_openscience_cdk_interfaces_IChemObject$Iterable',  function (remove, adds) {
var repIter=adds.iterator$();
var carriers=this.getCarriers$();
var newCarriers=Clazz.new_($I$(1,1));
for (var carrier, $carrier = carriers.iterator$(); $carrier.hasNext$()&&((carrier=($carrier.next$())),1);) {
if (remove.equals$O(carrier) && repIter.hasNext$() ) newCarriers.add$O(repIter.next$());
 else newCarriers.add$O(carrier);
}
return p$1.updateCarriers$java_util_List.apply(this, [newCarriers]);
});

Clazz.newMeth(C$, 'updateCarriers$java_util_Set$org_openscience_cdk_interfaces_IChemObject',  function (remove, rep) {
var carriers=this.getCarriers$();
var newCarriers=Clazz.new_($I$(1,1));
for (var carrier, $carrier = carriers.iterator$(); $carrier.hasNext$()&&((carrier=($carrier.next$())),1);) {
if (remove.contains$O(carrier)) newCarriers.add$O(rep);
 else newCarriers.add$O(carrier);
}
return p$1.updateCarriers$java_util_List.apply(this, [newCarriers]);
});

Clazz.newMeth(C$, 'mapStrict$java_util_Map',  function (chemobjs) {
if (chemobjs == null ) throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["chemobj map was not provided!"]);
var newfocus=chemobjs.get$O(this.focus);
if (newfocus == null ) return null;
var newcarriers=this.carriers;
for (var i=0; i < newcarriers.size$(); i++) {
var newcarrier=chemobjs.get$O(newcarriers.get$I(i));
if (newcarrier != null ) {
if (newcarriers === this.carriers ) newcarriers=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.carriers]);
newcarriers.set$I$O(i, newcarrier);
} else {
return null;
}}
if (newfocus === this.focus  && newcarriers === this.carriers  ) return this;
var se=this.create$org_openscience_cdk_interfaces_IChemObject$java_util_List$I(newfocus, newcarriers, this.value);
se.setGroupInfo$I(this.getGroupInfo$());
return se;
});

Clazz.newMeth(C$, 'getBuilder$',  function () {
if (this.builder == null ) throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Non-domain object!"]);
return this.builder;
});

Clazz.newMeth(C$, 'setBuilder$org_openscience_cdk_interfaces_IChemObjectBuilder',  function (builder) {
this.builder=builder;
});

Clazz.newMeth(C$, 'invapply$OA$IA',  function (src, perm) {
var res=src.clone$();
for (var i=0; i < src.length; i++) res[i]=src[perm[i]];

return res;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:28 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
