// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.component.icon');
goog.require('cljs.core');
goog.require('picada.animation');
goog.require('picada.component');
goog.require('lucuma.core');
picada.component.icon.styles = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-icon","pica-icon",987571124),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null)], null)], null);
picada.component.icon.pica_icon = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"",new cljs.core.Keyword(null,"animation-icon-entry","animation-icon-entry",2121210356),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"default","default",-1987822328),null], null),new cljs.core.Keyword(null,"animation-icon-exit","animation-icon-exit",1627250612),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"default","default",-1987822328),null], null)], null),new cljs.core.Keyword(null,"style","style",-496642736),picada.component.icon.styles,new cljs.core.Keyword(null,"document","document",-1329188687),(function (_,p__12919){
var map__12920 = p__12919;
var map__12920__$1 = ((((!((map__12920 == null)))?((((map__12920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12920):map__12920);
var icon = cljs.core.get.call(null,map__12920__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"material-icons"], null),icon], null)], null);
}),new cljs.core.Keyword(null,"on-property-changed","on-property-changed",-1431388232),(function (el,s){
var temp__4423__auto__ = lucuma.core.get_change.call(null,s,new cljs.core.Keyword(null,"icon","icon",1679606541));
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
var n = new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"icon","icon",1679606541),n)){
var temp__4425__auto__ = el.querySelector("i");
if(cljs.core.truth_(temp__4425__auto__)){
var iel = temp__4425__auto__;
if(cljs.core.truth_((function (){var and__5044__auto__ = new cljs.core.Keyword(null,"old-value","old-value",862546795).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(and__5044__auto__)){
return new cljs.core.Keyword(null,"new-value","new-value",1087038368).cljs$core$IFn$_invoke$arity$1(m);
} else {
return and__5044__auto__;
}
})())){
var temp__4423__auto___12922__$1 = new cljs.core.Keyword(null,"animation-icon-exit","animation-icon-exit",1627250612).cljs$core$IFn$_invoke$arity$1(lucuma.core.get_properties.call(null,el));
if(cljs.core.truth_(temp__4423__auto___12922__$1)){
var anim_12923 = temp__4423__auto___12922__$1;
picada.animation.animate.call(null,iel,anim_12923);
} else {
}
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"new-value","new-value",1087038368).cljs$core$IFn$_invoke$arity$1(m))){
var temp__4423__auto____$1 = new cljs.core.Keyword(null,"animation-icon-entry","animation-icon-entry",2121210356).cljs$core$IFn$_invoke$arity$1(lucuma.core.get_properties.call(null,el));
if(cljs.core.truth_(temp__4423__auto____$1)){
var anim = temp__4423__auto____$1;
return picada.animation.animate.call(null,iel,anim);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"pica-icon",new cljs.core.Keyword(null,"ns","ns",441598760),"picada.component.icon"], null)));
goog.exportSymbol('picada.component.icon.pica_icon', picada.component.icon.pica_icon);

//# sourceMappingURL=icon.js.map