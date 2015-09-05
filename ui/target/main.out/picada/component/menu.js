// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.component.menu');
goog.require('cljs.core');
goog.require('picada.component.subheader');
goog.require('hipo.core');
goog.require('picada.component');
goog.require('picada.style');
goog.require('picada.animation');
goog.require('garden.stylesheet');
picada.component.menu.styles = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-menu","pica-menu",-1425905597),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 0",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"min-width","min-width",1926193728),"112px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"280px"], null),picada.style.shadows.call(null,(8)),picada.component.subheader.styles,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-item","pica-item",-1371796660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 16px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ul + ul",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"solid black"], null)], null),garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--desktop","--desktop",-1885792589),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["& ul",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 24px"], null)], null))], null);
picada.component.menu.dismiss;
picada.component.menu.click_outside_listener = (function picada$component$menu$click_outside_listener(p1__12926_SHARP_){
if(cljs.core.not.call(null,p1__12926_SHARP_.target.closest("pica-menu"))){
return picada.component.menu.dismiss.call(null,document.querySelector("pica-menu"));
} else {
return null;
}
});
picada.component.menu.show = (function picada$component$menu$show(actions){
var mel = (function (){var v12928 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-menu","pica-menu",-1425905597),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),actions], null)], null);
var el__10133__auto__ = hipo.interpreter.create.call(null,v12928,null);
hipo.core.set_hiccup_BANG_.call(null,el__10133__auto__,v12928);

return el__10133__auto__;
})();
document.body.appendChild(mel);

return picada.component.show.call(null,mel,((function (mel){
return (function (){
return document.body.addEventListener("click",picada.component.menu.click_outside_listener,true);
});})(mel))
);
});
picada.component.menu.location_from_component = (function picada$component$menu$location_from_component(evt,el,s){
var cel = evt.target.closest(s);
var r = cel.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),r.left,new cljs.core.Keyword(null,"y","y",-1757859776),r.bottom], null);
});
picada.component.menu.show_at_event = (function picada$component$menu$show_at_event(var_args){
var args12929 = [];
var len__6114__auto___12932 = arguments.length;
var i__6115__auto___12933 = (0);
while(true){
if((i__6115__auto___12933 < len__6114__auto___12932)){
args12929.push((arguments[i__6115__auto___12933]));

var G__12934 = (i__6115__auto___12933 + (1));
i__6115__auto___12933 = G__12934;
continue;
} else {
}
break;
}

var G__12931 = args12929.length;
switch (G__12931) {
case 2:
return picada.component.menu.show_at_event.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return picada.component.menu.show_at_event.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12929.length)].join('')));

}
});

picada.component.menu.show_at_event.cljs$core$IFn$_invoke$arity$2 = (function (evt,actions){
return picada.component.menu.show_at_event.call(null,evt,null,actions);
});

picada.component.menu.show_at_event.cljs$core$IFn$_invoke$arity$3 = (function (evt,s,actions){
var mel = picada.component.menu.show.call(null,actions);
var pos = (function (){var or__5056__auto__ = (cljs.core.truth_(s)?picada.component.menu.location_from_component.call(null,evt,mel,s):null);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),evt.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),evt.clientY], null);
}
})();
return mel.setAttribute("style",[cljs.core.str("left: "),cljs.core.str(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos)),cljs.core.str("px; top: "),cljs.core.str(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos)),cljs.core.str("px")].join(''));
});

picada.component.menu.show_at_event.cljs$lang$maxFixedArity = 3;
picada.component.menu.dismiss = (function picada$component$menu$dismiss(el){
return picada.animation.dismiss.call(null,el,(function (){
return document.body.removeEventListener("click",picada.component.menu.click_outside_listener,true);
}));
});
picada.component.menu.pica_menu = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),null], null),new cljs.core.Keyword(null,"style","style",-496642736),picada.component.menu.styles,new cljs.core.Keyword(null,"material-ref","material-ref",801841968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu","menu",352255198),"http://www.google.com/design/spec/components/menus.html"], null),new cljs.core.Keyword(null,"document","document",-1329188687),(function (_,p__12936){
var map__12937 = p__12936;
var map__12937__$1 = ((((!((map__12937 == null)))?((((map__12937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12937):map__12937);
var actions = cljs.core.get.call(null,map__12937__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5828__auto__ = ((function (map__12937,map__12937__$1,actions){
return (function picada$component$menu$iter__12939(s__12940){
return (new cljs.core.LazySeq(null,((function (map__12937,map__12937__$1,actions){
return (function (){
var s__12940__$1 = s__12940;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12940__$1);
if(temp__4425__auto__){
var s__12940__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12940__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__12940__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__12942 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__12941 = (0);
while(true){
if((i__12941 < size__5827__auto__)){
var m = cljs.core._nth.call(null,c__5826__auto__,i__12941);
cljs.core.chunk_append.call(null,b__12942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-item","pica-item",-1371796660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),picada.component.wrap_action.call(null,m,((function (i__12941,m,c__5826__auto__,size__5827__auto__,b__12942,s__12940__$2,temp__4425__auto__,map__12937,map__12937__$1,actions){
return (function (evt,f){
f.call(null);

return picada.component.menu.dismiss.call(null,evt.target.closest("pica-menu"));
});})(i__12941,m,c__5826__auto__,size__5827__auto__,b__12942,s__12940__$2,temp__4425__auto__,map__12937,map__12937__$1,actions))
)], null)], null));

var G__12943 = (i__12941 + (1));
i__12941 = G__12943;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12942),picada$component$menu$iter__12939.call(null,cljs.core.chunk_rest.call(null,s__12940__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12942),null);
}
} else {
var m = cljs.core.first.call(null,s__12940__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-item","pica-item",-1371796660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),picada.component.wrap_action.call(null,m,((function (m,s__12940__$2,temp__4425__auto__,map__12937,map__12937__$1,actions){
return (function (evt,f){
f.call(null);

return picada.component.menu.dismiss.call(null,evt.target.closest("pica-menu"));
});})(m,s__12940__$2,temp__4425__auto__,map__12937,map__12937__$1,actions))
)], null)], null),picada$component$menu$iter__12939.call(null,cljs.core.rest.call(null,s__12940__$2)));
}
} else {
return null;
}
break;
}
});})(map__12937,map__12937__$1,actions))
,null,null));
});})(map__12937,map__12937__$1,actions))
;
return iter__5828__auto__.call(null,actions);
})()], null)], null);
}),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dismiss","dismiss",412569545),picada.component.menu.dismiss], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"pica-menu",new cljs.core.Keyword(null,"ns","ns",441598760),"picada.component.menu"], null)));
goog.exportSymbol('picada.component.menu.pica_menu', picada.component.menu.pica_menu);

//# sourceMappingURL=menu.js.map