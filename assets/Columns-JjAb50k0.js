import{_ as T,c as E,m as v,L,F as P,d as k,t as z,b as O,aa as q,H as y,j as e,ad as c,at as u,aU as H,h as F,a9 as I,ab as B,ac as D,g as N,r as G,ae as M,aj as $,an as Q,ao as W,ap as U,aq as _,ar as V,as as J,af as K,aE as X,ag as o,ah as i,ai as x,aV as Y,aM as Z,aW as ee}from"./index-h_XmP7yR.js";const re={root:"fui-Body1"},se=T({root:{Bahqtrf:"fk6fouc",Be2twd7:"fkhj508",Bhrd7zp:"figsok6",Bg96gwp:"f1i3iumi"}},{d:[".fk6fouc{font-family:var(--fontFamilyBase);}",".fkhj508{font-size:var(--fontSizeBase300);}",".figsok6{font-weight:var(--fontWeightRegular);}",".f1i3iumi{line-height:var(--lineHeightBase300);}"]}),ae=E({useStyles:se,className:re.root,displayName:"Body1"}),ne={root:"fui-Caption1Stronger"},te=T({root:{Bahqtrf:"fk6fouc",Be2twd7:"fy9rknc",Bhrd7zp:"flh3ekv",Bg96gwp:"fwrc4pm"}},{d:[".fk6fouc{font-family:var(--fontFamilyBase);}",".fy9rknc{font-size:var(--fontSizeBase200);}",".flh3ekv{font-weight:var(--fontWeightBold);}",".fwrc4pm{line-height:var(--lineHeightBase200);}"]}),le=E({useStyles:te,className:ne.root,displayName:"Caption1Stronger"}),ce=v({flex:P,box:{...k,flexBasis:"50%",rowGap:z.spacingVerticalM}}),R=new L("Order","Info");function ie({OrderId:r,Order:s,Admin:a}){const n=ce(),{data:m}=O(()=>q.User.Get.OrderUser(r),{manual:!a,onError:R.error}),{data:j}=y.User.Get.useMe(R,{manual:a}),t=a?m:j;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:n.flex,children:[e.jsx("div",{className:n.box,children:e.jsx(c,{label:"Name",size:"large",children:e.jsx(u,{children:t?.Name})})}),e.jsx("div",{className:n.box,children:e.jsx(c,{label:"Phone",size:"large",children:e.jsx(u,{children:t?.Phone})})})]}),e.jsxs("div",{className:n.flex,children:[e.jsx("div",{className:n.box,children:e.jsx(c,{label:"Order Date",size:"large",children:e.jsx(u,{children:s?.CreateAt.toLocaleDateString()})})}),e.jsx("div",{className:n.box,children:e.jsx(c,{label:"Status",size:"large",children:e.jsx(u,{children:s?.Status})})})]}),e.jsxs("div",{className:n.flex,children:[e.jsx("div",{className:n.box,children:e.jsx(c,{label:"E-Mail",size:"large",children:e.jsx(u,{children:t?.EMail})})}),!a&&e.jsx("div",{className:n.box,children:e.jsx(c,{label:"Tracking Number",size:"large",children:e.jsx(u,{children:s?.TrackingNumber})})})]}),e.jsx(c,{label:"Address",size:"large",children:e.jsx(u,{children:t?.Address})})]})}const oe=v({body:{...k,alignItems:"flex-start"}});function de({OrderId:r,Status:s,Refresh:a,ParentLog:n}){const m=H(()=>n.With("Action")),j=oe(),{Reload:t}=F(),{dispatch:d,dispatchToast:f}=I(m),{run:g}=y.Order.Post.useReceived({manual:!0,onError(p,l){d({Message:"Failed Mark Receive",Request:l,Error:p})},onSuccess(){f(e.jsx(B,{children:e.jsx(D,{children:"Order Received"})}),{intent:"success"}),a()}}),{run:b}=y.Order.Delete.useDelete({manual:!0,onError(p,l){d({Message:"Failed Delete Order",Request:l,Error:p})},onSuccess(){f(e.jsx(B,{children:e.jsx(D,{children:"Order Deleted"})}),{intent:"success"}),t("History")}});switch(s){case"Pending":case"Processing":case"Finished":case"Returning":return null}return e.jsx(c,{label:"Action",size:"large",children:e.jsxs("div",{className:j.body,children:[s==="Cancelled"&&e.jsx(N,{appearance:"subtle",onClick:()=>b(r),children:"Delete Order"}),s==="Shipping"&&e.jsx(N,{appearance:"subtle",onClick:()=>g(r),children:"I Received Order"})]})})}const ue=v({body:{...P,justifyContent:"space-between"}});function he({OrderId:r,Status:s,Refresh:a,ParentLog:n}){const m=H(()=>n.With("Append")),j=ue(),[t,d]=G.useState(),{dispatch:f,dispatchToast:g}=I(m),{run:b}=y.Order.Post.useAppend({manual:!0,onError(l,C){f({Message:"Failed Append Comment",Request:C,Error:l})},onSuccess(){g(e.jsx(B,{children:e.jsx(D,{children:"Comment Appended"})}),{intent:"success"}),a()}}),{run:p}=y.Order.Post.useCancel({manual:!0,onError(l,C){f({Message:"Failed Cancel Order",Request:C,Error:l})},onSuccess(){g(e.jsx(B,{children:e.jsx(D,{children:"Order Canceled"})}),{intent:"success"}),a()}});switch(s){case"Cancelled":case"Finished":return null}return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Append",size:"large",children:e.jsx(M,{value:t,onChange:(l,C)=>d(C.value),maxLength:1e3})}),e.jsxs("div",{className:j.body,children:[!(s==="Finished"||s==="Returning")&&e.jsxs(N,{onClick:()=>p(r,t),children:[s==="Shipping"?"Ask Return":"Cancel Order"," with Reason"]}),e.jsx(N,{appearance:"primary",onClick:()=>b(r,t),children:"Add Comment"})]})]})}function xe({Comments:r}){return e.jsx(c,{label:"Comment",size:"large",children:r?.length===0?e.jsx(u,{children:"No Comment"}):r?.map((s,a)=>e.jsxs("div",{children:[e.jsxs(le,{children:[s.User," ",s.Time.toLocaleString()]}),e.jsx("br",{}),e.jsx(ae,{children:s.Content})]},a))})}const S=v({body:{...k,rowGap:z.spacingVerticalL},prod:{...k,alignItems:"flex-start",justifyContent:"center"},qua:{flexBasis:"10%",flexGrow:0,justifyContent:"center"}}),me=[o({columnId:"Product",renderHeaderCell(){return e.jsx(i,{children:"Product Name & Types"})},renderCell(r){return e.jsxs(x,{className:S().prod,children:[e.jsx(Y,{href:`/Product/${r.ProdId}`,appearance:"subtle",children:e.jsx(Z,{children:r.Name})}),e.jsx(ee,{children:Object.values(r.Type).reduce((s,a)=>`${s} ${a},`,"")})]})}}),o({columnId:"Quantity",renderHeaderCell(){return e.jsx(i,{className:S().qua,children:"Quantity"})},renderCell(r){return e.jsx(x,{className:S().qua,children:r.Quantity})}})];function je({OrderId:r,ParentLog:s}){const a=H(()=>s.With("Detail")),n=S(),[m,{setTrue:j,setFalse:t}]=$(),{Nav:d,Paths:f}=F(),g=parseInt(f.at(1)),{data:b,run:p}=O(()=>y.Order.Get.Detail(r,a),{manual:!0,onError:a.error}),{data:l,run:C}=O(()=>y.Order.Get.Order(r),{onError(A){d("History"),a.error(A)},manual:!0});function w(){C(),p()}return G.useEffect(()=>{g===r?(w(),j()):t()},[g]),e.jsxs(e.Fragment,{children:[e.jsx(N,{appearance:"subtle",icon:e.jsx(Q,{}),onClick:()=>d("History",r)}),e.jsxs(W,{open:m,position:"end",size:"medium",modalType:"alert",children:[e.jsx(U,{children:e.jsx(_,{action:e.jsx(N,{appearance:"subtle",icon:e.jsx(V,{}),onClick:()=>d("History")}),children:"Order Detail"})}),e.jsx(J,{children:e.jsxs("div",{className:n.body,children:[e.jsx(ie,{OrderId:r,Order:l}),e.jsx(K,{Items:b?.ShopCart||[],Columns:[X(44,a),...me]}),e.jsx(xe,{Comments:b?.Comments}),e.jsx(he,{OrderId:r,Status:l?.Status,Refresh:w,ParentLog:a}),e.jsx(de,{OrderId:r,Status:l?.Status,Refresh:w,ParentLog:a})]})})]})]})}const h=v({five:{flexBasis:"5%",flexGrow:0},ten:{flexBasis:"10%",flexGrow:0},two:{flexBasis:"2.5%",flexGrow:0}}),fe=[o({columnId:"OrderId",renderHeaderCell:()=>e.jsx(i,{className:h().five,children:"Order Id"}),renderCell(r){return e.jsx(x,{className:h().five,children:r.Id})}}),o({columnId:"Products",renderHeaderCell:()=>e.jsx(i,{children:"Products"}),renderCell(r){return e.jsxs(x,{children:[r.Items[0]," ",r.Items.length>1&&`& +${r.Items.length-1}`]})}}),o({columnId:"OrderDate",renderHeaderCell:()=>e.jsx(i,{children:"Order Date"}),renderCell(r){return e.jsx(i,{children:r.OrderDate.toLocaleDateString()})}}),o({columnId:"TrackNumber",renderHeaderCell:()=>e.jsx(i,{children:"Track Number"}),renderCell(r){return e.jsx(x,{children:r.TrackNumber})}}),o({columnId:"Quantity",renderHeaderCell:()=>e.jsx(i,{className:h().ten,children:"Quantity"}),renderCell(r){return e.jsx(x,{className:h().ten,children:r.Quantity})}}),o({columnId:"Status",renderHeaderCell:()=>e.jsx(i,{className:h().ten,children:"Order State"}),renderCell(r){return e.jsx(x,{className:h().ten,children:r.Status})}})];function pe(r){return[...fe,o({columnId:"Detail",renderHeaderCell:()=>e.jsx(i,{className:h().two,children:"Detail"}),renderCell(s){return e.jsx(x,{className:h().two,children:e.jsx(je,{OrderId:s.Id,ParentLog:r})})}})]}export{pe as H,ie as O,xe as a};
