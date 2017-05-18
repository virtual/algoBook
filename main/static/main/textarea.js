// https://github.com/UziTech/jquery.toTextarea.js/blob/master/jquery.toTextarea.min.js
(function(b,k,f,m){var q=function(b,d){var a=null;if(f.body.createTextRange!==m)a=f.body.createTextRange(),a.moveToPoint(b,d),a.select(),a=k.getSelection().getRangeAt(0);else if(f.createRange!==m)if(f.caretPositionFromPoint){var h=f.caretPositionFromPoint(b,d),a=f.createRange();a.setStart(h.offsetNode,h.offset);a.collapse(!0)}else f.caretRangeFromPoint&&(a=f.caretRangeFromPoint(b,d));return a},r=function(b){for(var d=b.length-1;0<=d;d--)if(0<b[d].childNodes.length){var a=r(b[d].childNodes);if(null!==
a)return a}else if(""!==b[d].data)return b[d];return null},p=function(e,d,a){var h=k.getSelection(),n=e.substring(e.length-1),g=b(this).text(),t=f.createTextNode("\n"),l=null,c=null;""!==g&&(l=g.substring(g.length-1),c=r(this.childNodes));n="\n"===n&&"\n"!==l&&(null===l||h.anchorNode===c&&h.anchorOffset===c.length||h.focusNode===c&&h.focusOffset===c.length);e=f.createTextNode(e);g=null;g=d!==m&&a!==m?q(d,a):h.getRangeAt(0);g.deleteContents();n&&g.insertNode(t);g.insertNode(e);g=f.createRange();g.setStartAfter(e);
g.collapse(!0);h.removeAllRanges();h.addRange(g);this.normalize()},u=function(e,d,a){var h=b(this),f=new FileReader;f.onload=function(b){var e=new Image;e.onload=function(){var b=k.getSelection(),c=q(d,a);null!==c?(c.insertNode(this),c.collapse(!1),b.removeAllRanges(),b.addRange(c)):h.is(":focus")?(c=b.getRangeAt(0),c.collapse(!1),c.insertNode(this),c.collapse(!1),b.removeAllRanges(),b.addRange(c)):h.append(this)};e.onerror=function(){alert("Not an image")};e.src=b.target.result};f.readAsDataURL(e)};
b.fn.toTextarea=function(e){if("destroy"===e||!0===e)return this.each(function(){var a=b(this);a.data().isTextarea&&(this.id&&b("label[for='"+this.id+"']").off(".toTextarea"),a.prop({contentEditable:!1}).off(".toTextarea").data({isTextarea:!1}).removeClass("toTextarea-disabled toTextarea-placeholder toTextarea"))});if("disable"===e)return this.each(function(){var a=b(this);a.data().isTextarea&&!a.data().disabled&&(this.id&&b("label[for='"+this.id+"']").off(".toTextarea"),a.prop({contentEditable:!1}).data({disabled:!0}).addClass("toTextarea-disabled"))});
if("enable"===e)return this.each(function(){var a=b(this);if(a.data().isTextarea&&a.data().disabled){if(this.id)b("label[for='"+this.id+"']").on("click.toTextarea",function(){a.focus()});a.prop({contentEditable:!0}).data({disabled:!1}).removeClass("toTextarea-disabled")}});var d={allowHTML:!1,allowImg:!1,singleLine:!1,pastePlainText:!0,placeholder:!1};b.isPlainObject(e)&&b.extend(d,e);return this.each(function(){var a=b(this);if(!a.data().isTextarea){if(this.id)b("label[for='"+this.id+"']").on("click.toTextarea",
function(){a.focus()});var e=d.allowHTML;"function"===typeof d.allowHTML&&(e=d.allowHTML.call(this));var n=d.allowImg;"function"===typeof d.allowImg&&(n=d.allowImg.call(this));var g=d.singleLine;"function"===typeof d.singleLine&&(g=d.singleLine.call(this));var m=d.pastePlainText;"function"===typeof d.pastePlainText&&(m=d.pastePlainText.call(this));var l=d.placeholder;"function"===typeof d.placeholder&&(l=d.placeholder.call(this));l||(l=a.attr("placeholder")||a.data().placeholder);a.addClass("toTextarea").prop({contentEditable:!0}).data({isTextarea:!0,
disabled:!1}).on("select.toTextarea",function(){if(!b(this).data().disabled)if(f.body.createTextRange){var c=f.body.createTextRange();c.moveToElementText(this);c.select()}else if(k.getSelection){var a=k.getSelection(),c=f.createRange();c.selectNodeContents(this);a.removeAllRanges();a.addRange(c)}}).on("keypress.toTextarea keyup.toTextarea",function(){b(this).trigger("input")});l&&a.attr({"data-placeholder":l}).addClass("toTextarea-placeholder");if(g)a.addClass("toTextarea-singleLine").on("keypress.toTextarea",
function(c){if(!b(this).data().disabled&&13===c.which)return c.preventDefault(),!1}),a.on("paste.toTextarea",function(c){if(!b(this).data().disabled){var a=null;if(k.clipboardData)a=k.clipboardData.getData("Text");else if(c.originalEvent.clipboardData)a=c.originalEvent.clipboardData.getData("text/plain");else return!0;a=a.replace(/[\n]/g," ");p.call(this,a);c.preventDefault();b(this).trigger("input");return!1}}).on("drop.toTextarea",function(c){if(!b(this).data().disabled){var a=null,a=c.originalEvent.dataTransfer.getData("text"),
a=a.replace(/[\n]/g," ");p.call(this,a,c.originalEvent.clientX,c.originalEvent.clientY);c.preventDefault();b(this).trigger("input");return!1}});else if(a.on("keypress.toTextarea",function(c){if(!b(this).data().disabled&&13===c.which)return p.call(this,"\n"),c.preventDefault(),!1}),!e||m)a.on("paste.toTextarea",function(c){if(!b(this).data().disabled){var a=null;if(k.clipboardData)a=k.clipboardData.getData("Text");else if(c.originalEvent.clipboardData)a=c.originalEvent.clipboardData.getData("text/plain");
else return!0;p.call(this,a);c.preventDefault();b(this).trigger("input");return!1}}).on("drop.toTextarea",function(c){if(!b(this).data().disabled){var a=null,a=c.originalEvent.dataTransfer.getData("text");p.call(this,a,c.originalEvent.clientX,c.originalEvent.clientY);c.preventDefault();b(this).trigger("input");return!1}});if(n)a.on("drop.toTextarea",function(a){if(!b(this).data().disabled&&0<a.originalEvent.dataTransfer.files.length){for(var d=0,e=a.originalEvent.dataTransfer.files.length;d<e;d++)u.call(this,
a.originalEvent.dataTransfer.files[d],a.originalEvent.clientX,a.originalEvent.clientY);a.preventDefault();b(this).trigger("input");return!1}}).on("dragover.toTextarea",function(a){if(!b(this).data().disabled&&0<a.originalEvent.dataTransfer.types.length&&"Files"===a.originalEvent.dataTransfer.types[0])return a.preventDefault(),!1});if(!e)a.on("keydown.toTextarea",function(a){if(!b(this).data().disabled&&a.ctrlKey&&(66===a.which||73===a.which||75===a.which||85===a.which))return a.preventDefault(),!1})}})};
b(function(){var e=b("<style class='toTextarea-stylesheet'> .toTextarea { text-align: left; border: 1px solid #aaa; white-space: pre-wrap; word-wrap: break-word; padding: 1px; } .toTextarea-singleLine { white-space: pre; } .toTextarea-disabled { background-color: #eee; color: #555; } .toTextarea-placeholder:empty:after { color: #555; font-style: italic; cursor: text; content: attr(data-placeholder); }</style>"),d=b("head link[rel='stylesheet'], head style");0<d.length?d.eq(0).before(e):b("head").append(e)})})(jQuery,
window,document);