var g=typeof global=="object"&&global&&global.Object===Object&&global;const j=g;var p=typeof self=="object"&&self&&self.Object===Object&&self,d=j||p||Function("return this")();const T=d;var O=T.Symbol;const o=O;var s=Object.prototype,S=s.hasOwnProperty,m=s.toString,n=o?o.toStringTag:void 0;function l(t){var r=S.call(t,n),e=t[n];try{t[n]=void 0;var a=!0}catch{}var y=m.call(t);return a&&(r?t[n]=e:delete t[n]),y}var I=Object.prototype,$=I.toString;function N(t){return $.call(t)}var h="[object Null]",u="[object Undefined]",i=o?o.toStringTag:void 0;function w(t){return t==null?t===void 0?u:h:i&&i in Object(t)?l(t):N(t)}function x(t){return t!=null&&typeof t=="object"}var P="[object Symbol]";function G(t){return typeof t=="symbol"||x(t)&&w(t)==P}var A=/\s/;function B(t){for(var r=t.length;r--&&A.test(t.charAt(r)););return r}var E=/^\s+/;function F(t){return t&&t.slice(0,B(t)+1).replace(E,"")}function c(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var f=NaN,R=/^[-+]0x[0-9a-f]+$/i,k=/^0b[01]+$/i,H=/^0o[0-7]+$/i,L=parseInt;function M(t){if(typeof t=="number")return t;if(G(t))return f;if(c(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=c(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=F(t);var e=k.test(t);return e||H.test(t)?L(t.slice(2),e?2:8):R.test(t)?f:+t}var b=1/0,U=17976931348623157e292;function X(t){if(!t)return t===0?t:0;if(t=M(t),t===b||t===-b){var r=t<0?-1:1;return r*U}return t===t?t:0}export{w as b,c as i,X as t};
