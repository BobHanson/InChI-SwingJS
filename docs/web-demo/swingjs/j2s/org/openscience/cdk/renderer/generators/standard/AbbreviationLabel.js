(function(){var P$=Clazz.newPackage("org.openscience.cdk.renderer.generators.standard"),I$=[[0,['org.openscience.cdk.renderer.generators.standard.AbbreviationLabel','.Trie'],'org.openscience.cdk.config.Elements','java.util.Collections','java.util.ArrayDeque','java.util.ArrayList',['org.openscience.cdk.renderer.generators.standard.AbbreviationLabel','.FormattedText']]],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AbbreviationLabel", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['FormattedText',24],['Trie',26]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[[]
,['O',['PREFIX_LIST','String[]','+ITAL_PREFIX','+SYMBOL_LIST','PREFIX_TRIE','org.openscience.cdk.renderer.generators.standard.AbbreviationLabel.Trie','+ITAL_PREFIX_TRIE','+SYMBOL_TRIE']]]

Clazz.newMeth(C$, 'parse$S$java_util_List',  function (label, tokens) {
var i=0;
var len=label.length$();
while (i < len){
var st=i;
var last;
var c=label.charAt$I(i);
if (c == "(" || c == ")" ) {
tokens.add$O(Character.toString$C(c));
++i;
if (c == ")") {
st=i;
while (i < len && C$.isDigit$C(c=label.charAt$I(i)) ){
++i;
}
if (i > st) tokens.add$O(label.substring$I$I(st, i));
}continue;
}if (c == "/" || c == "\u00b7"  || c == "."  || c == "\u2022"  || c == "=" ) {
tokens.add$O(Character.toString$C(c));
++i;
var beg=i;
while (i < label.length$() && C$.isDigit$C(label.charAt$I(i)) ){
++i;
}
if (i > beg) tokens.add$O(label.substring$I$I(beg, i));
continue;
}if ((last=C$.findPrefix$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I$I(C$.PREFIX_TRIE, label, i, -1)) > 0) {
i+=(last - i);
}var symSt=i;
if ((last=C$.findPrefix$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I$I(C$.SYMBOL_TRIE, label, i, -1)) > 0) {
if (last + 1 < label.length$() && label.charAt$I(last - 1) == "t"  && label.charAt$I(last) == "B"  && label.charAt$I(last + 1) == "u" ) {
--last;
}i+=(last - i);
while (i < len && C$.isDigit$C(label.charAt$I(i)) ){
++i;
}
} else if (i == st && st > 0 ) {
c=C$.norm$C(label.charAt$I(i));
if (c == "-" || c == "+" ) {
++i;
while (i < len && C$.isDigit$C(label.charAt$I(i)) ){
++i;
}
if (i < len) {
return C$.failParse$S$java_util_List(label, tokens);
}}}if (i == st || i == symSt ) {
return C$.failParse$S$java_util_List(label, tokens);
}tokens.add$O(label.substring$I$I(st, i));
}
return true;
}, 1);

Clazz.newMeth(C$, 'failParse$S$java_util_List',  function (label, tokens) {
tokens.clear$();
tokens.add$O(label);
return false;
}, 1);

Clazz.newMeth(C$, 'isNumber$S',  function (str) {
for (var i=0; i < str.length$(); i++) if (!C$.isDigit$C(str.charAt$I(i))) return false;

return true;
}, 1);

Clazz.newMeth(C$, 'reverse$java_util_List',  function (tokens) {
$I$(3).reverse$java_util_List(tokens);
var numbers=Clazz.new_($I$(4,1));
for (var i=0; i < tokens.size$(); i++) {
var token=tokens.get$I(i);
if (token.equals$O("(")) {
tokens.set$I$O(i, ")");
var num=numbers.pop$();
if (!num.isEmpty$()) {
tokens.add$I$O(i + 1, num);
++i;
}} else if (token.equals$O(")")) {
tokens.set$I$O(i, "(");
if (i > 0 && C$.isNumber$S(tokens.get$I(i - 1)) ) {
numbers.push$O(tokens.remove$I(i - 1));
--i;
} else {
numbers.push$O("");
}}}
}, 1);

Clazz.newMeth(C$, 'format$java_util_List',  function (tokens) {
var texts=Clazz.new_([2 + tokens.size$()],$I$(5,1).c$$I);
for (var token, $token = tokens.iterator$(); $token.hasNext$()&&((token=($token.next$())),1);) {
if (C$.isChargeToken$S(token)) {
var sign=Character.toString$C(C$.norm$C(token.charAt$I(0)));
var coef=token.length$() > 1 ? token.substring$I(1) : "";
if (sign.equals$O("-")) sign="\u2212";
texts.add$O(Clazz.new_($I$(6,1).c$$S$I,[coef + sign, 1]));
} else if (token.length$() == 1 && C$.isDigit$C(token.charAt$I(0))  && !texts.isEmpty$()  && texts.get$I(texts.size$() - 1).text.equals$O(")") ) {
texts.add$O(Clazz.new_($I$(6,1).c$$S$I,[token, -1]));
} else {
var i=C$.findPrefix$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I$I(C$.ITAL_PREFIX_TRIE, token, 0, 0);
var j=token.length$();
while (j > 0 && C$.isDigit$C(token.charAt$I(j - 1)) )--j;

if (j > 0 && j < token.length$() ) {
if (i > j) i=0;
if (i > 0) texts.add$O(Clazz.new_([token.substring$I$I(0, i), 2],$I$(6,1).c$$S$I));
texts.add$O(Clazz.new_([token.substring$I$I(i, j), 0],$I$(6,1).c$$S$I));
texts.add$O(Clazz.new_([token.substring$I(j), -1],$I$(6,1).c$$S$I));
} else {
if (i > 0) texts.add$O(Clazz.new_([token.substring$I$I(0, i), 2],$I$(6,1).c$$S$I));
texts.add$O(Clazz.new_([token.substring$I(i), 0],$I$(6,1).c$$S$I));
}}}
return texts;
}, 1);

Clazz.newMeth(C$, 'reduce$java_util_List$I$I',  function (texts, from, to) {
var tmp=Clazz.new_([texts.size$()],$I$(5,1).c$$I);
var prev=null;
tmp.addAll$java_util_Collection(texts.subList$I$I(0, from));
for (var curr, $curr = texts.subList$I$I(from, to).iterator$(); $curr.hasNext$()&&((curr=($curr.next$())),1);) {
if (prev == null  || prev.style != curr.style ) {
tmp.add$O(prev=curr);
} else {
prev.text+=curr.text;
}}
tmp.addAll$java_util_Collection(texts.subList$I$I(to, texts.size$()));
texts.clear$();
texts.addAll$java_util_Collection(tmp);
}, 1);

Clazz.newMeth(C$, 'isChargeToken$S',  function (token) {
return token.length$() > 0 && (C$.norm$C(token.charAt$I(0)) == "-" || token.charAt$I(0) == "+" ) ;
}, 1);

Clazz.newMeth(C$, 'isDigit$C',  function (c) {
return c >= "0" && c <= "9" ;
}, 1);

Clazz.newMeth(C$, 'norm$C',  function (c) {
switch (c.$c()) {
case 45:
case 8210:
case 8211:
case 8212:
case 8722:
return "-";
default:
return c;
}
}, 1);

Clazz.newMeth(C$, 'findPrefix$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I$I',  function (trie, string, i, best) {
if (trie == null ) return best;
if (trie.token != null ) best=i;
if (i == string.length$()) return best;
var c=C$.norm$C(string.charAt$I(i));
if (c.$c() > 128 ) return best;
return C$.findPrefix$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I$I(trie.children[c.$c()], string, i + 1, best);
}, 1);

Clazz.newMeth(C$, 'insert$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I',  function (trie, str, i) {
if (trie == null ) trie=Clazz.new_($I$(1,1));
if (i == str.length$()) {
trie.token=str;
} else {
var c=str.charAt$I(i);
trie.children[c.$c()]=C$.insert$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I(trie.children[c.$c()], str, i + 1);
}return trie;
}, 1);

C$.$static$=function(){C$.$static$=0;
C$.PREFIX_LIST=Clazz.array(String, -1, ["n", "norm", "n-", "c", "cy", "cyc", "cyclo", "c-", "cy-", "cyc-", "i", "iso", "i-", "t", "tert", "t-", "s", "sec", "s-", "o", "ortho", "o-", "m", "meta", "m-", "p", "para", "p-", "1-", "2-", "3-", "4-", "5-", "6-", "7-", "8-", "9-"]);
C$.ITAL_PREFIX=Clazz.array(String, -1, ["n", "norm", "sec", "s", "tert", "t", "ortho", "o", "meta", "m", "para", "p"]);
C$.SYMBOL_LIST=Clazz.array(String, -1, ["acac", "amphos", "Ace", "Acetyl", "Acyl", "Ad", "All", "Alloc", "Allyl", "Amyl", "AOC", "BDMS", "Benzoyl", "Benzyl", "Bn", "BOC", "Boc", "BOM", "bpy", "Bromo", "Bs", "BPin", "Bpin", "Bu", "But", "Butyl", "Bz", "Bzl", "Car", "Cbz", "Chloro", "CoA", "Cy", "dppf", "dppp", "dba", "dtbpf", "D", "Dan", "Dansyl", "DEIPS", "DEM", "Dip", "Dmb", "DPA", "DTBMS", "EE", "EOM", "Et", "Ethyl", "Fluoro", "FMOC", "Fmoc", "Formyl", "Heptyl", "Hexyl", "Iodo", "IPDMS", "Me", "MEM", "Mesityl", "Mesyl", "Methoxy", "Methyl", "MOM", "Ms", "Nitro", "Oct", "Octyl", "PAB", "Pentyl", "Ph", "Phenyl", "Pivaloyl", "PMB", "Pro", "Propargyl", "Propyl", "Pv", "R", "SEM", "T", "TBS", "TBDMS", "Trt", "TBDPS", "TES", "Tf", "THP", "THPO", "TIPS", "TMS", "Tos", "Tol", "Tosyl", "Tr", "Troc", "Vinyl", "Voc", "Z"]);
C$.PREFIX_TRIE=Clazz.new_($I$(1,1));
C$.ITAL_PREFIX_TRIE=Clazz.new_($I$(1,1));
C$.SYMBOL_TRIE=Clazz.new_($I$(1,1));
{
for (var str, $str = 0, $$str = C$.PREFIX_LIST; $str<$$str.length&&((str=($$str[$str])),1);$str++) C$.insert$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I(C$.PREFIX_TRIE, str, 0);

for (var str, $str = 0, $$str = C$.ITAL_PREFIX; $str<$$str.length&&((str=($$str[$str])),1);$str++) C$.insert$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I(C$.ITAL_PREFIX_TRIE, str, 0);

for (var elem, $elem = 0, $$elem = $I$(2).values$(); $elem<$$elem.length&&((elem=($$elem[$elem])),1);$elem++) if (!elem.symbol$().isEmpty$()) C$.insert$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I(C$.SYMBOL_TRIE, elem.symbol$(), 0);

for (var str, $str = 0, $$str = C$.SYMBOL_LIST; $str<$$str.length&&((str=($$str[$str])),1);$str++) C$.insert$org_openscience_cdk_renderer_generators_standard_AbbreviationLabel_Trie$S$I(C$.SYMBOL_TRIE, str, 0);

};
};
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbbreviationLabel, "FormattedText", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['I',['style'],'S',['text']]]

Clazz.newMeth(C$, 'c$$S$I',  function (text, style) {
;C$.$init$.apply(this);
this.text=text;
this.style=style;
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbbreviationLabel, "Trie", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.children=Clazz.array(C$, [128]);
},1);

C$.$fields$=[['S',['token'],'O',['children','org.openscience.cdk.renderer.generators.standard.AbbreviationLabel.Trie[]']]]

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v6');//Created 2025-03-10 15:41:27 Java2ScriptVisitor version 5.0.1-v6 net.sf.j2s.core.jar version 5.0.1-v6
