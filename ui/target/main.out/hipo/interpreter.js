// Compiled by ClojureScript 1.7.107 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__12513){
var map__12516 = p__12513;
var map__12516__$1 = ((((!((map__12516 == null)))?((((map__12516.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12516.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12516):map__12516);
var m = map__12516__$1;
var interceptors = cljs.core.get.call(null,map__12516__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var n = cljs.core.name.call(null,sok);
if(cljs.core.truth_(hipo.hiccup.listener_name_QMARK_.call(null,n))){
if(!((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv))))){
var b__9763__auto__ = ((function (n,map__12516,map__12516__$1,m,interceptors){
return (function (){
var en = hipo.hiccup.listener_name__GT_event_name.call(null,n);
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4423__auto___12518 = (el[hn]);
if(cljs.core.truth_(temp__4423__auto___12518)){
var l_12519 = temp__4423__auto___12518;
el.removeEventListener(en,l_12519);
} else {
}

var temp__4425__auto__ = (function (){var or__5056__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var nv__$1 = temp__4425__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(n,map__12516,map__12516__$1,m,interceptors))
;
var v__9764__auto__ = interceptors;
if((cljs.core.not.call(null,v__9764__auto__)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto__))){
return b__9763__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__9763__auto__,v__9764__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__9763__auto__ = ((function (n,map__12516,map__12516__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,n,ov,nv);
});})(n,map__12516,map__12516__$1,m,interceptors))
;
var v__9764__auto__ = interceptors;
if((cljs.core.not.call(null,v__9764__auto__)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto__))){
return b__9763__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__9763__auto__,v__9764__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.create_child;
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"v","v",1661996586,null))))].join('')));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__4423__auto___12520 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4423__auto___12520)){
var h_12521 = temp__4423__auto___12520;
el.appendChild(hipo.interpreter.create_child.call(null,h_12521,m));
} else {
}

var G__12522 = cljs.core.rest.call(null,v__$1);
v__$1 = G__12522;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__12529_12535 = cljs.core.seq.call(null,attrs);
var chunk__12530_12536 = null;
var count__12531_12537 = (0);
var i__12532_12538 = (0);
while(true){
if((i__12532_12538 < count__12531_12537)){
var vec__12533_12539 = cljs.core._nth.call(null,chunk__12530_12536,i__12532_12538);
var sok_12540 = cljs.core.nth.call(null,vec__12533_12539,(0),null);
var v_12541 = cljs.core.nth.call(null,vec__12533_12539,(1),null);
if(cljs.core.truth_(v_12541)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_12540,null,v_12541,m);
} else {
}

var G__12542 = seq__12529_12535;
var G__12543 = chunk__12530_12536;
var G__12544 = count__12531_12537;
var G__12545 = (i__12532_12538 + (1));
seq__12529_12535 = G__12542;
chunk__12530_12536 = G__12543;
count__12531_12537 = G__12544;
i__12532_12538 = G__12545;
continue;
} else {
var temp__4425__auto___12546 = cljs.core.seq.call(null,seq__12529_12535);
if(temp__4425__auto___12546){
var seq__12529_12547__$1 = temp__4425__auto___12546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12529_12547__$1)){
var c__5859__auto___12548 = cljs.core.chunk_first.call(null,seq__12529_12547__$1);
var G__12549 = cljs.core.chunk_rest.call(null,seq__12529_12547__$1);
var G__12550 = c__5859__auto___12548;
var G__12551 = cljs.core.count.call(null,c__5859__auto___12548);
var G__12552 = (0);
seq__12529_12535 = G__12549;
chunk__12530_12536 = G__12550;
count__12531_12537 = G__12551;
i__12532_12538 = G__12552;
continue;
} else {
var vec__12534_12553 = cljs.core.first.call(null,seq__12529_12547__$1);
var sok_12554 = cljs.core.nth.call(null,vec__12534_12553,(0),null);
var v_12555 = cljs.core.nth.call(null,vec__12534_12553,(1),null);
if(cljs.core.truth_(v_12555)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_12554,null,v_12555,m);
} else {
}

