(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),I$=[[0,'java.util.ArrayList',['org.openscience.cdk.renderer.generators.standard.AtomSymbol','.SymbolAlignment'],'org.openscience.cdk.renderer.generators.standard.ConvexHull','java.util.Collections','java.awt.geom.AffineTransform']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomSymbol", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['SymbolAlignment',24]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['element','org.openscience.cdk.renderer.generators.standard.TextOutline','adjuncts','java.util.List','+annotationAdjuncts','alignment','org.openscience.cdk.renderer.generators.standard.AtomSymbol.SymbolAlignment','hull','org.openscience.cdk.renderer.generators.standard.ConvexHull']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List',  function (element, adjuncts) {
;C$.$init$.apply(this);
this.element=element;
this.adjuncts=adjuncts;
this.annotationAdjuncts=Clazz.new_($I$(1,1));
this.alignment=$I$(2).Center;
this.hull=$I$(3,"ofShapes$java_util_List",[this.getOutlines$()]);
}, 1);

Clazz.newMeth(C$, 'c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List$java_util_List$org_openscience_cdk_renderer_generators_standard_AtomSymbol_SymbolAlignment$org_openscience_cdk_renderer_generators_standard_ConvexHull',  function (element, adjuncts, annotationAdjuncts, alignment, hull) {
;C$.$init$.apply(this);
this.element=element;
this.adjuncts=adjuncts;
this.annotationAdjuncts=annotationAdjuncts;
this.alignment=alignment;
this.hull=hull;
}, 1);

Clazz.newMeth(C$, 'alignTo$org_openscience_cdk_renderer_generators_standard_AtomSymbol_SymbolAlignment',  function (alignment) {
return Clazz.new_(C$.c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List$java_util_List$org_openscience_cdk_renderer_generators_standard_AtomSymbol_SymbolAlignment$org_openscience_cdk_renderer_generators_standard_ConvexHull,[this.element, this.adjuncts, this.annotationAdjuncts, alignment, this.hull]);
});

Clazz.newMeth(C$, 'addAnnotation$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (annotation) {
var newAnnotations=Clazz.new_($I$(1,1).c$$java_util_Collection,[this.annotationAdjuncts]);
newAnnotations.add$O(annotation);
return Clazz.new_(C$.c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List$java_util_List$org_openscience_cdk_renderer_generators_standard_AtomSymbol_SymbolAlignment$org_openscience_cdk_renderer_generators_standard_ConvexHull,[this.element, this.adjuncts, newAnnotations, this.alignment, this.hull]);
});

Clazz.newMeth(C$, 'getAlignmentCenter$',  function () {
if (this.alignment === $I$(2).Left ) {
return this.element.getFirstGlyphCenter$();
} else if (this.alignment === $I$(2).Right ) {
return this.element.getLastGlyphCenter$();
} else {
return this.element.getCenter$();
}});

Clazz.newMeth(C$, 'elementOutline$',  function () {
return this.element;
});

Clazz.newMeth(C$, 'adjunctOutlines$',  function () {
return $I$(4).unmodifiableList$java_util_List(this.adjuncts);
});

Clazz.newMeth(C$, 'getOutlines$',  function () {
var shapes=Clazz.new_($I$(1,1));
shapes.add$O(this.element.getOutline$());
for (var adjunct, $adjunct = this.adjuncts.iterator$(); $adjunct.hasNext$()&&((adjunct=($adjunct.next$())),1);) shapes.add$O(adjunct.getOutline$());

return shapes;
});

Clazz.newMeth(C$, 'getAnnotationOutlines$',  function () {
var shapes=Clazz.new_($I$(1,1));
for (var adjunct, $adjunct = this.annotationAdjuncts.iterator$(); $adjunct.hasNext$()&&((adjunct=($adjunct.next$())),1);) shapes.add$O(adjunct.getOutline$());

return shapes;
});

Clazz.newMeth(C$, 'getConvexHull$',  function () {
return this.hull;
});

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (transform) {
var transformedAdjuncts=Clazz.new_([this.adjuncts.size$()],$I$(1,1).c$$I);
for (var adjunct, $adjunct = this.adjuncts.iterator$(); $adjunct.hasNext$()&&((adjunct=($adjunct.next$())),1);) transformedAdjuncts.add$O(adjunct.transform$java_awt_geom_AffineTransform(transform));

var transformedAnnAdjuncts=Clazz.new_([this.adjuncts.size$()],$I$(1,1).c$$I);
for (var adjunct, $adjunct = this.annotationAdjuncts.iterator$(); $adjunct.hasNext$()&&((adjunct=($adjunct.next$())),1);) transformedAnnAdjuncts.add$O(adjunct.transform$java_awt_geom_AffineTransform(transform));

return Clazz.new_(C$.c$$org_openscience_cdk_renderer_generators_standard_TextOutline$java_util_List$java_util_List$org_openscience_cdk_renderer_generators_standard_AtomSymbol_SymbolAlignment$org_openscience_cdk_renderer_generators_standard_ConvexHull,[this.element.transform$java_awt_geom_AffineTransform(transform), transformedAdjuncts, transformedAnnAdjuncts, this.alignment, this.hull.transform$java_awt_geom_AffineTransform(transform)]);
});

Clazz.newMeth(C$, 'resize$D$D',  function (scaleX, scaleY) {
var center=this.element.getCenter$();
var transform=Clazz.new_($I$(5,1));
transform.translate$D$D(center.getX$(), center.getY$());
transform.scale$D$D(scaleX, scaleY);
transform.translate$D$D(-center.getX$(), -center.getY$());
return this.transform$java_awt_geom_AffineTransform(transform);
});

Clazz.newMeth(C$, 'center$D$D',  function (x, y) {
var center=this.getAlignmentCenter$();
return this.translate$D$D(x - center.getX$(), y - center.getY$());
});

Clazz.newMeth(C$, 'translate$D$D',  function (x, y) {
return this.transform$java_awt_geom_AffineTransform($I$(5).getTranslateInstance$D$D(x, y));
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.AtomSymbol, "SymbolAlignment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Left", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Center", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Right", 2, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:30 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
