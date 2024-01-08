import{m as D,t as E,x as R,j as e,F as c,L as u,y as w,T as v,b as S,B as N,r as F,ag as A,aL as M,aM as z,o as B,aF as $,ab as q,ac as Q,ad as U,ae as W,af as V,a4 as i,a5 as d,a6 as h,G as _,a7 as J,a8 as K}from"./vendor-4drOEEjM.js";import{L as X,F as I,a as H,A as Y,H as f,c as P,e as G,f as Z,M as ee}from"./index-6j_WgBnt.js";const re=D({flex:I,box:{...H,flexBasis:"50%",rowGap:E.spacingVerticalM}}),k=new X("Order","Info");function se({OrderId:r,Order:s,Admin:n}){const a=re(),{data:j}=R(()=>Y.User.Get.OrderUser(r),{manual:!n,onError:k.error}),{data:m}=f.User.Get.useMe(k,{manual:n}),l=n?j:m;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:a.flex,children:[e.jsx("div",{className:a.box,children:e.jsx(c,{label:"Name",size:"large",children:e.jsx(u,{children:l?.Name})})}),e.jsx("div",{className:a.box,children:e.jsx(c,{label:"Phone",size:"large",children:e.jsx(u,{children:l?.Phone})})})]}),e.jsxs("div",{className:a.flex,children:[e.jsx("div",{className:a.box,children:e.jsx(c,{label:"Order Date",size:"large",children:e.jsx(u,{children:s?.CreateAt.toLocaleDateString()})})}),e.jsx("div",{className:a.box,children:e.jsx(c,{label:"Status",size:"large",children:e.jsx(u,{children:s?.Status})})})]}),e.jsxs("div",{className:a.flex,children:[e.jsx("div",{className:a.box,children:e.jsx(c,{label:"E-Mail",size:"large",children:e.jsx(u,{children:l?.EMail})})}),!n&&e.jsx("div",{className:a.box,children:e.jsx(c,{label:"Tracking Number",size:"large",children:e.jsx(u,{children:s?.TrackingNumber})})})]}),e.jsx(c,{label:"Address",size:"large",children:e.jsx(u,{children:l?.Address})})]})}const ne=D({body:{...H,alignItems:"flex-start"}});function ae({OrderId:r,Status:s,Refresh:n,ParentLog:a}){const j=w(()=>a.With("Action")),m=ne(),{Reload:l}=P(),{dispatch:o,dispatchToast:p}=G(j),{run:C}=f.Order.Post.useReceived({manual:!0,onError(g,t){o({Message:"Failed Mark Receive",Request:t,Error:g})},onSuccess(){p(e.jsx(v,{children:e.jsx(S,{children:"Order Received"})}),{intent:"success"}),n()}}),{run:y}=f.Order.Delete.useDelete({manual:!0,onError(g,t){o({Message:"Failed Delete Order",Request:t,Error:g})},onSuccess(){p(e.jsx(v,{children:e.jsx(S,{children:"Order Deleted"})}),{intent:"success"}),l("History")}});switch(s){case"Pending":case"Processing":case"Finished":case"Returning":return null}return e.jsx(c,{label:"Action",size:"large",children:e.jsxs("div",{className:m.body,children:[s==="Cancelled"&&e.jsx(N,{appearance:"subtle",onClick:()=>y(r),children:"Delete Order"}),s==="Shipping"&&e.jsx(N,{appearance:"subtle",onClick:()=>C(r),children:"I Received Order"})]})})}const le=D({body:{...I,justifyContent:"space-between"}});function te({OrderId:r,Status:s,Refresh:n,ParentLog:a}){const j=w(()=>a.With("Append")),m=le(),[l,o]=F.useState(),{dispatch:p,dispatchToast:C}=G(j),{run:y}=f.Order.Post.useAppend({manual:!0,onError(t,b){p({Message:"Failed Append Comment",Request:b,Error:t})},onSuccess(){C(e.jsx(v,{children:e.jsx(S,{children:"Comment Appended"})}),{intent:"success"}),n()}}),{run:g}=f.Order.Post.useCancel({manual:!0,onError(t,b){p({Message:"Failed Cancel Order",Request:b,Error:t})},onSuccess(){C(e.jsx(v,{children:e.jsx(S,{children:"Order Canceled"})}),{intent:"success"}),n()}});switch(s){case"Cancelled":case"Finished":return null}return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Append",size:"large",children:e.jsx(A,{value:l,onChange:(t,b)=>o(b.value),maxLength:1e3})}),e.jsxs("div",{className:m.body,children:[!(s==="Finished"||s==="Returning")&&e.jsxs(N,{onClick:()=>g(r,l),children:[s==="Shipping"?"Ask Return":"Cancel Order"," with Reason"]}),e.jsx(N,{appearance:"primary",onClick:()=>y(r,l),children:"Add Comment"})]})]})}function ce({Comments:r}){return e.jsx(c,{label:"Comment",size:"large",children:r?.length===0?e.jsx(u,{children:"No Comment"}):r?.map((s,n)=>e.jsxs("div",{children:[e.jsxs(M,{children:[s.User," ",s.Time.toLocaleString()]}),e.jsx("br",{}),e.jsx(z,{children:s.Content})]},n))})}const O=D({body:{...H,rowGap:E.spacingVerticalL},prod:{...H,alignItems:"flex-start",justifyContent:"center"},qua:{flexBasis:"10%",flexGrow:0,justifyContent:"center"}}),de=[i({columnId:"Product",renderHeaderCell(){return e.jsx(d,{children:"Product Name & Types"})},renderCell(r){return e.jsxs(h,{className:O().prod,children:[e.jsx(_,{href:`/Product/${r.ProdId}`,appearance:"subtle",children:e.jsx(J,{children:r.Name})}),e.jsx(K,{children:Object.values(r.Type).reduce((s,n)=>`${s} ${n},`,"")})]})}}),i({columnId:"Quantity",renderHeaderCell(){return e.jsx(d,{className:O().qua,children:"Quantity"})},renderCell(r){return e.jsx(h,{className:O().qua,children:r.Quantity})}})];function ie({OrderId:r,ParentLog:s}){const n=w(()=>s.With("Detail")),a=O(),[j,{setTrue:m,setFalse:l}]=B(),{Nav:o,Paths:p}=P(),C=parseInt(p.at(1)),{data:y,run:g}=R(()=>f.Order.Get.Detail(r,n),{manual:!0,onError:n.error}),{data:t,run:b}=R(()=>f.Order.Get.Order(r),{onError(L){o("History"),n.error(L)},manual:!0});function T(){b(),g()}return F.useEffect(()=>{C===r?(T(),m()):l()},[C]),e.jsxs(e.Fragment,{children:[e.jsx(N,{appearance:"subtle",icon:e.jsx($,{}),onClick:()=>o("History",r)}),e.jsxs(q,{open:j,position:"end",size:"medium",modalType:"alert",children:[e.jsx(Q,{children:e.jsx(U,{action:e.jsx(N,{appearance:"subtle",icon:e.jsx(W,{}),onClick:()=>o("History")}),children:"Order Detail"})}),e.jsx(V,{children:e.jsxs("div",{className:a.body,children:[e.jsx(se,{OrderId:r,Order:t}),e.jsx(Z,{Items:y?.ShopCart||[],Columns:[ee(44,n),...de]}),e.jsx(ce,{Comments:y?.Comments}),e.jsx(te,{OrderId:r,Status:t?.Status,Refresh:T,ParentLog:n}),e.jsx(ae,{OrderId:r,Status:t?.Status,Refresh:T,ParentLog:n})]})})]})]})}const x=D({five:{flexBasis:"5%",flexGrow:0},ten:{flexBasis:"10%",flexGrow:0},two:{flexBasis:"2.5%",flexGrow:0}}),oe=[i({columnId:"OrderId",renderHeaderCell:()=>e.jsx(d,{className:x().five,children:"Order Id"}),renderCell(r){return e.jsx(h,{className:x().five,children:r.Id})}}),i({columnId:"Products",renderHeaderCell:()=>e.jsx(d,{children:"Products"}),renderCell(r){return e.jsxs(h,{children:[r.Items[0]," ",r.Items.length>1&&`& +${r.Items.length-1}`]})}}),i({columnId:"OrderDate",renderHeaderCell:()=>e.jsx(d,{children:"Order Date"}),renderCell(r){return e.jsx(d,{children:r.OrderDate.toLocaleDateString()})}}),i({columnId:"TrackNumber",renderHeaderCell:()=>e.jsx(d,{children:"Track Number"}),renderCell(r){return e.jsx(h,{children:r.TrackNumber})}}),i({columnId:"Quantity",renderHeaderCell:()=>e.jsx(d,{className:x().ten,children:"Quantity"}),renderCell(r){return e.jsx(h,{className:x().ten,children:r.Quantity})}}),i({columnId:"Status",renderHeaderCell:()=>e.jsx(d,{className:x().ten,children:"Order State"}),renderCell(r){return e.jsx(h,{className:x().ten,children:r.Status})}})];function he(r){return[...oe,i({columnId:"Detail",renderHeaderCell:()=>e.jsx(d,{className:x().two,children:"Detail"}),renderCell(s){return e.jsx(h,{className:x().two,children:e.jsx(ie,{OrderId:s.Id,ParentLog:r})})}})]}export{he as H,se as O,ce as a};
