// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async13126 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13126 = (function (fn_handler,f,meta13127){
this.fn_handler = fn_handler;
this.f = f;
this.meta13127 = meta13127;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13128,meta13127__$1){
var self__ = this;
var _13128__$1 = this;
return (new cljs.core.async.t_cljs$core$async13126(self__.fn_handler,self__.f,meta13127__$1));
});

cljs.core.async.t_cljs$core$async13126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13128){
var self__ = this;
var _13128__$1 = this;
return self__.meta13127;
});

cljs.core.async.t_cljs$core$async13126.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13126.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13126.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13126.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta13127","meta13127",1605519466,null)], null);
});

cljs.core.async.t_cljs$core$async13126.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13126.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13126";

cljs.core.async.t_cljs$core$async13126.cljs$lang$ctorPrWriter = (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async13126");
});

cljs.core.async.__GT_t_cljs$core$async13126 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async13126(fn_handler__$1,f__$1,meta13127){
return (new cljs.core.async.t_cljs$core$async13126(fn_handler__$1,f__$1,meta13127));
});

}

return (new cljs.core.async.t_cljs$core$async13126(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args13131 = [];
var len__6114__auto___13134 = arguments.length;
var i__6115__auto___13135 = (0);
while(true){
if((i__6115__auto___13135 < len__6114__auto___13134)){
args13131.push((arguments[i__6115__auto___13135]));

var G__13136 = (i__6115__auto___13135 + (1));
i__6115__auto___13135 = G__13136;
continue;
} else {
}
break;
}

var G__13133 = args13131.length;
switch (G__13133) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13131.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args13138 = [];
var len__6114__auto___13141 = arguments.length;
var i__6115__auto___13142 = (0);
while(true){
if((i__6115__auto___13142 < len__6114__auto___13141)){
args13138.push((arguments[i__6115__auto___13142]));

var G__13143 = (i__6115__auto___13142 + (1));
i__6115__auto___13142 = G__13143;
continue;
} else {
}
break;
}

var G__13140 = args13138.length;
switch (G__13140) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13138.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13145 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13145);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13145,ret){
return (function (){
return fn1.call(null,val_13145);
});})(val_13145,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args13146 = [];
var len__6114__auto___13149 = arguments.length;
var i__6115__auto___13150 = (0);
while(true){
if((i__6115__auto___13150 < len__6114__auto___13149)){
args13146.push((arguments[i__6115__auto___13150]));

var G__13151 = (i__6115__auto___13150 + (1));
i__6115__auto___13150 = G__13151;
continue;
} else {
}
break;
}

var G__13148 = args13146.length;
switch (G__13148) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13146.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5959__auto___13153 = n;
var x_13154 = (0);
while(true){
if((x_13154 < n__5959__auto___13153)){
(a[x_13154] = (0));

var G__13155 = (x_13154 + (1));
x_13154 = G__13155;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13156 = (i + (1));
i = G__13156;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13160 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13160 = (function (alt_flag,flag,meta13161){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13161 = meta13161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13162,meta13161__$1){
var self__ = this;
var _13162__$1 = this;
return (new cljs.core.async.t_cljs$core$async13160(self__.alt_flag,self__.flag,meta13161__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13160.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13162){
var self__ = this;
var _13162__$1 = this;
return self__.meta13161;
});})(flag))
;

cljs.core.async.t_cljs$core$async13160.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13160.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13161","meta13161",1766851572,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13160.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13160";

cljs.core.async.t_cljs$core$async13160.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async13160");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13160 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13160(alt_flag__$1,flag__$1,meta13161){
return (new cljs.core.async.t_cljs$core$async13160(alt_flag__$1,flag__$1,meta13161));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13160(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13166 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13166 = (function (alt_handler,flag,cb,meta13167){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13167 = meta13167;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13168,meta13167__$1){
var self__ = this;
var _13168__$1 = this;
return (new cljs.core.async.t_cljs$core$async13166(self__.alt_handler,self__.flag,self__.cb,meta13167__$1));
});

cljs.core.async.t_cljs$core$async13166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13168){
var self__ = this;
var _13168__$1 = this;
return self__.meta13167;
});

cljs.core.async.t_cljs$core$async13166.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13166.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13166.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13166.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13167","meta13167",-1039227527,null)], null);
});

cljs.core.async.t_cljs$core$async13166.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13166.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13166";

cljs.core.async.t_cljs$core$async13166.cljs$lang$ctorPrWriter = (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async13166");
});

cljs.core.async.__GT_t_cljs$core$async13166 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13166(alt_handler__$1,flag__$1,cb__$1,meta13167){
return (new cljs.core.async.t_cljs$core$async13166(alt_handler__$1,flag__$1,cb__$1,meta13167));
});

}

