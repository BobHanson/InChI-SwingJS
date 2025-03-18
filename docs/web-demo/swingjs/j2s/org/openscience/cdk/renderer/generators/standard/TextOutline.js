(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),p$1={},I$=[[0,['java.awt.geom.Point2D','.Double'],'java.awt.font.FontRenderContext','java.awt.geom.AffineTransform',['org.openscience.cdk.renderer.generators.standard.TextOutline','.TextString'],['java.awt.geom.Rectangle2D','.Double'],'StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "TextOutline", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['TextString',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['S',['text'],'O',['glyphs','java.awt.font.GlyphVector','outline','java.awt.Shape','transform','java.awt.geom.AffineTransform']]
,['O',['FONT_RENDER_CONTEXT','java.awt.font.FontRenderContext']]]

Clazz.newMeth(C$, 'c$$S$java_awt_Font',  function (text, font) {
C$.c$$S$java_awt_font_GlyphVector.apply(this, [text, font.createGlyphVector$java_awt_font_FontRenderContext$S(Clazz.new_([Clazz.new_($I$(3,1)), true, true],$I$(2,1).c$$java_awt_geom_AffineTransform$Z$Z), text)]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_font_GlyphVector',  function (text, glyphs) {
C$.c$$S$java_awt_font_GlyphVector$java_awt_Shape$java_awt_geom_AffineTransform.apply(this, [text, glyphs, glyphs.getOutline$(), Clazz.new_($I$(3,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$S$java_awt_font_GlyphVector$java_awt_Shape$java_awt_geom_AffineTransform',  function (text, glyphs, outline, transform) {
;C$.$init$.apply(this);
this.text=text;
this.glyphs=glyphs;
this.outline=outline;
this.transform=transform;
}, 1);

Clazz.newMeth(C$, 'text$',  function () {
return this.text;
});

Clazz.newMeth(C$, 'getOutline$',  function () {
var shape=this.transform.createTransformedShape$java_awt_Shape(this.outline);
var testJava=false;
var useTextString=(true ||testJava);
return (useTextString ? Clazz.new_($I$(4,1).c$$java_awt_Shape$org_openscience_cdk_renderer_generators_standard_TextOutline,[shape, this]) : shape);
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return p$1.transformedBounds$java_awt_Shape.apply(this, [this.outline]);
});

Clazz.newMeth(C$, 'getLogicalBounds$',  function () {
return p$1.transformedBounds$java_awt_Shape.apply(this, [this.glyphs.getLogicalBounds$()]);
});

Clazz.newMeth(C$, 'transformedBounds$java_awt_Shape',  function (shape) {
var rectangle2D=shape.getBounds2D$();
var minPoint=Clazz.new_([rectangle2D.getMinX$(), rectangle2D.getMinY$()],$I$(1,1).c$$D$D);
var maxPoint=Clazz.new_([rectangle2D.getMaxX$(), rectangle2D.getMaxY$()],$I$(1,1).c$$D$D);
this.transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(minPoint, minPoint);
this.transform.transform$java_awt_geom_Point2D$java_awt_geom_Point2D(maxPoint, maxPoint);
var minX=Math.min(minPoint.getX$(), maxPoint.getX$());
var maxX=Math.max(minPoint.getX$(), maxPoint.getX$());
var minY=Math.min(minPoint.getY$(), maxPoint.getY$());
var maxY=Math.max(minPoint.getY$(), maxPoint.getY$());
return Clazz.new_($I$(5,1).c$$D$D$D$D,[minX, minY, maxX - minX, maxY - minY]);
}, p$1);

Clazz.newMeth(C$, 'getCenter$',  function () {
var bounds=this.getBounds$();
return Clazz.new_([bounds.getCenterX$(), bounds.getCenterY$()],$I$(1,1).c$$D$D);
});

Clazz.newMeth(C$, 'getFirstGlyphCenter$',  function () {
return p$1.getGlyphCenter$I.apply(this, [0]);
});

Clazz.newMeth(C$, 'getLastGlyphCenter$',  function () {
return p$1.getGlyphCenter$I.apply(this, [this.text.length$() - 1]);
});

Clazz.newMeth(C$, 'getGlyphCenter$I',  function (index) {
if (this.text.length$() == 1) return this.getCenter$();
var glyph=this.glyphs.getGlyphOutline$I(index);
var glyphBounds=p$1.transformedBounds$java_awt_Shape.apply(this, [glyph]);
return Clazz.new_([glyphBounds.getCenterX$(), glyphBounds.getCenterY$()],$I$(1,1).c$$D$D);
}, p$1);

Clazz.newMeth(C$, 'transform$java_awt_geom_AffineTransform',  function (nextTransform) {
var combinedTransform=Clazz.new_($I$(3,1));
combinedTransform.concatenate$java_awt_geom_AffineTransform(nextTransform);
combinedTransform.concatenate$java_awt_geom_AffineTransform(this.transform);
return Clazz.new_(C$.c$$S$java_awt_font_GlyphVector$java_awt_Shape$java_awt_geom_AffineTransform,[this.text, this.glyphs, this.outline, combinedTransform]);
});

Clazz.newMeth(C$, 'resize$D$D',  function (scaleX, scaleY) {
var center=this.getCenter$();
var transform=Clazz.new_($I$(3,1));
transform.translate$D$D(center.getX$(), center.getY$());
transform.scale$D$D(scaleX, scaleY);
transform.translate$D$D(-center.getX$(), -center.getY$());
return this.transform$java_awt_geom_AffineTransform(transform);
});

Clazz.newMeth(C$, 'translate$D$D',  function (translateX, translateY) {
return this.transform$java_awt_geom_AffineTransform($I$(3).getTranslateInstance$D$D(translateX, translateY));
});

Clazz.newMeth(C$, 'toString',  function () {
var bounds=this.getBounds$();
var sb=Clazz.new_($I$(6,1).c$$I,[25]);
sb.append$S(this.text);
sb.append$S(" [x=").append$S(C$.formatDouble$D(bounds.getX$()));
sb.append$S(", y=").append$S(C$.formatDouble$D(bounds.getY$()));
sb.append$S(", w=").append$S(C$.formatDouble$D(bounds.getWidth$()));
sb.append$S(", h=").append$S(C$.formatDouble$D(bounds.getHeight$()));
sb.append$C("]");
return sb.toString();
});

Clazz.newMeth(C$, 'formatDouble$D',  function (value) {
return String.format$S$OA("%.2f", Clazz.array(java.lang.Object, -1, [Double.valueOf$D(value)]));
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.FONT_RENDER_CONTEXT=Clazz.new_([Clazz.new_($I$(3,1)), true, true],$I$(2,1).c$$java_awt_geom_AffineTransform$Z$Z);
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.TextOutline, "TextString", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, ['java.awt.Shape', 'org.openscience.cdk.renderer.generators.standard.ITextString']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['D',['offsetX','offsetY','scaling'],'O',['outline','java.awt.Shape','textOutline','org.openscience.cdk.renderer.generators.standard.TextOutline','scaledFont','java.awt.Font']]]

Clazz.newMeth(C$, 'c$$java_awt_Shape$org_openscience_cdk_renderer_generators_standard_TextOutline',  function (outline, textOutline) {
;C$.$init$.apply(this);
this.outline=outline;
this.textOutline=textOutline;
var bounds=textOutline.glyphs.getVisualBounds$();
this.offsetX=-bounds.getX$();
this.offsetY=-bounds.getY$();
}, 1);

Clazz.newMeth(C$, 'setScale$java_awt_geom_AffineTransform',  function (transform) {
var font=this.textOutline.glyphs.getFont$();
var tos=this.textOutline.transform.getScaleX$();
var ts=transform.getScaleX$();
this.scaling=tos * ts;
var fs=font.getSize$();
fs=Math.round$D(fs * this.scaling * 10 ) / 10.0;
this.scaledFont=font.deriveFont$F(fs);
});

Clazz.newMeth(C$, 'getTextPosition$D$D',  function (x, y) {
x+=this.offsetX * this.scaling;
y+=this.offsetY * this.scaling;
return Clazz.new_($I$(1,1).c$$D$D,[x, y]);
});

Clazz.newMeth(C$, 'getText$',  function () {
return this.textOutline.text;
});

Clazz.newMeth(C$, 'getFont$',  function () {
return this.scaledFont;
});

Clazz.newMeth(C$, 'getBounds$',  function () {
return this.outline.getBounds$();
});

Clazz.newMeth(C$, 'getBounds2D$',  function () {
return this.outline.getBounds2D$();
});

Clazz.newMeth(C$, 'contains$D$D',  function (x, y) {
return this.outline.contains$D$D(x, y);
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Point2D',  function (p) {
return this.outline.contains$java_awt_geom_Point2D(p);
});

Clazz.newMeth(C$, 'intersects$D$D$D$D',  function (x, y, w, h) {
return this.outline.intersects$D$D$D$D(x, y, w, h);
});

Clazz.newMeth(C$, 'intersects$java_awt_geom_Rectangle2D',  function (r) {
return this.outline.intersects$java_awt_geom_Rectangle2D(r);
});

Clazz.newMeth(C$, 'contains$D$D$D$D',  function (x, y, w, h) {
return this.outline.contains$D$D$D$D(x, y, w, h);
});

Clazz.newMeth(C$, 'contains$java_awt_geom_Rectangle2D',  function (r) {
return this.outline.contains$java_awt_geom_Rectangle2D(r);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform',  function (at) {
return this.outline.getPathIterator$java_awt_geom_AffineTransform(at);
});

Clazz.newMeth(C$, 'getPathIterator$java_awt_geom_AffineTransform$D',  function (at, flatness) {
return this.outline.getPathIterator$java_awt_geom_AffineTransform$D(at, flatness);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:32 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
