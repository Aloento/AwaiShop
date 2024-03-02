import{x as k,m as S,r as F,j as e,T as v,b as D,F as u,al as Q,B as p,L as b,aP as U,aQ as V,t as P,v as W,a9 as h,aa as x,ab as m,p as z,I as J,aJ as X,aK as _,J as K,ac as Y,ad as Z,aR as ee,aN as se,ag as re,ah as ne,ai as te,aj as ae,ak as le}from"./vendor-BRd9sncS.js";import{S as ce,H as g,g as ie,A as T,F as M,f as E,a as R,c as I,L as $,e as A,M as de}from"./index-CPdKjF50.js";function w(s,r,n){const a=k(()=>ce.Index(s,g.Order.Get.order));return ie(a,()=>(r?T:g).Order.Get.Order(s),{...n,useMemory:!0})}const oe=S({body:{...M,justifyContent:"space-between"}});function ue({OrderId:s,Refresh:r,Admin:n,ParentLog:a}){const t=k(()=>a.With("Append")),i=oe(),[l,d]=F.useState(),{dispatch:o,dispatchToast:c}=E(t),{run:j,loading:N}=(n?T:g).Order.Post.useAppend({manual:!0,onError(O,f){o({Message:"Failed Append Comment",Request:f,Error:O})},onSuccess(){c(e.jsx(v,{children:e.jsx(D,{children:"Comment Appended"})}),{intent:"success"}),r(),d("")}}),{data:C,mutate:B}=w(s,n),{run:q,loading:L}=(n?T:g).Order.Post.useCancel({manual:!0,onError(O,f){o({Message:`Failed ${n?"Close":"Cancel"} Order`,Request:f,Error:O})},onSuccess(O){c(e.jsx(v,{children:e.jsxs(D,{children:["Order ",n?"Closed":"Cancelled"]})}),{intent:"success"}),B(f=>({...f,Status:O}))}});switch(C?.Status){case"Cancelled":case"Finished":return null}return e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Append",size:"large",children:e.jsx(Q,{value:l,onChange:(O,f)=>d(f.value),maxLength:1e3})}),e.jsxs("div",{className:i.body,children:[!(C?.Status==="Finished"||C?.Status==="Returning")&&e.jsxs(p,{onClick:()=>q(s,l),disabled:L,children:[n?"Force Close":C?.Status==="Shipping"?"Ask Return":"Cancel Order"," with Reason"]}),e.jsx(p,{appearance:"primary",onClick:()=>j(s,l),disabled:N,children:"Add Comment"})]})]})}function xe({OrderId:s,Admin:r,ParentLog:n}){const a=k(()=>n.With("Comment")),{data:t,refresh:i}=g.Order.Get.useCmts(s,a,r);return e.jsxs(e.Fragment,{children:[e.jsx(u,{label:"Comment",size:"large",children:t?.length===0?e.jsx(b,{children:"No Comment"}):t?.map((l,d)=>e.jsxs("div",{children:[e.jsxs(U,{children:[l.User," ",l.Time.toLocaleString()]}),e.jsx("br",{}),e.jsx(V,{children:l.Content})]},d))}),e.jsx(ue,{OrderId:s,Refresh:i,ParentLog:a,Admin:r})]})}const he=S({flex:M,box:{...R,flexBasis:"50%",rowGap:P.spacingVerticalM}});function je({OrderId:s,Admin:r,ParentLog:n}){const a=k(()=>n.With("Info")),t=he(),{Nav:i}=I(),{data:l}=w(s,r,{onError(j){i(r?"Admin/Order":"History"),n.error(j)}}),{data:d}=W(()=>T.User.Get.OrderUser(s),{manual:!r,onError:a.error}),{data:o}=g.User.Get.useMe(a,r),c=r?d:o;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:t.flex,children:[e.jsx("div",{className:t.box,children:e.jsx(u,{label:"Name",size:"large",children:e.jsx(b,{children:c?.Name})})}),e.jsx("div",{className:t.box,children:e.jsx(u,{label:"Phone",size:"large",children:e.jsx(b,{children:c?.Phone})})})]}),e.jsxs("div",{className:t.flex,children:[e.jsx("div",{className:t.box,children:e.jsx(u,{label:"Order Date",size:"large",children:e.jsx(b,{children:l?.CreateAt.toLocaleDateString()})})}),e.jsx("div",{className:t.box,children:e.jsx(u,{label:"Status",size:"large",children:e.jsx(b,{children:l?.Status})})})]}),e.jsxs("div",{className:t.flex,children:[e.jsx("div",{className:t.box,children:e.jsx(u,{label:"E-Mail",size:"large",children:e.jsx(b,{children:c?.EMail})})}),!r&&e.jsx("div",{className:t.box,children:e.jsx(u,{label:"Tracking Number",size:"large",children:e.jsx(b,{children:l?.TrackingNumber})})})]}),e.jsx(u,{label:"Address",size:"large",children:e.jsx(b,{children:c?.Address})})]})}const me=S({body:{...R,alignItems:"flex-start"}}),pe=new $("Admin","Order","Detail","Action");function ge({OrderId:s}){const r=me(),{dispatch:n,dispatchToast:a}=E(pe),{data:t,mutate:i}=w(s,!0),{run:l}=T.Order.Post.useAccept({manual:!0,onError(d,o){n({Message:"Failed Accept Order",Request:o,Error:d})},onSuccess(){a(e.jsx(v,{children:e.jsx(D,{children:"Order Accepted"})}),{intent:"success"}),i(d=>({...d,Status:"Processing"}))}});switch(t?.Status){case"Processing":case"Shipping":case"Finished":case"Cancelled":case"Returning":return null}return e.jsx(u,{label:"Action",size:"large",children:e.jsx("div",{className:r.body,children:t?.Status==="Pending"&&e.jsx(p,{appearance:"subtle",onClick:()=>l(s),children:"Accept Order"})})})}const G=S({ten:{flexBasis:"10%",flexGrow:0}}),Ce=[h({columnId:"Product",renderHeaderCell(){return e.jsx(x,{children:"Name"})},renderCell(s){return e.jsx(m,{children:s.Name})}}),h({columnId:"Type",renderHeaderCell(){return e.jsx(x,{children:"Type"})},renderCell(s){return e.jsx(m,{children:Object.entries(s.Type).reduce((r,n)=>`${r} ${n[0]} : ${n[1]} ;`,"")})}}),h({columnId:"Quantity",renderHeaderCell(){return e.jsx(x,{className:G().ten,children:"Quantity"})},renderCell(s){return e.jsx(m,{className:G().ten,children:s.Quantity})}})];function be({Items:s}){return e.jsx(u,{label:"Required Products",size:"large",children:e.jsx(A,{Items:s,Columns:Ce})})}const ye=new $("Admin","Order","Detail","Shipment");function fe({OrderId:s}){const[r,{setTrue:n,setFalse:a}]=z(),{dispatch:t,dispatchToast:i}=E(ye),{data:l,mutate:d}=w(s,!0),[o,c]=F.useState(l?.TrackingNumber),{run:j}=T.Order.Post.useShip({manual:!0,onError(N,C){t({Message:"Failed Update Tracking Number",Request:C,Error:N})},onSuccess(){i(e.jsx(v,{children:e.jsx(D,{children:"Tracking Number Updated"})}),{intent:"success"}),a(),d(N=>({...N,TrackingNumber:o}))}});return e.jsx(u,{label:"Shipment",size:"large",children:e.jsx(J,{value:o,disabled:!r,appearance:"underline",onChange:(N,C)=>c(C.value),placeholder:"Fill in this field to ship the order.",contentAfter:r?e.jsx(p,{appearance:"subtle",icon:e.jsx(X,{}),onClick:()=>j(s,o)}):e.jsx(p,{appearance:"subtle",icon:e.jsx(_,{}),onClick:n})})})}const Se=S({body:{...R,alignItems:"flex-start"}}),Ne=new $("History","Detail","Action");function Oe({OrderId:s}){const r=Se(),{Reload:n}=I(),{data:a,mutate:t}=w(s),{dispatch:i,dispatchToast:l}=E(Ne),{run:d}=g.Order.Post.useReceived({manual:!0,onError(c,j){i({Message:"Failed Mark Receive",Request:j,Error:c})},onSuccess(){l(e.jsx(v,{children:e.jsx(D,{children:"Order Received"})}),{intent:"success"}),t(c=>({...c,Status:"Finished"}))}}),{run:o}=g.Order.Delete.useDelete({manual:!0,onError(c,j){i({Message:"Failed Delete Order",Request:j,Error:c})},onSuccess(){l(e.jsx(v,{children:e.jsx(D,{children:"Order Deleted"})}),{intent:"success"}),n("History")}});switch(a?.Status){case"Pending":case"Processing":case"Finished":case"Returning":return null}return e.jsx(u,{label:"Action",size:"large",children:e.jsxs("div",{className:r.body,children:[a?.Status==="Cancelled"&&e.jsx(p,{appearance:"subtle",onClick:()=>o(s),children:"Delete Order"}),a?.Status==="Shipping"&&e.jsx(p,{appearance:"subtle",onClick:()=>d(s),children:"I Received Order"})]})})}const H=S({body:{...R,rowGap:P.spacingVerticalL,paddingBottom:P.spacingVerticalXXL},prod:{...R,alignItems:"flex-start",justifyContent:"center"},qua:{flexBasis:"10%",flexGrow:0,justifyContent:"center"}}),ve=[h({columnId:"Product",renderHeaderCell(){return e.jsx(x,{children:"Product Name & Types"})},renderCell(s){return e.jsxs(m,{className:H().prod,children:[e.jsx(K,{href:`/Product/${s.ProdId}`,appearance:"subtle",children:e.jsx(Y,{children:s.Name})}),e.jsx(Z,{children:Object.values(s.Type).reduce((r,n)=>`${r} ${n},`,"")})]})}}),h({columnId:"Quantity",renderHeaderCell(){return e.jsx(x,{className:H().qua,children:"Quantity"})},renderCell(s){return e.jsx(m,{className:H().qua,children:s.Quantity})}})];function De({OrderId:s,Admin:r,ParentLog:n}){const a=H(),{data:t}=g.Order.Get.useItems(s,n,r);return e.jsxs("div",{className:a.body,children:[e.jsx(je,{OrderId:s,Admin:r,ParentLog:n}),r?e.jsxs(e.Fragment,{children:[e.jsx(be,{Items:t}),e.jsx(fe,{OrderId:s})]}):e.jsx(A,{Items:t,Columns:[de(44,n,i=>i.Cover),...ve]}),e.jsx(xe,{OrderId:s,ParentLog:n,Admin:r}),r?e.jsx(ge,{OrderId:s}):e.jsx(Oe,{OrderId:s})]})}function Te({OrderId:s,Admin:r,ParentLog:n}){const a=k(()=>n.With("Detail")),[t,{set:i}]=z(),{Nav:l,Paths:d}=I(),o=parseInt(d.at(r?2:1));F.useEffect(()=>i(o===s),[o]);const c=F.useRef(null),[j]=ee(c);return e.jsxs(e.Fragment,{children:[e.jsx(p,{appearance:"subtle",icon:e.jsx(se,{}),onClick:()=>l(r?"Admin/Order":"History",s)}),e.jsxs(re,{open:t,position:"end",size:"medium",modalType:"alert",children:[e.jsx(ne,{children:e.jsx(te,{action:e.jsx(p,{appearance:"subtle",icon:e.jsx(ae,{}),onClick:()=>l(r?"Admin/Order":"History")}),children:"Order Detail"})}),e.jsx(le,{ref:c,children:j&&e.jsx(De,{OrderId:s,ParentLog:a,Admin:r})})]})]})}const y=S({five:{flexBasis:"5%",flexGrow:0},ten:{flexBasis:"10%",flexGrow:0},two:{flexBasis:"2.5%",flexGrow:0}}),Re=[h({columnId:"OrderId",renderHeaderCell:()=>e.jsx(x,{className:y().five,children:"Order Id"}),renderCell(s){return e.jsx(m,{className:y().five,children:s.Id})}}),h({columnId:"Products",renderHeaderCell:()=>e.jsx(x,{children:"Products"}),renderCell(s){return e.jsxs(m,{children:[s.Items[0]," ",s.Items.length>1&&`& +${s.Items.length-1}`]})}}),h({columnId:"OrderDate",renderHeaderCell:()=>e.jsx(x,{children:"Order Date"}),renderCell(s){return e.jsx(x,{children:s.OrderDate.toLocaleDateString()})}}),h({columnId:"TrackNumber",renderHeaderCell:()=>e.jsx(x,{children:"Track Number"}),renderCell(s){return e.jsx(m,{children:s.TrackNumber})}}),h({columnId:"Quantity",renderHeaderCell:()=>e.jsx(x,{className:y().ten,children:"Quantity"}),renderCell(s){return e.jsx(m,{className:y().ten,children:s.Quantity})}}),h({columnId:"Status",renderHeaderCell:()=>e.jsx(x,{className:y().ten,children:"Order State"}),renderCell(s){return e.jsx(m,{className:y().ten,children:s.Status})}})];function He(s){return[...Re,h({columnId:"Detail",renderHeaderCell:()=>e.jsx(x,{className:y().two,children:"Detail"}),renderCell(r){return e.jsx(m,{className:y().two,children:e.jsx(Te,{OrderId:r.Id,ParentLog:s})})}})]}export{He as H,Te as O};