!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DragScroll=t()}(this,function(){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(){function n(e){var t=e.el;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),!t)return!1;this._window=window,this._document=document,this.mouseDown=!1,this.lastClientX=0,this.lastClientY=0,this.newScrollX=0,this.newScrollY=0,this.el=t,this.destroy(),this.init()}var e,t,i;return e=n,(t=[{key:"init",value:function(e,t,n,i,o,l){var s=this;this.el.addEventListener("mousedown",this.el.md=function(e){if(e.target.closest("[nodrag]"))return!1;s.el.hasAttribute("nochilddrag")&&s._document.elementFromPoint(e.pageX,e.pageY)!==s.el||(s.mouseDown=!0,s.lastClientX=e.clientX,s.lastClientY=e.clientY,e.preventDefault())}),this._window.addEventListener("mousemove",this.el.mm=function(e){s.mouseDown&&((l=s.el.scroller||s.el).scrollLeft-=s.newScrollX=-s.lastClientX+(s.lastClientX=e.clientX),l.scrollTop-=s.newScrollY=-s.lastClientY+(s.lastClientY=e.clientY))},0),this._window.addEventListener("mouseup",this.el.mu=function(){s.mouseDown=!1},0)}},{key:"destroy",value:function(){this.el.removeEventListener("mousedown",this.el.md,0),this._window.removeEventListener("mousemove",this.el.mm,0),this._window.removeEventListener("mouseup",this.el.mu,0)}}])&&o(e.prototype,t),i&&o(e,i),n}()});