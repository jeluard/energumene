// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.component.snackbar');
goog.require('cljs.core');
goog.require('picada.animation');
goog.require('picada.color');
goog.require('picada.style');
goog.require('hipo.core');
goog.require('garden.stylesheet');
picada.component.snackbar.styles = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-snackbar","pica-snackbar",-619168617),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937)],["border-box","80px",[cljs.core.str("var(--pica-snackbar-text-color, "),cljs.core.str(cljs.core.get_in.call(null,picada.color.text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"--secondary-text-color","--secondary-text-color",303466120)], null))),cljs.core.str(")")].join(''),"48px",(0),"14px",picada.style.shadow_transition,"100vw","var(--pica-snackbar-background-color, #323232)","16px 24px 12px","fixed",(0)]),picada.style.shadows.call(null,(6)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-button","pica-button",-1569777615),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"float","float",-1732389368),"right",new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"24px",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"line-height","line-height",1870784992),"initial",new cljs.core.Keyword(null,"color","color",1011675173),"var(--pica-snackar-action-color, var(--accent-color))"], null)], null),garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--desktop","--desktop",-1885792589),""], null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"12px",new cljs.core.Keyword(null,"left","left",-399115937),"50%",new cljs.core.Keyword(null,"transform","transform",1381301764),"translateX(-50%)",new cljs.core.Keyword(null,"width","width",-384071477),"initial",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"288px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"568px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px"], null)], null)))], null);
picada.component.snackbar.snackbar_id = "snackbar";
picada.component.snackbar.append_snackbar = (function picada$component$snackbar$append_snackbar(s,d,a){
var el = (function (){var v12202 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-snackbar","pica-snackbar",-619168617),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),picada.component.snackbar.snackbar_id], null),(cljs.core.truth_(a)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),a], null):null)),s], null);
var el__10133__auto__ = hipo.interpreter.create.call(null,v12202,null);
hipo.core.set_hiccup_BANG_.call(null,el__10133__auto__,v12202);

return el__10133__auto__;
})();
document.body.appendChild(el);

return setTimeout(((function (el){
return (function (){
return picada.animation.dismiss.call(null,el);
});})(el))
,d);
});
picada.component.snackbar.show = (function picada$component$snackbar$show(var_args){
var args12203 = [];
var len__6114__auto___12206 = arguments.length;
var i__6115__auto___12207 = (0);
while(true){
if((i__6115__auto___12207 < len__6114__auto___12206)){
args12203.push((arguments[i__6115__auto___12207]));

var G__12208 = (i__6115__auto___12207 + (1));
i__6115__auto___12207 = G__12208;
continue;
} else {
}
break;
}

var G__12205 = args12203.length;
switch (G__12205) {
case 1:
return picada.component.snackbar.show.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return picada.component.snackbar.show.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return picada.component.snackbar.show.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12203.length)].join('')));

}
});

picada.component.snackbar.show.cljs$core$IFn$_invoke$arity$1 = (function (s){
return picada.component.snackbar.show.call(null,s,null);
});

picada.component.snackbar.show.cljs$core$IFn$_invoke$arity$2 = (function (s,a){
return picada.component.snackbar.show.call(null,s,(3000),a);
});

picada.component.snackbar.show.cljs$core$IFn$_invoke$arity$3 = (function (s,d,a){
if(typeof s === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"s","s",-948495851,null))))].join('')));
}

if((d > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"d","d",-682293345,null))))].join('')));
}

if(((a == null)) || (cljs.core.map_QMARK_.call(null,a))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"a","a",-482876059,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"a","a",-482876059,null)))))].join('')));
}

var temp__4423__auto__ = document.querySelector([cljs.core.str("#"),cljs.core.str(picada.component.snackbar.snackbar_id)].join(''));
if(cljs.core.truth_(temp__4423__auto__)){
var sel = temp__4423__auto__;
return picada.animation.dismiss.call(null,sel,((function (sel,temp__4423__auto__){
return (function (){
return picada.component.snackbar.show.call(null,s,d,a);
});})(sel,temp__4423__auto__))
);
} else {
return picada.component.snackbar.append_snackbar.call(null,s,d,a);
}
});

picada.component.snackbar.show.cljs$lang$maxFixedArity = 3;
picada.component.snackbar.pica_snackbar = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),null,new cljs.core.Keyword(null,"animation-entry","animation-entry",-516262735),new cljs.core.Keyword(null,"snackbar-entry","snackbar-entry",-1137243906),new cljs.core.Keyword(null,"animation-exit","animation-exit",712187291),new cljs.core.Keyword(null,"snackbar-exit","snackbar-exit",-618507606)], null),new cljs.core.Keyword(null,"style","style",-496642736),picada.component.snackbar.styles,new cljs.core.Keyword(null,"material-ref","material-ref",801841968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"snackar","snackar",-1314571853),"http://www.google.com/design/spec/components/snackbars-toasts.html"], null),new cljs.core.Keyword(null,"document","document",-1329188687),(function (_,p__12210){
var map__12211 = p__12210;
var map__12211__$1 = ((((!((map__12211 == null)))?((((map__12211.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12211.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12211):map__12211);
var action = cljs.core.get.call(null,map__12211__$1,new cljs.core.Keyword(null,"action","action",-811238024));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(action)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-button","pica-button",-1569777615),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),action], null)], null):null)], null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"pica-snackbar",new cljs.core.Keyword(null,"ns","ns",441598760),"picada.component.snackbar"], null)));
goog.exportSymbol('picada.component.snackbar.pica_snackbar', picada.component.snackbar.pica_snackbar);

//# sourceMappingURL=snackbar.js.map