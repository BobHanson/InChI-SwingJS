(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),p$1={},I$=[[0,'java.util.HashMap',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.BondLength'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.SgroupBracketDepth'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.SgroupFontScale'],'org.openscience.cdk.sgroup.SgroupType','org.openscience.cdk.sgroup.SgroupKey','org.openscience.cdk.renderer.generators.standard.StandardGenerator','java.util.ArrayDeque','java.util.Collections','org.openscience.cdk.renderer.elements.ElementGroup','java.util.ArrayList','java.util.Comparator',['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.Highlighting'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.OuterGlowWidth'],'org.openscience.cdk.geometry.GeometryUtil','javax.vecmath.Point2d','org.openscience.cdk.renderer.generators.standard.HydrogenPosition',['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.HighlightStyle'],'org.openscience.cdk.renderer.elements.GeneralPath','org.openscience.cdk.renderer.elements.MarkedElement','org.openscience.cdk.renderer.generators.standard.TextOutline','java.util.Locale','javax.vecmath.Vector2d','org.openscience.cdk.renderer.generators.standard.VecmathUtil','org.openscience.cdk.renderer.elements.Bounds',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Margin'],['java.awt.geom.Path2D','.Double'],'java.awt.geom.Line2D']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StandardSgroupGenerator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.children=Clazz.new_($I$(1,1));
this.boundsMap=Clazz.new_($I$(1,1));
},1);

C$.$fields$=[['D',['stroke','scale','bracketDepth','labelScale'],'O',['font','java.awt.Font','foreground','java.awt.Color','atomGenerator','org.openscience.cdk.renderer.generators.standard.StandardAtomGenerator','parameters','org.openscience.cdk.renderer.RendererModel','children','java.util.Map','+boundsMap']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_renderer_RendererModel$org_openscience_cdk_renderer_generators_standard_StandardAtomGenerator$D$java_awt_Font$java_awt_Color',  function (parameters, atomGenerator, stroke, font, foreground) {
;C$.$init$.apply(this);
this.font=font;
this.scale=(parameters.get$Class(Clazz.getClass($I$(2)))).valueOf();
this.stroke=stroke;
var length=(parameters.get$Class(Clazz.getClass($I$(3)))).$c() / this.scale;
this.bracketDepth=(parameters.get$Class(Clazz.getClass($I$(4)))).$c() * length;
this.labelScale=(parameters.get$Class(Clazz.getClass($I$(5)))).valueOf();
this.foreground=foreground;
this.atomGenerator=atomGenerator;
this.parameters=parameters;
}, 1);

Clazz.newMeth(C$, 'generate$org_openscience_cdk_renderer_RendererModel$D$java_awt_Font$java_awt_Color$org_openscience_cdk_renderer_generators_standard_StandardAtomGenerator$org_openscience_cdk_renderer_generators_standard_AtomSymbolA$org_openscience_cdk_interfaces_IAtomContainer',  function (parameters, stroke, font, foreground, atomGenerator, symbols, container) {
return Clazz.new_(C$.c$$org_openscience_cdk_renderer_RendererModel$org_openscience_cdk_renderer_generators_standard_StandardAtomGenerator$D$java_awt_Font$java_awt_Color,[parameters, atomGenerator, stroke, font, foreground]).generateSgroups$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_generators_standard_AtomSymbolA(container, symbols);
}, 1);

Clazz.newMeth(C$, 'prepareDisplayShortcuts$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map',  function (container, symbolRemap) {
var sgroups=container.getProperty$O("cdk:CtabSgroups");
if (sgroups == null  || sgroups.isEmpty$() ) return;
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) {
if (sgroup.getType$() === $I$(6).CtabAbbreviation ) {
var expansion=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabExpansion);
if (expansion != null  && (expansion).$c() ) continue;
if (sgroup.getSubscript$() == null  || sgroup.getSubscript$().isEmpty$() ) continue;
if (C$.checkAbbreviationHighlight$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_sgroup_Sgroup(container, sgroup)) C$.contractAbbreviation$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map$org_openscience_cdk_sgroup_Sgroup(container, symbolRemap, sgroup);
} else if (sgroup.getType$() === $I$(6).CtabMultipleGroup ) {
C$.hideMultipleParts$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_sgroup_Sgroup(container, sgroup);
} else if (sgroup.getType$() === $I$(6).ExtMulticenter ) {
var atoms=sgroup.getAtoms$();
for (var bond, $bond = sgroup.getBonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var beg=bond.getBegin$();
var end=bond.getEnd$();
if (atoms.contains$O(beg)) {
$I$(8).hideFully$org_openscience_cdk_interfaces_IChemObject(beg);
} else {
$I$(8).hideFully$org_openscience_cdk_interfaces_IChemObject(end);
}}
}}
}, 1);

