(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),p$1={},I$=[[0,'org.openscience.cdk.renderer.generators.standard.TextOutline','org.openscience.cdk.config.Elements',['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.OmitMajorIsotopes'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.PseudoFontStyle'],'java.util.ArrayList','org.openscience.cdk.renderer.generators.standard.AtomSymbol','java.util.Collections','org.openscience.cdk.renderer.generators.standard.AbbreviationLabel','org.openscience.cdk.renderer.generators.standard.HydrogenPosition',['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.DeuteriumSymbol'],'org.openscience.cdk.config.Isotopes','StringBuilder']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StandardAtomGenerator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['scriptSize','padding'],'O',['font','java.awt.Font','defaultHydrogenLabel','org.openscience.cdk.renderer.generators.standard.TextOutline']]]

Clazz.newMeth(C$, 'c$$java_awt_Font',  function (font) {
C$.c$$java_awt_Font$D$D.apply(this, [font, 0.15, 0.6]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_Font$D$D',  function (font, adjunctSpacing, scriptSize) {
;C$.$init$.apply(this);
this.font=font;
this.scriptSize=scriptSize;
this.defaultHydrogenLabel=Clazz.new_($I$(1,1).c$$S$java_awt_Font,["H", font]);
this.padding=adjunctSpacing * this.defaultHydrogenLabel.getBounds$().getWidth$();
}, 1);

Clazz.newMeth(C$, 'generateSymbol$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_RendererModel',  function (container, atom, position, model) {
if (Clazz.instanceOf(atom, "org.openscience.cdk.interfaces.IPseudoAtom")) {
var pAtom=atom;
if (pAtom.getAttachPointNum$() <= 0) {
if (pAtom.getLabel$().equals$O("*")) {
var mass=C$.unboxSafely$Integer$I(pAtom.getMassNumber$(), 0);
var charge=C$.unboxSafely$Integer$I(pAtom.getFormalCharge$(), 0);
var hcnt=C$.unboxSafely$Integer$I(pAtom.getImplicitHydrogenCount$(), 0);
var nrad=container.getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom(atom);
return this.generatePeriodicSymbol$I$I$I$I$I$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_RendererModel(0, hcnt, mass, charge, nrad, position, model);
}return this.generatePseudoSymbol$S$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_RendererModel(C$.accessPseudoLabel$org_openscience_cdk_interfaces_IPseudoAtom$S(pAtom, "?"), position, model);
} else return null;
} else {
var number=C$.unboxSafely$Integer$I(atom.getAtomicNumber$(), $I$(2,"ofString$S",[atom.getSymbol$()]).number$());
var mass=atom.getMassNumber$();
if (number != 0 && mass != null   && model != null   && (model.get$Class(Clazz.getClass($I$(3)))).$c()  && p$1.isMajorIsotope$I$I.apply(this, [number, (mass).$c()]) ) {
mass=null;
}return this.generatePeriodicSymbol$I$I$I$I$I$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_RendererModel(number, C$.unboxSafely$Integer$I(atom.getImplicitHydrogenCount$(), 0), C$.unboxSafely$Integer$I(mass, -1), C$.unboxSafely$Integer$I(atom.getFormalCharge$(), 0), container.getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom(atom), position, model);
}});

Clazz.newMeth(C$, 'generatePseudoSymbol$S$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_RendererModel',  function (label, position, model) {
var stylisedFont;
if (model != null  && (model.get$Class(Clazz.getClass($I$(4)))).$c() !== 0  ) {
var style=model.get$Class(Clazz.getClass($I$(4)));
stylisedFont=this.font.deriveFont$I((style).$c());
} else {
stylisedFont=this.font;
}var outlines=Clazz.new_($I$(5,1).c$$I,[3]);
var beg=0;
var pos=0;
var len=label.length$();
while (pos < len && p$1.isUpperCase$C.apply(this, [label.charAt$I(pos)]) )++pos;

if (label.charAt$I(0) != "R") while (pos < len && p$1.isLowerCase$C.apply(this, [label.charAt$I(pos)]) )++pos;

if (pos > beg) {
outlines.add$O(Clazz.new_([label.substring$I$I(beg, pos), stylisedFont],$I$(1,1).c$$S$java_awt_Font));
beg=pos;
while (pos < len && p$1.isDigit$C.apply(this, [label.charAt$I(pos)]) )++pos;

while (pos < len && p$1.isLowerCase$C.apply(this, [label.charAt$I(pos)]) )++pos;

if (pos > beg) {
var outline=Clazz.new_([label.substring$I$I(beg, pos), stylisedFont],$I$(1,1).c$$S$java_awt_Font);
outline=outline.resize$D$D(this.scriptSize, this.scriptSize);
outline=this.positionSuperscript$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(outlines.get$I(0), outline);
outlines.add$O(outline);
}var numPrimes=0;
 PRIMES : while (pos < len){
switch ((label.charCodeAt$I(pos))) {
case 39:
++numPrimes;
break;
case 96:
++numPrimes;
break;
case 8216:
++numPrimes;
break;
case 8217:
++numPrimes;
break;
case 8219:
++numPrimes;
break;
case 8220:
numPrimes+=2;
break;
case 8221:
numPrimes+=2;
break;
case 8242:
++numPrimes;
break;
case 8243:
numPrimes+=2;
break;
case 8244:
numPrimes+=3;
break;
case 8279:
numPrimes+=4;
break;
case 8245:
++numPrimes;
break;
case 8246:
numPrimes+=2;
break;
case 8247:
numPrimes+=3;
break;
case 180:
++numPrimes;
break;
case 714:
++numPrimes;
break;
case 769:
++numPrimes;
break;
case 733:
numPrimes+=2;
break;
case 779:
numPrimes+=2;
break;
default:
break PRIMES;
}
++pos;
}
if (pos < len) {
return Clazz.new_([Clazz.new_($I$(1,1).c$$S$java_awt_Font,[label, stylisedFont]), $I$(7).emptyList$()],$I$(6,1).c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List);
} else {
var outline=null;
var ref=outlines.get$I(outlines.size$() - 1);
switch (numPrimes) {
case 0:
break;
case 1:
outline=Clazz.new_($I$(1,1).c$$S$java_awt_Font,["\u2032", this.font]);
break;
case 2:
outline=Clazz.new_($I$(1,1).c$$S$java_awt_Font,["\u2033", this.font]);
break;
case 3:
outline=Clazz.new_($I$(1,1).c$$S$java_awt_Font,["\u2034", this.font]);
break;
default:
var lab="";
while (numPrimes-- > 0)lab+="′";

outline=Clazz.new_($I$(1,1).c$$S$java_awt_Font,[lab, this.font]);
break;
}
if (outline != null ) {
if (outlines.size$() > 1) outline=outline.resize$D$D(this.scriptSize, this.scriptSize);
outline=this.positionSuperscript$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(ref, outline);
outlines.add$O(outline);
}}for (var i=1; i < outlines.size$(); i++) {
var ref=outlines.get$I(i - 1);
var curr=outlines.get$I(i);
outlines.set$I$O(i, this.positionAfter$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(ref, curr));
}
return Clazz.new_([outlines.get$I(0), outlines.subList$I$I(1, outlines.size$())],$I$(6,1).c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List);
} else {
return Clazz.new_([Clazz.new_($I$(1,1).c$$S$java_awt_Font,[label, stylisedFont]), $I$(7).emptyList$()],$I$(6,1).c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List);
}});

Clazz.newMeth(C$, 'isUpperCase$C',  function (c) {
return c >= "A" && c <= "Z" ;
}, p$1);

Clazz.newMeth(C$, 'isLowerCase$C',  function (c) {
return c >= "a" && c <= "z" ;
}, p$1);

Clazz.newMeth(C$, 'isDigit$C',  function (c) {
return c >= "0" && c <= "9" ;
}, p$1);

Clazz.newMeth(C$, 'generateAbbreviatedSymbol$S$org_openscience_cdk_renderer_generators_standard_HydrogenPosition',  function (label, position) {
var tokens=Clazz.new_($I$(5,1));
if ($I$(8).parse$S$java_util_List(label, tokens)) {
return this.generateAbbreviationSymbol$java_util_List$org_openscience_cdk_renderer_generators_standard_HydrogenPosition(tokens, position);
} else {
return Clazz.new_([Clazz.new_($I$(1,1).c$$S$java_awt_Font,[label, this.font]), $I$(7).emptyList$()],$I$(6,1).c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List);
}});

Clazz.newMeth(C$, 'generateAbbreviationSymbol$java_util_List$org_openscience_cdk_renderer_generators_standard_HydrogenPosition',  function (tokens, position) {
if (position === $I$(9).Left ) $I$(8).reverse$java_util_List(tokens);
var tmpRefPoint=Clazz.new_($I$(1,1).c$$S$java_awt_Font,["H", this.font]);
var fTexts=$I$(8).format$java_util_List(tokens);
var italicFont=this.font.deriveFont$I(2);
if (position === $I$(9).Below  || position === $I$(9).Above  ) $I$(8,"reduce$java_util_List$I$I",[fTexts, 1, fTexts.size$()]);
 else $I$(8,"reduce$java_util_List$I$I",[fTexts, 0, fTexts.size$()]);
var outlines=Clazz.new_([fTexts.size$()],$I$(5,1).c$$I);
for (var fText, $fText = fTexts.iterator$(); $fText.hasNext$()&&((fText=($fText.next$())),1);) {
var outline=fText.style == 2 ? Clazz.new_($I$(1,1).c$$S$java_awt_Font,[fText.text, italicFont]) : Clazz.new_($I$(1,1).c$$S$java_awt_Font,[fText.text, this.font]);
if (fText.style == -1) {
outline=outline.resize$D$D(this.scriptSize, this.scriptSize);
outline=this.positionSubscript$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(tmpRefPoint, outline);
} else if (fText.style == 1) {
outline=outline.resize$D$D(this.scriptSize, this.scriptSize);
outline=this.positionSuperscript$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(tmpRefPoint, outline);
}outlines.add$O(outline);
}
for (var i=1; i < outlines.size$(); i++) {
var ref=outlines.get$I(i - 1);
var curr=outlines.get$I(i);
if (fTexts.get$I(i).style == 1 && fTexts.get$I(i - 1).style == -1  && i > 1 ) {
ref=outlines.get$I(i - 2);
}outlines.set$I$O(i, this.positionAfter$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(ref, curr));
}
var index;
if (position === $I$(9).Left ) {
for (index=outlines.size$() - 1; index >= 0; index--) if ((fTexts.get$I(index).style & 1) == 0) break;

} else {
for (index=0; index < outlines.size$(); index++) if ((fTexts.get$I(index).style & 1) == 0) break;

}var primary=outlines.remove$I(index);
if (position === $I$(9).Below  || position === $I$(9).Above  ) {
var offsetX=primary.getBounds$().getX$() - outlines.get$I(0).getBounds$().getX$();
var offsetY=position === $I$(9).Below  ? this.padding + primary.getBounds$().getHeight$() : -primary.getBounds$().getHeight$() - this.padding;
for (var i=0; i < outlines.size$(); i++) {
outlines.set$I$O(i, outlines.get$I(i).translate$D$D(offsetX, offsetY));
}
}return Clazz.new_($I$(6,1).c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List,[primary, outlines]);
});

Clazz.newMeth(C$, 'generatePeriodicSymbol$I$I$I$I$I$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_RendererModel',  function (number, hydrogens, mass, charge, unpaired, position, opts) {
var myfont=this.font;
var label;
switch (number) {
case 0:
label="*";
myfont=this.font.deriveFont$I(1);
break;
case 1:
if (mass == 2 && (opts.get$Class(Clazz.getClass($I$(10)))).$c() ) {
label="D";
mass=0;
} else {
label=$I$(2).ofNumber$I(number).symbol$();
}break;
default:
label=$I$(2).ofNumber$I(number).symbol$();
break;
}
var element=Clazz.new_($I$(1,1).c$$S$java_awt_Font,[label, myfont]);
var hydrogenAdjunct=this.defaultHydrogenLabel;
var hydrogenCount=Clazz.new_([Integer.toString$I(hydrogens), this.font],$I$(1,1).c$$S$java_awt_Font).resize$D$D(this.scriptSize, this.scriptSize);
var chargeAdjunct=Clazz.new_([C$.chargeAdjunctText$I$I(charge, unpaired), this.font],$I$(1,1).c$$S$java_awt_Font).resize$D$D(this.scriptSize, this.scriptSize);
var massAdjunct=Clazz.new_([Integer.toString$I(mass), this.font],$I$(1,1).c$$S$java_awt_Font).resize$D$D(this.scriptSize, this.scriptSize);
hydrogenAdjunct=this.positionHydrogenLabel$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(position, element, hydrogenAdjunct);
hydrogenCount=this.positionSubscript$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(hydrogenAdjunct, hydrogenCount);
chargeAdjunct=this.positionChargeLabel$I$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(hydrogens, position, chargeAdjunct, element, hydrogenAdjunct);
massAdjunct=this.positionMassLabel$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline(massAdjunct, element);
if (position === $I$(9).Left ) {
var nudgeX=p$1.hydrogenXDodge$I$I$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline.apply(this, [hydrogens, mass, element, hydrogenAdjunct, hydrogenCount, massAdjunct]);
hydrogenAdjunct=hydrogenAdjunct.translate$D$D(nudgeX, 0);
hydrogenCount=hydrogenCount.translate$D$D(nudgeX, 0);
chargeAdjunct=chargeAdjunct.translate$D$D(nudgeX, 0);
}var adjuncts=Clazz.new_($I$(5,1).c$$I,[4]);
if (hydrogens > 0) adjuncts.add$O(hydrogenAdjunct);
if (hydrogens > 1) adjuncts.add$O(hydrogenCount);
if (charge != 0 || unpaired > 0 ) adjuncts.add$O(chargeAdjunct);
if (mass > 0) adjuncts.add$O(massAdjunct);
return Clazz.new_($I$(6,1).c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List,[element, adjuncts]);
});

Clazz.newMeth(C$, 'positionHydrogenLabel$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (position, element, hydrogen) {
var elementBounds=element.getBounds$();
var hydrogenBounds=hydrogen.getBounds$();
switch (position) {
case $I$(9).Above:
return hydrogen.translate$D$D(0, (elementBounds.getMinY$() - this.padding) - hydrogenBounds.getMaxY$());
case $I$(9).Right:
return hydrogen.translate$D$D((elementBounds.getMaxX$() + this.padding) - hydrogenBounds.getMinX$(), 0);
case $I$(9).Below:
return hydrogen.translate$D$D(0, (elementBounds.getMaxY$() + this.padding) - hydrogenBounds.getMinY$());
case $I$(9).Left:
return hydrogen.translate$D$D((elementBounds.getMinX$() - this.padding) - hydrogenBounds.getMaxX$(), 0);
}
return hydrogen;
});

Clazz.newMeth(C$, 'positionSubscript$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (label, subscript) {
var hydrogenBounds=label.getBounds$();
var hydrogenCountBounds=subscript.getBounds$();
subscript=subscript.translate$D$D((hydrogenBounds.getMaxX$() + this.padding) - hydrogenCountBounds.getMinX$(), (hydrogenBounds.getMaxY$() + (hydrogenCountBounds.getHeight$() / 2)) - hydrogenCountBounds.getMaxY$());
return subscript;
});

Clazz.newMeth(C$, 'positionSuperscript$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (label, superscript) {
var labelBounds=label.getBounds$();
var superscriptBounds=superscript.getBounds$();
superscript=superscript.translate$D$D((labelBounds.getMaxX$() + this.padding) - superscriptBounds.getMinX$(), (labelBounds.getMinY$() - (superscriptBounds.getHeight$() / 2)) - superscriptBounds.getMinY$());
return superscript;
});

Clazz.newMeth(C$, 'positionAfter$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (before, after) {
var fixedBounds=before.getBounds$();
var movableBounds=after.getBounds$();
after=after.translate$D$D((fixedBounds.getMaxX$() + this.padding) - movableBounds.getMinX$(), 0);
return after;
});

