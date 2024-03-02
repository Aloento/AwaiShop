import{m as v,a9 as m,v as U,j as e,L as q,ae as xe,t as T,aa as p,ab as C,r as E,p as V,T as g,b as f,aH as me,aI as X,B as i,aJ as je,aK as O,af as Z,E as pe,D as ee,o as H,g as ne,h as se,i as te,aj as Y,k as re,Q as oe,aE as Ce,an as ge,ao as fe,ar as Pe,ag as $e,ah as Ve,ai as ke,ak as Re,I as J,R as Ue,F as be,aL as qe,aM as ze,c as _e,n as Xe,aN as We,a5 as He,a3 as Ye,a4 as Je,a6 as Ke,a7 as Qe,ac as ye,aO as Ze,au as en}from"./vendor-BRd9sncS.js";import{L as j,A as d,e as F,F as R,f as w,H as A,a as z,c as ae,C as nn,G as sn,M as Fe}from"./index-CcYfVq9b.js";import{H as tn,O as rn}from"./Columns-D-bCKrOK.js";import{L as on}from"./Lazy-du13rYM9.js";const _=v({two:{flexBasis:"2.5%",flexGrow:0},twoc:{flexBasis:"2.5%",flexGrow:0,justifyContent:"center"},ten:{flexBasis:"10%",flexGrow:0},page:{...R,alignItems:"center",justifyContent:"flex-end",paddingTop:T.spacingVerticalXL,columnGap:T.spacingHorizontalM},spin:{width:"4rem"}}),W=new j("Admin","Order"),an=[...tn(W).slice(0,-1),m({columnId:"User",renderHeaderCell:()=>e.jsx(p,{className:_().ten,children:"User"}),renderCell(n){return e.jsx(C,{className:_().ten,children:n.User})}}),m({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:_().two,children:"Action"}),renderCell(n){return e.jsx(C,{className:_().twoc,children:e.jsx(rn,{OrderId:n.Id,ParentLog:W,Admin:!0})})}})];function cn(){const n=_(),{data:s}=U(()=>d.Order.Get.Count(),{onError:W.error}),t=Math.ceil((s||1)/30),{data:o,run:l}=U(c=>d.Order.Get.List(c,W),{defaultParams:[1],debounceWait:300,onError:W.error});return e.jsxs(e.Fragment,{children:[e.jsx(F,{Items:o,Columns:an}),e.jsxs("div",{className:n.page,children:[e.jsxs(q,{children:["Total ",s," Records"]}),e.jsx(xe,{min:1,max:t,defaultValue:1,className:n.spin,onChange:(c,r)=>{const a=parseInt(r.value||r.displayValue);!isNaN(a)&&a&&a<=t&&l(a)}}),e.jsx(q,{children:"/"}),e.jsx(q,{children:t})]})]})}const ln=v({body:{...R,alignItems:"center"},input:{flexGrow:1}}),le=new j("Admin","Product","Detail","Category");function dn({ProdId:n}){const[s,t]=E.useState(""),[o,{setTrue:l,setFalse:c}]=V();U(()=>d.Product.Get.Category(n),{onSuccess(h){h&&t(h)},onError:le.error});const{dispatch:r,dispatchToast:a}=w(le),{run:u}=d.Product.Patch.useCategory({onError(h,D){r({Message:"Failed Update Category",Request:D,Error:h})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Category Updated"})}),{intent:"success"}),c()}}),{run:N}=d.Product.Delete.useCategory({onError(h,D){r({Message:"Failed Detach Category",Request:D,Error:h})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Category Detached"})}),{intent:"success"}),c()}}),{data:x}=U(()=>A.Gallery.Get.Categories(),{onSuccess(h){G(h)},onError:le.error}),[P,G]=E.useState(x),[I,$]=E.useState(""),y=ln();return e.jsxs("div",{className:y.body,children:[e.jsx(q,{size:"large",disabled:!o,children:"Category"}),e.jsxs(me,{className:y.input,size:"large",disabled:!o,freeform:!0,placeholder:s||"Pending",appearance:"underline",onChange:h=>{const D=h.target.value.trim(),b=x?.filter(S=>S.toLowerCase().indexOf(D.toLowerCase())===0);G(b),D&&b&&b.length<1?$(D):$("")},onOptionSelect:(h,D)=>{const b=D.optionText;t(b),b&&x?.includes(b)?$(""):$(b)},children:[I&&e.jsxs(X,{text:I,children:['Create New "',I,'"']},I),P?.map(h=>e.jsx(X,{children:h},h)),P?.length===x?.length?e.jsx(X,{text:"",children:"Pending"},""):null]}),o?e.jsx(i,{appearance:"subtle",icon:e.jsx(je,{}),onClick:()=>{s?u(n,s):N(n)}}):e.jsx(i,{appearance:"subtle",icon:e.jsx(O,{}),onClick:l})]})}const un=new j("Admin","Product","Detail","Combo","Delete");function hn({ComboId:n,Refresh:s}){const{dispatch:t,dispatchToast:o}=w(un),{run:l}=d.Product.Delete.useCombo({onError(c,r){t({Message:"Failed Delete Combo",Request:r,Error:c})},onSuccess(){o(e.jsx(g,{children:e.jsx(f,{children:"Combo Deleted"})}),{intent:"success"}),s()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(Z,{}),onClick:()=>l(n)})}const xn=[m({columnId:"Variant",renderHeaderCell:()=>e.jsx(p,{children:"Variant"}),renderCell(n){return e.jsx(C,{children:n.Name})}}),m({columnId:"Type",renderHeaderCell:()=>e.jsx(p,{children:"Type"}),renderCell(n){return e.jsx(C,{children:e.jsx(me,{defaultValue:n.Current,defaultSelectedOptions:[n.Current],onOptionSelect:(s,t)=>n.Update(t.optionValue),children:n.Types.map((s,t)=>e.jsx(X,{children:s},t))})})}})],mn=v({body:{...R,justifyContent:"flex-end",alignItems:"center",columnGap:T.spacingVerticalM,marginTop:T.spacingHorizontalM}}),we=new j("Admin","Product","Detail","Combo","Detail");function jn({Id:n,ProdId:s,Combo:t,Stock:o,Refresh:l}){const[c,{toggle:r}]=V(),[a,u]=E.useState(t),[N,x]=E.useState(o),[P,G]=E.useState([]),{data:I}=d.Product.Get.useVariants(s,{onError:we.error});pe(async()=>{if(!I)return;const b=[];for(const S of I){const k=await d.Product.Get.Types(S),K=[];for(const ce of k){const Oe=await A.Product.Get.Type(ce);K.push(Oe)}const{Name:Le}=await A.Product.Get.Variant(S);b.push({Id:S,Name:Le,Types:K.map(ce=>ce.Name)})}G(b)},[I]);const{dispatch:$,dispatchToast:y}=w(we),{run:h,loading:D}=d.Product.Patch.useCombo({onError(b,S){$({Message:"Failed Update Combo",Request:S,Error:b})},onSuccess(){y(e.jsx(g,{children:e.jsx(f,{children:"Combo Updated"})}),{intent:"success"}),l(),r()}});return e.jsxs(ee,{open:c,onOpenChange:r,children:[e.jsx(H,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(O,{})})}),e.jsx(ne,{children:e.jsxs(se,{children:[e.jsx(te,{action:e.jsx(H,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(Y,{})})}),children:"Combo Detail"}),e.jsxs(re,{children:[e.jsx(F,{Items:P?.map(b=>({Current:a[b.Name],Update(S){a[b.Name]=S,u({...a})},...b})),Columns:xn}),e.jsxs("div",{className:mn().body,children:[e.jsx(q,{children:"Stock"}),e.jsx(xe,{value:N,min:0,onChange:(b,S)=>{const k=parseInt(S.value||S.displayValue);isNaN(k)||k<0||x(k)}}),e.jsx(i,{disabled:D,appearance:"primary",onClick:()=>h(n,a,N),children:"Submit"})]})]})]})})]})}const pn=[m({columnId:"Variant",renderHeaderCell:()=>e.jsx(p,{children:"Variant"}),renderCell(n){return e.jsx(C,{children:n.Name})}}),m({columnId:"Type",renderHeaderCell:()=>e.jsx(p,{children:"Type"}),renderCell(n){return e.jsx(C,{children:e.jsx(me,{onOptionSelect:(s,t)=>n.Update(t.optionValue),children:n.Types.map((s,t)=>e.jsx(X,{children:s},t))})})}})],Cn=v({body:{...R,justifyContent:"flex-end",alignItems:"center",columnGap:T.spacingVerticalM,marginTop:T.spacingHorizontalM}}),Ne=new j("Admin","Product","Detail","Combo","NewCombo");function gn({ProdId:n,Refresh:s}){const[t,{toggle:o}]=V(),[l,c]=E.useState([]),[r,a]=E.useState({}),[u,N]=E.useState(1),{data:x}=d.Product.Get.useVariants(n,{onError:Ne.error});pe(async()=>{if(!x)return;const y=[];for(const h of x){const D=await d.Product.Get.Types(h),b=[];for(const k of D){const K=await A.Product.Get.Type(k);b.push(K)}const{Name:S}=await A.Product.Get.Variant(h);y.push({Id:h,Name:S,Types:b.map(k=>k.Name)}),r[S]=""}c(y),a({...r})},[x]);const{dispatch:P,dispatchToast:G}=w(Ne),{run:I,loading:$}=d.Product.Post.useCombo({onError(y,h){P({Message:"Failed Create Combo",Request:h,Error:y})},onSuccess(){G(e.jsx(g,{children:e.jsx(f,{children:"Combo Created"})}),{intent:"success"}),s(),o()}});return e.jsxs(ee,{open:t,onOpenChange:o,children:[e.jsx(H,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"primary",icon:e.jsx(oe,{}),children:"New Combo"})}),e.jsx(ne,{children:e.jsxs(se,{children:[e.jsx(te,{action:e.jsx(H,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(Y,{})})}),children:"New Combo"}),e.jsxs(re,{children:[e.jsx(F,{Items:l?.map(y=>({Update(h){r[y.Name]=h,a({...r})},...y})),Columns:pn}),e.jsxs("div",{className:Cn().body,children:[e.jsx(q,{children:"Stock"}),e.jsx(xe,{value:u,min:0,onChange:(y,h)=>{const D=parseInt(h.value||h.displayValue);isNaN(D)||D<0||N(D)}}),e.jsx(i,{disabled:$,appearance:"primary",onClick:()=>I(n,r,u),children:"Create"})]})]})]})})]})}const M=v({body:{...R,justifyContent:"space-between"},four:{flexBasis:"4%",flexGrow:0},seven:{flexBasis:"7%",flexGrow:0},five:{flexBasis:"5%",flexGrow:0}}),Ee=new j("Admin","Product","Detail","Combo"),fn=[m({columnId:"Id",renderHeaderCell:()=>e.jsx(p,{className:M().four,children:"Id"}),renderCell(n){return e.jsx(C,{className:M().four,children:n.Id})}}),m({columnId:"Combo",renderHeaderCell:()=>e.jsx(p,{children:"Combo"}),renderCell(n){return e.jsx(C,{children:Object.entries(n.Combo).reduce((s,t)=>`${s} ${t[0]} : ${t[1]} ;`,"")})}}),m({columnId:"Stock",renderHeaderCell:()=>e.jsx(p,{className:M().five,children:"Stock"}),renderCell(n){return e.jsx(C,{className:M().five,children:n.Stock})}}),m({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:M().seven,children:"Action"}),renderCell(n){return e.jsxs(C,{className:M().seven,children:[e.jsx(jn,{...n}),e.jsx(hn,{ComboId:n.Id,Refresh:n.Refresh})]})}})];function Pn({ProdId:n}){const{data:s,run:t}=U(()=>A.Product.Get.ComboList(n,Ee),{onError:Ee.error});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:M().body,children:[e.jsx(Ce,{children:"Combo"}),e.jsx(gn,{ProdId:n,Refresh:t})]}),e.jsx(F,{Items:s?.map(o=>({ProdId:n,Refresh:t,...o})),Columns:fn})]})}const bn=new j("Admin","Product","Detail","Delete"),yn=v({root:{...z,rowGap:T.spacingHorizontalS}});function wn({ProdId:n}){const{Nav:s}=ae(),{dispatch:t,dispatchToast:o}=w(bn),{run:l,loading:c}=d.Product.Delete.useProduct({onError(a,u){t({Message:"Failed Delete Product",Request:u,Error:a})},onSuccess(){o(e.jsx(g,{children:e.jsx(f,{children:"Product Deleted"})}),{intent:"success"}),s("/Admin")}}),r=yn();return e.jsx("div",{children:e.jsxs(ge,{withArrow:!0,children:[e.jsx(fe,{disableButtonEnhancement:!0,children:e.jsx(i,{children:"Delete Product"})}),e.jsxs(Pe,{className:r.root,children:["Are You Sure?",e.jsx(i,{disabled:c,appearance:"primary",onClick:()=>l(n),children:"Yes"})]})]})})}const Nn=v({btn:{...R,columnGap:T.spacingVerticalS},drawer:{width:"1100px"}}),En=new j("Admin","Product","Lexical");function An({ProdId:n}){const s=Nn(),[t,{toggle:o,setTrue:l}]=V(),{data:c,run:r}=U(()=>A.Product.Get.Lexical(n)),{dispatch:a,dispatchToast:u}=w(En),{run:N}=d.Product.Post.useLexical({onError(x,P){a({Message:"Failed Update Description",Request:P,Error:x})},onSuccess(){u(e.jsx(g,{children:e.jsx(f,{children:"Description Updated"})}),{intent:"success"}),r(),o()}});return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(i,{onClick:()=>l(),children:"Open Description Editor"})}),e.jsxs($e,{open:t,onOpenChange:o,position:"start",size:"large",modalType:"alert",className:s.drawer,children:[e.jsx(Ve,{children:e.jsx(ke,{action:e.jsxs("div",{className:s.btn,children:[e.jsx(i,{appearance:"primary",onClick:()=>N(n),children:"Save"}),e.jsx(i,{onClick:()=>o(),children:"Cancel"})]}),children:"Edit Product Description"})}),e.jsx(Re,{children:e.jsx(on,{State:c?.Description})})]})]})}const Ae=new j("Admin","Product","Detail","Name");function Dn({ProdId:n}){const[s,t]=E.useState(""),[o,{setTrue:l,setFalse:c}]=V(),{Nav:r}=ae();U(()=>d.Product.Get.Name(n),{onSuccess(x){t(x)},onError(x){r("Admin"),Ae.error(x)}});const{dispatch:a,dispatchToast:u}=w(Ae),{run:N}=d.Product.Patch.useName({onError(x,P){a({Message:"Failed Update Name",Request:P,Error:x})},onSuccess(){u(e.jsx(g,{children:e.jsx(f,{children:"Name Updated"})}),{intent:"success"}),c()}});return e.jsx(J,{size:"large",value:s,disabled:!o,appearance:"underline",onChange:(x,P)=>t(P.value),contentBefore:e.jsx(Ue,{children:"Name"}),contentAfter:o?e.jsx(i,{appearance:"subtle",icon:e.jsx(je,{}),onClick:()=>N(n,s)}):e.jsx(i,{appearance:"subtle",icon:e.jsx(O,{}),onClick:l})})}const De=new j("Admin","Product","Detail","Photo","Edit","Caption");function Sn({PhotoId:n}){const[s,t]=E.useState("");A.Product.Get.usePhoto(n,{onError:De.error,onSuccess({Caption:a}){a&&t(a)}});const{dispatch:o,dispatchToast:l}=w(De),{run:c,loading:r}=d.Product.Patch.useCaption(n,{onError(a,u){o({Message:"Failed Update Caption",Request:u,Error:a})},onSuccess(){l(e.jsx(g,{children:e.jsx(f,{children:"Caption Updated"})}),{intent:"success"})}});return e.jsxs(e.Fragment,{children:[e.jsx(be,{label:"Caption",children:e.jsx(J,{value:s,placeholder:"Write some infomation here?",onChange:(a,u)=>t(u.value)})}),e.jsx(i,{disabled:r,onClick:()=>c(s),children:"Save Caption"})]})}const Tn=new j("Admin","Product","Detail","Photo","Edit","Delete");function vn(n){const{ProductId:s,PhotoId:t}=n,{dispatch:o,dispatchToast:l}=w(Tn),{run:c}=d.Product.Delete.usePhoto(n,{onError(r,a){o({Message:`Failed Delete Photo ${t} from Product ${s}`,Request:a,Error:r})},onSuccess(){l(e.jsx(g,{children:e.jsxs(f,{children:["Photo ",t," Deleted"]})}),{intent:"success"})}});return e.jsx(i,{appearance:"primary",onClick:()=>c(),children:"Delete"})}const Se=new j("Admin","Product","Detail","Photo","Edit","Replace");function Gn({PhotoId:n,ProductId:s}){const{dispatch:t,dispatchToast:o}=w(Se),{run:l,loading:c}=d.Product.Patch.usePhoto(n,Se,{onBefore([r]){o(e.jsx(g,{children:e.jsxs(f,{children:["Uploading Photo ",r.name," for Product ",s," to replace ",n]})}),{intent:"info"})},onError(r,a){t({Message:"Failed Update Photo",Request:a,Error:r})},onSuccess(){o(e.jsx(g,{children:e.jsx(f,{children:"Photo Updated"})}),{intent:"success"})}});return e.jsx(i,{disabled:c,onClick:()=>{const r=document.createElement("input");r.type="file",r.accept="image/*",r.onchange=()=>{r.files&&l(r.files[0])},r.click()},children:c?"Uploading...":"Replace"})}const In=v({box:{...R,columnGap:T.spacingHorizontalL},img:{...nn,aspectRatio:"1",width:"50%"},cap:{...z,flexGrow:1,rowGap:T.spacingVerticalL}}),Te=new j("Admin","Product","Detail","Photo","Edit");function $n(n){const{PhotoId:s}=n,t=In(),{data:o}=A.Product.Get.usePhoto(s,{onError:Te.error});return e.jsxs(ee,{children:[e.jsx(H,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(O,{})})}),e.jsx(ne,{children:e.jsxs(se,{children:[e.jsx(te,{action:e.jsx(H,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(Y,{})})}),children:"Image Detail"}),e.jsxs(re,{className:t.box,children:[e.jsx(sn,{shape:"rounded",className:t.img,Guid:o?.ObjectId,ParentLog:Te}),e.jsxs("div",{className:t.cap,children:[e.jsx(Sn,{...n}),e.jsx(Gn,{...n}),e.jsx(vn,{...n})]})]})]})})]})}function Vn({ParentLog:n,...s}){const{dispatch:t}=w(n),{run:o,loading:l}=d.Product.Post.useMovePhoto(s,{onError(c,r){t({Message:"Failed Update Order",Request:r,Error:c})}});return e.jsxs(e.Fragment,{children:[e.jsx(i,{disabled:l,appearance:"subtle",icon:e.jsx(qe,{}),onClick:()=>o(!0)}),e.jsx(i,{disabled:l,appearance:"subtle",icon:e.jsx(ze,{}),onClick:()=>o(!1)}),e.jsx($n,{...s})]})}const ie=v({f11:{flexBasis:"11%",flexGrow:0},box:{...R,justifyContent:"space-between"}}),L=new j("Admin","Product","Detail","Photo"),kn=[Fe(70,L,({PhotoId:n})=>{const{data:s}=A.Product.Get.usePhoto(n,{onError:L.error});return s?.ObjectId||""}),m({columnId:"Caption",renderHeaderCell:()=>e.jsx(p,{children:"Caption"}),renderCell({PhotoId:n}){const{data:s}=A.Product.Get.usePhoto(n,{onError:L.error});return e.jsx(C,{children:s?.Caption||"No Caption"})}}),m({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:ie().f11,children:"Action"}),renderCell(n){return e.jsx(C,{className:ie().f11,children:e.jsx(Vn,{...n,ParentLog:L})})}})];function Rn({ProdId:n}){const{data:s}=A.Product.Get.usePhotoList(n,{onError:L.error}),{dispatch:t,dispatchToast:o}=w(L),{run:l,loading:c}=d.Product.Post.usePhoto(n,L,{onBefore([r]){o(e.jsx(g,{children:e.jsxs(f,{children:["Uploading Photo ",r.name," for Product ",n]})}),{intent:"info"})},onError(r,a){t({Message:"Failed Upload Photo",Request:a,Error:r})},onSuccess(){o(e.jsx(g,{children:e.jsx(f,{children:"Photo Uploaded"})}),{intent:"success"})}});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:ie().box,children:[e.jsx(Ce,{children:"Photos"}),e.jsx(i,{disabled:c,appearance:"primary",icon:e.jsx(oe,{}),onClick:()=>{const r=document.createElement("input");r.type="file",r.accept="image/*",r.onchange=()=>{r.files&&l(r.files[0])},r.click()},children:c?"Uploading...":"New Image"})]}),e.jsx(F,{Items:s?.map(r=>({PhotoId:r,ProductId:n})),Columns:kn,getRowId:r=>r.PhotoId})]})}const Un=new j("Admin","Product","Detail","Variant","Delete");function Hn({VariantId:n}){const{dispatch:s,dispatchToast:t}=w(Un),{run:o,loading:l}=d.Product.Delete.useVariant(n,{onError(c,r){s({Message:"Failed Delete Variant",Request:r,Error:c})},onSuccess(){t(e.jsx(g,{children:e.jsx(f,{children:"Variant Deleted"})}),{intent:"success"})}});return e.jsx(i,{disabled:l,appearance:"subtle",icon:e.jsx(Z,{}),onClick:()=>o()})}const Fn=new j("Admin","Product","Detail","Variant","Edit","TypeDelete");function Mn({TypeId:n}){const{dispatch:s,dispatchToast:t}=w(Fn),{run:o}=d.Product.Delete.useType(n,{onError(l,c){s({Message:"Failed Delete Type",Request:c,Error:l})},onSuccess(){t(e.jsx(g,{children:e.jsx(f,{children:"Type Deleted"})}),{intent:"success"})}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(Z,{}),onClick:()=>o()})}const ve=new j("Admin","Product","Detail","Variant","Edit","Name");function Bn({VariantId:n}){const[s,t]=E.useState(""),{data:o}=A.Product.Get.useVariant(n,{onError:ve.error});E.useEffect(()=>{o&&t(o.Name)},[o]);const[l,{setTrue:c,setFalse:r}]=V(),{dispatch:a,dispatchToast:u}=w(ve),{run:N,loading:x}=d.Product.Patch.useVariantName(n,{onError(P,G){a({Message:"Failed Update Variant Name",Request:G[0],Error:P})},onSuccess(){u(e.jsx(g,{children:e.jsx(f,{children:"Variant Name Updated"})}),{intent:"success"}),r()}});return e.jsx(J,{size:"large",value:s,disabled:!l,appearance:"underline",onChange:(P,G)=>t(G.value),contentBefore:e.jsx(Ue,{children:"Name"}),contentAfter:l?e.jsx(i,{appearance:"subtle",icon:e.jsx(je,{}),onClick:()=>N(s),disabled:x}):e.jsx(i,{appearance:"subtle",icon:e.jsx(O,{}),onClick:c})})}const Ln=v({body:{...z,rowGap:T.spacingVerticalM}}),Ge=new j("Admin","Product","Detail","Variant","Edit","Type");function Me({VariantId:n,TypeId:s,New:t}){const o=Ln(),[l,{toggle:c}]=V(),[r,a]=E.useState("");A.Product.Get.useType(s,{manual:t,onSuccess(y){a(y.Name)},onError:Ge.error});const{dispatch:u,dispatchToast:N}=w(Ge),x={manual:!0,onError(y,h){u({Message:`Failed ${t?"Create":"Update"} Type ${r}`,Request:h,Error:y})},onSuccess(y){N(e.jsxs(g,{children:[e.jsxs(f,{children:["Type ",t?"Created":"Updated"]}),e.jsxs(_e,{children:[y," ",r]})]}),{intent:"success"}),a(""),c()}},{run:P,loading:G}=d.Product.Post.useType(n,x),{run:I,loading:$}=d.Product.Patch.useType(s,x);return e.jsxs(ge,{withArrow:!0,open:l,onOpenChange:c,children:[e.jsx(fe,{disableButtonEnhancement:!0,children:t?e.jsx(i,{icon:e.jsx(oe,{}),appearance:"primary",children:"New Type"}):e.jsx(i,{appearance:"subtle",icon:e.jsx(O,{})})}),e.jsxs(Pe,{className:o.body,children:[e.jsx(be,{label:"Type Name",children:e.jsx(J,{value:r,onChange:(y,h)=>a(h.value)})}),e.jsx(i,{disabled:$||G,onClick:()=>t?P(r):I(r),children:"Submit"})]})]})}const de=v({body:{...z,rowGap:T.spacingVerticalM},twelve:{flexBasis:"12%",flexGrow:0}}),On=[m({columnId:"Name",renderHeaderCell:()=>e.jsx(p,{children:"Name"}),renderCell({Id:n}){const{data:s}=A.Product.Get.useType(n);return e.jsx(C,{children:s?.Name})}}),m({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:de().twelve,children:"Action"}),renderCell({Id:n,VariantId:s}){return e.jsxs(C,{className:de().twelve,children:[e.jsx(Me,{VariantId:s,TypeId:n}),e.jsx(Mn,{TypeId:n})]})}})];function qn({VariantId:n}){const{data:s}=d.Product.Get.useTypes(n);return e.jsxs(ee,{children:[e.jsx(H,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(O,{})})}),e.jsx(ne,{children:e.jsxs(se,{children:[e.jsx(te,{action:e.jsx(H,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(Y,{})})}),children:"Variant Detail"}),e.jsxs(re,{className:de().body,children:[e.jsx(Bn,{VariantId:n}),e.jsx(F,{Items:s?.map(t=>({Id:t,VariantId:n})),Columns:On})]}),e.jsx(Xe,{children:e.jsx(Me,{VariantId:n,New:!0})})]})})]})}const zn=v({body:{...z,rowGap:T.spacingVerticalM}}),_n=new j("Admin","Product","Detail","Variant","New");function Xn({ProdId:n}){const s=zn(),[t,{toggle:o}]=V(),[l,c]=E.useState(""),{dispatch:r,dispatchToast:a}=w(_n),{run:u,loading:N}=d.Product.Post.useVariant(n,{onError(x,P){r({Message:"Failed Create Variant",Request:P,Error:x})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Variant Created"})}),{intent:"success"}),c(""),o()}});return e.jsxs(ge,{withArrow:!0,open:t,onOpenChange:o,children:[e.jsx(fe,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"primary",icon:e.jsx(oe,{}),children:"New Variant"})}),e.jsxs(Pe,{className:s.body,children:[e.jsx(be,{required:!0,label:"Variant Name",children:e.jsx(J,{value:l,onChange:(x,P)=>c(P.value)})}),e.jsx(i,{disabled:N,onClick:()=>u(l),children:"Add"})]})]})}const B=v({body:{...R,justifyContent:"space-between"},four:{flexBasis:"4%",flexGrow:0},seven:{flexBasis:"7%",flexGrow:0},twelve:{flexBasis:"12%",flexGrow:0}}),ue=new j("Admin","Product","Detail","Variant"),Wn=[m({columnId:"Id",renderHeaderCell:()=>e.jsx(p,{className:B().four,children:"Id"}),renderCell(n){return e.jsx(C,{className:B().four,children:n})}}),m({columnId:"Name",renderHeaderCell:()=>e.jsx(p,{className:B().twelve,children:"Name"}),renderCell(n){const{data:s}=A.Product.Get.useVariant(n,{onError:ue.error});return e.jsx(C,{className:B().twelve,children:s?.Name})}}),m({columnId:"Type",renderHeaderCell:()=>e.jsx(p,{children:"Type"}),renderCell(n){const{data:s}=d.Product.Get.useTypeList(n,{onError:ue.error});return e.jsx(C,{children:s?.reduce((t,{Name:o})=>`${t} ${o} ;`,"")})}}),m({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:B().seven,children:"Action"}),renderCell(n){return e.jsxs(C,{className:B().seven,children:[e.jsx(qn,{VariantId:n}),e.jsx(Hn,{VariantId:n})]})}})];function Yn({ProdId:n}){const s=B(),{data:t}=d.Product.Get.useVariants(n,{onError:ue.error});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:s.body,children:[e.jsx(Ce,{children:"Variant"}),e.jsx(Xn,{ProdId:n})]}),e.jsx(F,{Items:t,Columns:Wn,getRowId:o=>o})]})}const Jn=v({body:{...z,rowGap:T.spacingVerticalXL,paddingBottom:T.spacingVerticalXXXL}});function Kn({ProdId:n}){const s=Jn(),[t,{setFalse:o,setTrue:l}]=V(),{Nav:c,Paths:r}=ae(),a=parseInt(r.at(1));return E.useEffect(()=>{a===n?l():o()},[r]),e.jsxs(e.Fragment,{children:[e.jsx(i,{appearance:"subtle",icon:e.jsx(We,{}),onClick:()=>{c("Admin",n),l()}}),e.jsxs($e,{open:t,position:"end",size:"large",modalType:"alert",children:[e.jsx(Ve,{children:e.jsx(ke,{action:e.jsx(i,{appearance:"subtle",icon:e.jsx(Y,{}),onClick:()=>{c("Admin"),o()}}),children:"Product Detail"})}),e.jsxs(Re,{className:s.body,children:[e.jsx(Dn,{ProdId:n}),e.jsx(dn,{ProdId:n}),e.jsx(Rn,{ProdId:n}),e.jsx(Yn,{ProdId:n}),e.jsx(Pn,{ProdId:n}),e.jsx(An,{ProdId:n}),e.jsx(wn,{ProdId:n})]})]})]})}const Q=new j("Admin","Product","Row");function Qn({item:n}){const[s,t]=E.useState(()=>({Id:n,Cover:"",Name:"Loading..."})),[o,{setTrue:l}]=V(),c=A.Product.Get;return pe(async()=>{const r=await c.Product(n).catch(Q.error);if(!r)return Q.warn(`Product ${n} Not Found`),l();let a={...s,Name:r.Name,Category:r.Category||"Pending"};t(a);const[u]=await c.PhotoList(n,!0);u||Q.warn(`Product ${n} has no photo`);const N=await c.Photo(u);t(a={...a,Cover:N.ObjectId});const x=await d.Product.Get.Count(n).catch(Q.error);x&&t({...a,...x})},[]),o?null:e.jsx(He,{children:({renderCell:r})=>r(s)},n)}const Ie=v({two:{flexBasis:"2.5%",flexGrow:0},twoc:{flexBasis:"2.5%",flexGrow:0,justifyContent:"center"}}),Be=new j("Admin","Product"),Zn=[Fe(50,Be,n=>n.Cover),m({columnId:"Product",renderHeaderCell:()=>e.jsx(p,{children:"Product"}),renderCell(n){return e.jsx(C,{children:e.jsx(ye,{children:n.Name})})}}),m({columnId:"Category",renderHeaderCell:()=>e.jsx(p,{children:"Category"}),renderCell(n){return e.jsx(C,{children:e.jsx(ye,{children:n.Category})})}}),m({columnId:"Variant",renderHeaderCell:()=>e.jsx(p,{children:"Variant"}),renderCell(n){return e.jsx(C,{children:n.Variant})}}),m({columnId:"Combo",renderHeaderCell:()=>e.jsx(p,{children:"Combo"}),renderCell(n){return e.jsx(C,{children:n.Combo})}}),m({columnId:"Stock",renderHeaderCell:()=>e.jsx(p,{children:"Stock"}),renderCell(n){return e.jsx(C,{children:n.Stock})}}),m({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:Ie().two,children:"Detail"}),renderCell(n){return e.jsx(C,{className:Ie().twoc,children:e.jsx(Kn,{ProdId:n.Id})})}})];function es(){const n=d.Product.Get.useList(Be);return e.jsxs(Ye,{items:n?n.reverse():[],columns:Zn,children:[e.jsx(Je,{children:e.jsx(He,{children:({renderHeaderCell:s})=>s()})}),e.jsx(Ke,{children:s=>e.jsx(Qn,{...s})}),!n&&e.jsx(Qe,{size:48})]})}const ns=new j("Admin","User","Delete");function ss({UserId:n,Refresh:s}){const{dispatch:t,dispatchToast:o}=w(ns),{run:l}=d.User.Delete.useUser({manual:!0,onError(c,r){t({Message:"Failed Delete User",Request:r,Error:c})},onSuccess(){o(e.jsx(g,{children:e.jsx(f,{children:"User Deleted"})}),{intent:"success"}),s()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(Z,{}),onClick:()=>l(n)})}const ts=new j("Admin","User","Grant");function rs({UserId:n,Admin:s,Refresh:t}){const{dispatch:o,dispatchToast:l}=w(ts),{run:c}=d.User.Post.useAdmin({manual:!0,onError(a,u){o({Message:"Failed Grant Admin",Request:u,Error:a})},onSuccess(){l(e.jsx(g,{children:e.jsx(f,{children:"Admin Granted"})}),{intent:"success"}),t()}}),{run:r}=d.User.Delete.useAdmin({manual:!0,onError(a,u){o({Message:"Failed Revoke Admin",Request:u,Error:a})},onSuccess(){l(e.jsx(g,{children:e.jsx(f,{children:"Admin Revoked"})}),{intent:"success"}),t()}});return e.jsx(Ze,{checked:s,onChange:(a,u)=>{u.checked?c(n):r(n)}})}const os=new j("Admin","User"),as=[m({columnId:"Id",renderHeaderCell:()=>"Id",renderCell(n){return n.Id}}),m({columnId:"Name",renderHeaderCell:()=>"Real Name",renderCell(n){return n.Name}}),m({columnId:"Email",renderHeaderCell:()=>"E-Mail",renderCell(n){return n.EMail}}),m({columnId:"Admin",renderHeaderCell:()=>"Admin",renderCell(n){return e.jsx(rs,{UserId:n.Id,Admin:n.Admin,Refresh:he})}}),m({columnId:"Delete",renderHeaderCell:()=>"Delete",renderCell(n){return e.jsx(ss,{UserId:n.Id,Refresh:he})}})].map(({renderHeaderCell:n,renderCell:s,...t})=>({...t,renderHeaderCell:()=>e.jsx(p,{children:n()}),renderCell:o=>e.jsx(C,{children:s(o)})}));let he;function cs(){const{data:n,run:s}=U(()=>d.User.Get.List(),{onError:os.error});return he=s,e.jsx(F,{Items:n,Columns:as})}const ls=new j("Admin");function xs(){const{Paths:n,Nav:s}=ae(),t=n.at(1),o=E.useMemo(()=>{switch(t){case"Order":return e.jsx(cn,{});case"User":return e.jsx(cs,{});default:return e.jsx(es,{})}},[t]),{data:l}=A.User.Get.useMe(ls);return l?l.Admin?o:s("/"):e.jsx(en,{size:"huge",label:"Authenticating..."})}export{xs as default};
