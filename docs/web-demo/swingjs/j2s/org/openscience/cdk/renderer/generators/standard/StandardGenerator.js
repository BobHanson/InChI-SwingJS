(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),p$1={},I$=[[0,'org.openscience.cdk.renderer.color.UniColor','java.awt.Color','org.openscience.cdk.renderer.generators.standard.SelectionVisibility','org.openscience.cdk.renderer.SymbolVisibility',['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.HighlightStyle'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.AtomColor'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.Visibility'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.StrokeRatio'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.BondSeparation'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.WedgeRatio'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.SymbolMarginRatio'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.HashSpacing'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.DashSection'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.WaveSpacing'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.FancyBoldWedges'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.FancyHashedWedges'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.Highlighting'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.OuterGlowWidth'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.AnnotationColor'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.AnnotationDistance'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.AnnotationFontScale'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.SgroupBracketDepth'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.SgroupFontScale'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.OmitMajorIsotopes'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.ForceDelocalisedBondDisplay'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.DelocalisedDonutsBondDisplay'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.DeuteriumSymbol'],['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.PseudoFontStyle'],'org.openscience.cdk.renderer.generators.standard.StandardAtomGenerator','org.openscience.cdk.renderer.elements.ElementGroup','java.util.HashMap','org.openscience.cdk.renderer.generators.standard.StandardSgroupGenerator',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],'org.openscience.cdk.interfaces.IAtom','org.openscience.cdk.renderer.generators.standard.TextOutline','org.openscience.cdk.renderer.generators.standard.StandardDonutGenerator','org.openscience.cdk.renderer.generators.standard.StandardBondGenerator','org.openscience.cdk.renderer.elements.MarkedElement','org.openscience.cdk.renderer.elements.OvalElement','org.openscience.cdk.renderer.elements.GeneralPath','org.openscience.cdk.renderer.elements.Bounds',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.BondLength'],'org.openscience.cdk.renderer.generators.standard.AtomSymbol','java.util.ArrayList',['org.openscience.cdk.renderer.generators.standard.StandardGenerator','.Alignment'],'org.openscience.cdk.renderer.generators.standard.HydrogenPosition',['org.openscience.cdk.renderer.generators.standard.AtomSymbol','.SymbolAlignment'],['java.awt.geom.Ellipse2D','.Double'],'java.awt.geom.Area','org.openscience.cdk.sgroup.SgroupType','org.openscience.cdk.renderer.generators.standard.VecmathUtil','javax.vecmath.Vector2d','javax.vecmath.Point2d','java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter',['org.openscience.cdk.renderer.RendererModel','.SelectionColor'],'org.openscience.cdk.renderer.elements.LineElement',['org.openscience.cdk.interfaces.IBond','.Order'],['org.openscience.cdk.interfaces.IBond','.Stereo']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "StandardGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.openscience.cdk.renderer.generators.IGenerator');
C$.$classes$=[['Alignment',25],['HighlightStyle',25],['AtomColor',25],['Visibility',25],['StrokeRatio',25],['BondSeparation',25],['SymbolMarginRatio',25],['WedgeRatio',25],['HashSpacing',25],['WaveSpacing',25],['DashSection',25],['FancyBoldWedges',25],['FancyHashedWedges',25],['OuterGlowWidth',25],['Highlighting',25],['AnnotationColor',25],['AnnotationDistance',25],['AnnotationFontScale',25],['SgroupBracketDepth',25],['SgroupFontScale',25],['OmitMajorIsotopes',25],['ForceDelocalisedBondDisplay',25],['DelocalisedDonutsBondDisplay',25],['DeuteriumSymbol',25],['PseudoFontStyle',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomColor=Clazz.new_($I$(6,1));
this.visibility=Clazz.new_($I$(7,1));
this.strokeRatio=Clazz.new_($I$(8,1));
this.separationRatio=Clazz.new_($I$(9,1));
this.wedgeRatio=Clazz.new_($I$(10,1));
this.marginRatio=Clazz.new_($I$(11,1));
this.hatchSections=Clazz.new_($I$(12,1));
this.dashSections=Clazz.new_($I$(13,1));
this.waveSections=Clazz.new_($I$(14,1));
this.fancyBoldWedges=Clazz.new_($I$(15,1));
this.fancyHashedWedges=Clazz.new_($I$(16,1));
this.highlighting=Clazz.new_($I$(17,1));
this.glowWidth=Clazz.new_($I$(18,1));
this.annCol=Clazz.new_($I$(19,1));
this.annDist=Clazz.new_($I$(20,1));
this.annFontSize=Clazz.new_($I$(21,1));
this.sgroupBracketDepth=Clazz.new_($I$(22,1));
this.sgroupFontScale=Clazz.new_($I$(23,1));
this.omitMajorIsotopes=Clazz.new_($I$(24,1));
this.forceDelocalised=Clazz.new_($I$(25,1));
this.delocaliseDonuts=Clazz.new_($I$(26,1));
this.deuteriumSymbol=Clazz.new_($I$(27,1));
this.pseudoFontStyle=Clazz.new_($I$(28,1));
},1);

C$.$fields$=[['O',['font','java.awt.Font','atomGenerator','org.openscience.cdk.renderer.generators.standard.StandardAtomGenerator','atomColor','org.openscience.cdk.renderer.generators.IGeneratorParameter','+visibility','+strokeRatio','+separationRatio','+wedgeRatio','+marginRatio','+hatchSections','+dashSections','+waveSections','+fancyBoldWedges','+fancyHashedWedges','+highlighting','+glowWidth','+annCol','+annDist','+annFontSize','+sgroupBracketDepth','+sgroupFontScale','+omitMajorIsotopes','+forceDelocalised','+delocaliseDonuts','+deuteriumSymbol','+pseudoFontStyle']]]

