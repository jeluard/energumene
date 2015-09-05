// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.component');
goog.require('cljs.core');
goog.require('picada.animation');
goog.require('hipo.core');
goog.require('hipo.interpreter');
goog.require('lucuma.core');
picada.component.wrap_listener = (function picada$component$wrap_listener(f,wf){
return (function (evt){
return f.call(null,evt,wf);
});
});
picada.component.wrap_action = (function picada$component$wrap_action(m,f){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),picada.component.wrap_listener.call(null,f,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(m))], null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),s], null);
} else {
return null;
}
})(),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"icon","icon",1679606541),s], null);
} else {
return null;
}
})());
});
picada.component.changes = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
picada.component.raf_scheduled = cljs.core.atom.call(null,false);
picada.component.default_hiccup = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167)], null);
picada.component.hiccup_property = "host_hiccup";
picada.component.replace_host = (function picada$component$replace_host(h,t){
return cljs.core.assoc.call(null,h,(0),t);
});
picada.component.perform_reconciliation = (function picada$component$perform_reconciliation(hm){
cljs.core.reset_BANG_.call(null,picada.component.raf_scheduled,false);

var seq__13079 = cljs.core.seq.call(null,cljs.core.deref.call(null,picada.component.changes));
var chunk__13080 = null;
var count__13081 = (0);
var i__13082 = (0);
while(true){
if((i__13082 < count__13081)){
var map__13083 = cljs.core._nth.call(null,chunk__13080,i__13082);
var map__13083__$1 = ((((!((map__13083 == null)))?((((map__13083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13083):map__13083);
var el = cljs.core.get.call(null,map__13083__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var m = cljs.core.get.call(null,map__13083__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var h_13087 = new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(m).call(null,el,lucuma.core.get_properties.call(null,el));
hipo.core.reconciliate_BANG_.call(null,el,(el[picada.component.hiccup_property]),h_13087,hm);

(el[picada.component.hiccup_property] = h_13087);

cljs.core.swap_BANG_.call(null,picada.component.changes,cljs.core.subvec,(1));

var G__13088 = seq__13079;
var G__13089 = chunk__13080;
var G__13090 = count__13081;
var G__13091 = (i__13082 + (1));
seq__13079 = G__13088;
chunk__13080 = G__13089;
count__13081 = G__13090;
i__13082 = G__13091;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13079);
if(temp__4425__auto__){
var seq__13079__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13079__$1)){
var c__5859__auto__ = cljs.core.chunk_first.call(null,seq__13079__$1);
var G__13092 = cljs.core.chunk_rest.call(null,seq__13079__$1);
var G__13093 = c__5859__auto__;
var G__13094 = cljs.core.count.call(null,c__5859__auto__);
var G__13095 = (0);
seq__13079 = G__13092;
chunk__13080 = G__13093;
count__13081 = G__13094;
i__13082 = G__13095;
continue;
} else {
var map__13085 = cljs.core.first.call(null,seq__13079__$1);
var map__13085__$1 = ((((!((map__13085 == null)))?((((map__13085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13085):map__13085);
var el = cljs.core.get.call(null,map__13085__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var m = cljs.core.get.call(null,map__13085__$1,new cljs.core.Keyword(null,"m","m",1632677161));
var h_13096 = new cljs.core.Keyword(null,"document","document",-1329188687).cljs$core$IFn$_invoke$arity$1(m).call(null,el,lucuma.core.get_properties.call(null,el));
hipo.core.reconciliate_BANG_.call(null,el,(el[picada.component.hiccup_property]),h_13096,hm);

(el[picada.component.hiccup_property] = h_13096);

cljs.core.swap_BANG_.call(null,picada.component.changes,cljs.core.subvec,(1));

var G__13097 = cljs.core.next.call(null,seq__13079__$1);
var G__13098 = null;
var G__13099 = (0);
var G__13100 = (0);
seq__13079 = G__13097;
chunk__13080 = G__13098;
count__13081 = G__13099;
i__13082 = G__13100;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Schedule reconciliation using rAF if no call is scheduled yet
 */
picada.component.schedule_reconciliation_if_needed_BANG_ = (function picada$component$schedule_reconciliation_if_needed_BANG_(hm){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,picada.component.raf_scheduled,false,true))){
return window.requestAnimationFrame((function (){
return picada.component.perform_reconciliation.call(null,hm);
}));
} else {
return null;
}
});
picada.component.enqueue_changes = (function picada$component$enqueue_changes(el,m,hm){
cljs.core.swap_BANG_.call(null,picada.component.changes,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"m","m",1632677161),m], null));

return picada.component.schedule_reconciliation_if_needed_BANG_.call(null,hm);
});
picada.component.reconciliate = (function picada$component$reconciliate(p__13101,hm){
var map__13104 = p__13101;
var map__13104__$1 = ((((!((map__13104 == null)))?((((map__13104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13104):map__13104);
var m = map__13104__$1;
var document = cljs.core.get.call(null,map__13104__$1,new cljs.core.Keyword(null,"document","document",-1329188687));
if(!((document == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("No :document provided for "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"document","document",311342840,null)))))].join('')));
}

return cljs.core.merge_with.call(null,lucuma.core.default_mixin_combiner,m,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-created","on-created",-2070299256),((function (map__13104,map__13104__$1,m,document){
return (function (el,o){
var h = document.call(null,el,o);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),cljs.core.first.call(null,h))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(":document fn does not generate a hiccup vector with :host as root node"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"host","host",-1558485167),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)))))].join('')));
}

hipo.core.reconciliate_BANG_.call(null,el,picada.component.default_hiccup,h,hm);

return (el[picada.component.hiccup_property] = h);
});})(map__13104,map__13104__$1,m,document))
,new cljs.core.Keyword(null,"on-property-changed","on-property-changed",-1431388232),((function (map__13104,map__13104__$1,m,document){
return (function (el,s){
return picada.component.enqueue_changes.call(null,el,m,hm);
});})(map__13104,map__13104__$1,m,document))
], null));
});
picada.component.show = (function picada$component$show(var_args){
var args13106 = [];
var len__6114__auto___13109 = arguments.length;
var i__6115__auto___13110 = (0);
while(true){
if((i__6115__auto___13110 < len__6114__auto___13109)){
args13106.push((arguments[i__6115__auto___13110]));

var G__13111 = (i__6115__auto___13110 + (1));
i__6115__auto___13110 = G__13111;
continue;
} else {
}
break;
}

var G__13108 = args13106.length;
switch (G__13108) {
case 1:
return picada.component.show.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return picada.component.show.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13106.length)].join('')));

}
});

