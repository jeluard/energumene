// Compiled by ClojureScript 1.7.107 {}
goog.provide('energumene.ui.component.browser');
goog.require('cljs.core');
goog.require('lucuma.core');
goog.require('picada.component');
goog.require('happy.core');
goog.require('happy.client.xmlhttprequest');
goog.require('cljs.core.async');
happy.core.set_default_client_BANG_.call(null,happy.client.xmlhttprequest.create.call(null));
energumene.ui.component.browser.fetch_details = (function energumene$ui$component$browser$fetch_details(){
return happy.core.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"http://localhost:4000/",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["accept","application/vnd.api+json"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"report-progress?","report-progress?",-578292374),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11767_SHARP_){
return console.log(cljs.core.clj__GT_js.call(null,p1__11767_SHARP_));
})], null));
});
energumene.ui.component.browser.ene_browser = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),""], null),new cljs.core.Keyword(null,"on-created","on-created",-2070299256),energumene.ui.component.browser.fetch_details,new cljs.core.Keyword(null,"document","document",-1329188687),(function (_,p__11770){
var map__11771 = p__11770;
var map__11771__$1 = ((((!((map__11771 == null)))?((((map__11771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11771):map__11771);
var uri = cljs.core.get.call(null,map__11771__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"URI"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),uri], null)], null);
}),new cljs.core.Keyword(null,"on-property-changed","on-property-changed",-1431388232),(function (p1__11768_SHARP_,p2__11769_SHARP_){
return console.log(p1__11768_SHARP_,p2__11769_SHARP_);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ene-browser",new cljs.core.Keyword(null,"ns","ns",441598760),"energumene.ui.component.browser"], null)));
goog.exportSymbol('energumene.ui.component.browser.ene_browser', energumene.ui.component.browser.ene_browser);

//# sourceMappingURL=browser.js.map