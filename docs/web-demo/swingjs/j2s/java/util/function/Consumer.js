(function(){var P$=Clazz.newPackage("java.util.function"),I$=[[0,'java.util.Objects']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*i*/var C$=Clazz.newInterface(P$, "Consumer");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'andThen$java_util_function_Consumer',  function (after) {
$I$(1).requireNonNull$O(after);
return ((P$.Consumer$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Consumer$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Consumer', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$O',  function (t) {
this.accept$O(t);
this.$finals$.after.accept$O(t);
});
})()
), Clazz.new_(P$.Consumer$lambda1.$init$,[this, {after:after}]));
});
};})();
;Clazz.setTVer('5.0.1-v4');//Created 2025-02-12 08:28:30 Java2ScriptVisitor version 5.0.1-v4 net.sf.j2s.core.jar version 5.0.1-v4
