// Compiled by ClojureScript 1.7.107 {}
goog.provide('lucuma.attribute');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('lucuma.util');
if(typeof lucuma.attribute.property__GT_attribute !== 'undefined'){
} else {
lucuma.attribute.property__GT_attribute = (function (){var method_table__5969__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5970__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5973__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"lucuma.attribute","property->attribute"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5973__auto__,method_table__5969__auto__,prefer_table__5970__auto__,method_cache__5971__auto__,cached_hierarchy__5972__auto__));
})();
}
cljs.core._add_method.call(null,lucuma.attribute.property__GT_attribute,cljs.core.Keyword,(function (o){
return clojure.string.replace_first.call(null,[cljs.core.str(o)].join(''),/:/,"");
}));
cljs.core._add_method.call(null,lucuma.attribute.property__GT_attribute,Boolean,(function (b){
if(b === true){
return "";
} else {
return null;
}
}));
cljs.core._add_method.call(null,lucuma.attribute.property__GT_attribute,String,(function (s){
if(!(cljs.core.empty_QMARK_.call(null,s))){
return s;
} else {
return null;
}
}));
cljs.core._add_method.call(null,lucuma.attribute.property__GT_attribute,new cljs.core.Keyword(null,"default","default",-1987822328),(function (o){
if(cljs.core.truth_(o)){
return [cljs.core.str(o)].join('');
} else {
return null;
}
}));
if(typeof lucuma.attribute.attribute__GT_property !== 'undefined'){
} else {
lucuma.attribute.attribute__GT_property = (function (){var method_table__5969__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5970__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5973__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"lucuma.attribute","attribute->property"),cljs.core.first,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5973__auto__,method_table__5969__auto__,prefer_table__5970__auto__,method_cache__5971__auto__,cached_hierarchy__5972__auto__));
})();
}
cljs.core._add_method.call(null,lucuma.attribute.attribute__GT_property,new cljs.core.Keyword(null,"string","string",-1989541586),(function (p__16183){
var vec__16184 = p__16183;
var _ = cljs.core.nth.call(null,vec__16184,(0),null);
var s = cljs.core.nth.call(null,vec__16184,(1),null);
if(!(cljs.core.empty_QMARK_.call(null,s))){
return s;
} else {
return null;
}
}));
cljs.core._add_method.call(null,lucuma.attribute.attribute__GT_property,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (p__16185){
var vec__16186 = p__16185;
var _ = cljs.core.nth.call(null,vec__16186,(0),null);
var k = cljs.core.nth.call(null,vec__16186,(1),null);
return cljs.core.keyword.call(null,k);
}));
cljs.core._add_method.call(null,lucuma.attribute.attribute__GT_property,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (p__16187){
var vec__16188 = p__16187;
var _ = cljs.core.nth.call(null,vec__16188,(0),null);
var b = cljs.core.nth.call(null,vec__16188,(1),null);
if((b == null)){
return false;
} else {
if(("" === b)){
return true;
} else {
return cljs.reader.read_string.call(null,b);

}
}
}));
cljs.core._add_method.call(null,lucuma.attribute.attribute__GT_property,new cljs.core.Keyword(null,"number","number",1570378438),(function (p__16189){
var vec__16190 = p__16189;
var _ = cljs.core.nth.call(null,vec__16190,(0),null);
var n = cljs.core.nth.call(null,vec__16190,(1),null);
if(!(cljs.core.empty_QMARK_.call(null,n))){
return cljs.reader.read_string.call(null,n);
} else {
return null;
}
}));
cljs.core._add_method.call(null,lucuma.attribute.attribute__GT_property,new cljs.core.Keyword(null,"default","default",-1987822328),(function (v){
return console.log([cljs.core.str("Can't convert attribute of type <"),cljs.core.str(cljs.core.first.call(null,v)),cljs.core.str(">")].join(''));
}));
/**
 * Gets the value of a named attribute. Converts its value via property->attribute.
 */
lucuma.attribute.get = (function lucuma$attribute$get(el,n,t){
var n__$1 = cljs.core.name.call(null,n);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"boolean","boolean",-1919418404))){
return el.hasAttribute(n__$1);
} else {
if(cljs.core.truth_(el.hasAttribute(n__$1))){
return lucuma.attribute.attribute__GT_property.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,el.getAttribute(n__$1)], null));
} else {
return null;
}
}
});
/**
 * Sets the value of a named attribute. Converts its value via attribute->property.
 * If the value is not nil and not false, attribute is set; otherwise it is removed.
 */
lucuma.attribute.set_BANG_ = (function lucuma$attribute$set_BANG_(el,n,v){
var n__$1 = cljs.core.name.call(null,n);
if(cljs.core.truth_((function (){var and__5044__auto__ = v;
if(cljs.core.truth_(and__5044__auto__)){
return cljs.core.not_EQ_.call(null,v,false);
} else {
return and__5044__auto__;
}
})())){
var temp__4423__auto__ = lucuma.attribute.property__GT_attribute.call(null,v);
if(cljs.core.truth_(temp__4423__auto__)){
var s = temp__4423__auto__;
return el.setAttribute(n__$1,s);
} else {
return null;
}
} else {
return el.removeAttribute(n__$1);
}
});
/**
 * Returns a property definition from getter/setter.
 */
lucuma.attribute.property_definition = (function lucuma$attribute$property_definition(get_fn,set_fn){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"configurable","configurable",-1833801168),false,new cljs.core.Keyword(null,"enumerable","enumerable",-106303070),true,new cljs.core.Keyword(null,"get","get",1683182755),lucuma.util.wrap_with_callback_this_value.call(null,get_fn),new cljs.core.Keyword(null,"set","set",304602554),lucuma.util.wrap_with_callback_this_value.call(null,set_fn)], null);
});
lucuma.attribute.attributes = (function lucuma$attribute$attributes(el){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5828__auto__ = (function lucuma$attribute$attributes_$_iter__16195(s__16196){
return (new cljs.core.LazySeq(null,(function (){
var s__16196__$1 = s__16196;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16196__$1);
if(temp__4425__auto__){
var s__16196__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16196__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__16196__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__16198 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__16197 = (0);
while(true){
if((i__16197 < size__5827__auto__)){
var attribute = cljs.core._nth.call(null,c__5826__auto__,i__16197);
cljs.core.chunk_append.call(null,b__16198,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,attribute.name),attribute.value], null));

var G__16199 = (i__16197 + (1));
i__16197 = G__16199;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16198),lucuma$attribute$attributes_$_iter__16195.call(null,cljs.core.chunk_rest.call(null,s__16196__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16198),null);
}
} else {
var attribute = cljs.core.first.call(null,s__16196__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,attribute.name),attribute.value], null),lucuma$attribute$attributes_$_iter__16195.call(null,cljs.core.rest.call(null,s__16196__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5828__auto__.call(null,cljs.core.array_seq.call(null,el.attributes));
})());
});

//# sourceMappingURL=attribute.js.map