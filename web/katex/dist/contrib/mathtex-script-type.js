!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("katex"));else if("function"==typeof define&&define.amd)define(["katex"],t);else{var r="object"==typeof exports?t(require("katex")):t(e.katex);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}("undefined"!=typeof self?self:this,(function(e){return function(){"use strict";var t={771:function(t){t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o,i,a,u={};return o=n(771),i=n.n(o),a=document.body.getElementsByTagName("script"),(a=Array.prototype.slice.call(a)).forEach((function(e){if(!e.type||!e.type.match(/math\/tex/i))return-1;var t=null!=e.type.match(/mode\s*=\s*display(;|\s|\n|$)/),r=document.createElement(t?"div":"span");r.setAttribute("class",t?"equation":"inline-equation");try{i().render(e.text,r,{displayMode:t})}catch(t){r.textContent=e.text}e.parentNode.replaceChild(r,e)})),u=u.default}()}));