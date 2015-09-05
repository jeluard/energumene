// Compiled by ClojureScript 1.7.107 {}
goog.provide('lucuma.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('lucuma.attribute');
goog.require('lucuma.custom_elements');
goog.require('lucuma.util');
lucuma.core.registry = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lucuma.core.lucuma_properties_holder_name = "lucuma";
lucuma.core.properties_holder_name = "properties";
lucuma.core.install_lucuma_properties_holder_BANG_ = (function lucuma$core$install_lucuma_properties_holder_BANG_(p){
return (p[lucuma.core.lucuma_properties_holder_name] = {});
});
lucuma.core.get_lucuma_property_BANG_ = (function lucuma$core$get_lucuma_property_BANG_(el,n){
return (el[lucuma.core.lucuma_properties_holder_name][n]);
});
lucuma.core.set_lucuma_property_BANG_ = (function lucuma$core$set_lucuma_property_BANG_(el,n,v){
return (el[lucuma.core.lucuma_properties_holder_name][n] = v);
});
lucuma.core.element_QMARK_ = (function lucuma$core$element_QMARK_(el){
return (el instanceof Element);
});
/**
 * Returns an element name. Supports both custom and regular element.
 */
lucuma.core.element_name = (function lucuma$core$element_name(el){
if(cljs.core.truth_(lucuma.core.element_QMARK_.call(null,el))){
return cljs.core.keyword.call(null,(function (){var or__5056__auto__ = el.getAttribute("is");
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return clojure.string.lower_case.call(null,el.tagName);
}
})());
} else {
return null;
}
});
/**
 * Returns the definition for an element type.
 */
lucuma.core.get_definition = (function lucuma$core$get_definition(s){
if(cljs.core.truth_(s)){
return cljs.core.get.call(null,cljs.core.deref.call(null,lucuma.core.registry),cljs.core.name.call(null,s));
} else {
return null;
}
});
/**
 * Returns true if type is already registered.
 */
lucuma.core.registered_QMARK_ = (function lucuma$core$registered_QMARK_(s){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,lucuma.core.registry),cljs.core.name.call(null,s));
});
/**
 * Returns true if element is a Lucuma element.
 */
lucuma.core.lucuma_element_QMARK_ = (function lucuma$core$lucuma_element_QMARK_(el){
if(cljs.core.truth_(el)){
return typeof (el[lucuma.core.lucuma_properties_holder_name]) !== 'undefined';
} else {
return null;
}
});
lucuma.core.install_properties_holder_BANG_ = (function lucuma$core$install_properties_holder_BANG_(p){
return lucuma.core.set_lucuma_property_BANG_.call(null,p,lucuma.core.properties_holder_name,{});
});
/**
 * Gets the value of a named property.
 */
lucuma.core.get_property = (function lucuma$core$get_property(el,k){
if(cljs.core.truth_(lucuma.core.lucuma_element_QMARK_.call(null,el))){
return (el[lucuma.core.lucuma_properties_holder_name][lucuma.core.properties_holder_name][cljs.core.name.call(null,k)]);
} else {
return null;
}
});
/**
 * Returns a map of all properties associated to their values.
 */
lucuma.core.get_properties = (function lucuma$core$get_properties(el){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(lucuma.core.lucuma_element_QMARK_.call(null,el))?(function (){var iter__5828__auto__ = (function lucuma$core$get_properties_$_iter__15961(s__15962){
return (new cljs.core.LazySeq(null,(function (){
var s__15962__$1 = s__15962;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__15962__$1);
if(temp__4425__auto__){
var s__15962__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15962__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__15962__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__15964 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__15963 = (0);
while(true){
if((i__15963 < size__5827__auto__)){
var s = cljs.core._nth.call(null,c__5826__auto__,i__15963);
var k = cljs.core.keyword.call(null,s);
cljs.core.chunk_append.call(null,b__15964,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,lucuma.core.get_property.call(null,el,k)], null));

var G__15965 = (i__15963 + (1));
i__15963 = G__15965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15964),lucuma$core$get_properties_$_iter__15961.call(null,cljs.core.chunk_rest.call(null,s__15962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15964),null);
}
} else {
var s = cljs.core.first.call(null,s__15962__$2);
var k = cljs.core.keyword.call(null,s);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,lucuma.core.get_property.call(null,el,k)], null),lucuma$core$get_properties_$_iter__15961.call(null,cljs.core.rest.call(null,s__15962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5828__auto__.call(null,Object.keys((el[lucuma.core.lucuma_properties_holder_name][lucuma.core.properties_holder_name])));
})():null));
});
lucuma.core.prototype = (function lucuma$core$prototype(m){
var or__5056__auto__ = new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return new cljs.core.Keyword(null,"extends","extends",-954903259).cljs$core$IFn$_invoke$arity$1(m);
}
});
lucuma.core.val_or_default = (function lucuma$core$val_or_default(os,k,d){
var v = k.call(null,os);
if(!((v == null))){
return v;
} else {
return d;
}
});
lucuma.core.type_not_one_of_QMARK_ = (function lucuma$core$type_not_one_of_QMARK_(os,st){
return cljs.core.not_any_QMARK_.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(os)], null));
});
lucuma.core.property_definition_attributes_QMARK_ = (function lucuma$core$property_definition_attributes_QMARK_(os){
return lucuma.core.val_or_default.call(null,os,new cljs.core.Keyword(null,"attributes?","attributes?",-527952265),lucuma.core.type_not_one_of_QMARK_.call(null,os,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object","object",1474613949),null], null), null)));
});
lucuma.core.property_definition_events_QMARK_ = (function lucuma$core$property_definition_events_QMARK_(os){
return lucuma.core.val_or_default.call(null,os,new cljs.core.Keyword(null,"events?","events?",-780512682),true);
});
/**
 * Returns inferred type from ClojureScript value.
 */
lucuma.core.infer_type_from_value = (function lucuma$core$infer_type_from_value(o){
if(!((o == null))){
if(typeof o === 'number'){
return new cljs.core.Keyword(null,"number","number",1570378438);
} else {
if(typeof o === 'string'){
return new cljs.core.Keyword(null,"string","string",-1989541586);
} else {
if((o === true) || (o === false)){
return new cljs.core.Keyword(null,"boolean","boolean",-1919418404);
} else {
if((o instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",811389747);
} else {
return new cljs.core.Keyword(null,"object","object",1474613949);

}
}
}
}
} else {
return new cljs.core.Keyword(null,"object","object",1474613949);
}
});
lucuma.core.fire_event = (function lucuma$core$fire_event(el,n,m){
var ev = (new Event(cljs.core.name.call(null,n)));
(ev["detail"] = cljs.core.clj__GT_js.call(null,m));

return el.dispatchEvent(ev);
});
lucuma.core.change__GT_map = (function lucuma$core$change__GT_map(m){
return cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"new-value","new-value",1087038368).cljs$core$IFn$_invoke$arity$1(m)], true, false);
});
/**
 * Returns a map of changed values
 */
