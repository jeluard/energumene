// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.component.dialog');
goog.require('cljs.core');
goog.require('hipo.core');
goog.require('picada.component');
goog.require('lucuma.core');
goog.require('picada.animation');
goog.require('picada.style');
goog.require('picada.aria');
goog.require('picada.color');
picada.component.dialog.styles = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-dialog","pica-dialog",-884678116),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["center",(0),"100vw",(24),"center","none","flex","fixed","100vh",(0)]),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["> div","> form",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"white",new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"200px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px",new cljs.core.Keyword(null,"transition","transition",765692007),picada.style.shadow_transition], null),picada.style.shadows.call(null,(24)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["> *",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 24px",new cljs.core.Keyword(null,"padding","padding",1660304693),"24px 0"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"text-rendering","text-rendering",872518208),new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591)],["28px","optimizeLegibility","ellipsis","nowrap","20px",(500),"hidden","break-word","8px"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"color","color",1011675173),"var(--pica-dialog-paragraph-color,",cljs.core.get_in.call(null,picada.color.text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"--secondary-text-color","--secondary-text-color",303466120)], null)),")"], true, false)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["h2 + *",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["h2 + *",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),(0)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".actions",".actions",-1936286303),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"flex-end",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 8px 8px 24px",new cljs.core.Keyword(null,"color","color",1011675173),"var(--pica-dialog-button-color, var(--primary-color))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-button","pica-button",-1569777615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"64px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-button.confirm","pica-button.confirm",1852955597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pica-button:not([disabled]).discard",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--pica-dialog-button-discard-color, currentColor)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pica-button:not([disabled]).confirm",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--pica-dialog-button-confirm-color, currentColor)"], null)], null)], null)], null)], null);
picada.component.dialog.input_id_prefix = "i-";
picada.component.dialog.id__GT_input_id = (function picada$component$dialog$id__GT_input_id(s){
return [cljs.core.str(picada.component.dialog.input_id_prefix),cljs.core.str(s)].join('');
});
picada.component.dialog.input_id__GT_id = (function picada$component$dialog$input_id__GT_id(s){
return cljs.core.subs.call(null,s,cljs.core.count.call(null,picada.component.dialog.input_id_prefix));
});
picada.component.dialog.dismiss = (function picada$component$dialog$dismiss(el){
var temp__4423__auto___12948 = document.querySelector("pica-overlay");
if(cljs.core.truth_(temp__4423__auto___12948)){
var oel_12949 = temp__4423__auto___12948;
picada.animation.dismiss.call(null,oel_12949);
} else {
}

return picada.animation.dismiss.call(null,el);
});
picada.component.dialog.confirm_class = "confirm";
picada.component.dialog.button_confirm = (function picada$component$dialog$button_confirm(fel){
return fel.querySelector([cljs.core.str("pica-button."),cljs.core.str(picada.component.dialog.confirm_class)].join(''));
});
picada.component.dialog.show = (function picada$component$dialog$show(var_args){
var args12952 = [];
var len__6114__auto___12958 = arguments.length;
var i__6115__auto___12959 = (0);
while(true){
if((i__6115__auto___12959 < len__6114__auto___12958)){
args12952.push((arguments[i__6115__auto___12959]));

var G__12960 = (i__6115__auto___12959 + (1));
i__6115__auto___12959 = G__12960;
continue;
} else {
}
break;
}

var G__12954 = args12952.length;
switch (G__12954) {
case 1:
return picada.component.dialog.show.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return picada.component.dialog.show.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return picada.component.dialog.show.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12952.length)].join('')));

}
});

picada.component.dialog.show.cljs$core$IFn$_invoke$arity$1 = (function (el){
return picada.component.dialog.show.call(null,el,false);
});

picada.component.dialog.show.cljs$core$IFn$_invoke$arity$2 = (function (el,modal_QMARK_){
return picada.component.dialog.show.call(null,null,el,modal_QMARK_);
});

