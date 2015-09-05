// Compiled by ClojureScript 1.7.107 {}
goog.provide('lucuma.util');
goog.require('cljs.core');
goog.require('clojure.string');
/**
 * Injects arg as first argument to f.
 */
lucuma.util.call_with_first_argument = (function lucuma$util$call_with_first_argument(var_args){
var args16168 = [];
var len__6114__auto___16171 = arguments.length;
var i__6115__auto___16172 = (0);
while(true){
if((i__6115__auto___16172 < len__6114__auto___16171)){
args16168.push((arguments[i__6115__auto___16172]));

var G__16173 = (i__6115__auto___16172 + (1));
i__6115__auto___16172 = G__16173;
continue;
} else {
}
break;
}

var G__16170 = args16168.length;
switch (G__16170) {
case 2:
return lucuma.util.call_with_first_argument.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return lucuma.util.call_with_first_argument.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16168.length)].join('')));

}
});

lucuma.util.call_with_first_argument.cljs$core$IFn$_invoke$arity$2 = (function (f,arg){
return lucuma.util.call_with_first_argument.call(null,f,arg,null);
});

lucuma.util.call_with_first_argument.cljs$core$IFn$_invoke$arity$3 = (function (f,arg,args){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY,arg,args));
});

lucuma.util.call_with_first_argument.cljs$lang$maxFixedArity = 3;
lucuma.util.wrap_with_callback_this_value = (function lucuma$util$wrap_with_callback_this_value(f){
return (function() { 
var G__16175__delegate = function (args){
var this$ = this;
return lucuma.util.call_with_first_argument.call(null,f,this$,args);
};
var G__16175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16176__i = 0, G__16176__a = new Array(arguments.length -  0);
while (G__16176__i < G__16176__a.length) {G__16176__a[G__16176__i] = arguments[G__16176__i + 0]; ++G__16176__i;}
  args = new cljs.core.IndexedSeq(G__16176__a,0);
} 
return G__16175__delegate.call(this,args);};
G__16175.cljs$lang$maxFixedArity = 0;
G__16175.cljs$lang$applyTo = (function (arglist__16177){
var args = cljs.core.seq(arglist__16177);
return G__16175__delegate(args);
});
G__16175.cljs$core$IFn$_invoke$arity$variadic = G__16175__delegate;
return G__16175;
})()
;
});
lucuma.util.wrap_to_javascript = (function lucuma$util$wrap_to_javascript(f){
return (function() { 
var G__16178__delegate = function (args){
return cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.js__GT_clj,args)));
};
var G__16178 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16179__i = 0, G__16179__a = new Array(arguments.length -  0);
while (G__16179__i < G__16179__a.length) {G__16179__a[G__16179__i] = arguments[G__16179__i + 0]; ++G__16179__i;}
  args = new cljs.core.IndexedSeq(G__16179__a,0);
} 
return G__16178__delegate.call(this,args);};
G__16178.cljs$lang$maxFixedArity = 0;
G__16178.cljs$lang$applyTo = (function (arglist__16180){
var args = cljs.core.seq(arglist__16180);
return G__16178__delegate(args);
});
G__16178.cljs$core$IFn$_invoke$arity$variadic = G__16178__delegate;
return G__16178;
})()
;
});
/**
 * Returns true if provided string is a valid JavaScript identifier.
 *   Rulls out a number a false negative for simplicity sake.
 * 
 *   More info: http://mathiasbynens.be/notes/javascript-identifiers
 * 
 *   Note that _ is forbidden but - is allowed. Translation between both is done at the JS <-> CLJS layer.
 */
lucuma.util.valid_identifier_QMARK_ = (function lucuma$util$valid_identifier_QMARK_(s){
return !((cljs.core.re_matches.call(null,/^[a-zA-Z\-$][0-9a-zA-Z\-$]*$/,s) == null));
});
lucuma.util.valid_standard_element_name_QMARK_ = (function lucuma$util$valid_standard_element_name_QMARK_(n){
if(cljs.core.truth_(n)){
return cljs.core._EQ_.call(null,(-1),cljs.core.name.call(null,n).indexOf("-"));
} else {
return null;
}
});
lucuma.util.warn = (function lucuma$util$warn(s){
return console.warn(cljs.core.clj__GT_js.call(null,s));
});

//# sourceMappingURL=util.js.map