lucuma.core.changes__GT_map = (function lucuma$core$changes__GT_map(s){
return cljs.core.reduce.call(null,(function (p1__15966_SHARP_,p2__15967_SHARP_){
return cljs.core.merge.call(null,p1__15966_SHARP_,lucuma.core.change__GT_map.call(null,p2__15967_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,s);
});
lucuma.core.get_change = (function lucuma$core$get_change(s,k){
return cljs.core.some.call(null,(function (p1__15968_SHARP_){
var m = p1__15968_SHARP_;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(p1__15968_SHARP_))){
return m;
} else {
return null;
}
}),s);
});
lucuma.core.throw_when_modifying_read_only_property = (function lucuma$core$throw_when_modifying_read_only_property(k){
throw cljs.core.ex_info.call(null,"Can't set value of read-only? property",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),cljs.core.name.call(null,k)], null));
});
lucuma.core.set_properties_STAR_ = (function lucuma$core$set_properties_STAR_(el,m,pv,ps,consider_attributes_QMARK_,initialization_QMARK_){
var seq__15975 = cljs.core.seq.call(null,m);
var chunk__15976 = null;
var count__15977 = (0);
var i__15978 = (0);
while(true){
if((i__15978 < count__15977)){
var vec__15979 = cljs.core._nth.call(null,chunk__15976,i__15978);
var k = cljs.core.nth.call(null,vec__15979,(0),null);
var v = cljs.core.nth.call(null,vec__15979,(1),null);
var os_15981 = k.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ps));
if(cljs.core.truth_(os_15981)){
var et_15982 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(os_15981);
if(cljs.core.truth_((function (){var and__5044__auto__ = cljs.core.not.call(null,initialization_QMARK_);
if(and__5044__auto__){
return new cljs.core.Keyword(null,"read-only?","read-only?",-770285386).cljs$core$IFn$_invoke$arity$1(os_15981);
} else {
return and__5044__auto__;
}
})())){
lucuma.core.throw_when_modifying_read_only_property.call(null,k);
} else {
}

if((!((v == null))) && (!(cljs.core._EQ_.call(null,et_15982,lucuma.core.infer_type_from_value.call(null,v))))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected value of type "),cljs.core.str(et_15982),cljs.core.str(" but got "),cljs.core.str(lucuma.core.infer_type_from_value.call(null,v)),cljs.core.str(" (<"),cljs.core.str(v),cljs.core.str(">) for "),cljs.core.str(k)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"target","target",253001721),el], null));
} else {
}

if(cljs.core.truth_((function (){var and__5044__auto__ = initialization_QMARK_;
if(cljs.core.truth_(and__5044__auto__)){
return lucuma.core.property_definition_events_QMARK_.call(null,os_15981);
} else {
return and__5044__auto__;
}
})())){
lucuma.core.fire_event.call(null,el,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-value","old-value",862546795),k.call(null,pv),new cljs.core.Keyword(null,"new-value","new-value",1087038368),v], null));
} else {
}

(el[lucuma.core.lucuma_properties_holder_name][lucuma.core.properties_holder_name][cljs.core.name.call(null,k)] = v);
} else {
}

if(cljs.core.truth_((function (){var or__5056__auto__ = cljs.core.not.call(null,os_15981);
if(or__5056__auto__){
return or__5056__auto__;
} else {
var and__5044__auto__ = consider_attributes_QMARK_;
if(cljs.core.truth_(and__5044__auto__)){
return lucuma.core.property_definition_attributes_QMARK_.call(null,os_15981);
} else {
return and__5044__auto__;
}
}
})())){
lucuma.attribute.set_BANG_.call(null,el,k,v);
} else {
}

var G__15983 = seq__15975;
var G__15984 = chunk__15976;
var G__15985 = count__15977;
var G__15986 = (i__15978 + (1));
seq__15975 = G__15983;
chunk__15976 = G__15984;
count__15977 = G__15985;
i__15978 = G__15986;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__15975);
if(temp__4425__auto__){
var seq__15975__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15975__$1)){
var c__5859__auto__ = cljs.core.chunk_first.call(null,seq__15975__$1);
var G__15987 = cljs.core.chunk_rest.call(null,seq__15975__$1);
var G__15988 = c__5859__auto__;
var G__15989 = cljs.core.count.call(null,c__5859__auto__);
var G__15990 = (0);
seq__15975 = G__15987;
chunk__15976 = G__15988;
count__15977 = G__15989;
i__15978 = G__15990;
continue;
} else {
var vec__15980 = cljs.core.first.call(null,seq__15975__$1);
var k = cljs.core.nth.call(null,vec__15980,(0),null);
var v = cljs.core.nth.call(null,vec__15980,(1),null);
var os_15991 = k.call(null,new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(ps));
if(cljs.core.truth_(os_15991)){
var et_15992 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(os_15991);
if(cljs.core.truth_((function (){var and__5044__auto__ = cljs.core.not.call(null,initialization_QMARK_);
if(and__5044__auto__){
return new cljs.core.Keyword(null,"read-only?","read-only?",-770285386).cljs$core$IFn$_invoke$arity$1(os_15991);
} else {
return and__5044__auto__;
}
})())){
lucuma.core.throw_when_modifying_read_only_property.call(null,k);
} else {
}

if((!((v == null))) && (!(cljs.core._EQ_.call(null,et_15992,lucuma.core.infer_type_from_value.call(null,v))))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Expected value of type "),cljs.core.str(et_15992),cljs.core.str(" but got "),cljs.core.str(lucuma.core.infer_type_from_value.call(null,v)),cljs.core.str(" (<"),cljs.core.str(v),cljs.core.str(">) for "),cljs.core.str(k)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property","property",-1114278232),cljs.core.name.call(null,k),new cljs.core.Keyword(null,"target","target",253001721),el], null));
} else {
}