Clazz.newMeth(C$, 'checkAbbreviationHighlight$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_sgroup_Sgroup',  function (container, sgroup) {
Clazz.assert(C$, this, function(){return sgroup.getType$() === $I$(6).CtabAbbreviation });
var sgroupAtoms=sgroup.getAtoms$();
var atomHighlight=0;
var bondHighlight=0;
var numSgroupAtoms=sgroupAtoms.size$();
var numSgroupBonds=0;
var color;
var refcolor=null;
for (var atom, $atom = sgroupAtoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if ((color=atom.getProperty$O("stdgen.highlight.color")) != null ) {
++atomHighlight;
if (refcolor == null ) refcolor=color;
 else if (!color.equals$O(refcolor)) return false;
} else if (atomHighlight != 0) {
return false;
}}
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var beg=bond.getBegin$();
var end=bond.getEnd$();
if (sgroupAtoms.contains$O(beg) && sgroupAtoms.contains$O(end) ) {
++numSgroupBonds;
if ((color=bond.getProperty$O("stdgen.highlight.color")) != null ) {
++bondHighlight;
if (refcolor == null ) refcolor=color;
 else if (!color.equals$O(refcolor)) return false;
} else if (bondHighlight != 0) {
return false;
}}}
return atomHighlight + bondHighlight == 0 || (atomHighlight == numSgroupAtoms && bondHighlight == numSgroupBonds ) ;
}, 1);

Clazz.newMeth(C$, 'hideMultipleParts$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_sgroup_Sgroup',  function (container, sgroup) {
var crossing=sgroup.getBonds$();
var atoms=sgroup.getAtoms$();
var parentAtoms=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabParentAtomList);
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (parentAtoms.contains$O(bond.getBegin$()) && parentAtoms.contains$O(bond.getEnd$()) ) continue;
if (atoms.contains$O(bond.getBegin$()) || atoms.contains$O(bond.getEnd$()) ) $I$(8).hide$org_openscience_cdk_interfaces_IChemObject(bond);
}
for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (!parentAtoms.contains$O(atom)) $I$(8).hide$org_openscience_cdk_interfaces_IChemObject(atom);
}
for (var bond, $bond = crossing.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
$I$(8).unhide$org_openscience_cdk_interfaces_IChemObject(bond);
}
}, 1);

Clazz.newMeth(C$, 'contractAbbreviation$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map$org_openscience_cdk_sgroup_Sgroup',  function (container, symbolRemap, sgroup) {
var crossing=sgroup.getBonds$();
var atoms=sgroup.getAtoms$();
if (crossing.size$() > 1) {
var internal=null;
for (var bond, $bond = crossing.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var beg=bond.getBegin$();
var end=bond.getEnd$();
if (atoms.contains$O(beg)) {
if (internal != null  && !internal.equals$O(beg) ) return;
internal=beg;
} else if (atoms.contains$O(end)) {
if (internal != null  && !internal.equals$O(end) ) return;
internal=end;
}}
}for (var atom, $atom = atoms.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
$I$(8).hide$org_openscience_cdk_interfaces_IChemObject(atom);
}
for (var bond, $bond = container.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (atoms.contains$O(bond.getBegin$()) || atoms.contains$O(bond.getEnd$()) ) $I$(8).hide$org_openscience_cdk_interfaces_IChemObject(bond);
}
for (var bond, $bond = crossing.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
$I$(8).unhide$org_openscience_cdk_interfaces_IChemObject(bond);
var a1=bond.getBegin$();
var a2=bond.getEnd$();
$I$(8).unhide$org_openscience_cdk_interfaces_IChemObject(a1);
if (atoms.contains$O(a1)) symbolRemap.put$O$O(a1, sgroup.getSubscript$());
$I$(8).unhide$org_openscience_cdk_interfaces_IChemObject(a2);
if (atoms.contains$O(a2)) symbolRemap.put$O$O(a2, sgroup.getSubscript$());
}
}, 1);

Clazz.newMeth(C$, 'getTotalChildCount$java_util_Map$org_openscience_cdk_sgroup_Sgroup',  function (map, key) {
var count=0;
var deque=Clazz.new_([map.getOrDefault$O$O(key, $I$(10).emptyList$())],$I$(9,1).c$$java_util_Collection);
while (!deque.isEmpty$()){
var sgroup=deque.poll$();
deque.addAll$java_util_Collection(map.getOrDefault$O$O(sgroup, $I$(10).emptyList$()));
++count;
}
return count;
});

