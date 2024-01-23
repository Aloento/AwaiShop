import{r as x,u as Ce,j as n,d as w,t as m,s as R,m as P,a as We,T as Z,b as ee,c as te,e as J,f as je,D as be,g as Te,h as ve,i as Qe,k as Ee,F as S,I as z,L as H,l as Se,n as le,B as L,S as he,o as O,A as W,X as Xe,P as qe,p as fe,H as _,q as Le,v as Ie,M as Ne,w as ke,x as h,y as G,z as Ge,C as Ye,E as Je,G as Ke,J as U,K as ae,N as Ze,O as et,Q as tt,R as st,U as nt,V as rt,W as at,Y as ot,Z as it,_ as B,$ as ct,a0 as ut,a1 as we,a2 as dt,a3 as lt,a4 as Ae,a5 as Q,a6 as ht,a7 as X,a8 as mt,a9 as pt,aa as gt,ab as xt,ac as ft,ad as wt,ae as yt,af as Pt,ag as Ct,ah as jt,ai as bt,aj as Tt,ak as vt,al as Et,am as St,an as Lt,ao as It,ap as Nt,aq as kt,ar as q,as as se,at as Gt,au as At,av as $t,aw as Ot,ax as Ut}from"./vendor-EPO6t9z0.js";function oe(o){return`/${o.filter(s=>s).map(s=>s.toString().replace(/^\/+/,"")).join("/")}`}const $e=x.createContext({});function V(){return x.useContext($e)}function Mt({children:o}){const[e,s]=x.useState(()=>({Paths:location.pathname.split("/").filter(c=>c),Search:new URLSearchParams(location.search),Put:t,Nav:(...c)=>a(oe(c)),Rep:(...c)=>i(oe(c)),Reload:(...c)=>d(c)}));function t(c){history.replaceState(null,"",`${location.pathname}${c.size?"?":""}${c.toString()}`),e.Search=new URLSearchParams(c),s({...e})}function r(c){e.Paths=c.split("/").filter(u=>u),e.Search=new URLSearchParams(location.search),s({...e})}function a(c){history.pushState(null,"",c),r(c)}function i(c){history.replaceState(null,"",c),r(c)}function d(c){history.replaceState(null,"","/Reload"),r("/Reload"),setTimeout(()=>{const u=c.length?oe(c):location.pathname;history.pushState(null,"",u),r(u)},100)}return Ce(()=>{location.pathname==="/"&&location.search.startsWith("?/")&&i(location.search.substring(2)),addEventListener("click",c=>{const u=c.target?.closest("a");if(u){if(u.origin!==location.origin){u.target="_blank";return}c.preventDefault(),a(u.pathname)}}),addEventListener("popstate",c=>{c.preventDefault(),r(location.pathname)})}),n.jsx($e.Provider,{value:e,children:o})}class A{namespace;info;error;warn;debug;throw;constructor(...e){this.namespace=e.join(" > "),this.error=console.error.bind(this,this.baseColor(101,"error"),`
	`),this.warn=console.warn.bind(this,this.baseColor(103,"warn"),`
	`),this.info=console.info.bind(this,this.baseColor(104,"info"),`
	`),this.debug=console.debug.bind(this,this.baseColor(102,"debug"),`
	`),this.throw=console.log.bind(this,this.baseColor(105,"throw"),"↓ The Following Error is Thrown ↓")}With(...e){return new A(this.namespace,...e)}baseColor(e,s){return`\x1B[${e};30;1m ${s.toUpperCase()} \x1B[0m\x1B[100;97m ${w().format("YY-M-D H:m:s")} \x1B[1m\x1B[40;97m ${this.namespace} `}}const N={display:"flex"},Dt={flexDirection:"column"},M={...N,...Dt},Qs={...N,backgroundColor:m.colorNeutralBackground1,boxShadow:m.shadow4,...R.borderRadius(m.borderRadiusMedium)},Rt={whiteSpace:"pre-line"},me=60,pe="1636px",Vt={objectFit:"cover",objectPosition:"center"},Bt=P({pre:Rt});function ne(o){const e=Bt(),{dispatchToast:s}=We();return{dispatch:t=>{const r=t.Error.message,a=r.indexOf("Exception:");let i=r;a!==-1&&(i=r.substring(a+10)),s(n.jsxs(Z,{children:[n.jsx(ee,{children:"Internal Error"}),n.jsx(te,{subtitle:n.jsxs(J,{className:e.pre,children:[i,n.jsx("br",{}),"More Info, See Console"]}),children:n.jsx(J,{className:e.pre,children:t.Message})})]}),{intent:"error",timeout:1e4}),o.error(t)},dispatchToast:s}}const Ht=P({box:{...M,rowGap:m.spacingVerticalM},one:{...N,columnGap:m.spacingVerticalXXXL}}),ye=new A("Setting");function Oe({Open:o,Toggle:e,New:s}){const t=Ht(),r=je().instance.getActiveAccount(),[a,i]=x.useState(),[d,c]=x.useState(),[u,l]=x.useState(),p=b.User.Get.useMe(ye);x.useEffect(()=>{if(s||!p)return;const{Name:f,Phone:g,Address:_e}=p;i(f),c(g),l(_e)},[p]);const{dispatch:y,dispatchToast:T}=ne(ye),{run:v}=b.User.Post.useUpdate({manual:!0,onError(f,[g]){y({Message:`Failed ${s?"Create":"Update"} Info`,Error:f,Request:g})},onSuccess(f,[g]){T(n.jsxs(Z,{children:[n.jsxs(ee,{children:["Info ",s?"Created":"Updated"]}),n.jsxs(te,{children:[g.Name,n.jsx("br",{}),g.Phone,n.jsx("br",{}),g.Address]})]}),{intent:"success"}),s&&(D.next(!1),D.complete(),D.closed=!0),e()}});return n.jsx(be,{open:o,onOpenChange:e,modalType:s?"alert":"modal",children:n.jsx(Te,{children:n.jsxs(ve,{children:[n.jsx(Qe,{children:s?"Welcome! Fill in your info to get started.":"Personal Information"}),n.jsxs(Ee,{className:t.box,children:[n.jsxs("div",{className:t.one,children:[n.jsx(S,{label:"Name",size:"large",required:!0,children:n.jsx(z,{size:"medium",value:a,maxLength:20,onChange:(f,g)=>i(g.value)})}),n.jsx(S,{label:"Phone",size:"large",required:!0,children:n.jsx(z,{size:"medium",value:d,maxLength:20,onChange:(f,g)=>c(g.value)})})]}),n.jsx(S,{label:"E-Mail",size:"large",children:n.jsx(H,{children:r?.username})}),n.jsx(S,{label:"Address",size:"large",required:!0,children:n.jsx(z,{size:"medium",value:u,maxLength:100,minLength:20,onChange:(f,g)=>l(g.value)})})]}),n.jsxs(Se,{children:[!s&&n.jsx(le,{disableButtonEnhancement:!0,children:n.jsx(L,{appearance:"secondary",children:"Cancel"})}),n.jsx(L,{appearance:"primary",onClick:()=>v({EMail:r?.username,Name:a,Address:u,Phone:d}),children:"Submit"})]})]})})})}const D=new he;function zt(){const[o,{toggle:e}]=O();return Ce(()=>D.subscribe(s=>s&&e())),n.jsx(W,{children:n.jsx(Oe,{Open:o,Toggle:e,New:!0})})}class Ft{constructor(e,s){this.DB=e,this.Name=s,this.Sto=e.table(s),this.Trim()}Sto;async Get(e,s){const t=await this.Sto.get(e);return t?s&&await Promise.resolve(s(t))||typeof t.Exp=="number"&&t.Exp<w().unix()?(await this.Sto.delete(e),null):t.Val:null}async GetOrSet(e,s,t,r){const a=await this.Get(e,r);return a||this.Set(e,await Promise.resolve(s()),t)}async Set(e,s,t){if(!s)throw TypeError("Value cannot be null");if(t===null)return await this.Sto.put({Id:e,Exp:t,Val:s}),s;const r=(t||w().add(1,"week")).unix();if(t&&r<w().unix())throw RangeError(`Expire time [${r}] cannot be less than now [${w().unix()}]`);return await this.Sto.put({Id:e,Exp:r,Val:s}),s}Trim(){return this.Sto.filter(e=>typeof e.Exp=="number"&&e.Exp<w().unix()).delete()}}const re=new Xe("EShop",{autoOpen:!1});re.version(1).stores({Shared:"Id, Exp",ShopCart:"Id"});re.open();const E=new Ft(re,"Shared"),ie=re.table("ShopCart"),I=new qe({auth:{clientId:"0ac3ee82-159d-407c-8539-7a9e1e3a1989",authority:"https://SoarCraft.b2clogin.com/SoarCraft.onmicrosoft.com/B2C_1_RegLog",knownAuthorities:["SoarCraft.b2clogin.com"],redirectUri:"https://awai.aloen.to/Login"},cache:{cacheLocation:"localStorage"},system:{loggerOptions:{loggerCallback(o,e){switch(o){case fe.Error:console.error(e);return;case fe.Warning:console.warn(e);return;default:console.debug(e)}}}}});async function Ue(){try{return(await I.acquireTokenSilent({scopes:[]})).idToken}catch(o){I.getActiveAccount()&&await I.loginRedirect(),console.warn(o)}}await I.initialize();await I.handleRedirectPromise();I.setActiveAccount(I.getAllAccounts()[0]);class Me extends Error{constructor(){super("Please Login First")}}class _t extends Error{constructor(){super("Server Returned False")}}class De extends Error{constructor(){super("Server Returned Empty Response")}}class Re{static async EnsureConnected(){return this.Hub.state===_.Connected?Promise.resolve():((this.Hub.state===_.Disconnected||this.Hub.state===_.Disconnecting)&&await this.Hub.start(),new Promise(e=>{const s=setInterval(()=>{this.Hub.state===_.Connected&&(clearInterval(s),e())},100)}))}static async Invoke(e,...s){return await this.EnsureConnected(),this.Hub.invoke(e,...s)}static EnsureLogin(){if(!I.getActiveAccount())throw new Me}static EnsureTrue(e){if(!e)throw new _t}static Index(e,s){return`${s}_${e}`}static async UpdateCache(e,s,t,r){const a=this.Index(s,t),i=await E.Get(a);if(!i)return;const d=e(i);i.QueryExp?await E.Set(a,{...d,QueryExp:w().add(1,"m").unix()},w().add(1,"w")):await E.Set(a,d,r||null)}static async GetVersionCache(e,s){const t=this.Index(e,s),r=await E.Get(t);if(r&&r.QueryExp>w().unix())return r;const a=await Promise.resolve(this.Invoke(s,e,r?.Version));if(a===!0)return E.Set(t,{...r,QueryExp:w().add(1,"m").unix()},w().add(1,"w")),r;if(!a)throw E.Sto.delete(t),new De;return await E.Set(t,{...a,QueryExp:w().add(1,"m").unix()},w().add(1,"w")),a}static async GetTimeCache(e,s,t,...r){return await E.GetOrSet(this.Index(e,s),async()=>await this.Invoke(s,...r),t(w()))}static async HandleFileStream(e,s,t){const a=Math.ceil(e.size/30720);let i=0;for(;i<a;){const d=i*30720,c=Math.min(d+30720,e.size),u=e.slice(d,c),l=new FileReader,p=await new Promise((y,T)=>{l.onload=()=>y(new Uint8Array(l.result)),l.onerror=()=>T(l.error),l.readAsArrayBuffer(u)});s.next(p),t?.debug(`Sent chunk ${i+1}/${a}`),i++}s.complete()}}class k extends Re{static Log=["|","ShopNet"];static Hub=new Le().withUrl("https://awaishop.aloen.to:3389/Hub",{skipNegotiation:!0,transport:Ie.WebSockets,logMessageContent:!1,async accessTokenFactory(){const e=await Ue();return e||""}}).withAutomaticReconnect().withStatefulReconnect().withHubProtocol(new Ne).configureLogging(ke.Information).build()}k.Hub.on("OnNewUser",()=>{D.next(!0),console.debug("OnNewUser")});class Wt extends k{static Categories(){return this.GetTimeCache("","GalleryGetCategories",e=>e.add(1,"m"))}static async Products(e){const s=await this.GetTimeCache(e,"GalleryGetProducts",t=>t.add(1,"m"),e);return[s,4-s.length%4]}}const Qt={Get:Wt};class Xt extends k{static async Get(e){if(!/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(e))throw new Error(`Invalid ObjectId ${e}`);return await this.EnsureConnected(),this.Hub.stream("ObjectStorageGet",e)}static GetBySlice(e,s){const t=[];return E.GetOrSet(e,()=>new Promise((r,a)=>{this.Get(e).then(i=>i.subscribe({error(d){a(d)},next(d){t.push(d),s.debug("Received Slice",e,t.length)},complete(){r(t)}}))}))}}class qt extends k{static useDelete(e){return h(async s=>{this.EnsureLogin();const t=await this.Invoke("OrderDeleteCancel",s);return this.EnsureTrue(t),t},e)}}class j extends k{static product="ProductEntity";static Product(e){return this.GetVersionCache(e,this.product)}static ProductUpdate(e,s){return this.UpdateCache(s,e,this.product)}static Lexical(e){return this.GetVersionCache(e,"LexicalEntity")}static Photo(e){return this.GetVersionCache(e,"PhotoEntity")}static Type(e){return this.GetVersionCache(e,"TypeEntity")}static Variant(e){return this.GetVersionCache(e,"VariantEntity")}}class $ extends j{static Log=[...super.Log,"Product","Get"];static async Basic(e,s){const t=s.With(...this.Log,"Basic"),r=await this.Product(e);if(!r)throw new Error(`Product ${e} Not Found`);const[a,i]=await this.PhotoList(e,s);return i?{Name:r.Name,Cover:i}:(t.warn(`Product ${e} has no photo`),{Name:r.Name,Cover:""})}static Limit(e){return this.Invoke("ProdGetLimit",e)}static async Combo(e,s){const t=s.With(...this.Log,"Combo"),r=await this.ComboList(e),a=[];for(const i of r){const d={};for(const c of i.Types){const u=await this.Type(c);if(!u){t.error(`[Mismatch] Type ${c} not found. Combo ${i.ComboId} : Product ${e}`);continue}const l=await this.Variant(u.VariantId);if(!l){t.error(`[Mismatch] Variant ${u.VariantId} not found. Combo ${i.ComboId} : Type ${c} : Product ${e}`);continue}d[l.Name]=u.Name}a.push({Id:i.ComboId,Stock:i.Stock,Combo:d})}return a}static ComboList(e){return this.GetTimeCache(e,"ProductGetComboList",s=>s.add(1,"m"),e)}static async PhotoList(e,s){const t=s.With(...this.Log,"PhotoList"),r=await this.GetTimeCache(e,"ProductGetPhotoList",d=>d.add(1,"m"),e).catch(t.error);let a=[],i="";for(const d of r||[]){const c=await this.Photo(d).catch(t.error);c?(a.push(c),c.Cover&&(i=c.ObjectId)):t.warn(`Photo ${d} not found in Product ${e}`)}return a=a.sort((d,c)=>d.Order-c.Order),!i&&a.length>0?(t.warn(`Product ${e} has no cover photo, using first photo instead`),[a,a[0].ObjectId]):[a,i]}}class Yt extends k{static Order(e){return this.EnsureLogin(),this.GetVersionCache(e,"OrderEntity")}static Comment(e){return this.EnsureLogin(),this.GetVersionCache(e,"CommentEntity")}}class Jt extends Yt{static Log=[...super.Log,"Order","Get"];static async List(e){this.EnsureLogin();const s=e.With(...this.Log,"List"),t=await this.GetTimeCache("","OrderGetList",a=>a.add(1,"m")),r=[];for(const a of t){const i=await this.Order(a.OrderId);if(!i){s.warn(`[Mismatch] Order ${a.OrderId} not found`);continue}const d=[];for(const c of a.Products){const u=await j.Product(c);if(!u){s.warn(`[Mismatch] Product ${c} not found`);continue}d.push(u.Name)}r.push({Id:a.OrderId,Items:d,Quantity:a.Quantity,Status:i.Status,TrackNumber:i.TrackingNumber,OrderDate:i.CreateAt})}return r.sort((a,i)=>i.OrderDate.getTime()-a.OrderDate.getTime())}static async Detail(e,s){this.EnsureLogin();const t=s.With(...this.Log,"Detail"),r=await this.GetTimeCache(e,"OrderGetDetail",c=>c.add(1,"m"),e),a=[];let i=0;for(const c of r.Items){const u={};let l=0;for(const v of c.Types){const f=await j.Type(v);if(!f){t.warn(`[Mismatch] Type ${v} not found. Order : ${e}`);continue}const g=await j.Variant(f.VariantId);if(!g){t.warn(`[Mismatch] Variant ${f.VariantId} not found. Type : ${v}, Order : ${e}`);continue}u[g.Name]=f.Name,l=g.ProductId}const p=await j.Product(l);if(!p){t.warn(`[Mismatch] Product ${l} not found. Order : ${e}`);continue}const[y,T]=await $.PhotoList(l,t);T||t.warn(`Product ${l} has no photo`),a.push({Id:i++,ProdId:l,Cover:T||"",Name:p.Name,Type:u,Quantity:c.Quantity})}const d=[];for(const c of r.Comments){const u=await this.Comment(c);if(!u){t.warn(`[Mismatch] Comment ${c} not found. Order : ${e}`);continue}d.push({Content:u.Content,Time:u.CreateAt,User:u.Name||"You"})}return{ShopCart:a,Comments:d.sort((c,u)=>c.Time.getTime()-u.Time.getTime())}}}class Kt extends k{static useNew(e){return h((s,t)=>{this.EnsureLogin();const r=s.map(a=>({ProdId:a.ProdId,Type:Object.values(a.Type),Quantity:a.Quantity}));return this.Invoke("OrderPostNew",r,t)},e)}static useAppend(e){return h(async(s,t)=>{this.EnsureLogin();const r=await this.Invoke("OrderPostAppend",s,t);return this.EnsureTrue(r),r},e)}static useCancel(e){return h(async(s,t)=>{this.EnsureLogin();const r=await this.Invoke("OrderPostCancel",s,t);return this.EnsureTrue(r),r},e)}static useReceived(e){return h(async s=>{this.EnsureLogin();const t=await this.Invoke("OrderPostReceived",s);return this.EnsureTrue(t),t},e)}}const Zt={Get:Jt,Post:Kt,Delete:qt},es={Get:$};class Ve extends k{static Log=[...super.Log,"User","Get"];static me="UserGetMe";static useMe(e){const s=G(()=>e.With(...this.Log,"Me")),{dispatch:t}=ne(s);return Ge(async()=>{try{return this.EnsureLogin(),await this.GetVersionCache(0,this.me)}catch(a){if(a instanceof De)return;a instanceof Me?s.info(a):t({Message:"Failed to Get Your Info",Error:a,Request:""})}})}static MeUpdate(e){return this.UpdateCache(e,0,this.me)}}class ts extends k{static useUpdate(e){return h(async s=>{this.EnsureLogin();const t=await this.Invoke("UserPostUpdate",s);return this.EnsureTrue(t),Ve.MeUpdate(r=>({...r,...s})),t},e)}}const ss={Get:Ve,Post:ts},b={Gallery:Qt,Product:es,User:ss,Order:Zt,Storage:Xt},Be=x.createContext({});function F(){return x.useContext(Be)}const ce=new A("ShopCart","Context");function ns({children:o}){const[e,s]=x.useState([]);h(async()=>{const a=await ie.toArray(),i=[];for(const d of a){const c=await b.Product.Get.Basic(d.ProdId,ce);i.push({...d,...c})}s(i)},{onError:ce.error});async function t(a){for(let i=0;i<a.length;i++)a[i].Id=i;s([...a]),await ie.clear(),await ie.bulkPut(a.map(i=>({Id:i.Id,ProdId:i.ProdId,Type:i.Type,Quantity:i.Quantity})))}async function r(a,i,d){const c=await b.Product.Get.Basic(a,ce);e.push({...c,Id:e.length,ProdId:a,Type:i,Quantity:d}),t(e)}return n.jsx(Be.Provider,{value:{List:e,Add:r,Update:t},children:o})}const ge={Name:"AwaiShop"},rs=P({box:{width:"-webkit-fill-available",marginTop:m.spacingVerticalXXXL,...R.padding(m.spacingVerticalXXXL,0),backgroundColor:m.colorNeutralBackgroundInverted},main:{...N,maxWidth:pe,...R.margin(0,"auto")},logo:{width:"150px",filter:"invert(96%)"},otc:{color:"white"}});function as(){const o=rs();return n.jsx("footer",{className:o.box,children:n.jsx("div",{className:o.main,children:n.jsx("img",{src:"/safari-pinned-tab.svg",className:o.logo})})})}function os(){const{Paths:o,Search:e,Put:s}=V(),t=o.at(0),r=o.at(1),a=r==="User",i=r==="Order",d=a?"admin":"pending";return t==="Admin"&&(a||i)&&n.jsxs(n.Fragment,{children:[n.jsx(z,{placeholder:"Search in Any Field",contentBefore:n.jsx(Ye,{}),appearance:"underline",onChange:(c,u)=>{u.value?e.set("search",u.value):e.delete("search"),s(e)}}),n.jsx(Je,{label:`Only ${a?"Admin":"Pending"}`,checked:e.get(d)==="",onChange:(c,u)=>{u.checked?e.set(d,""):e.delete(d),s(e)}})]})}const is=P({box:{...N,flexGrow:1,height:"inherit",marginLeft:m.spacingHorizontalS,alignItems:"center"},div:{color:m.colorNeutralForegroundDisabled},link:{textDecorationLine:"unset !important"}});function cs(){const o=is(),{Paths:e}=V(),s=e.at(0),t=e.at(1)||"Product";return s==="Admin"&&n.jsxs("div",{className:o.box,children:[n.jsx(J,{size:600,font:"monospace",className:o.div,children:"|"}),n.jsxs(Ke,{selectedValue:t,children:[n.jsx(U,{appearance:"subtle",href:"/Admin",className:o.link,children:n.jsx(ae,{value:"Product",children:"Product List"})}),n.jsx(U,{appearance:"subtle",href:"/Admin/Order",className:o.link,children:n.jsx(ae,{value:"Order",children:"Order List"})}),n.jsx(U,{appearance:"subtle",href:"/Admin/User",className:o.link,children:n.jsx(ae,{value:"User",children:"User List"})})]})]})}class C extends Re{static Log=["|","AdminNet"];static Hub=new Le().withUrl("https://awaishop.aloen.to:3389/AdminHub",{skipNegotiation:!0,transport:Ie.WebSockets,logMessageContent:!1,async accessTokenFactory(){const e=await Ue();if(e)return e;throw new Error("Please Login First")}}).withAutomaticReconnect().withStatefulReconnect().withHubProtocol(new Ne).configureLogging(ke.Information).build();static Index(e,s){return`${s}_Admin_${e}`}}class K extends C{static User(e){return this.EnsureLogin(),this.GetVersionCache(e,"UserEntity")}}class Y extends C{static Order(e){return this.EnsureLogin(),this.GetVersionCache(e,"OrderEntity")}static Comment(e){return this.EnsureLogin(),this.GetVersionCache(e,"CommentEntity")}}class us extends C{static Log=[...super.Log,"Order","Get"];static async List(e){this.EnsureLogin();const s=e.With(...this.Log,"List"),t=await this.GetTimeCache("","OrderGetList",a=>a.add(1,"m")),r=[];for(const a of t){const i=await Y.Order(a.OrderId);if(!i){s.warn(`[Mismatch] Order ${a.OrderId} not found`);continue}const d=[];for(const u of a.Products){const l=await j.Product(u);if(!l){s.warn(`[Mismatch] Product ${u} not found`);continue}d.push(l.Name)}const c=await K.User(i.UserId);if(!c){s.error(`[Mismatch] User ${i.UserId} not found`);continue}r.push({Id:a.OrderId,Items:d,Quantity:a.Quantity,Status:i.Status,TrackNumber:i.TrackingNumber,OrderDate:i.CreateAt,User:c.Name})}return r.sort((a,i)=>i.OrderDate.getTime()-a.OrderDate.getTime())}static async Detail(e,s){this.EnsureLogin();const t=s.With(...this.Log,"Detail"),r=await this.GetTimeCache(e,"OrderGetDetail",c=>c.add(1,"m"),e),a=[];let i=0;for(const c of r.Items){const u={};let l=0;for(const v of c.Types){const f=await j.Type(v);if(!f){t.warn(`[Mismatch] Type ${v} not found. Order : ${e}`);continue}const g=await j.Variant(f.VariantId);if(!g){t.warn(`[Mismatch] Variant ${f.VariantId} not found. Type : ${v}, Order : ${e}`);continue}u[g.Name]=f.Name,l=g.ProductId}const p=await j.Product(l);if(!p){t.warn(`[Mismatch] Product ${l} not found. Order : ${e}`);continue}const[y,T]=await $.PhotoList(l,t);T||t.warn(`Product ${l} has no photo`),a.push({Id:i++,ProdId:l,Cover:T||"",Name:p.Name,Type:u,Quantity:c.Quantity})}const d=[];for(const c of r.Comments){const u=await Y.Comment(c);if(!u){t.warn(`[Mismatch] Comment ${c} not found. Order : ${e}`);continue}let l="Client";if(u.UserId){const p=await K.User(u.UserId);p?l=p.Name:t.warn(`[Mismatch] User ${u.UserId} not found. Order : ${e}`)}d.push({Content:u.Content,Time:u.CreateAt,User:l})}return{ShopCart:a,Comments:d.sort((c,u)=>c.Time.getTime()-u.Time.getTime())}}static Order=Y.Order}class ds extends C{static useAppend(e){return h(async(s,t)=>{const r=await this.Invoke("OrderPostAppend",s,t);return this.EnsureTrue(r),r},e)}static useClose(e){return h(async(s,t)=>{const r=await this.Invoke("OrderPostClose",s,t);return this.EnsureTrue(r),r},e)}static useShip(e){return h(async(s,t)=>{const r=await this.Invoke("OrderPostShip",s,t);return this.EnsureTrue(r),r},e)}static useAccept(e){return h(async s=>{const t=await this.Invoke("OrderPostAccept",s);return this.EnsureTrue(t),t},e)}}const ls={Get:us,Post:ds};class xe extends C{static Log=[...super.Log,"Product","Get"];static list="ProductGetList";static useList(e){const s=G(()=>e.With(...this.Log,"List"));return Ge(()=>this.GetTimeCache("",this.list,r=>r.add(1,"m")).catch(s.error))}static ListUpdate(e){return this.UpdateCache(e,"",this.list,w().add(1,"m"))}static Count(e){return this.GetTimeCache(e,"ProductGetCount",s=>s.add(1,"m"),e)}static async Name(e){const s=await $.Product(e);if(!s)throw new Error(`Product ${e} Not Found`);return s.Name}static async Category(e){const s=await $.Product(e);if(!s)throw new Error(`Product ${e} Not Found`);return s.Category}static async Variants(e,s){const t=s.With(...this.Log,"Variants"),r=await this.GetTimeCache(e,"ProductGetVariants",i=>i.add(1,"m"),e),a=[];for(const i of r){const d=await $.Variant(i.VariantId);if(!d){t.warn(`Variant ${i} Not Found. Product : ${e}`);continue}const c=[];for(const u of i.Types){const l=await $.Type(u);if(!l){t.warn(`Type ${u} Not Found. Variant : ${i.VariantId}, Product : ${e}`);continue}c.push(l.Name)}a.push({Id:i.VariantId,Name:d.Name,Types:c})}return a}}class hs extends C{static usePhoto(e){return h(async s=>{const t=await this.Invoke("ProductDeletePhoto",s);return this.EnsureTrue(t),t},e)}static useVariant(e){return h(async s=>{const t=await this.Invoke("ProductDeleteVariant",s);return this.EnsureTrue(t),t},e)}static useType(e){return h(async(s,t)=>{const r=await this.Invoke("ProductDeleteType",s,t);return this.EnsureTrue(r),r},e)}static useCombo(e){return h(async s=>{const t=await this.Invoke("ProductDeleteCombo",s);return this.EnsureTrue(t),t},e)}static useProduct(e){return h(async s=>{const t=await this.Invoke("ProductDeleteProduct",s);return this.EnsureTrue(t),xe.ListUpdate(r=>r.filter(a=>a!==s)),t},e)}static useCategory(e){return h(async s=>{const t=await this.Invoke("ProductDetachCategory",s);return this.EnsureTrue(t),j.ProductUpdate(s,r=>(r.Category=void 0,r)),t},e)}}class ms extends C{static Log=[...super.Log,"Product","Patch"];static useName(e){return h(async(s,t)=>{const r=await this.Invoke("ProductPatchName",s,t);return this.EnsureTrue(r),r},e)}static useCategory(e){return h(async(s,t)=>{const r=await this.Invoke("ProductPatchCategory",s,t);return this.EnsureTrue(r),r},e)}static usePhoto(e,s){const t=G(()=>e.With(...this.Log,"Photo"));return h(async(r,a)=>{if(!a.type.startsWith("image/"))throw new TypeError("File is not an image");if(a.size>10*1024*1024)throw new RangeError("File is too large, max 10MB");await this.EnsureConnected();const i=new he,d=this.Hub.invoke("ProductPatchPhoto",r,i);return await this.HandleFileStream(a,i,t),this.EnsureTrue(await d),!0},s)}static useCaption(e){return h(async(s,t)=>{const r=await this.Invoke("ProductPatchCaption",s,t);return this.EnsureTrue(r),r},e)}static useVariantName(e){return h(async(s,t)=>{const r=await this.Invoke("ProductPatchVariantName",s,t);return this.EnsureTrue(r),r},e)}static useType(e){return h(async(s,t,r)=>{const a=await this.Invoke("ProductPatchType",s,t,r);return this.EnsureTrue(a),a},e)}static useCombo(e){return h(async(s,t,r)=>{const a=await this.Invoke("ProductPatchCombo",s,t,r);return this.EnsureTrue(a),a},e)}}let He;function Xs(o){He=o}class ps extends C{static Log=[...super.Log,"Product","Post"];static useCreate(e){return h(async s=>{const t=await this.Invoke("ProductPostCreate",s);return xe.ListUpdate(r=>[t,...r]),t},e)}static useMovePhoto(e){return h(async(s,t)=>{const r=await this.Invoke("ProductPostMovePhoto",s,t);return this.EnsureTrue(r),r},e)}static usePhoto(e,s){const t=G(()=>e.With(...this.Log,"Photo"));return h(async(r,a)=>{if(!a.type.startsWith("image/"))throw new TypeError("File is not an image");if(a.size>10*1024*1024)throw new RangeError("File is too large, max 10MB");const i=new he,d=this.Invoke("ProductPostPhoto",r,i);return await this.HandleFileStream(a,i,t),this.EnsureTrue(await d),!0},s)}static useVariant(e){return h((s,t)=>this.Invoke("ProductPostVariant",s,t),e)}static useType(e){return h((s,t)=>this.Invoke("ProductPostType",s,t),e)}static useCombo(e){return h((s,t,r)=>this.Invoke("ProductPostCombo",s,t,r),e)}static useLexical(e){return h(async s=>{const t=He?.getEditorState();let r;t&&!t.isEmpty()&&(r=JSON.stringify(t.toJSON()));const a=await this.Invoke("ProductPostDescription",s,r);return this.EnsureTrue(a),a},e)}}const gs={Get:xe,Post:ps,Patch:ms,Delete:hs};class xs extends C{static useUser(e){return h(async s=>{const t=await this.Invoke("UserDeleteUser",s);return this.EnsureTrue(t),t},e)}static useAdmin(e){return h(async s=>{const t=await this.Invoke("UserDeleteAdmin",s);return this.EnsureTrue(t),t},e)}}class fs extends C{static async OrderUser(e){const s=await Y.Order(e);if(!s)throw new Error(`Order ${e} not found`);const t=await K.User(s.UserId);if(!t)throw new Error(`User ${s.UserId} not found in order ${e}`);return t}static async List(){const e=await this.GetTimeCache("","UserGetList",t=>t.add(1,"m")),s=[];for(const t of e){const r=await K.User(t);if(!r){console.warn(`User ${t} not found`);continue}s.push({Id:t,Name:r.Name,EMail:r.EMail,Admin:r.Admin})}return s}}class ws extends C{static useAdmin(e){return h(async s=>{const t=await this.Invoke("UserPostAdmin",s);return this.EnsureTrue(t),t},e)}}const ys={Get:fs,Post:ws,Delete:xs},Ps={Product:gs,Order:ls,User:ys},Cs=P({body:M}),js=new A("Admin","Product","AddButton");function bs(){const{Nav:o,Paths:e}=V(),s=e.at(0),t=e.at(1),r=Cs(),[a,i]=x.useState(""),{dispatch:d,dispatchToast:c}=ne(js),{run:u,loading:l}=Ps.Product.Post.useCreate({manual:!0,onError(p,y){d({Message:`Failed Create ${a}`,Request:y,Error:p})},onSuccess(p){c(n.jsxs(Z,{children:[n.jsx(ee,{children:"New Product Created"}),n.jsxs(te,{children:[p," ",a]})]}),{intent:"success"}),o("Admin",p),i("")}});return s==="Admin"&&!t&&n.jsxs(be,{children:[n.jsx(le,{disableButtonEnhancement:!0,children:n.jsx(L,{appearance:"primary",icon:n.jsx(Ze,{}),children:"New Product"})}),n.jsx(Te,{children:n.jsxs(ve,{children:[n.jsx(Ee,{className:r.body,children:n.jsx(z,{required:!0,size:"large",value:a,maxLength:15,appearance:"underline",onChange:(p,y)=>i(y.value),contentBefore:n.jsx(et,{children:"Give A Name"})})}),n.jsxs(Se,{children:[n.jsx(le,{disableButtonEnhancement:!0,children:n.jsx(L,{appearance:"secondary",children:"Cancel"})}),n.jsx(L,{disabled:l,appearance:"primary",onClick:()=>u(a),children:"Create"})]})]})})]})}const Ts=new A("Avatar","Menu");function vs(){const[o,{toggle:e}]=O(),[s,{toggle:t}]=O(),{instance:r}=je(),[a,{set:i}]=O(!0);x.useEffect(()=>{D.subscribe(l=>i(!l))},[]);const d=b.User.Get.useMe(Ts),c=r.getActiveAccount(),u=c?.name||c?.username;return n.jsxs(n.Fragment,{children:[n.jsxs(tt,{open:o,onOpenChange:e,children:[n.jsx(st,{children:n.jsx(nt,{size:36,active:o?"active":"unset",name:u})}),n.jsx(rt,{children:n.jsxs(at,{children:[n.jsx(W,{children:n.jsxs(ot,{children:["Hi ",u]})}),n.jsx(it,{children:n.jsx(B,{onClick:()=>r.loginRedirect(),children:"Login"})}),n.jsxs(W,{children:[n.jsx(U,{appearance:"subtle",href:"/History",children:n.jsx(B,{children:"History"})}),d?.Admin&&n.jsx(U,{appearance:"subtle",href:"/Admin",children:n.jsx(B,{children:"Admin"})}),n.jsx(B,{onClick:t,children:"Setting"}),n.jsx(B,{onClick:()=>r.logoutRedirect(),children:"Logout"})]})]})})]}),a&&n.jsx(W,{children:n.jsx(Oe,{Open:s,Toggle:t})})]})}function ze({Items:o,Columns:e,NoHeader:s}){return n.jsxs(ct,{items:o||[],columns:e,getRowId:t=>t.Id,children:[!s&&n.jsx(ut,{children:n.jsx(we,{children:({renderHeaderCell:t})=>t()})}),n.jsx(dt,{children:({item:t,rowId:r})=>n.jsx(we,{children:({renderCell:a})=>a(t)},r)}),!o&&n.jsx(lt,{size:48})]})}function Es({Guid:o,Log:e,...s}){const t=G(()=>e.With("GuidImage")),{data:r,run:a}=h(b.Storage.GetBySlice.bind(b.Storage),{manual:!0,onError:t.error});return x.useEffect(()=>{o&&a(o,t)},[o]),n.jsx(Ae,{...s,src:r?URL.createObjectURL(new Blob(r)):"https://placehold.co/400?text=Loading..."})}const Pe=P({unset:{flexBasis:"unset",flexGrow:0},img:{...Vt,aspectRatio:"1",marginTop:m.spacingVerticalXS,marginBottom:m.spacingVerticalXS}});function Ss(o,e){const s={width:`${o}px`};return Q({columnId:"Cover",renderHeaderCell:()=>{const t=Pe();return n.jsx(ht,{className:t.unset,children:n.jsx("div",{style:s})})},renderCell(t){const r=Pe();return n.jsx(X,{className:r.unset,children:n.jsx(Es,{className:r.img,style:s,Guid:t.Cover,Log:e})})}})}function Ls(o){const{List:e}=F(),{data:s}=h(()=>b.Product.Get.Limit(o)),t=s||3;let r=0;for(const a of e)if(a.ProdId===o&&(r+=a.Quantity),r>=t)return[!0,t];return[!1,t]}const ue=P({prod:{...M,alignItems:"flex-start",justifyContent:"center"},qua:{flexBasis:"12%",flexGrow:0},act:{flexBasis:"7%",flexGrow:0}}),Is=[Q({columnId:"Product",renderCell(o){return n.jsxs(X,{className:ue().prod,children:[n.jsx(U,{href:`/Product/${o.ProdId}`,appearance:"subtle",children:n.jsx(mt,{children:o.Name})}),n.jsx(pt,{children:Object.values(o.Type).reduce((e,s)=>`${e} ${s},`,"")})]})}}),Q({columnId:"Quantity",renderCell(o){const{List:e,Update:s}=F(),[t,r]=Ls(o.ProdId);return n.jsx(X,{className:ue().qua,children:n.jsx(gt,{min:1,max:r,value:o.Quantity,onChange:(a,i)=>{t&&i.value>=o.Quantity||(o.Quantity=i.value,s(e))}})})}}),Q({columnId:"Action",renderCell(o){const{List:e,Update:s}=F();return n.jsx(X,{className:ue().act,children:n.jsx(L,{appearance:"subtle",icon:n.jsx(xt,{}),onClick:()=>s(e.filter(t=>t.Id!==o.Id))})})}})];function Fe(o){return[Ss(44,o),...Is]}const Ns=P({person:N,inf:{...M,flexBasis:"50%",rowGap:m.spacingVerticalM}});function ks({Log:o}){const e=Ns(),s=G(()=>o.With("PersonaInfo")),t=b.User.Get.useMe(s);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:e.person,children:[n.jsx("div",{className:e.inf,children:n.jsx(S,{label:"Name",size:"large",children:n.jsx(H,{children:t?.Name})})}),n.jsx("div",{className:e.inf,children:n.jsx(S,{label:"Phone",size:"large",children:n.jsx(H,{children:t?.Phone})})})]}),n.jsx(S,{label:"E-Mail",size:"large",children:n.jsx(H,{children:t?.EMail})}),n.jsx(S,{label:"Address",size:"large",children:n.jsx(H,{children:t?.Address})})]})}const Gs=P({body:{...M,rowGap:m.spacingVerticalXL},sub:{width:"fit-content",alignSelf:"flex-end"}}),de=new A("TopNavBar","ShopCart","Confirm");function As(){const[o,e]=x.useState(),[s,{toggle:t}]=O(),{List:r,Update:a}=F(),{Nav:i}=V(),d=Gs(),{dispatch:c,dispatchToast:u}=ne(de),{run:l}=b.Order.Post.useNew({manual:!0,onError(p,y){c({Message:"Failed Create Order",Request:y,Error:p})},onSuccess(p){u(n.jsxs(Z,{children:[n.jsx(ee,{children:"Order Placed"}),n.jsxs(te,{children:["Order Id: ",p]})]}),{intent:"success"}),a([]),t(),i("History",p)}});return n.jsxs(n.Fragment,{children:[n.jsx(L,{appearance:"primary",onClick:t,disabled:!r.length,children:"Checkout"}),n.jsxs(ft,{open:s,onOpenChange:t,position:"end",size:"medium",modalType:"alert",children:[n.jsx(wt,{children:n.jsx(yt,{action:n.jsx(L,{appearance:"subtle",icon:n.jsx(Pt,{}),onClick:t}),children:"Confirm Order"})}),n.jsx(Ct,{children:n.jsxs("div",{className:d.body,children:[n.jsx(ks,{Log:de}),n.jsx(ze,{Items:r,Columns:G(()=>Fe(de)),NoHeader:!0}),n.jsx(S,{label:"Comment",size:"large",children:n.jsx(jt,{value:o,onChange:(p,y)=>e(y.value),maxLength:1e3})}),n.jsx(L,{appearance:"primary",className:d.sub,disabled:!r.length,onClick:()=>l(r,o),children:"Submit"})]})})]})]})}const $s=P({conf:{...N,width:"100%",alignItems:"center",justifyContent:"space-between",marginTop:m.spacingVerticalS,columnGap:m.spacingHorizontalL},tooltip:{backgroundColor:m.colorBrandBackground,color:m.colorNeutralForegroundInverted,...R.borderRadius(m.borderRadiusCircular)}}),Os=new A("TopNavBar","ShopCart");function Us(){const[o,{toggle:e}]=O(),[s,{toggle:t}]=O(),r=$s(),{List:a}=F();return bt(()=>{if(o)return;t();const i=setTimeout(t,2e3);return()=>clearTimeout(i)},[a]),n.jsxs(Tt,{withArrow:!0,open:o,onOpenChange:e,children:[n.jsx(vt,{disableButtonEnhancement:!0,children:n.jsx(Et,{visible:s,withArrow:!0,content:{children:"↑",className:r.tooltip},relationship:"inaccessible",children:n.jsx(St,{icon:n.jsx(Lt,{}),appearance:"subtle",size:"large",checked:o})})}),n.jsxs(It,{children:[n.jsx(ze,{Items:a,Columns:G(()=>Fe(Os)),NoHeader:!0}),n.jsxs("div",{className:r.conf,children:[a.map(i=>i.Quantity).reduce((i,d)=>i+d,0)," items in shopping cart",n.jsx(As,{})]})]})]})}const Ms=P({navBox:{position:"fixed",top:0,width:"100%",height:`${me}px`,...R.padding(0,m.spacingHorizontalXXXL),backgroundColor:"#fff",boxSizing:"border-box",boxShadow:m.shadow4},navBar:{...N,maxWidth:pe,height:"100%",...R.margin(0,"auto"),alignItems:"center",justifyContent:"space-between"},logoBox:{...N,columnGap:m.spacingHorizontalL,alignItems:"center"},logoText:{color:m.colorBrandForeground2}});function Ds(){const o=Ms();return n.jsx(Nt,{children:n.jsx("header",{className:o.navBox,children:n.jsxs("nav",{className:o.navBar,children:[n.jsxs(U,{className:o.logoBox,href:"/",appearance:"subtle",children:[n.jsx(Ae,{src:"/Awai.png",height:me}),n.jsx(J,{size:600,font:"monospace",className:o.logoText,children:ge.Name})]}),n.jsx(cs,{}),n.jsxs("div",{className:o.logoBox,children:[n.jsx(bs,{}),n.jsx(os,{}),n.jsx(Us,{}),n.jsx(vs,{})]})]})})})}function Rs(){const{Rep:o}=V();return setTimeout(()=>o("/"),3e3),n.jsxs(n.Fragment,{children:[n.jsxs(kt,{children:[n.jsxs("title",{children:["Redirect - Not Found - ",ge.Name]}),n.jsx("meta",{name:"robots",content:"noindex, nofollow"})]}),n.jsx(q,{size:"huge",label:"Redirecting..."})]})}const Vs=P({body:{...M,minWidth:"1024px",position:"absolute",marginTop:`${me}px`,width:"100%",minHeight:"-webkit-fill-available",justifyContent:"space-between",backgroundColor:m.colorNeutralBackground2},content:{...M,maxWidth:pe,width:"-webkit-fill-available",marginLeft:"auto",marginRight:"auto",paddingLeft:m.spacingHorizontalM,paddingRight:m.spacingHorizontalM,paddingTop:m.spacingVerticalXXXL}});function Bs(){const o=Vs(),{Paths:e}=V(),s=e.at(0),t=x.useMemo(()=>{switch(s){case"Product":return n.jsx(Hs,{});case"Admin":return n.jsx(zs,{});case"History":return n.jsx(Fs,{});case"Login":return n.jsx(q,{size:"huge",label:"Login Redirecting..."});case"Reload":return n.jsx(q,{size:"huge",label:"Reloading..."});case"":case void 0:return n.jsx(_s,{});default:return n.jsx(Rs,{})}},[s]);return n.jsxs(n.Fragment,{children:[n.jsx(Ds,{}),n.jsxs("div",{className:o.body,children:[n.jsx("main",{className:o.content,children:n.jsx(x.Suspense,{fallback:n.jsx(q,{}),children:t})}),n.jsx(as,{})]}),n.jsx(zt,{})]})}const Hs=x.lazy(()=>se(()=>import("./index-KKv7mCDW.js"),__vite__mapDeps([0,1,2,3,4,5]))),zs=x.lazy(()=>se(()=>import("./index-wDd23271.js"),__vite__mapDeps([6,1,7,8,3,4]))),Fs=x.lazy(()=>se(()=>import("./index-_Wx57u9Q.js"),__vite__mapDeps([9,1,7]))),_s=x.lazy(()=>se(()=>import("./index-WeYL5ta0.js"),__vite__mapDeps([10,1,2,3,8])));Gt.createRoot(document.getElementById(ge.Name)).render(n.jsx(At,{theme:$t,children:n.jsx(Mt,{children:n.jsx(Ot,{instance:I,children:n.jsxs(ns,{children:[n.jsx(Ut,{pauseOnHover:!0}),n.jsx(Bs,{})]})})})}));export{Ps as A,Qs as B,Vt as C,ge as D,N as F,Es as G,b as H,A as L,Ss as M,Xs as S,M as a,Ls as b,V as c,Dt as d,ne as e,ze as f,F as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-KKv7mCDW.js","assets/vendor-EPO6t9z0.js","assets/isArrayLike--sVJAW2Y.js","assets/isObject-tyZXtoJz.js","assets/Lazy-HbnKInP_.js","assets/index-scunr7sf.css","assets/index-wDd23271.js","assets/Columns-LkpHheJM.js","assets/toFinite-GMFxiq4g.js","assets/index-_Wx57u9Q.js","assets/index-WeYL5ta0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