if(cljs.core.truth_((function (){var and__5044__auto__ = initialization_QMARK_;
if(cljs.core.truth_(and__5044__auto__)){
return lucuma.core.property_definition_events_QMARK_.call(null,os_15991);
} else {
return and__5044__auto__;
}
})())){
lucuma.core.fire_event.call(null,el,k,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old-value","old-value",862546795),k.call(null,pv),new cljs.core.Keyword(null,"new-value","new-value",1087038368),v], null));
} else {
}

(el[lucuma.core.lucuma_properties_holder_name][lucuma.core.properties_holder_name][cljs.core.name.call(null,k)] = v);
} else {
}

if(cljs.core.truth_((function (){var or__5056__auto__ = cljs.core.not.call(null,os_15991);
if(or__5056__auto__){
return or__5056__auto__;
} else {
var and__5044__auto__ = consider_attributes_QMARK_;
if(cljs.core.truth_(and__5044__auto__)){
return lucuma.core.property_definition_attributes_QMARK_.call(null,os_15991);
} else {
return and__5044__auto__;
}
}
})())){
lucuma.attribute.set_BANG_.call(null,el,k,v);
} else {
}

var G__15993 = cljs.core.next.call(null,seq__15975__$1);
var G__15994 = null;
var G__15995 = (0);
var G__15996 = (0);
seq__15975 = G__15993;
chunk__15976 = G__15994;
count__15977 = G__15995;
i__15978 = G__15996;
continue;
}
} else {
return null;
}
}
break;
}
});
lucuma.core.on_property_changed = (function lucuma$core$on_property_changed(el,ps,m,pv){
var temp__4423__auto__ = new cljs.core.Keyword(null,"on-property-changed","on-property-changed",-1431388232).cljs$core$IFn$_invoke$arity$1(ps);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
var s = (function (){var iter__5828__auto__ = ((function (f,temp__4423__auto__){
return (function lucuma$core$on_property_changed_$_iter__16005(s__16006){
return (new cljs.core.LazySeq(null,((function (f,temp__4423__auto__){
return (function (){
var s__16006__$1 = s__16006;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16006__$1);
if(temp__4425__auto__){
var s__16006__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16006__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__16006__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__16008 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__16007 = (0);
while(true){
if((i__16007 < size__5827__auto__)){
var vec__16011 = cljs.core._nth.call(null,c__5826__auto__,i__16007);
var k = cljs.core.nth.call(null,vec__16011,(0),null);
var v = cljs.core.nth.call(null,vec__16011,(1),null);
cljs.core.chunk_append.call(null,b__16008,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),k,new cljs.core.Keyword(null,"old-value","old-value",862546795),k.call(null,pv),new cljs.core.Keyword(null,"new-value","new-value",1087038368),v], null));

var G__16013 = (i__16007 + (1));
i__16007 = G__16013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16008),lucuma$core$on_property_changed_$_iter__16005.call(null,cljs.core.chunk_rest.call(null,s__16006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16008),null);
}
} else {
var vec__16012 = cljs.core.first.call(null,s__16006__$2);
var k = cljs.core.nth.call(null,vec__16012,(0),null);
var v = cljs.core.nth.call(null,vec__16012,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"property","property",-1114278232),k,new cljs.core.Keyword(null,"old-value","old-value",862546795),k.call(null,pv),new cljs.core.Keyword(null,"new-value","new-value",1087038368),v], null),lucuma$core$on_property_changed_$_iter__16005.call(null,cljs.core.rest.call(null,s__16006__$2)));
}
} else {
return null;
}
break;
}
});})(f,temp__4423__auto__))
,null,null));
});})(f,temp__4423__auto__))
;
return iter__5828__auto__.call(null,m);
})();
return f.call(null,el,s);
} else {
return null;
}
});
/**
 * Sets all properties.
 */
lucuma.core.set_properties_BANG_ = (function lucuma$core$set_properties_BANG_(var_args){
var args16014 = [];
var len__6114__auto___16017 = arguments.length;
var i__6115__auto___16018 = (0);
while(true){
if((i__6115__auto___16018 < len__6114__auto___16017)){
args16014.push((arguments[i__6115__auto___16018]));

var G__16019 = (i__6115__auto___16018 + (1));
i__6115__auto___16018 = G__16019;
continue;
} else {
}
break;
}

var G__16016 = args16014.length;
switch (G__16016) {
case 2:
return lucuma.core.set_properties_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return lucuma.core.set_properties_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return lucuma.core.set_properties_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16014.length)].join('')));

}
});

lucuma.core.set_properties_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,m){
return lucuma.core.set_properties_BANG_.call(null,el,m,true,false);
});

lucuma.core.set_properties_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,m,consider_attributes_QMARK_,initialization_QMARK_){
return lucuma.core.set_properties_BANG_.call(null,el,m,lucuma.core.get_definition.call(null,lucuma.core.element_name.call(null,el)),consider_attributes_QMARK_,initialization_QMARK_);
});

