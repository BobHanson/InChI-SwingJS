(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SelectionVisibility", null, 'org.openscience.cdk.renderer.SymbolVisibility');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['Z',['showAll'],'O',['delegate','org.openscience.cdk.renderer.SymbolVisibility']]]

Clazz.newMeth(C$, 'c$$org_openscience_cdk_renderer_SymbolVisibility$Z',  function (delegate, showAll) {
Clazz.super_(C$, this);
this.delegate=delegate;
this.showAll=showAll;
}, 1);

Clazz.newMeth(C$, 'disconnected$org_openscience_cdk_renderer_SymbolVisibility',  function (visibility) {
return Clazz.new_(C$.c$$org_openscience_cdk_renderer_SymbolVisibility$Z,[visibility, false]);
}, 1);

Clazz.newMeth(C$, 'all$org_openscience_cdk_renderer_SymbolVisibility',  function (visibility) {
return Clazz.new_(C$.c$$org_openscience_cdk_renderer_SymbolVisibility$Z,[visibility, true]);
}, 1);

Clazz.newMeth(C$, 'visible$org_openscience_cdk_interfaces_IAtom$java_util_List$org_openscience_cdk_renderer_RendererModel',  function (atom, neighbors, model) {
if (C$.isSelected$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel(atom, model) && (this.showAll || !C$.hasSelectedBond$java_util_List$org_openscience_cdk_renderer_RendererModel(neighbors, model) ) ) return true;
return this.delegate.visible$org_openscience_cdk_interfaces_IAtom$java_util_List$org_openscience_cdk_renderer_RendererModel(atom, neighbors, model);
});

Clazz.newMeth(C$, 'isSelected$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel',  function (object, model) {
if (object.getProperty$O("stdgen.highlight.color") != null ) return true;
if (model.getSelection$() != null ) return model.getSelection$().contains$org_openscience_cdk_interfaces_IChemObject(object);
return false;
}, 1);

Clazz.newMeth(C$, 'hasSelectedBond$java_util_List$org_openscience_cdk_renderer_RendererModel',  function (bonds, model) {
for (var bond, $bond = bonds.iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) {
if (C$.isSelected$org_openscience_cdk_interfaces_IChemObject$org_openscience_cdk_renderer_RendererModel(bond, model)) return true;
}
return false;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:30 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
