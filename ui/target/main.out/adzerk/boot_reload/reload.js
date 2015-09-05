// Compiled by ClojureScript 1.7.107 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__11991_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__11991_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__11996 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__11997 = null;
var count__11998 = (0);
var i__11999 = (0);
while(true){
if((i__11999 < count__11998)){
var s = cljs.core._nth.call(null,chunk__11997,i__11999);
var temp__4425__auto___12000 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12000)){
var sheet_12001 = temp__4425__auto___12000;
var temp__4425__auto___12002__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12001.href,changed);
if(cljs.core.truth_(temp__4425__auto___12002__$1)){
var href_uri_12003 = temp__4425__auto___12002__$1;
sheet_12001.ownerNode.href = href_uri_12003.makeUnique().toString();
} else {
}
} else {
}

var G__12004 = seq__11996;
var G__12005 = chunk__11997;
var G__12006 = count__11998;
var G__12007 = (i__11999 + (1));
seq__11996 = G__12004;
chunk__11997 = G__12005;
count__11998 = G__12006;
i__11999 = G__12007;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11996);
if(temp__4425__auto__){
var seq__11996__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11996__$1)){
var c__5859__auto__ = cljs.core.chunk_first.call(null,seq__11996__$1);
var G__12008 = cljs.core.chunk_rest.call(null,seq__11996__$1);
var G__12009 = c__5859__auto__;
var G__12010 = cljs.core.count.call(null,c__5859__auto__);
var G__12011 = (0);
seq__11996 = G__12008;
chunk__11997 = G__12009;
count__11998 = G__12010;
i__11999 = G__12011;
continue;
} else {
var s = cljs.core.first.call(null,seq__11996__$1);
var temp__4425__auto___12012__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12012__$1)){
var sheet_12013 = temp__4425__auto___12012__$1;
var temp__4425__auto___12014__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12013.href,changed);
if(cljs.core.truth_(temp__4425__auto___12014__$2)){
var href_uri_12015 = temp__4425__auto___12014__$2;
sheet_12013.ownerNode.href = href_uri_12015.makeUnique().toString();
} else {
}
} else {
}

var G__12016 = cljs.core.next.call(null,seq__11996__$1);
var G__12017 = null;
var G__12018 = (0);
var G__12019 = (0);
seq__11996 = G__12016;
chunk__11997 = G__12017;
count__11998 = G__12018;
i__11999 = G__12019;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__12024 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__12025 = null;
var count__12026 = (0);
var i__12027 = (0);
while(true){
if((i__12027 < count__12026)){
var s = cljs.core._nth.call(null,chunk__12025,i__12027);
var temp__4425__auto___12028 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12028)){
var image_12029 = temp__4425__auto___12028;
var temp__4425__auto___12030__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12029.src,changed);
if(cljs.core.truth_(temp__4425__auto___12030__$1)){
var href_uri_12031 = temp__4425__auto___12030__$1;
image_12029.src = href_uri_12031.makeUnique().toString();
} else {
}
} else {
}

var G__12032 = seq__12024;
var G__12033 = chunk__12025;
var G__12034 = count__12026;
var G__12035 = (i__12027 + (1));
seq__12024 = G__12032;
chunk__12025 = G__12033;
count__12026 = G__12034;
i__12027 = G__12035;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12024);
if(temp__4425__auto__){
var seq__12024__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12024__$1)){
var c__5859__auto__ = cljs.core.chunk_first.call(null,seq__12024__$1);
var G__12036 = cljs.core.chunk_rest.call(null,seq__12024__$1);
var G__12037 = c__5859__auto__;
var G__12038 = cljs.core.count.call(null,c__5859__auto__);
var G__12039 = (0);
seq__12024 = G__12036;
chunk__12025 = G__12037;
count__12026 = G__12038;
i__12027 = G__12039;
continue;
} else {
var s = cljs.core.first.call(null,seq__12024__$1);
var temp__4425__auto___12040__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12040__$1)){
var image_12041 = temp__4425__auto___12040__$1;
var temp__4425__auto___12042__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12041.src,changed);
if(cljs.core.truth_(temp__4425__auto___12042__$2)){
var href_uri_12043 = temp__4425__auto___12042__$2;
image_12041.src = href_uri_12043.makeUnique().toString();
} else {
}
} else {
}

