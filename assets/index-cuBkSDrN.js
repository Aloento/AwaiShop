import{r as x,u as Ct,j as n,d as f,t as m,s as D,m as P,a as _t,T as _,b as z,c as et,e as Z,f as bt,D as jt,g as Tt,h as vt,i as zt,k as St,F as L,I as H,L as B,l as Et,n as mt,B as I,S as st,o as G,A as X,X as Wt,P as Qt,p as ft,H as Q,_ as W,q as Lt,v as It,M as Nt,w as $t,x as h,y as U,z as Xt,C as qt,E as Yt,G as A,J as ot,K as Jt,N as Kt,O as Zt,Q as te,R as ee,U as se,V as ne,W as re,Y as ae,Z as R,$ as oe,a0 as ie,a1 as wt,a2 as ce,a3 as ue,a4 as Ot,a5 as q,a6 as de,a7 as Y,a8 as le,a9 as he,aa as me,ab as pe,ac as ge,ad as xe,ae as fe,af as we,ag as ye,ah as Pe,ai as Ce,aj as be,ak as je,al as Te,am as ve,an as Se,ao as Ee,ap as Le,aq as Ie,ar as J,as as Ne,at as $e,au as Oe,av as Ge,aw as Ae}from"./vendor-_0sdFzlY.js";function it(i){return`/${i.filter(e=>e).map(e=>e.toString().replace(/^\/+/,"")).join("/")}`}const Gt=x.createContext({});function V(){return x.useContext(Gt)}function ke({children:i}){const[t,e]=x.useState(()=>({Paths:location.pathname.split("/").filter(c=>c),Search:new URLSearchParams(location.search),Put:s,Nav:(...c)=>a(it(c)),Rep:(...c)=>o(it(c)),Reload:(...c)=>d(c)}));function s(c){history.replaceState(null,"",`${location.pathname}${c.size?"?":""}${c.toString()}`),t.Search=new URLSearchParams(c),e({...t})}function r(c){t.Paths=c.split("/").filter(u=>u),t.Search=new URLSearchParams(location.search),e({...t})}function a(c){history.pushState(null,"",c),r(c)}function o(c){history.replaceState(null,"",c),r(c)}function d(c){history.replaceState(null,"","/Reload"),r("/Reload"),setTimeout(()=>{const u=c.length?it(c):location.pathname;history.pushState(null,"",u),r(u)},100)}return Ct(()=>{location.pathname==="/"&&location.search.startsWith("?/")&&o(location.search.substring(2)),addEventListener("click",c=>{const u=c.target?.closest("a");if(u){if(u.origin!==location.origin){u.target="_blank";return}c.preventDefault(),a(u.pathname)}}),addEventListener("popstate",c=>{c.preventDefault(),r(location.pathname)})}),n.jsx(Gt.Provider,{value:t,children:i})}class O{namespace;info;error;warn;debug;throw;constructor(...t){this.namespace=t.join(" > "),this.error=console.error.bind(this,this.baseColor(101,"error"),`
	`),this.warn=console.warn.bind(this,this.baseColor(103,"warn"),`
	`),this.info=console.info.bind(this,this.baseColor(104,"info"),`
	`),this.debug=console.debug.bind(this,this.baseColor(102,"debug"),`
	`),this.throw=console.log.bind(this,this.baseColor(105,"throw"),"↓ The Following Error is Thrown ↓")}With(...t){return new O(this.namespace,...t)}baseColor(t,e){return`\x1B[${t};30;1m ${e.toUpperCase()} \x1B[0m\x1B[100;97m ${f().format("YY-M-D H:m:s")} \x1B[1m\x1B[40;97m ${this.namespace} `}}const $={display:"flex"},Ue={flexDirection:"column"},k={...$,...Ue},Qs={...$,backgroundColor:m.colorNeutralBackground1,boxShadow:m.shadow4,...D.borderRadius(m.borderRadiusMedium)},Me={whiteSpace:"pre-line"},pt=60,gt="1636px",De={objectFit:"cover",objectPosition:"center"},Ve=P({pre:Me});function nt(i){const t=Ve(),{dispatchToast:e}=_t();return{dispatch:s=>{const r=s.Error.message,a=r.indexOf("Exception:");let o=r;a!==-1&&(o=r.substring(a+10)),e(n.jsxs(_,{children:[n.jsx(z,{children:"Internal Error"}),n.jsx(et,{subtitle:n.jsxs(Z,{className:t.pre,children:[o,n.jsx("br",{}),"More Info, See Console"]}),children:n.jsx(Z,{className:t.pre,children:s.Message})})]}),{intent:"error",timeout:1e4}),i.error(s)},dispatchToast:e}}const Re=P({box:{...k,rowGap:m.spacingVerticalM},one:{...$,columnGap:m.spacingVerticalXXXL}}),yt=new O("Setting");function At({Open:i,Toggle:t,New:e}){const s=Re(),r=bt().instance.getActiveAccount(),[a,o]=x.useState(),[d,c]=x.useState(),[u,l]=x.useState();j.User.Get.useMe(yt,{manual:e,onSuccess(y){if(!y)return;const{Name:g,Phone:S,Address:Ft}=y;o(g),c(S),l(Ft)}});const{dispatch:p,dispatchToast:C}=nt(yt),{run:v}=j.User.Post.useUpdate({manual:!0,onError(y,[g]){p({Message:`Failed ${e?"Create":"Update"} Info`,Error:y,Request:g})},onSuccess(y,[g]){C(n.jsxs(_,{children:[n.jsxs(z,{children:["Info ",e?"Created":"Updated"]}),n.jsxs(et,{children:[g.Name,n.jsx("br",{}),g.Phone,n.jsx("br",{}),g.Address]})]}),{intent:"success"}),e&&(M.next(!1),M.complete(),M.closed=!0),t()}});return n.jsx(jt,{open:i,onOpenChange:t,modalType:e?"alert":"modal",children:n.jsx(Tt,{children:n.jsxs(vt,{children:[n.jsx(zt,{children:e?"Welcome! Fill in your info to get started.":"Personal Information"}),n.jsxs(St,{className:s.box,children:[n.jsxs("div",{className:s.one,children:[n.jsx(L,{label:"Name",size:"large",required:!0,children:n.jsx(H,{size:"medium",value:a,maxLength:20,onChange:(y,g)=>o(g.value)})}),n.jsx(L,{label:"Phone",size:"large",required:!0,children:n.jsx(H,{size:"medium",value:d,maxLength:20,onChange:(y,g)=>c(g.value)})})]}),n.jsx(L,{label:"E-Mail",size:"large",children:n.jsx(B,{children:r?.username})}),n.jsx(L,{label:"Address",size:"large",required:!0,children:n.jsx(H,{size:"medium",value:u,maxLength:100,minLength:20,onChange:(y,g)=>l(g.value)})})]}),n.jsxs(Et,{children:[!e&&n.jsx(mt,{disableButtonEnhancement:!0,children:n.jsx(I,{appearance:"secondary",children:"Cancel"})}),n.jsx(I,{appearance:"primary",onClick:()=>v({EMail:r?.username,Name:a,Address:u,Phone:d}),children:"Submit"})]})]})})})}const M=new st;function Be(){const[i,{toggle:t}]=G();return Ct(()=>{M.subscribe(e=>e&&t())}),n.jsx(X,{children:n.jsx(At,{Open:i,Toggle:t,New:!0})})}class He{constructor(t,e){this.DB=t,this.Name=e,this.Sto=t.table(e),this.Trim()}Sto;async Get(t,e){const s=await this.Sto.get(t);return s?e&&await e(s)||typeof s.Exp=="number"&&s.Exp<f().unix()?(await this.Sto.delete(t),null):s.Val:null}async GetOrSet(t,e,s,r){const a=await this.Get(t,r);return a||this.Set(t,await e(),s)}async Set(t,e,s){if(!e)throw TypeError("Value cannot be null");if(s===null)return await this.Sto.put({Id:t,Exp:s,Val:e}),e;const r=(s||f().add(1,"week")).unix();if(s&&r<f().unix())throw RangeError(`Expire time [${r}] cannot be less than now`);return await this.Sto.put({Id:t,Exp:r,Val:e}),e}Trim(){return this.Sto.filter(t=>typeof t.Exp=="number"&&t.Exp<f().unix()).delete()}}const rt=new Wt("EShop",{autoOpen:!1});rt.version(1).stores({Shared:"Id, Exp",ShopCart:"Id"});rt.open();const E=new He(rt,"Shared"),ct=rt.table("ShopCart"),N=new Qt({auth:{clientId:"0ac3ee82-159d-407c-8539-7a9e1e3a1989",authority:"https://SoarCraft.b2clogin.com/SoarCraft.onmicrosoft.com/B2C_1_RegLog",knownAuthorities:["SoarCraft.b2clogin.com"],redirectUri:"https://awai.aloen.to/Login"},cache:{cacheLocation:"localStorage"},system:{loggerOptions:{loggerCallback(i,t){switch(i){case ft.Error:console.error(t);return;case ft.Warning:console.warn(t);return;default:console.debug(t)}}}}});async function kt(){try{return(await N.acquireTokenSilent({scopes:[]})).idToken}catch(i){N.getActiveAccount()&&await N.loginRedirect(),console.warn(i)}}await N.initialize();await N.handleRedirectPromise();N.setActiveAccount(N.getAllAccounts()[0]);class Ut extends Error{constructor(){super("Please Login First")}}class Fe extends Error{constructor(){super("Server Returned False")}}class Mt{static async EnsureConnected(){return this.Hub.state===Q.Connected?Promise.resolve():((this.Hub.state===Q.Disconnected||this.Hub.state===Q.Disconnecting)&&await this.Hub.start(),new Promise(t=>{const e=setInterval(()=>{this.Hub.state===Q.Connected&&(clearInterval(e),t())},100)}))}static async Invoke(t,...e){return await this.EnsureConnected(),this.Hub.invoke(t,...e)}static EnsureLogin(){if(!N.getActiveAccount())throw new Ut}static EnsureTrue(t){if(!t)throw new Fe}static async UpdateCache(t,e,s,r,a){const o=`${s}_${a?`Admin_${e}`:e}`,d=await E.Get(o);if(!d)return;const c=t(d);d.QueryExp?await E.Set(o,{...c,QueryExp:f().add(1,"m").unix()},null):await E.Set(o,c,r||null)}static async GetVersionCache(t,e,s){const r=`${e}_${s?`Admin_${t}`:t}`,a=await E.Get(r);if(a&&a.QueryExp>f().unix())return a;const o=await this.Invoke(e,t,a?.Version);if(o===!0)return E.Set(r,{...a,QueryExp:f().add(1,"m").unix()},null),a;if(!o)throw E.Sto.delete(r),new TypeError("Empty Response");return await E.Set(r,{...o,QueryExp:f().add(1,"m").unix()},null),o}static async GetTimeCache(t,e,s,...r){return await E.GetOrSet(`${e}_${t}`,async()=>await this.Invoke(e,...r),s)}static async FindCover(t,e,s){const r=[];for(const a of t){const o=await(await W(()=>Promise.resolve().then(()=>Xe),void 0)).ProductEntity.Photo(a);if(o){if(r.push(o),o.Cover)return o.ObjectId}else s?.warn(`Photo ${a} not found in Product ${e}`)}if(r.length>0)return s?.warn(`Product ${e} has no cover photo, using first photo instead`),r.sort((a,o)=>a.Order-o.Order)[0].ObjectId}static async HandleFileStream(t,e,s){const a=Math.ceil(t.size/30720);let o=0;for(;o<a;){const d=o*30720,c=Math.min(d+30720,t.size),u=t.slice(d,c),l=new FileReader,p=await new Promise((C,v)=>{l.onload=()=>C(new Uint8Array(l.result)),l.onerror=()=>v(l.error),l.readAsArrayBuffer(u)});e.next(p),s?.debug(`Sent chunk ${o+1}/${a}`),o++}e.complete()}}class T extends Mt{static Log=["|","ShopNet"];static Hub=new Lt().withUrl("https://awaishop.aloen.to:3389/Hub",{skipNegotiation:!0,transport:It.WebSockets,logMessageContent:!1,async accessTokenFactory(){const t=await kt();return t||""}}).withAutomaticReconnect().withStatefulReconnect().withHubProtocol(new Nt).configureLogging($t.Information).build()}T.Hub.on("OnNewUser",()=>{M.next(!0),console.debug("OnNewUser")});class _e extends T{static Categories(){return this.GetTimeCache("","GalleryGetCategories",f().add(1,"m"))}static async Products(t){const e=await this.GetTimeCache(t,"GalleryGetProducts",f().add(1,"m"),t);return[e,4-e.length%4]}}const ze={Get:_e};class We extends T{static async Get(t){if(!/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(t))throw new Error(`Invalid ObjectId ${t}`);return await this.EnsureConnected(),this.Hub.stream("ObjectStorageGet",t)}static GetBySlice(t,e){const s=[];return E.GetOrSet(t,()=>new Promise((r,a)=>{this.Get(t).then(o=>o.subscribe({error(d){a(d)},next(d){s.push(d),e.debug("Received Slice",t,s.length)},complete(){r(s)}}))}))}}class Qe extends T{static useDelete(t){return h(async e=>{this.EnsureLogin();const s=await this.Invoke("OrderDeleteCancel",e);return this.EnsureTrue(s),s},t)}}class w extends T{static Product(t){return this.GetVersionCache(t,"ProductEntity")}static Photo(t){return this.GetVersionCache(t,"PhotoEntity")}static Type(t){return this.GetVersionCache(t,"TypeEntity")}static Variant(t){return this.GetVersionCache(t,"VariantEntity")}}const Xe=Object.freeze(Object.defineProperty({__proto__:null,ProductEntity:w},Symbol.toStringTag,{value:"Module"}));class at extends T{static Log=[...super.Log,"Product","Get"];static async Basic(t,e){const s=e.With(...this.Log,"Basic"),r=await w.Product(t);if(!r)throw new Error(`Product ${t} Not Found`);const a=await this.PhotoList(t),o=await this.FindCover(a,t,s);return o?{Name:r.Name,Cover:o}:(s.warn(`Product ${t} has no photo`),{Name:r.Name,Cover:""})}static Limit(t){return this.Invoke("ProdGetLimit",t)}static async Combo(t,e){const s=e.With(...this.Log,"Combo"),r=await this.ComboList(t),a=[];for(const o of r){const d={};for(const c of o.Types){const u=await w.Type(c);if(!u){s.error(`[Mismatch] Type ${c} not found. Combo ${o.ComboId} : Product ${t}`);continue}const l=await w.Variant(u.VariantId);if(!l){s.error(`[Mismatch] Variant ${u.VariantId} not found. Combo ${o.ComboId} : Type ${c} : Product ${t}`);continue}d[l.Name]=u.Name}a.push({Id:o.ComboId,Stock:o.Stock,Combo:d})}return a}static async Carousel(t,e){const s=e.With(...this.Log,"Carousel"),r=await this.PhotoList(t),a=[];for(let o=0;o<r.length;o++){const d=r[o],c=await w.Photo(d);c?a.push({Id:c.Order,Cover:c.ObjectId,Caption:c.Caption}):s.warn(`Photo ${d} not found in Product ${t}`)}return a.sort((o,d)=>o.Id-d.Id)}static async Lexical(t){return(await w.Product(t))?.Description}static ComboList(t){return this.GetTimeCache(t,"ProductGetComboList",f().add(1,"m"),t)}static PhotoList(t){return this.GetTimeCache(t,"ProductGetPhotoList",f().add(1,"m"),t)}}class ut extends T{static Order(t){return this.EnsureLogin(),this.GetVersionCache(t,"OrderEntity")}static Comment(t){return this.EnsureLogin(),this.GetVersionCache(t,"CommentEntity")}}class qe extends T{static Log=[...super.Log,"Order","Get"];static async List(t){this.EnsureLogin();const e=t.With(...this.Log,"List"),s=await this.GetTimeCache("","OrderGetList",f().add(1,"m")),r=[];for(const a of s){const o=await ut.Order(a.OrderId);if(!o){e.warn(`[Mismatch] Order ${a.OrderId} not found`);continue}const d=[];for(const c of a.Products){const u=await w.Product(c);if(!u){e.warn(`[Mismatch] Product ${c} not found`);continue}d.push(u.Name)}r.push({Id:a.OrderId,Items:d,Quantity:a.Quantity,Status:o.Status,TrackNumber:o.TrackingNumber,OrderDate:o.CreateAt})}return r.sort((a,o)=>o.OrderDate.getTime()-a.OrderDate.getTime())}static async Detail(t,e){this.EnsureLogin();const s=e.With(...this.Log,"Detail"),r=await this.GetTimeCache(t,"OrderGetDetail",f().add(1,"m"),t),a=[];let o=0;for(const c of r.Items){const u={};let l=0;for(const y of c.Types){const g=await w.Type(y);if(!g){s.warn(`[Mismatch] Type ${y} not found. Order : ${t}`);continue}const S=await w.Variant(g.VariantId);if(!S){s.warn(`[Mismatch] Variant ${g.VariantId} not found. Type : ${y}, Order : ${t}`);continue}u[S.Name]=g.Name,l=S.ProductId}const p=await w.Product(l);if(!p){s.warn(`[Mismatch] Product ${l} not found. Order : ${t}`);continue}const C=await at.PhotoList(l),v=await this.FindCover(C,l,s);v||s.warn(`Product ${l} has no photo`),a.push({Id:o++,ProdId:l,Cover:v||"",Name:p.Name,Type:u,Quantity:c.Quantity})}const d=[];for(const c of r.Comments){const u=await ut.Comment(c);if(!u){s.warn(`[Mismatch] Comment ${c} not found. Order : ${t}`);continue}d.push({Content:u.Content,Time:u.CreateAt,User:u.Name||"You"})}return{ShopCart:a,Comments:d.sort((c,u)=>c.Time.getTime()-u.Time.getTime())}}static Order=ut.Order}class Ye extends T{static useNew(t){return h((e,s)=>{this.EnsureLogin();const r=e.map(a=>({ProdId:a.ProdId,Type:Object.values(a.Type),Quantity:a.Quantity}));return this.Invoke("OrderPostNew",r,s)},t)}static useAppend(t){return h(async(e,s)=>{this.EnsureLogin();const r=await this.Invoke("OrderPostAppend",e,s);return this.EnsureTrue(r),r},t)}static useCancel(t){return h(async(e,s)=>{this.EnsureLogin();const r=await this.Invoke("OrderPostCancel",e,s);return this.EnsureTrue(r),r},t)}static useReceived(t){return h(async e=>{this.EnsureLogin();const s=await this.Invoke("OrderPostReceived",e);return this.EnsureTrue(s),s},t)}}const Je={Get:qe,Post:Ye,Delete:Qe},Ke={Get:at};class Dt extends T{static Me=new st}class Ze extends Dt{static useMe(t,e,s=!0){const r=U(()=>t.With("|","Hub","User","Get","Me")),{dispatch:a,dispatchToast:o}=nt(r),[d,c]=x.useState();x.useEffect(()=>{const l=this.Me.subscribe(p=>c(p));return()=>l.unsubscribe()},[]);const u=h(()=>(this.EnsureLogin(),this.GetVersionCache(0,"UserGetMe")),{...e,onSuccess:(l,p)=>{this.Me.next(l),e?.onSuccess?.(l,p)},onError(l){l instanceof Ut?s?r.debug(l):o(n.jsx(_,{children:n.jsx(z,{children:l.message})}),{intent:"warning",timeout:5e3}):a({Message:"Failed to Get Your Info",Error:l,Request:""})}});return u.data=d,u}}class ts extends Dt{static useUpdate(t){return h(async e=>{this.EnsureLogin();const s=await this.Invoke("UserPostUpdate",e);return this.EnsureTrue(s),await this.UpdateCache(r=>{const a={...r,...e};return this.Me.next(a),a},0,"UserGetMe"),s},t)}}const es={Get:Ze,Post:ts},j={Gallery:ze,Product:Ke,User:es,Order:Je,Storage:We},Vt=x.createContext({});function F(){return x.useContext(Vt)}const dt=new O("ShopCart","Context");function ss({children:i}){const[t,e]=x.useState([]);h(async()=>{const a=await ct.toArray(),o=[];for(const d of a){const c=await j.Product.Get.Basic(d.ProdId,dt);o.push({...d,...c})}e(o)},{onError:dt.error});async function s(a){for(let o=0;o<a.length;o++)a[o].Id=o;e([...a]),await ct.clear(),await ct.bulkPut(a.map(o=>({Id:o.Id,ProdId:o.ProdId,Type:o.Type,Quantity:o.Quantity})))}async function r(a,o,d){const c=await j.Product.Get.Basic(a,dt);t.push({...c,Id:t.length,ProdId:a,Type:o,Quantity:d}),s(t)}return n.jsx(Vt.Provider,{value:{List:t,Add:r,Update:s},children:i})}const xt={Name:"AwaiShop"},ns=P({box:{width:"-webkit-fill-available",marginTop:m.spacingVerticalXXXL,...D.padding(m.spacingVerticalXXXL,0),backgroundColor:m.colorNeutralBackgroundInverted},main:{...$,maxWidth:gt,...D.margin(0,"auto")},logo:{width:"150px",filter:"invert(96%)"},otc:{color:"white"}});function rs(){const i=ns();return n.jsx("footer",{className:i.box,children:n.jsx("div",{className:i.main,children:n.jsx("img",{src:"/safari-pinned-tab.svg",className:i.logo})})})}function as(){const{Paths:i,Search:t,Put:e}=V(),s=i.at(0),r=i.at(1),a=r==="User",o=r==="Order",d=a?"admin":"pending";return s==="Admin"&&(a||o)&&n.jsxs(n.Fragment,{children:[n.jsx(H,{placeholder:"Search in Any Field",contentBefore:n.jsx(Xt,{}),appearance:"underline",onChange:(c,u)=>{u.value?t.set("search",u.value):t.delete("search"),e(t)}}),n.jsx(qt,{label:`Only ${a?"Admin":"Pending"}`,checked:t.get(d)==="",onChange:(c,u)=>{u.checked?t.set(d,""):t.delete(d),e(t)}})]})}const os=P({box:{...$,flexGrow:1,height:"inherit",marginLeft:m.spacingHorizontalS,alignItems:"center"},div:{color:m.colorNeutralForegroundDisabled},link:{textDecorationLine:"unset !important"}});function is(){const i=os(),{Paths:t}=V(),e=t.at(0),s=t.at(1)||"Product";return e==="Admin"&&n.jsxs("div",{className:i.box,children:[n.jsx(Z,{size:600,font:"monospace",className:i.div,children:"|"}),n.jsxs(Yt,{selectedValue:s,children:[n.jsx(A,{appearance:"subtle",href:"/Admin",className:i.link,children:n.jsx(ot,{value:"Product",children:"Product List"})}),n.jsx(A,{appearance:"subtle",href:"/Admin/Order",className:i.link,children:n.jsx(ot,{value:"Order",children:"Order List"})}),n.jsx(A,{appearance:"subtle",href:"/Admin/User",className:i.link,children:n.jsx(ot,{value:"User",children:"User List"})})]})]})}class b extends Mt{static Log=["|","AdminNet"];static Hub=new Lt().withUrl("https://awaishop.aloen.to:3389/AdminHub",{skipNegotiation:!0,transport:It.WebSockets,logMessageContent:!1,async accessTokenFactory(){const t=await kt();if(t)return t;throw new Error("Please Login First")}}).withAutomaticReconnect().withStatefulReconnect().withHubProtocol(new Nt).configureLogging($t.Information).build();static UpdateCache(t,e,s,r){return super.UpdateCache(t,e,s,r,!0)}static GetVersionCache(t,e){return super.GetVersionCache(t,e,!0)}static GetTimeCache(t,e,s,...r){return super.GetTimeCache(`Admin_${t}`,e,s,...r)}}class tt extends b{static User(t){return this.EnsureLogin(),this.GetVersionCache(t,"UserEntity")}}class K extends b{static Order(t){return this.EnsureLogin(),this.GetVersionCache(t,"OrderEntity")}static Comment(t){return this.EnsureLogin(),this.GetVersionCache(t,"CommentEntity")}}class cs extends b{static Log=[...super.Log,"Order","Get"];static async List(t){this.EnsureLogin();const e=t.With(...this.Log,"List"),s=await this.GetTimeCache("","OrderGetList",f().add(1,"m")),r=[];for(const a of s){const o=await K.Order(a.OrderId);if(!o){e.warn(`[Mismatch] Order ${a.OrderId} not found`);continue}const d=[];for(const u of a.Products){const l=await w.Product(u);if(!l){e.warn(`[Mismatch] Product ${u} not found`);continue}d.push(l.Name)}const c=await tt.User(o.UserId);if(!c){e.error(`[Mismatch] User ${o.UserId} not found`);continue}r.push({Id:a.OrderId,Items:d,Quantity:a.Quantity,Status:o.Status,TrackNumber:o.TrackingNumber,OrderDate:o.CreateAt,User:c.Name})}return r.sort((a,o)=>o.OrderDate.getTime()-a.OrderDate.getTime())}static async Detail(t,e){this.EnsureLogin();const s=e.With(...this.Log,"Detail"),r=await this.GetTimeCache(t,"OrderGetDetail",f().add(1,"m"),t),a=[];let o=0;for(const c of r.Items){const u={};let l=0;for(const y of c.Types){const g=await w.Type(y);if(!g){s.warn(`[Mismatch] Type ${y} not found. Order : ${t}`);continue}const S=await w.Variant(g.VariantId);if(!S){s.warn(`[Mismatch] Variant ${g.VariantId} not found. Type : ${y}, Order : ${t}`);continue}u[S.Name]=g.Name,l=S.ProductId}const p=await w.Product(l);if(!p){s.warn(`[Mismatch] Product ${l} not found. Order : ${t}`);continue}const C=await at.PhotoList(l),v=await this.FindCover(C,l,s);v||s.warn(`Product ${l} has no photo`),a.push({Id:o++,ProdId:l,Cover:v||"",Name:p.Name,Type:u,Quantity:c.Quantity})}const d=[];for(const c of r.Comments){const u=await K.Comment(c);if(!u){s.warn(`[Mismatch] Comment ${c} not found. Order : ${t}`);continue}let l="Client";if(u.UserId){const p=await tt.User(u.UserId);p?l=p.Name:s.warn(`[Mismatch] User ${u.UserId} not found. Order : ${t}`)}d.push({Content:u.Content,Time:u.CreateAt,User:l})}return{ShopCart:a,Comments:d.sort((c,u)=>c.Time.getTime()-u.Time.getTime())}}static Order=K.Order}class us extends b{static useAppend(t){return h(async(e,s)=>{const r=await this.Invoke("OrderPostAppend",e,s);return this.EnsureTrue(r),r},t)}static useClose(t){return h(async(e,s)=>{const r=await this.Invoke("OrderPostClose",e,s);return this.EnsureTrue(r),r},t)}static useShip(t){return h(async(e,s)=>{const r=await this.Invoke("OrderPostShip",e,s);return this.EnsureTrue(r),r},t)}static useAccept(t){return h(async e=>{const s=await this.Invoke("OrderPostAccept",e);return this.EnsureTrue(s),s},t)}}const ds={Get:cs,Post:us};class ls extends b{static usePhoto(t){return h(async e=>{const s=await this.Invoke("ProductDeletePhoto",e);return this.EnsureTrue(s),s},t)}static useVariant(t){return h(async e=>{const s=await this.Invoke("ProductDeleteVariant",e);return this.EnsureTrue(s),s},t)}static useType(t){return h(async(e,s)=>{const r=await this.Invoke("ProductDeleteType",e,s);return this.EnsureTrue(r),r},t)}static useCombo(t){return h(async e=>{const s=await this.Invoke("ProductDeleteCombo",e);return this.EnsureTrue(s),s},t)}static useProduct(t){return h(async e=>{const s=await this.Invoke("ProductDeleteProduct",e);return this.EnsureTrue(s),s},t)}}class hs extends b{static Log=[...super.Log,"Product","Get"];static async List(t){const e=t.With(...this.Log,"List"),s=await this.GetTimeCache("","ProductGetList",f().add(1,"m")),r=[];for(const a of s){const o=await w.Product(a.ProductId);if(!o){e.warn(`Product ${a.ProductId} Not Found`);continue}const d=await at.PhotoList(a.ProductId),c=await this.FindCover(d,a.ProductId,e);c||e.warn(`Product ${a.ProductId} has no photo`),r.push({Id:a.ProductId,Cover:c||"",Name:o.Name,Category:o.Category||"Pending",Variant:a.Variant,Combo:a.Combo,Stock:a.Stock})}return r}static async Name(t){const e=await w.Product(t);if(!e)throw new Error(`Product ${t} Not Found`);return e.Name}static async Category(t){const e=await w.Product(t);if(!e)throw new Error(`Product ${t} Not Found`);return e.Category}static async Variants(t,e){const s=e.With(...this.Log,"Variants"),r=await this.GetTimeCache(t,"ProductGetVariants",f().add(1,"m"),t),a=[];for(const o of r){const d=await w.Variant(o.VariantId);if(!d){s.warn(`Variant ${o} Not Found. Product : ${t}`);continue}const c=[];for(const u of o.Types){const l=await w.Type(u);if(!l){s.warn(`Type ${u} Not Found. Variant : ${o.VariantId}, Product : ${t}`);continue}c.push(l.Name)}a.push({Id:o.VariantId,Name:d.Name,Types:c})}return a}}class ms extends b{static Log=[...super.Log,"Product","Patch"];static useName(t){return h(async(e,s)=>{const r=await this.Invoke("ProductPatchName",e,s);return this.EnsureTrue(r),r},t)}static useCategory(t){return h(async(e,s)=>{const r=await this.Invoke("ProductPatchCategory",e,s);return this.EnsureTrue(r),r},t)}static usePhoto(t,e){const s=U(()=>t.With(...this.Log,"Photo"));return h(async(r,a)=>{if(!a.type.startsWith("image/"))throw new TypeError("File is not an image");if(a.size>10*1024*1024)throw new RangeError("File is too large, max 10MB");await this.EnsureConnected();const o=new st,d=this.Hub.invoke("ProductPatchPhoto",r,o);return await this.HandleFileStream(a,o,s),this.EnsureTrue(await d),!0},e)}static useCaption(t){return h(async(e,s)=>{const r=await this.Invoke("ProductPatchCaption",e,s);return this.EnsureTrue(r),r},t)}static useVariantName(t){return h(async(e,s)=>{const r=await this.Invoke("ProductPatchVariantName",e,s);return this.EnsureTrue(r),r},t)}static useType(t){return h(async(e,s,r)=>{const a=await this.Invoke("ProductPatchType",e,s,r);return this.EnsureTrue(a),a},t)}static useCombo(t){return h(async(e,s,r)=>{const a=await this.Invoke("ProductPatchCombo",e,s,r);return this.EnsureTrue(a),a},t)}}let Rt;function Xs(i){Rt=i}class ps extends b{static Log=[...super.Log,"Product","Post"];static useCreate(t){return h(e=>this.Invoke("ProductPostCreate",e),t)}static useMovePhoto(t){return h(async(e,s)=>{const r=await this.Invoke("ProductPostMovePhoto",e,s);return this.EnsureTrue(r),r},t)}static usePhoto(t,e){const s=U(()=>t.With(...this.Log,"Photo"));return h(async(r,a)=>{if(!a.type.startsWith("image/"))throw new TypeError("File is not an image");if(a.size>10*1024*1024)throw new RangeError("File is too large, max 10MB");const o=new st,d=this.Invoke("ProductPostPhoto",r,o);return await this.HandleFileStream(a,o,s),this.EnsureTrue(await d),!0},e)}static useVariant(t){return h((e,s)=>this.Invoke("ProductPostVariant",e,s),t)}static useType(t){return h((e,s)=>this.Invoke("ProductPostType",e,s),t)}static useCombo(t){return h((e,s,r)=>this.Invoke("ProductPostCombo",e,s,r),t)}static useDescription(t){return h(async e=>{const s=Rt?.getEditorState();let r;s&&!s.isEmpty()&&(r=JSON.stringify(s.toJSON()));const a=await this.Invoke("ProductPostDescription",e,r);return this.EnsureTrue(a),a},t)}}const gs={Get:hs,Post:ps,Patch:ms,Delete:ls};class xs extends b{static useUser(t){return h(async e=>{const s=await this.Invoke("UserDeleteUser",e);return this.EnsureTrue(s),s},t)}static useAdmin(t){return h(async e=>{const s=await this.Invoke("UserDeleteAdmin",e);return this.EnsureTrue(s),s},t)}}class fs extends b{static async OrderUser(t){const e=await K.Order(t);if(!e)throw new Error(`Order ${t} not found`);const s=await tt.User(e.UserId);if(!s)throw new Error(`User ${e.UserId} not found in order ${t}`);return s}static async List(){const t=await this.GetTimeCache("","UserGetList",f().add(1,"m")),e=[];for(const s of t){const r=await tt.User(s);if(!r){console.warn(`User ${s} not found`);continue}e.push({Id:s,Name:r.Name,EMail:r.EMail,Admin:r.Admin})}return e}}class ws extends b{static useAdmin(t){return h(async e=>{const s=await this.Invoke("UserPostAdmin",e);return this.EnsureTrue(s),s},t)}}const ys={Get:fs,Post:ws,Delete:xs},Ps={Product:gs,Order:ds,User:ys},Cs=P({body:k}),bs=new O("Admin","Product","AddButton");function js(){const{Nav:i,Paths:t}=V(),e=t.at(0),s=t.at(1),r=Cs(),[a,o]=x.useState(""),{dispatch:d,dispatchToast:c}=nt(bs),{run:u}=Ps.Product.Post.useCreate({manual:!0,onError(l,p){d({Message:`Failed Create ${a}`,Request:p,Error:l})},onSuccess(l){c(n.jsxs(_,{children:[n.jsx(z,{children:"New Product Created"}),n.jsxs(et,{children:[l," ",a]})]}),{intent:"success"}),i("Admin",l)}});return e==="Admin"&&!s&&n.jsxs(jt,{children:[n.jsx(mt,{disableButtonEnhancement:!0,children:n.jsx(I,{appearance:"primary",icon:n.jsx(Jt,{}),children:"New Product"})}),n.jsx(Tt,{children:n.jsxs(vt,{children:[n.jsx(St,{className:r.body,children:n.jsx(H,{required:!0,size:"large",value:a,maxLength:15,appearance:"underline",onChange:(l,p)=>o(p.value),contentBefore:n.jsx(Kt,{children:"Give A Name"})})}),n.jsxs(Et,{children:[n.jsx(mt,{disableButtonEnhancement:!0,children:n.jsx(I,{appearance:"secondary",children:"Cancel"})}),n.jsx(I,{appearance:"primary",onClick:()=>u(a),children:"Create"})]})]})})]})}const Ts=new O("Avatar","Menu");function vs(){const[i,{toggle:t}]=G(),[e,{toggle:s}]=G(),{instance:r}=bt(),[a,{set:o}]=G(!0);x.useEffect(()=>{M.subscribe(l=>o(!l))},[]);const{data:d}=j.User.Get.useMe(Ts),c=r.getActiveAccount(),u=c?.name||c?.username;return n.jsxs(n.Fragment,{children:[n.jsxs(Zt,{open:i,onOpenChange:t,children:[n.jsx(te,{children:n.jsx(ee,{size:36,active:i?"active":"unset",name:u})}),n.jsx(se,{children:n.jsxs(ne,{children:[n.jsx(X,{children:n.jsxs(re,{children:["Hi ",u]})}),n.jsx(ae,{children:n.jsx(R,{onClick:()=>r.loginRedirect(),children:"Login"})}),n.jsxs(X,{children:[n.jsx(A,{appearance:"subtle",href:"/History",children:n.jsx(R,{children:"History"})}),d?.Admin&&n.jsx(A,{appearance:"subtle",href:"/Admin",children:n.jsx(R,{children:"Admin"})}),n.jsx(R,{onClick:s,children:"Setting"}),n.jsx(R,{onClick:()=>r.logoutRedirect(),children:"Logout"})]})]})})]}),a&&n.jsx(X,{children:n.jsx(At,{Open:e,Toggle:s})})]})}function Bt({Items:i,Columns:t,NoHeader:e}){return n.jsxs(oe,{items:i||[],columns:t,getRowId:s=>s.Id,children:[!e&&n.jsx(ie,{children:n.jsx(wt,{children:({renderHeaderCell:s})=>s()})}),n.jsx(ce,{children:({item:s,rowId:r})=>n.jsx(wt,{children:({renderCell:a})=>a(s)},r)}),!i&&n.jsx(ue,{size:48})]})}function Ss({Guid:i,Log:t,...e}){const s=U(()=>t.With("GuidImage")),{data:r,run:a}=h(j.Storage.GetBySlice.bind(j.Storage),{manual:!0,onError:s.error});return x.useEffect(()=>{i&&a(i,s)},[i]),n.jsx(Ot,{...e,src:r?URL.createObjectURL(new Blob(r)):"https://placehold.co/400?text=Loading..."})}const Pt=P({unset:{flexBasis:"unset",flexGrow:0},img:{...De,aspectRatio:"1",marginTop:m.spacingVerticalXS,marginBottom:m.spacingVerticalXS}});function Es(i,t){const e={width:`${i}px`};return q({columnId:"Cover",renderHeaderCell:()=>{const s=Pt();return n.jsx(de,{className:s.unset,children:n.jsx("div",{style:e})})},renderCell(s){const r=Pt();return n.jsx(Y,{className:r.unset,children:n.jsx(Ss,{className:r.img,style:e,Guid:s.Cover,Log:t})})}})}function Ls(i){const{List:t}=F(),{data:e}=h(()=>j.Product.Get.Limit(i)),s=e||3;let r=0;for(const a of t)if(a.ProdId===i&&(r+=a.Quantity),r>=s)return[!0,s];return[!1,s]}const lt=P({prod:{...k,alignItems:"flex-start",justifyContent:"center"},qua:{flexBasis:"12%",flexGrow:0},act:{flexBasis:"7%",flexGrow:0}}),Is=[q({columnId:"Product",renderCell(i){return n.jsxs(Y,{className:lt().prod,children:[n.jsx(A,{href:`/Product/${i.ProdId}`,appearance:"subtle",children:n.jsx(le,{children:i.Name})}),n.jsx(he,{children:Object.values(i.Type).reduce((t,e)=>`${t} ${e},`,"")})]})}}),q({columnId:"Quantity",renderCell(i){const{List:t,Update:e}=F(),[s,r]=Ls(i.ProdId);return n.jsx(Y,{className:lt().qua,children:n.jsx(me,{min:1,max:r,value:i.Quantity,onChange:(a,o)=>{s&&o.value>=i.Quantity||(i.Quantity=o.value,e(t))}})})}}),q({columnId:"Action",renderCell(i){const{List:t,Update:e}=F();return n.jsx(Y,{className:lt().act,children:n.jsx(I,{appearance:"subtle",icon:n.jsx(pe,{}),onClick:()=>e(t.filter(s=>s.Id!==i.Id))})})}})];function Ht(i){return[Es(44,i),...Is]}const Ns=P({person:$,inf:{...k,flexBasis:"50%",rowGap:m.spacingVerticalM}});function $s({Log:i}){const t=Ns(),e=U(()=>i.With("PersonaInfo")),{data:s}=j.User.Get.useMe(e);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:t.person,children:[n.jsx("div",{className:t.inf,children:n.jsx(L,{label:"Name",size:"large",children:n.jsx(B,{children:s?.Name})})}),n.jsx("div",{className:t.inf,children:n.jsx(L,{label:"Phone",size:"large",children:n.jsx(B,{children:s?.Phone})})})]}),n.jsx(L,{label:"E-Mail",size:"large",children:n.jsx(B,{children:s?.EMail})}),n.jsx(L,{label:"Address",size:"large",children:n.jsx(B,{children:s?.Address})})]})}const Os=P({body:{...k,rowGap:m.spacingVerticalXL},sub:{width:"fit-content",alignSelf:"flex-end"}}),ht=new O("TopNavBar","ShopCart","Confirm");function Gs(){const[i,t]=x.useState(),[e,{toggle:s}]=G(),{List:r,Update:a}=F(),{Nav:o}=V(),d=Os(),{dispatch:c,dispatchToast:u}=nt(ht),{run:l}=j.Order.Post.useNew({manual:!0,onError(p,C){c({Message:"Failed Create Order",Request:C,Error:p})},onSuccess(p){u(n.jsxs(_,{children:[n.jsx(z,{children:"Order Placed"}),n.jsxs(et,{children:["Order Id: ",p]})]}),{intent:"success"}),a([]),s(),o("History",p)}});return n.jsxs(n.Fragment,{children:[n.jsx(I,{appearance:"primary",onClick:s,disabled:!r.length,children:"Checkout"}),n.jsxs(ge,{open:e,onOpenChange:s,position:"end",size:"medium",modalType:"alert",children:[n.jsx(xe,{children:n.jsx(fe,{action:n.jsx(I,{appearance:"subtle",icon:n.jsx(we,{}),onClick:s}),children:"Confirm Order"})}),n.jsx(ye,{children:n.jsxs("div",{className:d.body,children:[n.jsx($s,{Log:ht}),n.jsx(Bt,{Items:r,Columns:U(()=>Ht(ht)),NoHeader:!0}),n.jsx(L,{label:"Comment",size:"large",children:n.jsx(Pe,{value:i,onChange:(p,C)=>t(C.value),maxLength:1e3})}),n.jsx(I,{appearance:"primary",className:d.sub,disabled:!r.length,onClick:()=>l(r,i),children:"Submit"})]})})]})]})}const As=P({conf:{...$,width:"100%",alignItems:"center",justifyContent:"space-between",marginTop:m.spacingVerticalS,columnGap:m.spacingHorizontalL},tooltip:{backgroundColor:m.colorBrandBackground,color:m.colorNeutralForegroundInverted,...D.borderRadius(m.borderRadiusCircular)}}),ks=new O("TopNavBar","ShopCart");function Us(){const[i,{toggle:t}]=G(),[e,{toggle:s}]=G(),r=As(),{List:a}=F();return Ce(()=>{if(i)return;s();const o=setTimeout(s,2e3);return()=>clearTimeout(o)},[a]),n.jsxs(be,{withArrow:!0,open:i,onOpenChange:t,children:[n.jsx(je,{disableButtonEnhancement:!0,children:n.jsx(Te,{visible:e,withArrow:!0,content:{children:"↑",className:r.tooltip},relationship:"inaccessible",children:n.jsx(ve,{icon:n.jsx(Se,{}),appearance:"subtle",size:"large",checked:i})})}),n.jsxs(Ee,{children:[n.jsx(Bt,{Items:a,Columns:U(()=>Ht(ks)),NoHeader:!0}),n.jsxs("div",{className:r.conf,children:[a.map(o=>o.Quantity).reduce((o,d)=>o+d,0)," items in shopping cart",n.jsx(Gs,{})]})]})]})}const Ms=P({navBox:{position:"fixed",top:0,width:"100%",height:`${pt}px`,...D.padding(0,m.spacingHorizontalXXXL),backgroundColor:"#fff",boxSizing:"border-box",boxShadow:m.shadow4},navBar:{...$,maxWidth:gt,height:"100%",...D.margin(0,"auto"),alignItems:"center",justifyContent:"space-between"},logoBox:{...$,columnGap:m.spacingHorizontalL,alignItems:"center"},logoText:{color:m.colorBrandForeground2}});function Ds(){const i=Ms();return n.jsx(Le,{children:n.jsx("header",{className:i.navBox,children:n.jsxs("nav",{className:i.navBar,children:[n.jsxs(A,{className:i.logoBox,href:"/",appearance:"subtle",children:[n.jsx(Ot,{src:"/Awai.png",height:pt}),n.jsx(Z,{size:600,font:"monospace",className:i.logoText,children:xt.Name})]}),n.jsx(is,{}),n.jsxs("div",{className:i.logoBox,children:[n.jsx(js,{}),n.jsx(as,{}),n.jsx(Us,{}),n.jsx(vs,{})]})]})})})}function Vs(){const{Rep:i}=V();return setTimeout(()=>i("/"),3e3),n.jsxs(n.Fragment,{children:[n.jsxs(Ie,{children:[n.jsxs("title",{children:["Redirect - Not Found - ",xt.Name]}),n.jsx("meta",{name:"robots",content:"noindex, nofollow"})]}),n.jsx(J,{size:"huge",label:"Redirecting..."})]})}const Rs=P({body:{...k,minWidth:"1024px",position:"absolute",marginTop:`${pt}px`,width:"100%",minHeight:"-webkit-fill-available",justifyContent:"space-between",backgroundColor:m.colorNeutralBackground2},content:{...k,maxWidth:gt,width:"-webkit-fill-available",marginLeft:"auto",marginRight:"auto",paddingLeft:m.spacingHorizontalM,paddingRight:m.spacingHorizontalM,paddingTop:m.spacingVerticalXXXL}});function Bs(){const i=Rs(),{Paths:t}=V(),e=t.at(0),s=x.useMemo(()=>{switch(e){case"Product":return n.jsx(Hs,{});case"Admin":return n.jsx(Fs,{});case"History":return n.jsx(_s,{});case"Login":return n.jsx(J,{size:"huge",label:"Login Redirecting..."});case"Reload":return n.jsx(J,{size:"huge",label:"Reloading..."});case"":case void 0:return n.jsx(zs,{});default:return n.jsx(Vs,{})}},[e]);return n.jsxs(n.Fragment,{children:[n.jsx(Ds,{}),n.jsxs("div",{className:i.body,children:[n.jsx("main",{className:i.content,children:n.jsx(x.Suspense,{fallback:n.jsx(J,{}),children:s})}),n.jsx(rs,{})]}),n.jsx(Be,{})]})}const Hs=x.lazy(()=>W(()=>import("./index-xPoMuBxD.js"),__vite__mapDeps([0,1,2,3,4,5]))),Fs=x.lazy(()=>W(()=>import("./index-wjwQcMNe.js"),__vite__mapDeps([6,1,7,8,3,4]))),_s=x.lazy(()=>W(()=>import("./index-CvVQuKOO.js"),__vite__mapDeps([9,1,7]))),zs=x.lazy(()=>W(()=>import("./index-izZ4cZ4C.js"),__vite__mapDeps([10,1,2,3,8])));Ne.createRoot(document.getElementById(xt.Name)).render(n.jsx($e,{theme:Oe,children:n.jsx(ke,{children:n.jsx(Ge,{instance:N,children:n.jsxs(ss,{children:[n.jsx(Ae,{pauseOnHover:!0}),n.jsx(Bs,{})]})})})}));export{Ps as A,Qs as B,De as C,xt as D,$ as F,Ss as G,j as H,O as L,Es as M,Xs as S,k as a,Ls as b,V as c,Ue as d,nt as e,Bt as f,F as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-xPoMuBxD.js","assets/vendor-_0sdFzlY.js","assets/isArrayLike--sVJAW2Y.js","assets/isObject-tyZXtoJz.js","assets/Lazy-nGrb3it4.js","assets/index-scunr7sf.css","assets/index-wjwQcMNe.js","assets/Columns-BTmjkf_5.js","assets/toFinite-GMFxiq4g.js","assets/index-CvVQuKOO.js","assets/index-izZ4cZ4C.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