Clazz.newMeth(C$, 'generateSgroups$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_generators_standard_AtomSymbolA',  function (container, symbols) {
var result=Clazz.new_($I$(11,1));
var sgroups=container.getProperty$O("cdk:CtabSgroups");
if (sgroups == null  || sgroups.isEmpty$() ) return result;
var symbolMap=Clazz.new_($I$(1,1));
for (var i=0; i < symbols.length; i++) {
if (symbols[i] != null ) symbolMap.put$O$O(container.getAtom$I(i), symbols[i]);
}
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) {
for (var parent, $parent = sgroup.getParents$().iterator$(); $parent.hasNext$()&&((parent=($parent.next$())),1);) {
this.children.computeIfAbsent$O$java_util_function_Function(parent, (P$.StandardSgroupGenerator$lambda1$||(P$.StandardSgroupGenerator$lambda1$=(((P$.StandardSgroupGenerator$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StandardSgroupGenerator$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$org_openscience_cdk_sgroup_Sgroup','apply$O'],  function (k) { return (Clazz.new_($I$(12,1)));});
})()
), Clazz.new_(P$.StandardSgroupGenerator$lambda1.$init$,[this, null])))))).add$O(sgroup);
}
}
sgroups=Clazz.new_($I$(12,1).c$$java_util_Collection,[sgroups]);
sgroups.sort$java_util_Comparator($I$(13,"comparingInt$java_util_function_ToIntFunction",[((P$.StandardSgroupGenerator$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StandardSgroupGenerator$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, ['applyAsInt$org_openscience_cdk_sgroup_Sgroup','applyAsInt$O'],  function (o) { return (this.b$['org.openscience.cdk.renderer.generators.standard.StandardSgroupGenerator'].getTotalChildCount$java_util_Map$org_openscience_cdk_sgroup_Sgroup.apply(this.b$['org.openscience.cdk.renderer.generators.standard.StandardSgroupGenerator'], [this.b$['org.openscience.cdk.renderer.generators.standard.StandardSgroupGenerator'].children, o]));});
})()
), Clazz.new_(P$.StandardSgroupGenerator$lambda2.$init$,[this, null]))]));
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) {
switch (sgroup.getType$()) {
case $I$(6).CtabAbbreviation:
result.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generateAbbreviationSgroup$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_sgroup_Sgroup.apply(this, [container, sgroup]));
break;
case $I$(6).CtabMultipleGroup:
result.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generateMultipleSgroup$org_openscience_cdk_sgroup_Sgroup$java_util_Map.apply(this, [sgroup, symbolMap]));
break;
case $I$(6).CtabAnyPolymer:
case $I$(6).CtabMonomer:
case $I$(6).CtabCrossLink:
case $I$(6).CtabCopolymer:
case $I$(6).CtabStructureRepeatUnit:
case $I$(6).CtabMer:
case $I$(6).CtabGraft:
case $I$(6).CtabModified:
result.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generatePolymerSgroup$org_openscience_cdk_sgroup_Sgroup$java_util_Map.apply(this, [sgroup, symbolMap]));
break;
case $I$(6).CtabComponent:
case $I$(6).CtabMixture:
case $I$(6).CtabFormulation:
result.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generateMixtureSgroup$org_openscience_cdk_sgroup_Sgroup$java_util_List$java_util_Map.apply(this, [sgroup, sgroups, symbolMap]));
break;
case $I$(6).CtabGeneric:
result.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generatePolymerSgroup$org_openscience_cdk_sgroup_Sgroup$java_util_Map.apply(this, [sgroup, null]));
break;
}
}
return result;
});

Clazz.newMeth(C$, 'generateMultipleSgroup$org_openscience_cdk_sgroup_Sgroup$java_util_Map',  function (sgroup, symbolMap) {
var brackets=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabBracket);
if (brackets != null ) {
return p$1.generateSgroupBrackets$org_openscience_cdk_sgroup_Sgroup$java_util_List$java_util_Map$S$S.apply(this, [sgroup, brackets, symbolMap, sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabSubScript), null]);
} else {
return Clazz.new_($I$(11,1));
}}, p$1);

Clazz.newMeth(C$, 'generateAbbreviationSgroup$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_sgroup_Sgroup',  function (mol, sgroup) {
var label=sgroup.getSubscript$();
if (sgroup.getBonds$().size$() > 0 || label == null   || label.isEmpty$() ) {
return Clazz.new_($I$(11,1));
}if (!C$.checkAbbreviationHighlight$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_sgroup_Sgroup(mol, sgroup)) return Clazz.new_($I$(11,1));
var sgroupAtoms=sgroup.getAtoms$();
Clazz.assert(C$, this, function(){return !sgroupAtoms.isEmpty$()});
var highlight=sgroupAtoms.iterator$().next$().getProperty$O("stdgen.highlight.color");
var style=this.parameters.get$Class(Clazz.getClass($I$(14)));
var glowWidth=(this.parameters.get$Class(Clazz.getClass($I$(15)))).valueOf();
var labelLocation;
if (mol.getAtomCount$() == sgroup.getAtoms$().size$()) {
labelLocation=$I$(16).get2DCenter$Iterable(sgroupAtoms);
} else {
labelLocation=Clazz.new_($I$(17,1));
var sgrpCenter=$I$(16).get2DCenter$Iterable(sgroupAtoms);
var molCenter=$I$(16).get2DCenter$org_openscience_cdk_interfaces_IAtomContainer(mol);
var minMax=$I$(16).getMinMax$Iterable(sgroupAtoms);
var xDiff=sgrpCenter.x - molCenter.x;
var yDiff=sgrpCenter.y - molCenter.y;
if (xDiff > 0.1 ) {
labelLocation.x=minMax[0];
label="\u00b7" + label;
} else if (xDiff < -0.1 ) {
labelLocation.x=minMax[2];
label=label + "\u00b7";
} else {
labelLocation.x=sgrpCenter.x;
label="\u00b7" + label;
}if (yDiff > 0.1 ) labelLocation.y=minMax[1];
 else if (yDiff < -0.1 ) labelLocation.y=minMax[3];
 else labelLocation.y=sgrpCenter.y;
}var labelgroup=Clazz.new_($I$(11,1));
for (var outline, $outline = this.atomGenerator.generateAbbreviatedSymbol$S$org_openscience_cdk_renderer_generators_standard_HydrogenPosition(label, $I$(18).Right).center$D$D(labelLocation.x, labelLocation.y).resize$D$D(1 / this.scale, 1 / -this.scale).getOutlines$().iterator$(); $outline.hasNext$()&&((outline=($outline.next$())),1);) {
if (highlight != null  && style === $I$(19).Colored  ) {
labelgroup.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20).shapeOf$java_awt_Shape$java_awt_Color(outline, highlight));
} else {
labelgroup.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20).shapeOf$java_awt_Shape$java_awt_Color(outline, this.foreground));
}}
if (highlight != null  && style === $I$(19).OuterGlow  ) {
var group=Clazz.new_($I$(11,1));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(8).outerGlow$org_openscience_cdk_renderer_elements_IRenderingElement$java_awt_Color$D$D(labelgroup, highlight, glowWidth, this.stroke));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(labelgroup);
return group;
} else {
return $I$(21).markupAtom$org_openscience_cdk_renderer_elements_IRenderingElement$org_openscience_cdk_interfaces_IAtom(labelgroup, null);
}}, p$1);

