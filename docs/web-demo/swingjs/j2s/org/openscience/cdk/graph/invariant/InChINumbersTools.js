(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph.invariant"),I$=[[0,'io.github.dan2097.jnainchi.InchiFlag','java.util.Arrays',['org.openscience.cdk.interfaces.IBond','.Order'],'org.openscience.cdk.inchi.InChIGeneratorFactory','io.github.dan2097.jnainchi.InchiStatus']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "InChINumbersTools");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getNumbers$org_openscience_cdk_interfaces_IAtomContainer',  function (atomContainer) {
var aux=C$.auxInfo$org_openscience_cdk_interfaces_IAtomContainer$io_github_dan2097_jnainchi_InchiFlagA(atomContainer, Clazz.array($I$(1), [0]));
var numbers=Clazz.array(Long.TYPE, [atomContainer.getAtomCount$()]);
C$.parseAuxInfo$S$JA(aux, numbers);
return numbers;
}, 1);

Clazz.newMeth(C$, 'parseAuxInfo$S$JA',  function (aux, numbers) {
aux=aux.substring$I(aux.indexOf$S("/N:") + 3);
var numberStringAux=aux.substring$I$I(0, aux.indexOf$I("/"));
var i=1;
for (var numberString, $numberString = 0, $$numberString = numberStringAux.split$S("[,;]"); $numberString<$$numberString.length&&((numberString=($$numberString[$numberString])),1);$numberString++) numbers[Integer.parseInt$S(numberString) - 1]=i++;

}, 1);

Clazz.newMeth(C$, 'getUSmilesNumbers$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
if (container.isEmpty$()) {
return Clazz.array(Long.TYPE, [0]);
}var aux=C$.auxInfo$org_openscience_cdk_interfaces_IAtomContainer$io_github_dan2097_jnainchi_InchiFlagA(container, Clazz.array($I$(1), -1, [$I$(1).RecMet, $I$(1).FixedH, $I$(1).LargeMolecules]));
return C$.parseUSmilesNumbers$S$org_openscience_cdk_interfaces_IAtomContainer(aux, container);
}, 1);

Clazz.newMeth(C$, 'parseUSmilesNumbers$S$org_openscience_cdk_interfaces_IAtomContainer',  function (aux, container) {
var index;
var numbers=Clazz.array(Long.TYPE, [container.getAtomCount$()]);
var first;
var label=1;
if ((index=aux.indexOf$S("/R:")) >= 0) {
var endIndex=aux.indexOf$I$I("/", index + 8);
if (endIndex < 0) endIndex=aux.length$();
var baseNumbers=aux.substring$I$I(index + 8, endIndex).split$S(";");
first=Clazz.array(Integer.TYPE, [baseNumbers.length]);
$I$(2).fill$IA$I(first, -1);
for (var i=0; i < baseNumbers.length; i++) {
var numbering=baseNumbers[i].split$S(",");
first[i]=Integer.parseInt$S(numbering[0]) - 1;
for (var number, $number = 0, $$number = numbering; $number<$$number.length&&((number=($$number[$number])),1);$number++) {
numbers[Integer.parseInt$S(number) - 1]=label++;
}
}
} else if ((index=aux.indexOf$S("/N:")) >= 0) {
var baseNumbers=aux.substring$I$I(index + 3, aux.indexOf$I$I("/", index + 3)).split$S(";");
first=Clazz.array(Integer.TYPE, [baseNumbers.length]);
$I$(2).fill$IA$I(first, -1);
if ((index=aux.indexOf$S("/F:")) >= 0) {
var fixedHNumbers=aux.substring$I$I(index + 3, aux.indexOf$I$I("/", index + 3)).split$S(";");
for (var i=0; i < fixedHNumbers.length; i++) {
var component=fixedHNumbers[i];
if (component.charAt$I(component.length$() - 1) == "m") {
var n=component.length$() > 1 ? Integer.parseInt$S(component.substring$I$I(0, component.length$() - 1)) : 1;
for (var j=0; j < n; j++) {
var numbering=baseNumbers[i + j].split$S(",");
first[i + j]=Integer.parseInt$S(numbering[0]) - 1;
for (var number, $number = 0, $$number = numbering; $number<$$number.length&&((number=($$number[$number])),1);$number++) numbers[Integer.parseInt$S(number) - 1]=label++;

}
} else {
var numbering=component.split$S(",");
for (var number, $number = 0, $$number = numbering; $number<$$number.length&&((number=($$number[$number])),1);$number++) numbers[Integer.parseInt$S(number) - 1]=label++;

}}
} else {
for (var i=0; i < baseNumbers.length; i++) {
var numbering=baseNumbers[i].split$S(",");
first[i]=Integer.parseInt$S(numbering[0]) - 1;
for (var number, $number = 0, $$number = numbering; $number<$$number.length&&((number=($$number[$number])),1);$number++) numbers[Integer.parseInt$S(number) - 1]=label++;

}
}} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["AuxInfo did not contain extractable base numbers (/N: or /R:)."]);
}for (var v, $v = 0, $$v = first; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
if (v >= 0) {
var atom=container.getAtom$I(v);
if (atom.getFormalCharge$() == null ) continue;
if ((atom.getAtomicNumber$()).$c() === 8  && (atom.getFormalCharge$()).$c() === -1  ) {
var neighbors=container.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(atom);
if (neighbors.size$() == 1) {
var correctedStart=C$.findPiBondedOxygen$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(container, neighbors.get$I(0));
if (correctedStart != null ) C$.exch$JA$I$I(numbers, v, container.indexOf$org_openscience_cdk_interfaces_IAtom(correctedStart));
}}}}
for (var i=0; i < numbers.length; i++) if (Long.$eq(numbers[i],0 )) numbers[i]=label++;

return numbers;
}, 1);

Clazz.newMeth(C$, 'exch$JA$I$I',  function (values, i, j) {
var k=values[i];
values[i]=values[j];
values[j]=k;
}, 1);

Clazz.newMeth(C$, 'findPiBondedOxygen$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom',  function (container, atom) {
for (var bond, $bond = container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom).iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (bond.getOrder$() === $I$(3).DOUBLE ) {
var neighbor=bond.getOther$org_openscience_cdk_interfaces_IAtom(atom);
var charge=neighbor.getFormalCharge$() == null  ? 0 : (neighbor.getFormalCharge$()).$c();
if ((neighbor.getAtomicNumber$()).$c() === 8  && charge == 0 ) return neighbor;
}}
return null;
}, 1);

Clazz.newMeth(C$, 'auxInfo$org_openscience_cdk_interfaces_IAtomContainer$io_github_dan2097_jnainchi_InchiFlagA',  function (container, flags) {
var factory=$I$(4).getInstance$();
var org=factory.getIgnoreAromaticBonds$();
factory.setIgnoreAromaticBonds$Z(true);
var gen=factory.getInChIGenerator$org_openscience_cdk_interfaces_IAtomContainer$io_github_dan2097_jnainchi_InchiFlagA(container, flags);
factory.setIgnoreAromaticBonds$Z(org);
if (gen.getStatus$() === $I$(5).ERROR ) throw Clazz.new_(Clazz.load('org.openscience.cdk.exception.CDKException').c$$S,["Could not generate InChI Numbers: " + gen.getMessage$()]);
return gen.getAuxInfo$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:57 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