picada.component.dialog.show.cljs$core$IFn$_invoke$arity$3 = (function (pel,el,modal_QMARK_){
if(cljs.core.truth_(modal_QMARK_)){
var oel_12962 = document.createElement("pica-overlay");
document.body.appendChild(oel_12962);

window.getComputedStyle(oel_12962).position;

oel_12962.visible = true;
} else {
el.addEventListener("click",(function (p1__12950_SHARP_){
if(cljs.core._EQ_.call(null,el,p1__12950_SHARP_.target)){
return picada.component.dialog.dismiss.call(null,el);
} else {
return null;
}
}));
}

el.addEventListener("keydown",(function (p1__12951_SHARP_){
var pred__12955 = cljs.core._EQ_;
var expr__12956 = p1__12951_SHARP_.which;
if(cljs.core.truth_(pred__12955.call(null,(27),expr__12956))){
return picada.component.dialog.dismiss.call(null,el);
} else {
if(cljs.core.truth_(pred__12955.call(null,(13),expr__12956))){
var temp__4423__auto__ = el.querySelector("form");
if(cljs.core.truth_(temp__4423__auto__)){
var fel = temp__4423__auto__;
var temp__4423__auto____$1 = picada.component.dialog.button_confirm.call(null,fel);
if(cljs.core.truth_(temp__4423__auto____$1)){
var bel = temp__4423__auto____$1;
var temp__4423__auto____$2 = lucuma.core.get_property.call(null,bel,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(temp__4423__auto____$2)){
var a = temp__4423__auto____$2;
if(cljs.core.not.call(null,bel.disabled)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(a).call(null,p1__12951_SHARP_);
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
}
}));

(function (){var or__5056__auto__ = pel;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return document.body;
}
})().appendChild(el);

el.focus();

return el;
});

picada.component.dialog.show.cljs$lang$maxFixedArity = 3;
picada.component.dialog.input_id = (function picada$component$dialog$input_id(iel){
var id = iel.id;
if(!(cljs.core.empty_QMARK_.call(null,id))){
return picada.component.dialog.input_id__GT_id.call(null,id);
} else {
var temp__4423__auto__ = iel.nextElementSibling;
if(cljs.core.truth_(temp__4423__auto__)){
var lel = temp__4423__auto__;
if(cljs.core.truth_(lel)){
return lel.textContent;
} else {
return null;
}
} else {
return null;
}
}
});
picada.component.dialog.values = (function picada$component$dialog$values(el){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5828__auto__ = (function picada$component$dialog$values_$_iter__12967(s__12968){
return (new cljs.core.LazySeq(null,(function (){
var s__12968__$1 = s__12968;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12968__$1);
if(temp__4425__auto__){
var s__12968__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12968__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__12968__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__12970 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__12969 = (0);
while(true){
if((i__12969 < size__5827__auto__)){
var iel = cljs.core._nth.call(null,c__5826__auto__,i__12969);
cljs.core.chunk_append.call(null,b__12970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,picada.component.dialog.input_id.call(null,iel)),iel.value], null));

var G__12971 = (i__12969 + (1));
i__12969 = G__12971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12970),picada$component$dialog$values_$_iter__12967.call(null,cljs.core.chunk_rest.call(null,s__12968__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12970),null);
}
} else {
var iel = cljs.core.first.call(null,s__12968__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,picada.component.dialog.input_id.call(null,iel)),iel.value], null),picada$component$dialog$values_$_iter__12967.call(null,cljs.core.rest.call(null,s__12968__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5828__auto__.call(null,cljs.core.array_seq.call(null,el.elements));
})());
});
picada.component.dialog.wrap = (function picada$component$dialog$wrap(a){
return picada.component.wrap_action.call(null,a,(function (p1__12973_SHARP_,p2__12972_SHARP_){
if(cljs.core.truth_(p2__12972_SHARP_)){
p2__12972_SHARP_.call(null,p1__12973_SHARP_);
} else {
}

return picada.component.dialog.dismiss.call(null,p1__12973_SHARP_.target.closest("pica-dialog"));
}));
});
picada.component.dialog.wrap_with_values = (function picada$component$dialog$wrap_with_values(a){
return picada.component.wrap_action.call(null,a,(function (p1__12975_SHARP_,p2__12974_SHARP_){
if(cljs.core.truth_(p2__12974_SHARP_)){
var temp__4423__auto___12976 = p1__12975_SHARP_.target.closest("form");
if(cljs.core.truth_(temp__4423__auto___12976)){
var fel_12977 = temp__4423__auto___12976;
p2__12974_SHARP_.call(null,p1__12975_SHARP_,picada.component.dialog.values.call(null,fel_12977));
} else {
p2__12974_SHARP_.call(null,p1__12975_SHARP_);
}
} else {
}

return picada.component.dialog.dismiss.call(null,p1__12975_SHARP_.target.closest("pica-dialog"));
}));
});
picada.component.dialog.create_actions = (function picada$component$dialog$create_actions(var_args){
var args12978 = [];
var len__6114__auto___12981 = arguments.length;
var i__6115__auto___12982 = (0);
while(true){
if((i__6115__auto___12982 < len__6114__auto___12981)){
args12978.push((arguments[i__6115__auto___12982]));

var G__12983 = (i__6115__auto___12982 + (1));
i__6115__auto___12982 = G__12983;
continue;
} else {
}
break;
}

var G__12980 = args12978.length;
switch (G__12980) {
case 1:
return picada.component.dialog.create_actions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return picada.component.dialog.create_actions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12978.length)].join('')));

}
});

