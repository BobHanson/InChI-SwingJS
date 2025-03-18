(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),p$1={},I$=[[0,'java.awt.Color','org.openscience.cdk.renderer.color.CDK2DAtomColors',['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.Shape'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.AtomColor'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.AtomColorer'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.ColorByType'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.ShowExplicitHydrogens'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.AtomRadius'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.CompactAtom'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.KekuleStructure'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.CompactShape'],['org.openscience.cdk.renderer.generators.BasicAtomGenerator','.ShowEndCarbons'],'org.openscience.cdk.renderer.elements.ElementGroup','org.openscience.cdk.renderer.elements.MarkedElement','org.openscience.cdk.geometry.GeometryUtil',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],'org.openscience.cdk.renderer.elements.RectangleElement','org.openscience.cdk.renderer.elements.OvalElement','org.openscience.cdk.renderer.elements.AtomSymbolElement','java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicAtomGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.openscience.cdk.renderer.generators.IGenerator');
C$.$classes$=[['AtomColor',9],['AtomColorer',9],['ColorByType',9],['ShowExplicitHydrogens',9],['AtomRadius',9],['CompactAtom',9],['KekuleStructure',9],['Shape',25],['CompactShape',9],['ShowEndCarbons',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.atomColor=Clazz.new_($I$(4,1));
this.atomColorer=Clazz.new_($I$(5,1));
this.colorByType=Clazz.new_($I$(6,1));
this.showExplicitHydrogens=Clazz.new_($I$(7,1));
this.atomRadius=Clazz.new_($I$(8,1));
this.isCompact=Clazz.new_($I$(9,1));
this.isKekule=Clazz.new_($I$(10,1));
this.compactShape=Clazz.new_($I$(11,1));
this.showEndCarbons=Clazz.new_($I$(12,1));
},1);

C$.$fields$=[['O',['atomColor','org.openscience.cdk.renderer.generators.IGeneratorParameter','+atomColorer','+colorByType','+showExplicitHydrogens','+atomRadius','+isCompact','+isKekule','+compactShape','+showEndCarbons']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (container, model) {
var elementGroup=Clazz.new_($I$(13,1));
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
elementGroup.add$org_openscience_cdk_renderer_elements_IRenderingElement($I$(14,"markupAtom$org_openscience_cdk_renderer_elements_IRenderingElement$org_openscience_cdk_interfaces_IAtom",[this.generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel(container, atom, model), atom]));
}
return elementGroup;
});

Clazz.newMeth(C$, 'hasCoordinates$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return atom != null  && atom.getPoint2d$() != null  ;
});

Clazz.newMeth(C$, 'isHydrogen$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return (atom.getAtomicNumber$()).$c() === 1 ;
});

Clazz.newMeth(C$, 'isCarbon$org_openscience_cdk_interfaces_IAtom',  function (atom) {
return (atom.getAtomicNumber$()).$c() === 6 ;
}, p$1);

Clazz.newMeth(C$, 'invisibleHydrogen$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel',  function (atom, model) {
return this.isHydrogen$org_openscience_cdk_interfaces_IAtom(atom) && (!((model.get$Class(Clazz.getClass($I$(7)))).$c())) ;
});

Clazz.newMeth(C$, 'invisibleCarbon$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel',  function (atom, atomContainer, model) {
return p$1.isCarbon$org_openscience_cdk_interfaces_IAtom.apply(this, [atom]) && !this.showCarbon$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel(atom, atomContainer, model) ;
});

Clazz.newMeth(C$, 'canDraw$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel',  function (atom, container, model) {
if (!this.hasCoordinates$org_openscience_cdk_interfaces_IAtom(atom)) {
return false;
}if (this.invisibleHydrogen$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel(atom, model)) {
return false;
}if (this.invisibleCarbon$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel(atom, container, model)) {
return false;
}return true;
});