lucuma.core.set_properties_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (el,m,ps,consider_attributes_QMARK_,initialization_QMARK_){
if(cljs.core.truth_(lucuma.core.lucuma_element_QMARK_.call(null,el))){
var pv = lucuma.core.get_properties.call(null,el);
lucuma.core.set_properties_STAR_.call(null,el,m,pv,ps,consider_attributes_QMARK_,initialization_QMARK_);

if(cljs.core.not.call(null,initialization_QMARK_)){
return lucuma.core.on_property_changed.call(null,el,ps,m,pv);
} else {
return null;
}
} else {
return null;
}
});

lucuma.core.set_properties_BANG_.cljs$lang$maxFixedArity = 5;
/**
 * Sets the value of a named property.
 */
lucuma.core.set_property_BANG_ = (function lucuma$core$set_property_BANG_(var_args){
var args16021 = [];
var len__6114__auto___16024 = arguments.length;
var i__6115__auto___16025 = (0);
while(true){
if((i__6115__auto___16025 < len__6114__auto___16024)){
args16021.push((arguments[i__6115__auto___16025]));

var G__16026 = (i__6115__auto___16025 + (1));
i__6115__auto___16025 = G__16026;
continue;
} else {
}
break;
}

var G__16023 = args16021.length;
switch (G__16023) {
case 3:
return lucuma.core.set_property_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 6:
return lucuma.core.set_property_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16021.length)].join('')));

}
});

lucuma.core.set_property_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,k,v){
return lucuma.core.set_properties_BANG_.call(null,el,cljs.core.PersistentArrayMap.fromArray([k,v], true, false));
});

lucuma.core.set_property_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (el,os,k,v,consider_attributes_QMARK_,initialization_QMARK_){
return lucuma.core.set_properties_BANG_.call(null,el,cljs.core.PersistentArrayMap.fromArray([k,v], true, false),os,consider_attributes_QMARK_,initialization_QMARK_);
});

lucuma.core.set_property_BANG_.cljs$lang$maxFixedArity = 6;
/**
 * Returns the host of an element inside a custom element, walking parents as needed; otherwise returns null.
 */
lucuma.core.host = (function lucuma$core$host(el){
while(true){
if(cljs.core.truth_(el)){
if(cljs.core.truth_(lucuma.core.lucuma_element_QMARK_.call(null,el))){
return el;
} else {
var temp__4423__auto__ = el.parentNode;
if(cljs.core.truth_(temp__4423__auto__)){
var pel = temp__4423__auto__;
var G__16028 = pel;
el = G__16028;
continue;
} else {
return null;
}
}
} else {
return null;
}
break;
}
});
/**
 * Returns extended type from host element.
 * 
 *   e.g.
 * :div => :div
 * :lucu-element => nil (when lucu-element does not extend any element)
 * :lucu-element => :div (when lucu-element extends div, recursively finds the root extended element)
 * :non-lucu-element => throw exception
 */
lucuma.core.host_type__GT_extends = (function lucuma$core$host_type__GT_extends(t){
if(cljs.core.truth_(t)){
if(cljs.core.map_QMARK_.call(null,t)){
var p = lucuma.core.prototype.call(null,t);
if(cljs.core.map_QMARK_.call(null,p)){
return lucuma$core$host_type__GT_extends.call(null,p);
} else {
return p;
}
} else {
if(cljs.core.truth_(lucuma.util.valid_standard_element_name_QMARK_.call(null,cljs.core.name.call(null,t)))){
return t;
} else {
var temp__4423__auto__ = lucuma.core.get_definition.call(null,t);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return lucuma$core$host_type__GT_extends.call(null,lucuma.core.prototype.call(null,m));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not infer extends for <"),cljs.core.str(cljs.core.name.call(null,t)),cljs.core.str(">")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
}
} else {
return null;
}
});
lucuma.core.create_element = (function lucuma$core$create_element(extends$){
var n = cljs.core.name.call(null,extends$);
var e = lucuma.core.host_type__GT_extends.call(null,extends$);
if(cljs.core.truth_((function (){var and__5044__auto__ = e;
if(cljs.core.truth_(and__5044__auto__)){
return cljs.core.not_EQ_.call(null,extends$,e);
} else {
return and__5044__auto__;
}
})())){
return document.createElement(cljs.core.name.call(null,e),n);
} else {
return document.createElement(n);
}
});
lucuma.core.property_values = (function lucuma$core$property_values(ps,as){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5828__auto__ = (function lucuma$core$property_values_$_iter__16037(s__16038){
return (new cljs.core.LazySeq(null,(function (){
var s__16038__$1 = s__16038;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16038__$1);
if(temp__4425__auto__){
var s__16038__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16038__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__16038__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__16040 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__16039 = (0);
while(true){
if((i__16039 < size__5827__auto__)){
var p = cljs.core._nth.call(null,c__5826__auto__,i__16039);
cljs.core.chunk_append.call(null,b__16040,(function (){var vec__16043 = p;
var k = cljs.core.nth.call(null,vec__16043,(0),null);
var os = cljs.core.nth.call(null,vec__16043,(1),null);
var a = (cljs.core.truth_((function (){var and__5044__auto__ = cljs.core.contains_QMARK_.call(null,as,k);
if(and__5044__auto__){
return lucuma.core.property_definition_attributes_QMARK_.call(null,os);
} else {
return and__5044__auto__;
}
})())?lucuma.attribute.attribute__GT_property.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(os),k.call(null,as)], null)):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var or__5056__auto__ = a;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(os);
}
})()], null);
})());

var G__16045 = (i__16039 + (1));
i__16039 = G__16045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16040),lucuma$core$property_values_$_iter__16037.call(null,cljs.core.chunk_rest.call(null,s__16038__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16040),null);
}
} else {
var p = cljs.core.first.call(null,s__16038__$2);
return cljs.core.cons.call(null,(function (){var vec__16044 = p;
var k = cljs.core.nth.call(null,vec__16044,(0),null);
var os = cljs.core.nth.call(null,vec__16044,(1),null);
var a = (cljs.core.truth_((function (){var and__5044__auto__ = cljs.core.contains_QMARK_.call(null,as,k);
if(and__5044__auto__){
return lucuma.core.property_definition_attributes_QMARK_.call(null,os);
} else {
return and__5044__auto__;
}
})())?lucuma.attribute.attribute__GT_property.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(os),k.call(null,as)], null)):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var or__5056__auto__ = a;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(os);
}
})()], null);
})(),lucuma$core$property_values_$_iter__16037.call(null,cljs.core.rest.call(null,s__16038__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5828__auto__.call(null,ps);
})());
});
/**
 * Initializes a custom element instance.
 */