Clazz.newMeth(C$, 'c$$java_awt_Font',  function (font) {
;C$.$init$.apply(this);
this.font=font;
this.atomGenerator=Clazz.new_($I$(29,1).c$$java_awt_Font,[font]);
}, 1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (container, parameters) {
if (container.getAtomCount$() == 0) return Clazz.new_($I$(30,1));
var symbolRemap=Clazz.new_($I$(31,1));
$I$(32).prepareDisplayShortcuts$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map(container, symbolRemap);
var scale=(parameters.get$Class(Clazz.getClass($I$(33)))).valueOf();
var visibility=parameters.get$Class(Clazz.getClass($I$(7)));
var coloring=parameters.get$Class(Clazz.getClass($I$(6)));
var annotationColor=parameters.get$Class(Clazz.getClass($I$(19)));
var foreground=coloring.getAtomColor$org_openscience_cdk_interfaces_IAtom(container.getBuilder$().newInstance$Class$OA(Clazz.getClass($I$(34),['bonds$','clone$','getBond$org_openscience_cdk_interfaces_IAtom','getBondCount$','getCharge$','getContainer$','getFractionalPoint3d$','getImplicitHydrogenCount$','getIndex$','getMapIdx$','getPoint2d$','getPoint3d$','getStereoParity$','getTotalHydrogenCount$','isAromatic$','isInRing$','neighbors$','setCharge$Double','setFractionalPoint3d$javax_vecmath_Point3d','setImplicitHydrogenCount$Integer','setIsAromatic$Z','setIsInRing$Z','setMapIdx$I','setPoint2d$javax_vecmath_Point2d','setPoint3d$javax_vecmath_Point3d','setStereoParity$Integer']), Clazz.array(java.lang.Object, -1, ["C"])));
var fontStroke=Clazz.new_($I$(35,1).c$$S$java_awt_Font,["|", this.font]).resize$D$D(1 / scale, 1 / scale).getBounds$().getWidth$();
var stroke=(parameters.get$Class(Clazz.getClass($I$(8)))).$c() * fontStroke;
var annotations=Clazz.new_($I$(30,1));
var donutGenerator;
donutGenerator=Clazz.new_($I$(36,1).c$$org_openscience_cdk_interfaces_IAtomContainer$java_awt_Font$org_openscience_cdk_renderer_RendererModel$D,[container, this.font, parameters, stroke]);
var donuts=donutGenerator.generate$();
var enantiomerText=p$1.determineEnantiomerText$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [container]);
if (enantiomerText == null ) {
p$1.addStereoGroupAnnotations$org_openscience_cdk_interfaces_IAtomContainer.apply(this, [container]);
}var symbols=p$1.generateAtomSymbols$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map$org_openscience_cdk_renderer_SymbolVisibility$org_openscience_cdk_renderer_RendererModel$org_openscience_cdk_renderer_elements_ElementGroup$java_awt_Color$D$org_openscience_cdk_renderer_generators_standard_StandardDonutGenerator.apply(this, [container, symbolRemap, visibility, parameters, annotations, foreground, stroke, donutGenerator]);
var bondElements;
bondElements=$I$(37).generateBonds$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_generators_standard_AtomSymbolA$org_openscience_cdk_renderer_RendererModel$D$java_awt_Font$org_openscience_cdk_renderer_elements_ElementGroup$org_openscience_cdk_renderer_generators_standard_StandardDonutGenerator(container, symbols, parameters, stroke, this.font, annotations, donutGenerator);
var style=parameters.get$Class(Clazz.getClass($I$(17)));
var glowWidth=(parameters.get$Class(Clazz.getClass($I$(18)))).valueOf();
var backLayer=Clazz.new_($I$(30,1));
var middleLayer=Clazz.new_($I$(30,1));
var frontLayer=Clazz.new_($I$(30,1));
for (var i=0; i < container.getBondCount$(); i++) {
var bond=container.getBond$I(i);
if (C$.isHidden$org_openscience_cdk_interfaces_IChemObject(bond)) continue;
var highlight=p$1.getHighlightColor$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel.apply(this, [bond, parameters]);
if (highlight != null  && (style === $I$(5).OuterGlow  || style === $I$(5).OuterGlowWhiteEdge  ) ) {
backLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(38,"markup$org_openscience_cdk_renderer_elements_IRenderingElement$SA",[C$.outerGlow$org_openscience_cdk_renderer_elements_IRenderingElement$java_awt_Color$D$D(bondElements[i], highlight, glowWidth, stroke), Clazz.array(String, -1, ["outerglow"])]));
}if (highlight != null  && style === $I$(5).Colored  ) {
frontLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(38,"markupBond$org_openscience_cdk_renderer_elements_IRenderingElement$org_openscience_cdk_interfaces_IBond",[C$.recolor$org_openscience_cdk_renderer_elements_IRenderingElement$java_awt_Color(bondElements[i], highlight), bond]));
} else {
middleLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(38).markupBond$org_openscience_cdk_renderer_elements_IRenderingElement$org_openscience_cdk_interfaces_IBond(bondElements[i], bond));
}}
frontLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement(donuts);
for (var i=0; i < container.getAtomCount$(); i++) {
var atom=container.getAtom$I(i);
if (C$.isHidden$org_openscience_cdk_interfaces_IChemObject(atom)) continue;
var highlight=p$1.getHighlightColor$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel.apply(this, [atom, parameters]);
var color=p$1.getColorOfAtom$java_util_Map$org_openscience_cdk_renderer_color_IAtomColorer$java_awt_Color$org_openscience_cdk_renderer_generators_standard_StandardGenerator_HighlightStyle$org_openscience_cdk_interfaces_IAtom$java_awt_Color.apply(this, [symbolRemap, coloring, foreground, style, atom, highlight]);
if (symbols[i] == null ) {
if (highlight != null  && (style === $I$(5).OuterGlow  || style === $I$(5).OuterGlowWhiteEdge  ) ) {
var glowWidthExt=glowWidth;
if (style === $I$(5).OuterGlowWhiteEdge  && highlight.equals$O($I$(2).WHITE) ) {
glowWidthExt*=1.75;
}backLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(38,"markup$org_openscience_cdk_renderer_elements_IRenderingElement$SA",[Clazz.new_([atom.getPoint2d$().x, atom.getPoint2d$().y, 1.75 * glowWidthExt * stroke , true, highlight],$I$(39,1).c$$D$D$D$Z$java_awt_Color), Clazz.array(String, -1, ["outerglow"])]));
}continue;
}var symbolElements=Clazz.new_($I$(30,1));
for (var shape, $shape = symbols[i].getOutlines$().iterator$(); $shape.hasNext$()&&((shape=($shape.next$())),1);) {
var path=$I$(40).shapeOf$java_awt_Shape$java_awt_Color(shape, color);
symbolElements.add$org_openscience_cdk_renderer_elements_IRenderingElement(path);
}
for (var shape, $shape = symbols[i].getAnnotationOutlines$().iterator$(); $shape.hasNext$()&&((shape=($shape.next$())),1);) {
annotations.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(38,"markup$org_openscience_cdk_renderer_elements_IRenderingElement$SA",[$I$(40).shapeOf$java_awt_Shape$java_awt_Color(shape, annotationColor), Clazz.array(String, -1, ["annotation"])]));
}
if (highlight != null  && (style === $I$(5).OuterGlow  || style === $I$(5).OuterGlowWhiteEdge  ) ) {
var glowWidthExt=glowWidth;
if (style === $I$(5).OuterGlowWhiteEdge  && highlight.equals$O($I$(2).WHITE) ) {
glowWidthExt*=1.75;
}backLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(38,"markup$org_openscience_cdk_renderer_elements_IRenderingElement$SA",[C$.outerGlow$org_openscience_cdk_renderer_elements_IRenderingElement$java_awt_Color$D$D(symbolElements, highlight, glowWidthExt, stroke), Clazz.array(String, -1, ["outerglow"])]));
}if (highlight != null  && style === $I$(5).Colored  ) {
frontLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(38).markupAtom$org_openscience_cdk_renderer_elements_IRenderingElement$org_openscience_cdk_interfaces_IAtom(symbolElements, atom));
} else {
middleLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(38).markupAtom$org_openscience_cdk_renderer_elements_IRenderingElement$org_openscience_cdk_interfaces_IAtom(symbolElements, atom));
}}
if (style === $I$(5).OuterGlowWhiteEdge ) {
for (var i=0; i < container.getAtomCount$(); i++) {
var atom=container.getAtom$I(i);
if (C$.isHidden$org_openscience_cdk_interfaces_IChemObject(atom)) continue;
var highlight=p$1.getHighlightColor$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel.apply(this, [atom, parameters]);
var color=highlight != null  ? highlight : coloring.getAtomColor$org_openscience_cdk_interfaces_IAtom(atom);
if (symbols[i] == null ) {
continue;
}var symbolElements=Clazz.new_($I$(30,1));
for (var shape, $shape = symbols[i].getOutlines$().iterator$(); $shape.hasNext$()&&((shape=($shape.next$())),1);) {
var path=$I$(40).shapeOf$java_awt_Shape$java_awt_Color(shape, color);
symbolElements.add$org_openscience_cdk_renderer_elements_IRenderingElement(path);
}
if (highlight != null  && !highlight.equals$O($I$(2).WHITE) ) {
backLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(38,"markup$org_openscience_cdk_renderer_elements_IRenderingElement$SA",[C$.outerGlow$org_openscience_cdk_renderer_elements_IRenderingElement$java_awt_Color$D$D(symbolElements, $I$(2).WHITE, 10 * stroke, stroke), Clazz.array(String, -1, ["outerglow"])]));
}}
}var sgroups=$I$(32).generate$org_openscience_cdk_renderer_RendererModel$D$java_awt_Font$java_awt_Color$org_openscience_cdk_renderer_generators_standard_StandardAtomGenerator$org_openscience_cdk_renderer_generators_standard_AtomSymbolA$org_openscience_cdk_interfaces_IAtomContainer(parameters, stroke, this.font, foreground, this.atomGenerator, symbols, container);
frontLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement(sgroups);
frontLayer.add$org_openscience_cdk_renderer_elements_IRenderingElement(annotations);
var group=Clazz.new_($I$(30,1));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(backLayer);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(middleLayer);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(frontLayer);
var bounds=Clazz.new_($I$(41,1));
bounds.add$org_openscience_cdk_renderer_elements_IRenderingElement(group);
if (enantiomerText != null ) {
var chiralInfo=Clazz.new_($I$(35,1).c$$S$java_awt_Font,[enantiomerText, this.font]).resize$D$D(1 / scale, -1 / scale);
if (chiralInfo.getBounds$().getWidth$() > bounds.width$() ) {
var centerY=(bounds.minY + bounds.maxY) / 2;
chiralInfo=chiralInfo.translate$D$D(bounds.maxX - (chiralInfo.getBounds$().getMinX$() - (10 * stroke)), centerY - (chiralInfo.getBounds$().getCenterY$()));
} else {
chiralInfo=chiralInfo.translate$D$D(bounds.maxX - ((chiralInfo.getBounds$().getMaxX$() + chiralInfo.getCenter$().getX$()) / 2), bounds.minY - (chiralInfo.getBounds$().getMaxY$() + (5 * stroke)));
}group.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(40,"shapeOf$java_awt_Shape$java_awt_Color",[chiralInfo.getOutline$(), foreground]));
}return $I$(38).markupMol$org_openscience_cdk_renderer_elements_IRenderingElement$org_openscience_cdk_interfaces_IAtomContainer(group, container);
});

