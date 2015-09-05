// Compiled by ClojureScript 1.7.107 {}
goog.provide('happy.client.xmlhttprequest');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('happy.core');
happy.client.xmlhttprequest.parse_headers = (function happy$client$xmlhttprequest$parse_headers(s){
var headers = clojure.string.replace.call(null,s,/\n$/,"");
var lines = clojure.string.split_lines.call(null,headers);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5828__auto__ = ((function (headers,lines){
return (function happy$client$xmlhttprequest$parse_headers_$_iter__12131(s__12132){
return (new cljs.core.LazySeq(null,((function (headers,lines){
return (function (){
var s__12132__$1 = s__12132;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__12132__$1);
if(temp__4425__auto__){
var s__12132__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12132__$2)){
var c__5826__auto__ = cljs.core.chunk_first.call(null,s__12132__$2);
var size__5827__auto__ = cljs.core.count.call(null,c__5826__auto__);
var b__12134 = cljs.core.chunk_buffer.call(null,size__5827__auto__);
if((function (){var i__12133 = (0);
while(true){
if((i__12133 < size__5827__auto__)){
var line = cljs.core._nth.call(null,c__5826__auto__,i__12133);
var vec__12137 = clojure.string.split.call(null,line,/:/,(2));
var k = cljs.core.nth.call(null,vec__12137,(0),null);
var v = cljs.core.nth.call(null,vec__12137,(1),null);
cljs.core.chunk_append.call(null,b__12134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,clojure.string.trim.call(null,k)),clojure.string.trim.call(null,v)], null));

var G__12139 = (i__12133 + (1));
i__12133 = G__12139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12134),happy$client$xmlhttprequest$parse_headers_$_iter__12131.call(null,cljs.core.chunk_rest.call(null,s__12132__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12134),null);
}
} else {
var line = cljs.core.first.call(null,s__12132__$2);
var vec__12138 = clojure.string.split.call(null,line,/:/,(2));
var k = cljs.core.nth.call(null,vec__12138,(0),null);
var v = cljs.core.nth.call(null,vec__12138,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.lower_case.call(null,clojure.string.trim.call(null,k)),clojure.string.trim.call(null,v)], null),happy$client$xmlhttprequest$parse_headers_$_iter__12131.call(null,cljs.core.rest.call(null,s__12132__$2)));
}
} else {
return null;
}
break;
}
});})(headers,lines))
,null,null));
});})(headers,lines))
;
return iter__5828__auto__.call(null,lines);
})());
});
happy.client.xmlhttprequest.method__GT_string = (function happy$client$xmlhttprequest$method__GT_string(k){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,k));
});
happy.client.xmlhttprequest.progress_details = (function happy$client$xmlhttprequest$progress_details(evt){
if(cljs.core.truth_(evt.lengthComputable)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded,new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null);
} else {
return null;
}
});
happy.client.xmlhttprequest.send_BANG_ = (function happy$client$xmlhttprequest$send_BANG_(c,p__12142,p__12143){
var map__12154 = p__12142;
var map__12154__$1 = ((((!((map__12154 == null)))?((((map__12154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12154):map__12154);
var url = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"method","method",55703592));
var headers = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var authentication = cljs.core.get.call(null,map__12154__$1,new cljs.core.Keyword(null,"authentication","authentication",1746273042));
var map__12155 = p__12143;
var map__12155__$1 = ((((!((map__12155 == null)))?((((map__12155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12155):map__12155);
var handler = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var timeout = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var report_progress_QMARK_ = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"report-progress?","report-progress?",-578292374));
var body_as = cljs.core.get.call(null,map__12155__$1,new cljs.core.Keyword(null,"body-as","body-as",-443562081));
var xhr = (new XMLHttpRequest());
var s = happy.client.xmlhttprequest.method__GT_string.call(null,method);
if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.withCredentials = true;
} else {
}

if(cljs.core.truth_(body_as)){
xhr.responseType = cljs.core.name.call(null,body_as);
} else {
}

if(cljs.core.truth_(timeout)){
xhr.timeout = timeout;
} else {
}

if((cljs.core.map_QMARK_.call(null,authentication)) && (cljs.core.contains_QMARK_.call(null,authentication,new cljs.core.Keyword(null,"username","username",1605666410))) && (cljs.core.contains_QMARK_.call(null,authentication,new cljs.core.Keyword(null,"password","password",417022471)))){
xhr.open(s,url,true,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(authentication),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(authentication));
} else {
xhr.open(s,url,true);
}

var seq__12158_12164 = cljs.core.seq.call(null,headers);
var chunk__12159_12165 = null;
var count__12160_12166 = (0);
var i__12161_12167 = (0);
while(true){
if((i__12161_12167 < count__12160_12166)){
var vec__12162_12168 = cljs.core._nth.call(null,chunk__12159_12165,i__12161_12167);
var k_12169 = cljs.core.nth.call(null,vec__12162_12168,(0),null);
var v_12170 = cljs.core.nth.call(null,vec__12162_12168,(1),null);
xhr.setRequestHeader(k_12169,v_12170);

var G__12171 = seq__12158_12164;
var G__12172 = chunk__12159_12165;
var G__12173 = count__12160_12166;
var G__12174 = (i__12161_12167 + (1));
seq__12158_12164 = G__12171;
chunk__12159_12165 = G__12172;
count__12160_12166 = G__12173;
i__12161_12167 = G__12174;
continue;
} else {
var temp__4425__auto___12175 = cljs.core.seq.call(null,seq__12158_12164);
if(temp__4425__auto___12175){
var seq__12158_12176__$1 = temp__4425__auto___12175;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12158_12176__$1)){
var c__5859__auto___12177 = cljs.core.chunk_first.call(null,seq__12158_12176__$1);
var G__12178 = cljs.core.chunk_rest.call(null,seq__12158_12176__$1);
var G__12179 = c__5859__auto___12177;
var G__12180 = cljs.core.count.call(null,c__5859__auto___12177);
var G__12181 = (0);
seq__12158_12164 = G__12178;
chunk__12159_12165 = G__12179;
count__12160_12166 = G__12180;
i__12161_12167 = G__12181;
continue;
} else {
var vec__12163_12182 = cljs.core.first.call(null,seq__12158_12176__$1);
var k_12183 = cljs.core.nth.call(null,vec__12163_12182,(0),null);
var v_12184 = cljs.core.nth.call(null,vec__12163_12182,(1),null);
xhr.setRequestHeader(k_12183,v_12184);

var G__12185 = cljs.core.next.call(null,seq__12158_12176__$1);
var G__12186 = null;
var G__12187 = (0);
var G__12188 = (0);
seq__12158_12164 = G__12185;
chunk__12159_12165 = G__12186;
count__12160_12166 = G__12187;
i__12161_12167 = G__12188;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(handler)){
xhr.onload = ((function (xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as){
return (function (){
return handler.call(null,happy.core.response.call(null,c,xhr));
});})(xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as))
;

xhr.onabort = ((function (xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as){
return (function (){
return handler.call(null,happy.core.failure.call(null,new cljs.core.Keyword(null,"abort","abort",521193198)));
});})(xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as))
;

xhr.onerror = ((function (xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as){
return (function (){
return handler.call(null,happy.core.failure.call(null,new cljs.core.Keyword(null,"network","network",2050004697)));
});})(xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as))
;

xhr.ontimeout = ((function (xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as){
return (function (){
return handler.call(null,happy.core.failure.call(null,new cljs.core.Keyword(null,"network","network",2050004697)));
});})(xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as))
;

if(cljs.core.truth_(report_progress_QMARK_)){
xhr.onprogress = ((function (xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as){
return (function (p1__12140_SHARP_){
return handler.call(null,happy.core.progress.call(null,new cljs.core.Keyword(null,"receiving","receiving",829203724),happy.client.xmlhttprequest.progress_details.call(null,p1__12140_SHARP_)));
});})(xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as))
;

xhr.onreadystatechange = ((function (xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as){
return (function (p1__12141_SHARP_){
var i = p1__12141_SHARP_.target.readyState;
if(cljs.core._EQ_.call(null,(2),i)){
return handler.call(null,happy.core.progress.call(null,new cljs.core.Keyword(null,"headers-received","headers-received",-910387251)));
} else {
return null;
}
});})(xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as))
;

var t_12189 = (cljs.core.truth_(body)?xhr.upload:xhr);
t_12189.onprogress = ((function (t_12189,xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as){
return (function (){
return handler.call(null,happy.core.progress.call(null,new cljs.core.Keyword(null,"sending","sending",-1806704862)));
});})(t_12189,xhr,s,map__12154,map__12154__$1,url,method,headers,body,authentication,map__12155,map__12155__$1,handler,with_credentials_QMARK_,timeout,report_progress_QMARK_,body_as))
;
} else {
}
} else {
}

if(cljs.core.truth_(body)){
xhr.send(body);
} else {
xhr.send();
}

return xhr;
});
happy.client.xmlhttprequest.create = (function happy$client$xmlhttprequest$create(var_args){
var args__6121__auto__ = [];
var len__6114__auto___12194 = arguments.length;
var i__6115__auto___12195 = (0);
while(true){
if((i__6115__auto___12195 < len__6114__auto___12194)){
args__6121__auto__.push((arguments[i__6115__auto___12195]));

var G__12196 = (i__6115__auto___12195 + (1));
i__6115__auto___12195 = G__12196;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((0) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((0)),(0))):null);
return happy.client.xmlhttprequest.create.cljs$core$IFn$_invoke$arity$variadic(argseq__6122__auto__);
});

happy.client.xmlhttprequest.create.cljs$core$IFn$_invoke$arity$variadic = (function (options){
if(typeof happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {happy.core.Client}
 * @implements {cljs.core.IWithMeta}
*/
happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191 = (function (options,meta12192){
this.options = options;
this.meta12192 = meta12192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12193,meta12192__$1){
var self__ = this;
var _12193__$1 = this;
return (new happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191(self__.options,meta12192__$1));
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12193){
var self__ = this;
var _12193__$1 = this;
return self__.meta12192;
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.happy$core$Client$ = true;

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.happy$core$Client$_supports$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"progress","progress",244323547),true,new cljs.core.Keyword(null,"timeout","timeout",-318625318),true,new cljs.core.Keyword(null,"stream","stream",1534941648),false,new cljs.core.Keyword(null,"request-body-as","request-body-as",1647123054),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"response-body-as","response-body-as",2136952910),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blob","blob",1636965233),null,new cljs.core.Keyword(null,"arraybuffer","arraybuffer",1394959763),null], null), null)], null);
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.happy$core$Client$_send_BANG_$arity$3 = (function (c,req,m){
var self__ = this;
var c__$1 = this;
return happy.client.xmlhttprequest.send_BANG_.call(null,c__$1,req,cljs.core.merge.call(null,self__.options,m));
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.happy$core$Client$_abort$arity$2 = (function (_,xhr){
var self__ = this;
var ___$1 = this;
return xhr.abort();
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.happy$core$Client$_status$arity$2 = (function (_,xhr){
var self__ = this;
var ___$1 = this;
return xhr.status;
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.happy$core$Client$_header$arity$3 = (function (_,xhr,s){
var self__ = this;
var ___$1 = this;
return xhr.getResponseHeader(s);
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.happy$core$Client$_headers$arity$2 = (function (_,xhr){
var self__ = this;
var ___$1 = this;
return happy.client.xmlhttprequest.parse_headers.call(null,xhr.getAllResponseHeaders());
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.prototype.happy$core$Client$_body$arity$2 = (function (_,xhr){
var self__ = this;
var ___$1 = this;
return xhr.response;
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"options","options",1740170016,null),new cljs.core.Symbol(null,"meta12192","meta12192",1253805805,null)], null);
});

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.cljs$lang$type = true;

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.cljs$lang$ctorStr = "happy.client.xmlhttprequest/t_happy$client$xmlhttprequest12191";

happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191.cljs$lang$ctorPrWriter = (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"happy.client.xmlhttprequest/t_happy$client$xmlhttprequest12191");
});

happy.client.xmlhttprequest.__GT_t_happy$client$xmlhttprequest12191 = (function happy$client$xmlhttprequest$__GT_t_happy$client$xmlhttprequest12191(options__$1,meta12192){
return (new happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191(options__$1,meta12192));
});

}

return (new happy.client.xmlhttprequest.t_happy$client$xmlhttprequest12191(options,cljs.core.PersistentArrayMap.EMPTY));
});

happy.client.xmlhttprequest.create.cljs$lang$maxFixedArity = (0);

happy.client.xmlhttprequest.create.cljs$lang$applyTo = (function (seq12190){
return happy.client.xmlhttprequest.create.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12190));
});

//# sourceMappingURL=xmlhttprequest.js.map