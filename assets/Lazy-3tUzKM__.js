import{r as i,at as f,j as o,as as j}from"./vendor-BOOSQb3m.js";var g=typeof global=="object"&&global&&global.Object===Object&&global,p=typeof self=="object"&&self&&self.Object===Object&&self,u=g||p||Function("return this")(),n=u.Symbol,c=Object.prototype,d=c.hasOwnProperty,y=c.toString,e=n?n.toStringTag:void 0;function O(t){var r=d.call(t,e),s=t[e];try{t[e]=void 0;var l=!0}catch{}var b=y.call(t);return l&&(r?t[e]=s:delete t[e]),b}var S=Object.prototype,T=S.toString;function v(t){return T.call(t)}var m="[object Null]",x="[object Undefined]",a=n?n.toStringTag:void 0;function w(t){return t==null?t===void 0?x:m:a&&a in Object(t)?O(t):v(t)}function E(t){return t!=null&&typeof t=="object"}function L(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}function $(t){return o.jsx(i.Suspense,{fallback:o.jsx(j,{}),children:o.jsx(_,{...t})})}const _=i.lazy(()=>f(()=>import("./index-WvezZf_W.js").then(t=>t.q),__vite__mapDeps([0,1,2,3])));export{$ as L,n as S,E as a,w as b,g as f,L as i,u as r};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-WvezZf_W.js","assets/vendor-BOOSQb3m.js","assets/index-4y8-RJS_.js","assets/index-mRiAC1cH.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
