// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.component.toolbar');
goog.require('cljs.core');
goog.require('picada.component.drawer');
goog.require('picada.style');
goog.require('garden.stylesheet');
picada.component.toolbar.styles = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-toolbar","pica-toolbar",1637879480),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"min-height","min-height",398480837),"56px",new cljs.core.Keyword(null,"color","color",1011675173),"var(--pica-snackbar-text-color, var(--secondary-text-color))"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&[primary]",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&:not([transparent])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"var(--pica-toolbar-background-color, var(--primary-color))"], null),picada.style.shadows.call(null,(4))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["&[primary]:not([transparent])",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(15)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"24px",new cljs.core.Keyword(null,"color","color",1011675173),"var(--pica-toolbar-title-color, var(:--primary-text-color))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".right-actions",".right-actions",1897484198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),garden.stylesheet.at_media.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"--desktop","--desktop",-1885792589),""], null),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"32px"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&","&",509580121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"64px"], null)], null)))], null);
picada.component.toolbar.pica_toolbar = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"primary","primary",817773892),false,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),"",new cljs.core.Keyword(null,"override?","override?",1253315658),true], null),new cljs.core.Keyword(null,"left-actions","left-actions",-1526259813),null,new cljs.core.Keyword(null,"right-actions","right-actions",-1309909571),null,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),false], null),new cljs.core.Keyword(null,"style","style",-496642736),picada.component.toolbar.styles,new cljs.core.Keyword(null,"material-ref","material-ref",801841968),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toolbar","toolbar",-1172789065),"http://www.google.com/design/spec/components/toolbars.html",new cljs.core.Keyword(null,"structure","structure",1563832083),"http://www.google.com/design/spec/layout/structure.html#structure-toolbars"], null),new cljs.core.Keyword(null,"document","document",-1329188687),(function (_,p__12848){
var map__12849 = p__12848;
var map__12849__$1 = ((((!((map__12849 == null)))?((((map__12849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12849):map__12849);
var title = cljs.core.get.call(null,map__12849__$1,new cljs.core.Keyword(null,"title","title",636505583));
var left_actions = cljs.core.get.call(null,map__12849__$1,new cljs.core.Keyword(null,"left-actions","left-actions",-1526259813));
var right_actions = cljs.core.get.call(null,map__12849__$1,new cljs.core.Keyword(null,"right-actions","right-actions",-1309909571));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"left-actions"], null),(function (){var iter__5828__auto__ = ((function (map__12849,map__12849__$1,title,left_actions,right_actions){
return (function picada$component$toolbar$iter__12851(s__12852){
return (new cljs.core.LazySeq(null,((function (map__12849,map__12849__$1,title,left_actions,right_actions){
return (function (){
var s__12852__$1 = s__12852;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12852__$1);
if(temp__4425__auto__){
var s__12852__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12852__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__12852__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__12854 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__12853 = (0);
while(true){
if((i__12853 < size__5827__auto__)){
var m = cljs.core._nth.call(null,c__5826__auto__,i__12853);
cljs.core.chunk_append.call(null,b__12854,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-icon-button","pica-icon-button",-935878099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),m], null)], null));

var G__12859 = (i__12853 + (1));
i__12853 = G__12859;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12854),picada$component$toolbar$iter__12851.call(null,cljs.core.chunk_rest.call(null,s__12852__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12854),null);
}
} else {
var m = cljs.core.first.call(null,s__12852__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-icon-button","pica-icon-button",-935878099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),m], null)], null),picada$component$toolbar$iter__12851.call(null,cljs.core.rest.call(null,s__12852__$2)));
}
} else {
return null;
}
break;
}
});})(map__12849,map__12849__$1,title,left_actions,right_actions))
,null,null));
});})(map__12849,map__12849__$1,title,left_actions,right_actions))
;
return iter__5828__auto__.call(null,left_actions);
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"right-actions"], null),(function (){var iter__5828__auto__ = ((function (map__12849,map__12849__$1,title,left_actions,right_actions){
return (function picada$component$toolbar$iter__12855(s__12856){
return (new cljs.core.LazySeq(null,((function (map__12849,map__12849__$1,title,left_actions,right_actions){
return (function (){
var s__12856__$1 = s__12856;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12856__$1);
if(temp__4425__auto__){
var s__12856__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12856__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__12856__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__12858 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__12857 = (0);
while(true){
if((i__12857 < size__5827__auto__)){
var m = cljs.core._nth.call(null,c__5826__auto__,i__12857);
cljs.core.chunk_append.call(null,b__12858,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-icon-button","pica-icon-button",-935878099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),m], null)], null));

var G__12860 = (i__12857 + (1));
i__12857 = G__12860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12858),picada$component$toolbar$iter__12855.call(null,cljs.core.chunk_rest.call(null,s__12856__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12858),null);
}
} else {
var m = cljs.core.first.call(null,s__12856__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-icon-button","pica-icon-button",-935878099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),m], null)], null),picada$component$toolbar$iter__12855.call(null,cljs.core.rest.call(null,s__12856__$2)));
}
} else {
return null;
}
break;
}
});})(map__12849,map__12849__$1,title,left_actions,right_actions))
,null,null));
});})(map__12849,map__12849__$1,title,left_actions,right_actions))
;
return iter__5828__auto__.call(null,right_actions);
})()], null)], null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"pica-toolbar",new cljs.core.Keyword(null,"ns","ns",441598760),"picada.component.toolbar"], null)));
goog.exportSymbol('picada.component.toolbar.pica_toolbar', picada.component.toolbar.pica_toolbar);
/**
 * http://www.google.com/design/spec/components/toolbars.html
 * http://www.google.com/design/spec/layout/structure.html#structure-app-bar
 */
picada.component.toolbar.create_app_bar = (function picada$component$toolbar$create_app_bar(var_args){
var args12861 = [];
var len__6114__auto___12864 = arguments.length;
var i__6115__auto___12865 = (0);
while(true){
if((i__6115__auto___12865 < len__6114__auto___12864)){
args12861.push((arguments[i__6115__auto___12865]));

var G__12866 = (i__6115__auto___12865 + (1));
i__6115__auto___12865 = G__12866;
continue;
} else {
}
break;
}

var G__12863 = args12861.length;
switch (G__12863) {
case 2:
return picada.component.toolbar.create_app_bar.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return picada.component.toolbar.create_app_bar.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12861.length)].join('')));

}
});

picada.component.toolbar.create_app_bar.cljs$core$IFn$_invoke$arity$2 = (function (s,nav){
return picada.component.toolbar.create_app_bar.call(null,false,s,nav,null);
});

picada.component.toolbar.create_app_bar.cljs$core$IFn$_invoke$arity$4 = (function (t,s,nav,menu){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-toolbar","pica-toolbar",1637879480),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),true,new cljs.core.Keyword(null,"title","title",636505583),s,new cljs.core.Keyword(null,"left-actions","left-actions",-1526259813),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),"menu",new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return picada.component.drawer.show.call(null,nav);
}),new cljs.core.Keyword(null,"name","name",1843675177),"Side navigation"], null)], null),new cljs.core.Keyword(null,"transparent","transparent",-2073609949),t], null)], null);
});

picada.component.toolbar.create_app_bar.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=toolbar.js.map