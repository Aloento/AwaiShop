import{m as l,o as h,j as s,aP as j,aQ as v,B as y,af as G,a4 as b,aR as C,e as N,aD as R,t as n,x as m,aS as L,O as F,J as q,aA as B,a3 as c,aT as S,aq as I}from"./vendor-nd_CUwkm.js";import{C as p,L as d,H as x,G as M,F as k,D as z,a as D}from"./index-hV0AI8wF.js";import{c as $,b as E,e as P}from"./isArrayLike--sVJAW2Y.js";import{i as T}from"./isObject-tyZXtoJz.js";import{t as f}from"./toFinite-GMFxiq4g.js";function V(e,a,i){if(!T(i))return!1;var t=typeof a;return(t=="number"?$(i)&&E(a,i.length):t=="string"&&a in i)?P(i[a],e):!1}var H=Math.floor,A=Math.random;function X(e,a){return e+H(A()*(a-e+1))}var O=parseFloat,Q=Math.min,J=Math.random;function U(e,a,i){if(i&&typeof i!="boolean"&&V(e,a,i)&&(a=i=void 0),i===void 0&&(typeof a=="boolean"?(i=a,a=void 0):typeof e=="boolean"&&(i=e,e=void 0)),e===void 0&&a===void 0?(e=0,a=1):(e=f(e),a===void 0?(a=e,e=0):a=f(a)),e>a){var t=e;e=a,a=t}if(i||e%1||a%1){var r=J();return Q(e+r*(a-e+O("1e-"+((r+"").length-1))),a)}return X(e,a)}const W=l({main:{alignItems:"flex-start",columnGap:n.spacingHorizontalXXL},img:{...p,aspectRatio:"16/9"},txt:{flexBasis:0},prev:{flexBasis:"46%"}});function g(){const e=W(),[a,{setTrue:i}]=h();return a?null:s.jsxs(s.Fragment,{children:[s.jsxs(j,{orientation:"horizontal",size:"large",className:e.main,children:[s.jsx(v,{className:e.prev,logo:s.jsx(y,{appearance:"subtle",icon:s.jsx(G,{}),onClick:i}),children:s.jsx(b,{className:e.img,src:"/banner.jpg"})}),s.jsx(C,{className:e.txt,header:s.jsxs(N,{size:500,children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non magna nisi. Nunc ut est vel est sodales consequat. Vivamus imperdiet eros luctus, mollis lorem quis, elementum arcu. Ut maximus pharetra volutpat. Etiam lorem risus, pellentesque vitae malesuada vitae, sollicitudin in massa. In nunc nulla, pretium vitae risus in, pulvinar bibendum magna. Duis ornare ullamcorper neque, sed venenatis augue. Vestibulum rutrum sapien et purus condimentum, id ultricies lectus hendrerit.",s.jsx("br",{}),"Aenean porttitor, metus ac semper malesuada, nulla leo dapibus dolor, et gravida augue leo ut sem. Morbi vitae ipsum viverra, suscipit turpis a, elementum mi. Cras pharetra ipsum leo, nec rhoncus elit cursus ut. Fusce consectetur lacus quis odio molestie, nec sollicitudin est pretium. Donec cursus sollicitudin porta. Integer tellus mi, iaculis ut massa et, tempor placerat odio. Quisque ac interdum mauris, ac scelerisque odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"]})})]}),s.jsx(R,{})]})}const _=l({card:{flexBasis:"23%",flexGrow:0},img:{aspectRatio:"1",...p,borderTopLeftRadius:n.borderRadiusMedium,borderTopRightRadius:n.borderRadiusMedium}}),u=new d("Gallery","Category","Card");function K({Id:e}){const a=_(),{data:i}=m(()=>x.Product.Get.Basic(e,u),{onError:u.error});return s.jsxs(j,{className:a.card,children:[s.jsx(v,{children:s.jsx(M,{className:a.img,Guid:i?.Cover,Log:u})}),s.jsx(L,{children:s.jsx(F,{children:s.jsx(q,{href:`/Product/${e}`,children:i?.Name||"Loading..."})})})]})}const Y=l({card:{flexBasis:"23%",flexGrow:0},cate:{...k,flexWrap:"wrap",justifyContent:"space-evenly",columnGap:n.spacingVerticalL,rowGap:n.spacingVerticalXL}}),Z=new d("Gallery","Category");function w({Category:e}){const a=Y(),{data:i,loading:t}=m(()=>x.Gallery.Get.Products(e),{onError:Z.error});return s.jsxs(s.Fragment,{children:[s.jsx(B,{children:e}),s.jsx("div",{className:a.cate,children:t?s.jsx(c,{size:128}):i[0].map((r,o)=>s.jsx(K,{Id:r},o)).concat(Array(i[1]).fill(null).map((r,o)=>s.jsx("div",{className:a.card},o+U(10,100))))})]})}const ee=l({main:{...D,rowGap:n.spacingVerticalXL}}),ae=new d("Gallery");function le(){const e=ee(),{data:a,loading:i}=m(()=>x.Gallery.Get.Categories(),{onError:ae.error});return i?s.jsxs(S,{className:e.main,children:[s.jsx(g,{}),s.jsx(c,{appearance:"translucent",size:32}),s.jsx(c,{size:128})]}):s.jsxs("div",{className:e.main,children:[s.jsx(I,{children:s.jsxs("title",{children:["Gallery - ",z.Name]})}),s.jsx(g,{}),a?.map((t,r)=>s.jsx(w,{Category:t},r))]})}export{le as default};
