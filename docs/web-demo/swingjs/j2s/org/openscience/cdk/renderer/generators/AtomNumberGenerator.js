(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators"),I$=[[0,'java.awt.Color','org.openscience.cdk.renderer.color.CDK2DAtomColors','javax.vecmath.Vector2d',['org.openscience.cdk.renderer.generators.AtomNumberGenerator','.AtomNumberTextColor'],['org.openscience.cdk.renderer.generators.AtomNumberGenerator','.WillDrawAtomNumbers'],['org.openscience.cdk.renderer.generators.AtomNumberGenerator','.AtomColorer'],['org.openscience.cdk.renderer.generators.AtomNumberGenerator','.ColorByType'],['org.openscience.cdk.renderer.generators.AtomNumberGenerator','.Offset'],'org.openscience.cdk.renderer.elements.ElementGroup',['org.openscience.cdk.renderer.generators.BasicSceneGenerator','.Scale'],'javax.vecmath.Point2d','org.openscience.cdk.renderer.elements.TextElement','java.util.Arrays','org.openscience.cdk.renderer.generators.IGeneratorParameter']],I$0=I$[0],$I$=function(i,n,m){return m?$I$(i)[n].apply(null,m):((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomNumberGenerator", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.openscience.cdk.renderer.generators.IGenerator');
C$.$classes$=[['AtomNumberTextColor',9],['WillDrawAtomNumbers',9],['AtomColorer',9],['ColorByType',9],['Offset',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.textColor=Clazz.new_($I$(4,1));
this.willDrawAtomNumbers=Clazz.new_($I$(5,1));
this.atomColorer=Clazz.new_($I$(6,1));
this.colorByType=Clazz.new_($I$(7,1));
this.offset=Clazz.new_($I$(8,1));
},1);

C$.$fields$=[['O',['textColor','org.openscience.cdk.renderer.generators.IGeneratorParameter','willDrawAtomNumbers','org.openscience.cdk.renderer.generators.AtomNumberGenerator.WillDrawAtomNumbers','atomColorer','org.openscience.cdk.renderer.generators.IGeneratorParameter','+colorByType','offset','org.openscience.cdk.renderer.generators.AtomNumberGenerator.Offset']]]

Clazz.newMeth(C$, ['generate$org_openscience_cdk_interfaces_IAtomContainer$org_openscience_cdk_renderer_RendererModel','generate$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel'],  function (container, model) {
var numbers=Clazz.new_($I$(9,1));
if ((!((model.getParameter$Class(Clazz.getClass($I$(5))).getValue$()).$c()))) return numbers;
var offset=Clazz.new_([this.offset.getValue$().x, -this.offset.getValue$().y],$I$(3,1).c$$D$D);
offset.scale$D(1 / (model.getParameter$Class(Clazz.getClass($I$(10))).getValue$()).$c());
var number=1;
for (var atom, $atom = container.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) {
var point=Clazz.new_([atom.getPoint2d$()],$I$(11,1).c$$javax_vecmath_Point2d);
point.add$javax_vecmath_Tuple2d(offset);
numbers.add$org_openscience_cdk_renderer_elements_IRenderingElement(Clazz.new_([point.x, point.y, String.valueOf$I(number), this.colorByType.getValue$().booleanValue$() ? this.atomColorer.getValue$().getAtomColor$org_openscience_cdk_interfaces_IAtom(atom) : this.textColor.getValue$()],$I$(12,1).c$$D$D$S$java_awt_Color));
++number;
}
return numbers;
});

Clazz.newMeth(C$, 'getParameters$',  function () {
return $I$(13,"asList$OA",[Clazz.array($I$(14), -1, [this.textColor, this.willDrawAtomNumbers, this.offset, this.atomColorer, this.colorByType])]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.AtomNumberGenerator, "AtomNumberTextColor", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.AtomNumberGenerator, "WillDrawAtomNumbers", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.AtomNumberGenerator, "AtomColorer", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.AtomNumberGenerator, "ColorByType", function(){
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
(function(){/*c*/var C$=Clazz.newClass(P$.AtomNumberGenerator, "Offset", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'org.openscience.cdk.renderer.generators.parameter.AbstractGeneratorParameter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'getDefault$',  function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:28 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