Clazz.newMeth(C$, 'generatePolymerSgroup$org_openscience_cdk_sgroup_Sgroup$java_util_Map',  function (sgroup, symbolMap) {
var brackets=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabBracket);
if (brackets != null ) {
var type=sgroup.getType$();
var subscript=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabSubScript);
var connectivity=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabConnectivity);
switch (type) {
case $I$(6).CtabCopolymer:
subscript="co";
var subtype=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabSubType);
if ("RAN".equals$O(subtype)) subscript="ran";
 else if ("BLK".equals$O(subtype)) subscript="blk";
 else if ("ALT".equals$O(subtype)) subscript="alt";
break;
case $I$(6).CtabCrossLink:
subscript="xl";
break;
case $I$(6).CtabAnyPolymer:
subscript="any";
break;
case $I$(6).CtabGraft:
subscript="grf";
break;
case $I$(6).CtabMer:
subscript="mer";
break;
case $I$(6).CtabMonomer:
subscript="mon";
break;
case $I$(6).CtabModified:
subscript="mod";
break;
case $I$(6).CtabStructureRepeatUnit:
if (subscript == null ) subscript="n";
if (connectivity == null ) connectivity="eu";
break;
}
if ("ht".equals$O(connectivity) || sgroup.getAtoms$().size$() == 1 ) connectivity=null;
return p$1.generateSgroupBrackets$org_openscience_cdk_sgroup_Sgroup$java_util_List$java_util_Map$S$S.apply(this, [sgroup, brackets, symbolMap, subscript, connectivity]);
} else {
return Clazz.new_($I$(11,1));
}}, p$1);

Clazz.newMeth(C$, 'generateMixtureSgroup$org_openscience_cdk_sgroup_Sgroup$java_util_List$java_util_Map',  function (sgroup, sgroups, symbolMap) {
var brackets=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabBracket);
if (brackets != null ) {
var type=sgroup.getType$();
var subscript="?";
switch (type) {
case $I$(6).CtabComponent:
var compNum=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabComponentNumber);
if (compNum != null ) subscript="c" + compNum;
 else subscript="c";
break;
case $I$(6).CtabMixture:
subscript="mix";
break;
case $I$(6).CtabFormulation:
subscript="f";
break;
}
var superscript=null;
for (var child, $child = sgroups.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
if (child.getType$() === $I$(6).CtabData  && child.getParents$().contains$O(sgroup) ) {
var value=child.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).Data);
var units=child.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).DataFieldUnits);
if (value != null ) {
superscript=value;
if (units != null ) superscript+=units;
}break;
}}
return p$1.generateSgroupBrackets$org_openscience_cdk_sgroup_Sgroup$java_util_List$java_util_Map$S$S$S.apply(this, [sgroup, brackets, symbolMap, subscript, null, superscript]);
} else {
return Clazz.new_($I$(11,1));
}}, p$1);

Clazz.newMeth(C$, 'isDigit$C',  function (c) {
return c >= "0" && c <= "9" ;
}, 1);