lucuma.core.initialize_instance_BANG_ = (function lucuma$core$initialize_instance_BANG_(el,m,ps){
lucuma.core.install_lucuma_properties_holder_BANG_.call(null,el);

lucuma.core.install_properties_holder_BANG_.call(null,el);

return lucuma.core.set_properties_BANG_.call(null,el,m,ps,true,true);
});
lucuma.core.property_name__GT_js_property_name = (function lucuma$core$property_name__GT_js_property_name(s){
return cljs.core.name.call(null,s).replace("-","_");
});
lucuma.core.js_property_name__GT_property_name = (function lucuma$core$js_property_name__GT_property_name(s){
return cljs.core.name.call(null,s).replace("_","-");
});
lucuma.core.merge_properties = (function lucuma$core$merge_properties(ps,g,s){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__16046_SHARP_){
var kj = cljs.core.keyword.call(null,lucuma.core.property_name__GT_js_property_name.call(null,cljs.core.key.call(null,p1__16046_SHARP_)));
var kp = cljs.core.keyword.call(null,lucuma.core.js_property_name__GT_property_name.call(null,cljs.core.key.call(null,p1__16046_SHARP_)));
return cljs.core.PersistentHashMap.fromArrays([kj],[lucuma.attribute.property_definition.call(null,cljs.core.partial.call(null,g,kp),((cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,p1__16046_SHARP_))) === false)?cljs.core.partial.call(null,s,kp):((function (kj,kp){
return (function (){
return lucuma.core.throw_when_modifying_read_only_property.call(null,kp);
});})(kj,kp))
))]);
}),ps));
});
/**
 * Updates property based on associated attribute change.
 */
lucuma.core.attribute_changed = (function lucuma$core$attribute_changed(el,k,_,nv,m){
var temp__4423__auto__ = cljs.core.get_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"properties","properties",685819552),k], null));
if(cljs.core.truth_(temp__4423__auto__)){
var os = temp__4423__auto__;
var v = lucuma.attribute.attribute__GT_property.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(os),nv], null));
if(cljs.core.not_EQ_.call(null,v,lucuma.core.get_property.call(null,el,k))){
if(cljs.core.truth_(lucuma.core.property_definition_attributes_QMARK_.call(null,os))){
return lucuma.core.set_property_BANG_.call(null,el,m,k,v,false,false);
} else {
return lucuma.util.warn.call(null,[cljs.core.str("Changing attribute for "),cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str(" but its attributes? is false.")].join(''));
}
} else {
return null;
}
} else {
return null;
}
});
lucuma.core.prototype_of = (function lucuma$core$prototype_of(o){
if((o == null)){
return HTMLElement.prototype;
} else {
if((typeof o === 'string') || ((o instanceof cljs.core.Keyword))){
return Object.getPrototypeOf(lucuma.core.create_element.call(null,o));
} else {
if(cljs.core.map_QMARK_.call(null,o)){
return lucuma$core$prototype_of.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(o));
} else {
if((o instanceof HTMLElement)){
return o;
} else {
return null;
}
}
}
}
});
lucuma.core.call_callback_when_defined = (function lucuma$core$call_callback_when_defined(m,k,el){
var temp__4423__auto__ = k.call(null,m);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,el);
} else {
return null;
}
});
/**
 * Creates a Custom Element prototype from a map definition.
 */
