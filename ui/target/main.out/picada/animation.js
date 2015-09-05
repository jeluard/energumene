// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.animation');
goog.require('cljs.core');
goog.require('lucuma.core');
picada.animation.animations = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
picada.animation.register_animation = (function picada$animation$register_animation(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12466 = arguments.length;
var i__6115__auto___12467 = (0);
while(true){
if((i__6115__auto___12467 < len__6114__auto___12466)){
args__6121__auto__.push((arguments[i__6115__auto___12467]));

var G__12468 = (i__6115__auto___12467 + (1));
i__6115__auto___12467 = G__12468;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((0) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((0)),(0))):null);
return picada.animation.register_animation.cljs$core$IFn$_invoke$arity$variadic(argseq__6122__auto__);
});

picada.animation.register_animation.cljs$core$IFn$_invoke$arity$variadic = (function (p__12464){
var vec__12465 = p__12464;
var k = cljs.core.nth.call(null,vec__12465,(0),null);
var a = cljs.core.nth.call(null,vec__12465,(1),null);
return cljs.core.swap_BANG_.call(null,picada.animation.animations,cljs.core.assoc,k,a);
});

picada.animation.register_animation.cljs$lang$maxFixedArity = (0);

picada.animation.register_animation.cljs$lang$applyTo = (function (seq12463){
return picada.animation.register_animation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12463));
});
picada.animation.register_animations = (function picada$animation$register_animations(m){
var seq__12475 = cljs.core.seq.call(null,m);
var chunk__12476 = null;
var count__12477 = (0);
var i__12478 = (0);
while(true){
if((i__12478 < count__12477)){
var vec__12479 = cljs.core._nth.call(null,chunk__12476,i__12478);
var k = cljs.core.nth.call(null,vec__12479,(0),null);
var v = cljs.core.nth.call(null,vec__12479,(1),null);
picada.animation.register_animation.call(null,k,v);

var G__12481 = seq__12475;
var G__12482 = chunk__12476;
var G__12483 = count__12477;
var G__12484 = (i__12478 + (1));
seq__12475 = G__12481;
chunk__12476 = G__12482;
count__12477 = G__12483;
i__12478 = G__12484;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12475);
if(temp__4425__auto__){
var seq__12475__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12475__$1)){
var c__5859__auto__ = cljs.core.chunk_first.call(null,seq__12475__$1);
var G__12485 = cljs.core.chunk_rest.call(null,seq__12475__$1);
var G__12486 = c__5859__auto__;
var G__12487 = cljs.core.count.call(null,c__5859__auto__);
var G__12488 = (0);
seq__12475 = G__12485;
chunk__12476 = G__12486;
count__12477 = G__12487;
i__12478 = G__12488;
continue;
} else {
var vec__12480 = cljs.core.first.call(null,seq__12475__$1);
var k = cljs.core.nth.call(null,vec__12480,(0),null);
var v = cljs.core.nth.call(null,vec__12480,(1),null);
picada.animation.register_animation.call(null,k,v);

var G__12489 = cljs.core.next.call(null,seq__12475__$1);
var G__12490 = null;
var G__12491 = (0);
var G__12492 = (0);
seq__12475 = G__12489;
chunk__12476 = G__12490;
count__12477 = G__12491;
i__12478 = G__12492;
continue;
}
} else {
return null;
}
}
break;
}
});
picada.animation.register_animations.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"slide-in-up","slide-in-up",-645171455),new cljs.core.Keyword(null,"left-exit","left-exit",454551908),new cljs.core.Keyword(null,"slide-out-down","slide-out-down",-1748797819),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.Keyword(null,"overlay-entry","overlay-entry",-1433911094),new cljs.core.Keyword(null,"snackbar-exit","snackbar-exit",-618507606),new cljs.core.Keyword(null,"left-entry","left-entry",-1420769554),new cljs.core.Keyword(null,"slide-in-down","slide-in-down",1702515694),new cljs.core.Keyword(null,"delayed-entry","delayed-entry",-363683473),new cljs.core.Keyword(null,"slide-out-up","slide-out-up",-1738481101),new cljs.core.Keyword(null,"zoom-out","zoom-out",681508467),new cljs.core.Keyword(null,"overlay-exit","overlay-exit",2083126003),new cljs.core.Keyword(null,"zoom-in","zoom-in",1242180949),new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.Keyword(null,"snackbar-entry","snackbar-entry",-1137243906)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(100%)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"transform","transform",1381301764),"none"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"none"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-100%)"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(300),new cljs.core.Keyword(null,"easing","easing",735372043),"cubic-bezier(.37, .15, .32, .94)"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"transform","transform",1381301764),"none"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-100%)"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-50px)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(0)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(500),new cljs.core.Keyword(null,"delay","delay",-574225219),(500)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.6], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200),new cljs.core.Keyword(null,"easing","easing",735372043),"ease-in-out"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"12px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-100px"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(300),new cljs.core.Keyword(null,"easing","easing",735372043),"ease-in-out"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-100%)"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"none"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(300),new cljs.core.Keyword(null,"easing","easing",735372043),"cubic-bezier(.37, .15, .32, .94)"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(-100%)"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"transform","transform",1381301764),"none"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0)"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1)"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000),new cljs.core.Keyword(null,"easing","easing",735372043),"cubic-bezier(0.4, 0, 0.2, 1)"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(1),new cljs.core.Keyword(null,"transform","transform",1381301764),"none"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(100%)"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1)"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.5)"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(100),new cljs.core.Keyword(null,"easing","easing",735372043),"ease-in-out"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),0.6], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(200),new cljs.core.Keyword(null,"easing","easing",735372043),"ease-in-out"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.5)"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1)"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(100)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(0)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translateY(50px)",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0)], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(500)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frames","frames",1765687497),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-100px"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"12px"], null)], null),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"duration","duration",1444101068),(300),new cljs.core.Keyword(null,"easing","easing",735372043),"ease-in-out"], null)], null)]));
picada.animation.default_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"duration","duration",1444101068),(1000)], null);
picada.animation.all = (function picada$animation$all(){
return cljs.core.keys.call(null,cljs.core.deref.call(null,picada.animation.animations));
});
goog.exportSymbol('picada.animation.all', picada.animation.all);
picada.animation.get_animation = (function picada$animation$get_animation(s){
if(cljs.core.truth_(s)){
var or__5056__auto__ = cljs.core.keyword.call(null,s).call(null,cljs.core.deref.call(null,picada.animation.animations));
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return console.warn([cljs.core.str("Unknown animation <"),cljs.core.str(s),cljs.core.str(">")].join(''));
}
} else {
return null;
}
});
picada.animation.animate = (function picada$animation$animate(el,k){
var o = picada.animation.get_animation.call(null,k);
var frames = (function (){var or__5056__auto__ = new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return o;
}
})();
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(o);
if(cljs.core.truth_(options)){
return el.animate(cljs.core.clj__GT_js.call(null,frames),cljs.core.clj__GT_js.call(null,options));
} else {
return el.animate(cljs.core.clj__GT_js.call(null,frames),cljs.core.clj__GT_js.call(null,picada.animation.default_options));
}
});
picada.animation.animate_property = (function picada$animation$animate_property(el,k,f){
var temp__4423__auto___12493 = k.call(null,lucuma.core.get_properties.call(null,el));
if(cljs.core.truth_(temp__4423__auto___12493)){
var p_12494 = temp__4423__auto___12493;
window.requestAnimationFrame(((function (p_12494,temp__4423__auto___12493){
return (function (){
return picada.animation.animate.call(null,el,p_12494).addEventListener("finish",f);
});})(p_12494,temp__4423__auto___12493))
);
} else {
if(cljs.core.truth_(f)){
f.call(null);
} else {
}
}

return el;
});
picada.animation.dismiss = (function picada$animation$dismiss(var_args){
var args12495 = [];
var len__6114__auto___12498 = arguments.length;
var i__6115__auto___12499 = (0);
while(true){
if((i__6115__auto___12499 < len__6114__auto___12498)){
args12495.push((arguments[i__6115__auto___12499]));

var G__12500 = (i__6115__auto___12499 + (1));
i__6115__auto___12499 = G__12500;
continue;
} else {
}
break;
}

var G__12497 = args12495.length;
switch (G__12497) {
case 1:
return picada.animation.dismiss.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return picada.animation.dismiss.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12495.length)].join('')));

}
});

picada.animation.dismiss.cljs$core$IFn$_invoke$arity$1 = (function (el){
return picada.animation.dismiss.call(null,el,null);
});

picada.animation.dismiss.cljs$core$IFn$_invoke$arity$2 = (function (el,f){
return picada.animation.animate_property.call(null,el,new cljs.core.Keyword(null,"animation-exit","animation-exit",712187291),(function (){
if(cljs.core.truth_(f)){
f.call(null,el);
} else {
}

return el.remove();
}));
});

picada.animation.dismiss.cljs$lang$maxFixedArity = 2;
picada.animation.animation = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-attached","on-attached",-801242869),(function (el){
if(cljs.core.truth_(new cljs.core.Keyword(null,"animation-entry","animation-entry",-516262735).cljs$core$IFn$_invoke$arity$1(lucuma.core.get_properties.call(null,el)))){
return picada.animation.animate_property.call(null,el,new cljs.core.Keyword(null,"animation-entry","animation-entry",-516262735),null);
} else {
return null;
}
}),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animation-entry","animation-entry",-516262735),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"animation-exit","animation-exit",712187291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"default","default",-1987822328),null], null)], null),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dismiss","dismiss",412569545),picada.animation.dismiss], null)], null);

//# sourceMappingURL=animation.js.map