Clazz.newMeth(C$, 'generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel',  function (atomContainer, atom, model) {
if (!this.canDraw$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel(atom, atomContainer, model)) {
return null;
} else if ((model.get$Class(Clazz.getClass($I$(9)))).valueOf()) {
return this.generateCompactElement$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel(atom, model);
} else {
var alignment;
if ((atom.getAtomicNumber$()).$c() === 6 ) {
alignment=$I$(15).getBestAlignmentForLabel$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(atomContainer, atom);
} else {
alignment=$I$(15).getBestAlignmentForLabelXY$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_interfaces_IAtom(atomContainer, atom);
}return this.generateElement$org_openscience_cdk_interfaces_IAtom$I$org_openscience_cdk_renderer_RendererModel(atom, alignment, model);
}});

Clazz.newMeth(C$, 'generateCompactElement$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel',  function (atom, model) {
var point=atom.getPoint2d$();
var radius=(model.get$Class(Clazz.getClass($I$(8)))).$c() / (model.getParameter$Class(Clazz.getClass($I$(16))).getValue$()).$c();
var distance=2 * radius;
if (model.get$Class(Clazz.getClass($I$(11))) === $I$(3).SQUARE ) {
return Clazz.new_([point.x - radius, point.y - radius, distance, distance, true, this.getAtomColor$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel(atom, model)],$I$(17,1).c$$D$D$D$D$Z$java_awt_Color);
} else {
return Clazz.new_([point.x, point.y, radius, true, this.getAtomColor$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel(atom, model)],$I$(18,1).c$$D$D$D$Z$java_awt_Color);
}});

Clazz.newMeth(C$, 'generateElement$org_openscience_cdk_interfaces_IAtom$I$org_openscience_cdk_renderer_RendererModel',  function (atom, alignment, model) {
var text;
if (Clazz.instanceOf(atom, "org.openscience.cdk.interfaces.IPseudoAtom")) {
text=(atom).getLabel$();
} else {
text=atom.getSymbol$();
}return Clazz.new_([atom.getPoint2d$().x, atom.getPoint2d$().y, text, atom.getFormalCharge$(), atom.getImplicitHydrogenCount$(), alignment, this.getAtomColor$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel(atom, model)],$I$(19,1).c$$D$D$S$Integer$Integer$I$java_awt_Color);
});

Clazz.newMeth(C$, 'showCarbon$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel',  function (carbonAtom, container, model) {
if ((model.get$Class(Clazz.getClass($I$(10)))).valueOf()) return true;
if ((carbonAtom.getFormalCharge$()).$c() !== 0 ) return true;
var connectedBondCount=container.getConnectedBondsList$org_openscience_cdk_interfaces_IAtom(carbonAtom).size$();
if (connectedBondCount < 1) return true;
if ((model.get$Class(Clazz.getClass($I$(12)))).$c() && connectedBondCount == 1 ) return true;
if (carbonAtom.getProperty$O("org.openscience.cdk.validate.error") != null ) return true;
if (container.getConnectedSingleElectronsCount$org_openscience_cdk_interfaces_IAtom(carbonAtom) > 0) return true;
return false;
});

Clazz.newMeth(C$, 'getAtomColor$org_openscience_cdk_interfaces_IAtom$org_openscience_cdk_renderer_RendererModel',  function (atom, model) {
var atomColor=model.get$Class(Clazz.getClass($I$(4)));
if ((model.get$Class(Clazz.getClass($I$(6)))).valueOf()) {
atomColor=model.get$Class(Clazz.getClass($I$(5))).getAtomColor$org_openscience_cdk_interfaces_IAtom(atom);
}return atomColor;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(20,"asList$OA",[Clazz.array($I$(21), -1, [this.atomColor, this.atomColorer, this.atomRadius, this.colorByType, this.compactShape, this.isCompact, this.isKekule, this.showEndCarbons, this.showExplicitHydrogens])]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "AtomColor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(1).BLACK;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "AtomColorer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "ColorByType", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "ShowExplicitHydrogens", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "AtomRadius", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(8.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "CompactAtom", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "KekuleStructure", function(){
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
(function(){/*e*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "Shape", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$static$=function(){C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "OVAL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SQUARE", 1, []);
};

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "CompactShape", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(3).SQUARE;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicAtomGenerator, "ShowEndCarbons", function(){
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
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:35 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
