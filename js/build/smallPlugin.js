!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.CKEditor5=e():(t.CKEditor5=t.CKEditor5||{},t.CKEditor5.smallPlugin=e())}(self,(()=>(()=>{var t={"ckeditor5/src/core.js":(t,e,s)=>{t.exports=s("dll-reference CKEditor5.dll")("./src/core.js")},"ckeditor5/src/ui.js":(t,e,s)=>{t.exports=s("dll-reference CKEditor5.dll")("./src/ui.js")},"dll-reference CKEditor5.dll":t=>{"use strict";t.exports=CKEditor5.dll}},e={};function s(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,s),o.exports}s.d=(t,e)=>{for(var r in e)s.o(e,r)&&!s.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var r={};return(()=>{"use strict";s.d(r,{default:()=>u});var t=s("ckeditor5/src/core.js");class e extends t.Command{value;attributeKey;constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,s=e.document.selection,r=void 0===t.forceValue?!this.value:t.forceValue;e.change((t=>{if(s.isCollapsed)r?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const i=e.schema.getValidRanges(s.getRanges(),this.attributeKey);for(const e of i)r?t.setAttribute(this.attributeKey,r,e):t.removeAttribute(this.attributeKey,e)}}))}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,s=t.document.selection;if(s.isCollapsed)return s.hasAttribute(this.attributeKey);for(const t of s.getRanges())for(const s of t.getItems())if(e.checkAttribute(s,this.attributeKey))return s.hasAttribute(this.attributeKey);return!1}}const i="small";class o extends t.Plugin{static get pluginName(){return"SmallEditing"}init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:i}),t.model.schema.setAttributeProperties(i,{isFormatting:!0,copyOnEnter:!0}),t.conversion.attributeToElement({model:i,view:"small",upcastAlso:[t=>{const e=t.getStyle("font-size");return e&&("small"==e||"smaller"==e)?{name:!0,styles:["font-size"]}:null}]}),t.commands.add(i,new e(t,i))}}var l=s("ckeditor5/src/ui.js");const n="small";class a extends t.Plugin{static get pluginName(){return"SmallUI"}init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(n,(s=>{const r=t.commands.get(n),i=new l.ButtonView(s);return i.set({label:e("Small"),icon:'<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n<path d="M0.83493 16H3.21077L4.12664 13.6242H9.99369L10.9005 16H13.2763L8.41584 3.61301H5.70449L0.83493 16ZM4.7342 11.7108L7.05563 5.45383L9.37706 11.7108H4.7342Z" fill="black"/>\r\n<path d="M16.1804 12.4545L19.592 6.54545L12.7688 6.54545L16.1804 12.4545ZM15.5895 3L15.5895 7.13636L16.7713 7.13636L16.7713 3L15.5895 3Z" fill="black"/>\r\n</svg>\r\n',tooltip:!0,isToggleable:!0}),i.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(i,"execute",(()=>{t.execute(n),t.editing.view.focus()})),i}))}}class c extends t.Plugin{static get requires(){return[o,a]}static get pluginName(){return"Small"}}const u={Small:c}})(),r=r.default})()));