return (new cljs.core.async.t_cljs$core$async13166(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13169_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13169_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13170_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13170_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5056__auto__ = wport;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13171 = (i + (1));
i = G__13171;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5056__auto__ = ret;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__5044__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5044__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5044__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6121__auto__ = [];
var len__6114__auto___13177 = arguments.length;
var i__6115__auto___13178 = (0);
while(true){
if((i__6115__auto___13178 < len__6114__auto___13177)){
args__6121__auto__.push((arguments[i__6115__auto___13178]));

var G__13179 = (i__6115__auto___13178 + (1));
i__6115__auto___13178 = G__13179;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((1) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6122__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13174){
var map__13175 = p__13174;
var map__13175__$1 = ((((!((map__13175 == null)))?((((map__13175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13175):map__13175);
var opts = map__13175__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13172){
var G__13173 = cljs.core.first.call(null,seq13172);
var seq13172__$1 = cljs.core.next.call(null,seq13172);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13173,seq13172__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13180 = [];
var len__6114__auto___13230 = arguments.length;
var i__6115__auto___13231 = (0);
while(true){
if((i__6115__auto___13231 < len__6114__auto___13230)){
args13180.push((arguments[i__6115__auto___13231]));

var G__13232 = (i__6115__auto___13231 + (1));
i__6115__auto___13231 = G__13232;
continue;
} else {
}
break;
}

var G__13182 = args13180.length;
switch (G__13182) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13180.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7509__auto___13234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___13234){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___13234){
return (function (state_13206){
var state_val_13207 = (state_13206[(1)]);
if((state_val_13207 === (7))){
var inst_13202 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
var statearr_13208_13235 = state_13206__$1;
(statearr_13208_13235[(2)] = inst_13202);

(statearr_13208_13235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (1))){
var state_13206__$1 = state_13206;
var statearr_13209_13236 = state_13206__$1;
(statearr_13209_13236[(2)] = null);

(statearr_13209_13236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (4))){
var inst_13185 = (state_13206[(7)]);
var inst_13185__$1 = (state_13206[(2)]);
var inst_13186 = (inst_13185__$1 == null);
var state_13206__$1 = (function (){var statearr_13210 = state_13206;
(statearr_13210[(7)] = inst_13185__$1);

return statearr_13210;
})();
if(cljs.core.truth_(inst_13186)){
var statearr_13211_13237 = state_13206__$1;
(statearr_13211_13237[(1)] = (5));

} else {
var statearr_13212_13238 = state_13206__$1;
(statearr_13212_13238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (13))){
var state_13206__$1 = state_13206;
var statearr_13213_13239 = state_13206__$1;
(statearr_13213_13239[(2)] = null);

(statearr_13213_13239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (6))){
var inst_13185 = (state_13206[(7)]);
var state_13206__$1 = state_13206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13206__$1,(11),to,inst_13185);
} else {
if((state_val_13207 === (3))){
var inst_13204 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13206__$1,inst_13204);
} else {
if((state_val_13207 === (12))){
var state_13206__$1 = state_13206;
var statearr_13214_13240 = state_13206__$1;
(statearr_13214_13240[(2)] = null);

(statearr_13214_13240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (2))){
var state_13206__$1 = state_13206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13206__$1,(4),from);
} else {
if((state_val_13207 === (11))){
var inst_13195 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
if(cljs.core.truth_(inst_13195)){
var statearr_13215_13241 = state_13206__$1;
(statearr_13215_13241[(1)] = (12));

} else {
var statearr_13216_13242 = state_13206__$1;
(statearr_13216_13242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (9))){
var state_13206__$1 = state_13206;
var statearr_13217_13243 = state_13206__$1;
(statearr_13217_13243[(2)] = null);

(statearr_13217_13243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (5))){
var state_13206__$1 = state_13206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13218_13244 = state_13206__$1;
(statearr_13218_13244[(1)] = (8));

} else {
var statearr_13219_13245 = state_13206__$1;
(statearr_13219_13245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (14))){
var inst_13200 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
var statearr_13220_13246 = state_13206__$1;
(statearr_13220_13246[(2)] = inst_13200);

(statearr_13220_13246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (10))){
var inst_13192 = (state_13206[(2)]);
var state_13206__$1 = state_13206;
var statearr_13221_13247 = state_13206__$1;
(statearr_13221_13247[(2)] = inst_13192);

(statearr_13221_13247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13207 === (8))){
var inst_13189 = cljs.core.async.close_BANG_.call(null,to);
var state_13206__$1 = state_13206;
var statearr_13222_13248 = state_13206__$1;
(statearr_13222_13248[(2)] = inst_13189);

(statearr_13222_13248[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___13234))
;
return ((function (switch__7444__auto__,c__7509__auto___13234){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_13226 = [null,null,null,null,null,null,null,null];
(statearr_13226[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_13226[(1)] = (1));

return statearr_13226;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_13206){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_13206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e13227){if((e13227 instanceof Object)){
var ex__7448__auto__ = e13227;
var statearr_13228_13249 = state_13206;
(statearr_13228_13249[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13250 = state_13206;
state_13206 = G__13250;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_13206){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_13206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___13234))
})();
var state__7511__auto__ = (function (){var statearr_13229 = f__7510__auto__.call(null);
(statearr_13229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___13234);

return statearr_13229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___13234))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13434){
var vec__13435 = p__13434;
var v = cljs.core.nth.call(null,vec__13435,(0),null);
var p = cljs.core.nth.call(null,vec__13435,(1),null);
var job = vec__13435;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7509__auto___13617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___13617,res,vec__13435,v,p,job,jobs,results){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___13617,res,vec__13435,v,p,job,jobs,results){
return (function (state_13440){
var state_val_13441 = (state_13440[(1)]);
if((state_val_13441 === (1))){
var state_13440__$1 = state_13440;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13440__$1,(2),res,v);
} else {
if((state_val_13441 === (2))){
var inst_13437 = (state_13440[(2)]);
var inst_13438 = cljs.core.async.close_BANG_.call(null,res);
var state_13440__$1 = (function (){var statearr_13442 = state_13440;
(statearr_13442[(7)] = inst_13437);

return statearr_13442;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13440__$1,inst_13438);
} else {
return null;
}
}
});})(c__7509__auto___13617,res,vec__13435,v,p,job,jobs,results))
;
return ((function (switch__7444__auto__,c__7509__auto___13617,res,vec__13435,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0 = (function (){
var statearr_13446 = [null,null,null,null,null,null,null,null];
(statearr_13446[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__);

(statearr_13446[(1)] = (1));

return statearr_13446;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1 = (function (state_13440){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_13440);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e13447){if((e13447 instanceof Object)){
var ex__7448__auto__ = e13447;
var statearr_13448_13618 = state_13440;
(statearr_13448_13618[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13440);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13619 = state_13440;
state_13440 = G__13619;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = function(state_13440){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1.call(this,state_13440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___13617,res,vec__13435,v,p,job,jobs,results))
})();
var state__7511__auto__ = (function (){var statearr_13449 = f__7510__auto__.call(null);
(statearr_13449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___13617);

return statearr_13449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___13617,res,vec__13435,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13450){
var vec__13451 = p__13450;
var v = cljs.core.nth.call(null,vec__13451,(0),null);
var p = cljs.core.nth.call(null,vec__13451,(1),null);
var job = vec__13451;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5959__auto___13620 = n;
var __13621 = (0);
while(true){
if((__13621 < n__5959__auto___13620)){
var G__13452_13622 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13452_13622) {
case "compute":
var c__7509__auto___13624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13621,c__7509__auto___13624,G__13452_13622,n__5959__auto___13620,jobs,results,process,async){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (__13621,c__7509__auto___13624,G__13452_13622,n__5959__auto___13620,jobs,results,process,async){
return (function (state_13465){
var state_val_13466 = (state_13465[(1)]);
if((state_val_13466 === (1))){
var state_13465__$1 = state_13465;
var statearr_13467_13625 = state_13465__$1;
(statearr_13467_13625[(2)] = null);

(statearr_13467_13625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (2))){
var state_13465__$1 = state_13465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13465__$1,(4),jobs);
} else {
if((state_val_13466 === (3))){
var inst_13463 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13465__$1,inst_13463);
} else {
if((state_val_13466 === (4))){
var inst_13455 = (state_13465[(2)]);
var inst_13456 = process.call(null,inst_13455);
var state_13465__$1 = state_13465;
if(cljs.core.truth_(inst_13456)){
var statearr_13468_13626 = state_13465__$1;
(statearr_13468_13626[(1)] = (5));

} else {
var statearr_13469_13627 = state_13465__$1;
(statearr_13469_13627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (5))){
var state_13465__$1 = state_13465;
var statearr_13470_13628 = state_13465__$1;
(statearr_13470_13628[(2)] = null);

(statearr_13470_13628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (6))){
var state_13465__$1 = state_13465;
var statearr_13471_13629 = state_13465__$1;
(statearr_13471_13629[(2)] = null);

(statearr_13471_13629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13466 === (7))){
var inst_13461 = (state_13465[(2)]);
var state_13465__$1 = state_13465;
var statearr_13472_13630 = state_13465__$1;
(statearr_13472_13630[(2)] = inst_13461);

(statearr_13472_13630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13621,c__7509__auto___13624,G__13452_13622,n__5959__auto___13620,jobs,results,process,async))
;
return ((function (__13621,switch__7444__auto__,c__7509__auto___13624,G__13452_13622,n__5959__auto___13620,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0 = (function (){
var statearr_13476 = [null,null,null,null,null,null,null];
(statearr_13476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__);

(statearr_13476[(1)] = (1));

return statearr_13476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1 = (function (state_13465){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_13465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e13477){if((e13477 instanceof Object)){
var ex__7448__auto__ = e13477;
var statearr_13478_13631 = state_13465;
(statearr_13478_13631[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13632 = state_13465;
state_13465 = G__13632;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = function(state_13465){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1.call(this,state_13465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__;
})()
;})(__13621,switch__7444__auto__,c__7509__auto___13624,G__13452_13622,n__5959__auto___13620,jobs,results,process,async))
})();
var state__7511__auto__ = (function (){var statearr_13479 = f__7510__auto__.call(null);
(statearr_13479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___13624);

return statearr_13479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(__13621,c__7509__auto___13624,G__13452_13622,n__5959__auto___13620,jobs,results,process,async))
);


break;
case "async":
var c__7509__auto___13633 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13621,c__7509__auto___13633,G__13452_13622,n__5959__auto___13620,jobs,results,process,async){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (__13621,c__7509__auto___13633,G__13452_13622,n__5959__auto___13620,jobs,results,process,async){
return (function (state_13492){
var state_val_13493 = (state_13492[(1)]);
if((state_val_13493 === (1))){
var state_13492__$1 = state_13492;
var statearr_13494_13634 = state_13492__$1;
(statearr_13494_13634[(2)] = null);

(statearr_13494_13634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (2))){
var state_13492__$1 = state_13492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13492__$1,(4),jobs);
} else {
if((state_val_13493 === (3))){
var inst_13490 = (state_13492[(2)]);
var state_13492__$1 = state_13492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13492__$1,inst_13490);
} else {
if((state_val_13493 === (4))){
var inst_13482 = (state_13492[(2)]);
var inst_13483 = async.call(null,inst_13482);
var state_13492__$1 = state_13492;
if(cljs.core.truth_(inst_13483)){
var statearr_13495_13635 = state_13492__$1;
(statearr_13495_13635[(1)] = (5));

} else {
var statearr_13496_13636 = state_13492__$1;
(statearr_13496_13636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (5))){
var state_13492__$1 = state_13492;
var statearr_13497_13637 = state_13492__$1;
(statearr_13497_13637[(2)] = null);

(statearr_13497_13637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (6))){
var state_13492__$1 = state_13492;
var statearr_13498_13638 = state_13492__$1;
(statearr_13498_13638[(2)] = null);

(statearr_13498_13638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13493 === (7))){
var inst_13488 = (state_13492[(2)]);
var state_13492__$1 = state_13492;
var statearr_13499_13639 = state_13492__$1;
(statearr_13499_13639[(2)] = inst_13488);

(statearr_13499_13639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__13621,c__7509__auto___13633,G__13452_13622,n__5959__auto___13620,jobs,results,process,async))
;
return ((function (__13621,switch__7444__auto__,c__7509__auto___13633,G__13452_13622,n__5959__auto___13620,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0 = (function (){
var statearr_13503 = [null,null,null,null,null,null,null];
(statearr_13503[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__);

(statearr_13503[(1)] = (1));

return statearr_13503;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1 = (function (state_13492){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_13492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e13504){if((e13504 instanceof Object)){
var ex__7448__auto__ = e13504;
var statearr_13505_13640 = state_13492;
(statearr_13505_13640[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13641 = state_13492;
state_13492 = G__13641;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = function(state_13492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1.call(this,state_13492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__;
})()
;})(__13621,switch__7444__auto__,c__7509__auto___13633,G__13452_13622,n__5959__auto___13620,jobs,results,process,async))
})();
var state__7511__auto__ = (function (){var statearr_13506 = f__7510__auto__.call(null);
(statearr_13506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___13633);

return statearr_13506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(__13621,c__7509__auto___13633,G__13452_13622,n__5959__auto___13620,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__13642 = (__13621 + (1));
__13621 = G__13642;
continue;
} else {
}
break;
}

var c__7509__auto___13643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___13643,jobs,results,process,async){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___13643,jobs,results,process,async){
return (function (state_13528){
var state_val_13529 = (state_13528[(1)]);
if((state_val_13529 === (1))){
var state_13528__$1 = state_13528;
var statearr_13530_13644 = state_13528__$1;
(statearr_13530_13644[(2)] = null);

(statearr_13530_13644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (2))){
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13528__$1,(4),from);
} else {
if((state_val_13529 === (3))){
var inst_13526 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13528__$1,inst_13526);
} else {
if((state_val_13529 === (4))){
var inst_13509 = (state_13528[(7)]);
var inst_13509__$1 = (state_13528[(2)]);
var inst_13510 = (inst_13509__$1 == null);
var state_13528__$1 = (function (){var statearr_13531 = state_13528;
(statearr_13531[(7)] = inst_13509__$1);

return statearr_13531;
})();
if(cljs.core.truth_(inst_13510)){
var statearr_13532_13645 = state_13528__$1;
(statearr_13532_13645[(1)] = (5));

} else {
var statearr_13533_13646 = state_13528__$1;
(statearr_13533_13646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (5))){
var inst_13512 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13528__$1 = state_13528;
var statearr_13534_13647 = state_13528__$1;
(statearr_13534_13647[(2)] = inst_13512);

(statearr_13534_13647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (6))){
var inst_13509 = (state_13528[(7)]);
var inst_13514 = (state_13528[(8)]);
var inst_13514__$1 = cljs.core.async.chan.call(null,(1));
var inst_13515 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13516 = [inst_13509,inst_13514__$1];
var inst_13517 = (new cljs.core.PersistentVector(null,2,(5),inst_13515,inst_13516,null));
var state_13528__$1 = (function (){var statearr_13535 = state_13528;
(statearr_13535[(8)] = inst_13514__$1);

return statearr_13535;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13528__$1,(8),jobs,inst_13517);
} else {
if((state_val_13529 === (7))){
var inst_13524 = (state_13528[(2)]);
var state_13528__$1 = state_13528;
var statearr_13536_13648 = state_13528__$1;
(statearr_13536_13648[(2)] = inst_13524);

(statearr_13536_13648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13529 === (8))){
var inst_13514 = (state_13528[(8)]);
var inst_13519 = (state_13528[(2)]);
var state_13528__$1 = (function (){var statearr_13537 = state_13528;
(statearr_13537[(9)] = inst_13519);

return statearr_13537;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13528__$1,(9),results,inst_13514);
} else {
if((state_val_13529 === (9))){
var inst_13521 = (state_13528[(2)]);
var state_13528__$1 = (function (){var statearr_13538 = state_13528;
(statearr_13538[(10)] = inst_13521);

return statearr_13538;
})();
var statearr_13539_13649 = state_13528__$1;
(statearr_13539_13649[(2)] = null);

(statearr_13539_13649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___13643,jobs,results,process,async))
;
return ((function (switch__7444__auto__,c__7509__auto___13643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0 = (function (){
var statearr_13543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__);

(statearr_13543[(1)] = (1));

return statearr_13543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1 = (function (state_13528){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_13528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e13544){if((e13544 instanceof Object)){
var ex__7448__auto__ = e13544;
var statearr_13545_13650 = state_13528;
(statearr_13545_13650[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13651 = state_13528;
state_13528 = G__13651;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = function(state_13528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1.call(this,state_13528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___13643,jobs,results,process,async))
})();
var state__7511__auto__ = (function (){var statearr_13546 = f__7510__auto__.call(null);
(statearr_13546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___13643);

return statearr_13546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___13643,jobs,results,process,async))
);


var c__7509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto__,jobs,results,process,async){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto__,jobs,results,process,async){
return (function (state_13584){
var state_val_13585 = (state_13584[(1)]);
if((state_val_13585 === (7))){
var inst_13580 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13586_13652 = state_13584__$1;
(statearr_13586_13652[(2)] = inst_13580);

(statearr_13586_13652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (20))){
var state_13584__$1 = state_13584;
var statearr_13587_13653 = state_13584__$1;
(statearr_13587_13653[(2)] = null);

(statearr_13587_13653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (1))){
var state_13584__$1 = state_13584;
var statearr_13588_13654 = state_13584__$1;
(statearr_13588_13654[(2)] = null);

(statearr_13588_13654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (4))){
var inst_13549 = (state_13584[(7)]);
var inst_13549__$1 = (state_13584[(2)]);
var inst_13550 = (inst_13549__$1 == null);
var state_13584__$1 = (function (){var statearr_13589 = state_13584;
(statearr_13589[(7)] = inst_13549__$1);

return statearr_13589;
})();
if(cljs.core.truth_(inst_13550)){
var statearr_13590_13655 = state_13584__$1;
(statearr_13590_13655[(1)] = (5));

} else {
var statearr_13591_13656 = state_13584__$1;
(statearr_13591_13656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (15))){
var inst_13562 = (state_13584[(8)]);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13584__$1,(18),to,inst_13562);
} else {
if((state_val_13585 === (21))){
var inst_13575 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13592_13657 = state_13584__$1;
(statearr_13592_13657[(2)] = inst_13575);

(statearr_13592_13657[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (13))){
var inst_13577 = (state_13584[(2)]);
var state_13584__$1 = (function (){var statearr_13593 = state_13584;
(statearr_13593[(9)] = inst_13577);

return statearr_13593;
})();
var statearr_13594_13658 = state_13584__$1;
(statearr_13594_13658[(2)] = null);

(statearr_13594_13658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (6))){
var inst_13549 = (state_13584[(7)]);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13584__$1,(11),inst_13549);
} else {
if((state_val_13585 === (17))){
var inst_13570 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
if(cljs.core.truth_(inst_13570)){
var statearr_13595_13659 = state_13584__$1;
(statearr_13595_13659[(1)] = (19));

} else {
var statearr_13596_13660 = state_13584__$1;
(statearr_13596_13660[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (3))){
var inst_13582 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13584__$1,inst_13582);
} else {
if((state_val_13585 === (12))){
var inst_13559 = (state_13584[(10)]);
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13584__$1,(14),inst_13559);
} else {
if((state_val_13585 === (2))){
var state_13584__$1 = state_13584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13584__$1,(4),results);
} else {
if((state_val_13585 === (19))){
var state_13584__$1 = state_13584;
var statearr_13597_13661 = state_13584__$1;
(statearr_13597_13661[(2)] = null);

(statearr_13597_13661[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (11))){
var inst_13559 = (state_13584[(2)]);
var state_13584__$1 = (function (){var statearr_13598 = state_13584;
(statearr_13598[(10)] = inst_13559);

return statearr_13598;
})();
var statearr_13599_13662 = state_13584__$1;
(statearr_13599_13662[(2)] = null);

(statearr_13599_13662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (9))){
var state_13584__$1 = state_13584;
var statearr_13600_13663 = state_13584__$1;
(statearr_13600_13663[(2)] = null);

(statearr_13600_13663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (5))){
var state_13584__$1 = state_13584;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13601_13664 = state_13584__$1;
(statearr_13601_13664[(1)] = (8));

} else {
var statearr_13602_13665 = state_13584__$1;
(statearr_13602_13665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (14))){
var inst_13564 = (state_13584[(11)]);
var inst_13562 = (state_13584[(8)]);
var inst_13562__$1 = (state_13584[(2)]);
var inst_13563 = (inst_13562__$1 == null);
var inst_13564__$1 = cljs.core.not.call(null,inst_13563);
var state_13584__$1 = (function (){var statearr_13603 = state_13584;
(statearr_13603[(11)] = inst_13564__$1);

(statearr_13603[(8)] = inst_13562__$1);

return statearr_13603;
})();
if(inst_13564__$1){
var statearr_13604_13666 = state_13584__$1;
(statearr_13604_13666[(1)] = (15));

} else {
var statearr_13605_13667 = state_13584__$1;
(statearr_13605_13667[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (16))){
var inst_13564 = (state_13584[(11)]);
var state_13584__$1 = state_13584;
var statearr_13606_13668 = state_13584__$1;
(statearr_13606_13668[(2)] = inst_13564);

(statearr_13606_13668[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (10))){
var inst_13556 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13607_13669 = state_13584__$1;
(statearr_13607_13669[(2)] = inst_13556);

(statearr_13607_13669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (18))){
var inst_13567 = (state_13584[(2)]);
var state_13584__$1 = state_13584;
var statearr_13608_13670 = state_13584__$1;
(statearr_13608_13670[(2)] = inst_13567);

(statearr_13608_13670[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13585 === (8))){
var inst_13553 = cljs.core.async.close_BANG_.call(null,to);
var state_13584__$1 = state_13584;
var statearr_13609_13671 = state_13584__$1;
(statearr_13609_13671[(2)] = inst_13553);

(statearr_13609_13671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto__,jobs,results,process,async))
;
return ((function (switch__7444__auto__,c__7509__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0 = (function (){
var statearr_13613 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13613[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__);

(statearr_13613[(1)] = (1));

return statearr_13613;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1 = (function (state_13584){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_13584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e13614){if((e13614 instanceof Object)){
var ex__7448__auto__ = e13614;
var statearr_13615_13672 = state_13584;
(statearr_13615_13672[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13673 = state_13584;
state_13584 = G__13673;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__ = function(state_13584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1.call(this,state_13584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7445__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto__,jobs,results,process,async))
})();
var state__7511__auto__ = (function (){var statearr_13616 = f__7510__auto__.call(null);
(statearr_13616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto__);

return statearr_13616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto__,jobs,results,process,async))
);

return c__7509__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args13674 = [];
var len__6114__auto___13677 = arguments.length;
var i__6115__auto___13678 = (0);
while(true){
if((i__6115__auto___13678 < len__6114__auto___13677)){
args13674.push((arguments[i__6115__auto___13678]));

var G__13679 = (i__6115__auto___13678 + (1));
i__6115__auto___13678 = G__13679;
continue;
} else {
}
break;
}

var G__13676 = args13674.length;
switch (G__13676) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13674.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args13681 = [];
var len__6114__auto___13684 = arguments.length;
var i__6115__auto___13685 = (0);
while(true){
if((i__6115__auto___13685 < len__6114__auto___13684)){
args13681.push((arguments[i__6115__auto___13685]));

var G__13686 = (i__6115__auto___13685 + (1));
i__6115__auto___13685 = G__13686;
continue;
} else {
}
break;
}

var G__13683 = args13681.length;
switch (G__13683) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13681.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args13688 = [];
var len__6114__auto___13741 = arguments.length;
var i__6115__auto___13742 = (0);
while(true){
if((i__6115__auto___13742 < len__6114__auto___13741)){
args13688.push((arguments[i__6115__auto___13742]));

var G__13743 = (i__6115__auto___13742 + (1));
i__6115__auto___13742 = G__13743;
continue;
} else {
}
break;
}

var G__13690 = args13688.length;
switch (G__13690) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13688.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7509__auto___13745 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___13745,tc,fc){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___13745,tc,fc){
return (function (state_13716){
var state_val_13717 = (state_13716[(1)]);
if((state_val_13717 === (7))){
var inst_13712 = (state_13716[(2)]);
var state_13716__$1 = state_13716;
var statearr_13718_13746 = state_13716__$1;
(statearr_13718_13746[(2)] = inst_13712);

(statearr_13718_13746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (1))){
var state_13716__$1 = state_13716;
var statearr_13719_13747 = state_13716__$1;
(statearr_13719_13747[(2)] = null);

(statearr_13719_13747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (4))){
var inst_13693 = (state_13716[(7)]);
var inst_13693__$1 = (state_13716[(2)]);
var inst_13694 = (inst_13693__$1 == null);
var state_13716__$1 = (function (){var statearr_13720 = state_13716;
(statearr_13720[(7)] = inst_13693__$1);

return statearr_13720;
})();
if(cljs.core.truth_(inst_13694)){
var statearr_13721_13748 = state_13716__$1;
(statearr_13721_13748[(1)] = (5));

} else {
var statearr_13722_13749 = state_13716__$1;
(statearr_13722_13749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (13))){
var state_13716__$1 = state_13716;
var statearr_13723_13750 = state_13716__$1;
(statearr_13723_13750[(2)] = null);

(statearr_13723_13750[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (6))){
var inst_13693 = (state_13716[(7)]);
var inst_13699 = p.call(null,inst_13693);
var state_13716__$1 = state_13716;
if(cljs.core.truth_(inst_13699)){
var statearr_13724_13751 = state_13716__$1;
(statearr_13724_13751[(1)] = (9));

} else {
var statearr_13725_13752 = state_13716__$1;
(statearr_13725_13752[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (3))){
var inst_13714 = (state_13716[(2)]);
var state_13716__$1 = state_13716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13716__$1,inst_13714);
} else {
if((state_val_13717 === (12))){
var state_13716__$1 = state_13716;
var statearr_13726_13753 = state_13716__$1;
(statearr_13726_13753[(2)] = null);

(statearr_13726_13753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (2))){
var state_13716__$1 = state_13716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13716__$1,(4),ch);
} else {
if((state_val_13717 === (11))){
var inst_13693 = (state_13716[(7)]);
var inst_13703 = (state_13716[(2)]);
var state_13716__$1 = state_13716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13716__$1,(8),inst_13703,inst_13693);
} else {
if((state_val_13717 === (9))){
var state_13716__$1 = state_13716;
var statearr_13727_13754 = state_13716__$1;
(statearr_13727_13754[(2)] = tc);

(statearr_13727_13754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (5))){
var inst_13696 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13697 = cljs.core.async.close_BANG_.call(null,fc);
var state_13716__$1 = (function (){var statearr_13728 = state_13716;
(statearr_13728[(8)] = inst_13696);

return statearr_13728;
})();
var statearr_13729_13755 = state_13716__$1;
(statearr_13729_13755[(2)] = inst_13697);

(statearr_13729_13755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (14))){
var inst_13710 = (state_13716[(2)]);
var state_13716__$1 = state_13716;
var statearr_13730_13756 = state_13716__$1;
(statearr_13730_13756[(2)] = inst_13710);

(statearr_13730_13756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (10))){
var state_13716__$1 = state_13716;
var statearr_13731_13757 = state_13716__$1;
(statearr_13731_13757[(2)] = fc);

(statearr_13731_13757[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13717 === (8))){
var inst_13705 = (state_13716[(2)]);
var state_13716__$1 = state_13716;
if(cljs.core.truth_(inst_13705)){
var statearr_13732_13758 = state_13716__$1;
(statearr_13732_13758[(1)] = (12));

} else {
var statearr_13733_13759 = state_13716__$1;
(statearr_13733_13759[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___13745,tc,fc))
;
return ((function (switch__7444__auto__,c__7509__auto___13745,tc,fc){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_13737 = [null,null,null,null,null,null,null,null,null];
(statearr_13737[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_13737[(1)] = (1));

return statearr_13737;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_13716){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_13716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e13738){if((e13738 instanceof Object)){
var ex__7448__auto__ = e13738;
var statearr_13739_13760 = state_13716;
(statearr_13739_13760[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13761 = state_13716;
state_13716 = G__13761;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_13716){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_13716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___13745,tc,fc))
})();
var state__7511__auto__ = (function (){var statearr_13740 = f__7510__auto__.call(null);
(statearr_13740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___13745);

return statearr_13740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___13745,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto__){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto__){
return (function (state_13808){
var state_val_13809 = (state_13808[(1)]);
if((state_val_13809 === (1))){
var inst_13794 = init;
var state_13808__$1 = (function (){var statearr_13810 = state_13808;
(statearr_13810[(7)] = inst_13794);

return statearr_13810;
})();
var statearr_13811_13826 = state_13808__$1;
(statearr_13811_13826[(2)] = null);

(statearr_13811_13826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (2))){
var state_13808__$1 = state_13808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13808__$1,(4),ch);
} else {
if((state_val_13809 === (3))){
var inst_13806 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13808__$1,inst_13806);
} else {
if((state_val_13809 === (4))){
var inst_13797 = (state_13808[(8)]);
var inst_13797__$1 = (state_13808[(2)]);
var inst_13798 = (inst_13797__$1 == null);
var state_13808__$1 = (function (){var statearr_13812 = state_13808;
(statearr_13812[(8)] = inst_13797__$1);

return statearr_13812;
})();
if(cljs.core.truth_(inst_13798)){
var statearr_13813_13827 = state_13808__$1;
(statearr_13813_13827[(1)] = (5));

} else {
var statearr_13814_13828 = state_13808__$1;
(statearr_13814_13828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (5))){
var inst_13794 = (state_13808[(7)]);
var state_13808__$1 = state_13808;
var statearr_13815_13829 = state_13808__$1;
(statearr_13815_13829[(2)] = inst_13794);

(statearr_13815_13829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (6))){
var inst_13797 = (state_13808[(8)]);
var inst_13794 = (state_13808[(7)]);
var inst_13801 = f.call(null,inst_13794,inst_13797);
var inst_13794__$1 = inst_13801;
var state_13808__$1 = (function (){var statearr_13816 = state_13808;
(statearr_13816[(7)] = inst_13794__$1);

return statearr_13816;
})();
var statearr_13817_13830 = state_13808__$1;
(statearr_13817_13830[(2)] = null);

(statearr_13817_13830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13809 === (7))){
var inst_13804 = (state_13808[(2)]);
var state_13808__$1 = state_13808;
var statearr_13818_13831 = state_13808__$1;
(statearr_13818_13831[(2)] = inst_13804);

(statearr_13818_13831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7509__auto__))
;
return ((function (switch__7444__auto__,c__7509__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7445__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7445__auto____0 = (function (){
var statearr_13822 = [null,null,null,null,null,null,null,null,null];
(statearr_13822[(0)] = cljs$core$async$reduce_$_state_machine__7445__auto__);

(statearr_13822[(1)] = (1));

return statearr_13822;
});
var cljs$core$async$reduce_$_state_machine__7445__auto____1 = (function (state_13808){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_13808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e13823){if((e13823 instanceof Object)){
var ex__7448__auto__ = e13823;
var statearr_13824_13832 = state_13808;
(statearr_13824_13832[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13833 = state_13808;
state_13808 = G__13833;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7445__auto__ = function(state_13808){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7445__auto____1.call(this,state_13808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7445__auto____0;
cljs$core$async$reduce_$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7445__auto____1;
return cljs$core$async$reduce_$_state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto__))
})();
var state__7511__auto__ = (function (){var statearr_13825 = f__7510__auto__.call(null);
(statearr_13825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto__);

return statearr_13825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto__))
);

return c__7509__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args13834 = [];
var len__6114__auto___13886 = arguments.length;
var i__6115__auto___13887 = (0);
while(true){
if((i__6115__auto___13887 < len__6114__auto___13886)){
args13834.push((arguments[i__6115__auto___13887]));

var G__13888 = (i__6115__auto___13887 + (1));
i__6115__auto___13887 = G__13888;
continue;
} else {
}
break;
}

var G__13836 = args13834.length;
switch (G__13836) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13834.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto__){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto__){
return (function (state_13861){
var state_val_13862 = (state_13861[(1)]);
if((state_val_13862 === (7))){
var inst_13843 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13863_13890 = state_13861__$1;
(statearr_13863_13890[(2)] = inst_13843);

(statearr_13863_13890[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (1))){
var inst_13837 = cljs.core.seq.call(null,coll);
var inst_13838 = inst_13837;
var state_13861__$1 = (function (){var statearr_13864 = state_13861;
(statearr_13864[(7)] = inst_13838);

return statearr_13864;
})();
var statearr_13865_13891 = state_13861__$1;
(statearr_13865_13891[(2)] = null);

(statearr_13865_13891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (4))){
var inst_13838 = (state_13861[(7)]);
var inst_13841 = cljs.core.first.call(null,inst_13838);
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13861__$1,(7),ch,inst_13841);
} else {
if((state_val_13862 === (13))){
var inst_13855 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13866_13892 = state_13861__$1;
(statearr_13866_13892[(2)] = inst_13855);

(statearr_13866_13892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (6))){
var inst_13846 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
if(cljs.core.truth_(inst_13846)){
var statearr_13867_13893 = state_13861__$1;
(statearr_13867_13893[(1)] = (8));

} else {
var statearr_13868_13894 = state_13861__$1;
(statearr_13868_13894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (3))){
var inst_13859 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13861__$1,inst_13859);
} else {
if((state_val_13862 === (12))){
var state_13861__$1 = state_13861;
var statearr_13869_13895 = state_13861__$1;
(statearr_13869_13895[(2)] = null);

(statearr_13869_13895[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (2))){
var inst_13838 = (state_13861[(7)]);
var state_13861__$1 = state_13861;
if(cljs.core.truth_(inst_13838)){
var statearr_13870_13896 = state_13861__$1;
(statearr_13870_13896[(1)] = (4));

} else {
var statearr_13871_13897 = state_13861__$1;
(statearr_13871_13897[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (11))){
var inst_13852 = cljs.core.async.close_BANG_.call(null,ch);
var state_13861__$1 = state_13861;
var statearr_13872_13898 = state_13861__$1;
(statearr_13872_13898[(2)] = inst_13852);

(statearr_13872_13898[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (9))){
var state_13861__$1 = state_13861;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13873_13899 = state_13861__$1;
(statearr_13873_13899[(1)] = (11));

} else {
var statearr_13874_13900 = state_13861__$1;
(statearr_13874_13900[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (5))){
var inst_13838 = (state_13861[(7)]);
var state_13861__$1 = state_13861;
var statearr_13875_13901 = state_13861__$1;
(statearr_13875_13901[(2)] = inst_13838);

(statearr_13875_13901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (10))){
var inst_13857 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13876_13902 = state_13861__$1;
(statearr_13876_13902[(2)] = inst_13857);

(statearr_13876_13902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (8))){
var inst_13838 = (state_13861[(7)]);
var inst_13848 = cljs.core.next.call(null,inst_13838);
var inst_13838__$1 = inst_13848;
var state_13861__$1 = (function (){var statearr_13877 = state_13861;
(statearr_13877[(7)] = inst_13838__$1);

return statearr_13877;
})();
var statearr_13878_13903 = state_13861__$1;
(statearr_13878_13903[(2)] = null);

(statearr_13878_13903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto__))
;
return ((function (switch__7444__auto__,c__7509__auto__){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_13882 = [null,null,null,null,null,null,null,null];
(statearr_13882[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_13882[(1)] = (1));

return statearr_13882;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_13861){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_13861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e13883){if((e13883 instanceof Object)){
var ex__7448__auto__ = e13883;
var statearr_13884_13904 = state_13861;
(statearr_13884_13904[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13905 = state_13861;
state_13861 = G__13905;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_13861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_13861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto__))
})();
var state__7511__auto__ = (function (){var statearr_13885 = f__7510__auto__.call(null);
(statearr_13885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto__);

return statearr_13885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto__))
);

return c__7509__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5711__auto__ = (((_ == null))?null:_);
var m__5712__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,_);
} else {
var m__5712__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5711__auto__ = (((m == null))?null:m);
var m__5712__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5712__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5711__auto__ = (((m == null))?null:m);
var m__5712__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,m,ch);
} else {
var m__5712__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5711__auto__ = (((m == null))?null:m);
var m__5712__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,m);
} else {
var m__5712__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14127 = (function (mult,ch,cs,meta14128){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14128 = meta14128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14129,meta14128__$1){
var self__ = this;
var _14129__$1 = this;
return (new cljs.core.async.t_cljs$core$async14127(self__.mult,self__.ch,self__.cs,meta14128__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14129){
var self__ = this;
var _14129__$1 = this;
return self__.meta14128;
});})(cs))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14127.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14127.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14128","meta14128",791197934,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14127";

cljs.core.async.t_cljs$core$async14127.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async14127");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14127 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14127(mult__$1,ch__$1,cs__$1,meta14128){
return (new cljs.core.async.t_cljs$core$async14127(mult__$1,ch__$1,cs__$1,meta14128));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14127(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7509__auto___14348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___14348,cs,m,dchan,dctr,done){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___14348,cs,m,dchan,dctr,done){
return (function (state_14260){
var state_val_14261 = (state_14260[(1)]);
if((state_val_14261 === (7))){
var inst_14256 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14262_14349 = state_14260__$1;
(statearr_14262_14349[(2)] = inst_14256);

(statearr_14262_14349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (20))){
var inst_14161 = (state_14260[(7)]);
var inst_14171 = cljs.core.first.call(null,inst_14161);
var inst_14172 = cljs.core.nth.call(null,inst_14171,(0),null);
var inst_14173 = cljs.core.nth.call(null,inst_14171,(1),null);
var state_14260__$1 = (function (){var statearr_14263 = state_14260;
(statearr_14263[(8)] = inst_14172);

return statearr_14263;
})();
if(cljs.core.truth_(inst_14173)){
var statearr_14264_14350 = state_14260__$1;
(statearr_14264_14350[(1)] = (22));

} else {
var statearr_14265_14351 = state_14260__$1;
(statearr_14265_14351[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (27))){
var inst_14208 = (state_14260[(9)]);
var inst_14201 = (state_14260[(10)]);
var inst_14203 = (state_14260[(11)]);
var inst_14132 = (state_14260[(12)]);
var inst_14208__$1 = cljs.core._nth.call(null,inst_14201,inst_14203);
var inst_14209 = cljs.core.async.put_BANG_.call(null,inst_14208__$1,inst_14132,done);
var state_14260__$1 = (function (){var statearr_14266 = state_14260;
(statearr_14266[(9)] = inst_14208__$1);

return statearr_14266;
})();
if(cljs.core.truth_(inst_14209)){
var statearr_14267_14352 = state_14260__$1;
(statearr_14267_14352[(1)] = (30));

} else {
var statearr_14268_14353 = state_14260__$1;
(statearr_14268_14353[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (1))){
var state_14260__$1 = state_14260;
var statearr_14269_14354 = state_14260__$1;
(statearr_14269_14354[(2)] = null);

(statearr_14269_14354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (24))){
var inst_14161 = (state_14260[(7)]);
var inst_14178 = (state_14260[(2)]);
var inst_14179 = cljs.core.next.call(null,inst_14161);
var inst_14141 = inst_14179;
var inst_14142 = null;
var inst_14143 = (0);
var inst_14144 = (0);
var state_14260__$1 = (function (){var statearr_14270 = state_14260;
(statearr_14270[(13)] = inst_14142);

(statearr_14270[(14)] = inst_14143);

(statearr_14270[(15)] = inst_14144);

(statearr_14270[(16)] = inst_14141);

(statearr_14270[(17)] = inst_14178);

return statearr_14270;
})();
var statearr_14271_14355 = state_14260__$1;
(statearr_14271_14355[(2)] = null);

(statearr_14271_14355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (39))){
var state_14260__$1 = state_14260;
var statearr_14275_14356 = state_14260__$1;
(statearr_14275_14356[(2)] = null);

(statearr_14275_14356[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (4))){
var inst_14132 = (state_14260[(12)]);
var inst_14132__$1 = (state_14260[(2)]);
var inst_14133 = (inst_14132__$1 == null);
var state_14260__$1 = (function (){var statearr_14276 = state_14260;
(statearr_14276[(12)] = inst_14132__$1);

return statearr_14276;
})();
if(cljs.core.truth_(inst_14133)){
var statearr_14277_14357 = state_14260__$1;
(statearr_14277_14357[(1)] = (5));

} else {
var statearr_14278_14358 = state_14260__$1;
(statearr_14278_14358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (15))){
var inst_14142 = (state_14260[(13)]);
var inst_14143 = (state_14260[(14)]);
var inst_14144 = (state_14260[(15)]);
var inst_14141 = (state_14260[(16)]);
var inst_14157 = (state_14260[(2)]);
var inst_14158 = (inst_14144 + (1));
var tmp14272 = inst_14142;
var tmp14273 = inst_14143;
var tmp14274 = inst_14141;
var inst_14141__$1 = tmp14274;
var inst_14142__$1 = tmp14272;
var inst_14143__$1 = tmp14273;
var inst_14144__$1 = inst_14158;
var state_14260__$1 = (function (){var statearr_14279 = state_14260;
(statearr_14279[(13)] = inst_14142__$1);

(statearr_14279[(14)] = inst_14143__$1);

(statearr_14279[(15)] = inst_14144__$1);

(statearr_14279[(16)] = inst_14141__$1);

(statearr_14279[(18)] = inst_14157);

return statearr_14279;
})();
var statearr_14280_14359 = state_14260__$1;
(statearr_14280_14359[(2)] = null);

(statearr_14280_14359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (21))){
var inst_14182 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14284_14360 = state_14260__$1;
(statearr_14284_14360[(2)] = inst_14182);

(statearr_14284_14360[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (31))){
var inst_14208 = (state_14260[(9)]);
var inst_14212 = done.call(null,null);
var inst_14213 = cljs.core.async.untap_STAR_.call(null,m,inst_14208);
var state_14260__$1 = (function (){var statearr_14285 = state_14260;
(statearr_14285[(19)] = inst_14212);

return statearr_14285;
})();
var statearr_14286_14361 = state_14260__$1;
(statearr_14286_14361[(2)] = inst_14213);

(statearr_14286_14361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (32))){
var inst_14201 = (state_14260[(10)]);
var inst_14202 = (state_14260[(20)]);
var inst_14203 = (state_14260[(11)]);
var inst_14200 = (state_14260[(21)]);
var inst_14215 = (state_14260[(2)]);
var inst_14216 = (inst_14203 + (1));
var tmp14281 = inst_14201;
var tmp14282 = inst_14202;
var tmp14283 = inst_14200;
var inst_14200__$1 = tmp14283;
var inst_14201__$1 = tmp14281;
var inst_14202__$1 = tmp14282;
var inst_14203__$1 = inst_14216;
var state_14260__$1 = (function (){var statearr_14287 = state_14260;
(statearr_14287[(22)] = inst_14215);

(statearr_14287[(10)] = inst_14201__$1);

(statearr_14287[(20)] = inst_14202__$1);

(statearr_14287[(11)] = inst_14203__$1);

(statearr_14287[(21)] = inst_14200__$1);

return statearr_14287;
})();
var statearr_14288_14362 = state_14260__$1;
(statearr_14288_14362[(2)] = null);

(statearr_14288_14362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (40))){
var inst_14228 = (state_14260[(23)]);
var inst_14232 = done.call(null,null);
var inst_14233 = cljs.core.async.untap_STAR_.call(null,m,inst_14228);
var state_14260__$1 = (function (){var statearr_14289 = state_14260;
(statearr_14289[(24)] = inst_14232);

return statearr_14289;
})();
var statearr_14290_14363 = state_14260__$1;
(statearr_14290_14363[(2)] = inst_14233);

(statearr_14290_14363[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (33))){
var inst_14219 = (state_14260[(25)]);
var inst_14221 = cljs.core.chunked_seq_QMARK_.call(null,inst_14219);
var state_14260__$1 = state_14260;
if(inst_14221){
var statearr_14291_14364 = state_14260__$1;
(statearr_14291_14364[(1)] = (36));

} else {
var statearr_14292_14365 = state_14260__$1;
(statearr_14292_14365[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (13))){
var inst_14151 = (state_14260[(26)]);
var inst_14154 = cljs.core.async.close_BANG_.call(null,inst_14151);
var state_14260__$1 = state_14260;
var statearr_14293_14366 = state_14260__$1;
(statearr_14293_14366[(2)] = inst_14154);

(statearr_14293_14366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (22))){
var inst_14172 = (state_14260[(8)]);
var inst_14175 = cljs.core.async.close_BANG_.call(null,inst_14172);
var state_14260__$1 = state_14260;
var statearr_14294_14367 = state_14260__$1;
(statearr_14294_14367[(2)] = inst_14175);

(statearr_14294_14367[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (36))){
var inst_14219 = (state_14260[(25)]);
var inst_14223 = cljs.core.chunk_first.call(null,inst_14219);
var inst_14224 = cljs.core.chunk_rest.call(null,inst_14219);
var inst_14225 = cljs.core.count.call(null,inst_14223);
var inst_14200 = inst_14224;
var inst_14201 = inst_14223;
var inst_14202 = inst_14225;
var inst_14203 = (0);
var state_14260__$1 = (function (){var statearr_14295 = state_14260;
(statearr_14295[(10)] = inst_14201);

(statearr_14295[(20)] = inst_14202);

(statearr_14295[(11)] = inst_14203);

(statearr_14295[(21)] = inst_14200);

return statearr_14295;
})();
var statearr_14296_14368 = state_14260__$1;
(statearr_14296_14368[(2)] = null);

(statearr_14296_14368[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (41))){
var inst_14219 = (state_14260[(25)]);
var inst_14235 = (state_14260[(2)]);
var inst_14236 = cljs.core.next.call(null,inst_14219);
var inst_14200 = inst_14236;
var inst_14201 = null;
var inst_14202 = (0);
var inst_14203 = (0);
var state_14260__$1 = (function (){var statearr_14297 = state_14260;
(statearr_14297[(27)] = inst_14235);

(statearr_14297[(10)] = inst_14201);

(statearr_14297[(20)] = inst_14202);

(statearr_14297[(11)] = inst_14203);

(statearr_14297[(21)] = inst_14200);

return statearr_14297;
})();
var statearr_14298_14369 = state_14260__$1;
(statearr_14298_14369[(2)] = null);

(statearr_14298_14369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (43))){
var state_14260__$1 = state_14260;
var statearr_14299_14370 = state_14260__$1;
(statearr_14299_14370[(2)] = null);

(statearr_14299_14370[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (29))){
var inst_14244 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14300_14371 = state_14260__$1;
(statearr_14300_14371[(2)] = inst_14244);

(statearr_14300_14371[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (44))){
var inst_14253 = (state_14260[(2)]);
var state_14260__$1 = (function (){var statearr_14301 = state_14260;
(statearr_14301[(28)] = inst_14253);

return statearr_14301;
})();
var statearr_14302_14372 = state_14260__$1;
(statearr_14302_14372[(2)] = null);

(statearr_14302_14372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (6))){
var inst_14192 = (state_14260[(29)]);
var inst_14191 = cljs.core.deref.call(null,cs);
var inst_14192__$1 = cljs.core.keys.call(null,inst_14191);
var inst_14193 = cljs.core.count.call(null,inst_14192__$1);
var inst_14194 = cljs.core.reset_BANG_.call(null,dctr,inst_14193);
var inst_14199 = cljs.core.seq.call(null,inst_14192__$1);
var inst_14200 = inst_14199;
var inst_14201 = null;
var inst_14202 = (0);
var inst_14203 = (0);
var state_14260__$1 = (function (){var statearr_14303 = state_14260;
(statearr_14303[(10)] = inst_14201);

(statearr_14303[(20)] = inst_14202);

(statearr_14303[(11)] = inst_14203);

(statearr_14303[(30)] = inst_14194);

(statearr_14303[(29)] = inst_14192__$1);

(statearr_14303[(21)] = inst_14200);

return statearr_14303;
})();
var statearr_14304_14373 = state_14260__$1;
(statearr_14304_14373[(2)] = null);

(statearr_14304_14373[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (28))){
var inst_14219 = (state_14260[(25)]);
var inst_14200 = (state_14260[(21)]);
var inst_14219__$1 = cljs.core.seq.call(null,inst_14200);
var state_14260__$1 = (function (){var statearr_14305 = state_14260;
(statearr_14305[(25)] = inst_14219__$1);

return statearr_14305;
})();
if(inst_14219__$1){
var statearr_14306_14374 = state_14260__$1;
(statearr_14306_14374[(1)] = (33));

} else {
var statearr_14307_14375 = state_14260__$1;
(statearr_14307_14375[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (25))){
var inst_14202 = (state_14260[(20)]);
var inst_14203 = (state_14260[(11)]);
var inst_14205 = (inst_14203 < inst_14202);
var inst_14206 = inst_14205;
var state_14260__$1 = state_14260;
if(cljs.core.truth_(inst_14206)){
var statearr_14308_14376 = state_14260__$1;
(statearr_14308_14376[(1)] = (27));

} else {
var statearr_14309_14377 = state_14260__$1;
(statearr_14309_14377[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (34))){
var state_14260__$1 = state_14260;
var statearr_14310_14378 = state_14260__$1;
(statearr_14310_14378[(2)] = null);

(statearr_14310_14378[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (17))){
var state_14260__$1 = state_14260;
var statearr_14311_14379 = state_14260__$1;
(statearr_14311_14379[(2)] = null);

(statearr_14311_14379[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (3))){
var inst_14258 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14260__$1,inst_14258);
} else {
if((state_val_14261 === (12))){
var inst_14187 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14312_14380 = state_14260__$1;
(statearr_14312_14380[(2)] = inst_14187);

(statearr_14312_14380[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (2))){
var state_14260__$1 = state_14260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14260__$1,(4),ch);
} else {
if((state_val_14261 === (23))){
var state_14260__$1 = state_14260;
var statearr_14313_14381 = state_14260__$1;
(statearr_14313_14381[(2)] = null);

(statearr_14313_14381[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (35))){
var inst_14242 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14314_14382 = state_14260__$1;
(statearr_14314_14382[(2)] = inst_14242);

(statearr_14314_14382[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (19))){
var inst_14161 = (state_14260[(7)]);
var inst_14165 = cljs.core.chunk_first.call(null,inst_14161);
var inst_14166 = cljs.core.chunk_rest.call(null,inst_14161);
var inst_14167 = cljs.core.count.call(null,inst_14165);
var inst_14141 = inst_14166;
var inst_14142 = inst_14165;
var inst_14143 = inst_14167;
var inst_14144 = (0);
var state_14260__$1 = (function (){var statearr_14315 = state_14260;
(statearr_14315[(13)] = inst_14142);

(statearr_14315[(14)] = inst_14143);

(statearr_14315[(15)] = inst_14144);

(statearr_14315[(16)] = inst_14141);

return statearr_14315;
})();
var statearr_14316_14383 = state_14260__$1;
(statearr_14316_14383[(2)] = null);

(statearr_14316_14383[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (11))){
var inst_14161 = (state_14260[(7)]);
var inst_14141 = (state_14260[(16)]);
var inst_14161__$1 = cljs.core.seq.call(null,inst_14141);
var state_14260__$1 = (function (){var statearr_14317 = state_14260;
(statearr_14317[(7)] = inst_14161__$1);

return statearr_14317;
})();
if(inst_14161__$1){
var statearr_14318_14384 = state_14260__$1;
(statearr_14318_14384[(1)] = (16));

} else {
var statearr_14319_14385 = state_14260__$1;
(statearr_14319_14385[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (9))){
var inst_14189 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14320_14386 = state_14260__$1;
(statearr_14320_14386[(2)] = inst_14189);

(statearr_14320_14386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (5))){
var inst_14139 = cljs.core.deref.call(null,cs);
var inst_14140 = cljs.core.seq.call(null,inst_14139);
var inst_14141 = inst_14140;
var inst_14142 = null;
var inst_14143 = (0);
var inst_14144 = (0);
var state_14260__$1 = (function (){var statearr_14321 = state_14260;
(statearr_14321[(13)] = inst_14142);

(statearr_14321[(14)] = inst_14143);

(statearr_14321[(15)] = inst_14144);

(statearr_14321[(16)] = inst_14141);

return statearr_14321;
})();
var statearr_14322_14387 = state_14260__$1;
(statearr_14322_14387[(2)] = null);

(statearr_14322_14387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (14))){
var state_14260__$1 = state_14260;
var statearr_14323_14388 = state_14260__$1;
(statearr_14323_14388[(2)] = null);

(statearr_14323_14388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (45))){
var inst_14250 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14324_14389 = state_14260__$1;
(statearr_14324_14389[(2)] = inst_14250);

(statearr_14324_14389[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (26))){
var inst_14192 = (state_14260[(29)]);
var inst_14246 = (state_14260[(2)]);
var inst_14247 = cljs.core.seq.call(null,inst_14192);
var state_14260__$1 = (function (){var statearr_14325 = state_14260;
(statearr_14325[(31)] = inst_14246);

return statearr_14325;
})();
if(inst_14247){
var statearr_14326_14390 = state_14260__$1;
(statearr_14326_14390[(1)] = (42));

} else {
var statearr_14327_14391 = state_14260__$1;
(statearr_14327_14391[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (16))){
var inst_14161 = (state_14260[(7)]);
var inst_14163 = cljs.core.chunked_seq_QMARK_.call(null,inst_14161);
var state_14260__$1 = state_14260;
if(inst_14163){
var statearr_14328_14392 = state_14260__$1;
(statearr_14328_14392[(1)] = (19));

} else {
var statearr_14329_14393 = state_14260__$1;
(statearr_14329_14393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (38))){
var inst_14239 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14330_14394 = state_14260__$1;
(statearr_14330_14394[(2)] = inst_14239);

(statearr_14330_14394[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (30))){
var state_14260__$1 = state_14260;
var statearr_14331_14395 = state_14260__$1;
(statearr_14331_14395[(2)] = null);

(statearr_14331_14395[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (10))){
var inst_14142 = (state_14260[(13)]);
var inst_14144 = (state_14260[(15)]);
var inst_14150 = cljs.core._nth.call(null,inst_14142,inst_14144);
var inst_14151 = cljs.core.nth.call(null,inst_14150,(0),null);
var inst_14152 = cljs.core.nth.call(null,inst_14150,(1),null);
var state_14260__$1 = (function (){var statearr_14332 = state_14260;
(statearr_14332[(26)] = inst_14151);

return statearr_14332;
})();
if(cljs.core.truth_(inst_14152)){
var statearr_14333_14396 = state_14260__$1;
(statearr_14333_14396[(1)] = (13));

} else {
var statearr_14334_14397 = state_14260__$1;
(statearr_14334_14397[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (18))){
var inst_14185 = (state_14260[(2)]);
var state_14260__$1 = state_14260;
var statearr_14335_14398 = state_14260__$1;
(statearr_14335_14398[(2)] = inst_14185);

(statearr_14335_14398[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (42))){
var state_14260__$1 = state_14260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14260__$1,(45),dchan);
} else {
if((state_val_14261 === (37))){
var inst_14228 = (state_14260[(23)]);
var inst_14219 = (state_14260[(25)]);
var inst_14132 = (state_14260[(12)]);
var inst_14228__$1 = cljs.core.first.call(null,inst_14219);
var inst_14229 = cljs.core.async.put_BANG_.call(null,inst_14228__$1,inst_14132,done);
var state_14260__$1 = (function (){var statearr_14336 = state_14260;
(statearr_14336[(23)] = inst_14228__$1);

return statearr_14336;
})();
if(cljs.core.truth_(inst_14229)){
var statearr_14337_14399 = state_14260__$1;
(statearr_14337_14399[(1)] = (39));

} else {
var statearr_14338_14400 = state_14260__$1;
(statearr_14338_14400[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14261 === (8))){
var inst_14143 = (state_14260[(14)]);
var inst_14144 = (state_14260[(15)]);
var inst_14146 = (inst_14144 < inst_14143);
var inst_14147 = inst_14146;
var state_14260__$1 = state_14260;
if(cljs.core.truth_(inst_14147)){
var statearr_14339_14401 = state_14260__$1;
(statearr_14339_14401[(1)] = (10));

} else {
var statearr_14340_14402 = state_14260__$1;
(statearr_14340_14402[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___14348,cs,m,dchan,dctr,done))
;
return ((function (switch__7444__auto__,c__7509__auto___14348,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7445__auto__ = null;
var cljs$core$async$mult_$_state_machine__7445__auto____0 = (function (){
var statearr_14344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14344[(0)] = cljs$core$async$mult_$_state_machine__7445__auto__);

(statearr_14344[(1)] = (1));

return statearr_14344;
});
var cljs$core$async$mult_$_state_machine__7445__auto____1 = (function (state_14260){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_14260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e14345){if((e14345 instanceof Object)){
var ex__7448__auto__ = e14345;
var statearr_14346_14403 = state_14260;
(statearr_14346_14403[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14404 = state_14260;
state_14260 = G__14404;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7445__auto__ = function(state_14260){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7445__auto____1.call(this,state_14260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7445__auto____0;
cljs$core$async$mult_$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7445__auto____1;
return cljs$core$async$mult_$_state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___14348,cs,m,dchan,dctr,done))
})();
var state__7511__auto__ = (function (){var statearr_14347 = f__7510__auto__.call(null);
(statearr_14347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___14348);

return statearr_14347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___14348,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args14405 = [];
var len__6114__auto___14408 = arguments.length;
var i__6115__auto___14409 = (0);
while(true){
if((i__6115__auto___14409 < len__6114__auto___14408)){
args14405.push((arguments[i__6115__auto___14409]));

var G__14410 = (i__6115__auto___14409 + (1));
i__6115__auto___14409 = G__14410;
continue;
} else {
}
break;
}

var G__14407 = args14405.length;
switch (G__14407) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14405.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5711__auto__ = (((m == null))?null:m);
var m__5712__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,m,ch);
} else {
var m__5712__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5711__auto__ = (((m == null))?null:m);
var m__5712__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,m,ch);
} else {
var m__5712__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5711__auto__ = (((m == null))?null:m);
var m__5712__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,m);
} else {
var m__5712__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5711__auto__ = (((m == null))?null:m);
var m__5712__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,m,state_map);
} else {
var m__5712__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5711__auto__ = (((m == null))?null:m);
var m__5712__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,m,mode);
} else {
var m__5712__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6121__auto__ = [];
var len__6114__auto___14422 = arguments.length;
var i__6115__auto___14423 = (0);
while(true){
if((i__6115__auto___14423 < len__6114__auto___14422)){
args__6121__auto__.push((arguments[i__6115__auto___14423]));

var G__14424 = (i__6115__auto___14423 + (1));
i__6115__auto___14423 = G__14424;
continue;
} else {
}
break;
}

var argseq__6122__auto__ = ((((3) < args__6121__auto__.length))?(new cljs.core.IndexedSeq(args__6121__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6122__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14416){
var map__14417 = p__14416;
var map__14417__$1 = ((((!((map__14417 == null)))?((((map__14417.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14417.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14417):map__14417);
var opts = map__14417__$1;
var statearr_14419_14425 = state;
(statearr_14419_14425[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__14417,map__14417__$1,opts){
return (function (val){
var statearr_14420_14426 = state;
(statearr_14420_14426[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14417,map__14417__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14421_14427 = state;
(statearr_14421_14427[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14412){
var G__14413 = cljs.core.first.call(null,seq14412);
var seq14412__$1 = cljs.core.next.call(null,seq14412);
var G__14414 = cljs.core.first.call(null,seq14412__$1);
var seq14412__$2 = cljs.core.next.call(null,seq14412__$1);
var G__14415 = cljs.core.first.call(null,seq14412__$2);
var seq14412__$3 = cljs.core.next.call(null,seq14412__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14413,G__14414,G__14415,seq14412__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async14591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14591 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14592){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14592 = meta14592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14593,meta14592__$1){
var self__ = this;
var _14593__$1 = this;
return (new cljs.core.async.t_cljs$core$async14591(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14592__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14593){
var self__ = this;
var _14593__$1 = this;
return self__.meta14592;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14591.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14591.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14592","meta14592",-530902233,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14591";

cljs.core.async.t_cljs$core$async14591.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async14591");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14591 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14591(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14592){
return (new cljs.core.async.t_cljs$core$async14591(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14592));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14591(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7509__auto___14754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___14754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___14754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14691){
var state_val_14692 = (state_14691[(1)]);
if((state_val_14692 === (7))){
var inst_14609 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14693_14755 = state_14691__$1;
(statearr_14693_14755[(2)] = inst_14609);

(statearr_14693_14755[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (20))){
var inst_14621 = (state_14691[(7)]);
var state_14691__$1 = state_14691;
var statearr_14694_14756 = state_14691__$1;
(statearr_14694_14756[(2)] = inst_14621);

(statearr_14694_14756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (27))){
var state_14691__$1 = state_14691;
var statearr_14695_14757 = state_14691__$1;
(statearr_14695_14757[(2)] = null);

(statearr_14695_14757[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (1))){
var inst_14597 = (state_14691[(8)]);
var inst_14597__$1 = calc_state.call(null);
var inst_14599 = (inst_14597__$1 == null);
var inst_14600 = cljs.core.not.call(null,inst_14599);
var state_14691__$1 = (function (){var statearr_14696 = state_14691;
(statearr_14696[(8)] = inst_14597__$1);

return statearr_14696;
})();
if(inst_14600){
var statearr_14697_14758 = state_14691__$1;
(statearr_14697_14758[(1)] = (2));

} else {
var statearr_14698_14759 = state_14691__$1;
(statearr_14698_14759[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (24))){
var inst_14644 = (state_14691[(9)]);
var inst_14651 = (state_14691[(10)]);
var inst_14665 = (state_14691[(11)]);
var inst_14665__$1 = inst_14644.call(null,inst_14651);
var state_14691__$1 = (function (){var statearr_14699 = state_14691;
(statearr_14699[(11)] = inst_14665__$1);

return statearr_14699;
})();
if(cljs.core.truth_(inst_14665__$1)){
var statearr_14700_14760 = state_14691__$1;
(statearr_14700_14760[(1)] = (29));

} else {
var statearr_14701_14761 = state_14691__$1;
(statearr_14701_14761[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (4))){
var inst_14612 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
if(cljs.core.truth_(inst_14612)){
var statearr_14702_14762 = state_14691__$1;
(statearr_14702_14762[(1)] = (8));

} else {
var statearr_14703_14763 = state_14691__$1;
(statearr_14703_14763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (15))){
var inst_14638 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
if(cljs.core.truth_(inst_14638)){
var statearr_14704_14764 = state_14691__$1;
(statearr_14704_14764[(1)] = (19));

} else {
var statearr_14705_14765 = state_14691__$1;
(statearr_14705_14765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (21))){
var inst_14643 = (state_14691[(12)]);
var inst_14643__$1 = (state_14691[(2)]);
var inst_14644 = cljs.core.get.call(null,inst_14643__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14645 = cljs.core.get.call(null,inst_14643__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14646 = cljs.core.get.call(null,inst_14643__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_14691__$1 = (function (){var statearr_14706 = state_14691;
(statearr_14706[(9)] = inst_14644);

(statearr_14706[(12)] = inst_14643__$1);

(statearr_14706[(13)] = inst_14645);

return statearr_14706;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14691__$1,(22),inst_14646);
} else {
if((state_val_14692 === (31))){
var inst_14673 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
if(cljs.core.truth_(inst_14673)){
var statearr_14707_14766 = state_14691__$1;
(statearr_14707_14766[(1)] = (32));

} else {
var statearr_14708_14767 = state_14691__$1;
(statearr_14708_14767[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (32))){
var inst_14650 = (state_14691[(14)]);
var state_14691__$1 = state_14691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14691__$1,(35),out,inst_14650);
} else {
if((state_val_14692 === (33))){
var inst_14643 = (state_14691[(12)]);
var inst_14621 = inst_14643;
var state_14691__$1 = (function (){var statearr_14709 = state_14691;
(statearr_14709[(7)] = inst_14621);

return statearr_14709;
})();
var statearr_14710_14768 = state_14691__$1;
(statearr_14710_14768[(2)] = null);

(statearr_14710_14768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (13))){
var inst_14621 = (state_14691[(7)]);
var inst_14628 = inst_14621.cljs$lang$protocol_mask$partition0$;
var inst_14629 = (inst_14628 & (64));
var inst_14630 = inst_14621.cljs$core$ISeq$;
var inst_14631 = (inst_14629) || (inst_14630);
var state_14691__$1 = state_14691;
if(cljs.core.truth_(inst_14631)){
var statearr_14711_14769 = state_14691__$1;
(statearr_14711_14769[(1)] = (16));

} else {
var statearr_14712_14770 = state_14691__$1;
(statearr_14712_14770[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (22))){
var inst_14650 = (state_14691[(14)]);
var inst_14651 = (state_14691[(10)]);
var inst_14649 = (state_14691[(2)]);
var inst_14650__$1 = cljs.core.nth.call(null,inst_14649,(0),null);
var inst_14651__$1 = cljs.core.nth.call(null,inst_14649,(1),null);
var inst_14652 = (inst_14650__$1 == null);
var inst_14653 = cljs.core._EQ_.call(null,inst_14651__$1,change);
var inst_14654 = (inst_14652) || (inst_14653);
var state_14691__$1 = (function (){var statearr_14713 = state_14691;
(statearr_14713[(14)] = inst_14650__$1);

(statearr_14713[(10)] = inst_14651__$1);

return statearr_14713;
})();
if(cljs.core.truth_(inst_14654)){
var statearr_14714_14771 = state_14691__$1;
(statearr_14714_14771[(1)] = (23));

} else {
var statearr_14715_14772 = state_14691__$1;
(statearr_14715_14772[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (36))){
var inst_14643 = (state_14691[(12)]);
var inst_14621 = inst_14643;
var state_14691__$1 = (function (){var statearr_14716 = state_14691;
(statearr_14716[(7)] = inst_14621);

return statearr_14716;
})();
var statearr_14717_14773 = state_14691__$1;
(statearr_14717_14773[(2)] = null);

(statearr_14717_14773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (29))){
var inst_14665 = (state_14691[(11)]);
var state_14691__$1 = state_14691;
var statearr_14718_14774 = state_14691__$1;
(statearr_14718_14774[(2)] = inst_14665);

(statearr_14718_14774[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (6))){
var state_14691__$1 = state_14691;
var statearr_14719_14775 = state_14691__$1;
(statearr_14719_14775[(2)] = false);

(statearr_14719_14775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (28))){
var inst_14661 = (state_14691[(2)]);
var inst_14662 = calc_state.call(null);
var inst_14621 = inst_14662;
var state_14691__$1 = (function (){var statearr_14720 = state_14691;
(statearr_14720[(15)] = inst_14661);

(statearr_14720[(7)] = inst_14621);

return statearr_14720;
})();
var statearr_14721_14776 = state_14691__$1;
(statearr_14721_14776[(2)] = null);

(statearr_14721_14776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (25))){
var inst_14687 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14722_14777 = state_14691__$1;
(statearr_14722_14777[(2)] = inst_14687);

(statearr_14722_14777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (34))){
var inst_14685 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14723_14778 = state_14691__$1;
(statearr_14723_14778[(2)] = inst_14685);

(statearr_14723_14778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (17))){
var state_14691__$1 = state_14691;
var statearr_14724_14779 = state_14691__$1;
(statearr_14724_14779[(2)] = false);

(statearr_14724_14779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (3))){
var state_14691__$1 = state_14691;
var statearr_14725_14780 = state_14691__$1;
(statearr_14725_14780[(2)] = false);

(statearr_14725_14780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (12))){
var inst_14689 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14691__$1,inst_14689);
} else {
if((state_val_14692 === (2))){
var inst_14597 = (state_14691[(8)]);
var inst_14602 = inst_14597.cljs$lang$protocol_mask$partition0$;
var inst_14603 = (inst_14602 & (64));
var inst_14604 = inst_14597.cljs$core$ISeq$;
var inst_14605 = (inst_14603) || (inst_14604);
var state_14691__$1 = state_14691;
if(cljs.core.truth_(inst_14605)){
var statearr_14726_14781 = state_14691__$1;
(statearr_14726_14781[(1)] = (5));

} else {
var statearr_14727_14782 = state_14691__$1;
(statearr_14727_14782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (23))){
var inst_14650 = (state_14691[(14)]);
var inst_14656 = (inst_14650 == null);
var state_14691__$1 = state_14691;
if(cljs.core.truth_(inst_14656)){
var statearr_14728_14783 = state_14691__$1;
(statearr_14728_14783[(1)] = (26));

} else {
var statearr_14729_14784 = state_14691__$1;
(statearr_14729_14784[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (35))){
var inst_14676 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
if(cljs.core.truth_(inst_14676)){
var statearr_14730_14785 = state_14691__$1;
(statearr_14730_14785[(1)] = (36));

} else {
var statearr_14731_14786 = state_14691__$1;
(statearr_14731_14786[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (19))){
var inst_14621 = (state_14691[(7)]);
var inst_14640 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14621);
var state_14691__$1 = state_14691;
var statearr_14732_14787 = state_14691__$1;
(statearr_14732_14787[(2)] = inst_14640);

(statearr_14732_14787[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (11))){
var inst_14621 = (state_14691[(7)]);
var inst_14625 = (inst_14621 == null);
var inst_14626 = cljs.core.not.call(null,inst_14625);
var state_14691__$1 = state_14691;
if(inst_14626){
var statearr_14733_14788 = state_14691__$1;
(statearr_14733_14788[(1)] = (13));

} else {
var statearr_14734_14789 = state_14691__$1;
(statearr_14734_14789[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (9))){
var inst_14597 = (state_14691[(8)]);
var state_14691__$1 = state_14691;
var statearr_14735_14790 = state_14691__$1;
(statearr_14735_14790[(2)] = inst_14597);

(statearr_14735_14790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (5))){
var state_14691__$1 = state_14691;
var statearr_14736_14791 = state_14691__$1;
(statearr_14736_14791[(2)] = true);

(statearr_14736_14791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (14))){
var state_14691__$1 = state_14691;
var statearr_14737_14792 = state_14691__$1;
(statearr_14737_14792[(2)] = false);

(statearr_14737_14792[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (26))){
var inst_14651 = (state_14691[(10)]);
var inst_14658 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14651);
var state_14691__$1 = state_14691;
var statearr_14738_14793 = state_14691__$1;
(statearr_14738_14793[(2)] = inst_14658);

(statearr_14738_14793[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (16))){
var state_14691__$1 = state_14691;
var statearr_14739_14794 = state_14691__$1;
(statearr_14739_14794[(2)] = true);

(statearr_14739_14794[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (38))){
var inst_14681 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14740_14795 = state_14691__$1;
(statearr_14740_14795[(2)] = inst_14681);

(statearr_14740_14795[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (30))){
var inst_14644 = (state_14691[(9)]);
var inst_14645 = (state_14691[(13)]);
var inst_14651 = (state_14691[(10)]);
var inst_14668 = cljs.core.empty_QMARK_.call(null,inst_14644);
var inst_14669 = inst_14645.call(null,inst_14651);
var inst_14670 = cljs.core.not.call(null,inst_14669);
var inst_14671 = (inst_14668) && (inst_14670);
var state_14691__$1 = state_14691;
var statearr_14741_14796 = state_14691__$1;
(statearr_14741_14796[(2)] = inst_14671);

(statearr_14741_14796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (10))){
var inst_14597 = (state_14691[(8)]);
var inst_14617 = (state_14691[(2)]);
var inst_14618 = cljs.core.get.call(null,inst_14617,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14619 = cljs.core.get.call(null,inst_14617,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14620 = cljs.core.get.call(null,inst_14617,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14621 = inst_14597;
var state_14691__$1 = (function (){var statearr_14742 = state_14691;
(statearr_14742[(16)] = inst_14618);

(statearr_14742[(17)] = inst_14619);

(statearr_14742[(7)] = inst_14621);

(statearr_14742[(18)] = inst_14620);

return statearr_14742;
})();
var statearr_14743_14797 = state_14691__$1;
(statearr_14743_14797[(2)] = null);

(statearr_14743_14797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (18))){
var inst_14635 = (state_14691[(2)]);
var state_14691__$1 = state_14691;
var statearr_14744_14798 = state_14691__$1;
(statearr_14744_14798[(2)] = inst_14635);

(statearr_14744_14798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (37))){
var state_14691__$1 = state_14691;
var statearr_14745_14799 = state_14691__$1;
(statearr_14745_14799[(2)] = null);

(statearr_14745_14799[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14692 === (8))){
var inst_14597 = (state_14691[(8)]);
var inst_14614 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14597);
var state_14691__$1 = state_14691;
var statearr_14746_14800 = state_14691__$1;
(statearr_14746_14800[(2)] = inst_14614);

(statearr_14746_14800[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___14754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7444__auto__,c__7509__auto___14754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7445__auto__ = null;
var cljs$core$async$mix_$_state_machine__7445__auto____0 = (function (){
var statearr_14750 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14750[(0)] = cljs$core$async$mix_$_state_machine__7445__auto__);

(statearr_14750[(1)] = (1));

return statearr_14750;
});
var cljs$core$async$mix_$_state_machine__7445__auto____1 = (function (state_14691){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_14691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e14751){if((e14751 instanceof Object)){
var ex__7448__auto__ = e14751;
var statearr_14752_14801 = state_14691;
(statearr_14752_14801[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14802 = state_14691;
state_14691 = G__14802;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7445__auto__ = function(state_14691){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7445__auto____1.call(this,state_14691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7445__auto____0;
cljs$core$async$mix_$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7445__auto____1;
return cljs$core$async$mix_$_state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___14754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7511__auto__ = (function (){var statearr_14753 = f__7510__auto__.call(null);
(statearr_14753[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___14754);

return statearr_14753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___14754,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5711__auto__ = (((p == null))?null:p);
var m__5712__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5712__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5711__auto__ = (((p == null))?null:p);
var m__5712__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,p,v,ch);
} else {
var m__5712__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14803 = [];
var len__6114__auto___14806 = arguments.length;
var i__6115__auto___14807 = (0);
while(true){
if((i__6115__auto___14807 < len__6114__auto___14806)){
args14803.push((arguments[i__6115__auto___14807]));

var G__14808 = (i__6115__auto___14807 + (1));
i__6115__auto___14807 = G__14808;
continue;
} else {
}
break;
}

var G__14805 = args14803.length;
switch (G__14805) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14803.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5711__auto__ = (((p == null))?null:p);
var m__5712__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,p);
} else {
var m__5712__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5711__auto__ = (((p == null))?null:p);
var m__5712__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,p,v);
} else {
var m__5712__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args14811 = [];
var len__6114__auto___14936 = arguments.length;
var i__6115__auto___14937 = (0);
while(true){
if((i__6115__auto___14937 < len__6114__auto___14936)){
args14811.push((arguments[i__6115__auto___14937]));

var G__14938 = (i__6115__auto___14937 + (1));
i__6115__auto___14937 = G__14938;
continue;
} else {
}
break;
}

var G__14813 = args14811.length;
switch (G__14813) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14811.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5056__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5056__auto__,mults){
return (function (p1__14810_SHARP_){
if(cljs.core.truth_(p1__14810_SHARP_.call(null,topic))){
return p1__14810_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14810_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5056__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14814 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14814 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14815){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14815 = meta14815;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14814.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14816,meta14815__$1){
var self__ = this;
var _14816__$1 = this;
return (new cljs.core.async.t_cljs$core$async14814(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14815__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14814.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14816){
var self__ = this;
var _14816__$1 = this;
return self__.meta14815;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14814.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14814.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14814.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14814.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14814.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14814.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14814.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14814.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14815","meta14815",-1100571250,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14814.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14814.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14814";

cljs.core.async.t_cljs$core$async14814.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async14814");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14814 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14814(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14815){
return (new cljs.core.async.t_cljs$core$async14814(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14815));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14814(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7509__auto___14940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___14940,mults,ensure_mult,p){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___14940,mults,ensure_mult,p){
return (function (state_14888){
var state_val_14889 = (state_14888[(1)]);
if((state_val_14889 === (7))){
var inst_14884 = (state_14888[(2)]);
var state_14888__$1 = state_14888;
var statearr_14890_14941 = state_14888__$1;
(statearr_14890_14941[(2)] = inst_14884);

(statearr_14890_14941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (20))){
var state_14888__$1 = state_14888;
var statearr_14891_14942 = state_14888__$1;
(statearr_14891_14942[(2)] = null);

(statearr_14891_14942[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (1))){
var state_14888__$1 = state_14888;
var statearr_14892_14943 = state_14888__$1;
(statearr_14892_14943[(2)] = null);

(statearr_14892_14943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (24))){
var inst_14867 = (state_14888[(7)]);
var inst_14876 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14867);
var state_14888__$1 = state_14888;
var statearr_14893_14944 = state_14888__$1;
(statearr_14893_14944[(2)] = inst_14876);

(statearr_14893_14944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (4))){
var inst_14819 = (state_14888[(8)]);
var inst_14819__$1 = (state_14888[(2)]);
var inst_14820 = (inst_14819__$1 == null);
var state_14888__$1 = (function (){var statearr_14894 = state_14888;
(statearr_14894[(8)] = inst_14819__$1);

return statearr_14894;
})();
if(cljs.core.truth_(inst_14820)){
var statearr_14895_14945 = state_14888__$1;
(statearr_14895_14945[(1)] = (5));

} else {
var statearr_14896_14946 = state_14888__$1;
(statearr_14896_14946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (15))){
var inst_14861 = (state_14888[(2)]);
var state_14888__$1 = state_14888;
var statearr_14897_14947 = state_14888__$1;
(statearr_14897_14947[(2)] = inst_14861);

(statearr_14897_14947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (21))){
var inst_14881 = (state_14888[(2)]);
var state_14888__$1 = (function (){var statearr_14898 = state_14888;
(statearr_14898[(9)] = inst_14881);

return statearr_14898;
})();
var statearr_14899_14948 = state_14888__$1;
(statearr_14899_14948[(2)] = null);

(statearr_14899_14948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (13))){
var inst_14843 = (state_14888[(10)]);
var inst_14845 = cljs.core.chunked_seq_QMARK_.call(null,inst_14843);
var state_14888__$1 = state_14888;
if(inst_14845){
var statearr_14900_14949 = state_14888__$1;
(statearr_14900_14949[(1)] = (16));

} else {
var statearr_14901_14950 = state_14888__$1;
(statearr_14901_14950[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (22))){
var inst_14873 = (state_14888[(2)]);
var state_14888__$1 = state_14888;
if(cljs.core.truth_(inst_14873)){
var statearr_14902_14951 = state_14888__$1;
(statearr_14902_14951[(1)] = (23));

} else {
var statearr_14903_14952 = state_14888__$1;
(statearr_14903_14952[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (6))){
var inst_14819 = (state_14888[(8)]);
var inst_14867 = (state_14888[(7)]);
var inst_14869 = (state_14888[(11)]);
var inst_14867__$1 = topic_fn.call(null,inst_14819);
var inst_14868 = cljs.core.deref.call(null,mults);
var inst_14869__$1 = cljs.core.get.call(null,inst_14868,inst_14867__$1);
var state_14888__$1 = (function (){var statearr_14904 = state_14888;
(statearr_14904[(7)] = inst_14867__$1);

(statearr_14904[(11)] = inst_14869__$1);

return statearr_14904;
})();
if(cljs.core.truth_(inst_14869__$1)){
var statearr_14905_14953 = state_14888__$1;
(statearr_14905_14953[(1)] = (19));

} else {
var statearr_14906_14954 = state_14888__$1;
(statearr_14906_14954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (25))){
var inst_14878 = (state_14888[(2)]);
var state_14888__$1 = state_14888;
var statearr_14907_14955 = state_14888__$1;
(statearr_14907_14955[(2)] = inst_14878);

(statearr_14907_14955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (17))){
var inst_14843 = (state_14888[(10)]);
var inst_14852 = cljs.core.first.call(null,inst_14843);
var inst_14853 = cljs.core.async.muxch_STAR_.call(null,inst_14852);
var inst_14854 = cljs.core.async.close_BANG_.call(null,inst_14853);
var inst_14855 = cljs.core.next.call(null,inst_14843);
var inst_14829 = inst_14855;
var inst_14830 = null;
var inst_14831 = (0);
var inst_14832 = (0);
var state_14888__$1 = (function (){var statearr_14908 = state_14888;
(statearr_14908[(12)] = inst_14831);

(statearr_14908[(13)] = inst_14830);

(statearr_14908[(14)] = inst_14829);

(statearr_14908[(15)] = inst_14854);

(statearr_14908[(16)] = inst_14832);

return statearr_14908;
})();
var statearr_14909_14956 = state_14888__$1;
(statearr_14909_14956[(2)] = null);

(statearr_14909_14956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (3))){
var inst_14886 = (state_14888[(2)]);
var state_14888__$1 = state_14888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14888__$1,inst_14886);
} else {
if((state_val_14889 === (12))){
var inst_14863 = (state_14888[(2)]);
var state_14888__$1 = state_14888;
var statearr_14910_14957 = state_14888__$1;
(statearr_14910_14957[(2)] = inst_14863);

(statearr_14910_14957[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (2))){
var state_14888__$1 = state_14888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14888__$1,(4),ch);
} else {
if((state_val_14889 === (23))){
var state_14888__$1 = state_14888;
var statearr_14911_14958 = state_14888__$1;
(statearr_14911_14958[(2)] = null);

(statearr_14911_14958[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (19))){
var inst_14819 = (state_14888[(8)]);
var inst_14869 = (state_14888[(11)]);
var inst_14871 = cljs.core.async.muxch_STAR_.call(null,inst_14869);
var state_14888__$1 = state_14888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14888__$1,(22),inst_14871,inst_14819);
} else {
if((state_val_14889 === (11))){
var inst_14843 = (state_14888[(10)]);
var inst_14829 = (state_14888[(14)]);
var inst_14843__$1 = cljs.core.seq.call(null,inst_14829);
var state_14888__$1 = (function (){var statearr_14912 = state_14888;
(statearr_14912[(10)] = inst_14843__$1);

return statearr_14912;
})();
if(inst_14843__$1){
var statearr_14913_14959 = state_14888__$1;
(statearr_14913_14959[(1)] = (13));

} else {
var statearr_14914_14960 = state_14888__$1;
(statearr_14914_14960[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (9))){
var inst_14865 = (state_14888[(2)]);
var state_14888__$1 = state_14888;
var statearr_14915_14961 = state_14888__$1;
(statearr_14915_14961[(2)] = inst_14865);

(statearr_14915_14961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (5))){
var inst_14826 = cljs.core.deref.call(null,mults);
var inst_14827 = cljs.core.vals.call(null,inst_14826);
var inst_14828 = cljs.core.seq.call(null,inst_14827);
var inst_14829 = inst_14828;
var inst_14830 = null;
var inst_14831 = (0);
var inst_14832 = (0);
var state_14888__$1 = (function (){var statearr_14916 = state_14888;
(statearr_14916[(12)] = inst_14831);

(statearr_14916[(13)] = inst_14830);

(statearr_14916[(14)] = inst_14829);

(statearr_14916[(16)] = inst_14832);

return statearr_14916;
})();
var statearr_14917_14962 = state_14888__$1;
(statearr_14917_14962[(2)] = null);

(statearr_14917_14962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (14))){
var state_14888__$1 = state_14888;
var statearr_14921_14963 = state_14888__$1;
(statearr_14921_14963[(2)] = null);

(statearr_14921_14963[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (16))){
var inst_14843 = (state_14888[(10)]);
var inst_14847 = cljs.core.chunk_first.call(null,inst_14843);
var inst_14848 = cljs.core.chunk_rest.call(null,inst_14843);
var inst_14849 = cljs.core.count.call(null,inst_14847);
var inst_14829 = inst_14848;
var inst_14830 = inst_14847;
var inst_14831 = inst_14849;
var inst_14832 = (0);
var state_14888__$1 = (function (){var statearr_14922 = state_14888;
(statearr_14922[(12)] = inst_14831);

(statearr_14922[(13)] = inst_14830);

(statearr_14922[(14)] = inst_14829);

(statearr_14922[(16)] = inst_14832);

return statearr_14922;
})();
var statearr_14923_14964 = state_14888__$1;
(statearr_14923_14964[(2)] = null);

(statearr_14923_14964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (10))){
var inst_14831 = (state_14888[(12)]);
var inst_14830 = (state_14888[(13)]);
var inst_14829 = (state_14888[(14)]);
var inst_14832 = (state_14888[(16)]);
var inst_14837 = cljs.core._nth.call(null,inst_14830,inst_14832);
var inst_14838 = cljs.core.async.muxch_STAR_.call(null,inst_14837);
var inst_14839 = cljs.core.async.close_BANG_.call(null,inst_14838);
var inst_14840 = (inst_14832 + (1));
var tmp14918 = inst_14831;
var tmp14919 = inst_14830;
var tmp14920 = inst_14829;
var inst_14829__$1 = tmp14920;
var inst_14830__$1 = tmp14919;
var inst_14831__$1 = tmp14918;
var inst_14832__$1 = inst_14840;
var state_14888__$1 = (function (){var statearr_14924 = state_14888;
(statearr_14924[(17)] = inst_14839);

(statearr_14924[(12)] = inst_14831__$1);

(statearr_14924[(13)] = inst_14830__$1);

(statearr_14924[(14)] = inst_14829__$1);

(statearr_14924[(16)] = inst_14832__$1);

return statearr_14924;
})();
var statearr_14925_14965 = state_14888__$1;
(statearr_14925_14965[(2)] = null);

(statearr_14925_14965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (18))){
var inst_14858 = (state_14888[(2)]);
var state_14888__$1 = state_14888;
var statearr_14926_14966 = state_14888__$1;
(statearr_14926_14966[(2)] = inst_14858);

(statearr_14926_14966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14889 === (8))){
var inst_14831 = (state_14888[(12)]);
var inst_14832 = (state_14888[(16)]);
var inst_14834 = (inst_14832 < inst_14831);
var inst_14835 = inst_14834;
var state_14888__$1 = state_14888;
if(cljs.core.truth_(inst_14835)){
var statearr_14927_14967 = state_14888__$1;
(statearr_14927_14967[(1)] = (10));

} else {
var statearr_14928_14968 = state_14888__$1;
(statearr_14928_14968[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___14940,mults,ensure_mult,p))
;
return ((function (switch__7444__auto__,c__7509__auto___14940,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_14932 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14932[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_14932[(1)] = (1));

return statearr_14932;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_14888){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_14888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e14933){if((e14933 instanceof Object)){
var ex__7448__auto__ = e14933;
var statearr_14934_14969 = state_14888;
(statearr_14934_14969[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14933;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14970 = state_14888;
state_14888 = G__14970;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_14888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_14888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___14940,mults,ensure_mult,p))
})();
var state__7511__auto__ = (function (){var statearr_14935 = f__7510__auto__.call(null);
(statearr_14935[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___14940);

return statearr_14935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___14940,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args14971 = [];
var len__6114__auto___14974 = arguments.length;
var i__6115__auto___14975 = (0);
while(true){
if((i__6115__auto___14975 < len__6114__auto___14974)){
args14971.push((arguments[i__6115__auto___14975]));

var G__14976 = (i__6115__auto___14975 + (1));
i__6115__auto___14975 = G__14976;
continue;
} else {
}
break;
}

var G__14973 = args14971.length;
switch (G__14973) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14971.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args14978 = [];
var len__6114__auto___14981 = arguments.length;
var i__6115__auto___14982 = (0);
while(true){
if((i__6115__auto___14982 < len__6114__auto___14981)){
args14978.push((arguments[i__6115__auto___14982]));

var G__14983 = (i__6115__auto___14982 + (1));
i__6115__auto___14982 = G__14983;
continue;
} else {
}
break;
}

var G__14980 = args14978.length;
switch (G__14980) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14978.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args14985 = [];
var len__6114__auto___15056 = arguments.length;
var i__6115__auto___15057 = (0);
while(true){
if((i__6115__auto___15057 < len__6114__auto___15056)){
args14985.push((arguments[i__6115__auto___15057]));

var G__15058 = (i__6115__auto___15057 + (1));
i__6115__auto___15057 = G__15058;
continue;
} else {
}
break;
}

var G__14987 = args14985.length;
switch (G__14987) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14985.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7509__auto___15060 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___15060,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___15060,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15026){
var state_val_15027 = (state_15026[(1)]);
if((state_val_15027 === (7))){
var state_15026__$1 = state_15026;
var statearr_15028_15061 = state_15026__$1;
(statearr_15028_15061[(2)] = null);

(statearr_15028_15061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (1))){
var state_15026__$1 = state_15026;
var statearr_15029_15062 = state_15026__$1;
(statearr_15029_15062[(2)] = null);

(statearr_15029_15062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (4))){
var inst_14990 = (state_15026[(7)]);
var inst_14992 = (inst_14990 < cnt);
var state_15026__$1 = state_15026;
if(cljs.core.truth_(inst_14992)){
var statearr_15030_15063 = state_15026__$1;
(statearr_15030_15063[(1)] = (6));

} else {
var statearr_15031_15064 = state_15026__$1;
(statearr_15031_15064[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (15))){
var inst_15022 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
var statearr_15032_15065 = state_15026__$1;
(statearr_15032_15065[(2)] = inst_15022);

(statearr_15032_15065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (13))){
var inst_15015 = cljs.core.async.close_BANG_.call(null,out);
var state_15026__$1 = state_15026;
var statearr_15033_15066 = state_15026__$1;
(statearr_15033_15066[(2)] = inst_15015);

(statearr_15033_15066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (6))){
var state_15026__$1 = state_15026;
var statearr_15034_15067 = state_15026__$1;
(statearr_15034_15067[(2)] = null);

(statearr_15034_15067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (3))){
var inst_15024 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15026__$1,inst_15024);
} else {
if((state_val_15027 === (12))){
var inst_15012 = (state_15026[(8)]);
var inst_15012__$1 = (state_15026[(2)]);
var inst_15013 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15012__$1);
var state_15026__$1 = (function (){var statearr_15035 = state_15026;
(statearr_15035[(8)] = inst_15012__$1);

return statearr_15035;
})();
if(cljs.core.truth_(inst_15013)){
var statearr_15036_15068 = state_15026__$1;
(statearr_15036_15068[(1)] = (13));

} else {
var statearr_15037_15069 = state_15026__$1;
(statearr_15037_15069[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (2))){
var inst_14989 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14990 = (0);
var state_15026__$1 = (function (){var statearr_15038 = state_15026;
(statearr_15038[(7)] = inst_14990);

(statearr_15038[(9)] = inst_14989);

return statearr_15038;
})();
var statearr_15039_15070 = state_15026__$1;
(statearr_15039_15070[(2)] = null);

(statearr_15039_15070[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (11))){
var inst_14990 = (state_15026[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15026,(10),Object,null,(9));
var inst_14999 = chs__$1.call(null,inst_14990);
var inst_15000 = done.call(null,inst_14990);
var inst_15001 = cljs.core.async.take_BANG_.call(null,inst_14999,inst_15000);
var state_15026__$1 = state_15026;
var statearr_15040_15071 = state_15026__$1;
(statearr_15040_15071[(2)] = inst_15001);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (9))){
var inst_14990 = (state_15026[(7)]);
var inst_15003 = (state_15026[(2)]);
var inst_15004 = (inst_14990 + (1));
var inst_14990__$1 = inst_15004;
var state_15026__$1 = (function (){var statearr_15041 = state_15026;
(statearr_15041[(7)] = inst_14990__$1);

(statearr_15041[(10)] = inst_15003);

return statearr_15041;
})();
var statearr_15042_15072 = state_15026__$1;
(statearr_15042_15072[(2)] = null);

(statearr_15042_15072[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (5))){
var inst_15010 = (state_15026[(2)]);
var state_15026__$1 = (function (){var statearr_15043 = state_15026;
(statearr_15043[(11)] = inst_15010);

return statearr_15043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15026__$1,(12),dchan);
} else {
if((state_val_15027 === (14))){
var inst_15012 = (state_15026[(8)]);
var inst_15017 = cljs.core.apply.call(null,f,inst_15012);
var state_15026__$1 = state_15026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15026__$1,(16),out,inst_15017);
} else {
if((state_val_15027 === (16))){
var inst_15019 = (state_15026[(2)]);
var state_15026__$1 = (function (){var statearr_15044 = state_15026;
(statearr_15044[(12)] = inst_15019);

return statearr_15044;
})();
var statearr_15045_15073 = state_15026__$1;
(statearr_15045_15073[(2)] = null);

(statearr_15045_15073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (10))){
var inst_14994 = (state_15026[(2)]);
var inst_14995 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15026__$1 = (function (){var statearr_15046 = state_15026;
(statearr_15046[(13)] = inst_14994);

return statearr_15046;
})();
var statearr_15047_15074 = state_15026__$1;
(statearr_15047_15074[(2)] = inst_14995);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15026__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15027 === (8))){
var inst_15008 = (state_15026[(2)]);
var state_15026__$1 = state_15026;
var statearr_15048_15075 = state_15026__$1;
(statearr_15048_15075[(2)] = inst_15008);

(statearr_15048_15075[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___15060,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7444__auto__,c__7509__auto___15060,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_15052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15052[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_15052[(1)] = (1));

return statearr_15052;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_15026){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_15026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e15053){if((e15053 instanceof Object)){
var ex__7448__auto__ = e15053;
var statearr_15054_15076 = state_15026;
(statearr_15054_15076[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15053;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15077 = state_15026;
state_15026 = G__15077;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_15026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_15026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___15060,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7511__auto__ = (function (){var statearr_15055 = f__7510__auto__.call(null);
(statearr_15055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___15060);

return statearr_15055;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___15060,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args15079 = [];
var len__6114__auto___15135 = arguments.length;
var i__6115__auto___15136 = (0);
while(true){
if((i__6115__auto___15136 < len__6114__auto___15135)){
args15079.push((arguments[i__6115__auto___15136]));

var G__15137 = (i__6115__auto___15136 + (1));
i__6115__auto___15136 = G__15137;
continue;
} else {
}
break;
}

var G__15081 = args15079.length;
switch (G__15081) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15079.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7509__auto___15139 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___15139,out){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___15139,out){
return (function (state_15111){
var state_val_15112 = (state_15111[(1)]);
if((state_val_15112 === (7))){
var inst_15090 = (state_15111[(7)]);
var inst_15091 = (state_15111[(8)]);
var inst_15090__$1 = (state_15111[(2)]);
var inst_15091__$1 = cljs.core.nth.call(null,inst_15090__$1,(0),null);
var inst_15092 = cljs.core.nth.call(null,inst_15090__$1,(1),null);
var inst_15093 = (inst_15091__$1 == null);
var state_15111__$1 = (function (){var statearr_15113 = state_15111;
(statearr_15113[(9)] = inst_15092);

(statearr_15113[(7)] = inst_15090__$1);

(statearr_15113[(8)] = inst_15091__$1);

return statearr_15113;
})();
if(cljs.core.truth_(inst_15093)){
var statearr_15114_15140 = state_15111__$1;
(statearr_15114_15140[(1)] = (8));

} else {
var statearr_15115_15141 = state_15111__$1;
(statearr_15115_15141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (1))){
var inst_15082 = cljs.core.vec.call(null,chs);
var inst_15083 = inst_15082;
var state_15111__$1 = (function (){var statearr_15116 = state_15111;
(statearr_15116[(10)] = inst_15083);

return statearr_15116;
})();
var statearr_15117_15142 = state_15111__$1;
(statearr_15117_15142[(2)] = null);

(statearr_15117_15142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (4))){
var inst_15083 = (state_15111[(10)]);
var state_15111__$1 = state_15111;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15111__$1,(7),inst_15083);
} else {
if((state_val_15112 === (6))){
var inst_15107 = (state_15111[(2)]);
var state_15111__$1 = state_15111;
var statearr_15118_15143 = state_15111__$1;
(statearr_15118_15143[(2)] = inst_15107);

(statearr_15118_15143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (3))){
var inst_15109 = (state_15111[(2)]);
var state_15111__$1 = state_15111;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15111__$1,inst_15109);
} else {
if((state_val_15112 === (2))){
var inst_15083 = (state_15111[(10)]);
var inst_15085 = cljs.core.count.call(null,inst_15083);
var inst_15086 = (inst_15085 > (0));
var state_15111__$1 = state_15111;
if(cljs.core.truth_(inst_15086)){
var statearr_15120_15144 = state_15111__$1;
(statearr_15120_15144[(1)] = (4));

} else {
var statearr_15121_15145 = state_15111__$1;
(statearr_15121_15145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (11))){
var inst_15083 = (state_15111[(10)]);
var inst_15100 = (state_15111[(2)]);
var tmp15119 = inst_15083;
var inst_15083__$1 = tmp15119;
var state_15111__$1 = (function (){var statearr_15122 = state_15111;
(statearr_15122[(11)] = inst_15100);

(statearr_15122[(10)] = inst_15083__$1);

return statearr_15122;
})();
var statearr_15123_15146 = state_15111__$1;
(statearr_15123_15146[(2)] = null);

(statearr_15123_15146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (9))){
var inst_15091 = (state_15111[(8)]);
var state_15111__$1 = state_15111;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15111__$1,(11),out,inst_15091);
} else {
if((state_val_15112 === (5))){
var inst_15105 = cljs.core.async.close_BANG_.call(null,out);
var state_15111__$1 = state_15111;
var statearr_15124_15147 = state_15111__$1;
(statearr_15124_15147[(2)] = inst_15105);

(statearr_15124_15147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (10))){
var inst_15103 = (state_15111[(2)]);
var state_15111__$1 = state_15111;
var statearr_15125_15148 = state_15111__$1;
(statearr_15125_15148[(2)] = inst_15103);

(statearr_15125_15148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15112 === (8))){
var inst_15092 = (state_15111[(9)]);
var inst_15083 = (state_15111[(10)]);
var inst_15090 = (state_15111[(7)]);
var inst_15091 = (state_15111[(8)]);
var inst_15095 = (function (){var cs = inst_15083;
var vec__15088 = inst_15090;
var v = inst_15091;
var c = inst_15092;
return ((function (cs,vec__15088,v,c,inst_15092,inst_15083,inst_15090,inst_15091,state_val_15112,c__7509__auto___15139,out){
return (function (p1__15078_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15078_SHARP_);
});
;})(cs,vec__15088,v,c,inst_15092,inst_15083,inst_15090,inst_15091,state_val_15112,c__7509__auto___15139,out))
})();
var inst_15096 = cljs.core.filterv.call(null,inst_15095,inst_15083);
var inst_15083__$1 = inst_15096;
var state_15111__$1 = (function (){var statearr_15126 = state_15111;
(statearr_15126[(10)] = inst_15083__$1);

return statearr_15126;
})();
var statearr_15127_15149 = state_15111__$1;
(statearr_15127_15149[(2)] = null);

(statearr_15127_15149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___15139,out))
;
return ((function (switch__7444__auto__,c__7509__auto___15139,out){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_15131 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15131[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_15131[(1)] = (1));

return statearr_15131;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_15111){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_15111);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e15132){if((e15132 instanceof Object)){
var ex__7448__auto__ = e15132;
var statearr_15133_15150 = state_15111;
(statearr_15133_15150[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15111);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15151 = state_15111;
state_15111 = G__15151;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_15111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_15111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___15139,out))
})();
var state__7511__auto__ = (function (){var statearr_15134 = f__7510__auto__.call(null);
(statearr_15134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___15139);

return statearr_15134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___15139,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args15152 = [];
var len__6114__auto___15201 = arguments.length;
var i__6115__auto___15202 = (0);
while(true){
if((i__6115__auto___15202 < len__6114__auto___15201)){
args15152.push((arguments[i__6115__auto___15202]));

var G__15203 = (i__6115__auto___15202 + (1));
i__6115__auto___15202 = G__15203;
continue;
} else {
}
break;
}

var G__15154 = args15152.length;
switch (G__15154) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15152.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7509__auto___15205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___15205,out){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___15205,out){
return (function (state_15178){
var state_val_15179 = (state_15178[(1)]);
if((state_val_15179 === (7))){
var inst_15160 = (state_15178[(7)]);
var inst_15160__$1 = (state_15178[(2)]);
var inst_15161 = (inst_15160__$1 == null);
var inst_15162 = cljs.core.not.call(null,inst_15161);
var state_15178__$1 = (function (){var statearr_15180 = state_15178;
(statearr_15180[(7)] = inst_15160__$1);

return statearr_15180;
})();
if(inst_15162){
var statearr_15181_15206 = state_15178__$1;
(statearr_15181_15206[(1)] = (8));

} else {
var statearr_15182_15207 = state_15178__$1;
(statearr_15182_15207[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15179 === (1))){
var inst_15155 = (0);
var state_15178__$1 = (function (){var statearr_15183 = state_15178;
(statearr_15183[(8)] = inst_15155);

return statearr_15183;
})();
var statearr_15184_15208 = state_15178__$1;
(statearr_15184_15208[(2)] = null);

(statearr_15184_15208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15179 === (4))){
var state_15178__$1 = state_15178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15178__$1,(7),ch);
} else {
if((state_val_15179 === (6))){
var inst_15173 = (state_15178[(2)]);
var state_15178__$1 = state_15178;
var statearr_15185_15209 = state_15178__$1;
(statearr_15185_15209[(2)] = inst_15173);

(statearr_15185_15209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15179 === (3))){
var inst_15175 = (state_15178[(2)]);
var inst_15176 = cljs.core.async.close_BANG_.call(null,out);
var state_15178__$1 = (function (){var statearr_15186 = state_15178;
(statearr_15186[(9)] = inst_15175);

return statearr_15186;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15178__$1,inst_15176);
} else {
if((state_val_15179 === (2))){
var inst_15155 = (state_15178[(8)]);
var inst_15157 = (inst_15155 < n);
var state_15178__$1 = state_15178;
if(cljs.core.truth_(inst_15157)){
var statearr_15187_15210 = state_15178__$1;
(statearr_15187_15210[(1)] = (4));

} else {
var statearr_15188_15211 = state_15178__$1;
(statearr_15188_15211[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15179 === (11))){
var inst_15155 = (state_15178[(8)]);
var inst_15165 = (state_15178[(2)]);
var inst_15166 = (inst_15155 + (1));
var inst_15155__$1 = inst_15166;
var state_15178__$1 = (function (){var statearr_15189 = state_15178;
(statearr_15189[(10)] = inst_15165);

(statearr_15189[(8)] = inst_15155__$1);

return statearr_15189;
})();
var statearr_15190_15212 = state_15178__$1;
(statearr_15190_15212[(2)] = null);

(statearr_15190_15212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15179 === (9))){
var state_15178__$1 = state_15178;
var statearr_15191_15213 = state_15178__$1;
(statearr_15191_15213[(2)] = null);

(statearr_15191_15213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15179 === (5))){
var state_15178__$1 = state_15178;
var statearr_15192_15214 = state_15178__$1;
(statearr_15192_15214[(2)] = null);

(statearr_15192_15214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15179 === (10))){
var inst_15170 = (state_15178[(2)]);
var state_15178__$1 = state_15178;
var statearr_15193_15215 = state_15178__$1;
(statearr_15193_15215[(2)] = inst_15170);

(statearr_15193_15215[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15179 === (8))){
var inst_15160 = (state_15178[(7)]);
var state_15178__$1 = state_15178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15178__$1,(11),out,inst_15160);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___15205,out))
;
return ((function (switch__7444__auto__,c__7509__auto___15205,out){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_15197 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15197[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_15197[(1)] = (1));

return statearr_15197;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_15178){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_15178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e15198){if((e15198 instanceof Object)){
var ex__7448__auto__ = e15198;
var statearr_15199_15216 = state_15178;
(statearr_15199_15216[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15217 = state_15178;
state_15178 = G__15217;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_15178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_15178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___15205,out))
})();
var state__7511__auto__ = (function (){var statearr_15200 = f__7510__auto__.call(null);
(statearr_15200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___15205);

return statearr_15200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___15205,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15225 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15225 = (function (map_LT_,f,ch,meta15226){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15226 = meta15226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15227,meta15226__$1){
var self__ = this;
var _15227__$1 = this;
return (new cljs.core.async.t_cljs$core$async15225(self__.map_LT_,self__.f,self__.ch,meta15226__$1));
});

cljs.core.async.t_cljs$core$async15225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15227){
var self__ = this;
var _15227__$1 = this;
return self__.meta15226;
});

cljs.core.async.t_cljs$core$async15225.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15225.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15225.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15225.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15225.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15228 = (function (map_LT_,f,ch,meta15226,_,fn1,meta15229){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15226 = meta15226;
this._ = _;
this.fn1 = fn1;
this.meta15229 = meta15229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15230,meta15229__$1){
var self__ = this;
var _15230__$1 = this;
return (new cljs.core.async.t_cljs$core$async15228(self__.map_LT_,self__.f,self__.ch,self__.meta15226,self__._,self__.fn1,meta15229__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15228.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15230){
var self__ = this;
var _15230__$1 = this;
return self__.meta15229;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15228.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15228.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15228.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15218_SHARP_){
return f1.call(null,(((p1__15218_SHARP_ == null))?null:self__.f.call(null,p1__15218_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15228.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15226","meta15226",-962408666,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15225","cljs.core.async/t_cljs$core$async15225",77152662,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15229","meta15229",-1624418458,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15228";

cljs.core.async.t_cljs$core$async15228.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async15228");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15228 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15228(map_LT___$1,f__$1,ch__$1,meta15226__$1,___$2,fn1__$1,meta15229){
return (new cljs.core.async.t_cljs$core$async15228(map_LT___$1,f__$1,ch__$1,meta15226__$1,___$2,fn1__$1,meta15229));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15228(self__.map_LT_,self__.f,self__.ch,self__.meta15226,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5044__auto__ = ret;
if(cljs.core.truth_(and__5044__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5044__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async15225.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15225.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15225.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15226","meta15226",-962408666,null)], null);
});

cljs.core.async.t_cljs$core$async15225.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15225.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15225";

cljs.core.async.t_cljs$core$async15225.cljs$lang$ctorPrWriter = (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async15225");
});

cljs.core.async.__GT_t_cljs$core$async15225 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15225(map_LT___$1,f__$1,ch__$1,meta15226){
return (new cljs.core.async.t_cljs$core$async15225(map_LT___$1,f__$1,ch__$1,meta15226));
});

}

return (new cljs.core.async.t_cljs$core$async15225(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15234 = (function (map_GT_,f,ch,meta15235){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15235 = meta15235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15236,meta15235__$1){
var self__ = this;
var _15236__$1 = this;
return (new cljs.core.async.t_cljs$core$async15234(self__.map_GT_,self__.f,self__.ch,meta15235__$1));
});

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15236){
var self__ = this;
var _15236__$1 = this;
return self__.meta15235;
});

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15235","meta15235",-1624585746,null)], null);
});

cljs.core.async.t_cljs$core$async15234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15234";

cljs.core.async.t_cljs$core$async15234.cljs$lang$ctorPrWriter = (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async15234");
});

cljs.core.async.__GT_t_cljs$core$async15234 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15234(map_GT___$1,f__$1,ch__$1,meta15235){
return (new cljs.core.async.t_cljs$core$async15234(map_GT___$1,f__$1,ch__$1,meta15235));
});

}

return (new cljs.core.async.t_cljs$core$async15234(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15240 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15240 = (function (filter_GT_,p,ch,meta15241){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15241 = meta15241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15242,meta15241__$1){
var self__ = this;
var _15242__$1 = this;
return (new cljs.core.async.t_cljs$core$async15240(self__.filter_GT_,self__.p,self__.ch,meta15241__$1));
});

cljs.core.async.t_cljs$core$async15240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15242){
var self__ = this;
var _15242__$1 = this;
return self__.meta15241;
});

cljs.core.async.t_cljs$core$async15240.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15240.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15240.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15240.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15240.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15240.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15240.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15241","meta15241",2145639698,null)], null);
});

cljs.core.async.t_cljs$core$async15240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15240";

cljs.core.async.t_cljs$core$async15240.cljs$lang$ctorPrWriter = (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"cljs.core.async/t_cljs$core$async15240");
});

cljs.core.async.__GT_t_cljs$core$async15240 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15240(filter_GT___$1,p__$1,ch__$1,meta15241){
return (new cljs.core.async.t_cljs$core$async15240(filter_GT___$1,p__$1,ch__$1,meta15241));
});

}

return (new cljs.core.async.t_cljs$core$async15240(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args15243 = [];
var len__6114__auto___15287 = arguments.length;
var i__6115__auto___15288 = (0);
while(true){
if((i__6115__auto___15288 < len__6114__auto___15287)){
args15243.push((arguments[i__6115__auto___15288]));

var G__15289 = (i__6115__auto___15288 + (1));
i__6115__auto___15288 = G__15289;
continue;
} else {
}
break;
}

var G__15245 = args15243.length;
switch (G__15245) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15243.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7509__auto___15291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___15291,out){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___15291,out){
return (function (state_15266){
var state_val_15267 = (state_15266[(1)]);
if((state_val_15267 === (7))){
var inst_15262 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15268_15292 = state_15266__$1;
(statearr_15268_15292[(2)] = inst_15262);

(statearr_15268_15292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (1))){
var state_15266__$1 = state_15266;
var statearr_15269_15293 = state_15266__$1;
(statearr_15269_15293[(2)] = null);

(statearr_15269_15293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (4))){
var inst_15248 = (state_15266[(7)]);
var inst_15248__$1 = (state_15266[(2)]);
var inst_15249 = (inst_15248__$1 == null);
var state_15266__$1 = (function (){var statearr_15270 = state_15266;
(statearr_15270[(7)] = inst_15248__$1);

return statearr_15270;
})();
if(cljs.core.truth_(inst_15249)){
var statearr_15271_15294 = state_15266__$1;
(statearr_15271_15294[(1)] = (5));

} else {
var statearr_15272_15295 = state_15266__$1;
(statearr_15272_15295[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (6))){
var inst_15248 = (state_15266[(7)]);
var inst_15253 = p.call(null,inst_15248);
var state_15266__$1 = state_15266;
if(cljs.core.truth_(inst_15253)){
var statearr_15273_15296 = state_15266__$1;
(statearr_15273_15296[(1)] = (8));

} else {
var statearr_15274_15297 = state_15266__$1;
(statearr_15274_15297[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (3))){
var inst_15264 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15266__$1,inst_15264);
} else {
if((state_val_15267 === (2))){
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15266__$1,(4),ch);
} else {
if((state_val_15267 === (11))){
var inst_15256 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15275_15298 = state_15266__$1;
(statearr_15275_15298[(2)] = inst_15256);

(statearr_15275_15298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (9))){
var state_15266__$1 = state_15266;
var statearr_15276_15299 = state_15266__$1;
(statearr_15276_15299[(2)] = null);

(statearr_15276_15299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (5))){
var inst_15251 = cljs.core.async.close_BANG_.call(null,out);
var state_15266__$1 = state_15266;
var statearr_15277_15300 = state_15266__$1;
(statearr_15277_15300[(2)] = inst_15251);

(statearr_15277_15300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (10))){
var inst_15259 = (state_15266[(2)]);
var state_15266__$1 = (function (){var statearr_15278 = state_15266;
(statearr_15278[(8)] = inst_15259);

return statearr_15278;
})();
var statearr_15279_15301 = state_15266__$1;
(statearr_15279_15301[(2)] = null);

(statearr_15279_15301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (8))){
var inst_15248 = (state_15266[(7)]);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15266__$1,(11),out,inst_15248);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___15291,out))
;
return ((function (switch__7444__auto__,c__7509__auto___15291,out){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_15283 = [null,null,null,null,null,null,null,null,null];
(statearr_15283[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_15283[(1)] = (1));

return statearr_15283;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_15266){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_15266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e15284){if((e15284 instanceof Object)){
var ex__7448__auto__ = e15284;
var statearr_15285_15302 = state_15266;
(statearr_15285_15302[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15284;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15303 = state_15266;
state_15266 = G__15303;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_15266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_15266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___15291,out))
})();
var state__7511__auto__ = (function (){var statearr_15286 = f__7510__auto__.call(null);
(statearr_15286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___15291);

return statearr_15286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___15291,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15304 = [];
var len__6114__auto___15307 = arguments.length;
var i__6115__auto___15308 = (0);
while(true){
if((i__6115__auto___15308 < len__6114__auto___15307)){
args15304.push((arguments[i__6115__auto___15308]));

var G__15309 = (i__6115__auto___15308 + (1));
i__6115__auto___15308 = G__15309;
continue;
} else {
}
break;
}

var G__15306 = args15304.length;
switch (G__15306) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15304.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7509__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto__){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto__){
return (function (state_15476){
var state_val_15477 = (state_15476[(1)]);
if((state_val_15477 === (7))){
var inst_15472 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15478_15519 = state_15476__$1;
(statearr_15478_15519[(2)] = inst_15472);

(statearr_15478_15519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (20))){
var inst_15442 = (state_15476[(7)]);
var inst_15453 = (state_15476[(2)]);
var inst_15454 = cljs.core.next.call(null,inst_15442);
var inst_15428 = inst_15454;
var inst_15429 = null;
var inst_15430 = (0);
var inst_15431 = (0);
var state_15476__$1 = (function (){var statearr_15479 = state_15476;
(statearr_15479[(8)] = inst_15453);

(statearr_15479[(9)] = inst_15429);

(statearr_15479[(10)] = inst_15431);

(statearr_15479[(11)] = inst_15430);

(statearr_15479[(12)] = inst_15428);

return statearr_15479;
})();
var statearr_15480_15520 = state_15476__$1;
(statearr_15480_15520[(2)] = null);

(statearr_15480_15520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (1))){
var state_15476__$1 = state_15476;
var statearr_15481_15521 = state_15476__$1;
(statearr_15481_15521[(2)] = null);

(statearr_15481_15521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (4))){
var inst_15417 = (state_15476[(13)]);
var inst_15417__$1 = (state_15476[(2)]);
var inst_15418 = (inst_15417__$1 == null);
var state_15476__$1 = (function (){var statearr_15482 = state_15476;
(statearr_15482[(13)] = inst_15417__$1);

return statearr_15482;
})();
if(cljs.core.truth_(inst_15418)){
var statearr_15483_15522 = state_15476__$1;
(statearr_15483_15522[(1)] = (5));

} else {
var statearr_15484_15523 = state_15476__$1;
(statearr_15484_15523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (15))){
var state_15476__$1 = state_15476;
var statearr_15488_15524 = state_15476__$1;
(statearr_15488_15524[(2)] = null);

(statearr_15488_15524[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (21))){
var state_15476__$1 = state_15476;
var statearr_15489_15525 = state_15476__$1;
(statearr_15489_15525[(2)] = null);

(statearr_15489_15525[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (13))){
var inst_15429 = (state_15476[(9)]);
var inst_15431 = (state_15476[(10)]);
var inst_15430 = (state_15476[(11)]);
var inst_15428 = (state_15476[(12)]);
var inst_15438 = (state_15476[(2)]);
var inst_15439 = (inst_15431 + (1));
var tmp15485 = inst_15429;
var tmp15486 = inst_15430;
var tmp15487 = inst_15428;
var inst_15428__$1 = tmp15487;
var inst_15429__$1 = tmp15485;
var inst_15430__$1 = tmp15486;
var inst_15431__$1 = inst_15439;
var state_15476__$1 = (function (){var statearr_15490 = state_15476;
(statearr_15490[(9)] = inst_15429__$1);

(statearr_15490[(14)] = inst_15438);

(statearr_15490[(10)] = inst_15431__$1);

(statearr_15490[(11)] = inst_15430__$1);

(statearr_15490[(12)] = inst_15428__$1);

return statearr_15490;
})();
var statearr_15491_15526 = state_15476__$1;
(statearr_15491_15526[(2)] = null);

(statearr_15491_15526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (22))){
var state_15476__$1 = state_15476;
var statearr_15492_15527 = state_15476__$1;
(statearr_15492_15527[(2)] = null);

(statearr_15492_15527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (6))){
var inst_15417 = (state_15476[(13)]);
var inst_15426 = f.call(null,inst_15417);
var inst_15427 = cljs.core.seq.call(null,inst_15426);
var inst_15428 = inst_15427;
var inst_15429 = null;
var inst_15430 = (0);
var inst_15431 = (0);
var state_15476__$1 = (function (){var statearr_15493 = state_15476;
(statearr_15493[(9)] = inst_15429);

(statearr_15493[(10)] = inst_15431);

(statearr_15493[(11)] = inst_15430);

(statearr_15493[(12)] = inst_15428);

return statearr_15493;
})();
var statearr_15494_15528 = state_15476__$1;
(statearr_15494_15528[(2)] = null);

(statearr_15494_15528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (17))){
var inst_15442 = (state_15476[(7)]);
var inst_15446 = cljs.core.chunk_first.call(null,inst_15442);
var inst_15447 = cljs.core.chunk_rest.call(null,inst_15442);
var inst_15448 = cljs.core.count.call(null,inst_15446);
var inst_15428 = inst_15447;
var inst_15429 = inst_15446;
var inst_15430 = inst_15448;
var inst_15431 = (0);
var state_15476__$1 = (function (){var statearr_15495 = state_15476;
(statearr_15495[(9)] = inst_15429);

(statearr_15495[(10)] = inst_15431);

(statearr_15495[(11)] = inst_15430);

(statearr_15495[(12)] = inst_15428);

return statearr_15495;
})();
var statearr_15496_15529 = state_15476__$1;
(statearr_15496_15529[(2)] = null);

(statearr_15496_15529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (3))){
var inst_15474 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15476__$1,inst_15474);
} else {
if((state_val_15477 === (12))){
var inst_15462 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15497_15530 = state_15476__$1;
(statearr_15497_15530[(2)] = inst_15462);

(statearr_15497_15530[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (2))){
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15476__$1,(4),in$);
} else {
if((state_val_15477 === (23))){
var inst_15470 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15498_15531 = state_15476__$1;
(statearr_15498_15531[(2)] = inst_15470);

(statearr_15498_15531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (19))){
var inst_15457 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15499_15532 = state_15476__$1;
(statearr_15499_15532[(2)] = inst_15457);

(statearr_15499_15532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (11))){
var inst_15442 = (state_15476[(7)]);
var inst_15428 = (state_15476[(12)]);
var inst_15442__$1 = cljs.core.seq.call(null,inst_15428);
var state_15476__$1 = (function (){var statearr_15500 = state_15476;
(statearr_15500[(7)] = inst_15442__$1);

return statearr_15500;
})();
if(inst_15442__$1){
var statearr_15501_15533 = state_15476__$1;
(statearr_15501_15533[(1)] = (14));

} else {
var statearr_15502_15534 = state_15476__$1;
(statearr_15502_15534[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (9))){
var inst_15464 = (state_15476[(2)]);
var inst_15465 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15476__$1 = (function (){var statearr_15503 = state_15476;
(statearr_15503[(15)] = inst_15464);

return statearr_15503;
})();
if(cljs.core.truth_(inst_15465)){
var statearr_15504_15535 = state_15476__$1;
(statearr_15504_15535[(1)] = (21));

} else {
var statearr_15505_15536 = state_15476__$1;
(statearr_15505_15536[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (5))){
var inst_15420 = cljs.core.async.close_BANG_.call(null,out);
var state_15476__$1 = state_15476;
var statearr_15506_15537 = state_15476__$1;
(statearr_15506_15537[(2)] = inst_15420);

(statearr_15506_15537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (14))){
var inst_15442 = (state_15476[(7)]);
var inst_15444 = cljs.core.chunked_seq_QMARK_.call(null,inst_15442);
var state_15476__$1 = state_15476;
if(inst_15444){
var statearr_15507_15538 = state_15476__$1;
(statearr_15507_15538[(1)] = (17));

} else {
var statearr_15508_15539 = state_15476__$1;
(statearr_15508_15539[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (16))){
var inst_15460 = (state_15476[(2)]);
var state_15476__$1 = state_15476;
var statearr_15509_15540 = state_15476__$1;
(statearr_15509_15540[(2)] = inst_15460);

(statearr_15509_15540[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15477 === (10))){
var inst_15429 = (state_15476[(9)]);
var inst_15431 = (state_15476[(10)]);
var inst_15436 = cljs.core._nth.call(null,inst_15429,inst_15431);
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15476__$1,(13),out,inst_15436);
} else {
if((state_val_15477 === (18))){
var inst_15442 = (state_15476[(7)]);
var inst_15451 = cljs.core.first.call(null,inst_15442);
var state_15476__$1 = state_15476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15476__$1,(20),out,inst_15451);
} else {
if((state_val_15477 === (8))){
var inst_15431 = (state_15476[(10)]);
var inst_15430 = (state_15476[(11)]);
var inst_15433 = (inst_15431 < inst_15430);
var inst_15434 = inst_15433;
var state_15476__$1 = state_15476;
if(cljs.core.truth_(inst_15434)){
var statearr_15510_15541 = state_15476__$1;
(statearr_15510_15541[(1)] = (10));

} else {
var statearr_15511_15542 = state_15476__$1;
(statearr_15511_15542[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto__))
;
return ((function (switch__7444__auto__,c__7509__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7445__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7445__auto____0 = (function (){
var statearr_15515 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15515[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7445__auto__);

(statearr_15515[(1)] = (1));

return statearr_15515;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7445__auto____1 = (function (state_15476){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_15476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e15516){if((e15516 instanceof Object)){
var ex__7448__auto__ = e15516;
var statearr_15517_15543 = state_15476;
(statearr_15517_15543[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15544 = state_15476;
state_15476 = G__15544;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7445__auto__ = function(state_15476){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7445__auto____1.call(this,state_15476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7445__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7445__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto__))
})();
var state__7511__auto__ = (function (){var statearr_15518 = f__7510__auto__.call(null);
(statearr_15518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto__);

return statearr_15518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto__))
);

return c__7509__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args15545 = [];
var len__6114__auto___15548 = arguments.length;
var i__6115__auto___15549 = (0);
while(true){
if((i__6115__auto___15549 < len__6114__auto___15548)){
args15545.push((arguments[i__6115__auto___15549]));

var G__15550 = (i__6115__auto___15549 + (1));
i__6115__auto___15549 = G__15550;
continue;
} else {
}
break;
}

var G__15547 = args15545.length;
switch (G__15547) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15545.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args15552 = [];
var len__6114__auto___15555 = arguments.length;
var i__6115__auto___15556 = (0);
while(true){
if((i__6115__auto___15556 < len__6114__auto___15555)){
args15552.push((arguments[i__6115__auto___15556]));

var G__15557 = (i__6115__auto___15556 + (1));
i__6115__auto___15556 = G__15557;
continue;
} else {
}
break;
}

var G__15554 = args15552.length;
switch (G__15554) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15552.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args15559 = [];
var len__6114__auto___15610 = arguments.length;
var i__6115__auto___15611 = (0);
while(true){
if((i__6115__auto___15611 < len__6114__auto___15610)){
args15559.push((arguments[i__6115__auto___15611]));

var G__15612 = (i__6115__auto___15611 + (1));
i__6115__auto___15611 = G__15612;
continue;
} else {
}
break;
}

var G__15561 = args15559.length;
switch (G__15561) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15559.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7509__auto___15614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___15614,out){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___15614,out){
return (function (state_15585){
var state_val_15586 = (state_15585[(1)]);
if((state_val_15586 === (7))){
var inst_15580 = (state_15585[(2)]);
var state_15585__$1 = state_15585;
var statearr_15587_15615 = state_15585__$1;
(statearr_15587_15615[(2)] = inst_15580);

(statearr_15587_15615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (1))){
var inst_15562 = null;
var state_15585__$1 = (function (){var statearr_15588 = state_15585;
(statearr_15588[(7)] = inst_15562);

return statearr_15588;
})();
var statearr_15589_15616 = state_15585__$1;
(statearr_15589_15616[(2)] = null);

(statearr_15589_15616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (4))){
var inst_15565 = (state_15585[(8)]);
var inst_15565__$1 = (state_15585[(2)]);
var inst_15566 = (inst_15565__$1 == null);
var inst_15567 = cljs.core.not.call(null,inst_15566);
var state_15585__$1 = (function (){var statearr_15590 = state_15585;
(statearr_15590[(8)] = inst_15565__$1);

return statearr_15590;
})();
if(inst_15567){
var statearr_15591_15617 = state_15585__$1;
(statearr_15591_15617[(1)] = (5));

} else {
var statearr_15592_15618 = state_15585__$1;
(statearr_15592_15618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (6))){
var state_15585__$1 = state_15585;
var statearr_15593_15619 = state_15585__$1;
(statearr_15593_15619[(2)] = null);

(statearr_15593_15619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (3))){
var inst_15582 = (state_15585[(2)]);
var inst_15583 = cljs.core.async.close_BANG_.call(null,out);
var state_15585__$1 = (function (){var statearr_15594 = state_15585;
(statearr_15594[(9)] = inst_15582);

return statearr_15594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15585__$1,inst_15583);
} else {
if((state_val_15586 === (2))){
var state_15585__$1 = state_15585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15585__$1,(4),ch);
} else {
if((state_val_15586 === (11))){
var inst_15565 = (state_15585[(8)]);
var inst_15574 = (state_15585[(2)]);
var inst_15562 = inst_15565;
var state_15585__$1 = (function (){var statearr_15595 = state_15585;
(statearr_15595[(10)] = inst_15574);

(statearr_15595[(7)] = inst_15562);

return statearr_15595;
})();
var statearr_15596_15620 = state_15585__$1;
(statearr_15596_15620[(2)] = null);

(statearr_15596_15620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (9))){
var inst_15565 = (state_15585[(8)]);
var state_15585__$1 = state_15585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15585__$1,(11),out,inst_15565);
} else {
if((state_val_15586 === (5))){
var inst_15565 = (state_15585[(8)]);
var inst_15562 = (state_15585[(7)]);
var inst_15569 = cljs.core._EQ_.call(null,inst_15565,inst_15562);
var state_15585__$1 = state_15585;
if(inst_15569){
var statearr_15598_15621 = state_15585__$1;
(statearr_15598_15621[(1)] = (8));

} else {
var statearr_15599_15622 = state_15585__$1;
(statearr_15599_15622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (10))){
var inst_15577 = (state_15585[(2)]);
var state_15585__$1 = state_15585;
var statearr_15600_15623 = state_15585__$1;
(statearr_15600_15623[(2)] = inst_15577);

(statearr_15600_15623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15586 === (8))){
var inst_15562 = (state_15585[(7)]);
var tmp15597 = inst_15562;
var inst_15562__$1 = tmp15597;
var state_15585__$1 = (function (){var statearr_15601 = state_15585;
(statearr_15601[(7)] = inst_15562__$1);

return statearr_15601;
})();
var statearr_15602_15624 = state_15585__$1;
(statearr_15602_15624[(2)] = null);

(statearr_15602_15624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___15614,out))
;
return ((function (switch__7444__auto__,c__7509__auto___15614,out){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_15606 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15606[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_15606[(1)] = (1));

return statearr_15606;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_15585){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_15585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e15607){if((e15607 instanceof Object)){
var ex__7448__auto__ = e15607;
var statearr_15608_15625 = state_15585;
(statearr_15608_15625[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15626 = state_15585;
state_15585 = G__15626;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_15585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_15585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___15614,out))
})();
var state__7511__auto__ = (function (){var statearr_15609 = f__7510__auto__.call(null);
(statearr_15609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___15614);

return statearr_15609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___15614,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15627 = [];
var len__6114__auto___15697 = arguments.length;
var i__6115__auto___15698 = (0);
while(true){
if((i__6115__auto___15698 < len__6114__auto___15697)){
args15627.push((arguments[i__6115__auto___15698]));

var G__15699 = (i__6115__auto___15698 + (1));
i__6115__auto___15698 = G__15699;
continue;
} else {
}
break;
}

var G__15629 = args15627.length;
switch (G__15629) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15627.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7509__auto___15701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___15701,out){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___15701,out){
return (function (state_15667){
var state_val_15668 = (state_15667[(1)]);
if((state_val_15668 === (7))){
var inst_15663 = (state_15667[(2)]);
var state_15667__$1 = state_15667;
var statearr_15669_15702 = state_15667__$1;
(statearr_15669_15702[(2)] = inst_15663);

(statearr_15669_15702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (1))){
var inst_15630 = (new Array(n));
var inst_15631 = inst_15630;
var inst_15632 = (0);
var state_15667__$1 = (function (){var statearr_15670 = state_15667;
(statearr_15670[(7)] = inst_15631);

(statearr_15670[(8)] = inst_15632);

return statearr_15670;
})();
var statearr_15671_15703 = state_15667__$1;
(statearr_15671_15703[(2)] = null);

(statearr_15671_15703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (4))){
var inst_15635 = (state_15667[(9)]);
var inst_15635__$1 = (state_15667[(2)]);
var inst_15636 = (inst_15635__$1 == null);
var inst_15637 = cljs.core.not.call(null,inst_15636);
var state_15667__$1 = (function (){var statearr_15672 = state_15667;
(statearr_15672[(9)] = inst_15635__$1);

return statearr_15672;
})();
if(inst_15637){
var statearr_15673_15704 = state_15667__$1;
(statearr_15673_15704[(1)] = (5));

} else {
var statearr_15674_15705 = state_15667__$1;
(statearr_15674_15705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (15))){
var inst_15657 = (state_15667[(2)]);
var state_15667__$1 = state_15667;
var statearr_15675_15706 = state_15667__$1;
(statearr_15675_15706[(2)] = inst_15657);

(statearr_15675_15706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (13))){
var state_15667__$1 = state_15667;
var statearr_15676_15707 = state_15667__$1;
(statearr_15676_15707[(2)] = null);

(statearr_15676_15707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (6))){
var inst_15632 = (state_15667[(8)]);
var inst_15653 = (inst_15632 > (0));
var state_15667__$1 = state_15667;
if(cljs.core.truth_(inst_15653)){
var statearr_15677_15708 = state_15667__$1;
(statearr_15677_15708[(1)] = (12));

} else {
var statearr_15678_15709 = state_15667__$1;
(statearr_15678_15709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (3))){
var inst_15665 = (state_15667[(2)]);
var state_15667__$1 = state_15667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15667__$1,inst_15665);
} else {
if((state_val_15668 === (12))){
var inst_15631 = (state_15667[(7)]);
var inst_15655 = cljs.core.vec.call(null,inst_15631);
var state_15667__$1 = state_15667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15667__$1,(15),out,inst_15655);
} else {
if((state_val_15668 === (2))){
var state_15667__$1 = state_15667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15667__$1,(4),ch);
} else {
if((state_val_15668 === (11))){
var inst_15647 = (state_15667[(2)]);
var inst_15648 = (new Array(n));
var inst_15631 = inst_15648;
var inst_15632 = (0);
var state_15667__$1 = (function (){var statearr_15679 = state_15667;
(statearr_15679[(7)] = inst_15631);

(statearr_15679[(10)] = inst_15647);

(statearr_15679[(8)] = inst_15632);

return statearr_15679;
})();
var statearr_15680_15710 = state_15667__$1;
(statearr_15680_15710[(2)] = null);

(statearr_15680_15710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (9))){
var inst_15631 = (state_15667[(7)]);
var inst_15645 = cljs.core.vec.call(null,inst_15631);
var state_15667__$1 = state_15667;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15667__$1,(11),out,inst_15645);
} else {
if((state_val_15668 === (5))){
var inst_15631 = (state_15667[(7)]);
var inst_15632 = (state_15667[(8)]);
var inst_15640 = (state_15667[(11)]);
var inst_15635 = (state_15667[(9)]);
var inst_15639 = (inst_15631[inst_15632] = inst_15635);
var inst_15640__$1 = (inst_15632 + (1));
var inst_15641 = (inst_15640__$1 < n);
var state_15667__$1 = (function (){var statearr_15681 = state_15667;
(statearr_15681[(12)] = inst_15639);

(statearr_15681[(11)] = inst_15640__$1);

return statearr_15681;
})();
if(cljs.core.truth_(inst_15641)){
var statearr_15682_15711 = state_15667__$1;
(statearr_15682_15711[(1)] = (8));

} else {
var statearr_15683_15712 = state_15667__$1;
(statearr_15683_15712[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (14))){
var inst_15660 = (state_15667[(2)]);
var inst_15661 = cljs.core.async.close_BANG_.call(null,out);
var state_15667__$1 = (function (){var statearr_15685 = state_15667;
(statearr_15685[(13)] = inst_15660);

return statearr_15685;
})();
var statearr_15686_15713 = state_15667__$1;
(statearr_15686_15713[(2)] = inst_15661);

(statearr_15686_15713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (10))){
var inst_15651 = (state_15667[(2)]);
var state_15667__$1 = state_15667;
var statearr_15687_15714 = state_15667__$1;
(statearr_15687_15714[(2)] = inst_15651);

(statearr_15687_15714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15668 === (8))){
var inst_15631 = (state_15667[(7)]);
var inst_15640 = (state_15667[(11)]);
var tmp15684 = inst_15631;
var inst_15631__$1 = tmp15684;
var inst_15632 = inst_15640;
var state_15667__$1 = (function (){var statearr_15688 = state_15667;
(statearr_15688[(7)] = inst_15631__$1);

(statearr_15688[(8)] = inst_15632);

return statearr_15688;
})();
var statearr_15689_15715 = state_15667__$1;
(statearr_15689_15715[(2)] = null);

(statearr_15689_15715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___15701,out))
;
return ((function (switch__7444__auto__,c__7509__auto___15701,out){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_15693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15693[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_15693[(1)] = (1));

return statearr_15693;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_15667){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_15667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e15694){if((e15694 instanceof Object)){
var ex__7448__auto__ = e15694;
var statearr_15695_15716 = state_15667;
(statearr_15695_15716[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15717 = state_15667;
state_15667 = G__15717;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_15667){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_15667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___15701,out))
})();
var state__7511__auto__ = (function (){var statearr_15696 = f__7510__auto__.call(null);
(statearr_15696[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___15701);

return statearr_15696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___15701,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args15718 = [];
var len__6114__auto___15792 = arguments.length;
var i__6115__auto___15793 = (0);
while(true){
if((i__6115__auto___15793 < len__6114__auto___15792)){
args15718.push((arguments[i__6115__auto___15793]));

var G__15794 = (i__6115__auto___15793 + (1));
i__6115__auto___15793 = G__15794;
continue;
} else {
}
break;
}

var G__15720 = args15718.length;
switch (G__15720) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15718.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7509__auto___15796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7509__auto___15796,out){
return (function (){
var f__7510__auto__ = (function (){var switch__7444__auto__ = ((function (c__7509__auto___15796,out){
return (function (state_15762){
var state_val_15763 = (state_15762[(1)]);
if((state_val_15763 === (7))){
var inst_15758 = (state_15762[(2)]);
var state_15762__$1 = state_15762;
var statearr_15764_15797 = state_15762__$1;
(statearr_15764_15797[(2)] = inst_15758);

(statearr_15764_15797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (1))){
var inst_15721 = [];
var inst_15722 = inst_15721;
var inst_15723 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15762__$1 = (function (){var statearr_15765 = state_15762;
(statearr_15765[(7)] = inst_15723);

(statearr_15765[(8)] = inst_15722);

return statearr_15765;
})();
var statearr_15766_15798 = state_15762__$1;
(statearr_15766_15798[(2)] = null);

(statearr_15766_15798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (4))){
var inst_15726 = (state_15762[(9)]);
var inst_15726__$1 = (state_15762[(2)]);
var inst_15727 = (inst_15726__$1 == null);
var inst_15728 = cljs.core.not.call(null,inst_15727);
var state_15762__$1 = (function (){var statearr_15767 = state_15762;
(statearr_15767[(9)] = inst_15726__$1);

return statearr_15767;
})();
if(inst_15728){
var statearr_15768_15799 = state_15762__$1;
(statearr_15768_15799[(1)] = (5));

} else {
var statearr_15769_15800 = state_15762__$1;
(statearr_15769_15800[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (15))){
var inst_15752 = (state_15762[(2)]);
var state_15762__$1 = state_15762;
var statearr_15770_15801 = state_15762__$1;
(statearr_15770_15801[(2)] = inst_15752);

(statearr_15770_15801[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (13))){
var state_15762__$1 = state_15762;
var statearr_15771_15802 = state_15762__$1;
(statearr_15771_15802[(2)] = null);

(statearr_15771_15802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (6))){
var inst_15722 = (state_15762[(8)]);
var inst_15747 = inst_15722.length;
var inst_15748 = (inst_15747 > (0));
var state_15762__$1 = state_15762;
if(cljs.core.truth_(inst_15748)){
var statearr_15772_15803 = state_15762__$1;
(statearr_15772_15803[(1)] = (12));

} else {
var statearr_15773_15804 = state_15762__$1;
(statearr_15773_15804[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (3))){
var inst_15760 = (state_15762[(2)]);
var state_15762__$1 = state_15762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15762__$1,inst_15760);
} else {
if((state_val_15763 === (12))){
var inst_15722 = (state_15762[(8)]);
var inst_15750 = cljs.core.vec.call(null,inst_15722);
var state_15762__$1 = state_15762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15762__$1,(15),out,inst_15750);
} else {
if((state_val_15763 === (2))){
var state_15762__$1 = state_15762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15762__$1,(4),ch);
} else {
if((state_val_15763 === (11))){
var inst_15726 = (state_15762[(9)]);
var inst_15730 = (state_15762[(10)]);
var inst_15740 = (state_15762[(2)]);
var inst_15741 = [];
var inst_15742 = inst_15741.push(inst_15726);
var inst_15722 = inst_15741;
var inst_15723 = inst_15730;
var state_15762__$1 = (function (){var statearr_15774 = state_15762;
(statearr_15774[(7)] = inst_15723);

(statearr_15774[(11)] = inst_15742);

(statearr_15774[(8)] = inst_15722);

(statearr_15774[(12)] = inst_15740);

return statearr_15774;
})();
var statearr_15775_15805 = state_15762__$1;
(statearr_15775_15805[(2)] = null);

(statearr_15775_15805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (9))){
var inst_15722 = (state_15762[(8)]);
var inst_15738 = cljs.core.vec.call(null,inst_15722);
var state_15762__$1 = state_15762;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15762__$1,(11),out,inst_15738);
} else {
if((state_val_15763 === (5))){
var inst_15723 = (state_15762[(7)]);
var inst_15726 = (state_15762[(9)]);
var inst_15730 = (state_15762[(10)]);
var inst_15730__$1 = f.call(null,inst_15726);
var inst_15731 = cljs.core._EQ_.call(null,inst_15730__$1,inst_15723);
var inst_15732 = cljs.core.keyword_identical_QMARK_.call(null,inst_15723,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15733 = (inst_15731) || (inst_15732);
var state_15762__$1 = (function (){var statearr_15776 = state_15762;
(statearr_15776[(10)] = inst_15730__$1);

return statearr_15776;
})();
if(cljs.core.truth_(inst_15733)){
var statearr_15777_15806 = state_15762__$1;
(statearr_15777_15806[(1)] = (8));

} else {
var statearr_15778_15807 = state_15762__$1;
(statearr_15778_15807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (14))){
var inst_15755 = (state_15762[(2)]);
var inst_15756 = cljs.core.async.close_BANG_.call(null,out);
var state_15762__$1 = (function (){var statearr_15780 = state_15762;
(statearr_15780[(13)] = inst_15755);

return statearr_15780;
})();
var statearr_15781_15808 = state_15762__$1;
(statearr_15781_15808[(2)] = inst_15756);

(statearr_15781_15808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (10))){
var inst_15745 = (state_15762[(2)]);
var state_15762__$1 = state_15762;
var statearr_15782_15809 = state_15762__$1;
(statearr_15782_15809[(2)] = inst_15745);

(statearr_15782_15809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15763 === (8))){
var inst_15722 = (state_15762[(8)]);
var inst_15726 = (state_15762[(9)]);
var inst_15730 = (state_15762[(10)]);
var inst_15735 = inst_15722.push(inst_15726);
var tmp15779 = inst_15722;
var inst_15722__$1 = tmp15779;
var inst_15723 = inst_15730;
var state_15762__$1 = (function (){var statearr_15783 = state_15762;
(statearr_15783[(7)] = inst_15723);

(statearr_15783[(8)] = inst_15722__$1);

(statearr_15783[(14)] = inst_15735);

return statearr_15783;
})();
var statearr_15784_15810 = state_15762__$1;
(statearr_15784_15810[(2)] = null);

(statearr_15784_15810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7509__auto___15796,out))
;
return ((function (switch__7444__auto__,c__7509__auto___15796,out){
return (function() {
var cljs$core$async$state_machine__7445__auto__ = null;
var cljs$core$async$state_machine__7445__auto____0 = (function (){
var statearr_15788 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15788[(0)] = cljs$core$async$state_machine__7445__auto__);

(statearr_15788[(1)] = (1));

return statearr_15788;
});
var cljs$core$async$state_machine__7445__auto____1 = (function (state_15762){
while(true){
var ret_value__7446__auto__ = (function (){try{while(true){
var result__7447__auto__ = switch__7444__auto__.call(null,state_15762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7447__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7447__auto__;
}
break;
}
}catch (e15789){if((e15789 instanceof Object)){
var ex__7448__auto__ = e15789;
var statearr_15790_15811 = state_15762;
(statearr_15790_15811[(5)] = ex__7448__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7446__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15812 = state_15762;
state_15762 = G__15812;
continue;
} else {
return ret_value__7446__auto__;
}
break;
}
});
cljs$core$async$state_machine__7445__auto__ = function(state_15762){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7445__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7445__auto____1.call(this,state_15762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7445__auto____0;
cljs$core$async$state_machine__7445__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7445__auto____1;
return cljs$core$async$state_machine__7445__auto__;
})()
;})(switch__7444__auto__,c__7509__auto___15796,out))
})();
var state__7511__auto__ = (function (){var statearr_15791 = f__7510__auto__.call(null);
(statearr_15791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7509__auto___15796);

return statearr_15791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7511__auto__);
});})(c__7509__auto___15796,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map