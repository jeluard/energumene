// Compiled by ClojureScript 1.7.107 {}
goog.provide('happy.core');
goog.require('cljs.core');

/**
 * @interface
 */
happy.core.Client = function(){};

happy.core._supports = (function happy$core$_supports(_){
if((!((_ == null))) && (!((_.happy$core$Client$_supports$arity$1 == null)))){
return _.happy$core$Client$_supports$arity$1(_);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._supports[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_);
} else {
var m__5712__auto____$1 = (happy.core._supports["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Client.-supports",_);
}
}
}
});

happy.core._send_BANG_ = (function happy$core$_send_BANG_(_,req,m){
if((!((_ == null))) && (!((_.happy$core$Client$_send_BANG_$arity$3 == null)))){
return _.happy$core$Client$_send_BANG_$arity$3(_,req,m);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._send_BANG_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_,req,m);
} else {
var m__5712__auto____$1 = (happy.core._send_BANG_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_,req,m);
} else {
throw cljs.core.missing_protocol.call(null,"Client.-send!",_);
}
}
}
});

happy.core._abort = (function happy$core$_abort(_,o){
if((!((_ == null))) && (!((_.happy$core$Client$_abort$arity$2 == null)))){
return _.happy$core$Client$_abort$arity$2(_,o);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._abort[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_,o);
} else {
var m__5712__auto____$1 = (happy.core._abort["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_,o);
} else {
throw cljs.core.missing_protocol.call(null,"Client.-abort",_);
}
}
}
});

happy.core._status = (function happy$core$_status(_,o){
if((!((_ == null))) && (!((_.happy$core$Client$_status$arity$2 == null)))){
return _.happy$core$Client$_status$arity$2(_,o);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._status[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_,o);
} else {
var m__5712__auto____$1 = (happy.core._status["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_,o);
} else {
throw cljs.core.missing_protocol.call(null,"Client.-status",_);
}
}
}
});

happy.core._body = (function happy$core$_body(_,o){
if((!((_ == null))) && (!((_.happy$core$Client$_body$arity$2 == null)))){
return _.happy$core$Client$_body$arity$2(_,o);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._body[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_,o);
} else {
var m__5712__auto____$1 = (happy.core._body["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_,o);
} else {
throw cljs.core.missing_protocol.call(null,"Client.-body",_);
}
}
}
});

happy.core._header = (function happy$core$_header(_,o,s){
if((!((_ == null))) && (!((_.happy$core$Client$_header$arity$3 == null)))){
return _.happy$core$Client$_header$arity$3(_,o,s);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._header[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_,o,s);
} else {
var m__5712__auto____$1 = (happy.core._header["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_,o,s);
} else {
throw cljs.core.missing_protocol.call(null,"Client.-header",_);
}
}
}
});

happy.core._headers = (function happy$core$_headers(_,o){
if((!((_ == null))) && (!((_.happy$core$Client$_headers$arity$2 == null)))){
return _.happy$core$Client$_headers$arity$2(_,o);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._headers[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_,o);
} else {
var m__5712__auto____$1 = (happy.core._headers["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_,o);
} else {
throw cljs.core.missing_protocol.call(null,"Client.-headers",_);
}
}
}
});


/**
 * @interface
 */
happy.core.Representator = function(){};

happy.core._mime_types = (function happy$core$_mime_types(_,t){
if((!((_ == null))) && (!((_.happy$core$Representator$_mime_types$arity$2 == null)))){
return _.happy$core$Representator$_mime_types$arity$2(_,t);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._mime_types[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_,t);
} else {
var m__5712__auto____$1 = (happy.core._mime_types["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_,t);
} else {
throw cljs.core.missing_protocol.call(null,"Representator.-mime-types",_);
}
}
}
});

happy.core._serialize = (function happy$core$_serialize(_,o){
if((!((_ == null))) && (!((_.happy$core$Representator$_serialize$arity$2 == null)))){
return _.happy$core$Representator$_serialize$arity$2(_,o);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._serialize[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_,o);
} else {
var m__5712__auto____$1 = (happy.core._serialize["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_,o);
} else {
throw cljs.core.missing_protocol.call(null,"Representator.-serialize",_);
}
}
}
});