var G__12556 = cljs.core.next.call(null,seq__12529_12547__$1);
var G__12557 = null;
var G__12558 = (0);
var G__12559 = (0);
seq__12529_12535 = G__12556;
chunk__12530_12536 = G__12557;
count__12531_12537 = G__12558;
i__12532_12538 = G__12559;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4423__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"h","h",-1544777029,null))))].join('')));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__5056__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"o","o",290524299,null)),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"o","o",290524299,null)))))].join('')));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__12572_12584 = cljs.core.seq.call(null,nm);
var chunk__12574_12585 = null;
var count__12575_12586 = (0);
var i__12576_12587 = (0);
while(true){
if((i__12576_12587 < count__12575_12586)){
var vec__12578_12588 = cljs.core._nth.call(null,chunk__12574_12585,i__12576_12587);
var sok_12589 = cljs.core.nth.call(null,vec__12578_12588,(0),null);
var nv_12590 = cljs.core.nth.call(null,vec__12578_12588,(1),null);
var ov_12591 = cljs.core.get.call(null,om,sok_12589);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_12589,ov_12591,nv_12590,m);

var G__12592 = seq__12572_12584;
var G__12593 = chunk__12574_12585;
var G__12594 = count__12575_12586;
var G__12595 = (i__12576_12587 + (1));
seq__12572_12584 = G__12592;
chunk__12574_12585 = G__12593;
count__12575_12586 = G__12594;
i__12576_12587 = G__12595;
continue;
} else {
var temp__4425__auto___12596 = cljs.core.seq.call(null,seq__12572_12584);
if(temp__4425__auto___12596){
var seq__12572_12597__$1 = temp__4425__auto___12596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12572_12597__$1)){
var c__5859__auto___12598 = cljs.core.chunk_first.call(null,seq__12572_12597__$1);
var G__12599 = cljs.core.chunk_rest.call(null,seq__12572_12597__$1);
var G__12600 = c__5859__auto___12598;
var G__12601 = cljs.core.count.call(null,c__5859__auto___12598);
var G__12602 = (0);
seq__12572_12584 = G__12599;
chunk__12574_12585 = G__12600;
count__12575_12586 = G__12601;
i__12576_12587 = G__12602;
continue;
} else {
var vec__12579_12603 = cljs.core.first.call(null,seq__12572_12597__$1);
var sok_12604 = cljs.core.nth.call(null,vec__12579_12603,(0),null);
var nv_12605 = cljs.core.nth.call(null,vec__12579_12603,(1),null);
var ov_12606 = cljs.core.get.call(null,om,sok_12604);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_12604,ov_12606,nv_12605,m);

var G__12607 = cljs.core.next.call(null,seq__12572_12597__$1);
var G__12608 = null;
var G__12609 = (0);
var G__12610 = (0);
seq__12572_12584 = G__12607;
chunk__12574_12585 = G__12608;
count__12575_12586 = G__12609;
i__12576_12587 = G__12610;
continue;
}
} else {
}
}
break;
}