Clazz.newMeth(C$, 'addStereoGroupAnnotations$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
for (var se, $se = container.stereoElements$().iterator$(); $se.hasNext$()&&((se=($se.next$())),1);) {
if (se.getConfigClass$() == 16896) {
var groupInfo=se.getGroupInfo$();
if (groupInfo != 0) {
var label=null;
switch ((groupInfo & 196608)) {
case 65536:
label="&";
break;
case 131072:
label="or";
break;
case 0:
continue;
}
label+=Integer.toString$I(groupInfo >> 18);
var focus=se.getFocus$();
var annotation=focus.getProperty$O("stdgen.annotation.label");
if (annotation == null ) annotation=label;
 else annotation+=";" + label;
focus.setProperty$O$O("stdgen.annotation.label", annotation);
}}}
}, p$1);

Clazz.newMeth(C$, 'determineEnantiomerText$org_openscience_cdk_interfaces_IAtomContainer',  function (container) {
var ref_grp=0;
for (var elem, $elem = container.stereoElements$().iterator$(); $elem.hasNext$()&&((elem=($elem.next$())),1);) {
if (elem.getConfigClass$() == 16896) {
if (elem.getGroupInfo$() == 0) return null;
if (ref_grp == 0) ref_grp=elem.getGroupInfo$();
 else if (ref_grp != elem.getGroupInfo$()) return null;
}}
switch ((ref_grp & 196608)) {
case 65536:
return "and enantiomer";
case 131072:
return "or enantiomer";
}
return null;
}, p$1);

