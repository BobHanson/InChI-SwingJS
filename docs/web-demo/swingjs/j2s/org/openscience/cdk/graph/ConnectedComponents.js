(function(){var P$=Clazz.newPackage("org.openscience.cdk.graph"),p$1={},I$=[[0,'java.util.Arrays']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "ConnectedComponents");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['components','remaining'],'O',['g','int[][]','component','int[]']]]

Clazz.newMeth(C$, 'c$$IAA',  function (g) {
;C$.$init$.apply(this);
this.g=g;
this.component=Clazz.array(Integer.TYPE, [g.length]);
this.remaining=g.length;
for (var i=0; this.remaining > 0 && i < g.length ; i++) if (this.component[i] == 0) p$1.visit$I$I.apply(this, [i, ++this.components]);

}, 1);

Clazz.newMeth(C$, 'visit$I$I',  function (v, c) {
--this.remaining;
this.component[v]=c;
for (var w, $w = 0, $$w = this.g[v]; $w<$$w.length&&((w=($$w[$w])),1);$w++) if (this.component[w] == 0) p$1.visit$I$I.apply(this, [w, c]);

}, p$1);

Clazz.newMeth(C$, 'components$',  function () {
return $I$(1).copyOf$IA$I(this.component, this.component.length);
});

Clazz.newMeth(C$, 'nComponents$',  function () {
return this.components;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:44 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
