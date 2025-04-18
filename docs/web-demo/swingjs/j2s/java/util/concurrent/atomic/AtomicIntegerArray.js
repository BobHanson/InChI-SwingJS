(function(){var P$=Clazz.newPackage("java.util.concurrent.atomic"),p$1={},I$=[[0,'sun.misc.Unsafe','Error','StringBuilder']],I$0=I$[0],$I$=function(i,n){return((i=(I$[i]||(I$[i]=Clazz.load(I$0[i])))),!n&&i.$load$&&Clazz.load(i,2),i)};
/*c*/var C$=Clazz.newClass(P$, "AtomicIntegerArray", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
},1);

C$.$fields$=[['O',['array','int[]']]
,['I',['base','shift'],'O',['unsafe','sun.misc.Unsafe']]]

Clazz.newMeth(C$, 'checkedByteOffset$I',  function (i) {
if (i < 0 || i >= this.array.length ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["index " + i]);
return C$.byteOffset$I(i);
}, p$1);

Clazz.newMeth(C$, 'byteOffset$I',  function (i) {
return Long.$add((Long.$sl(i,C$.shift)),C$.base);
}, 1);

Clazz.newMeth(C$, 'c$$I',  function (length) {
;C$.$init$.apply(this);
this.array=Clazz.array(Integer.TYPE, [length]);
}, 1);

Clazz.newMeth(C$, 'c$$IA',  function (array) {
;C$.$init$.apply(this);
this.array=array.clone$();
}, 1);

Clazz.newMeth(C$, 'length$',  function () {
return this.array.length;
});

Clazz.newMeth(C$, 'get$I',  function (i) {
return p$1.getRaw$J.apply(this, [p$1.checkedByteOffset$I.apply(this, [i])]);
});

Clazz.newMeth(C$, 'getRaw$J',  function (offset) {
return C$.unsafe.getIntVolatile$O$J(this.array, offset);
}, p$1);

Clazz.newMeth(C$, 'set$I$I',  function (i, newValue) {
C$.unsafe.putIntVolatile$O$J$I(this.array, p$1.checkedByteOffset$I.apply(this, [i]), newValue);
});

Clazz.newMeth(C$, 'lazySet$I$I',  function (i, newValue) {
C$.unsafe.putOrderedInt$O$J$I(this.array, p$1.checkedByteOffset$I.apply(this, [i]), newValue);
});

Clazz.newMeth(C$, 'getAndSet$I$I',  function (i, newValue) {
return C$.unsafe.getAndSetInt$O$J$I(this.array, p$1.checkedByteOffset$I.apply(this, [i]), newValue);
});

Clazz.newMeth(C$, 'compareAndSet$I$I$I',  function (i, expect, update) {
return p$1.compareAndSetRaw$J$I$I.apply(this, [p$1.checkedByteOffset$I.apply(this, [i]), expect, update]);
});

Clazz.newMeth(C$, 'compareAndSetRaw$J$I$I',  function (offset, expect, update) {
return C$.unsafe.compareAndSwapInt$O$J$I$I(this.array, offset, expect, update);
}, p$1);

Clazz.newMeth(C$, 'weakCompareAndSet$I$I$I',  function (i, expect, update) {
return this.compareAndSet$I$I$I(i, expect, update);
});

Clazz.newMeth(C$, 'getAndIncrement$I',  function (i) {
return this.getAndAdd$I$I(i, 1);
});

Clazz.newMeth(C$, 'getAndDecrement$I',  function (i) {
return this.getAndAdd$I$I(i, -1);
});

Clazz.newMeth(C$, 'getAndAdd$I$I',  function (i, delta) {
return C$.unsafe.getAndAddInt$O$J$I(this.array, p$1.checkedByteOffset$I.apply(this, [i]), delta);
});

Clazz.newMeth(C$, 'incrementAndGet$I',  function (i) {
return this.getAndAdd$I$I(i, 1) + 1;
});

Clazz.newMeth(C$, 'decrementAndGet$I',  function (i) {
return this.getAndAdd$I$I(i, -1) - 1;
});

Clazz.newMeth(C$, 'addAndGet$I$I',  function (i, delta) {
return this.getAndAdd$I$I(i, delta) + delta;
});

Clazz.newMeth(C$, 'getAndUpdate$I$java_util_function_IntUnaryOperator',  function (i, updateFunction) {
var offset=p$1.checkedByteOffset$I.apply(this, [i]);
var prev;
var next;
do {
prev=p$1.getRaw$J.apply(this, [offset]);
next=updateFunction.applyAsInt$I(prev);
} while (!p$1.compareAndSetRaw$J$I$I.apply(this, [offset, prev, next]));
return prev;
});

Clazz.newMeth(C$, 'updateAndGet$I$java_util_function_IntUnaryOperator',  function (i, updateFunction) {
var offset=p$1.checkedByteOffset$I.apply(this, [i]);
var prev;
var next;
do {
prev=p$1.getRaw$J.apply(this, [offset]);
next=updateFunction.applyAsInt$I(prev);
} while (!p$1.compareAndSetRaw$J$I$I.apply(this, [offset, prev, next]));
return next;
});

Clazz.newMeth(C$, 'getAndAccumulate$I$I$java_util_function_IntBinaryOperator',  function (i, x, accumulatorFunction) {
var offset=p$1.checkedByteOffset$I.apply(this, [i]);
var prev;
var next;
do {
prev=p$1.getRaw$J.apply(this, [offset]);
next=accumulatorFunction.applyAsInt$I$I(prev, x);
} while (!p$1.compareAndSetRaw$J$I$I.apply(this, [offset, prev, next]));
return prev;
});

Clazz.newMeth(C$, 'accumulateAndGet$I$I$java_util_function_IntBinaryOperator',  function (i, x, accumulatorFunction) {
var offset=p$1.checkedByteOffset$I.apply(this, [i]);
var prev;
var next;
do {
prev=p$1.getRaw$J.apply(this, [offset]);
next=accumulatorFunction.applyAsInt$I$I(prev, x);
} while (!p$1.compareAndSetRaw$J$I$I.apply(this, [offset, prev, next]));
return next;
});

Clazz.newMeth(C$, 'toString',  function () {
var iMax=this.array.length - 1;
if (iMax == -1) return "[]";
var b=Clazz.new_($I$(3,1));
b.append$C("[");
for (var i=0; ; i++) {
b.append$I(p$1.getRaw$J.apply(this, [C$.byteOffset$I(i)]));
if (i == iMax) return b.append$C("]").toString();
b.append$C(",").append$C(" ");
}
});

C$.$static$=function(){C$.$static$=0;
C$.unsafe=$I$(1).getUnsafe$();
C$.base=C$.unsafe.arrayBaseOffset$Class(Clazz.array(Integer.TYPE, -1));
{
var scale=C$.unsafe.arrayIndexScale$Class(Clazz.array(Integer.TYPE, -1));
if ((scale & (scale - 1)) != 0) throw Clazz.new_($I$(2,1).c$$S,["data type scale not a power of two"]);
C$.shift=31 - Integer.numberOfLeadingZeros$I(scale);
};
};

Clazz.newMeth(C$);
})();
;Clazz.setTVer('5.0.1-v5');//Created 2025-03-05 22:16:16 Java2ScriptVisitor version 5.0.1-v5 net.sf.j2s.core.jar version 5.0.1-v5