Clazz.newMeth(C$, 'getColorOfAtom$java_util_Map$org_openscience_cdk_renderer_color_IAtomColorer$java_awt_Color$org_openscience_cdk_renderer_generators_standard_StandardGenerator_HighlightStyle$org_openscience_cdk_interfaces_IAtom$java_awt_Color',  function (symbolRemap, coloring, foreground, style, atom, highlight) {
if (highlight != null  && style === $I$(5).Colored  ) return highlight;
if (symbolRemap.containsKey$O(atom)) return foreground;
return coloring.getAtomColor$org_openscience_cdk_interfaces_IAtom(atom);
}, p$1);

Clazz.newMeth(C$, 'generateAtomSymbols$org_openscience_cdk_interfaces_IAtomContainer$java_util_Map$org_openscience_cdk_renderer_SymbolVisibility$org_openscience_cdk_renderer_RendererModel$org_openscience_cdk_renderer_elements_ElementGroup$java_awt_Color$D$org_openscience_cdk_renderer_generators_standard_StandardDonutGenerator',  function (container, symbolRemap, visibility, parameters, annotations, foreground, stroke, donutGen) {
var scale=(parameters.get$Class(Clazz.getClass($I$(33)))).valueOf();
var annDist=(parameters.get$Class(Clazz.getClass($I$(20)))).$c() * ((parameters.get$Class(Clazz.getClass($I$(42)))).$c() / scale);
var annScale=(1 / scale) * (parameters.get$Class(Clazz.getClass($I$(21)))).$c();
var annColor=parameters.get$Class(Clazz.getClass($I$(19)));
var halfStroke=stroke / 2;
var symbols=Clazz.array($I$(43), [container.getAtomCount$()]);
var builder=container.getBuilder$();
var attachPoints=Clazz.new_($I$(44,1));
var maxAttach=0;
for (var i=0; i < container.getAtomCount$(); i++) {
var atom=container.getAtom$I(i);
if (C$.isHiddenFully$org_openscience_cdk_interfaces_IChemObject(atom)) continue;
if (Clazz.instanceOf(atom, "org.openscience.cdk.interfaces.IPseudoAtom")) {
var attachNum=(atom).getAttachPointNum$();
if (attachNum > 0) attachPoints.add$O(atom);
if (attachNum > maxAttach) maxAttach=attachNum;
}var remapped=symbolRemap.containsKey$O(atom);
var bonds=container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom);
var neighbors=container.getConnectedAtomsList$org_openscience_cdk_interfaces_IAtom(atom);
var visNeighbors=Clazz.new_($I$(44,1));
for (var neighbor, $neighbor = neighbors.iterator$(); $neighbor.hasNext$()&&((neighbor=($neighbor.next$())),1);) {
if (!remapped || !C$.isHidden$org_openscience_cdk_interfaces_IChemObject(neighbor) ) visNeighbors.add$O(neighbor);
}
var auxVectors=Clazz.new_($I$(44,1).c$$I,[1]);
if (visibility.visible$org_openscience_cdk_interfaces_IAtom$java_util_List$org_openscience_cdk_renderer_RendererModel(atom, bonds, parameters) || remapped ) {
var hPosition;
var align=atom.getProperty$O("stdgen.label.alignment");
if (align === $I$(45).Left ) hPosition=$I$(46).Right;
 else if (align === $I$(45).Right ) hPosition=$I$(46).Left;
 else hPosition=$I$(46).position$org_openscience_cdk_interfaces_IAtom$java_util_List(atom, visNeighbors);
if (atom.getImplicitHydrogenCount$() != null  && (atom.getImplicitHydrogenCount$()).$c() > 0  ) auxVectors.add$O(hPosition.vector$());
if (remapped) {
symbols[i]=this.atomGenerator.generateAbbreviatedSymbol$S$org_openscience_cdk_renderer_generators_standard_HydrogenPosition(symbolRemap.get$O(atom), hPosition);
} else if (donutGen.isChargeDelocalised$org_openscience_cdk_interfaces_IAtom(atom)) {
var charge=atom.getFormalCharge$();
atom.setFormalCharge$Integer(Integer.valueOf$I(0));
if ((atom.getAtomicNumber$()).$c() !== 6 ) symbols[i]=this.atomGenerator.generateSymbol$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_RendererModel(container, atom, hPosition, parameters);
atom.setFormalCharge$Integer(charge);
} else symbols[i]=this.atomGenerator.generateSymbol$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_generators_standard_HydrogenPosition$org_openscience_cdk_renderer_RendererModel(container, atom, hPosition, parameters);
if (symbols[i] != null ) {
if (visNeighbors.size$() < 4) {
if (hPosition === $I$(46).Left ) {
symbols[i]=symbols[i].alignTo$org_openscience_cdk_renderer_generators_standard_AtomSymbol_SymbolAlignment($I$(47).Right);
} else {
symbols[i]=symbols[i].alignTo$org_openscience_cdk_renderer_generators_standard_AtomSymbol_SymbolAlignment($I$(47).Left);
}}var p=atom.getPoint2d$();
if (p == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Atom did not have 2D coordinates"]);
symbols[i]=symbols[i].resize$D$D(1 / scale, 1 / -scale).center$D$D(p.x, p.y);
}}var label=null;
if (!C$.isHidden$org_openscience_cdk_interfaces_IChemObject(atom)) label=C$.getAnnotationLabel$org_openscience_cdk_interfaces_IChemObject(atom);
if (label != null ) {
var strokeAdjust=symbols[i] != null  ? -halfStroke : 0;
var vector=C$.newAtomAnnotationVector$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List(atom, bonds, auxVectors);
var annOutline=C$.generateAnnotation$javax_vecmath_Point2d$S$javax_vecmath_Vector2d$D$D$java_awt_Font$org_openscience_cdk_renderer_generators_standard_AtomSymbol(atom.getPoint2d$(), label, vector, annDist + strokeAdjust, annScale, this.font, symbols[i]);
if (symbols[i] != null ) {
symbols[i]=symbols[i].addAnnotation$org_openscience_cdk_renderer_generators_standard_TextOutline(annOutline);
} else {
annotations.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(40,"shapeOf$java_awt_Shape$java_awt_Color",[annOutline.getOutline$(), annColor]));
}}}
if (maxAttach > 1) {
var attachNumOutlines=Clazz.new_($I$(44,1));
var maxRadius=0;
for (var atom, $atom = attachPoints.iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var attachNum=atom.getAttachPointNum$();
var strokeAdjust=-halfStroke;
var vector=C$.newAttachPointAnnotationVector$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List(atom, container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(atom), Clazz.new_($I$(44,1)));
var outline=C$.generateAnnotation$javax_vecmath_Point2d$S$javax_vecmath_Vector2d$D$D$java_awt_Font$org_openscience_cdk_renderer_generators_standard_AtomSymbol(atom.getPoint2d$(), Integer.toString$I(attachNum), vector, 1.75 * annDist + strokeAdjust, annScale, this.font.deriveFont$I(1), null);
attachNumOutlines.add$O(outline);
var w=outline.getBounds$().getWidth$();
var h=outline.getBounds$().getHeight$();
var r=Math.sqrt(w * w + h * h) / 2;
if (r > maxRadius ) maxRadius=r;
}
for (var outline, $outline = attachNumOutlines.iterator$(); $outline.hasNext$()&&((outline=($outline.next$())),1);) {
var group=Clazz.new_($I$(30,1));
var radius=1.2 * stroke + maxRadius;
var shape=Clazz.new_([outline.getCenter$().getX$() - radius, outline.getCenter$().getY$() - radius, 2 * radius, 2 * radius],$I$(48,1).c$$D$D$D$D);
var area1=Clazz.new_($I$(49,1).c$$java_awt_Shape,[shape]);
area1.subtract$java_awt_geom_Area(Clazz.new_([outline.getOutline$()],$I$(49,1).c$$java_awt_Shape));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(40).shapeOf$java_awt_Shape$java_awt_Color(area1, foreground));
annotations.add$org_openscience_cdk_renderer_elements_IRenderingElement(group);
}
}var sgroups=container.getProperty$O("cdk:CtabSgroups");
if (sgroups != null ) {
var attachNumOutlines=Clazz.new_($I$(44,1));
var maxRadius=0;
for (var sgroup, $sgroup = sgroups.iterator$(); $sgroup.hasNext$()&&((sgroup=($sgroup.next$())),1);) {
if (sgroup.getType$() === $I$(50).ExtAttachOrdering ) {
var number=1;
for (var bond, $bond = sgroup.getBonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
var beg=bond.getBegin$().getPoint2d$();
var end=bond.getEnd$().getPoint2d$();
var mid=$I$(51).midpoint$javax_vecmath_Point2d$javax_vecmath_Point2d(beg, end);
var outline=C$.generateAnnotation$javax_vecmath_Point2d$S$javax_vecmath_Vector2d$D$D$java_awt_Font$org_openscience_cdk_renderer_generators_standard_AtomSymbol(mid, Integer.toString$I(number++), Clazz.new_($I$(52,1).c$$D$D,[0, 0]), 0, annScale, this.font.deriveFont$I(1), null);
attachNumOutlines.add$O(outline);
var w=outline.getBounds$().getWidth$();
var h=outline.getBounds$().getHeight$();
var r=Math.sqrt(w * w + h * h) / 2;
if (r > maxRadius ) maxRadius=r;
}
}}
for (var outline, $outline = attachNumOutlines.iterator$(); $outline.hasNext$()&&((outline=($outline.next$())),1);) {
var group=Clazz.new_($I$(30,1));
var radius=1.2 * stroke + maxRadius;
var shape=Clazz.new_([outline.getCenter$().getX$() - radius, outline.getCenter$().getY$() - radius, 2 * radius, 2 * radius],$I$(48,1).c$$D$D$D$D);
var area1=Clazz.new_($I$(49,1).c$$java_awt_Shape,[shape]);
group.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(40,"shapeOf$java_awt_Shape$java_awt_Color",[shape, $I$(2).white]));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(40).outlineOf$java_awt_Shape$D$java_awt_Color(shape, 0.2 * stroke, foreground));
group.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(40,"shapeOf$java_awt_Shape$java_awt_Color",[outline.getOutline$(), foreground]));
annotations.add$org_openscience_cdk_renderer_elements_IRenderingElement(group);
}
}return symbols;
}, p$1);

