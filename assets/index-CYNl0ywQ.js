import{m as w,j as e,T as g,b as f,F as B,B as i,a7 as h,a8 as p,a9 as C,p as $,r as D,I as L,aF as Z,aG as H,t as S,y as I,aH as Ie,ae as xe,af as je,ag as pe,ah as q,ai as Ce,L as O,ac as ge,aI as fe,aJ as Q,ad as ee,D as ne,o as V,g as se,h as re,i as te,k as ae,N as oe,aC as be,al as ye,am as Pe,ap as Ne,O as $e,C as Ue,aK as Fe,aL as Me,c as Oe,n as Be,aM as Le,a3 as ke,a1 as qe,a2 as ze,a4 as _e,a5 as Xe,aa as Ae,aN as Qe,as as We}from"./vendor-BtaCFw3O.js";import{L as x,a as U,e as N,A as u,f as k,c as Y,F as G,H as z,C as Ye,G as Je,M as Ge}from"./index-Bz9dJZgG.js";import{O as Ke,a as Ze,C as en,H as nn}from"./Columns-_GTnRwA5.js";import{L as sn}from"./Lazy-DErHG2JS.js";const rn=w({body:{...U,alignItems:"flex-start"}}),tn=new x("Admin","Order","Detail","Action");function an({OrderId:n,Status:r,Refresh:s}){const t=rn(),{dispatch:a,dispatchToast:o}=N(tn),{run:c}=u.Order.Post.useAccept({manual:!0,onError(l,d){a({Message:"Failed Accept Order",Request:d,Error:l})},onSuccess(){o(e.jsx(g,{children:e.jsx(f,{children:"Order Accepted"})}),{intent:"success"}),s()}});switch(r){case"Processing":case"Shipping":case"Finished":case"Cancelled":case"Returning":return null}return e.jsx(B,{label:"Action",size:"large",children:e.jsx("div",{className:t.body,children:r==="Pending"&&e.jsx(i,{appearance:"subtle",onClick:()=>c(n),children:"Accept Order"})})})}const we=w({ten:{flexBasis:"10%",flexGrow:0}}),on=[h({columnId:"Product",renderHeaderCell(){return e.jsx(p,{children:"Name"})},renderCell(n){return e.jsx(C,{children:n.Name})}}),h({columnId:"Type",renderHeaderCell(){return e.jsx(p,{children:"Type"})},renderCell(n){return e.jsx(C,{children:Object.entries(n.Type).reduce((r,s)=>`${r} ${s[0]} : ${s[1]} ;`,"")})}}),h({columnId:"Quantity",renderHeaderCell(){return e.jsx(p,{className:we().ten,children:"Quantity"})},renderCell(n){return e.jsx(C,{className:we().ten,children:n.Quantity})}})];function cn({Items:n}){return e.jsx(k,{Items:n,Columns:on})}const ln=new x("Admin","Order","Detail","Shipment");function dn({OrderId:n,TrackingNumber:r,Refresh:s}){const[t,{setTrue:a,setFalse:o}]=$(),[c,l]=D.useState(r),{dispatch:d,dispatchToast:b}=N(ln),{run:m}=u.Order.Post.useShip({manual:!0,onError(j,y){d({Message:"Failed Update Tracking Number",Request:y,Error:j})},onSuccess(){b(e.jsx(g,{children:e.jsx(f,{children:"Tracking Number Updated"})}),{intent:"success"}),o(),s()}});return e.jsx(B,{label:"Shipment",size:"large",children:e.jsx(L,{value:c,disabled:!t,appearance:"underline",onChange:(j,y)=>l(y.value),placeholder:"Fill in this field to ship the order.",contentAfter:t?e.jsx(i,{appearance:"subtle",icon:e.jsx(Z,{}),onClick:()=>m(n,c)}):e.jsx(i,{appearance:"subtle",icon:e.jsx(H,{}),onClick:a})})})}const un=w({body:{...U,rowGap:S.spacingVerticalXL}}),J=new x("Admin","Order","Detail");function mn({OrderId:n}){const r=un(),[s,{setTrue:t,setFalse:a}]=$(),{Nav:o,Paths:c}=Y(),l=parseInt(c.at(2)),{data:d,run:b}=I(()=>u.Order.Get.Detail(n,J),{manual:!0,onError:J.error}),{data:m,run:j}=I(()=>u.Order.Get.Order(n),{onError(A){o("Admin","Order"),J.error(A)},manual:!0});function y(){j(),b()}return D.useEffect(()=>{l===n?(y(),t()):a()},[l]),e.jsxs(e.Fragment,{children:[e.jsx(i,{appearance:"subtle",icon:e.jsx(Ie,{}),onClick:()=>o("Admin","Order",n)}),e.jsxs(xe,{open:s,position:"end",size:"medium",modalType:"alert",children:[e.jsx(je,{children:e.jsx(pe,{action:e.jsx(i,{appearance:"subtle",icon:e.jsx(q,{}),onClick:()=>o("Admin","Order")}),children:"Order Detail"})}),e.jsxs(Ce,{className:r.body,children:[e.jsx(Ke,{OrderId:n,Order:m,Admin:!0}),e.jsx(B,{label:"Required Products",size:"large",children:e.jsx(cn,{Items:d?.ShopCart})}),e.jsx(dn,{OrderId:n,TrackingNumber:m?.TrackingNumber,Refresh:y}),e.jsx(Ze,{Comments:d?.Comments}),e.jsx(en,{OrderId:n,Status:m?.Status,Admin:!0,Refresh:y,ParentLog:J}),e.jsx(an,{OrderId:n,Status:m?.Status,Refresh:y})]})]})]})}const X=w({two:{flexBasis:"2.5%",flexGrow:0},twoc:{flexBasis:"2.5%",flexGrow:0,justifyContent:"center"},ten:{flexBasis:"10%",flexGrow:0},page:{...G,alignItems:"center",justifyContent:"flex-end",paddingTop:S.spacingVerticalXL,columnGap:S.spacingHorizontalM},spin:{width:"4rem"}}),K=new x("Admin","Order"),hn=[...nn(K).slice(0,-1),h({columnId:"User",renderHeaderCell:()=>e.jsx(p,{className:X().ten,children:"User"}),renderCell(n){return e.jsx(C,{className:X().ten,children:n.User})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:X().two,children:"Action"}),renderCell(n){return e.jsx(C,{className:X().twoc,children:e.jsx(mn,{OrderId:n.Id})})}})];function xn(){const n=X(),{data:r}=I(()=>u.Order.Get.Count(),{onError:K.error}),s=Math.ceil((r||1)/30),{data:t,run:a}=I(o=>u.Order.Get.List(o,K),{defaultParams:[1],debounceWait:300,onError:K.error});return e.jsxs(e.Fragment,{children:[e.jsx(k,{Items:t,Columns:hn}),e.jsxs("div",{className:n.page,children:[e.jsxs(O,{children:["Total ",r," Records"]}),e.jsx(ge,{min:1,max:s,defaultValue:1,className:n.spin,onChange:(o,c)=>{const l=parseInt(c.value||c.displayValue);!isNaN(l)&&l&&l<=s&&a(l)}}),e.jsx(O,{children:"/"}),e.jsx(O,{children:s})]})]})}const jn=w({body:{...G,alignItems:"center"},input:{flexGrow:1}}),ce=new x("Admin","Product","Detail","Category");function pn({ProdId:n}){const[r,s]=D.useState(""),[t,{setTrue:a,setFalse:o}]=$();I(()=>u.Product.Get.Category(n),{onSuccess(P){P&&s(P)},onError:ce.error});const{dispatch:c,dispatchToast:l}=N(ce),{run:d}=u.Product.Patch.useCategory({manual:!0,onError(P,v){c({Message:"Failed Update Category",Request:v,Error:P})},onSuccess(){l(e.jsx(g,{children:e.jsx(f,{children:"Category Updated"})}),{intent:"success"}),o()}}),{run:b}=u.Product.Delete.useCategory({manual:!0,onError(P,v){c({Message:"Failed Detach Category",Request:v,Error:P})},onSuccess(){l(e.jsx(g,{children:e.jsx(f,{children:"Category Detached"})}),{intent:"success"}),o()}}),{data:m}=I(()=>z.Gallery.Get.Categories(),{onSuccess(P){y(P)},onError:ce.error}),[j,y]=D.useState(m),[A,E]=D.useState(""),T=jn();return e.jsxs("div",{className:T.body,children:[e.jsx(O,{size:"large",disabled:!t,children:"Category"}),e.jsxs(fe,{className:T.input,size:"large",disabled:!t,freeform:!0,placeholder:r||"Pending",appearance:"underline",onChange:P=>{const v=P.target.value.trim(),R=m?.filter(He=>He.toLowerCase().indexOf(v.toLowerCase())===0);y(R),v&&R&&R.length<1?E(v):E("")},onOptionSelect:(P,v)=>{const R=v.optionText;s(R),R&&m?.includes(R)?E(""):E(R)},children:[A&&e.jsxs(Q,{text:A,children:['Create New "',A,'"']},A),j?.map(P=>e.jsx(Q,{children:P},P)),j?.length===m?.length?e.jsx(Q,{text:"",children:"Pending"},""):null]}),t?e.jsx(i,{appearance:"subtle",icon:e.jsx(Z,{}),onClick:()=>{r?d(n,r):b(n)}}):e.jsx(i,{appearance:"subtle",icon:e.jsx(H,{}),onClick:a})]})}const Cn=new x("Admin","Product","Detail","Combo","Delete");function gn({ComboId:n,Refresh:r}){const{dispatch:s,dispatchToast:t}=N(Cn),{run:a}=u.Product.Delete.useCombo({manual:!0,onError(o,c){s({Message:"Failed Delete Combo",Request:c,Error:o})},onSuccess(){t(e.jsx(g,{children:e.jsx(f,{children:"Combo Deleted"})}),{intent:"success"}),r()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(ee,{}),onClick:()=>a(n)})}const fn=[h({columnId:"Variant",renderHeaderCell:()=>e.jsx(p,{children:"Variant"}),renderCell(n){return e.jsx(C,{children:n.Name})}}),h({columnId:"Type",renderHeaderCell:()=>e.jsx(p,{children:"Type"}),renderCell(n){return e.jsx(C,{children:e.jsx(fe,{defaultValue:n.Current,defaultSelectedOptions:[n.Current],onOptionSelect:(r,s)=>n.Update(s.optionValue),children:n.Types.map((r,s)=>e.jsx(Q,{children:r},s))})})}})],bn=w({body:{...G,justifyContent:"flex-end",alignItems:"center",columnGap:S.spacingVerticalM,marginTop:S.spacingHorizontalM}}),le=new x("Admin","Product","Detail","Combo","Detail");function yn({Id:n,ProdId:r,Combo:s,Stock:t,Refresh:a}){const[o,{toggle:c}]=$(),[l,d]=D.useState(s),[b,m]=D.useState(t),{data:j}=I(()=>u.Product.Get.Variants(r,le),{onError:le.error}),{dispatch:y,dispatchToast:A}=N(le),{run:E}=u.Product.Patch.useCombo({manual:!0,onError(T,P){y({Message:"Failed Update Combo",Request:P,Error:T})},onSuccess(){A(e.jsx(g,{children:e.jsx(f,{children:"Combo Updated"})}),{intent:"success"}),a(),c()}});return e.jsxs(ne,{open:o,onOpenChange:c,children:[e.jsx(V,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(H,{})})}),e.jsx(se,{children:e.jsxs(re,{children:[e.jsx(te,{action:e.jsx(V,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(q,{})})}),children:"Combo Detail"}),e.jsxs(ae,{children:[e.jsx(k,{Items:j?.map(T=>({Current:l[T.Name],Update(P){l[T.Name]=P,d({...l})},...T})),Columns:fn}),e.jsxs("div",{className:bn().body,children:[e.jsx(O,{children:"Stock"}),e.jsx(ge,{value:b,min:0,onChange:(T,P)=>{const v=parseInt(P.value||P.displayValue);isNaN(v)||v<0||m(v)}}),e.jsx(i,{appearance:"primary",onClick:()=>E(n,l,b),children:"Submit"})]})]})]})})]})}const Pn=[h({columnId:"Variant",renderHeaderCell:()=>e.jsx(p,{children:"Variant"}),renderCell(n){return e.jsx(C,{children:n.Name})}}),h({columnId:"Type",renderHeaderCell:()=>e.jsx(p,{children:"Type"}),renderCell(n){return e.jsx(C,{children:e.jsx(fe,{onOptionSelect:(r,s)=>n.Update(s.optionValue),children:n.Types.map((r,s)=>e.jsx(Q,{children:r},s))})})}})],Nn=w({body:{...G,justifyContent:"flex-end",alignItems:"center",columnGap:S.spacingVerticalM,marginTop:S.spacingHorizontalM}}),ie=new x("Admin","Product","Detail","Combo","NewCombo");function An({ProdId:n,Refresh:r}){const[s,{toggle:t}]=$(),[a,o]=D.useState({}),[c,l]=D.useState(1),{data:d}=I(()=>u.Product.Get.Variants(n,ie),{onSuccess(y){for(const A of y)a[A.Name]="";o({...a})},onError:ie.error}),{dispatch:b,dispatchToast:m}=N(ie),{run:j}=u.Product.Post.useCombo({manual:!0,onError(y,A){b({Message:"Failed Create Combo",Request:A,Error:y})},onSuccess(){m(e.jsx(g,{children:e.jsx(f,{children:"Combo Created"})}),{intent:"success"}),r(),t()}});return e.jsxs(ne,{open:s,onOpenChange:t,children:[e.jsx(V,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"primary",icon:e.jsx(oe,{}),children:"New Combo"})}),e.jsx(se,{children:e.jsxs(re,{children:[e.jsx(te,{action:e.jsx(V,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(q,{})})}),children:"New Combo"}),e.jsxs(ae,{children:[e.jsx(k,{Items:d?.map(y=>({Update(A){a[y.Name]=A,o({...a})},...y})),Columns:Pn}),e.jsxs("div",{className:Nn().body,children:[e.jsx(O,{children:"Stock"}),e.jsx(ge,{value:c,min:0,onChange:(y,A)=>{const E=parseInt(A.value||A.displayValue);isNaN(E)||E<0||l(E)}}),e.jsx(i,{appearance:"primary",onClick:()=>j(n,a,c),children:"Create"})]})]})]})})]})}const F=w({body:{...G,justifyContent:"space-between"},four:{flexBasis:"4%",flexGrow:0},seven:{flexBasis:"7%",flexGrow:0},five:{flexBasis:"5%",flexGrow:0}}),De=new x("Admin","Product","Detail","Combo"),wn=[h({columnId:"Id",renderHeaderCell:()=>e.jsx(p,{className:F().four,children:"Id"}),renderCell(n){return e.jsx(C,{className:F().four,children:n.Id})}}),h({columnId:"Combo",renderHeaderCell:()=>e.jsx(p,{children:"Combo"}),renderCell(n){return e.jsx(C,{children:Object.entries(n.Combo).reduce((r,s)=>`${r} ${s[0]} : ${s[1]} ;`,"")})}}),h({columnId:"Stock",renderHeaderCell:()=>e.jsx(p,{className:F().five,children:"Stock"}),renderCell(n){return e.jsx(C,{className:F().five,children:n.Stock})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:F().seven,children:"Action"}),renderCell(n){return e.jsxs(C,{className:F().seven,children:[e.jsx(yn,{...n}),e.jsx(gn,{ComboId:n.Id,Refresh:n.Refresh})]})}})];function Dn({ProdId:n}){const{data:r,run:s}=I(()=>z.Product.Get.ComboItem(n,De),{onError:De.error});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:F().body,children:[e.jsx(be,{children:"Combo"}),e.jsx(An,{ProdId:n,Refresh:s})]}),e.jsx(k,{Items:r?.map(t=>({ProdId:n,Refresh:s,...t})),Columns:wn})]})}const Sn=new x("Admin","Product","Detail","Delete"),En=w({root:{...U,rowGap:S.spacingHorizontalS}});function Tn({ProdId:n}){const{Nav:r}=Y(),{dispatch:s,dispatchToast:t}=N(Sn),{run:a,loading:o}=u.Product.Delete.useProduct({manual:!0,onError(l,d){s({Message:"Failed Delete Product",Request:d,Error:l})},onSuccess(){t(e.jsx(g,{children:e.jsx(f,{children:"Product Deleted"})}),{intent:"success"}),r("/Admin")}}),c=En();return e.jsx("div",{children:e.jsxs(ye,{withArrow:!0,children:[e.jsx(Pe,{disableButtonEnhancement:!0,children:e.jsx(i,{children:"Delete Product"})}),e.jsxs(Ne,{className:c.root,children:["Are You Sure?",e.jsx(i,{disabled:o,appearance:"primary",onClick:()=>a(n),children:"Yes"})]})]})})}const vn=w({btn:{...G,columnGap:S.spacingVerticalS},drawer:{width:"1100px"}}),In=new x("Admin","Product","Lexical");function $n({ProdId:n}){const r=vn(),[s,{toggle:t,setTrue:a}]=$(),{data:o,run:c}=I(()=>z.Product.Get.Lexical(n)),{dispatch:l,dispatchToast:d}=N(In),{run:b}=u.Product.Post.useLexical({manual:!0,onError(m,j){l({Message:"Failed Update Description",Request:j,Error:m})},onSuccess(){d(e.jsx(g,{children:e.jsx(f,{children:"Description Updated"})}),{intent:"success"}),c(),t()}});return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(i,{onClick:()=>a(),children:"Open Description Editor"})}),e.jsxs(xe,{open:s,onOpenChange:t,position:"start",size:"large",modalType:"alert",className:r.drawer,children:[e.jsx(je,{children:e.jsx(pe,{action:e.jsxs("div",{className:r.btn,children:[e.jsx(i,{appearance:"primary",onClick:()=>b(n),children:"Save"}),e.jsx(i,{onClick:()=>t(),children:"Cancel"})]}),children:"Edit Product Description"})}),e.jsx(Ce,{children:e.jsx(sn,{State:o?.Description})})]})]})}const Se=new x("Admin","Product","Detail","Name");function kn({ProdId:n}){const[r,s]=D.useState(""),[t,{setTrue:a,setFalse:o}]=$(),{Nav:c}=Y();I(()=>u.Product.Get.Name(n),{onSuccess(m){s(m)},onError(m){c("Admin"),Se.error(m)}});const{dispatch:l,dispatchToast:d}=N(Se),{run:b}=u.Product.Patch.useName({manual:!0,onError(m,j){l({Message:"Failed Update Name",Request:j,Error:m})},onSuccess(){d(e.jsx(g,{children:e.jsx(f,{children:"Name Updated"})}),{intent:"success"}),o()}});return e.jsx(L,{size:"large",value:r,disabled:!t,appearance:"underline",onChange:(m,j)=>s(j.value),contentBefore:e.jsx($e,{children:"Name"}),contentAfter:t?e.jsx(i,{appearance:"subtle",icon:e.jsx(Z,{}),onClick:()=>b(n,r)}):e.jsx(i,{appearance:"subtle",icon:e.jsx(H,{}),onClick:a})})}const Gn=new x("Admin","Product","Detail","Photo","Edit","Caption");function Rn({Id:n,Caption:r}){const[s,t]=D.useState(r||""),{dispatch:a,dispatchToast:o}=N(Gn),{run:c}=u.Product.Patch.useCaption({manual:!0,onError(l,d){a({Message:"Failed Update Caption",Request:d,Error:l})},onSuccess(){o(e.jsx(g,{children:e.jsx(f,{children:"Caption Updated"})}),{intent:"success"})}});return e.jsxs(e.Fragment,{children:[e.jsx(B,{label:"Caption",children:e.jsx(L,{value:s,placeholder:"Write some infomation here?",onChange:(l,d)=>t(d.value)})}),e.jsx(i,{onClick:()=>c(n,s),children:"Save Caption"})]})}const Vn=new x("Admin","Product","Detail","Photo","Edit","Delete");function Hn({Id:n,ProductId:r}){const{dispatch:s,dispatchToast:t}=N(Vn),{run:a}=u.Product.Delete.usePhoto({manual:!0,onError(o,c){s({Message:"Failed Delete Photo",Request:c,Error:o})},onSuccess(){t(e.jsx(g,{children:e.jsx(f,{children:"Photo Deleted"})}),{intent:"success"})}});return e.jsx(i,{appearance:"primary",onClick:()=>a(r,n),children:"Delete"})}const Ee=new x("Admin","Product","Detail","Photo","Edit","Replace");function Un({Id:n}){const{dispatch:r,dispatchToast:s}=N(Ee),{run:t}=u.Product.Patch.usePhoto(Ee,{manual:!0,onBefore([a,o]){s(e.jsx(g,{children:e.jsxs(f,{children:["Uploading Photo ",o.name," for Product ",a," to replace ",n]})}),{intent:"info"})},onError(a,o){r({Message:"Failed Update Photo",Request:o,Error:a})},onSuccess(){s(e.jsx(g,{children:e.jsx(f,{children:"Photo Updated"})}),{intent:"success"})}});return e.jsx(i,{onClick:()=>{const a=document.createElement("input");a.type="file",a.accept="image/*",a.onchange=()=>{a.files&&t(n,a.files[0])},a.click()},children:"Replace"})}const Fn=w({box:{...G,columnGap:S.spacingHorizontalL},img:{...Ye,aspectRatio:"1",width:"50%"},cap:{...U,flexGrow:1,rowGap:S.spacingVerticalL}}),Mn=new x("Admin","Product","Detail","Photo","Edit");function On(n){const{Id:r,Cover:s}=n,t=Fn();return e.jsxs(ne,{children:[e.jsx(V,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(H,{})})}),e.jsx(se,{children:e.jsxs(re,{children:[e.jsx(te,{action:e.jsx(V,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(q,{})})}),children:"Image Detail"}),e.jsxs(ae,{className:t.box,children:[e.jsx(Je,{shape:"rounded",className:t.img,Guid:s,Log:Mn}),e.jsxs("div",{className:t.cap,children:[e.jsx(Rn,{...n}),e.jsx(Un,{Id:r}),e.jsx(Hn,{...n})]})]})]})})]})}const de=w({f11:{flexBasis:"11%",flexGrow:0},box:{...G,justifyContent:"space-between"}}),W=new x("Admin","Product","Detail","Photo"),Bn=[Ge(70,W),h({columnId:"Caption",renderHeaderCell:()=>e.jsx(p,{children:"Caption"}),renderCell(n){return e.jsx(C,{children:n.Caption||"No Caption"})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:de().f11,children:"Action"}),renderCell(n){const{dispatch:r}=N(W),{run:s}=u.Product.Post.useMovePhoto({manual:!0,onError(t,a){r({Message:"Failed Update Order",Request:a,Error:t})},onSuccess:Ln});return e.jsxs(C,{className:de().f11,children:[e.jsx(i,{appearance:"subtle",icon:e.jsx(Fe,{}),onClick:()=>s(n.Id,!0)}),e.jsx(i,{appearance:"subtle",icon:e.jsx(Me,{}),onClick:()=>s(n.Id,!1)}),e.jsx(On,{...n})]})}})];let Ln=()=>{};function qn({ProdId:n}){const r=Ue(async()=>{const[o]=await z.Product.Get.PhotoList(n,W);return o.map(l=>({Id:l.PhotoId,Cover:l.ObjectId,Caption:l.Caption,ProductId:l.ProductId}))}),{dispatch:s,dispatchToast:t}=N(W),{run:a}=u.Product.Post.usePhoto(W,{manual:!0,onBefore([o,c]){t(e.jsx(g,{children:e.jsxs(f,{children:["Uploading Photo ",c.name," for Product ",o]})}),{intent:"info"})},onError(o,c){s({Message:"Failed Upload Photo",Request:c,Error:o})},onSuccess(){t(e.jsx(g,{children:e.jsx(f,{children:"Photo Uploaded"})}),{intent:"success"})}});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:de().box,children:[e.jsx(be,{children:"Photos"}),e.jsx(i,{appearance:"primary",icon:e.jsx(oe,{}),onClick:()=>{const o=document.createElement("input");o.type="file",o.accept="image/*",o.onchange=()=>{o.files&&a(n,o.files[0])},o.click()},children:"New Image"})]}),e.jsx(k,{Items:r,Columns:Bn})]})}const zn=new x("Admin","Product","Detail","Variant","Delete");function _n({VariantId:n,Refresh:r}){const{dispatch:s,dispatchToast:t}=N(zn),{run:a}=u.Product.Delete.useVariant({manual:!0,onError(o,c){s({Message:"Failed Delete Variant",Request:c,Error:o})},onSuccess(){t(e.jsx(g,{children:e.jsx(f,{children:"Variant Deleted"})}),{intent:"success"}),r()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(ee,{}),onClick:()=>a(n)})}const Xn=new x("Admin","Product","Detail","Variant","Edit","TypeDelete");function Qn({VariantId:n,Type:r,Refresh:s}){const{dispatch:t,dispatchToast:a}=N(Xn),{run:o}=u.Product.Delete.useType({manual:!0,onError(c,l){t({Message:"Failed Delete Type",Request:l,Error:c})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Type Deleted"})}),{intent:"success"}),s()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(ee,{}),onClick:()=>o(n,r)})}const Wn=new x("Admin","Product","Detail","Variant","Edit","Name");function Yn({Id:n,Name:r}){const[s,t]=D.useState(r),[a,{setTrue:o,setFalse:c}]=$(),{dispatch:l,dispatchToast:d}=N(Wn),{run:b}=u.Product.Patch.useVariantName({manual:!0,onError(m,j){l({Message:"Failed Update Variant Name",Request:j[0],Error:m})},onSuccess(){d(e.jsx(g,{children:e.jsx(f,{children:"Variant Name Updated"})}),{intent:"success"}),c()}});return e.jsx(L,{size:"large",value:s,disabled:!a,appearance:"underline",onChange:(m,j)=>t(j.value),contentBefore:e.jsx($e,{children:"Name"}),contentAfter:a?e.jsx(i,{appearance:"subtle",icon:e.jsx(Z,{}),onClick:()=>b(n,s)}):e.jsx(i,{appearance:"subtle",icon:e.jsx(H,{}),onClick:o})})}const Jn=w({body:{...U,rowGap:S.spacingVerticalM}}),Kn=new x("Admin","Product","Detail","Variant","Edit","Type");function Re({VariantId:n,Type:r,Refresh:s,New:t}){const a=Jn(),[o,{toggle:c}]=$(),[l,d]=D.useState(r||""),{dispatch:b,dispatchToast:m}=N(Kn),j={manual:!0,onError(E,T){b({Message:`Failed ${t?"Create":"Update"} Type ${l}`,Request:T,Error:E})},onSuccess(E){m(e.jsxs(g,{children:[e.jsxs(f,{children:["Type ",t?"Created":"Updated"]}),e.jsxs(Oe,{children:[E," ",l]})]}),{intent:"success"}),s(),d(""),c()}},{run:y}=u.Product.Post.useType(j),{run:A}=u.Product.Patch.useType(j);return e.jsxs(ye,{withArrow:!0,open:o,onOpenChange:c,children:[e.jsx(Pe,{disableButtonEnhancement:!0,children:t?e.jsx(i,{icon:e.jsx(oe,{}),appearance:"primary",children:"New Type"}):e.jsx(i,{appearance:"subtle",icon:e.jsx(H,{})})}),e.jsxs(Ne,{className:a.body,children:[e.jsx(B,{label:"Type Name",children:e.jsx(L,{value:l,onChange:(E,T)=>d(T.value)})}),e.jsx(i,{onClick:()=>t?y(n,l):A(n,r,l),children:"Submit"})]})]})}const ue=w({body:{...U,rowGap:S.spacingVerticalM},twelve:{flexBasis:"12%",flexGrow:0}}),Zn=[h({columnId:"Name",renderHeaderCell:()=>e.jsx(p,{children:"Name"}),renderCell(n){return e.jsx(C,{children:n.Name})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:ue().twelve,children:"Action"}),renderCell(n){return e.jsxs(C,{className:ue().twelve,children:[e.jsx(Re,{VariantId:n.VariantId,Type:n.Name,Refresh:n.Refresh}),e.jsx(Qn,{VariantId:n.VariantId,Type:n.Name,Refresh:n.Refresh})]})}})];function es({Variant:n,Refresh:r}){return e.jsxs(ne,{children:[e.jsx(V,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(H,{})})}),e.jsx(se,{children:e.jsxs(re,{children:[e.jsx(te,{action:e.jsx(V,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"subtle",icon:e.jsx(q,{})})}),children:"Variant Detail"}),e.jsxs(ae,{className:ue().body,children:[e.jsx(Yn,{Id:n.Id,Name:n.Name}),e.jsx(k,{Items:n.Types.map((s,t)=>({Id:t,Name:s,VariantId:n.Id,Refresh:r})),Columns:Zn})]}),e.jsx(Be,{children:e.jsx(Re,{VariantId:n.Id,Refresh:r,New:!0})})]})})]})}const ns=w({body:{...U,rowGap:S.spacingVerticalM}}),ss=new x("Admin","Product","Detail","Variant","New");function rs({ProdId:n,Refresh:r}){const s=ns(),[t,{toggle:a}]=$(),[o,c]=D.useState(""),{dispatch:l,dispatchToast:d}=N(ss),{run:b}=u.Product.Post.useVariant({manual:!0,onError(m,j){l({Message:"Failed Create Variant",Request:j,Error:m})},onSuccess(){d(e.jsx(g,{children:e.jsx(f,{children:"Variant Created"})}),{intent:"success"}),r(),c(""),a()}});return e.jsxs(ye,{withArrow:!0,open:t,onOpenChange:a,children:[e.jsx(Pe,{disableButtonEnhancement:!0,children:e.jsx(i,{appearance:"primary",icon:e.jsx(oe,{}),children:"New Variant"})}),e.jsxs(Ne,{className:s.body,children:[e.jsx(B,{required:!0,label:"Variant Name",children:e.jsx(L,{value:o,onChange:(m,j)=>c(j.value)})}),e.jsx(i,{onClick:()=>b(n,o),children:"Add"})]})]})}const M=w({body:{...G,justifyContent:"space-between"},four:{flexBasis:"4%",flexGrow:0},seven:{flexBasis:"7%",flexGrow:0},twelve:{flexBasis:"12%",flexGrow:0}}),Te=new x("Admin","Product","Detail","Variant"),ts=[h({columnId:"Id",renderHeaderCell:()=>e.jsx(p,{className:M().four,children:"Id"}),renderCell(n){return e.jsx(C,{className:M().four,children:n.Id})}}),h({columnId:"Name",renderHeaderCell:()=>e.jsx(p,{className:M().twelve,children:"Name"}),renderCell(n){return e.jsx(C,{className:M().twelve,children:n.Name})}}),h({columnId:"Type",renderHeaderCell:()=>e.jsx(p,{children:"Type"}),renderCell(n){return e.jsx(C,{children:n.Types.reduce((r,s)=>`${r} ${s} ;`,"")})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:M().seven,children:"Action"}),renderCell(n){return e.jsxs(C,{className:M().seven,children:[e.jsx(es,{Variant:n,Refresh:me}),e.jsx(_n,{VariantId:n.Id,Refresh:me})]})}})];let me;function as({ProdId:n}){const r=M(),{data:s,run:t}=I(()=>u.Product.Get.Variants(n,Te),{onError:Te.error});return me=t,e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:r.body,children:[e.jsx(be,{children:"Variant"}),e.jsx(rs,{ProdId:n,Refresh:t})]}),e.jsx(k,{Items:s,Columns:ts})]})}const os=w({body:{...U,rowGap:S.spacingVerticalXL,paddingBottom:S.spacingVerticalXXXL}});function cs({ProdId:n}){const r=os(),[s,{setFalse:t,setTrue:a}]=$(),{Nav:o,Paths:c}=Y(),l=parseInt(c.at(1));return D.useEffect(()=>{l===n?a():t()},[c]),e.jsxs(e.Fragment,{children:[e.jsx(i,{appearance:"subtle",icon:e.jsx(Ie,{}),onClick:()=>{o("Admin",n),a()}}),e.jsxs(xe,{open:s,position:"end",size:"large",modalType:"alert",children:[e.jsx(je,{children:e.jsx(pe,{action:e.jsx(i,{appearance:"subtle",icon:e.jsx(q,{}),onClick:()=>{o("Admin"),t()}}),children:"Product Detail"})}),e.jsxs(Ce,{className:r.body,children:[e.jsx(kn,{ProdId:n}),e.jsx(pn,{ProdId:n}),e.jsx(qn,{ProdId:n}),e.jsx(as,{ProdId:n}),e.jsx(Dn,{ProdId:n}),e.jsx($n,{ProdId:n}),e.jsx(Tn,{ProdId:n})]})]})]})}const _=new x("Admin","Product","Row");function ls({item:n}){const[r,s]=D.useState(()=>({Id:n,Cover:"",Name:"Loading..."})),[t,{setTrue:a}]=$(),o=z.Product.Get;return Le(async()=>{const c=await o.Product(n).catch(_.error);if(!c)return _.warn(`Product ${n} Not Found`),a();let l={...r,Name:c.Name,Category:c.Category||"Pending"};s(l);const[d,b]=await o.PhotoList(n,_);b||_.warn(`Product ${n} has no photo`),s(l={...l,Cover:b});const m=await u.Product.Get.Count(n).catch(_.error);m&&s({...l,...m})},[]),t?null:e.jsx(ke,{children:({renderCell:c})=>c(r)},n)}const ve=w({two:{flexBasis:"2.5%",flexGrow:0},twoc:{flexBasis:"2.5%",flexGrow:0,justifyContent:"center"}}),Ve=new x("Admin","Product"),is=[Ge(50,Ve),h({columnId:"Product",renderHeaderCell:()=>e.jsx(p,{children:"Product"}),renderCell(n){return e.jsx(C,{children:e.jsx(Ae,{children:n.Name})})}}),h({columnId:"Category",renderHeaderCell:()=>e.jsx(p,{children:"Category"}),renderCell(n){return e.jsx(C,{children:e.jsx(Ae,{children:n.Category})})}}),h({columnId:"Variant",renderHeaderCell:()=>e.jsx(p,{children:"Variant"}),renderCell(n){return e.jsx(C,{children:n.Variant})}}),h({columnId:"Combo",renderHeaderCell:()=>e.jsx(p,{children:"Combo"}),renderCell(n){return e.jsx(C,{children:n.Combo})}}),h({columnId:"Stock",renderHeaderCell:()=>e.jsx(p,{children:"Stock"}),renderCell(n){return e.jsx(C,{children:n.Stock})}}),h({columnId:"Action",renderHeaderCell:()=>e.jsx(p,{className:ve().two,children:"Detail"}),renderCell(n){return e.jsx(C,{className:ve().twoc,children:e.jsx(cs,{ProdId:n.Id})})}})];function ds(){const n=u.Product.Get.useList(Ve);return e.jsxs(qe,{items:n?n.reverse():[],columns:is,children:[e.jsx(ze,{children:e.jsx(ke,{children:({renderHeaderCell:r})=>r()})}),e.jsx(_e,{children:r=>e.jsx(ls,{...r})}),!n&&e.jsx(Xe,{size:48})]})}const us=new x("Admin","User","Delete");function ms({UserId:n,Refresh:r}){const{dispatch:s,dispatchToast:t}=N(us),{run:a}=u.User.Delete.useUser({manual:!0,onError(o,c){s({Message:"Failed Delete User",Request:c,Error:o})},onSuccess(){t(e.jsx(g,{children:e.jsx(f,{children:"User Deleted"})}),{intent:"success"}),r()}});return e.jsx(i,{appearance:"subtle",icon:e.jsx(ee,{}),onClick:()=>a(n)})}const hs=new x("Admin","User","Grant");function xs({UserId:n,Admin:r,Refresh:s}){const{dispatch:t,dispatchToast:a}=N(hs),{run:o}=u.User.Post.useAdmin({manual:!0,onError(l,d){t({Message:"Failed Grant Admin",Request:d,Error:l})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Admin Granted"})}),{intent:"success"}),s()}}),{run:c}=u.User.Delete.useAdmin({manual:!0,onError(l,d){t({Message:"Failed Revoke Admin",Request:d,Error:l})},onSuccess(){a(e.jsx(g,{children:e.jsx(f,{children:"Admin Revoked"})}),{intent:"success"}),s()}});return e.jsx(Qe,{checked:r,onChange:(l,d)=>{d.checked?o(n):c(n)}})}const js=new x("Admin","User"),ps=[h({columnId:"Id",renderHeaderCell:()=>"Id",renderCell(n){return n.Id}}),h({columnId:"Name",renderHeaderCell:()=>"Real Name",renderCell(n){return n.Name}}),h({columnId:"Email",renderHeaderCell:()=>"E-Mail",renderCell(n){return n.EMail}}),h({columnId:"Admin",renderHeaderCell:()=>"Admin",renderCell(n){return e.jsx(xs,{UserId:n.Id,Admin:n.Admin,Refresh:he})}}),h({columnId:"Delete",renderHeaderCell:()=>"Delete",renderCell(n){return e.jsx(ms,{UserId:n.Id,Refresh:he})}})].map(({renderHeaderCell:n,renderCell:r,...s})=>({...s,renderHeaderCell:()=>e.jsx(p,{children:n()}),renderCell:t=>e.jsx(C,{children:r(t)})}));let he;function Cs(){const{data:n,run:r}=I(()=>u.User.Get.List(),{onError:js.error});return he=r,e.jsx(k,{Items:n,Columns:ps})}const gs=new x("Admin");function Ns(){const{Paths:n,Nav:r}=Y(),s=n.at(1),t=D.useMemo(()=>{switch(s){case"Order":return e.jsx(xn,{});case"User":return e.jsx(Cs,{});default:return e.jsx(ds,{})}},[s]),a=z.User.Get.useMe(gs);return a?a.Admin?t:r("/"):e.jsx(We,{size:"huge",label:"Authenticating..."})}export{Ns as default};