picada.component.dialog.create_actions.cljs$core$IFn$_invoke$arity$1 = (function (d){
return picada.component.dialog.create_actions.call(null,null,d);
});

picada.component.dialog.create_actions.cljs$core$IFn$_invoke$arity$2 = (function (c,d){
if(cljs.core.truth_((function (){var or__5056__auto__ = c;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return d;
}
})())){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"actions"], null),(cljs.core.truth_(d)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-button","pica-button",-1569777615),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"discard",new cljs.core.Keyword(null,"action","action",-811238024),picada.component.dialog.wrap.call(null,d)], null)], null):null),(cljs.core.truth_(c)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-button","pica-button",-1569777615),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),picada.component.dialog.confirm_class,new cljs.core.Keyword(null,"action","action",-811238024),picada.component.dialog.wrap_with_values.call(null,c)], null)], null):null)], null);
} else {
return null;
}
});

picada.component.dialog.create_actions.cljs$lang$maxFixedArity = 2;
picada.component.dialog.create_dialog = (function picada$component$dialog$create_dialog(k,m,t,c,mc,md){
var v12986 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-dialog","pica-dialog",-884678116),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"show-on-attached","show-on-attached",-804726070),true,new cljs.core.Keyword(null,"animation-entry","animation-entry",-516262735),"zoom-in",new cljs.core.Keyword(null,"animation-exit","animation-exit",712187291),"zoom-out"], null),m),(function (){var cs = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,picada.component.dialog.create_actions.call(null,mc,md)),c),((!(cljs.core.empty_QMARK_.call(null,t)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),t], null):null));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"div","div",1057191632),k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cs], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cs], null);
}
})()], null);
var el__10133__auto__ = hipo.interpreter.create.call(null,v12986,null);
hipo.core.set_hiccup_BANG_.call(null,el__10133__auto__,v12986);

return el__10133__auto__;
});
picada.component.dialog.show_alert = (function picada$component$dialog$show_alert(var_args){
var args12987 = [];
var len__6114__auto___12990 = arguments.length;
var i__6115__auto___12991 = (0);
while(true){
if((i__6115__auto___12991 < len__6114__auto___12990)){
args12987.push((arguments[i__6115__auto___12991]));

var G__12992 = (i__6115__auto___12991 + (1));
i__6115__auto___12991 = G__12992;
continue;
} else {
}
break;
}

var G__12989 = args12987.length;
switch (G__12989) {
case 1:
return picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12987.length)].join('')));

}
});

picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$1 = (function (s){
return picada.component.dialog.show_alert.call(null,s,null);
});

picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$2 = (function (s,mc){
return picada.component.dialog.show_alert.call(null,s,mc,null);
});

picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$3 = (function (s,mc,md){
return picada.component.dialog.show_alert.call(null,null,s,mc,md);
});

picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$4 = (function (t,s,mc,md){
return picada.component.dialog.show_alert.call(null,false,t,s,mc,md);
});

picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$5 = (function (modal_QMARK_,t,s,mc,md){
return picada.component.dialog.show_alert.call(null,null,modal_QMARK_,cljs.core.PersistentArrayMap.EMPTY,t,s,mc,md);
});

picada.component.dialog.show_alert.cljs$core$IFn$_invoke$arity$7 = (function (pel,modal_QMARK_,m,t,s,mc,md){
var el = picada.component.dialog.create_dialog.call(null,new cljs.core.Keyword(null,"div","div",1057191632),m,t,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),s], null),mc,md);
return picada.component.dialog.show.call(null,pel,el,modal_QMARK_);
});

picada.component.dialog.show_alert.cljs$lang$maxFixedArity = 7;
picada.component.dialog.show_form = (function picada$component$dialog$show_form(var_args){
var args12994 = [];
var len__6114__auto___12997 = arguments.length;
var i__6115__auto___12998 = (0);
while(true){
if((i__6115__auto___12998 < len__6114__auto___12997)){
args12994.push((arguments[i__6115__auto___12998]));

var G__12999 = (i__6115__auto___12998 + (1));
i__6115__auto___12998 = G__12999;
continue;
} else {
}
break;
}

var G__12996 = args12994.length;
switch (G__12996) {
case 2:
return picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12994.length)].join('')));

}
});

picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$2 = (function (t,s){
return picada.component.dialog.show_form.call(null,false,t,s,null,null);
});

picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$3 = (function (t,s,mc){
return picada.component.dialog.show_form.call(null,false,t,s,mc,null);
});

picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$4 = (function (t,s,mc,md){
return picada.component.dialog.show_form.call(null,false,t,s,mc,md);
});

picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$5 = (function (modal_QMARK_,t,s,mc,md){
return picada.component.dialog.show_form.call(null,null,modal_QMARK_,cljs.core.PersistentArrayMap.EMPTY,t,s,mc,md);
});

picada.component.dialog.show_form.cljs$core$IFn$_invoke$arity$7 = (function (pel,modal_QMARK_,m,t,s,mc,md){
var el = picada.component.dialog.create_dialog.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),m,t,s,mc,md);
return picada.component.dialog.show.call(null,pel,el,modal_QMARK_);
});

picada.component.dialog.show_form.cljs$lang$maxFixedArity = 7;
picada.component.dialog.show_multisteps_form = (function picada$component$dialog$show_multisteps_form(v){
return null;
});
picada.component.dialog.labeled_by = "dialog-title";
picada.component.dialog.described_by = "dialog-content";
picada.component.dialog.adjust_button_validity_BANG_ = (function picada$component$dialog$adjust_button_validity_BANG_(var_args){
var args13001 = [];
var len__6114__auto___13004 = arguments.length;
var i__6115__auto___13005 = (0);
while(true){
if((i__6115__auto___13005 < len__6114__auto___13004)){
args13001.push((arguments[i__6115__auto___13005]));

var G__13006 = (i__6115__auto___13005 + (1));
i__6115__auto___13005 = G__13006;
continue;
} else {
}
break;
}

var G__13003 = args13001.length;
switch (G__13003) {
case 2:
return picada.component.dialog.adjust_button_validity_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return picada.component.dialog.adjust_button_validity_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13001.length)].join('')));

}
});

picada.component.dialog.adjust_button_validity_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (fel,bel){
return picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,bel,fel.checkValidity());
});

picada.component.dialog.adjust_button_validity_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (fel,bel,v){
if(cljs.core.truth_(bel)){
return bel.disabled = cljs.core.not.call(null,v);
} else {
return null;
}
});

picada.component.dialog.adjust_button_validity_BANG_.cljs$lang$maxFixedArity = 3;
picada.component.dialog.pica_dialog = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-created","on-created",-2070299256),(function (p1__13008_SHARP_){
p1__13008_SHARP_.setAttribute("tabindex",(1));

