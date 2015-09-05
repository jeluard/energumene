// Compiled by ClojureScript 1.7.107 {}
goog.provide('picada.bootstrap');
goog.require('cljs.core');
goog.require('picada.component.drawer');
goog.require('picada.component.icon');
goog.require('picada.component.item');
goog.require('picada.component.overlay');
goog.require('picada.component.dialog');
goog.require('picada.component.menu');
goog.require('lucuma.core');
goog.require('picada.component.button');
goog.require('picada.component.snackbar');
goog.require('picada.component.spinner');
goog.require('picada.component.toolbar');
goog.require('picada.component.control');
goog.require('picada.style');
picada.bootstrap.all_components = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [picada.component.button.pica_button,picada.component.button.pica_fab,picada.component.button.pica_icon_button,picada.component.control.pica_checkbox,picada.component.control.pica_input,picada.component.control.pica_switch,picada.component.dialog.pica_dialog,picada.component.drawer.pica_drawer,picada.component.icon.pica_icon,picada.component.item.pica_item,picada.component.menu.pica_menu,picada.component.overlay.pica_overlay,picada.component.snackbar.pica_snackbar,picada.component.spinner.pica_spinner,picada.component.toolbar.pica_toolbar], null);
picada.bootstrap.all_styles = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [picada.component.button.styles,picada.component.control.styles,picada.component.dialog.styles,picada.component.drawer.styles,picada.component.icon.styles,picada.component.item.styles,picada.component.menu.styles,picada.component.overlay.styles,picada.component.snackbar.styles,picada.component.spinner.styles,picada.component.toolbar.styles], null);
picada.bootstrap.all = (function picada$bootstrap$all(kp,ka){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@custom-selector :--pica-button pica-button, pica-fab, pica-icon-button;",cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":root",picada.style.create_theme.call(null,kp,ka)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"RobotoDraft, Arial"], null)], null),picada.bootstrap.all_styles], null);
});
picada.bootstrap.register_all = (function picada$bootstrap$register_all(){
return lucuma.core.register.call(null,picada.bootstrap.all_components);
});

//# sourceMappingURL=bootstrap.js.map