Clazz.newMeth(C$, 'generateAnnotation$javax_vecmath_Point2d$S$javax_vecmath_Vector2d$D$D$java_awt_Font$org_openscience_cdk_renderer_generators_standard_AtomSymbol',  function (basePoint, label, direction, distance, scale, font, symbol) {
var italicHint=label.startsWith$S("std.itl:");
label=italicHint ? label.substring$I("std.itl:".length$()) : label;
var annFont=italicHint ? font.deriveFont$I(2) : font;
var annOutline=Clazz.new_($I$(35,1).c$$S$java_awt_Font,[label, annFont]).resize$D$D(scale, -scale);
var center=direction.x > 0.3  ? annOutline.getFirstGlyphCenter$() : direction.x < -0.3  ? annOutline.getLastGlyphCenter$() : annOutline.getCenter$();
if (symbol != null ) {
var intersect=symbol.getConvexHull$().intersect$java_awt_geom_Point2D$java_awt_geom_Point2D($I$(51).toAwtPoint$javax_vecmath_Point2d(basePoint), $I$(51,"toAwtPoint$javax_vecmath_Point2d",[Clazz.new_([$I$(51).sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d(basePoint, direction)],$I$(53,1).c$$javax_vecmath_Tuple2d)]));
if (intersect != null ) basePoint=$I$(51).toVecmathPoint$java_awt_geom_Point2D(intersect);
}direction.scale$D(distance);
direction.add$javax_vecmath_Tuple2d(basePoint);
return annOutline.translate$D$D(direction.x - center.getX$(), direction.y - center.getY$());
}, 1);