lucuma.core.create_prototype = (function lucuma$core$create_prototype(p__16055,prototype){
var map__16064 = p__16055;
var map__16064__$1 = ((((!((map__16064 == null)))?((((map__16064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16064):map__16064);
var m = map__16064__$1;
var properties = cljs.core.get.call(null,map__16064__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var methods$ = cljs.core.get.call(null,map__16064__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var on_created = ((function (map__16064,map__16064__$1,m,properties,methods$){
return (function (p1__16047_SHARP_){
var mp = lucuma.core.property_values.call(null,properties,lucuma.attribute.attributes.call(null,p1__16047_SHARP_));
lucuma.core.initialize_instance_BANG_.call(null,p1__16047_SHARP_,mp,m);

var temp__4423__auto__ = new cljs.core.Keyword(null,"on-created","on-created",-2070299256).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,p1__16047_SHARP_,mp);
} else {
return null;
}
});})(map__16064,map__16064__$1,m,properties,methods$))
;
var on_attribute_changed = ((function (on_created,map__16064,map__16064__$1,m,properties,methods$){
return (function (el,a,ov,nv,_){
return lucuma.core.attribute_changed.call(null,el,cljs.core.keyword.call(null,lucuma.core.js_property_name__GT_property_name.call(null,a)),ov,nv,m);
});})(on_created,map__16064,map__16064__$1,m,properties,methods$))
;
var prototype__$1 = lucuma.custom_elements.create_prototype.call(null,cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"prototype","prototype",-1121365005),lucuma.core.prototype_of.call(null,prototype),new cljs.core.Keyword(null,"properties","properties",685819552),lucuma.core.merge_properties.call(null,properties,((function (on_created,on_attribute_changed,map__16064,map__16064__$1,m,properties,methods$){
return (function (p1__16049_SHARP_,p2__16048_SHARP_){
return cljs.core.clj__GT_js.call(null,lucuma.core.get_property.call(null,p2__16048_SHARP_,p1__16049_SHARP_));
});})(on_created,on_attribute_changed,map__16064,map__16064__$1,m,properties,methods$))
,((function (on_created,on_attribute_changed,map__16064,map__16064__$1,m,properties,methods$){
return (function (p1__16051_SHARP_,p2__16050_SHARP_,p3__16052_SHARP_){
return lucuma.core.set_property_BANG_.call(null,p2__16050_SHARP_,p1__16051_SHARP_,cljs.core.js__GT_clj.call(null,p3__16052_SHARP_,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});})(on_created,on_attribute_changed,map__16064,map__16064__$1,m,properties,methods$))
),new cljs.core.Keyword(null,"on-created","on-created",-2070299256),on_created,new cljs.core.Keyword(null,"on-attribute-changed","on-attribute-changed",1187283972),on_attribute_changed,new cljs.core.Keyword(null,"on-attached","on-attached",-801242869),((function (on_created,on_attribute_changed,map__16064,map__16064__$1,m,properties,methods$){
return (function (p1__16053_SHARP_){
return lucuma.core.call_callback_when_defined.call(null,m,new cljs.core.Keyword(null,"on-attached","on-attached",-801242869),p1__16053_SHARP_);
});})(on_created,on_attribute_changed,map__16064,map__16064__$1,m,properties,methods$))
,new cljs.core.Keyword(null,"on-detached","on-detached",765339065),((function (on_created,on_attribute_changed,map__16064,map__16064__$1,m,properties,methods$){
return (function (p1__16054_SHARP_){
return lucuma.core.call_callback_when_defined.call(null,m,new cljs.core.Keyword(null,"on-detached","on-detached",765339065),p1__16054_SHARP_);
});})(on_created,on_attribute_changed,map__16064,map__16064__$1,m,properties,methods$))
], null)));
var seq__16066_16072 = cljs.core.seq.call(null,methods$);
var chunk__16067_16073 = null;
var count__16068_16074 = (0);
var i__16069_16075 = (0);
while(true){
if((i__16069_16075 < count__16068_16074)){
var vec__16070_16076 = cljs.core._nth.call(null,chunk__16067_16073,i__16069_16075);
var k_16077 = cljs.core.nth.call(null,vec__16070_16076,(0),null);
var v_16078 = cljs.core.nth.call(null,vec__16070_16076,(1),null);
(prototype__$1[cljs.core.name.call(null,k_16077)] = lucuma.util.wrap_with_callback_this_value.call(null,lucuma.util.wrap_to_javascript.call(null,v_16078)));

var G__16079 = seq__16066_16072;
var G__16080 = chunk__16067_16073;
var G__16081 = count__16068_16074;
var G__16082 = (i__16069_16075 + (1));
seq__16066_16072 = G__16079;
chunk__16067_16073 = G__16080;
count__16068_16074 = G__16081;
i__16069_16075 = G__16082;
continue;
} else {
var temp__4425__auto___16083 = cljs.core.seq.call(null,seq__16066_16072);
if(temp__4425__auto___16083){
var seq__16066_16084__$1 = temp__4425__auto___16083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16066_16084__$1)){
var c__5859__auto___16085 = cljs.core.chunk_first.call(null,seq__16066_16084__$1);
var G__16086 = cljs.core.chunk_rest.call(null,seq__16066_16084__$1);
var G__16087 = c__5859__auto___16085;
var G__16088 = cljs.core.count.call(null,c__5859__auto___16085);
var G__16089 = (0);
seq__16066_16072 = G__16086;
chunk__16067_16073 = G__16087;
count__16068_16074 = G__16088;
i__16069_16075 = G__16089;
continue;
} else {
var vec__16071_16090 = cljs.core.first.call(null,seq__16066_16084__$1);
var k_16091 = cljs.core.nth.call(null,vec__16071_16090,(0),null);
var v_16092 = cljs.core.nth.call(null,vec__16071_16090,(1),null);
(prototype__$1[cljs.core.name.call(null,k_16091)] = lucuma.util.wrap_with_callback_this_value.call(null,lucuma.util.wrap_to_javascript.call(null,v_16092)));

var G__16093 = cljs.core.next.call(null,seq__16066_16084__$1);
var G__16094 = null;
var G__16095 = (0);
var G__16096 = (0);
seq__16066_16072 = G__16093;
chunk__16067_16073 = G__16094;
count__16068_16074 = G__16095;
i__16069_16075 = G__16096;
continue;
}
} else {
}
}
break;
}

return prototype__$1;
});
lucuma.core.default_element = document.createElement("div");
/**
 * Ensures a property name is valid.
 */
lucuma.core.validate_property_name_BANG_ = (function lucuma$core$validate_property_name_BANG_(el,n,m){
if(cljs.core.not.call(null,lucuma.util.valid_identifier_QMARK_.call(null,n))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid property name <"),cljs.core.str(n),cljs.core.str(">")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),n], null));
} else {
}

if((typeof (el[n]) !== 'undefined') && (cljs.core.not.call(null,new cljs.core.Keyword(null,"override?","override?",1253315658).cljs$core$IFn$_invoke$arity$1(m)))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Property <"),cljs.core.str(n),cljs.core.str("> is already defined. Add `:override? true` to force the override.")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),n], null));
} else {
return null;
}
});
/**
 * Ensures a property definition is sound. Throws a js/Error if not.
 * Returns a map definition of the input object, creating the map or injecting the default type when needed.
 * Returns nil if the input map is unchanged.
 */
lucuma.core.validate_property_definition_BANG_ = (function lucuma$core$validate_property_definition_BANG_(n,o){
var m = ((cljs.core.map_QMARK_.call(null,o))?o:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),o], null));
if(!(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"default","default",-1987822328)))){
throw cljs.core.ex_info.call(null,[cljs.core.str("No default for <"),cljs.core.str(n),cljs.core.str(">")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),n], null));
} else {
}

