import{a as f,b as o,i as n}from"./isObject-tyZXtoJz.js";var c="[object Symbol]";function b(r){return typeof r=="symbol"||f(r)&&o(r)==c}var m=/\s/;function y(r){for(var t=r.length;t--&&m.test(r.charAt(t)););return t}var I=/^\s+/;function p(r){return r&&r.slice(0,y(r)+1).replace(I,"")}var s=NaN,N=/^[-+]0x[0-9a-f]+$/i,T=/^0b[01]+$/i,a=/^0o[0-7]+$/i,d=parseInt;function x(r){if(typeof r=="number")return r;if(b(r))return s;if(n(r)){var t=typeof r.valueOf=="function"?r.valueOf():r;r=n(t)?t+"":t}if(typeof r!="string")return r===0?r:+r;r=p(r);var i=T.test(r);return i||a.test(r)?d(r.slice(2),i?2:8):N.test(r)?s:+r}var e=1/0,O=17976931348623157e292;function A(r){if(!r)return r===0?r:0;if(r=x(r),r===e||r===-e){var t=r<0?-1:1;return t*O}return r===r?r:0}export{A as t};