Clazz.newMeth(C$, 'embedText$java_awt_Font$S$java_awt_Color$D',  function (font, text, color, scale) {
var lines=text.split$S("\n");
var group=Clazz.new_($I$(30,1));
var yOffset=0;
var lineHeight=1.4;
for (var line, $line = 0, $$line = lines; $line<$$line.length&&((line=($$line[$line])),1);$line++) {
var outline=Clazz.new_($I$(35,1).c$$S$java_awt_Font,[line, font]).resize$D$D(scale, -scale);
var center=outline.getCenter$();
outline=outline.translate$D$D(-center.getX$(), -(center.getY$() + yOffset));
yOffset+=lineHeight * outline.getBounds$().getHeight$();
group.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(40,"shapeOf$java_awt_Shape$java_awt_Color",[outline.getOutline$(), color]));
var logicalBounds=outline.getLogicalBounds$();
group.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_([logicalBounds.getMinX$(), logicalBounds.getMinY$(), logicalBounds.getMaxX$(), logicalBounds.getMaxY$()],$I$(41,1).c$$D$D$D$D));
}
return group;
}, 1);

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(54,"asList$OA",[Clazz.array($I$(55), -1, [this.atomColor, this.visibility, this.strokeRatio, this.separationRatio, this.wedgeRatio, this.marginRatio, this.hatchSections, this.dashSections, this.waveSections, this.fancyBoldWedges, this.fancyHashedWedges, this.highlighting, this.glowWidth, this.annCol, this.annDist, this.annFontSize, this.sgroupBracketDepth, this.sgroupFontScale, this.omitMajorIsotopes, this.forceDelocalised, this.delocaliseDonuts, this.deuteriumSymbol, this.pseudoFontStyle])]);
});

Clazz.newMeth(C$, 'getAnnotationLabel$org_openscience_cdk_interfaces_IChemObject',  function (chemObject) {
var obj=chemObject.getProperty$O("stdgen.annotation.label");
return obj != null  ? obj.toString() : null;
}, 1);

Clazz.newMeth(C$, 'getHighlightColor$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel',  function (bond, parameters) {
var propCol=C$.getColorProperty$org_openscience_cdk_interfaces_IChemObject$S(bond, "stdgen.highlight.color");
if (propCol != null ) {
return propCol;
}if (parameters.getSelection$() != null  && parameters.getSelection$().contains$org_openscience_cdk_interfaces_IChemObject(bond) ) {
return parameters.get$Class(Clazz.getClass($I$(56)));
}return null;
}, p$1);