var G__12044 = cljs.core.next.call(null,seq__12024__$1);
var G__12045 = null;
var G__12046 = (0);
var G__12047 = (0);
seq__12024 = G__12044;
chunk__12025 = G__12045;
count__12026 = G__12046;
i__12027 = G__12047;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__12050){
var map__12053 = p__12050;
var map__12053__$1 = ((((!((map__12053 == null)))?((((map__12053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12053):map__12053);
var on_jsload = cljs.core.get.call(null,map__12053__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__12053,map__12053__$1,on_jsload){
return (function (p1__12048_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__12048_SHARP_,".js");
});})(map__12053,map__12053__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__12053,map__12053__$1,on_jsload){
return (function (p1__12049_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__12049_SHARP_).makeUnique());
});})(js_files,map__12053,map__12053__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__12053,map__12053__$1,on_jsload){
return (function() { 
var G__12055__delegate = function (_){
return on_jsload.call(null);
};
var G__12055 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12056__i = 0, G__12056__a = new Array(arguments.length -  0);
while (G__12056__i < G__12056__a.length) {G__12056__a[G__12056__i] = arguments[G__12056__i + 0]; ++G__12056__i;}
  _ = new cljs.core.IndexedSeq(G__12056__a,0);
} 
return G__12055__delegate.call(this,_);};
G__12055.cljs$lang$maxFixedArity = 0;
G__12055.cljs$lang$applyTo = (function (arglist__12057){
var _ = cljs.core.seq(arglist__12057);
return G__12055__delegate(_);
});
G__12055.cljs$core$IFn$_invoke$arity$variadic = G__12055__delegate;
return G__12055;
})()
;})(js_files,map__12053,map__12053__$1,on_jsload))
,((function (js_files,map__12053,map__12053__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__12053,map__12053__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__12062_12066 = cljs.core.seq.call(null,things_to_log);
var chunk__12063_12067 = null;
var count__12064_12068 = (0);
var i__12065_12069 = (0);
while(true){
if((i__12065_12069 < count__12064_12068)){
var t_12070 = cljs.core._nth.call(null,chunk__12063_12067,i__12065_12069);
console.log(t_12070);

var G__12071 = seq__12062_12066;
var G__12072 = chunk__12063_12067;
var G__12073 = count__12064_12068;
var G__12074 = (i__12065_12069 + (1));
seq__12062_12066 = G__12071;
chunk__12063_12067 = G__12072;
count__12064_12068 = G__12073;
i__12065_12069 = G__12074;
continue;
} else {
var temp__4425__auto___12075 = cljs.core.seq.call(null,seq__12062_12066);
if(temp__4425__auto___12075){
var seq__12062_12076__$1 = temp__4425__auto___12075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12062_12076__$1)){
var c__5859__auto___12077 = cljs.core.chunk_first.call(null,seq__12062_12076__$1);
var G__12078 = cljs.core.chunk_rest.call(null,seq__12062_12076__$1);
var G__12079 = c__5859__auto___12077;
var G__12080 = cljs.core.count.call(null,c__5859__auto___12077);
var G__12081 = (0);
seq__12062_12066 = G__12078;
chunk__12063_12067 = G__12079;
count__12064_12068 = G__12080;
i__12065_12069 = G__12081;
continue;
} else {
var t_12082 = cljs.core.first.call(null,seq__12062_12076__$1);
console.log(t_12082);

var G__12083 = cljs.core.next.call(null,seq__12062_12076__$1);
var G__12084 = null;
var G__12085 = (0);
var G__12086 = (0);
seq__12062_12066 = G__12083;
chunk__12063_12067 = G__12084;
count__12064_12068 = G__12085;
i__12065_12069 = G__12086;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(opts,changed){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__12088 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__12088,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__12088);

adzerk.boot_reload.reload.reload_css.call(null,G__12088);

adzerk.boot_reload.reload.reload_img.call(null,G__12088);

return G__12088;
});

//# sourceMappingURL=reload.js.map