Clazz.newMeth(C$, 'positionChargeLabel$I$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (hydrogens, position, charge, element, hydrogen) {
var chargeBounds=charge.getBounds$();
var referenceBounds=element.getBounds$();
if (hydrogens > 0 && (position === $I$(9).Left  || position === $I$(9).Right  ) ) referenceBounds=hydrogen.getBounds$();
if (position === $I$(9).Left ) return charge.translate$D$D((referenceBounds.getMinX$() - this.padding) - chargeBounds.getMaxX$(), (referenceBounds.getMinY$() - (chargeBounds.getHeight$() / 2)) - chargeBounds.getMinY$());
 else return charge.translate$D$D((referenceBounds.getMaxX$() + this.padding) - chargeBounds.getMinX$(), (referenceBounds.getMinY$() - (chargeBounds.getHeight$() / 2)) - chargeBounds.getMinY$());
});

Clazz.newMeth(C$, 'positionMassLabel$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (massLabel, elementLabel) {
var elementBounds=elementLabel.getBounds$();
var massBounds=massLabel.getBounds$();
return massLabel.translate$D$D((elementBounds.getMinX$() - this.padding) - massBounds.getMaxX$(), (elementBounds.getMinY$() - (massBounds.getHeight$() / 2)) - massBounds.getMinY$());
});

