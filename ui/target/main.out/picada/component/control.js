// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.component.control');
goog.require('cljs.core');
goog.require('picada.component.dialog');
goog.require('picada.color');
goog.require('picada.style');
goog.require('lucuma.core');
picada.component.control.line_height = "29px";
picada.component.control.styles = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-input","pica-input",-687333962),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"border-width","border-width",-1512605390),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border-color","border-color",-2059162761)],[picada.component.control.line_height,"none","18px","100%","none","0 0 1px","2px 2px 1px","none","#999"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"line-height","line-height",1870784992),picada.component.control.line_height,new cljs.core.Keyword(null,"color","color",1011675173),[cljs.core.str("var(--pica-input-disabled-label-color, "),cljs.core.str(cljs.core.get_in.call(null,picada.color.text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"--disabled-text-color","--disabled-text-color",2035055601)], null))),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:focus + label",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.25s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.floating","label.floating",782192247),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"var(--pica-input-valid-label-color, var(--pica-input-valid-color, var(--primary-color)))",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"top","top",-1856271961),"-12px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".underline",".underline",-1923664731),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"height","height",1025178622),"2px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"1px",new cljs.core.Keyword(null,"transform-origin","transform-origin",-586167370),"center center",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale3d(0,1,1)",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"var(--pica-input-underline-color, var(:--disabled-text-color))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:not(.validating):valid ~ div.underline",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.25s"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:not(.validating):valid:focus ~ div.underline",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"var(--pica-input-valid-underline-color, var(--pica-input-valid-color, var(--primary-color)))",new cljs.core.Keyword(null,"transform","transform",1381301764),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:not(.validating):invalid ~ div.underline",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"var(--pica-input-invalid-underline-color, var(--pica-input-invalid-color, var(--error-color)))",new cljs.core.Keyword(null,"transform","transform",1381301764),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error",".error",115475668),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912)],["ellipsis","var(--pica-input-error-color, var(--error-color))","nowrap","14px","4px","left","hidden","100%","relative"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".error:empty",".error:empty",770167797),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-checkbox","pica-checkbox",1002168027),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"height","height",1025178622),"18px"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"text-bottom",new cljs.core.Keyword(null,"width","width",-384071477),"18px",new cljs.core.Keyword(null,"height","height",1025178622),"18px",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 8px 0 0"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["border-box","all .2s","''","white","100%","block","2px solid","2px","100%"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:checked","&:checked",-93007205),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"var(--pica-checkbox-color, var(--accent-color))",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"var(--pica-checkbox-color, var(--accent-color))",new cljs.core.Keyword(null,"transition","transition",765692007),"all .2s"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["border-box","rotate(45deg)","3px","''","5px","absolute","2px solid white","10px","7px"]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pica-switch","pica-switch",1493628529),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"width","width",-384071477),"35px",new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"height","height",1025178622),"15px",new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pointer","pointer",85071187),"cursor"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),new cljs.core.Keyword(null,"height","height",1025178622)],["grey","35px","none","inline-block","relative","8px","15px","none","15px"]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"will-change","will-change",-152752061),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["transform","none","all .08s","-3px","''","white","20px","none","block","absolute","50%","20px",(0)]),picada.style.shadows.call(null,(1))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:checked + span",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"color(var(--pica-switch-color, var(--accent-color)) alpha(-50%))"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["input:checked + span div",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"var(--pica-switch-color, var(--accent-color))",new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(20px)"], null)], null)], null)], null);
picada.component.control.add_class = (function picada$component$control$add_class(el,s){
return el.classList.add(s);
});
picada.component.control.remove_class = (function picada$component$control$remove_class(el,s){
return el.classList.remove(s);
});
picada.component.control.valid_QMARK_ = (function picada$component$control$valid_QMARK_(iel){
return iel.validity.valid;
});
picada.component.control.adjust_error_message_BANG_ = (function picada$component$control$adjust_error_message_BANG_(iel,eel){
return eel.textContent = iel.validationMessage;
});
picada.component.control.validating_class = "validating";
picada.component.control.on_delayed_result = (function picada$component$control$on_delayed_result(iel,v,submitter,validating_QMARK_,o){
var fel = iel.closest("form");
var cbel = picada.component.dialog.button_confirm.call(null,fel);
if(typeof o === 'string'){
iel.setCustomValidity(o);
} else {
iel.setCustomValidity("");

if(cljs.core.truth_((function (){var and__5044__auto__ = submitter;
if(cljs.core.truth_(and__5044__auto__)){
return cljs.core.not.call(null,cbel);
} else {
return and__5044__auto__;
}
})())){
submitter.call(null,iel,v);
} else {
}
}

if(cljs.core.truth_(validating_QMARK_)){
picada.component.control.adjust_error_message_BANG_.call(null,iel,iel.parentElement.querySelector("div.error"));

picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,cbel);

return picada.component.control.remove_class.call(null,iel,picada.component.control.validating_class);
} else {
return null;
}
});