var d = new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(m);
var it = lucuma.core.infer_type_from_value.call(null,d);
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"type","type",1174270348))){
if((!((d == null))) && (cljs.core.not_EQ_.call(null,it,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m)))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Type from default value and type hint are different for <"),cljs.core.str(n),cljs.core.str(">")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property","property",-1114278232),n], null));
} else {
return null;
}
} else {
return cljs.core.merge.call(null,m,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),it], null));
}
});
lucuma.core.all_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"properties","properties",685819552),null,new cljs.core.Keyword(null,"extends","extends",-954903259),null,new cljs.core.Keyword(null,"on-created","on-created",-2070299256),null,new cljs.core.Keyword(null,"ns","ns",441598760),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"on-attached","on-attached",-801242869),null,new cljs.core.Keyword(null,"methods","methods",453930866),null,new cljs.core.Keyword(null,"prototype","prototype",-1121365005),null,new cljs.core.Keyword(null,"mixins","mixins",-571863273),null,new cljs.core.Keyword(null,"on-property-changed","on-property-changed",-1431388232),null,new cljs.core.Keyword(null,"on-detached","on-detached",765339065),null], null), null);
/**
 * Returns a set of ignored keys.
 */
lucuma.core.ignored_keys = (function lucuma$core$ignored_keys(m){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__16097_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,lucuma.core.all_keys,p1__16097_SHARP_));
}),cljs.core.keys.call(null,m)));
});
/**
 * Registers a new Custom Element from its definition.
 * Returns true if registration was successful, falsey value if the definition was already registered.
 */
lucuma.core.register = (function lucuma$core$register(r){
if(cljs.core.map_QMARK_.call(null,r)){
var n = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(r);
if(cljs.core.not.call(null,lucuma.core.registered_QMARK_.call(null,n))){
var map__16114 = r;
var map__16114__$1 = ((((!((map__16114 == null)))?((((map__16114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16114):map__16114);
var properties = cljs.core.get.call(null,map__16114__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var methods$ = cljs.core.get.call(null,map__16114__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var prototype = lucuma.core.prototype.call(null,r);
var seq__16116_16130 = cljs.core.seq.call(null,cljs.core.concat.call(null,properties,methods$));
var chunk__16117_16131 = null;
var count__16118_16132 = (0);
var i__16119_16133 = (0);
while(true){
if((i__16119_16133 < count__16118_16132)){
var vec__16120_16134 = cljs.core._nth.call(null,chunk__16117_16131,i__16119_16133);
var o_16135 = cljs.core.nth.call(null,vec__16120_16134,(0),null);
var r_16136__$1 = cljs.core.nth.call(null,vec__16120_16134,(1),null);
lucuma.core.validate_property_name_BANG_.call(null,(function (){var or__5056__auto__ = (((prototype instanceof cljs.core.Keyword))?lucuma.core.create_element.call(null,prototype):null);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return lucuma.core.default_element;
}
})(),cljs.core.name.call(null,o_16135),r_16136__$1);

var G__16137 = seq__16116_16130;
var G__16138 = chunk__16117_16131;
var G__16139 = count__16118_16132;
var G__16140 = (i__16119_16133 + (1));
seq__16116_16130 = G__16137;
chunk__16117_16131 = G__16138;
count__16118_16132 = G__16139;
i__16119_16133 = G__16140;
continue;
} else {
var temp__4425__auto___16141 = cljs.core.seq.call(null,seq__16116_16130);
if(temp__4425__auto___16141){
var seq__16116_16142__$1 = temp__4425__auto___16141;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16116_16142__$1)){
var c__5859__auto___16143 = cljs.core.chunk_first.call(null,seq__16116_16142__$1);
var G__16144 = cljs.core.chunk_rest.call(null,seq__16116_16142__$1);
var G__16145 = c__5859__auto___16143;
var G__16146 = cljs.core.count.call(null,c__5859__auto___16143);
var G__16147 = (0);
seq__16116_16130 = G__16144;
chunk__16117_16131 = G__16145;
count__16118_16132 = G__16146;
i__16119_16133 = G__16147;
continue;
} else {
var vec__16121_16148 = cljs.core.first.call(null,seq__16116_16142__$1);
var o_16149 = cljs.core.nth.call(null,vec__16121_16148,(0),null);
var r_16150__$1 = cljs.core.nth.call(null,vec__16121_16148,(1),null);
lucuma.core.validate_property_name_BANG_.call(null,(function (){var or__5056__auto__ = (((prototype instanceof cljs.core.Keyword))?lucuma.core.create_element.call(null,prototype):null);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return lucuma.core.default_element;
}
})(),cljs.core.name.call(null,o_16149),r_16150__$1);

var G__16151 = cljs.core.next.call(null,seq__16116_16142__$1);
var G__16152 = null;
var G__16153 = (0);
var G__16154 = (0);
seq__16116_16130 = G__16151;
chunk__16117_16131 = G__16152;
count__16118_16132 = G__16153;
i__16119_16133 = G__16154;
continue;
}
} else {
}
}
break;
}

var um_16155 = cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5828__auto__ = ((function (map__16114,map__16114__$1,properties,methods$,prototype,n){
return (function lucuma$core$register_$_iter__16122(s__16123){
return (new cljs.core.LazySeq(null,((function (map__16114,map__16114__$1,properties,methods$,prototype,n){
return (function (){
var s__16123__$1 = s__16123;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16123__$1);
if(temp__4425__auto__){
var s__16123__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16123__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__16123__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__16125 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__16124 = (0);
while(true){
if((i__16124 < size__5827__auto__)){
var vec__16128 = cljs.core._nth.call(null,c__5826__auto__,i__16124);
var k = cljs.core.nth.call(null,vec__16128,(0),null);
var v = cljs.core.nth.call(null,vec__16128,(1),null);
cljs.core.chunk_append.call(null,b__16125,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var or__5056__auto__ = lucuma.core.validate_property_definition_BANG_.call(null,k,v);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return v;
}
})()], null));

var G__16156 = (i__16124 + (1));
i__16124 = G__16156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16125),lucuma$core$register_$_iter__16122.call(null,cljs.core.chunk_rest.call(null,s__16123__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16125),null);
}
} else {
var vec__16129 = cljs.core.first.call(null,s__16123__$2);
var k = cljs.core.nth.call(null,vec__16129,(0),null);
var v = cljs.core.nth.call(null,vec__16129,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var or__5056__auto__ = lucuma.core.validate_property_definition_BANG_.call(null,k,v);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return v;
}
})()], null),lucuma$core$register_$_iter__16122.call(null,cljs.core.rest.call(null,s__16123__$2)));
}
} else {
return null;
}
break;
}
});})(map__16114,map__16114__$1,properties,methods$,prototype,n))
,null,null));
});})(map__16114,map__16114__$1,properties,methods$,prototype,n))
;
return iter__5828__auto__.call(null,properties);
})()));
cljs.core.swap_BANG_.call(null,lucuma.core.registry,cljs.core.assoc,n,um_16155);