Clazz.newMeth(C$, 'hydrogenXDodge$I$I$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (hydrogens, mass, elementLabel, hydrogenLabel, hydrogenCount, massLabel) {
if (mass < 0 && hydrogens > 1 ) {
return (elementLabel.getBounds$().getMinX$() - this.padding) - hydrogenCount.getBounds$().getMaxX$();
} else if (mass >= 0) {
if (hydrogens > 1) {
return (massLabel.getBounds$().getMinX$() + this.padding) - hydrogenCount.getBounds$().getMaxX$();
} else if (hydrogens > 0) {
return (massLabel.getBounds$().getMinX$() - this.padding) - hydrogenLabel.getBounds$().getMaxX$();
}}return 0;
}, p$1);

Clazz.newMeth(C$, 'isMajorIsotope$I$I',  function (number, mass) {
try {
var isotope=$I$(11).getInstance$().getMajorIsotope$I(number);
return isotope != null  && isotope.getMassNumber$().equals$O(Integer.valueOf$I(mass)) ;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'unboxSafely$Integer$I',  function (value, defaultValue) {
return value != null  ? (value).$c() : defaultValue;
}, 1);

Clazz.newMeth(C$, 'chargeAdjunctText$I$I',  function (charge, unpaired) {
var sb=Clazz.new_($I$(12,1));
if (unpaired == 1) {
if (charge != 0) {
sb.append$C("(").append$C("\u2022").append$C(")");
} else {
sb.append$C("\u2022");
}} else if (unpaired > 1) {
if (charge != 0) {
sb.append$C("(").append$I(unpaired).append$C("\u2022").append$C(")");
} else {
sb.append$I(unpaired).append$C("\u2022");
}}var sign=charge < 0 ? "\u2212" : "+";
var coefficient=Math.abs(charge);
if (coefficient > 1) sb.append$I(coefficient);
if (coefficient > 0) sb.append$C(sign);
return sb.toString();
}, 1);

Clazz.newMeth(C$, 'accessPseudoLabel$org_openscience_cdk_interfaces_IPseudoAtom$S',  function (atom, defaultLabel) {
var label=atom.getLabel$();
if (label != null  && !label.isEmpty$() ) return label;
return defaultLabel;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:26 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