picada.component.show.cljs$core$IFn$_invoke$arity$1 = (function (el){
return picada.component.show.call(null,el,null);
});

picada.component.show.cljs$core$IFn$_invoke$arity$2 = (function (el,f){
return picada.animation.animate_property.call(null,el,new cljs.core.Keyword(null,"animation-entry","animation-entry",-516262735),(function (){
if(cljs.core.truth_(f)){
f.call(null);
} else {
}

return el.visible = true;
}));
});

picada.component.show.cljs$lang$maxFixedArity = 2;
picada.component.hide = (function picada$component$hide(var_args){
var args13113 = [];
var len__6114__auto___13116 = arguments.length;
var i__6115__auto___13117 = (0);
while(true){
if((i__6115__auto___13117 < len__6114__auto___13116)){
args13113.push((arguments[i__6115__auto___13117]));

var G__13118 = (i__6115__auto___13117 + (1));
i__6115__auto___13117 = G__13118;
continue;
} else {
}
break;
}

var G__13115 = args13113.length;
switch (G__13115) {
case 1:
return picada.component.hide.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return picada.component.hide.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13113.length)].join('')));

}
});

picada.component.hide.cljs$core$IFn$_invoke$arity$1 = (function (el){
return picada.component.hide.call(null,el,null);
});

picada.component.hide.cljs$core$IFn$_invoke$arity$2 = (function (el,f){
el.visible = false;

return picada.animation.animate_property.call(null,el,new cljs.core.Keyword(null,"animation-exit","animation-exit",712187291),(function (){
if(cljs.core.truth_(f)){
return f.call(null);
} else {
return null;
}
}));
});

picada.component.hide.cljs$lang$maxFixedArity = 2;
picada.component.hideable = (function picada$component$hideable(show_QMARK_){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-attached","on-attached",-801242869),(function (el){
if(cljs.core.truth_(new cljs.core.Keyword(null,"show-on-attached","show-on-attached",-804726070).cljs$core$IFn$_invoke$arity$1(lucuma.core.get_properties.call(null,el)))){
return picada.component.show.call(null,el);
} else {
return null;
}
}),new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible","visible",-1024216805),false,new cljs.core.Keyword(null,"show-on-attached","show-on-attached",-804726070),show_QMARK_], null),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show","show",-576705889),picada.component.show,new cljs.core.Keyword(null,"hide","hide",-596913169),picada.component.hide], null)], null);
});
picada.component.component = (function picada$component$component(m){
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"mixins","mixins",-571863273),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [picada.animation.animation,(cljs.core.truth_(new cljs.core.Keyword(null,"hideable?","hideable?",1684986402).cljs$core$IFn$_invoke$arity$1(m))?picada.component.hideable.call(null,new cljs.core.Keyword(null,"show-on-attached?","show-on-attached?",-2069755297).cljs$core$IFn$_invoke$arity$1(m)):null),((cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"document","document",-1329188687)))?picada.component.reconciliate:null)], null));
});

//# sourceMappingURL=component.js.map