lucuma.custom_elements.register.call(null,n,lucuma.core.create_prototype.call(null,um_16155,prototype),new cljs.core.Keyword(null,"extends","extends",-954903259).cljs$core$IFn$_invoke$arity$1(r));

return true;
} else {
return null;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,r)){
return cljs.core.doall.call(null,cljs.core.map.call(null,lucuma$core$register,r));
} else {
throw cljs.core.ex_info.call(null,"Can't register unsupported definition",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"r","r",-471384190),r], null));

}
}
});
lucuma.core.default_mixin_combiner = (function lucuma$core$default_mixin_combiner(r,l){

if(cljs.core.map_QMARK_.call(null,l)){
return cljs.core.merge.call(null,r,l);
} else {
if(cljs.core.fn_QMARK_.call(null,l)){
return (function() { 
var G__16157__delegate = function (args){
if(cljs.core.truth_(r)){
cljs.core.apply.call(null,r,args);

return cljs.core.apply.call(null,l,args);
} else {
return r;
}
};
var G__16157 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16158__i = 0, G__16158__a = new Array(arguments.length -  0);
while (G__16158__i < G__16158__a.length) {G__16158__a[G__16158__i] = arguments[G__16158__i + 0]; ++G__16158__i;}
  args = new cljs.core.IndexedSeq(G__16158__a,0);
} 
return G__16157__delegate.call(this,args);};
G__16157.cljs$lang$maxFixedArity = 0;
G__16157.cljs$lang$applyTo = (function (arglist__16159){
var args = cljs.core.seq(arglist__16159);
return G__16157__delegate(args);
});
G__16157.cljs$core$IFn$_invoke$arity$variadic = G__16157__delegate;
return G__16157;
})()
;
} else {
var or__5056__auto__ = l;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return r;
}

}
}
});
lucuma.core.map_without_mixins = (function lucuma$core$map_without_mixins(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"mixins","mixins",-571863273),((cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(m)))?new cljs.core.Keyword(null,"prototype","prototype",-1121365005):null));
} else {
return m;
}
});
lucuma.core.collect_mixins = (function lucuma$core$collect_mixins(m){
var mxs = cljs.core.filterv.call(null,cljs.core.identity,cljs.core.conj.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"mixins","mixins",-571863273).cljs$core$IFn$_invoke$arity$1(m)),new cljs.core.Keyword(null,"prototype","prototype",-1121365005).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"extends","extends",-954903259).cljs$core$IFn$_invoke$arity$1(m)));
if(cljs.core.seq.call(null,mxs)){
return cljs.core.apply.call(null,cljs.core.conj,cljs.core.reduce.call(null,((function (mxs){
return (function (p1__16161_SHARP_,p2__16160_SHARP_){
var temp__4423__auto__ = lucuma$core$collect_mixins.call(null,p2__16160_SHARP_);
if(cljs.core.truth_(temp__4423__auto__)){
var pmxs = temp__4423__auto__;
return cljs.core.apply.call(null,cljs.core.conj,p1__16161_SHARP_,pmxs);
} else {
return p1__16161_SHARP_;
}
});})(mxs))
,cljs.core.PersistentVector.EMPTY,mxs),cljs.core.mapv.call(null,lucuma.core.map_without_mixins,mxs));
} else {
return null;
}
});
lucuma.core.merge_mixins = (function lucuma$core$merge_mixins(m){
var temp__4423__auto__ = lucuma.core.collect_mixins.call(null,m);
if(cljs.core.truth_(temp__4423__auto__)){
var mxs = temp__4423__auto__;
var mm = lucuma.core.map_without_mixins.call(null,cljs.core.reduce.call(null,((function (mxs,temp__4423__auto__){
return (function (p1__16162_SHARP_,p2__16163_SHARP_){
return cljs.core.merge_with.call(null,(function (){var or__5056__auto__ = new cljs.core.Keyword(null,"mixin-combiner","mixin-combiner",-1490703517).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return lucuma.core.default_mixin_combiner;
}
})(),lucuma.core.map_without_mixins.call(null,p1__16162_SHARP_),lucuma.core.map_without_mixins.call(null,p2__16163_SHARP_));
});})(mxs,temp__4423__auto__))
,cljs.core.conj.call(null,cljs.core.filterv.call(null,cljs.core.map_QMARK_,mxs),m)));
var fns = cljs.core.filter.call(null,cljs.core.fn_QMARK_,mxs);
if(cljs.core.seq.call(null,fns)){
return cljs.core.reduce.call(null,((function (mm,fns,mxs,temp__4423__auto__){
return (function (p1__16165_SHARP_,p2__16164_SHARP_){
return lucuma$core$merge_mixins.call(null,p2__16164_SHARP_.call(null,p1__16165_SHARP_));
});})(mm,fns,mxs,temp__4423__auto__))
,mm,fns);
} else {
return mm;
}
} else {
return m;
}
});

//# sourceMappingURL=core.js.map