happy.core._unserialize = (function happy$core$_unserialize(_,t,o){
if((!((_ == null))) && (!((_.happy$core$Representator$_unserialize$arity$3 == null)))){
return _.happy$core$Representator$_unserialize$arity$3(_,t,o);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (happy.core._unserialize[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_,t,o);
} else {
var m__5712__auto____$1 = (happy.core._unserialize["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_,t,o);
} else {
throw cljs.core.missing_protocol.call(null,"Representator.-unserialize",_);
}
}
}
});

happy.core.rep_int_req = (function happy$core$rep_int_req(){
return null;
});
happy.core.response = (function happy$core$response(c,o){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"status","status",-1997798413),happy.core._status.call(null,c,o),new cljs.core.Keyword(null,"body","body",-2049205669),happy.core._body.call(null,c,o),new cljs.core.Keyword(null,"headers","headers",-835030129),happy.core._headers.call(null,c,o)], null);
});
happy.core.progress = (function happy$core$progress(var_args){
var args13048 = [];
var len__6114__auto___13051 = arguments.length;
var i__6115__auto___13052 = (0);
while(true){
if((i__6115__auto___13052 < len__6114__auto___13051)){
args13048.push((arguments[i__6115__auto___13052]));

var G__13053 = (i__6115__auto___13052 + (1));
i__6115__auto___13052 = G__13053;
continue;
} else {
}
break;
}

var G__13050 = args13048.length;
switch (G__13050) {
case 1:
return happy.core.progress.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return happy.core.progress.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13048.length)].join('')));

}
});

happy.core.progress.cljs$core$IFn$_invoke$arity$1 = (function (t){
return happy.core.progress.call(null,t,null);
});

happy.core.progress.cljs$core$IFn$_invoke$arity$2 = (function (t,m){
var b = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"change","change",-1163046502),t], null);
if(cljs.core.truth_(m)){
return cljs.core.merge.call(null,b,m);
} else {
return b;
}
});

happy.core.progress.cljs$lang$maxFixedArity = 2;
happy.core.failure = (function happy$core$failure(t){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"termination","termination",-1504134089),t], null);
});
happy.core.default_client = cljs.core.atom.call(null,null);
happy.core.set_default_client_BANG_ = (function happy$core$set_default_client_BANG_(c){
return cljs.core.reset_BANG_.call(null,happy.core.default_client,c);
});
happy.core.send_BANG_ = (function happy$core$send_BANG_(var_args){
var args13055 = [];
var len__6114__auto___13058 = arguments.length;
var i__6115__auto___13059 = (0);
while(true){
if((i__6115__auto___13059 < len__6114__auto___13058)){
args13055.push((arguments[i__6115__auto___13059]));

var G__13060 = (i__6115__auto___13059 + (1));
i__6115__auto___13059 = G__13060;
continue;
} else {
}
break;
}

var G__13057 = args13055.length;
switch (G__13057) {
case 2:
return happy.core.send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return happy.core.send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13055.length)].join('')));

}
});

happy.core.send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (req,m){
var c = cljs.core.deref.call(null,happy.core.default_client);
return happy.core.send_BANG_.call(null,c,req,m);
});

happy.core.send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (c,req,m){
return happy.core._send_BANG_.call(null,c,req,m);
});

happy.core.send_BANG_.cljs$lang$maxFixedArity = 3;
happy.core.GET = (function happy$core$GET(var_args){
var args13062 = [];
var len__6114__auto___13065 = arguments.length;
var i__6115__auto___13066 = (0);
while(true){
if((i__6115__auto___13066 < len__6114__auto___13065)){
args13062.push((arguments[i__6115__auto___13066]));

var G__13067 = (i__6115__auto___13066 + (1));
i__6115__auto___13066 = G__13067;
continue;
} else {
}
break;
}

var G__13064 = args13062.length;
switch (G__13064) {
case 1:
return happy.core.GET.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return happy.core.GET.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return happy.core.GET.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13062.length)].join('')));

}
});

happy.core.GET.cljs$core$IFn$_invoke$arity$1 = (function (url){
return happy.core.GET.call(null,url,cljs.core.PersistentArrayMap.EMPTY);
});

happy.core.GET.cljs$core$IFn$_invoke$arity$2 = (function (url,m){
return happy.core.GET.call(null,null,url,m);
});

happy.core.GET.cljs$core$IFn$_invoke$arity$3 = (function (c,url,m){
return happy.core.send_BANG_.call(null,c,cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url));
});

happy.core.GET.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map