/**
 * @interface
 */
picada.component.control.IResetableTimer = function(){};

picada.component.control.reset = (function picada$component$control$reset(var_args){
var args12889 = [];
var len__6114__auto___12892 = arguments.length;
var i__6115__auto___12893 = (0);
while(true){
if((i__6115__auto___12893 < len__6114__auto___12892)){
args12889.push((arguments[i__6115__auto___12893]));

var G__12894 = (i__6115__auto___12893 + (1));
i__6115__auto___12893 = G__12894;
continue;
} else {
}
break;
}

var G__12891 = args12889.length;
switch (G__12891) {
case 1:
return picada.component.control.reset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return picada.component.control.reset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12889.length)].join('')));

}
});

picada.component.control.reset.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.picada$component$control$IResetableTimer$reset$arity$1 == null)))){
return this$.picada$component$control$IResetableTimer$reset$arity$1(this$);
} else {
var x__5711__auto__ = (((this$ == null))?null:this$);
var m__5712__auto__ = (picada.component.control.reset[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,this$);
} else {
var m__5712__auto____$1 = (picada.component.control.reset["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IResetableTimer.reset",this$);
}
}
}
});

picada.component.control.reset.cljs$core$IFn$_invoke$arity$2 = (function (this$,o){
if((!((this$ == null))) && (!((this$.picada$component$control$IResetableTimer$reset$arity$2 == null)))){
return this$.picada$component$control$IResetableTimer$reset$arity$2(this$,o);
} else {
var x__5711__auto__ = (((this$ == null))?null:this$);
var m__5712__auto__ = (picada.component.control.reset[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,this$,o);
} else {
var m__5712__auto____$1 = (picada.component.control.reset["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,this$,o);
} else {
throw cljs.core.missing_protocol.call(null,"IResetableTimer.reset",this$);
}
}
}
});

picada.component.control.reset.cljs$lang$maxFixedArity = 2;

picada.component.control.cancel = (function picada$component$control$cancel(this$){
if((!((this$ == null))) && (!((this$.picada$component$control$IResetableTimer$cancel$arity$1 == null)))){
return this$.picada$component$control$IResetableTimer$cancel$arity$1(this$);
} else {
var x__5711__auto__ = (((this$ == null))?null:this$);
var m__5712__auto__ = (picada.component.control.cancel[goog.typeOf(x__5711__auto__)]);
if(!((m__5712__auto__ == null))){
return m__5712__auto__.call(null,this$);
} else {
var m__5712__auto____$1 = (picada.component.control.cancel["_"]);
if(!((m__5712__auto____$1 == null))){
return m__5712__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IResetableTimer.cancel",this$);
}
}
}
});

picada.component.control.create_timer = (function picada$component$control$create_timer(f,i){
var aid = cljs.core.atom.call(null,null);
if(typeof picada.component.control.t_picada$component$control12899 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {picada.component.control.IResetableTimer}
 * @implements {cljs.core.IWithMeta}
*/
picada.component.control.t_picada$component$control12899 = (function (create_timer,f,i,aid,meta12900){
this.create_timer = create_timer;
this.f = f;
this.i = i;
this.aid = aid;
this.meta12900 = meta12900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
picada.component.control.t_picada$component$control12899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (aid){
return (function (_12901,meta12900__$1){
var self__ = this;
var _12901__$1 = this;
return (new picada.component.control.t_picada$component$control12899(self__.create_timer,self__.f,self__.i,self__.aid,meta12900__$1));
});})(aid))
;

picada.component.control.t_picada$component$control12899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (aid){
return (function (_12901){
var self__ = this;
var _12901__$1 = this;
return self__.meta12900;
});})(aid))
;

picada.component.control.t_picada$component$control12899.prototype.picada$component$control$IResetableTimer$ = true;

picada.component.control.t_picada$component$control12899.prototype.picada$component$control$IResetableTimer$reset$arity$1 = ((function (aid){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return picada.component.control.reset.call(null,this$__$1,null);
});})(aid))
;