return p1__13008_SHARP_.setAttribute("role","dialog");
}),new cljs.core.Keyword(null,"on-attached","on-attached",-801242869),(function (el){
picada.aria.set_labelled_by_BANG_.call(null,el,el.querySelector("pica-dialog > div > h2"),picada.component.dialog.labeled_by);

picada.aria.set_described_by_BANG_.call(null,el,el.querySelector("pica-dialog > div > p"),picada.component.dialog.described_by);

var temp__4425__auto__ = el.querySelector("form");
if(cljs.core.truth_(temp__4425__auto__)){
var fel = temp__4425__auto__;
var bel = picada.component.dialog.button_confirm.call(null,fel);
window.requestAnimationFrame(((function (bel,fel,temp__4425__auto__){
return (function (){
return picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,bel);
});})(bel,fel,temp__4425__auto__))
);

picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,bel);

fel.addEventListener("invalid",((function (bel,fel,temp__4425__auto__){
return (function (){
return picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,bel);
});})(bel,fel,temp__4425__auto__))
);

var seq__13009 = cljs.core.seq.call(null,cljs.core.array_seq.call(null,fel.elements));
var chunk__13010 = null;
var count__13011 = (0);
var i__13012 = (0);
while(true){
if((i__13012 < count__13011)){
var cel = cljs.core._nth.call(null,chunk__13010,i__13012);
cel.addEventListener("change",((function (seq__13009,chunk__13010,count__13011,i__13012,cel,bel,fel,temp__4425__auto__){
return (function (){
return picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,bel);
});})(seq__13009,chunk__13010,count__13011,i__13012,cel,bel,fel,temp__4425__auto__))
);

cel.addEventListener("input",((function (seq__13009,chunk__13010,count__13011,i__13012,cel,bel,fel,temp__4425__auto__){
return (function (){
return picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,bel);
});})(seq__13009,chunk__13010,count__13011,i__13012,cel,bel,fel,temp__4425__auto__))
);

var G__13013 = seq__13009;
var G__13014 = chunk__13010;
var G__13015 = count__13011;
var G__13016 = (i__13012 + (1));
seq__13009 = G__13013;
chunk__13010 = G__13014;
count__13011 = G__13015;
i__13012 = G__13016;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__13009);
if(temp__4425__auto____$1){
var seq__13009__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13009__$1)){
var c__5859__auto__ = cljs.core.chunk_first.call(null,seq__13009__$1);
var G__13017 = cljs.core.chunk_rest.call(null,seq__13009__$1);
var G__13018 = c__5859__auto__;
var G__13019 = cljs.core.count.call(null,c__5859__auto__);
var G__13020 = (0);
seq__13009 = G__13017;
chunk__13010 = G__13018;
count__13011 = G__13019;
i__13012 = G__13020;
continue;
} else {
var cel = cljs.core.first.call(null,seq__13009__$1);
cel.addEventListener("change",((function (seq__13009,chunk__13010,count__13011,i__13012,cel,seq__13009__$1,temp__4425__auto____$1,bel,fel,temp__4425__auto__){
return (function (){
return picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,bel);
});})(seq__13009,chunk__13010,count__13011,i__13012,cel,seq__13009__$1,temp__4425__auto____$1,bel,fel,temp__4425__auto__))
);

cel.addEventListener("input",((function (seq__13009,chunk__13010,count__13011,i__13012,cel,seq__13009__$1,temp__4425__auto____$1,bel,fel,temp__4425__auto__){
return (function (){
return picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,bel);
});})(seq__13009,chunk__13010,count__13011,i__13012,cel,seq__13009__$1,temp__4425__auto____$1,bel,fel,temp__4425__auto__))
);

var G__13021 = cljs.core.next.call(null,seq__13009__$1);
var G__13022 = null;
var G__13023 = (0);
var G__13024 = (0);
seq__13009 = G__13021;
chunk__13010 = G__13022;
count__13011 = G__13023;
i__13012 = G__13024;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"style","style",-496642736),picada.component.dialog.styles,new cljs.core.Keyword(null,"material-ref","material-ref",801841968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dialog","dialog",1415150135),""], null),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dismiss","dismiss",412569545),picada.component.dialog.dismiss], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"pica-dialog",new cljs.core.Keyword(null,"ns","ns",441598760),"picada.component.dialog"], null)));
goog.exportSymbol('picada.component.dialog.pica_dialog', picada.component.dialog.pica_dialog);

//# sourceMappingURL=dialog.js.map