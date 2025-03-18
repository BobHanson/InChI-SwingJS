(function(){var P$=Clazz.newPackage("org.openscience.cdk.tools.manipulator"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RingManipulator");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

Clazz.newMeth(C$, 'markAromaticRings$org_openscience_cdk_interfaces_IRing',  function (ring) {
for (var atom, $atom = ring.atoms$().iterator$(); $atom.hasNext$()&&((atom=($atom.next$())),1);) if (!atom.getFlag$I(32)) return;

for (var bond, $bond = ring.bonds$().iterator$(); $bond.hasNext$()&&((bond=($bond.next$())),1);) if (!bond.getFlag$I(32)) return;

ring.setFlag$I$Z(32, true);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-08 21:24:52 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