picada.component.control.t_picada$component$control12899.prototype.picada$component$control$IResetableTimer$reset$arity$2 = ((function (aid){
return (function (this$,o){
var self__ = this;
var this$__$1 = this;
picada.component.control.cancel.call(null,this$__$1);

return cljs.core.reset_BANG_.call(null,self__.aid,setTimeout((cljs.core.truth_(o)?((function (this$__$1,aid){
return (function (){
return self__.f.call(null,o);
});})(this$__$1,aid))
:self__.f),self__.i));
});})(aid))
;

picada.component.control.t_picada$component$control12899.prototype.picada$component$control$IResetableTimer$cancel$arity$1 = ((function (aid){
return (function (_){
var self__ = this;
var ___$1 = this;
var temp__4423__auto__ = cljs.core.deref.call(null,self__.aid);
if(cljs.core.truth_(temp__4423__auto__)){
var id = temp__4423__auto__;
return clearTimeout(id);
} else {
return null;
}
});})(aid))
;

picada.component.control.t_picada$component$control12899.getBasis = ((function (aid){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-timer","create-timer",1328138211,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"aid","aid",-1162436256,null),new cljs.core.Symbol(null,"meta12900","meta12900",917968256,null)], null);
});})(aid))
;

picada.component.control.t_picada$component$control12899.cljs$lang$type = true;

picada.component.control.t_picada$component$control12899.cljs$lang$ctorStr = "picada.component.control/t_picada$component$control12899";

picada.component.control.t_picada$component$control12899.cljs$lang$ctorPrWriter = ((function (aid){
return (function (this__5654__auto__,writer__5655__auto__,opt__5656__auto__){
return cljs.core._write.call(null,writer__5655__auto__,"picada.component.control/t_picada$component$control12899");
});})(aid))
;

picada.component.control.__GT_t_picada$component$control12899 = ((function (aid){
return (function picada$component$control$create_timer_$___GT_t_picada$component$control12899(create_timer__$1,f__$1,i__$1,aid__$1,meta12900){
return (new picada.component.control.t_picada$component$control12899(create_timer__$1,f__$1,i__$1,aid__$1,meta12900));
});})(aid))
;

}

