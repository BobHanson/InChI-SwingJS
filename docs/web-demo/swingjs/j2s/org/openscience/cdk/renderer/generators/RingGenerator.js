(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),p$1={},I$=[[0,['org.openscience.cdk.renderer.generators.RingGenerator','.ShowAromaticity'],['org.openscience.cdk.renderer.generators.RingGenerator','.CDKStyleAromaticity'],['org.openscience.cdk.renderer.generators.RingGenerator','.MaxDrawableAromaticRing'],['org.openscience.cdk.renderer.generators.RingGenerator','.RingProportion'],'java.util.HashSet','org.openscience.cdk.renderer.elements.ElementGroup',['org.openscience.cdk.interfaces.IBond','.Order'],'java.awt.Color','org.openscience.cdk.geometry.GeometryUtil','org.openscience.cdk.renderer.elements.OvalElement','java.util.ArrayList']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "RingGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.openscience.cdk.renderer.generators.BasicBondGenerator');
C$.$classes$=[['ShowAromaticity',9],['CDKStyleAromaticity',9],['MaxDrawableAromaticRing',9],['RingProportion',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.showAromaticity=Clazz.new_($I$(1,1));
this.cdkStyleAromaticity=Clazz.new_($I$(2,1));
this.maxDrawableAromaticRing=Clazz.new_($I$(3,1));
this.ringProportion=Clazz.new_($I$(4,1));
},1);

C$.$fields$=[['O',['showAromaticity','org.openscience.cdk.renderer.generators.IGeneratorParameter','+cdkStyleAromaticity','+maxDrawableAromaticRing','+ringProportion','painted_rings','java.util.Set']]]

Clazz.newMeth(C$, 'c$',  function () {
Clazz.super_(C$, this);
this.painted_rings=Clazz.new_($I$(5,1));
}, 1);

Clazz.newMeth(C$, 'generateRingElements$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_renderer_RendererModel',  function (bond, ring, model) {
if (p$1.ringIsAromatic$org_openscience_cdk_interfaces_IRing.apply(this, [ring]) && (this.showAromaticity.getValue$()).$c() && ring.getAtomCount$() < (this.maxDrawableAromaticRing.getValue$()).$c()   ) {
var pair=Clazz.new_($I$(6,1));
if ((this.cdkStyleAromaticity.getValue$()).valueOf()) {
pair.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateBondElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_renderer_RendererModel(bond, $I$(7).SINGLE, model));
C$.superclazz.prototype.setOverrideColor$java_awt_Color.apply(this, [$I$(8).LIGHT_GRAY]);
pair.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateInnerElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_renderer_RendererModel(bond, ring, model));
C$.superclazz.prototype.setOverrideColor$java_awt_Color.apply(this, [null]);
} else {
pair.add$org_openscience_cdk_renderer_elements_IRenderingElement(this.generateBondElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IBond_Order$org_openscience_cdk_renderer_RendererModel(bond, $I$(7).SINGLE, model));
if (!this.painted_rings.contains$O(ring)) {
this.painted_rings.add$O(ring);
pair.add$org_openscience_cdk_renderer_elements_IRenderingElement(p$1.generateRingRingElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_renderer_RendererModel.apply(this, [bond, ring, model]));
}}return pair;
} else {
return C$.superclazz.prototype.generateRingElements$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_renderer_RendererModel.apply(this, [bond, ring, model]);
}});

Clazz.newMeth(C$, 'generateRingRingElement$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_interfaces_IRing$org_openscience_cdk_renderer_RendererModel',  function (bond, ring, model) {
var c=$I$(9).get2DCenter$org_openscience_cdk_interfaces_IAtomContainer(ring);
var minmax=$I$(9).getMinMax$org_openscience_cdk_interfaces_IAtomContainer(ring);
var width=minmax[2] - minmax[0];
var height=minmax[3] - minmax[1];
var radius=Math.min(width, height) * (this.ringProportion.getValue$()).$c();
var color=this.getColorForBond$org_openscience_cdk_interfaces_IBond$org_openscience_cdk_renderer_RendererModel(bond, model);
return Clazz.new_($I$(10,1).c$$D$D$D$Z$java_awt_Color,[c.x, c.y, radius, false, color]);
}, p$1);

Clazz.newMeth(C$, 'ringIsAromatic$org_openscience_cdk_interfaces_IRing',  function (ring) {
var isAromatic=true;
for (var atom, $atom = ring.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
if (!atom.getFlag$I(32)) {
isAromatic=false;
break;
}}
if (!isAromatic) {
isAromatic=true;
for (var b, $b = ring.bonds$().iterator$(); $b.hasNext$()&&((b=($b.next$())),1);) {
if (!b.getFlag$I(32)) {
return false;
}}
}return isAromatic;
}, p$1);

Clazz.newMeth(C$, 'getParameters$',  function () {
var superPars=C$.superclazz.prototype.getParameters$.apply(this, []);
var pars=Clazz.new_([superPars.size$() + 3],$I$(11,1).c$$I);
pars.addAll$java_util_Collection(superPars);
pars.add$O(this.cdkStyleAromaticity);
pars.add$O(this.showAromaticity);
pars.add$O(this.maxDrawableAromaticRing);
pars.add$O(this.ringProportion);
return pars;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RingGenerator, "ShowAromaticity", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.TRUE;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RingGenerator, "CDKStyleAromaticity", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Boolean.FALSE;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.RingGenerator, "MaxDrawableAromaticRing", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.RingGenerator, "RingProportion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(0.35);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:35 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