var seq__12580 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__12581 = null;
var count__12582 = (0);
var i__12583 = (0);
while(true){
if((i__12583 < count__12582)){
var sok = cljs.core._nth.call(null,chunk__12581,i__12583);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__12611 = seq__12580;
var G__12612 = chunk__12581;
var G__12613 = count__12582;
var G__12614 = (i__12583 + (1));
seq__12580 = G__12611;
chunk__12581 = G__12612;
count__12582 = G__12613;
i__12583 = G__12614;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12580);
if(temp__4425__auto__){
var seq__12580__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12580__$1)){
var c__5859__auto__ = cljs.core.chunk_first.call(null,seq__12580__$1);
var G__12615 = cljs.core.chunk_rest.call(null,seq__12580__$1);
var G__12616 = c__5859__auto__;
var G__12617 = cljs.core.count.call(null,c__5859__auto__);
var G__12618 = (0);
seq__12580 = G__12615;
chunk__12581 = G__12616;
count__12582 = G__12617;
i__12583 = G__12618;
continue;
} else {
var sok = cljs.core.first.call(null,seq__12580__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__12619 = cljs.core.next.call(null,seq__12580__$1);
var G__12620 = null;
var G__12621 = (0);
var G__12622 = (0);
seq__12580 = G__12619;
chunk__12581 = G__12620;
count__12582 = G__12621;
i__12583 = G__12622;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.reconciliate_BANG_;
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5828__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12627(s__12628){
return (new cljs.core.LazySeq(null,(function (){
var s__12628__$1 = s__12628;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12628__$1);
if(temp__4425__auto__){
var s__12628__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12628__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__12628__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__12630 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__12629 = (0);
while(true){
if((i__12629 < size__5827__auto__)){
var ih = cljs.core._nth.call(null,c__5826__auto__,i__12629);
cljs.core.chunk_append.call(null,b__12630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__12631 = (i__12629 + (1));
i__12629 = G__12631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12630),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12627.call(null,cljs.core.chunk_rest.call(null,s__12628__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12630),null);
}
} else {
var ih = cljs.core.first.call(null,s__12628__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__12627.call(null,cljs.core.rest.call(null,s__12628__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5828__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__5828__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__5828__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__12632){
var map__12645 = p__12632;
var map__12645__$1 = ((((!((map__12645 == null)))?((((map__12645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12645):map__12645);
var m = map__12645__$1;
var interceptors = cljs.core.get.call(null,map__12645__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__12647_12657 = cljs.core.seq.call(null,nm);
var chunk__12648_12658 = null;
var count__12649_12659 = (0);
var i__12650_12660 = (0);
while(true){
if((i__12650_12660 < count__12649_12659)){
var vec__12651_12661 = cljs.core._nth.call(null,chunk__12648_12658,i__12650_12660);
var i_12662 = cljs.core.nth.call(null,vec__12651_12661,(0),null);
var vec__12652_12663 = cljs.core.nth.call(null,vec__12651_12661,(1),null);
var ii_12664 = cljs.core.nth.call(null,vec__12652_12663,(0),null);
var h_12665 = cljs.core.nth.call(null,vec__12652_12663,(1),null);
var temp__4423__auto___12666 = cljs.core.get.call(null,om,i_12662);
if(cljs.core.truth_(temp__4423__auto___12666)){
var vec__12653_12667 = temp__4423__auto___12666;
var iii_12668 = cljs.core.nth.call(null,vec__12653_12667,(0),null);
var oh_12669 = cljs.core.nth.call(null,vec__12653_12667,(1),null);
var cel_12670 = cljs.core.nth.call(null,cs,iii_12668);
if((ii_12664 === iii_12668)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_12670,oh_12669,h_12665,m);
} else {
var b__9763__auto___12671 = ((function (seq__12647_12657,chunk__12648_12658,count__12649_12659,i__12650_12660,cel_12670,vec__12653_12667,iii_12668,oh_12669,temp__4423__auto___12666,vec__12651_12661,i_12662,vec__12652_12663,ii_12664,h_12665,om,nm,cs,map__12645,map__12645__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_12670);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_12669,h_12665,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_12664,ncel);
});})(seq__12647_12657,chunk__12648_12658,count__12649_12659,i__12650_12660,cel_12670,vec__12653_12667,iii_12668,oh_12669,temp__4423__auto___12666,vec__12651_12661,i_12662,vec__12652_12663,ii_12664,h_12665,om,nm,cs,map__12645,map__12645__$1,m,interceptors))
;
var v__9764__auto___12672 = interceptors;
if((cljs.core.not.call(null,v__9764__auto___12672)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto___12672))){
b__9763__auto___12671.call(null);
} else {
hipo.interceptor.call.call(null,b__9763__auto___12671,v__9764__auto___12672,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_12665,new cljs.core.Keyword(null,"index","index",-1531685915),ii_12664], null));
}
}
} else {
var b__9763__auto___12673 = ((function (seq__12647_12657,chunk__12648_12658,count__12649_12659,i__12650_12660,temp__4423__auto___12666,vec__12651_12661,i_12662,vec__12652_12663,ii_12664,h_12665,om,nm,cs,map__12645,map__12645__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_12664,hipo.interpreter.create_child.call(null,h_12665,m));
});})(seq__12647_12657,chunk__12648_12658,count__12649_12659,i__12650_12660,temp__4423__auto___12666,vec__12651_12661,i_12662,vec__12652_12663,ii_12664,h_12665,om,nm,cs,map__12645,map__12645__$1,m,interceptors))
;
var v__9764__auto___12674 = interceptors;
if((cljs.core.not.call(null,v__9764__auto___12674)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto___12674))){
b__9763__auto___12673.call(null);
} else {
hipo.interceptor.call.call(null,b__9763__auto___12673,v__9764__auto___12674,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_12665,new cljs.core.Keyword(null,"index","index",-1531685915),ii_12664], null));
}
}

var G__12675 = seq__12647_12657;
var G__12676 = chunk__12648_12658;
var G__12677 = count__12649_12659;
var G__12678 = (i__12650_12660 + (1));
seq__12647_12657 = G__12675;
chunk__12648_12658 = G__12676;
count__12649_12659 = G__12677;
i__12650_12660 = G__12678;
continue;
} else {
var temp__4425__auto___12679 = cljs.core.seq.call(null,seq__12647_12657);
if(temp__4425__auto___12679){
var seq__12647_12680__$1 = temp__4425__auto___12679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12647_12680__$1)){
var c__5859__auto___12681 = cljs.core.chunk_first.call(null,seq__12647_12680__$1);
var G__12682 = cljs.core.chunk_rest.call(null,seq__12647_12680__$1);
var G__12683 = c__5859__auto___12681;
var G__12684 = cljs.core.count.call(null,c__5859__auto___12681);
var G__12685 = (0);
seq__12647_12657 = G__12682;
chunk__12648_12658 = G__12683;
count__12649_12659 = G__12684;
i__12650_12660 = G__12685;
continue;
} else {
var vec__12654_12686 = cljs.core.first.call(null,seq__12647_12680__$1);
var i_12687 = cljs.core.nth.call(null,vec__12654_12686,(0),null);
var vec__12655_12688 = cljs.core.nth.call(null,vec__12654_12686,(1),null);
var ii_12689 = cljs.core.nth.call(null,vec__12655_12688,(0),null);
var h_12690 = cljs.core.nth.call(null,vec__12655_12688,(1),null);
var temp__4423__auto___12691 = cljs.core.get.call(null,om,i_12687);
if(cljs.core.truth_(temp__4423__auto___12691)){
var vec__12656_12692 = temp__4423__auto___12691;
var iii_12693 = cljs.core.nth.call(null,vec__12656_12692,(0),null);
var oh_12694 = cljs.core.nth.call(null,vec__12656_12692,(1),null);
var cel_12695 = cljs.core.nth.call(null,cs,iii_12693);
if((ii_12689 === iii_12693)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_12695,oh_12694,h_12690,m);
} else {
var b__9763__auto___12696 = ((function (seq__12647_12657,chunk__12648_12658,count__12649_12659,i__12650_12660,cel_12695,vec__12656_12692,iii_12693,oh_12694,temp__4423__auto___12691,vec__12654_12686,i_12687,vec__12655_12688,ii_12689,h_12690,seq__12647_12680__$1,temp__4425__auto___12679,om,nm,cs,map__12645,map__12645__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_12695);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_12694,h_12690,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_12689,ncel);
});})(seq__12647_12657,chunk__12648_12658,count__12649_12659,i__12650_12660,cel_12695,vec__12656_12692,iii_12693,oh_12694,temp__4423__auto___12691,vec__12654_12686,i_12687,vec__12655_12688,ii_12689,h_12690,seq__12647_12680__$1,temp__4425__auto___12679,om,nm,cs,map__12645,map__12645__$1,m,interceptors))
;
var v__9764__auto___12697 = interceptors;
if((cljs.core.not.call(null,v__9764__auto___12697)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto___12697))){
b__9763__auto___12696.call(null);
} else {
hipo.interceptor.call.call(null,b__9763__auto___12696,v__9764__auto___12697,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_12690,new cljs.core.Keyword(null,"index","index",-1531685915),ii_12689], null));
}
}
} else {
var b__9763__auto___12698 = ((function (seq__12647_12657,chunk__12648_12658,count__12649_12659,i__12650_12660,temp__4423__auto___12691,vec__12654_12686,i_12687,vec__12655_12688,ii_12689,h_12690,seq__12647_12680__$1,temp__4425__auto___12679,om,nm,cs,map__12645,map__12645__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_12689,hipo.interpreter.create_child.call(null,h_12690,m));
});})(seq__12647_12657,chunk__12648_12658,count__12649_12659,i__12650_12660,temp__4423__auto___12691,vec__12654_12686,i_12687,vec__12655_12688,ii_12689,h_12690,seq__12647_12680__$1,temp__4425__auto___12679,om,nm,cs,map__12645,map__12645__$1,m,interceptors))
;
var v__9764__auto___12699 = interceptors;
if((cljs.core.not.call(null,v__9764__auto___12699)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto___12699))){
b__9763__auto___12698.call(null);
} else {
hipo.interceptor.call.call(null,b__9763__auto___12698,v__9764__auto___12699,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_12690,new cljs.core.Keyword(null,"index","index",-1531685915),ii_12689], null));
}
}