return (new picada.component.control.t_picada$component$control12899(picada$component$control$create_timer,f,i,aid,cljs.core.PersistentArrayMap.EMPTY));
});
picada.component.control.input_listener = (function picada$component$control$input_listener(t,validating_QMARK_){
return (function (evt){
var iel = evt.target;
var fel = iel.closest("form");
var cbel = picada.component.dialog.button_confirm.call(null,fel);
iel.setCustomValidity("");

if(cljs.core.truth_(picada.component.control.valid_QMARK_.call(null,iel))){
if(cljs.core.truth_(validating_QMARK_)){
picada.component.control.add_class.call(null,iel,picada.component.control.validating_class);

picada.component.control.adjust_error_message_BANG_.call(null,iel,iel.parentElement.querySelector("div.error"));

picada.component.dialog.adjust_button_validity_BANG_.call(null,fel,cbel,false);
} else {
}

return picada.component.control.reset.call(null,t,evt);
} else {
return null;
}
});
});
picada.component.control.delayed_listener = (function picada$component$control$delayed_listener(el,fom,submitter){
var f = (function (){var or__5056__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(fom);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return fom;
}
})();
var rf = (function (){var or__5056__auto__ = f;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return ((function (or__5056__auto__,f){
return (function (p1__12903_SHARP_,p2__12902_SHARP_){
return p2__12902_SHARP_.call(null);
});
;})(or__5056__auto__,f))
}
})();
var d = (function (){var or__5056__auto__ = new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(fom);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return (500);
}
})();
var iel = el.querySelector("input");
var validating_QMARK_ = !((f == null));
var t = picada.component.control.create_timer.call(null,((function (f,rf,d,iel,validating_QMARK_){
return (function (p1__12904_SHARP_){
var v = iel.value;
return rf.call(null,p1__12904_SHARP_,((function (v,f,rf,d,iel,validating_QMARK_){
return (function (o){
return picada.component.control.on_delayed_result.call(null,iel,v,submitter,validating_QMARK_,o);
});})(v,f,rf,d,iel,validating_QMARK_))
,v);
});})(f,rf,d,iel,validating_QMARK_))
,d);
return picada.component.control.input_listener.call(null,t,validating_QMARK_);
});
picada.component.control.pica_input = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),"",new cljs.core.Keyword(null,"override?","override?",1253315658),true], null),new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"input-attributes","input-attributes",390808544),null,new cljs.core.Keyword(null,"validator","validator",-1966190681),null,new cljs.core.Keyword(null,"submitter","submitter",1128520667),null,new cljs.core.Keyword(null,"label","label",1718410804),"",new cljs.core.Keyword(null,"error-mapping","error-mapping",1437929940),null], null),new cljs.core.Keyword(null,"on-attached","on-attached",-801242869),(function (el){
var iel = el.querySelector("input");
var lel = el.querySelector("label");
var eel = el.querySelector("div.error");
picada.component.control.adjust_error_message_BANG_.call(null,iel,eel);

iel.addEventListener("input",((function (iel,lel,eel){
return (function (){
return picada.component.control.adjust_error_message_BANG_.call(null,iel,eel);
});})(iel,lel,eel))
);

if(!(cljs.core.empty_QMARK_.call(null,iel.value))){
picada.component.control.add_class.call(null,lel,"floating");
} else {
}

iel.addEventListener("change",((function (iel,lel,eel){
return (function (){
if(!(cljs.core.empty_QMARK_.call(null,iel.value))){
return picada.component.control.add_class.call(null,lel,"floating");
} else {
return null;
}
});})(iel,lel,eel))
);

iel.addEventListener("focus",((function (iel,lel,eel){
return (function (){
return picada.component.control.add_class.call(null,lel,"floating");
});})(iel,lel,eel))
);

return iel.addEventListener("blur",((function (iel,lel,eel){
return (function (p1__12905_SHARP_){
if(!(cljs.core.empty_QMARK_.call(null,p1__12905_SHARP_.target.value))){
return picada.component.control.add_class.call(null,lel,"floating");
} else {
return picada.component.control.remove_class.call(null,lel,"floating");
}
});})(iel,lel,eel))
);
}),new cljs.core.Keyword(null,"style","style",-496642736),picada.component.control.styles,new cljs.core.Keyword(null,"material-ref","material-ref",801841968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-field","text-field",1955422445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://www.google.com/design/spec/components/text-fields.html","http://www.google.com/design/spec/patterns/errors.html"], null)], null),new cljs.core.Keyword(null,"document","document",-1329188687),(function (el,p__12908){
var map__12909 = p__12908;
var map__12909__$1 = ((((!((map__12909 == null)))?((((map__12909.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12909.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12909):map__12909);
var id = cljs.core.get.call(null,map__12909__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var validator = cljs.core.get.call(null,map__12909__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
var submitter = cljs.core.get.call(null,map__12909__$1,new cljs.core.Keyword(null,"submitter","submitter",1128520667));
var label = cljs.core.get.call(null,map__12909__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var value = cljs.core.get.call(null,map__12909__$1,new cljs.core.Keyword(null,"value","value",305978217));
var input_attributes = cljs.core.get.call(null,map__12909__$1,new cljs.core.Keyword(null,"input-attributes","input-attributes",390808544));
var by = ((!(cljs.core.empty_QMARK_.call(null,id)))?picada.component.dialog.id__GT_input_id.call(null,id):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,(cljs.core.truth_(id)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),by], null):null),(cljs.core.truth_((function (){var or__5056__auto__ = validator;
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return submitter;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-input","on-input",-267523366),picada.component.control.delayed_listener.call(null,el,validator,submitter)], null):null),(cljs.core.truth_(value)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null):null),input_attributes)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.merge.call(null,(cljs.core.truth_(by)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),by], null):null)),label], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.underline","div.underline",-1381980036)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.error","div.error",314336058)], null)], null);
}),new cljs.core.Keyword(null,"on-property-changed","on-property-changed",-1431388232),(function (p1__12907_SHARP_,p2__12906_SHARP_){
var m = lucuma.core.changes__GT_map.call(null,p2__12906_SHARP_);
var attrs = new cljs.core.Keyword(null,"input-attributes","input-attributes",390808544).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(attrs)){
window.requestAnimationFrame(((function (m,attrs){
return (function (){
return picada.component.control.adjust_error_message_BANG_.call(null,p1__12907_SHARP_.querySelector("input"),p1__12907_SHARP_.querySelector("div.error"));
});})(m,attrs))
);
} else {
}

if((cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"value","value",305978217))) || (cljs.core.contains_QMARK_.call(null,attrs,new cljs.core.Keyword(null,"value","value",305978217)))){
if(cljs.core.truth_((function (){var or__5056__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5056__auto__)){
return or__5056__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(attrs);
}
})())){
return picada.component.control.add_class.call(null,p1__12907_SHARP_.querySelector("label"),"floating");
} else {
return picada.component.control.remove_class.call(null,p1__12907_SHARP_.querySelector("label"),"floating");
}
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"pica-input",new cljs.core.Keyword(null,"ns","ns",441598760),"picada.component.control"], null)));
goog.exportSymbol('picada.component.control.pica_input', picada.component.control.pica_input);
picada.component.control.pica_checkbox = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),false,new cljs.core.Keyword(null,"label","label",1718410804),""], null),new cljs.core.Keyword(null,"style","style",-496642736),picada.component.control.styles,new cljs.core.Keyword(null,"material-ref","material-ref",801841968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox"], null)], null),new cljs.core.Keyword(null,"document","document",-1329188687),(function (_,p__12911){
var map__12912 = p__12911;
var map__12912__$1 = ((((!((map__12912 == null)))?((((map__12912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12912):map__12912);
var checked = cljs.core.get.call(null,map__12912__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var label = cljs.core.get.call(null,map__12912__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked], null)], null),label], null)], null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"pica-checkbox",new cljs.core.Keyword(null,"ns","ns",441598760),"picada.component.control"], null)));
goog.exportSymbol('picada.component.control.pica_checkbox', picada.component.control.pica_checkbox);
picada.component.control.pica_switch = lucuma.core.merge_mixins.call(null,cljs.core.merge.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),false,new cljs.core.Keyword(null,"label","label",1718410804),""], null),new cljs.core.Keyword(null,"style","style",-496642736),picada.component.control.styles,new cljs.core.Keyword(null,"material-ref","material-ref",801841968),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"switch","switch",71881310),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://www.google.com/design/spec/components/selection-controls.html#selection-controls-switch"], null)], null),new cljs.core.Keyword(null,"document","document",-1329188687),(function (_,p__12914){
var map__12915 = p__12914;
var map__12915__$1 = ((((!((map__12915 == null)))?((((map__12915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12915):map__12915);
var checked = cljs.core.get.call(null,map__12915__$1,new cljs.core.Keyword(null,"checked","checked",-50955819));
var label = cljs.core.get.call(null,map__12915__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)], null),label], null)], null);
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mixins","mixins",-571863273)], null),cljs.core.conj,picada.component.component),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"pica-switch",new cljs.core.Keyword(null,"ns","ns",441598760),"picada.component.control"], null)));
goog.exportSymbol('picada.component.control.pica_switch', picada.component.control.pica_switch);

//# sourceMappingURL=control.js.map