Clazz.newMeth(C$, 'isUnsignedInt$S',  function (str) {
var pos=0;
if (str == null ) return false;
var len=str.length$();
while (pos < len)if (!C$.isDigit$C(str.charAt$I(pos++))) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'generateSgroupBrackets$org_openscience_cdk_sgroup_Sgroup$java_util_List$java_util_Map$S$S',  function (sgroup, brackets, symbols, subscriptSuffix, superscriptSuffix) {
return p$1.generateSgroupBrackets$org_openscience_cdk_sgroup_Sgroup$java_util_List$java_util_Map$S$S$S.apply(this, [sgroup, brackets, symbols, subscriptSuffix, superscriptSuffix, null]);
}, p$1);

Clazz.newMeth(C$, 'generateSgroupBrackets$org_openscience_cdk_sgroup_Sgroup$java_util_List$java_util_Map$S$S$S',  function (sgroup, brackets, symbols, subscriptSuffix, superscriptSuffix, superscriptPrefix) {
var style=sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabBracketStyle);
var round=style != null  && (style).$c() === 1  ;
var result=Clazz.new_($I$(11,1));
var atoms=sgroup.getType$() === $I$(6).CtabMultipleGroup  ? sgroup.getValue$org_openscience_cdk_sgroup_SgroupKey($I$(7).CtabParentAtomList) : sgroup.getAtoms$();
var crossingBonds=sgroup.getBonds$();
var pairs=crossingBonds.size$() == brackets.size$() ? C$.bracketBondPairs$java_util_Collection$java_util_Collection(brackets, crossingBonds) : $I$(10).emptyMap$();
if (atoms.size$() == 1 && (sgroup.getType$() === $I$(6).CtabStructureRepeatUnit  || sgroup.getType$() === $I$(6).CtabMultipleGroup  ) ) {
var atom=atoms.iterator$().next$();
if (C$.isUnsignedInt$S(subscriptSuffix) && crossingBonds.isEmpty$() && symbols.containsKey$O(atom)  ) {
var prefix=Clazz.new_($I$(22,1).c$$S$java_awt_Font,["\u00b7" + subscriptSuffix, this.font]).resize$D$D(1 / this.scale, 1 / -this.scale);
var prefixBounds=prefix.getLogicalBounds$();
var symbol=symbols.get$O(atom);
var bounds=symbol.getConvexHull$().outline$().getBounds2D$();
bounds.setRect$D$D$D$D(bounds.getMinX$() - 2 * this.stroke, bounds.getMinY$() - 2 * this.stroke, bounds.getWidth$() + 4 * this.stroke, bounds.getHeight$() + 4 * this.stroke);
prefix=prefix.translate$D$D(bounds.getMinX$() - prefixBounds.getMaxX$(), symbol.getAlignmentCenter$().getY$() - prefixBounds.getCenterY$());
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[prefix.getOutline$(), this.foreground]));
} else if (crossingBonds.size$() > 0) {
var scriptscale=this.labelScale;
var leftBracket=Clazz.new_(["(", this.font],$I$(22,1).c$$S$java_awt_Font).resize$D$D(1 / this.scale, 1 / -this.scale);
var rightBracket=Clazz.new_($I$(22,1).c$$S$java_awt_Font,[")", this.font]).resize$D$D(1 / this.scale, 1 / -this.scale);
var leftCenter=leftBracket.getCenter$();
var rightCenter=rightBracket.getCenter$();
if (symbols.containsKey$O(atom)) {
var symbol=symbols.get$O(atom);
var bounds=symbol.getConvexHull$().outline$().getBounds2D$();
bounds.setRect$D$D$D$D(bounds.getMinX$() - 2 * this.stroke, bounds.getMinY$() - 2 * this.stroke, bounds.getWidth$() + 4 * this.stroke, bounds.getHeight$() + 4 * this.stroke);
leftBracket=leftBracket.translate$D$D(bounds.getMinX$() - 0.1 - leftCenter.getX$() , symbol.getAlignmentCenter$().getY$() - leftCenter.getY$());
rightBracket=rightBracket.translate$D$D(bounds.getMaxX$() + 0.1 - rightCenter.getX$(), symbol.getAlignmentCenter$().getY$() - rightCenter.getY$());
} else {
var p=atoms.iterator$().next$().getPoint2d$();
leftBracket=leftBracket.translate$D$D(p.x - 0.2 - leftCenter.getX$() , p.y - leftCenter.getY$());
rightBracket=rightBracket.translate$D$D(p.x + 0.2 - rightCenter.getX$(), p.y - rightCenter.getY$());
}result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[leftBracket.getOutline$(), this.foreground]));
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[rightBracket.getOutline$(), this.foreground]));
var leftBracketBounds=leftBracket.getBounds$();
var rightBracketBounds=rightBracket.getBounds$();
if (subscriptSuffix != null  && !subscriptSuffix.isEmpty$() ) {
var subscriptOutline=p$1.leftAlign$org_openscience_cdk_renderer_generators_standard_TextOutline.apply(this, [p$1.makeText$S$javax_vecmath_Point2d$javax_vecmath_Vector2d$D.apply(this, [subscriptSuffix.toLowerCase$java_util_Locale($I$(23).ROOT), Clazz.new_([rightBracketBounds.getMaxX$(), rightBracketBounds.getMinY$() - 0.1],$I$(17,1).c$$D$D), Clazz.new_([-0.5 * rightBracketBounds.getWidth$(), 0],$I$(24,1).c$$D$D), scriptscale])]);
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[subscriptOutline.getOutline$(), this.foreground]));
}if (superscriptSuffix != null  && !superscriptSuffix.isEmpty$() ) {
var superscriptOutline=p$1.leftAlign$org_openscience_cdk_renderer_generators_standard_TextOutline.apply(this, [p$1.makeText$S$javax_vecmath_Point2d$javax_vecmath_Vector2d$D.apply(this, [superscriptSuffix.toLowerCase$java_util_Locale($I$(23).ROOT), Clazz.new_([rightBracketBounds.getMaxX$(), rightBracketBounds.getMaxY$() + 0.1],$I$(17,1).c$$D$D), Clazz.new_([-rightBracketBounds.getWidth$(), 0],$I$(24,1).c$$D$D), scriptscale])]);
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[superscriptOutline.getOutline$(), this.foreground]));
}if (superscriptPrefix != null  && !superscriptPrefix.isEmpty$() ) {
var superscriptOutline=p$1.rightAlign$org_openscience_cdk_renderer_generators_standard_TextOutline.apply(this, [p$1.makeText$S$javax_vecmath_Point2d$javax_vecmath_Vector2d$D.apply(this, [superscriptPrefix.toLowerCase$java_util_Locale($I$(23).ROOT), Clazz.new_([leftBracketBounds.getMaxX$(), leftBracketBounds.getMaxY$() + 0.1],$I$(17,1).c$$D$D), Clazz.new_([-leftBracketBounds.getWidth$(), 0],$I$(24,1).c$$D$D), scriptscale])]);
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[superscriptOutline.getOutline$(), this.foreground]));
}}} else if (!pairs.isEmpty$()) {
var suffixBracket=null;
var suffixBracketPerp=null;
for (var e, $e = pairs.entrySet$().iterator$(); $e.hasNext$()&&((e=($e.next$())),1);) {
var bracket=e.getKey$();
var bond=e.getValue$();
var inGroupAtom=atoms.contains$O(bond.getBegin$()) ? bond.getBegin$() : bond.getEnd$();
var p1=bracket.getFirstPoint$();
var p2=bracket.getSecondPoint$();
var perp=$I$(25,"newPerpendicularVector$javax_vecmath_Vector2d",[$I$(25).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(p1, p2)]);
var midpoint=$I$(25).midpoint$javax_vecmath_Point2d$javax_vecmath_Point2d(p1, p2);
if (perp.dot$javax_vecmath_Vector2d($I$(25,"newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[midpoint, inGroupAtom.getPoint2d$()])) < 0 ) {
perp.negate$();
}perp.scale$D(this.bracketDepth);
if (round) result.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.createRoundBracket$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Vector2d$javax_vecmath_Point2d.apply(this, [p1, p2, perp, midpoint]));
 else result.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.createSquareBracket$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Vector2d.apply(this, [p1, p2, perp]));
if (suffixBracket == null ) {
suffixBracket=bracket;
suffixBracketPerp=perp;
} else {
var sp1=suffixBracket.getFirstPoint$();
var sp2=suffixBracket.getSecondPoint$();
var bestMaxX=Math.max(sp1.x, sp2.x);
var thisMaxX=Math.max(p1.x, p2.x);
var bestMaxY=Math.max(sp1.y, sp2.y);
var thisMaxY=Math.max(p1.y, p2.y);
var xDiff=thisMaxX - bestMaxX;
var yDiff=thisMaxY - bestMaxY;
if (xDiff > 0.1  || (xDiff > -0.1  && yDiff < -0.1  ) ) {
suffixBracket=bracket;
suffixBracketPerp=perp;
}}}
if (suffixBracket != null ) {
var subSufPnt=suffixBracket.getFirstPoint$();
var supSufPnt=suffixBracket.getSecondPoint$();
var xDiff=subSufPnt.x - supSufPnt.x;
var yDiff=subSufPnt.y - supSufPnt.y;
if (yDiff > 0.1  || (yDiff > -0.1  && xDiff > 0.1  ) ) {
var tmpP=subSufPnt;
subSufPnt=supSufPnt;
supSufPnt=tmpP;
}if (subscriptSuffix != null  && !subscriptSuffix.isEmpty$() ) {
var subscriptOutline=p$1.leftAlign$org_openscience_cdk_renderer_generators_standard_TextOutline.apply(this, [p$1.makeText$S$javax_vecmath_Point2d$javax_vecmath_Vector2d$D.apply(this, [subscriptSuffix.toLowerCase$java_util_Locale($I$(23).ROOT), subSufPnt, suffixBracketPerp, this.labelScale])]);
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[subscriptOutline.getOutline$(), this.foreground]));
}if (superscriptSuffix != null  && !superscriptSuffix.isEmpty$() ) {
var superscriptOutline=p$1.leftAlign$org_openscience_cdk_renderer_generators_standard_TextOutline.apply(this, [p$1.makeText$S$javax_vecmath_Point2d$javax_vecmath_Vector2d$D.apply(this, [superscriptSuffix.toLowerCase$java_util_Locale($I$(23).ROOT), supSufPnt, suffixBracketPerp, this.labelScale])]);
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[superscriptOutline.getOutline$(), this.foreground]));
}}} else if (brackets.size$() == 2) {
var bounds=Clazz.new_($I$(26,1));
for (var atom, $atom = sgroup.getAtoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var atomSymbol=symbols.get$O(atom);
if (atomSymbol != null ) {
var hull=atomSymbol.getConvexHull$();
var bounds2D=hull.outline$().getBounds2D$();
bounds.add$D$D(bounds2D.getMinX$(), bounds2D.getMinY$());
bounds.add$D$D(bounds2D.getMaxX$(), bounds2D.getMaxY$());
} else {
bounds.add$D$D(atom.getPoint2d$().x, atom.getPoint2d$().y);
}}
for (var child, $child = this.children.getOrDefault$O$O(sgroup, $I$(10).emptyList$()).iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
var childBounds=this.boundsMap.get$O(child);
if (childBounds != null ) bounds.add$org_openscience_cdk_renderer_elements_Bounds(childBounds);
}
var b1p1;
var b1p2;
var b2p1;
var b2p2;
var margin=5 * ((this.parameters.get$Class(Clazz.getClass($I$(27)))).$c() / this.scale);
b1p1=Clazz.new_($I$(17,1).c$$D$D,[bounds.minX + margin, bounds.minY + margin]);
b1p2=Clazz.new_($I$(17,1).c$$D$D,[bounds.minX + margin, bounds.maxY - margin]);
b2p1=Clazz.new_($I$(17,1).c$$D$D,[bounds.maxX - margin, bounds.minY + margin]);
b2p2=Clazz.new_($I$(17,1).c$$D$D,[bounds.maxX - margin, bounds.maxY - margin]);
var b1vec=$I$(25).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(b1p1, b1p2);
var b2vec=$I$(25).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(b2p1, b2p2);
var b1pvec=$I$(25).newPerpendicularVector$javax_vecmath_Vector2d(b1vec);
var b2pvec=$I$(25).newPerpendicularVector$javax_vecmath_Vector2d(b2vec);
if (b1pvec.dot$javax_vecmath_Vector2d($I$(25).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(b1p1, b2p1)) < 0 ) b1pvec.negate$();
if (b2pvec.dot$javax_vecmath_Vector2d($I$(25).newUnitVector$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(b2p1, b1p1)) < 0 ) b2pvec.negate$();
b1pvec.scale$D(this.bracketDepth);
b2pvec.scale$D(this.bracketDepth);
if (Double.isNaN$D(b1pvec.x) || Double.isNaN$D(b1pvec.y) || Double.isNaN$D(b2pvec.x) || Double.isNaN$D(b2pvec.y)  ) return result;
var path=Clazz.new_($I$(28,1));
if (round) {
path.moveTo$D$D(b1p1.x + b1pvec.x, b1p1.y + b1pvec.y);
var cpb1=$I$(25).midpoint$javax_vecmath_Point2d$javax_vecmath_Point2d(b1p1, b1p2);
cpb1.add$javax_vecmath_Tuple2d($I$(25).negate$javax_vecmath_Tuple2d(b1pvec));
path.quadTo$D$D$D$D(cpb1.x, cpb1.y, b1p2.x + b1pvec.x, b1p2.y + b1pvec.y);
path.moveTo$D$D(b2p1.x + b2pvec.x, b2p1.y + b2pvec.y);
var cpb2=$I$(25).midpoint$javax_vecmath_Point2d$javax_vecmath_Point2d(b2p1, b2p2);
cpb2.add$javax_vecmath_Tuple2d($I$(25).negate$javax_vecmath_Tuple2d(b2pvec));
path.quadTo$D$D$D$D(cpb2.x, cpb2.y, b2p2.x + b2pvec.x, b2p2.y + b2pvec.y);
} else {
path.moveTo$D$D(b1p1.x + b1pvec.x, b1p1.y + b1pvec.y);
path.lineTo$D$D(b1p1.x, b1p1.y);
path.lineTo$D$D(b1p2.x, b1p2.y);
path.lineTo$D$D(b1p2.x + b1pvec.x, b1p2.y + b1pvec.y);
path.moveTo$D$D(b2p1.x + b2pvec.x, b2p1.y + b2pvec.y);
path.lineTo$D$D(b2p1.x, b2p1.y);
path.lineTo$D$D(b2p2.x, b2p2.y);
path.lineTo$D$D(b2p2.x + b2pvec.x, b2p2.y + b2pvec.y);
}result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20).outlineOf$java_awt_Shape$D$java_awt_Color(path, this.stroke, this.foreground));
var b1MaxX=Math.max(b1p1.x, b1p2.x);
var b2MaxX=Math.max(b2p1.x, b2p2.x);
var b1MaxY=Math.max(b1p1.y, b1p2.y);
var b2MaxY=Math.max(b2p1.y, b2p2.y);
var subSufPnt=b2p2;
var supSufPnt=b2p1;
var supPrefPnt=b1p2;
var subpvec=b2pvec;
var bXDiff=b1MaxX - b2MaxX;
var bYDiff=b1MaxY - b2MaxY;
if (bXDiff > 0.1  || (bXDiff > -0.1  && bYDiff < -0.1  ) ) {
subSufPnt=b1p2;
supSufPnt=b1p1;
subpvec=b1pvec;
}var xDiff=subSufPnt.x - supSufPnt.x;
var yDiff=subSufPnt.y - supSufPnt.y;
if (yDiff > 0.1  || (yDiff > -0.1  && xDiff > 0.1  ) ) {
var tmpP=subSufPnt;
subSufPnt=supSufPnt;
supSufPnt=tmpP;
}if (subscriptSuffix != null  && !subscriptSuffix.isEmpty$() ) {
var subscriptOutline=p$1.leftAlign$org_openscience_cdk_renderer_generators_standard_TextOutline.apply(this, [p$1.makeText$S$javax_vecmath_Point2d$javax_vecmath_Vector2d$D.apply(this, [subscriptSuffix.toLowerCase$java_util_Locale($I$(23).ROOT), subSufPnt, subpvec, this.labelScale])]);
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[subscriptOutline.getOutline$(), this.foreground]));
}if (superscriptSuffix != null  && !superscriptSuffix.isEmpty$() ) {
var superscriptOutline=p$1.leftAlign$org_openscience_cdk_renderer_generators_standard_TextOutline.apply(this, [p$1.makeText$S$javax_vecmath_Point2d$javax_vecmath_Vector2d$D.apply(this, [superscriptSuffix.toLowerCase$java_util_Locale($I$(23).ROOT), supSufPnt, subpvec, this.labelScale])]);
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[superscriptOutline.getOutline$(), this.foreground]));
}if (superscriptPrefix != null  && !superscriptPrefix.isEmpty$() ) {
subpvec.negate$();
var superscriptOutline=p$1.rightAlign$org_openscience_cdk_renderer_generators_standard_TextOutline.apply(this, [p$1.makeText$S$javax_vecmath_Point2d$javax_vecmath_Vector2d$D.apply(this, [superscriptPrefix.toLowerCase$java_util_Locale($I$(23).ROOT), supPrefPnt, subpvec, this.labelScale])]);
result.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(20,"shapeOf$java_awt_Shape$java_awt_Color",[superscriptOutline.getOutline$(), this.foreground]));
}}var bounds=Clazz.new_($I$(26,1));
bounds.add$org_openscience_cdk_renderer_elements_IRenderingElement(result);
this.boundsMap.put$O$O(sgroup, bounds);
return result;
}, p$1);