var G__12700 = cljs.core.next.call(null,seq__12647_12680__$1);
var G__12701 = null;
var G__12702 = (0);
var G__12703 = (0);
seq__12647_12657 = G__12700;
chunk__12648_12658 = G__12701;
count__12649_12659 = G__12702;
i__12650_12660 = G__12703;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__9763__auto__ = ((function (d,om,nm,cs,map__12645,map__12645__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__12645,map__12645__$1,m,interceptors))
;
var v__9764__auto__ = interceptors;
if((cljs.core.not.call(null,v__9764__auto__)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto__))){
return b__9763__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__9763__auto__,v__9764__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__12704){
var map__12707 = p__12704;
var map__12707__$1 = ((((!((map__12707 == null)))?((((map__12707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12707):map__12707);
var m = map__12707__$1;
var interceptors = cljs.core.get.call(null,map__12707__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__9763__auto___12709 = ((function (oc,nc,d,map__12707,map__12707__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__12707,map__12707__$1,m,interceptors))
;
var v__9764__auto___12710 = interceptors;
if((cljs.core.not.call(null,v__9764__auto___12710)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto___12710))){
b__9763__auto___12709.call(null);
} else {
hipo.interceptor.call.call(null,b__9763__auto___12709,v__9764__auto___12710,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__5959__auto___12711 = (function (){var x__5394__auto__ = oc;
var y__5395__auto__ = nc;
return ((x__5394__auto__ < y__5395__auto__) ? x__5394__auto__ : y__5395__auto__);
})();
var i_12712 = (0);
while(true){
if((i_12712 < n__5959__auto___12711)){
var ov_12713 = cljs.core.nth.call(null,och,i_12712);
var nv_12714 = cljs.core.nth.call(null,nch,i_12712);
if(!(((ov_12713 == null)) && ((nv_12714 == null)))){
if((ov_12713 == null)){
var b__9763__auto___12715 = ((function (i_12712,ov_12713,nv_12714,n__5959__auto___12711,oc,nc,d,map__12707,map__12707__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_12712,hipo.interpreter.create_child.call(null,nv_12714,m));
});})(i_12712,ov_12713,nv_12714,n__5959__auto___12711,oc,nc,d,map__12707,map__12707__$1,m,interceptors))
;
var v__9764__auto___12716 = interceptors;
if((cljs.core.not.call(null,v__9764__auto___12716)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto___12716))){
b__9763__auto___12715.call(null);
} else {
hipo.interceptor.call.call(null,b__9763__auto___12715,v__9764__auto___12716,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_12714,new cljs.core.Keyword(null,"index","index",-1531685915),i_12712], null));
}
} else {
if((nv_12714 == null)){
var b__9763__auto___12717 = ((function (i_12712,ov_12713,nv_12714,n__5959__auto___12711,oc,nc,d,map__12707,map__12707__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_12712);
});})(i_12712,ov_12713,nv_12714,n__5959__auto___12711,oc,nc,d,map__12707,map__12707__$1,m,interceptors))
;
var v__9764__auto___12718 = interceptors;
if((cljs.core.not.call(null,v__9764__auto___12718)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto___12718))){
b__9763__auto___12717.call(null);
} else {
hipo.interceptor.call.call(null,b__9763__auto___12717,v__9764__auto___12718,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_12712], null));
}
} else {
var temp__4423__auto___12719 = hipo.dom.child.call(null,el,i_12712);
if(cljs.core.truth_(temp__4423__auto___12719)){
var cel_12720 = temp__4423__auto___12719;
hipo.interpreter.reconciliate_BANG_.call(null,cel_12720,ov_12713,nv_12714,m);
} else {
}

}
}
} else {
}