Clazz.newMeth(C$, 'getColorProperty$org_openscience_cdk_interfaces_IChemObject$S',  function (object, key) {
var value=object.getProperty$O(key);
if (Clazz.instanceOf(value, "java.awt.Color")) return value;
if (value != null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[key + " property should be a java.awt.Color"]);
return null;
}, 1);

Clazz.newMeth(C$, 'recolor$org_openscience_cdk_renderer_elements_IRenderingElement$java_awt_Color',  function (element, color) {
if (Clazz.instanceOf(element, "org.openscience.cdk.renderer.elements.ElementGroup")) {
var orgGroup=element;
var newGroup=Clazz.new_($I$(30,1));
for (var child, $child = orgGroup.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
newGroup.add$org_openscience_cdk_renderer_elements_IRenderingElement(C$.recolor$org_openscience_cdk_renderer_elements_IRenderingElement$java_awt_Color(child, color));
}
return newGroup;
} else if (Clazz.instanceOf(element, "org.openscience.cdk.renderer.elements.LineElement")) {
var lineElement=element;
return Clazz.new_($I$(57,1).c$$D$D$D$D$D$java_awt_Color,[lineElement.firstPointX, lineElement.firstPointY, lineElement.secondPointX, lineElement.secondPointY, lineElement.width, color]);
} else if (Clazz.instanceOf(element, "org.openscience.cdk.renderer.elements.GeneralPath")) {
return (element).recolor$java_awt_Color(color);
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot highlight rendering element, " + element.getClass$()]);
}, 1);

Clazz.newMeth(C$, 'outerGlow$org_openscience_cdk_renderer_elements_IRenderingElement$java_awt_Color$D$D',  function (element, color, glowWidth, stroke) {
if (Clazz.instanceOf(element, "org.openscience.cdk.renderer.elements.ElementGroup")) {
var orgGroup=element;
var newGroup=Clazz.new_($I$(30,1));
for (var child, $child = orgGroup.iterator$(); $child.hasNext$()&&((child=($child.next$())),1);) {
newGroup.add$org_openscience_cdk_renderer_elements_IRenderingElement(C$.outerGlow$org_openscience_cdk_renderer_elements_IRenderingElement$java_awt_Color$D$D(child, color, glowWidth, stroke));
}
return newGroup;
} else if (Clazz.instanceOf(element, "org.openscience.cdk.renderer.elements.LineElement")) {
var lineElement=element;
return Clazz.new_([lineElement.firstPointX, lineElement.firstPointY, lineElement.secondPointX, lineElement.secondPointY, stroke + (2 * (glowWidth * stroke)), color],$I$(57,1).c$$D$D$D$D$D$java_awt_Color);
} else if (Clazz.instanceOf(element, "org.openscience.cdk.renderer.elements.GeneralPath")) {
var org=element;
if (org.fill) {
return org.outline$D(2 * (glowWidth * stroke)).recolor$java_awt_Color(color);
} else {
return org.outline$D(stroke + (2 * (glowWidth * stroke))).recolor$java_awt_Color(color);
}}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot generate glow for rendering element, " + element.getClass$()]);
}, 1);

Clazz.newMeth(C$, 'newAtomAnnotationVector$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List',  function (atom, bonds, auxVectors) {
var vectors=Clazz.new_([bonds.size$()],$I$(44,1).c$$I);
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) vectors.add$O($I$(51).newUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond(atom, bond));

if (vectors.size$() == 0) {
if (auxVectors.size$() == 0) return Clazz.new_($I$(52,1).c$$D$D,[0, -1]);
if (auxVectors.size$() == 1) return $I$(51,"negate$javax_vecmath_Tuple2d",[auxVectors.get$I(0)]);
return $I$(51).newVectorInLargestGap$java_util_List(auxVectors);
} else if (vectors.size$() == 1) {
if (auxVectors.size$() == 0) return $I$(51,"negate$javax_vecmath_Tuple2d",[vectors.get$I(0)]);
vectors.addAll$java_util_Collection(auxVectors);
return $I$(51).newVectorInLargestGap$java_util_List(vectors);
} else if (vectors.size$() == 2 && auxVectors.size$() == 0 ) {
var combined=$I$(51,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[vectors.get$I(0), vectors.get$I(1)]);
if (vectors.get$I(0).angle$javax_vecmath_Vector2d(vectors.get$I(1)) < Math.toRadians(65) ) combined.negate$();
 else if ((!C$.isPlainBond$org_openscience_cdk_interfaces_IBond(bonds.get$I(0)) || !C$.isPlainBond$org_openscience_cdk_interfaces_IBond(bonds.get$I(1)) ) && !(C$.isWedged$org_openscience_cdk_interfaces_IBond(bonds.get$I(0)) && C$.isWedged$org_openscience_cdk_interfaces_IBond(bonds.get$I(1)) ) ) combined.negate$();
combined.normalize$();
if (Double.isNaN$D(combined.length$())) return $I$(51).newVectorInLargestGap$java_util_List(vectors);
return combined;
} else {
if (vectors.size$() == 3 && auxVectors.size$() == 0 ) {
var plainVectors=Clazz.new_($I$(44,1));
var wedgeVectors=Clazz.new_($I$(44,1));
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (C$.isPlainBond$org_openscience_cdk_interfaces_IBond(bond)) plainVectors.add$O($I$(51).newUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond(atom, bond));
if (C$.isWedged$org_openscience_cdk_interfaces_IBond(bond)) wedgeVectors.add$O($I$(51).newUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond(atom, bond));
}
if (plainVectors.size$() == 2) {
return $I$(51,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[plainVectors.get$I(0), plainVectors.get$I(1)]);
} else if (plainVectors.size$() + wedgeVectors.size$() == 2) {
plainVectors.addAll$java_util_Collection(wedgeVectors);
return $I$(51,"sum$javax_vecmath_Tuple2d$javax_vecmath_Tuple2d",[plainVectors.get$I(0), plainVectors.get$I(1)]);
}}if (auxVectors.size$() > 0) vectors.addAll$java_util_Collection(auxVectors);
return $I$(51).newVectorInLargestGap$java_util_List(vectors);
}}, 1);

