// Compiled by ClojureScript 1.7.107 {}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12391 = arguments.length;
var i__6115__auto___12392 = (0);
while(true){
if((i__6115__auto___12392 < len__6114__auto___12391)){
args__6121__auto__.push((arguments[i__6115__auto___12392]));

var G__12393 = (i__6115__auto___12392 + (1));
i__6115__auto___12392 = G__12393;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((1) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((1)),(0))):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6122__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq12389){
var G__12390 = cljs.core.first.call(null,seq12389);
var seq12389__$1 = cljs.core.next.call(null,seq12389);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__12390,seq12389__$1);
});

/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__5711__auto__ = (((this$ == null))?null:this$);
var m__5712__auto__ = (garden.util.to_str[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,this$);
} else {
var m__5712__auto____$1 = (garden.util.to_str["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = true;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

(garden.util.ToString["_"] = true);

(garden.util.to_str["_"] = (function (this$){
return [cljs.core.str(this$)].join('');
}));

(garden.util.ToString["null"] = true);

(garden.util.to_str["null"] = (function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12395 = arguments.length;
var i__6115__auto___12396 = (0);
while(true){
if((i__6115__auto___12396 < len__6114__auto___12395)){
args__6121__auto__.push((arguments[i__6115__auto___12396]));

var G__12397 = (i__6115__auto___12396 + (1));
i__6115__auto___12396 = G__12397;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((0) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((0)),(0))):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__6122__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq12394){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12394));
});
/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12402 = arguments.length;
var i__6115__auto___12403 = (0);
while(true){
if((i__6115__auto___12403 < len__6114__auto___12402)){
args__6121__auto__.push((arguments[i__6115__auto___12403]));

var G__12404 = (i__6115__auto___12403 + (1));
i__6115__auto___12403 = G__12404;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((1) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((1)),(0))):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6122__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__12400){
var vec__12401 = p__12400;
var radix = cljs.core.nth.call(null,vec__12401,(0),null);
var radix__$1 = (function (){var or__5056__auto__ = radix;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq12398){
var G__12399 = cljs.core.first.call(null,seq12398);
var seq12398__$1 = cljs.core.next.call(null,seq12398);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__12399,seq12398__$1);
});
/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12409 = arguments.length;
var i__6115__auto___12410 = (0);
while(true){
if((i__6115__auto___12410 < len__6114__auto___12409)){
args__6121__auto__.push((arguments[i__6115__auto___12410]));

var G__12411 = (i__6115__auto___12410 + (1));
i__6115__auto___12410 = G__12411;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((1) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((1)),(0))):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6122__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__12407){
var vec__12408 = p__12407;
var radix = cljs.core.nth.call(null,vec__12408,(0),null);
var radix__$1 = (function (){var or__5056__auto__ = radix;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq12405){
var G__12406 = cljs.core.first.call(null,seq12405);
var seq12405__$1 = cljs.core.next.call(null,seq12405);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__12406,seq12405__$1);
});
/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__5828__auto__ = (function garden$util$comma_join_$_iter__12416(s__12417){
return (new cljs.core.LazySeq(null,(function (){
var s__12417__$1 = s__12417;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12417__$1);
if(temp__4425__auto__){
var s__12417__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12417__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__12417__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__12419 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__12418 = (0);
while(true){
if((i__12418 < size__5827__auto__)){
var x = cljs.core._nth.call(null,c__5826__auto__,i__12418);
cljs.core.chunk_append.call(null,b__12419,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)));

var G__12420 = (i__12418 + (1));
i__12418 = G__12420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12419),garden$util$comma_join_$_iter__12416.call(null,cljs.core.chunk_rest.call(null,s__12417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12419),null);
}
} else {
var x = cljs.core.first.call(null,s__12417__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?garden.util.space_join.call(null,x):garden.util.to_str.call(null,x)),garden$util$comma_join_$_iter__12416.call(null,cljs.core.rest.call(null,s__12417__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5828__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str("\""),cljs.core.str(s),cljs.core.str("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_.call(null,x)) && (!(cljs.core.record_QMARK_.call(null,x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__5044__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__5044__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__5044__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__5044__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__5044__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__5044__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__5044__auto__ = garden.util.at_rule_QMARK_.call(null,x);
if(cljs.core.truth_(and__5044__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__5044__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str(p__$1),cljs.core.str(s)].join('');
} else {
return [cljs.core.str(p__$1),cljs.core.str("-"),cljs.core.str(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return garden.util.prefix.call(null,p__$1,s);
} else {
return garden.util.prefix.call(null,[cljs.core.str("-"),cljs.core.str(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_.call(null,n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__5394__auto__ = a;
var y__5395__auto__ = b;
return ((x__5394__auto__ < y__5395__auto__) ? x__5394__auto__ : y__5395__auto__);
})();
var top = (function (){var x__5387__auto__ = a;
var y__5388__auto__ = b;
return ((x__5387__auto__ > y__5388__auto__) ? x__5387__auto__ : y__5388__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__12422 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__12422,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__12422,(1),null);
var x__5387__auto__ = a__$1;
var y__5388__auto__ = (function (){var x__5394__auto__ = b__$1;
var y__5395__auto__ = n;
return ((x__5394__auto__ < y__5395__auto__) ? x__5394__auto__ : y__5395__auto__);
})();
return ((x__5387__auto__ > y__5388__auto__) ? x__5387__auto__ : y__5388__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12426 = arguments.length;
var i__6115__auto___12427 = (0);
while(true){
if((i__6115__auto___12427 < len__6114__auto___12426)){
args__6121__auto__.push((arguments[i__6115__auto___12427]));

var G__12428 = (i__6115__auto___12427 + (1));
i__6115__auto___12427 = G__12428;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((2) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((2)),(0))):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__6122__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq12423){
var G__12424 = cljs.core.first.call(null,seq12423);
var seq12423__$1 = cljs.core.next.call(null,seq12423);
var G__12425 = cljs.core.first.call(null,seq12423__$1);
var seq12423__$2 = cljs.core.next.call(null,seq12423__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__12424,G__12425,seq12423__$2);
});
/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12430 = arguments.length;
var i__6115__auto___12431 = (0);
while(true){
if((i__6115__auto___12431 < len__6114__auto___12430)){
args__6121__auto__.push((arguments[i__6115__auto___12431]));

var G__12432 = (i__6115__auto___12431 + (1));
i__6115__auto___12431 = G__12432;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((0) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((0)),(0))):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__6122__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__4423__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__4423__auto__){
var rst = temp__4423__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__12433 = (i - (1));
var G__12434 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__12433;
v_seqs__$2 = G__12434;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq12429){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12429));
});

//# sourceMappingURL=util.js.map