var G__12721 = (i_12712 + (1));
i_12712 = G__12721;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4423__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__4423__auto__)){
var h = temp__4423__auto__;
var b__9763__auto__ = ((function (h,temp__4423__auto__,oc,nc,d,map__12707,map__12707__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4423__auto__,oc,nc,d,map__12707,map__12707__$1,m,interceptors))
;
var v__9764__auto__ = interceptors;
if((cljs.core.not.call(null,v__9764__auto__)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto__))){
return b__9763__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__9763__auto__,v__9764__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__9763__auto___12722 = ((function (f,cs,oc,nc,d,map__12707,map__12707__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__12707,map__12707__$1,m,interceptors))
;
var v__9764__auto___12723 = interceptors;
if((cljs.core.not.call(null,v__9764__auto___12723)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto___12723))){
b__9763__auto___12722.call(null);
} else {
hipo.interceptor.call.call(null,b__9763__auto___12722,v__9764__auto___12723,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__12724){
var map__12727 = p__12724;
var map__12727__$1 = ((((!((map__12727 == null)))?((((map__12727.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12727.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12727):map__12727);
var m = map__12727__$1;
var interceptors = cljs.core.get.call(null,map__12727__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__9763__auto__ = ((function (map__12727,map__12727__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__12727,map__12727__$1,m,interceptors))
;
var v__9764__auto__ = interceptors;
if((cljs.core.not.call(null,v__9764__auto__)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto__))){
return b__9763__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__9763__auto__,v__9764__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__12729){
var map__12732 = p__12729;
var map__12732__$1 = ((((!((map__12732 == null)))?((((map__12732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12732):map__12732);
var m = map__12732__$1;
var interceptors = cljs.core.get.call(null,map__12732__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null))))].join('')));
}

if(cljs.core.truth_((function (){var or__5056__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__9763__auto__ = ((function (nel,map__12732,map__12732__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentElement",".-parentElement",407983630,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__12732,map__12732__$1,m,interceptors))
;
var v__9764__auto__ = interceptors;
if((cljs.core.not.call(null,v__9764__auto__)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto__))){
return b__9763__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__9763__auto__,v__9764__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__9763__auto___12734 = ((function (om,nm,och,nch,map__12732,map__12732__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__12732,map__12732__$1,m,interceptors))
;
var v__9764__auto___12735 = interceptors;
if((cljs.core.not.call(null,v__9764__auto___12735)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto___12735))){
b__9763__auto___12734.call(null);
} else {
hipo.interceptor.call.call(null,b__9763__auto___12734,v__9764__auto___12735,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__12736){
var map__12739 = p__12736;
var map__12739__$1 = ((((!((map__12739 == null)))?((((map__12739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12739):map__12739);
var m = map__12739__$1;
var interceptors = cljs.core.get.call(null,map__12739__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__5056__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__5056__auto__){
return or__5056__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null)),cljs.core.list(new cljs.core.Symbol("hic","literal?","hic/literal?",1992923056,null),new cljs.core.Symbol(null,"nh","nh",1280017554,null)))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

var b__9763__auto__ = ((function (map__12739,map__12739__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__9763__auto__ = ((function (map__12739,map__12739__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,".-parentElement",".-parentElement",407983630,null),new cljs.core.Symbol(null,"el","el",22330409,null))))].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str(nh)].join(''));
});})(map__12739,map__12739__$1,m,interceptors))
;
var v__9764__auto__ = interceptors;
if((cljs.core.not.call(null,v__9764__auto__)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto__))){
return b__9763__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__9763__auto__,v__9764__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__12739,map__12739__$1,m,interceptors))
;
var v__9764__auto__ = interceptors;
if((cljs.core.not.call(null,v__9764__auto__)) || (cljs.core.empty_QMARK_.call(null,v__9764__auto__))){
return b__9763__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__9763__auto__,v__9764__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map