Clazz.newMeth(C$, 'newAttachPointAnnotationVector$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List',  function (atom, bonds, auxVectors) {
if (bonds.isEmpty$()) return Clazz.new_($I$(52,1).c$$D$D,[0, -1]);
 else if (bonds.size$() > 1) return C$.newAtomAnnotationVector$org_openscience_cdk_interfaces_IAtom$java_util_List$java_util_List(atom, bonds, auxVectors);
var bondVector=$I$(51,"newUnitVector$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IBond",[atom, bonds.get$I(0)]);
var perpVector=$I$(51).newPerpendicularVector$javax_vecmath_Vector2d(bondVector);
if (perpVector.y > 0 ) perpVector.negate$();
var vector=Clazz.new_([(bondVector.x + perpVector.x) / 2, (bondVector.y + perpVector.y) / 2],$I$(52,1).c$$D$D);
vector.normalize$();
return vector;
}, 1);

Clazz.newMeth(C$, 'isPlainBond$org_openscience_cdk_interfaces_IBond',  function (bond) {
return bond.getOrder$() === $I$(58).SINGLE  && (bond.getStereo$() === $I$(59).NONE  || bond.getStereo$() == null  ) ;
}, 1);

Clazz.newMeth(C$, 'isWedged$org_openscience_cdk_interfaces_IBond',  function (bond) {
return (bond.getStereo$() === $I$(59).UP  || bond.getStereo$() === $I$(59).DOWN   || bond.getStereo$() === $I$(59).UP_INVERTED   || bond.getStereo$() === $I$(59).DOWN_INVERTED  );
}, 1);

Clazz.newMeth(C$, 'isHidden$org_openscience_cdk_interfaces_IChemObject',  function (chemobj) {
return Boolean.TRUE.equals$O(chemobj.getProperty$O("stdgen.hidden"));
}, 1);

Clazz.newMeth(C$, 'isHiddenFully$org_openscience_cdk_interfaces_IChemObject',  function (chemobj) {
return Boolean.TRUE.equals$O(chemobj.getProperty$O("stdgen.hidden.fully"));
}, 1);

Clazz.newMeth(C$, 'hide$org_openscience_cdk_interfaces_IChemObject',  function (chemobj) {
chemobj.setProperty$O$O("stdgen.hidden", Boolean.valueOf$Z(true));
}, 1);

Clazz.newMeth(C$, 'hideFully$org_openscience_cdk_interfaces_IChemObject',  function (chemobj) {
chemobj.setProperty$O$O("stdgen.hidden.fully", Boolean.valueOf$Z(true));
}, 1);

Clazz.newMeth(C$, 'unhide$org_openscience_cdk_interfaces_IChemObject',  function (chemobj) {
chemobj.setProperty$O$O("stdgen.hidden", Boolean.valueOf$Z(false));
chemobj.setProperty$O$O("stdgen.hidden.fully", Boolean.valueOf$Z(false));
}, 1);
;
(function(){/*e*/var C$=Clazz.newClass(P$.StandardGenerator, "Alignment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Left", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Right", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.StandardGenerator, "HighlightStyle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "None", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Colored", 1, []);
Clazz.newEnumConst($vals, C$.c$, "OuterGlow", 2, []);
Clazz.newEnumConst($vals, C$.c$, "OuterGlowWhiteEdge", 3, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "AtomColor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Clazz.new_([Clazz.new_($I$(2,1).c$$I,[4473924])],$I$(1,1).c$$java_awt_Color);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "Visibility", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(3,"disconnected$org_openscience_cdk_renderer_SymbolVisibility",[$I$(4).iupacRecommendationsWithoutTerminalCarbon$()]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "StrokeRatio", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(1.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "BondSeparation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(0.16);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "SymbolMarginRatio", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(2.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "WedgeRatio", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(6.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "HashSpacing", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(5.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "WaveSpacing", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(5.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "DashSection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Integer.valueOf$I(8);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "FancyBoldWedges", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.valueOf$Z(true);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "FancyHashedWedges", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.valueOf$Z(true);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "OuterGlowWidth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(2.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "Highlighting", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(5).Colored;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "AnnotationColor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(2).RED;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "AnnotationDistance", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(0.25);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "AnnotationFontScale", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(0.5);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "SgroupBracketDepth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(0.18);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "SgroupFontScale", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(0.6);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "OmitMajorIsotopes", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.valueOf$Z(false);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "ForceDelocalisedBondDisplay", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.valueOf$Z(false);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "DelocalisedDonutsBondDisplay", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.valueOf$Z(true);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "DeuteriumSymbol", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.valueOf$Z(true);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StandardGenerator, "PseudoFontStyle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Integer.valueOf$I(3);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:29 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
