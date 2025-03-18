(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,'java.awt.Color',['org.openscience.cdk.renderer.font.IFontManager','.FontStyle'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.ArrowHeadWidth'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.ShowTooltip'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.ShowMoleculeTitle'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.FitToScreen'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.BondLength'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.BackgroundColor'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.ForegroundColor'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.UseAntiAliasing'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Margin'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.UsedFontStyle'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.FontName'],['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.ZoomFactor'],'org.openscience.cdk.renderer.elements.ElementGroup','java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.ShowReactionTitle']]],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "BasicSceneGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.openscience.cdk.renderer.generators.IGenerator');
C$.$classes$=[['ArrowHeadWidth',9],['ShowTooltip',9],['ShowMoleculeTitle',9],['ShowReactionTitle',9],['FitToScreen',9],['Scale',9],['BackgroundColor',9],['BondLength',9],['ForegroundColor',9],['UseAntiAliasing',9],['Margin',9],['UsedFontStyle',9],['FontName',9],['ZoomFactor',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.arrowHeadWidth=Clazz.new_($I$(3,1));
this.showTooltip=Clazz.new_($I$(4,1));
this.showMoleculeTitle=Clazz.new_($I$(5,1));
this.fitToScreen=Clazz.new_($I$(6,1));
this.scale=Clazz.new_($I$(7,1));
this.bondLength=Clazz.new_($I$(8,1));
this.backgroundColor=Clazz.new_($I$(9,1));
this.foregroundColor=Clazz.new_($I$(10,1));
this.useAntiAliasing=Clazz.new_($I$(11,1));
this.margin=Clazz.new_($I$(12,1));
this.fontStyle=Clazz.new_($I$(13,1));
this.fontName=Clazz.new_($I$(14,1));
this.zoomFactor=Clazz.new_($I$(15,1));
},1);

C$.$fields$=[['O',['arrowHeadWidth','org.openscience.cdk.renderer.generators.IGeneratorParameter','showTooltip','org.openscience.cdk.renderer.generators.BasicSceneGenerator.ShowTooltip','showMoleculeTitle','org.openscience.cdk.renderer.generators.BasicSceneGenerator.ShowMoleculeTitle','fitToScreen','org.openscience.cdk.renderer.generators.BasicSceneGenerator.FitToScreen','scale','org.openscience.cdk.renderer.generators.IGeneratorParameter','+bondLength','+backgroundColor','+foregroundColor','+useAntiAliasing','+margin','+fontStyle','+fontName','+zoomFactor']]]

Clazz.newMeth(C$, 'c$',  function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (ac, model) {
return Clazz.new_($I$(16,1));
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(17,"asList$OA",[Clazz.array($I$(18), -1, [this.backgroundColor, this.foregroundColor, this.margin, this.useAntiAliasing, this.fontStyle, this.fontName, this.zoomFactor, this.scale, this.bondLength, this.fitToScreen, this.showMoleculeTitle, this.showTooltip, this.arrowHeadWidth, Clazz.new_($I$(19,1))])]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "ArrowHeadWidth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(10.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "ShowTooltip", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "ShowMoleculeTitle", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "ShowReactionTitle", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "FitToScreen", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "Scale", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "BackgroundColor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(1).WHITE;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "BondLength", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(40.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "ForegroundColor", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "UseAntiAliasing", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "Margin", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Double.valueOf$D(10.0);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "UsedFontStyle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return $I$(2).NORMAL;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "FontName", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return "Arial";
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BasicSceneGenerator, "ZoomFactor", function(){
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
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:36 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