Clazz.newMeth(C$, 'createRoundBracket$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Vector2d$javax_vecmath_Point2d',  function (p1, p2, perp, midpoint) {
var path=Clazz.new_($I$(28,1));
path.moveTo$D$D(p1.x + perp.x, p1.y + perp.y);
var cpb1=Clazz.new_($I$(17,1).c$$javax_vecmath_Point2d,[midpoint]);
cpb1.add$javax_vecmath_Tuple2d($I$(25).negate$javax_vecmath_Tuple2d(perp));
path.quadTo$D$D$D$D(cpb1.x, cpb1.y, p2.x + perp.x, p2.y + perp.y);
return $I$(20).outlineOf$java_awt_Shape$D$java_awt_Color(path, this.stroke, this.foreground);
}, p$1);

Clazz.newMeth(C$, 'createSquareBracket$javax_vecmath_Point2d$javax_vecmath_Point2d$javax_vecmath_Vector2d',  function (p1, p2, perp) {
var path=Clazz.new_($I$(28,1));
path.moveTo$D$D(p1.x + perp.x, p1.y + perp.y);
path.lineTo$D$D(p1.x, p1.y);
path.lineTo$D$D(p2.x, p2.y);
path.lineTo$D$D(p2.x + perp.x, p2.y + perp.y);
return $I$(20).outlineOf$java_awt_Shape$D$java_awt_Color(path, this.stroke, this.foreground);
}, p$1);

