// Compiled by ClojureScript 1.7.107 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12219 = arguments.length;
var i__6115__auto___12220 = (0);
while(true){
if((i__6115__auto___12220 < len__6114__auto___12219)){
args__6121__auto__.push((arguments[i__6115__auto___12220]));

var G__12221 = (i__6115__auto___12220 + (1));
i__6115__auto___12220 = G__12221;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((1) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((1)),(0))):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6122__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__12222__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__12222 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__12223__i = 0, G__12223__a = new Array(arguments.length -  0);
while (G__12223__i < G__12223__a.length) {G__12223__a[G__12223__i] = arguments[G__12223__i + 0]; ++G__12223__i;}
  children = new cljs.core.IndexedSeq(G__12223__a,0);
} 
return G__12222__delegate.call(this,children);};
G__12222.cljs$lang$maxFixedArity = 0;
G__12222.cljs$lang$applyTo = (function (arglist__12224){
var children = cljs.core.seq(arglist__12224);
return G__12222__delegate(children);
});
G__12222.cljs$core$IFn$_invoke$arity$variadic = G__12222__delegate;
return G__12222;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

garden.stylesheet.rule.cljs$lang$applyTo = (function (seq12217){
var G__12218 = cljs.core.first.call(null,seq12217);
var seq12217__$1 = cljs.core.next.call(null,seq12217);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic(G__12218,seq12217__$1);
});
garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__12225__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__12225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12226__i = 0, G__12226__a = new Array(arguments.length -  0);
while (G__12226__i < G__12226__a.length) {G__12226__a[G__12226__i] = arguments[G__12226__i + 0]; ++G__12226__i;}
  args = new cljs.core.IndexedSeq(G__12226__a,0);
} 
return G__12225__delegate.call(this,args);};
G__12225.cljs$lang$maxFixedArity = 0;
G__12225.cljs$lang$applyTo = (function (arglist__12227){
var args = cljs.core.seq(arglist__12227);
return G__12225__delegate(args);
});
G__12225.cljs$core$IFn$_invoke$arity$variadic = G__12225__delegate;
return G__12225;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12229 = arguments.length;
var i__6115__auto___12230 = (0);
while(true){
if((i__6115__auto___12230 < len__6114__auto___12229)){
args__6121__auto__.push((arguments[i__6115__auto___12230]));

var G__12231 = (i__6115__auto___12230 + (1));
i__6115__auto___12230 = G__12231;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((0) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((0)),(0))):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__6122__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq12228){
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12228));
});
/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var args12232 = [];
var len__6114__auto___12237 = arguments.length;
var i__6115__auto___12238 = (0);
while(true){
if((i__6115__auto___12238 < len__6114__auto___12237)){
args12232.push((arguments[i__6115__auto___12238]));

var G__12239 = (i__6115__auto___12238 + (1));
i__6115__auto___12238 = G__12239;
continue;
} else {
}
break;
}

var G__12236 = args12232.length;
switch (G__12236) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__6133__auto__ = (new cljs.core.IndexedSeq(args12232.slice((1)),(0)));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6133__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq12233){
var G__12234 = cljs.core.first.call(null,seq12233);
var seq12233__$1 = cljs.core.next.call(null,seq12233);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic(G__12234,seq12233__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);
/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12243 = arguments.length;
var i__6115__auto___12244 = (0);
while(true){
if((i__6115__auto___12244 < len__6114__auto___12243)){
args__6121__auto__.push((arguments[i__6115__auto___12244]));

var G__12245 = (i__6115__auto___12244 + (1));
i__6115__auto___12244 = G__12245;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((1) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((1)),(0))):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6122__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq12241){
var G__12242 = cljs.core.first.call(null,seq12241);
var seq12241__$1 = cljs.core.next.call(null,seq12241);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(G__12242,seq12241__$1);
});
/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12248 = arguments.length;
var i__6115__auto___12249 = (0);
while(true){
if((i__6115__auto___12249 < len__6114__auto___12248)){
args__6121__auto__.push((arguments[i__6115__auto___12249]));

var G__12250 = (i__6115__auto___12249 + (1));
i__6115__auto___12249 = G__12250;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((1) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((1)),(0))):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6122__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq12246){
var G__12247 = cljs.core.first.call(null,seq12246);
var seq12246__$1 = cljs.core.next.call(null,seq12246);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__12247,seq12246__$1);
});
/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map