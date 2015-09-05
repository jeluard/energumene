// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.aria');
goog.require('cljs.core');
picada.aria.labelled_by = "aria-labelledby";
picada.aria.described_by = "aria-describedby";
picada.aria.set_labelled_by_BANG_ = (function picada$aria$set_labelled_by_BANG_(el,lel,id){
if(cljs.core.truth_(lel)){
el.setAttribute(picada.aria.labelled_by,id);

return lel.id = id;
} else {
return el.removeAttribute(picada.aria.labelled_by);
}
});
picada.aria.set_described_by_BANG_ = (function picada$aria$set_described_by_BANG_(el,lel,id){
if(cljs.core.truth_(lel)){
el.setAttribute(picada.aria.described_by,id);

return lel.id = id;
} else {
return el.removeAttribute(picada.aria.described_by);
}
});

//# sourceMappingURL=aria.js.map