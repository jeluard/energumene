// Compiled by ClojureScript 1.7.107 {}
goog.provide('lucuma.custom_elements');
goog.require('cljs.core');
goog.require('lucuma.util');
lucuma.custom_elements.forbidden_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["missing-glyph",null,"font-face-src",null,"font-face-uri",null,"font-face-format",null,"font-face-name",null,"font-face",null,"annotation-xml",null,"color-profile",null], null), null);
/**
 * Returns true if current platform support Custom Elements.
 */
lucuma.custom_elements.supported_QMARK_ = (function lucuma$custom_elements$supported_QMARK_(){
return typeof document.registerElement !== 'undefined';
});
goog.exportSymbol('lucuma.custom_elements.supported_QMARK_', lucuma.custom_elements.supported_QMARK_);
/**
 * Returns true if provided name is a valid Custom Element name.
 */
lucuma.custom_elements.valid_name_QMARK_ = (function lucuma$custom_elements$valid_name_QMARK_(s){
if(cljs.core.truth_(s)){
return (cljs.core.not_EQ_.call(null,(-1),s.indexOf("-"))) && (!(cljs.core.contains_QMARK_.call(null,lucuma.custom_elements.forbidden_names,s)));
} else {
return null;
}
});
lucuma.custom_elements.install_callback = (function lucuma$custom_elements$install_callback(p,c,n){
if(cljs.core.truth_(c)){
return (p[n] = lucuma.util.wrap_with_callback_this_value.call(null,c));
} else {
return null;
}
});
/**
 * Creates a Custom Element prototype from a map definition.
 */
lucuma.custom_elements.create_prototype = (function lucuma$custom_elements$create_prototype(p__16202){
var map__16205 = p__16202;
var map__16205__$1 = ((((!((map__16205 == null)))?((((map__16205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16205):map__16205);
var prototype = cljs.core.get.call(null,map__16205__$1,new cljs.core.Keyword(null,"prototype","prototype",-1121365005));
var properties = cljs.core.get.call(null,map__16205__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var on_created = cljs.core.get.call(null,map__16205__$1,new cljs.core.Keyword(null,"on-created","on-created",-2070299256));
var on_attribute_changed = cljs.core.get.call(null,map__16205__$1,new cljs.core.Keyword(null,"on-attribute-changed","on-attribute-changed",1187283972));
var on_attached = cljs.core.get.call(null,map__16205__$1,new cljs.core.Keyword(null,"on-attached","on-attached",-801242869));
var on_detached = cljs.core.get.call(null,map__16205__$1,new cljs.core.Keyword(null,"on-detached","on-detached",765339065));
var ce_prototype = ((cljs.core.seq.call(null,properties))?Object.create(prototype,cljs.core.clj__GT_js.call(null,properties)):Object.create(prototype));
lucuma.custom_elements.install_callback.call(null,ce_prototype,on_created,"createdCallback");

lucuma.custom_elements.install_callback.call(null,ce_prototype,on_attached,"attachedCallback");

lucuma.custom_elements.install_callback.call(null,ce_prototype,on_detached,"detachedCallback");

lucuma.custom_elements.install_callback.call(null,ce_prototype,on_attribute_changed,"attributeChangedCallback");

return ce_prototype;
});
/**
 * Registers a Custom Element from an abstract definition.
 */
lucuma.custom_elements.register = (function lucuma$custom_elements$register(n,p,e){
if(cljs.core.truth_(lucuma.custom_elements.valid_name_QMARK_.call(null,n))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-name?","valid-name?",1312075736,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

return document.registerElement(n,cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005),p], null),(cljs.core.truth_(e)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extends","extends",-954903259),cljs.core.name.call(null,e)], null):null))));
});

//# sourceMappingURL=custom_elements.js.map