Clazz.newMeth(C$, 'bracketBondPairs$java_util_Collection$java_util_Collection',  function (brackets, bonds) {
var pairs=Clazz.new_($I$(1,1));
for (var bracket, $bracket = brackets.iterator$(); $bracket.hasNext$()&&((bracket=($bracket.next$())),1);) {
var crossingBond=null;
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var a1=bond.getBegin$();
var a2=bond.getEnd$();
if ($I$(29,"linesIntersect$D$D$D$D$D$D$D$D",[bracket.getFirstPoint$().x, bracket.getFirstPoint$().y, bracket.getSecondPoint$().x, bracket.getSecondPoint$().y, a1.getPoint2d$().x, a1.getPoint2d$().y, a2.getPoint2d$().x, a2.getPoint2d$().y])) {
if (crossingBond != null ) return Clazz.new_($I$(1,1));
crossingBond=bond;
}}
if (crossingBond == null ) return Clazz.new_($I$(1,1));
pairs.put$O$O(bracket, crossingBond);
}
return pairs;
}, 1);

Clazz.newMeth(C$, 'makeText$S$javax_vecmath_Point2d$javax_vecmath_Vector2d$D',  function (subscriptSuffix, b1p2, b1pvec, labelScale) {
return $I$(8,"generateAnnotation$javax_vecmath_Point2d$S$javax_vecmath_Vector2d$D$D$java_awt_Font$org_openscience_cdk_renderer_generators_standard_AtomSymbol",[b1p2, subscriptSuffix, $I$(25).negate$javax_vecmath_Tuple2d(b1pvec), 1, labelScale, this.font, null]).resize$D$D(1 / this.scale, 1 / this.scale);
}, p$1);

Clazz.newMeth(C$, 'leftAlign$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (outline) {
var center=outline.getCenter$();
var first=outline.getFirstGlyphCenter$();
return outline.translate$D$D(center.getX$() - first.getX$(), center.getY$() - first.getY$());
}, p$1);

Clazz.newMeth(C$, 'rightAlign$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (outline) {
var center=outline.getCenter$();
var last=outline.getLastGlyphCenter$();
return outline.translate$D$D(center.getX$() - last.getX$(), center.getY$() - last.getY$());
}, p$1);

C$.$static$=function(){C$.$static$=0;
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:28 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
