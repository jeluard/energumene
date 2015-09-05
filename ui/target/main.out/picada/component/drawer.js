// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.component.drawer');
goog.require('cljs.core');
goog.require('hipo.hiccup');
goog.require('picada.component.subheader');
goog.require('hipo.core');
goog.require('picada.component');
goog.require('picada.style');
goog.require('picada.animation');
goog.require('garden.stylesheet');
goog.require('picada.color');
picada.component.drawer.styles = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-drawer","pica-drawer",807013716),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["translateX(-100%)",(0),"white","calc(100vh - 56px)","320px","block","fixed","100vh",(0)]),picada.style.shadows.call(null,(16)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&[visible]",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"none"], null)], null),picada.component.subheader.styles,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ul + ul",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),[cljs.core.str("solid 1px var(--divider-color)")].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pica-item",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0 16px"], null)], null),garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--desktop","--desktop",-1885792589),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"auto",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"400px"], null)], null))], null);
picada.component.drawer.hide;
picada.component.drawer.click_outside_listener = (function picada$component$drawer$click_outside_listener(p1__13034_SHARP_){
if(cljs.core.not.call(null,p1__13034_SHARP_.target.closest("pica-drawer"))){
return picada.component.drawer.hide.call(null,document.querySelector("pica-drawer"));
} else {
return null;
}
});
picada.component.drawer.hide = (function picada$component$drawer$hide(el){
return picada.component.hide.call(null,el,(function (){
return document.body.removeEventListener("click",picada.component.drawer.click_outside_listener,true);
}));
});
picada.component.drawer.items = (function picada$component$drawer$items(var_args){
var args__6121__auto__ = [];
var len__6114__auto___13040 = arguments.length;
var i__6115__auto___13041 = (0);
while(true){
if((i__6115__auto___13041 < len__6114__auto___13040)){
args__6121__auto__.push((arguments[i__6115__auto___13041]));

var G__13042 = (i__6115__auto___13041 + (1));
i__6115__auto___13041 = G__13042;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((0) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((0)),(0))):null);
return picada.component.drawer.items.cljs$core$IFn$_invoke$arity$variadic(argseq__6122__auto__);
});

picada.component.drawer.items.cljs$core$IFn$_invoke$arity$variadic = (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5828__auto__ = (function picada$component$drawer$iter__13036(s__13037){
return (new cljs.core.LazySeq(null,(function (){
var s__13037__$1 = s__13037;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__13037__$1);
if(temp__4425__auto__){
var s__13037__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13037__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__13037__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__13039 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__13038 = (0);
while(true){
if((i__13038 < size__5827__auto__)){
var i = cljs.core._nth.call(null,c__5826__auto__,i__13038);
cljs.core.chunk_append.call(null,b__13039,(function (){var attrs = hipo.hiccup.attributes.call(null,i);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-item","pica-item",-1371796660),cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),picada.component.wrap_action.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(attrs),((function (i__13038,attrs,i,c__5826__auto__,size__5827__auto__,b__13039,s__13037__$2,temp__4425__auto__){
return (function (evt,f){
f.call(null);

return picada.component.drawer.hide.call(null,evt.target.closest("pica-drawer"));
});})(i__13038,attrs,i,c__5826__auto__,size__5827__auto__,b__13039,s__13037__$2,temp__4425__auto__))
)], null))], null);
})());

var G__13043 = (i__13038 + (1));
i__13038 = G__13043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13039),picada$component$drawer$iter__13036.call(null,cljs.core.chunk_rest.call(null,s__13037__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13039),null);
}
} else {
var i = cljs.core.first.call(null,s__13037__$2);
return cljs.core.cons.call(null,(function (){var attrs = hipo.hiccup.attributes.call(null,i);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-item","pica-item",-1371796660),cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),picada.component.wrap_action.call(null,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(attrs),((function (attrs,i,s__13037__$2,temp__4425__auto__){
return (function (evt,f){
f.call(null);

return picada.component.drawer.hide.call(null,evt.target.closest("pica-drawer"));
});})(attrs,i,s__13037__$2,temp__4425__auto__))
)], null))], null);
})(),picada$component$drawer$iter__13036.call(null,cljs.core.rest.call(null,s__13037__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5828__auto__.call(null,v);
})()], null);
});

picada.component.drawer.items.cljs$lang$maxFixedArity = (0);

picada.component.drawer.items.cljs$lang$applyTo = (function (seq13035){
return picada.component.drawer.items.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13035));
});
picada.component.drawer.create = (function picada$component$drawer$create(c){
var del = (function (){var v13045 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-drawer","pica-drawer",807013716),c], null);
var el__10133__auto__ = hipo.interpreter.create.call(null,v13045,null);
hipo.core.set_hiccup_BANG_.call(null,el__10133__auto__,v13045);

return el__10133__auto__;
})();
document.body.appendChild(del);

return del;
});
picada.component.drawer.show = (function picada$component$drawer$show(c){
var del = (function (){var or__5056__auto__ = document.querySelector("pica-drawer");
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return picada.component.drawer.create.call(null,c);
}
})();
return picada.component.show.call(null,del,((function (del){
return (function (){
return document.body.addEventListener("click",picada.component.drawer.click_outside_listener,true);
});})(del))
);
});
picada.component.drawer.pica_drawer = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"animation-entry","animation-entry",-516262735),new cljs.core.Keyword(null,"left-entry","left-entry",-1420769554),new cljs.core.Keyword(null,"animation-exit","animation-exit",712187291),new cljs.core.Keyword(null,"left-exit","left-exit",454551908)], null),new cljs.core.Keyword(null,"hideable?","hideable?",1684986402),true,new cljs.core.Keyword(null,"style","style",-496642736),picada.component.drawer.styles,new cljs.core.Keyword(null,"material-ref","material-ref",801841968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigation-drawer","navigation-drawer",1097508764),"http://www.google.com/design/spec/patterns/navigation-drawer.html"], null),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide","hide",-596913169),picada.component.drawer.hide], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"pica-drawer",new cljs.core.Keyword(null,"ns","ns",441598760),"picada.component.drawer"], null)));
goog.exportSymbol('picada.component.drawer.pica_drawer', picada.component.drawer.pica_drawer);

//# sourceMappingURL=drawer.js.map