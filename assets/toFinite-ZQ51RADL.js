var g=typeof global=="object"&&global&&global.Object===Object&&global,j=typeof self=="object"&&self&&self.Object===Object&&self,p=g||j||Function("return this")(),o=p.Symbol,s=Object.prototype,d=s.hasOwnProperty,T=s.toString,n=o?o.toStringTag:void 0;function O(t){var r=d.call(t,n),e=t[n];try{t[n]=void 0;var a=!0}catch{}var y=T.call(t);return a&&(r?t[n]=e:delete t[n]),y}var S=Object.prototype,m=S.toString;function I(t){return m.call(t)}var l="[object Null]",N="[object Undefined]",i=o?o.toStringTag:void 0;function $(t){return t==null?t===void 0?N:l:i&&i in Object(t)?O(t):I(t)}function h(t){return t!=null&&typeof t=="object"}var u="[object Symbol]";function w(t){return typeof t=="symbol"||h(t)&&$(t)==u}var x=/\s/;function P(t){for(var r=t.length;r--&&x.test(t.charAt(r)););return r}var A=/^\s+/;function B(t){return t&&t.slice(0,P(t)+1).replace(A,"")}function f(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var c=NaN,E=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,G=/^0o[0-7]+$/i,R=parseInt;function k(t){if(typeof t=="number")return t;if(w(t))return c;if(f(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=f(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=B(t);var e=F.test(t);return e||G.test(t)?R(t.slice(2),e?2:8):E.test(t)?c:+t}var b=1/0,H=17976931348623157e292;function M(t){if(!t)return t===0?t:0;if(t=k(t),t===b||t===-b){var r=t<0?-1:1;return r*H}return t===t?t:0}export{$ as b,f as i,M as t};