import{r as f,u as Pe,j as n,d as x,t as m,s as V,m as y,a as _e,T as _,b as W,c as te,e as Z,f as Ce,D as je,g as Te,h as Se,i as We,k as ve,F as v,I as F,L as H,l as Ee,n as me,B as L,S as se,o as A,A as X,X as Qe,P as Xe,p as fe,H as Q,q as Le,v as Ne,M as Ie,w as Ge,x as h,y as U,z as qe,C as Ye,E as Je,G as k,J as oe,K as Ke,N as Ze,O as et,Q as tt,R as st,U as nt,V as rt,W as at,Y as ot,Z as it,_ as B,$ as ct,a0 as ut,a1 as we,a2 as lt,a3 as dt,a4 as Oe,a5 as q,a6 as ht,a7 as Y,a8 as mt,a9 as pt,aa as gt,ab as xt,ac as ft,ad as wt,ae as yt,af as bt,ag as Pt,ah as Ct,ai as jt,aj as Tt,ak as St,al as vt,am as Et,an as Lt,ao as Nt,ap as It,aq as Gt,ar as J,as as ne,at as Ot,au as $t,av as At,aw as kt,ax as Mt}from"./vendor-LjwCbGUp.js";function ie(o){return`/${o.filter(t=>t).map(t=>t.toString().replace(/^\/+/,"")).join("/")}`}const $e=f.createContext({});function R(){return f.useContext($e)}function Ut({children:o}){const[e,t]=f.useState(()=>({Paths:location.pathname.split("/").filter(c=>c),Search:new URLSearchParams(location.search),Put:s,Nav:(...c)=>a(ie(c)),Rep:(...c)=>i(ie(c)),Reload:(...c)=>l(c)}));function s(c){history.replaceState(null,"",`${location.pathname}${c.size?"?":""}${c.toString()}`),e.Search=new URLSearchParams(c),t({...e})}function r(c){e.Paths=c.split("/").filter(u=>u),e.Search=new URLSearchParams(location.search),t({...e})}function a(c){history.pushState(null,"",c),r(c)}function i(c){history.replaceState(null,"",c),r(c)}function l(c){history.replaceState(null,"","/Reload"),r("/Reload"),setTimeout(()=>{const u=c.length?ie(c):location.pathname;history.pushState(null,"",u),r(u)},100)}return Pe(()=>{location.pathname==="/"&&location.search.startsWith("?/")&&i(location.search.substring(2)),addEventListener("click",c=>{const u=c.target?.closest("a");if(u){if(u.origin!==location.origin){u.target="_blank";return}c.preventDefault(),a(u.pathname)}}),addEventListener("popstate",c=>{c.preventDefault(),r(location.pathname)})}),n.jsx($e.Provider,{value:e,children:o})}class O{namespace;info;error;warn;debug;throw;constructor(...e){this.namespace=e.join(" > "),this.error=console.error.bind(this,this.baseColor(101,"error"),`
	`),this.warn=console.warn.bind(this,this.baseColor(103,"warn"),`
	`),this.info=console.info.bind(this,this.baseColor(104,"info"),`
	`),this.debug=console.debug.bind(this,this.baseColor(102,"debug"),`
	`),this.throw=console.log.bind(this,this.baseColor(105,"throw"),"↓ The Following Error is Thrown ↓")}With(...e){return new O(this.namespace,...e)}baseColor(e,t){return`\x1B[${e};30;1m ${t.toUpperCase()} \x1B[0m\x1B[100;97m ${x().format("YY-M-D H:m:s")} \x1B[1m\x1B[40;97m ${this.namespace} `}}const I={display:"flex"},Dt={flexDirection:"column"},M={...I,...Dt},Xs={...I,backgroundColor:m.colorNeutralBackground1,boxShadow:m.shadow4,...V.borderRadius(m.borderRadiusMedium)},Vt={whiteSpace:"pre-line"},pe=60,ge="1636px",Rt={objectFit:"cover",objectPosition:"center"},Bt=y({pre:Vt});function re(o){const e=Bt(),{dispatchToast:t}=_e();return{dispatch:s=>{const r=s.Error.message,a=r.indexOf("Exception:");let i=r;a!==-1&&(i=r.substring(a+10)),t(n.jsxs(_,{children:[n.jsx(W,{children:"Internal Error"}),n.jsx(te,{subtitle:n.jsxs(Z,{className:e.pre,children:[i,n.jsx("br",{}),"More Info, See Console"]}),children:n.jsx(Z,{className:e.pre,children:s.Message})})]}),{intent:"error",timeout:1e4}),o.error(s)},dispatchToast:t}}const Ht=y({box:{...M,rowGap:m.spacingVerticalM},one:{...I,columnGap:m.spacingVerticalXXXL}}),ye=new O("Setting");function Ae({Open:o,Toggle:e,New:t}){const s=Ht(),r=Ce().instance.getActiveAccount(),[a,i]=f.useState(),[l,c]=f.useState(),[u,d]=f.useState();P.User.Get.useMe(ye,{manual:t,onSuccess(w){if(!w)return;const{Name:g,Phone:T,Address:ze}=w;i(g),c(T),d(ze)}});const{dispatch:p,dispatchToast:b}=re(ye),{run:j}=P.User.Post.useUpdate({manual:!0,onError(w,[g]){p({Message:`Failed ${t?"Create":"Update"} Info`,Error:w,Request:g})},onSuccess(w,[g]){b(n.jsxs(_,{children:[n.jsxs(W,{children:["Info ",t?"Created":"Updated"]}),n.jsxs(te,{children:[g.Name,n.jsx("br",{}),g.Phone,n.jsx("br",{}),g.Address]})]}),{intent:"success"}),t&&(D.next(!1),D.complete(),D.closed=!0),e()}});return n.jsx(je,{open:o,onOpenChange:e,modalType:t?"alert":"modal",children:n.jsx(Te,{children:n.jsxs(Se,{children:[n.jsx(We,{children:t?"Welcome! Fill in your info to get started.":"Personal Information"}),n.jsxs(ve,{className:s.box,children:[n.jsxs("div",{className:s.one,children:[n.jsx(v,{label:"Name",size:"large",required:!0,children:n.jsx(F,{size:"medium",value:a,maxLength:20,onChange:(w,g)=>i(g.value)})}),n.jsx(v,{label:"Phone",size:"large",required:!0,children:n.jsx(F,{size:"medium",value:l,maxLength:20,onChange:(w,g)=>c(g.value)})})]}),n.jsx(v,{label:"E-Mail",size:"large",children:n.jsx(H,{children:r?.username})}),n.jsx(v,{label:"Address",size:"large",required:!0,children:n.jsx(F,{size:"medium",value:u,maxLength:100,minLength:20,onChange:(w,g)=>d(g.value)})})]}),n.jsxs(Ee,{children:[!t&&n.jsx(me,{disableButtonEnhancement:!0,children:n.jsx(L,{appearance:"secondary",children:"Cancel"})}),n.jsx(L,{appearance:"primary",onClick:()=>j({EMail:r?.username,Name:a,Address:u,Phone:l}),children:"Submit"})]})]})})})}const D=new se;function Ft(){const[o,{toggle:e}]=A();return Pe(()=>{D.subscribe(t=>t&&e())}),n.jsx(X,{children:n.jsx(Ae,{Open:o,Toggle:e,New:!0})})}class zt{constructor(e,t){this.DB=e,this.Name=t,this.Sto=e.table(t),this.Trim()}Sto;async Get(e,t){const s=await this.Sto.get(e);return s?t&&await t(s)||typeof s.Exp=="number"&&s.Exp<x().unix()?(await this.Sto.delete(e),null):s.Val:null}async GetOrSet(e,t,s,r){const a=await this.Get(e,r);return a||this.Set(e,await t(),s)}async Set(e,t,s){if(!t)throw TypeError("Value cannot be null");if(s===null)return await this.Sto.put({Id:e,Exp:s,Val:t}),t;const r=(s||x().add(1,"week")).unix();if(s&&r<x().unix())throw RangeError(`Expire time [${r}] cannot be less than now`);return await this.Sto.put({Id:e,Exp:r,Val:t}),t}Trim(){return this.Sto.filter(e=>typeof e.Exp=="number"&&e.Exp<x().unix()).delete()}}const ae=new Qe("EShop",{autoOpen:!1});ae.version(1).stores({Shared:"Id, Exp",ShopCart:"Id"});ae.open();const S=new zt(ae,"Shared"),ce=ae.table("ShopCart"),N=new Xe({auth:{clientId:"0ac3ee82-159d-407c-8539-7a9e1e3a1989",authority:"https://SoarCraft.b2clogin.com/SoarCraft.onmicrosoft.com/B2C_1_RegLog",knownAuthorities:["SoarCraft.b2clogin.com"],redirectUri:"https://awai.aloen.to/Login"},cache:{cacheLocation:"localStorage"},system:{loggerOptions:{loggerCallback(o,e){switch(o){case fe.Error:console.error(e);return;case fe.Warning:console.warn(e);return;default:console.debug(e)}}}}});async function ke(){try{return(await N.acquireTokenSilent({scopes:[]})).idToken}catch(o){N.getActiveAccount()&&await N.loginRedirect(),console.warn(o)}}await N.initialize();await N.handleRedirectPromise();N.setActiveAccount(N.getAllAccounts()[0]);class Me extends Error{constructor(){super("Please Login First")}}class _t extends Error{constructor(){super("Server Returned False")}}class Ue{static async EnsureConnected(){return this.Hub.state===Q.Connected?Promise.resolve():((this.Hub.state===Q.Disconnected||this.Hub.state===Q.Disconnecting)&&await this.Hub.start(),new Promise(e=>{const t=setInterval(()=>{this.Hub.state===Q.Connected&&(clearInterval(t),e())},100)}))}static async Invoke(e,...t){return await this.EnsureConnected(),this.Hub.invoke(e,...t)}static EnsureLogin(){if(!N.getActiveAccount())throw new Me}static EnsureTrue(e){if(!e)throw new _t}static async UpdateCache(e,t,s,r,a){const i=`${s}_${a?`Admin_${t}`:t}`,l=await S.Get(i);if(!l)return;const c=e(l);l.QueryExp?await S.Set(i,{...c,QueryExp:x().add(1,"m").unix()},null):await S.Set(i,c,r||null)}static async GetVersionCache(e,t,s){const r=`${t}_${s?`Admin_${e}`:e}`,a=await S.Get(r);if(a&&a.QueryExp>x().unix())return a;const i=await this.Invoke(t,e,a?.Version);if(i===!0)return S.Set(r,{...a,QueryExp:x().add(1,"m").unix()},null),a;if(!i)throw S.Sto.delete(r),new TypeError("Empty Response");return await S.Set(r,{...i,QueryExp:x().add(1,"m").unix()},null),i}static async GetTimeCache(e,t,s,...r){return await S.GetOrSet(`${t}_${e}`,async()=>await this.Invoke(t,...r),s)}static async HandleFileStream(e,t,s){const a=Math.ceil(e.size/30720);let i=0;for(;i<a;){const l=i*30720,c=Math.min(l+30720,e.size),u=e.slice(l,c),d=new FileReader,p=await new Promise((b,j)=>{d.onload=()=>b(new Uint8Array(d.result)),d.onerror=()=>j(d.error),d.readAsArrayBuffer(u)});t.next(p),s?.debug(`Sent chunk ${i+1}/${a}`),i++}t.complete()}}class G extends Ue{static Log=["|","ShopNet"];static Hub=new Le().withUrl("https://awaishop.aloen.to:3389/Hub",{skipNegotiation:!0,transport:Ne.WebSockets,logMessageContent:!1,async accessTokenFactory(){const e=await ke();return e||""}}).withAutomaticReconnect().withStatefulReconnect().withHubProtocol(new Ie).configureLogging(Ge.Information).build()}G.Hub.on("OnNewUser",()=>{D.next(!0),console.debug("OnNewUser")});class Wt extends G{static Categories(){return this.GetTimeCache("","GalleryGetCategories",x().add(1,"m"))}static async Products(e){const t=await this.GetTimeCache(e,"GalleryGetProducts",x().add(1,"m"),e);return[t,4-t.length%4]}}const Qt={Get:Wt};class Xt extends G{static async Get(e){if(!/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(e))throw new Error(`Invalid ObjectId ${e}`);return await this.EnsureConnected(),this.Hub.stream("ObjectStorageGet",e)}static GetBySlice(e,t){const s=[];return S.GetOrSet(e,()=>new Promise((r,a)=>{this.Get(e).then(i=>i.subscribe({error(l){a(l)},next(l){s.push(l),t.debug("Received Slice",e,s.length)},complete(){r(s)}}))}))}}class qt extends G{static useDelete(e){return h(async t=>{this.EnsureLogin();const s=await this.Invoke("OrderDeleteCancel",t);return this.EnsureTrue(s),s},e)}}class E extends G{static Product(e){return this.GetVersionCache(e,"ProductEntity")}static Lexical(e){return this.GetVersionCache(e,"LexicalEntity")}static Photo(e){return this.GetVersionCache(e,"PhotoEntity")}static Type(e){return this.GetVersionCache(e,"TypeEntity")}static Variant(e){return this.GetVersionCache(e,"VariantEntity")}}class $ extends E{static Log=[...super.Log,"Product","Get"];static async Basic(e,t){const s=t.With(...this.Log,"Basic"),r=await this.Product(e);if(!r)throw new Error(`Product ${e} Not Found`);const[a,i]=await this.PhotoList(e,t);return i?{Name:r.Name,Cover:i}:(s.warn(`Product ${e} has no photo`),{Name:r.Name,Cover:""})}static Limit(e){return this.Invoke("ProdGetLimit",e)}static async Combo(e,t){const s=t.With(...this.Log,"Combo"),r=await this.ComboList(e),a=[];for(const i of r){const l={};for(const c of i.Types){const u=await this.Type(c);if(!u){s.error(`[Mismatch] Type ${c} not found. Combo ${i.ComboId} : Product ${e}`);continue}const d=await this.Variant(u.VariantId);if(!d){s.error(`[Mismatch] Variant ${u.VariantId} not found. Combo ${i.ComboId} : Type ${c} : Product ${e}`);continue}l[d.Name]=u.Name}a.push({Id:i.ComboId,Stock:i.Stock,Combo:l})}return a}static ComboList(e){return this.GetTimeCache(e,"ProductGetComboList",x().add(1,"m"),e)}static async PhotoList(e,t){const s=t.With(...this.Log,"PhotoList"),r=await this.GetTimeCache(e,"ProductGetPhotoList",x().add(1,"m"),e);let a=[],i="";for(const l of r){const c=await this.Photo(l);c?(a.push(c),c.Cover&&(i=c.ObjectId)):s.warn(`Photo ${l} not found in Product ${e}`)}return a=a.sort((l,c)=>l.Order-c.Order),!i&&a.length>0?(s.warn(`Product ${e} has no cover photo, using first photo instead`),[a,a[0].ObjectId]):[a,i]}}class ue extends G{static Order(e){return this.EnsureLogin(),this.GetVersionCache(e,"OrderEntity")}static Comment(e){return this.EnsureLogin(),this.GetVersionCache(e,"CommentEntity")}}class Yt extends G{static Log=[...super.Log,"Order","Get"];static async List(e){this.EnsureLogin();const t=e.With(...this.Log,"List"),s=await this.GetTimeCache("","OrderGetList",x().add(1,"m")),r=[];for(const a of s){const i=await ue.Order(a.OrderId);if(!i){t.warn(`[Mismatch] Order ${a.OrderId} not found`);continue}const l=[];for(const c of a.Products){const u=await E.Product(c);if(!u){t.warn(`[Mismatch] Product ${c} not found`);continue}l.push(u.Name)}r.push({Id:a.OrderId,Items:l,Quantity:a.Quantity,Status:i.Status,TrackNumber:i.TrackingNumber,OrderDate:i.CreateAt})}return r.sort((a,i)=>i.OrderDate.getTime()-a.OrderDate.getTime())}static async Detail(e,t){this.EnsureLogin();const s=t.With(...this.Log,"Detail"),r=await this.GetTimeCache(e,"OrderGetDetail",x().add(1,"m"),e),a=[];let i=0;for(const c of r.Items){const u={};let d=0;for(const w of c.Types){const g=await E.Type(w);if(!g){s.warn(`[Mismatch] Type ${w} not found. Order : ${e}`);continue}const T=await E.Variant(g.VariantId);if(!T){s.warn(`[Mismatch] Variant ${g.VariantId} not found. Type : ${w}, Order : ${e}`);continue}u[T.Name]=g.Name,d=T.ProductId}const p=await E.Product(d);if(!p){s.warn(`[Mismatch] Product ${d} not found. Order : ${e}`);continue}const b=await $.PhotoList(d),j=await this.FindCover(b,d,s);j||s.warn(`Product ${d} has no photo`),a.push({Id:i++,ProdId:d,Cover:j||"",Name:p.Name,Type:u,Quantity:c.Quantity})}const l=[];for(const c of r.Comments){const u=await ue.Comment(c);if(!u){s.warn(`[Mismatch] Comment ${c} not found. Order : ${e}`);continue}l.push({Content:u.Content,Time:u.CreateAt,User:u.Name||"You"})}return{ShopCart:a,Comments:l.sort((c,u)=>c.Time.getTime()-u.Time.getTime())}}static Order=ue.Order}class Jt extends G{static useNew(e){return h((t,s)=>{this.EnsureLogin();const r=t.map(a=>({ProdId:a.ProdId,Type:Object.values(a.Type),Quantity:a.Quantity}));return this.Invoke("OrderPostNew",r,s)},e)}static useAppend(e){return h(async(t,s)=>{this.EnsureLogin();const r=await this.Invoke("OrderPostAppend",t,s);return this.EnsureTrue(r),r},e)}static useCancel(e){return h(async(t,s)=>{this.EnsureLogin();const r=await this.Invoke("OrderPostCancel",t,s);return this.EnsureTrue(r),r},e)}static useReceived(e){return h(async t=>{this.EnsureLogin();const s=await this.Invoke("OrderPostReceived",t);return this.EnsureTrue(s),s},e)}}const Kt={Get:Yt,Post:Jt,Delete:qt},Zt={Get:$};class De extends G{static SubMe=new se;static ObsMe=this.SubMe.asObservable()}class es extends De{static useMe(e,t,s=!0){const r=U(()=>e.With("|","Hub","User","Get","Me")),{dispatch:a,dispatchToast:i}=re(r),[l,c]=f.useState();f.useEffect(()=>{const d=this.ObsMe.subscribe(p=>c(p));return()=>d.unsubscribe()},[]);const u=h(()=>(this.EnsureLogin(),this.GetVersionCache(0,"UserGetMe")),{...t,onSuccess:(d,p)=>{this.SubMe.next(d),t?.onSuccess?.(d,p)},onError(d){d instanceof Me?s?r.debug(d):i(n.jsx(_,{children:n.jsx(W,{children:d.message})}),{intent:"warning",timeout:5e3}):a({Message:"Failed to Get Your Info",Error:d,Request:""})}});return u.data=l,u}}class ts extends De{static useUpdate(e){return h(async t=>{this.EnsureLogin();const s=await this.Invoke("UserPostUpdate",t);return this.EnsureTrue(s),await this.UpdateCache(r=>{const a={...r,...t};return this.SubMe.next(a),a},0,"UserGetMe"),s},e)}}const ss={Get:es,Post:ts},P={Gallery:Qt,Product:Zt,User:ss,Order:Kt,Storage:Xt},Ve=f.createContext({});function z(){return f.useContext(Ve)}const le=new O("ShopCart","Context");function ns({children:o}){const[e,t]=f.useState([]);h(async()=>{const a=await ce.toArray(),i=[];for(const l of a){const c=await P.Product.Get.Basic(l.ProdId,le);i.push({...l,...c})}t(i)},{onError:le.error});async function s(a){for(let i=0;i<a.length;i++)a[i].Id=i;t([...a]),await ce.clear(),await ce.bulkPut(a.map(i=>({Id:i.Id,ProdId:i.ProdId,Type:i.Type,Quantity:i.Quantity})))}async function r(a,i,l){const c=await P.Product.Get.Basic(a,le);e.push({...c,Id:e.length,ProdId:a,Type:i,Quantity:l}),s(e)}return n.jsx(Ve.Provider,{value:{List:e,Add:r,Update:s},children:o})}const xe={Name:"AwaiShop"},rs=y({box:{width:"-webkit-fill-available",marginTop:m.spacingVerticalXXXL,...V.padding(m.spacingVerticalXXXL,0),backgroundColor:m.colorNeutralBackgroundInverted},main:{...I,maxWidth:ge,...V.margin(0,"auto")},logo:{width:"150px",filter:"invert(96%)"},otc:{color:"white"}});function as(){const o=rs();return n.jsx("footer",{className:o.box,children:n.jsx("div",{className:o.main,children:n.jsx("img",{src:"/safari-pinned-tab.svg",className:o.logo})})})}function os(){const{Paths:o,Search:e,Put:t}=R(),s=o.at(0),r=o.at(1),a=r==="User",i=r==="Order",l=a?"admin":"pending";return s==="Admin"&&(a||i)&&n.jsxs(n.Fragment,{children:[n.jsx(F,{placeholder:"Search in Any Field",contentBefore:n.jsx(qe,{}),appearance:"underline",onChange:(c,u)=>{u.value?e.set("search",u.value):e.delete("search"),t(e)}}),n.jsx(Ye,{label:`Only ${a?"Admin":"Pending"}`,checked:e.get(l)==="",onChange:(c,u)=>{u.checked?e.set(l,""):e.delete(l),t(e)}})]})}const is=y({box:{...I,flexGrow:1,height:"inherit",marginLeft:m.spacingHorizontalS,alignItems:"center"},div:{color:m.colorNeutralForegroundDisabled},link:{textDecorationLine:"unset !important"}});function cs(){const o=is(),{Paths:e}=R(),t=e.at(0),s=e.at(1)||"Product";return t==="Admin"&&n.jsxs("div",{className:o.box,children:[n.jsx(Z,{size:600,font:"monospace",className:o.div,children:"|"}),n.jsxs(Je,{selectedValue:s,children:[n.jsx(k,{appearance:"subtle",href:"/Admin",className:o.link,children:n.jsx(oe,{value:"Product",children:"Product List"})}),n.jsx(k,{appearance:"subtle",href:"/Admin/Order",className:o.link,children:n.jsx(oe,{value:"Order",children:"Order List"})}),n.jsx(k,{appearance:"subtle",href:"/Admin/User",className:o.link,children:n.jsx(oe,{value:"User",children:"User List"})})]})]})}class C extends Ue{static Log=["|","AdminNet"];static Hub=new Le().withUrl("https://awaishop.aloen.to:3389/AdminHub",{skipNegotiation:!0,transport:Ne.WebSockets,logMessageContent:!1,async accessTokenFactory(){const e=await ke();if(e)return e;throw new Error("Please Login First")}}).withAutomaticReconnect().withStatefulReconnect().withHubProtocol(new Ie).configureLogging(Ge.Information).build();static UpdateCache(e,t,s,r){return super.UpdateCache(e,t,s,r,!0)}static GetVersionCache(e,t){return super.GetVersionCache(e,t,!0)}static GetTimeCache(e,t,s,...r){return super.GetTimeCache(`Admin_${e}`,t,s,...r)}}class ee extends C{static User(e){return this.EnsureLogin(),this.GetVersionCache(e,"UserEntity")}}class K extends C{static Order(e){return this.EnsureLogin(),this.GetVersionCache(e,"OrderEntity")}static Comment(e){return this.EnsureLogin(),this.GetVersionCache(e,"CommentEntity")}}class us extends C{static Log=[...super.Log,"Order","Get"];static async List(e){this.EnsureLogin();const t=e.With(...this.Log,"List"),s=await this.GetTimeCache("","OrderGetList",x().add(1,"m")),r=[];for(const a of s){const i=await K.Order(a.OrderId);if(!i){t.warn(`[Mismatch] Order ${a.OrderId} not found`);continue}const l=[];for(const u of a.Products){const d=await E.Product(u);if(!d){t.warn(`[Mismatch] Product ${u} not found`);continue}l.push(d.Name)}const c=await ee.User(i.UserId);if(!c){t.error(`[Mismatch] User ${i.UserId} not found`);continue}r.push({Id:a.OrderId,Items:l,Quantity:a.Quantity,Status:i.Status,TrackNumber:i.TrackingNumber,OrderDate:i.CreateAt,User:c.Name})}return r.sort((a,i)=>i.OrderDate.getTime()-a.OrderDate.getTime())}static async Detail(e,t){this.EnsureLogin();const s=t.With(...this.Log,"Detail"),r=await this.GetTimeCache(e,"OrderGetDetail",x().add(1,"m"),e),a=[];let i=0;for(const c of r.Items){const u={};let d=0;for(const w of c.Types){const g=await E.Type(w);if(!g){s.warn(`[Mismatch] Type ${w} not found. Order : ${e}`);continue}const T=await E.Variant(g.VariantId);if(!T){s.warn(`[Mismatch] Variant ${g.VariantId} not found. Type : ${w}, Order : ${e}`);continue}u[T.Name]=g.Name,d=T.ProductId}const p=await E.Product(d);if(!p){s.warn(`[Mismatch] Product ${d} not found. Order : ${e}`);continue}const b=await $.PhotoList(d),j=await this.FindCover(b,d,s);j||s.warn(`Product ${d} has no photo`),a.push({Id:i++,ProdId:d,Cover:j||"",Name:p.Name,Type:u,Quantity:c.Quantity})}const l=[];for(const c of r.Comments){const u=await K.Comment(c);if(!u){s.warn(`[Mismatch] Comment ${c} not found. Order : ${e}`);continue}let d="Client";if(u.UserId){const p=await ee.User(u.UserId);p?d=p.Name:s.warn(`[Mismatch] User ${u.UserId} not found. Order : ${e}`)}l.push({Content:u.Content,Time:u.CreateAt,User:d})}return{ShopCart:a,Comments:l.sort((c,u)=>c.Time.getTime()-u.Time.getTime())}}static Order=K.Order}class ls extends C{static useAppend(e){return h(async(t,s)=>{const r=await this.Invoke("OrderPostAppend",t,s);return this.EnsureTrue(r),r},e)}static useClose(e){return h(async(t,s)=>{const r=await this.Invoke("OrderPostClose",t,s);return this.EnsureTrue(r),r},e)}static useShip(e){return h(async(t,s)=>{const r=await this.Invoke("OrderPostShip",t,s);return this.EnsureTrue(r),r},e)}static useAccept(e){return h(async t=>{const s=await this.Invoke("OrderPostAccept",t);return this.EnsureTrue(s),s},e)}}const ds={Get:us,Post:ls};class hs extends C{static usePhoto(e){return h(async t=>{const s=await this.Invoke("ProductDeletePhoto",t);return this.EnsureTrue(s),s},e)}static useVariant(e){return h(async t=>{const s=await this.Invoke("ProductDeleteVariant",t);return this.EnsureTrue(s),s},e)}static useType(e){return h(async(t,s)=>{const r=await this.Invoke("ProductDeleteType",t,s);return this.EnsureTrue(r),r},e)}static useCombo(e){return h(async t=>{const s=await this.Invoke("ProductDeleteCombo",t);return this.EnsureTrue(s),s},e)}static useProduct(e){return h(async t=>{const s=await this.Invoke("ProductDeleteProduct",t);return this.EnsureTrue(s),s},e)}}class Re extends C{static SubList=new Ke([]);static ObsList=this.SubList.asObservable()}class ms extends Re{static Log=[...super.Log,"Product","Get"];static List(e){const t=e.With(...this.Log,"List");return this.GetTimeCache("","ProductGetList",x().add(1,"m")).then(s=>this.SubList.next(s)).catch(t.error),this.ObsList}static Count(e){return this.GetTimeCache(e,"ProductGetCount",x().add(1,"m"),e)}static async Name(e){const t=await $.Product(e);if(!t)throw new Error(`Product ${e} Not Found`);return t.Name}static async Category(e){const t=await $.Product(e);if(!t)throw new Error(`Product ${e} Not Found`);return t.Category}static async Variants(e,t){const s=t.With(...this.Log,"Variants"),r=await this.GetTimeCache(e,"ProductGetVariants",x().add(1,"m"),e),a=[];for(const i of r){const l=await $.Variant(i.VariantId);if(!l){s.warn(`Variant ${i} Not Found. Product : ${e}`);continue}const c=[];for(const u of i.Types){const d=await $.Type(u);if(!d){s.warn(`Type ${u} Not Found. Variant : ${i.VariantId}, Product : ${e}`);continue}c.push(d.Name)}a.push({Id:i.VariantId,Name:l.Name,Types:c})}return a}}class ps extends C{static Log=[...super.Log,"Product","Patch"];static useName(e){return h(async(t,s)=>{const r=await this.Invoke("ProductPatchName",t,s);return this.EnsureTrue(r),r},e)}static useCategory(e){return h(async(t,s)=>{const r=await this.Invoke("ProductPatchCategory",t,s);return this.EnsureTrue(r),r},e)}static usePhoto(e,t){const s=U(()=>e.With(...this.Log,"Photo"));return h(async(r,a)=>{if(!a.type.startsWith("image/"))throw new TypeError("File is not an image");if(a.size>10*1024*1024)throw new RangeError("File is too large, max 10MB");await this.EnsureConnected();const i=new se,l=this.Hub.invoke("ProductPatchPhoto",r,i);return await this.HandleFileStream(a,i,s),this.EnsureTrue(await l),!0},t)}static useCaption(e){return h(async(t,s)=>{const r=await this.Invoke("ProductPatchCaption",t,s);return this.EnsureTrue(r),r},e)}static useVariantName(e){return h(async(t,s)=>{const r=await this.Invoke("ProductPatchVariantName",t,s);return this.EnsureTrue(r),r},e)}static useType(e){return h(async(t,s,r)=>{const a=await this.Invoke("ProductPatchType",t,s,r);return this.EnsureTrue(a),a},e)}static useCombo(e){return h(async(t,s,r)=>{const a=await this.Invoke("ProductPatchCombo",t,s,r);return this.EnsureTrue(a),a},e)}}let Be;function qs(o){Be=o}class gs extends Re{static Log=[...super.Log,"Product","Post"];static useCreate(e){return h(t=>this.Invoke("ProductPostCreate",t),{...e,onSuccess:(t,s)=>{this.SubList.next([t,...this.SubList.value]),e.onSuccess?.(t,s)}})}static useMovePhoto(e){return h(async(t,s)=>{const r=await this.Invoke("ProductPostMovePhoto",t,s);return this.EnsureTrue(r),r},e)}static usePhoto(e,t){const s=U(()=>e.With(...this.Log,"Photo"));return h(async(r,a)=>{if(!a.type.startsWith("image/"))throw new TypeError("File is not an image");if(a.size>10*1024*1024)throw new RangeError("File is too large, max 10MB");const i=new se,l=this.Invoke("ProductPostPhoto",r,i);return await this.HandleFileStream(a,i,s),this.EnsureTrue(await l),!0},t)}static useVariant(e){return h((t,s)=>this.Invoke("ProductPostVariant",t,s),e)}static useType(e){return h((t,s)=>this.Invoke("ProductPostType",t,s),e)}static useCombo(e){return h((t,s,r)=>this.Invoke("ProductPostCombo",t,s,r),e)}static useLexical(e){return h(async t=>{const s=Be?.getEditorState();let r;s&&!s.isEmpty()&&(r=JSON.stringify(s.toJSON()));const a=await this.Invoke("ProductPostDescription",t,r);return this.EnsureTrue(a),a},e)}}const xs={Get:ms,Post:gs,Patch:ps,Delete:hs};class fs extends C{static useUser(e){return h(async t=>{const s=await this.Invoke("UserDeleteUser",t);return this.EnsureTrue(s),s},e)}static useAdmin(e){return h(async t=>{const s=await this.Invoke("UserDeleteAdmin",t);return this.EnsureTrue(s),s},e)}}class ws extends C{static async OrderUser(e){const t=await K.Order(e);if(!t)throw new Error(`Order ${e} not found`);const s=await ee.User(t.UserId);if(!s)throw new Error(`User ${t.UserId} not found in order ${e}`);return s}static async List(){const e=await this.GetTimeCache("","UserGetList",x().add(1,"m")),t=[];for(const s of e){const r=await ee.User(s);if(!r){console.warn(`User ${s} not found`);continue}t.push({Id:s,Name:r.Name,EMail:r.EMail,Admin:r.Admin})}return t}}class ys extends C{static useAdmin(e){return h(async t=>{const s=await this.Invoke("UserPostAdmin",t);return this.EnsureTrue(s),s},e)}}const bs={Get:ws,Post:ys,Delete:fs},Ps={Product:xs,Order:ds,User:bs},Cs=y({body:M}),js=new O("Admin","Product","AddButton");function Ts(){const{Nav:o,Paths:e}=R(),t=e.at(0),s=e.at(1),r=Cs(),[a,i]=f.useState(""),{dispatch:l,dispatchToast:c}=re(js),{run:u}=Ps.Product.Post.useCreate({manual:!0,onError(d,p){l({Message:`Failed Create ${a}`,Request:p,Error:d})},onSuccess(d){c(n.jsxs(_,{children:[n.jsx(W,{children:"New Product Created"}),n.jsxs(te,{children:[d," ",a]})]}),{intent:"success"}),o("Admin",d)}});return t==="Admin"&&!s&&n.jsxs(je,{children:[n.jsx(me,{disableButtonEnhancement:!0,children:n.jsx(L,{appearance:"primary",icon:n.jsx(Ze,{}),children:"New Product"})}),n.jsx(Te,{children:n.jsxs(Se,{children:[n.jsx(ve,{className:r.body,children:n.jsx(F,{required:!0,size:"large",value:a,maxLength:15,appearance:"underline",onChange:(d,p)=>i(p.value),contentBefore:n.jsx(et,{children:"Give A Name"})})}),n.jsxs(Ee,{children:[n.jsx(me,{disableButtonEnhancement:!0,children:n.jsx(L,{appearance:"secondary",children:"Cancel"})}),n.jsx(L,{appearance:"primary",onClick:()=>u(a),children:"Create"})]})]})})]})}const Ss=new O("Avatar","Menu");function vs(){const[o,{toggle:e}]=A(),[t,{toggle:s}]=A(),{instance:r}=Ce(),[a,{set:i}]=A(!0);f.useEffect(()=>{D.subscribe(d=>i(!d))},[]);const{data:l}=P.User.Get.useMe(Ss),c=r.getActiveAccount(),u=c?.name||c?.username;return n.jsxs(n.Fragment,{children:[n.jsxs(tt,{open:o,onOpenChange:e,children:[n.jsx(st,{children:n.jsx(nt,{size:36,active:o?"active":"unset",name:u})}),n.jsx(rt,{children:n.jsxs(at,{children:[n.jsx(X,{children:n.jsxs(ot,{children:["Hi ",u]})}),n.jsx(it,{children:n.jsx(B,{onClick:()=>r.loginRedirect(),children:"Login"})}),n.jsxs(X,{children:[n.jsx(k,{appearance:"subtle",href:"/History",children:n.jsx(B,{children:"History"})}),l?.Admin&&n.jsx(k,{appearance:"subtle",href:"/Admin",children:n.jsx(B,{children:"Admin"})}),n.jsx(B,{onClick:s,children:"Setting"}),n.jsx(B,{onClick:()=>r.logoutRedirect(),children:"Logout"})]})]})})]}),a&&n.jsx(X,{children:n.jsx(Ae,{Open:t,Toggle:s})})]})}function He({Items:o,Columns:e,NoHeader:t}){return n.jsxs(ct,{items:o||[],columns:e,getRowId:s=>s.Id,children:[!t&&n.jsx(ut,{children:n.jsx(we,{children:({renderHeaderCell:s})=>s()})}),n.jsx(lt,{children:({item:s,rowId:r})=>n.jsx(we,{children:({renderCell:a})=>a(s)},r)}),!o&&n.jsx(dt,{size:48})]})}function Es({Guid:o,Log:e,...t}){const s=U(()=>e.With("GuidImage")),{data:r,run:a}=h(P.Storage.GetBySlice.bind(P.Storage),{manual:!0,onError:s.error});return f.useEffect(()=>{o&&a(o,s)},[o]),n.jsx(Oe,{...t,src:r?URL.createObjectURL(new Blob(r)):"https://placehold.co/400?text=Loading..."})}const be=y({unset:{flexBasis:"unset",flexGrow:0},img:{...Rt,aspectRatio:"1",marginTop:m.spacingVerticalXS,marginBottom:m.spacingVerticalXS}});function Ls(o,e){const t={width:`${o}px`};return q({columnId:"Cover",renderHeaderCell:()=>{const s=be();return n.jsx(ht,{className:s.unset,children:n.jsx("div",{style:t})})},renderCell(s){const r=be();return n.jsx(Y,{className:r.unset,children:n.jsx(Es,{className:r.img,style:t,Guid:s.Cover,Log:e})})}})}function Ns(o){const{List:e}=z(),{data:t}=h(()=>P.Product.Get.Limit(o)),s=t||3;let r=0;for(const a of e)if(a.ProdId===o&&(r+=a.Quantity),r>=s)return[!0,s];return[!1,s]}const de=y({prod:{...M,alignItems:"flex-start",justifyContent:"center"},qua:{flexBasis:"12%",flexGrow:0},act:{flexBasis:"7%",flexGrow:0}}),Is=[q({columnId:"Product",renderCell(o){return n.jsxs(Y,{className:de().prod,children:[n.jsx(k,{href:`/Product/${o.ProdId}`,appearance:"subtle",children:n.jsx(mt,{children:o.Name})}),n.jsx(pt,{children:Object.values(o.Type).reduce((e,t)=>`${e} ${t},`,"")})]})}}),q({columnId:"Quantity",renderCell(o){const{List:e,Update:t}=z(),[s,r]=Ns(o.ProdId);return n.jsx(Y,{className:de().qua,children:n.jsx(gt,{min:1,max:r,value:o.Quantity,onChange:(a,i)=>{s&&i.value>=o.Quantity||(o.Quantity=i.value,t(e))}})})}}),q({columnId:"Action",renderCell(o){const{List:e,Update:t}=z();return n.jsx(Y,{className:de().act,children:n.jsx(L,{appearance:"subtle",icon:n.jsx(xt,{}),onClick:()=>t(e.filter(s=>s.Id!==o.Id))})})}})];function Fe(o){return[Ls(44,o),...Is]}const Gs=y({person:I,inf:{...M,flexBasis:"50%",rowGap:m.spacingVerticalM}});function Os({Log:o}){const e=Gs(),t=U(()=>o.With("PersonaInfo")),{data:s}=P.User.Get.useMe(t);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:e.person,children:[n.jsx("div",{className:e.inf,children:n.jsx(v,{label:"Name",size:"large",children:n.jsx(H,{children:s?.Name})})}),n.jsx("div",{className:e.inf,children:n.jsx(v,{label:"Phone",size:"large",children:n.jsx(H,{children:s?.Phone})})})]}),n.jsx(v,{label:"E-Mail",size:"large",children:n.jsx(H,{children:s?.EMail})}),n.jsx(v,{label:"Address",size:"large",children:n.jsx(H,{children:s?.Address})})]})}const $s=y({body:{...M,rowGap:m.spacingVerticalXL},sub:{width:"fit-content",alignSelf:"flex-end"}}),he=new O("TopNavBar","ShopCart","Confirm");function As(){const[o,e]=f.useState(),[t,{toggle:s}]=A(),{List:r,Update:a}=z(),{Nav:i}=R(),l=$s(),{dispatch:c,dispatchToast:u}=re(he),{run:d}=P.Order.Post.useNew({manual:!0,onError(p,b){c({Message:"Failed Create Order",Request:b,Error:p})},onSuccess(p){u(n.jsxs(_,{children:[n.jsx(W,{children:"Order Placed"}),n.jsxs(te,{children:["Order Id: ",p]})]}),{intent:"success"}),a([]),s(),i("History",p)}});return n.jsxs(n.Fragment,{children:[n.jsx(L,{appearance:"primary",onClick:s,disabled:!r.length,children:"Checkout"}),n.jsxs(ft,{open:t,onOpenChange:s,position:"end",size:"medium",modalType:"alert",children:[n.jsx(wt,{children:n.jsx(yt,{action:n.jsx(L,{appearance:"subtle",icon:n.jsx(bt,{}),onClick:s}),children:"Confirm Order"})}),n.jsx(Pt,{children:n.jsxs("div",{className:l.body,children:[n.jsx(Os,{Log:he}),n.jsx(He,{Items:r,Columns:U(()=>Fe(he)),NoHeader:!0}),n.jsx(v,{label:"Comment",size:"large",children:n.jsx(Ct,{value:o,onChange:(p,b)=>e(b.value),maxLength:1e3})}),n.jsx(L,{appearance:"primary",className:l.sub,disabled:!r.length,onClick:()=>d(r,o),children:"Submit"})]})})]})]})}const ks=y({conf:{...I,width:"100%",alignItems:"center",justifyContent:"space-between",marginTop:m.spacingVerticalS,columnGap:m.spacingHorizontalL},tooltip:{backgroundColor:m.colorBrandBackground,color:m.colorNeutralForegroundInverted,...V.borderRadius(m.borderRadiusCircular)}}),Ms=new O("TopNavBar","ShopCart");function Us(){const[o,{toggle:e}]=A(),[t,{toggle:s}]=A(),r=ks(),{List:a}=z();return jt(()=>{if(o)return;s();const i=setTimeout(s,2e3);return()=>clearTimeout(i)},[a]),n.jsxs(Tt,{withArrow:!0,open:o,onOpenChange:e,children:[n.jsx(St,{disableButtonEnhancement:!0,children:n.jsx(vt,{visible:t,withArrow:!0,content:{children:"↑",className:r.tooltip},relationship:"inaccessible",children:n.jsx(Et,{icon:n.jsx(Lt,{}),appearance:"subtle",size:"large",checked:o})})}),n.jsxs(Nt,{children:[n.jsx(He,{Items:a,Columns:U(()=>Fe(Ms)),NoHeader:!0}),n.jsxs("div",{className:r.conf,children:[a.map(i=>i.Quantity).reduce((i,l)=>i+l,0)," items in shopping cart",n.jsx(As,{})]})]})]})}const Ds=y({navBox:{position:"fixed",top:0,width:"100%",height:`${pe}px`,...V.padding(0,m.spacingHorizontalXXXL),backgroundColor:"#fff",boxSizing:"border-box",boxShadow:m.shadow4},navBar:{...I,maxWidth:ge,height:"100%",...V.margin(0,"auto"),alignItems:"center",justifyContent:"space-between"},logoBox:{...I,columnGap:m.spacingHorizontalL,alignItems:"center"},logoText:{color:m.colorBrandForeground2}});function Vs(){const o=Ds();return n.jsx(It,{children:n.jsx("header",{className:o.navBox,children:n.jsxs("nav",{className:o.navBar,children:[n.jsxs(k,{className:o.logoBox,href:"/",appearance:"subtle",children:[n.jsx(Oe,{src:"/Awai.png",height:pe}),n.jsx(Z,{size:600,font:"monospace",className:o.logoText,children:xe.Name})]}),n.jsx(cs,{}),n.jsxs("div",{className:o.logoBox,children:[n.jsx(Ts,{}),n.jsx(os,{}),n.jsx(Us,{}),n.jsx(vs,{})]})]})})})}function Rs(){const{Rep:o}=R();return setTimeout(()=>o("/"),3e3),n.jsxs(n.Fragment,{children:[n.jsxs(Gt,{children:[n.jsxs("title",{children:["Redirect - Not Found - ",xe.Name]}),n.jsx("meta",{name:"robots",content:"noindex, nofollow"})]}),n.jsx(J,{size:"huge",label:"Redirecting..."})]})}const Bs=y({body:{...M,minWidth:"1024px",position:"absolute",marginTop:`${pe}px`,width:"100%",minHeight:"-webkit-fill-available",justifyContent:"space-between",backgroundColor:m.colorNeutralBackground2},content:{...M,maxWidth:ge,width:"-webkit-fill-available",marginLeft:"auto",marginRight:"auto",paddingLeft:m.spacingHorizontalM,paddingRight:m.spacingHorizontalM,paddingTop:m.spacingVerticalXXXL}});function Hs(){const o=Bs(),{Paths:e}=R(),t=e.at(0),s=f.useMemo(()=>{switch(t){case"Product":return n.jsx(Fs,{});case"Admin":return n.jsx(zs,{});case"History":return n.jsx(_s,{});case"Login":return n.jsx(J,{size:"huge",label:"Login Redirecting..."});case"Reload":return n.jsx(J,{size:"huge",label:"Reloading..."});case"":case void 0:return n.jsx(Ws,{});default:return n.jsx(Rs,{})}},[t]);return n.jsxs(n.Fragment,{children:[n.jsx(Vs,{}),n.jsxs("div",{className:o.body,children:[n.jsx("main",{className:o.content,children:n.jsx(f.Suspense,{fallback:n.jsx(J,{}),children:s})}),n.jsx(as,{})]}),n.jsx(Ft,{})]})}const Fs=f.lazy(()=>ne(()=>import("./index-TpmY-fzk.js"),__vite__mapDeps([0,1,2,3,4,5]))),zs=f.lazy(()=>ne(()=>import("./index-olIff9vX.js"),__vite__mapDeps([6,1,7,8,3,4]))),_s=f.lazy(()=>ne(()=>import("./index-9zbedqsm.js"),__vite__mapDeps([9,1,7]))),Ws=f.lazy(()=>ne(()=>import("./index-SN8yrOty.js"),__vite__mapDeps([10,1,2,3,8])));Ot.createRoot(document.getElementById(xe.Name)).render(n.jsx($t,{theme:At,children:n.jsx(Ut,{children:n.jsx(kt,{instance:N,children:n.jsxs(ns,{children:[n.jsx(Mt,{pauseOnHover:!0}),n.jsx(Hs,{})]})})})}));export{Ps as A,Xs as B,Rt as C,xe as D,I as F,Es as G,P as H,O as L,Ls as M,qs as S,M as a,Ns as b,R as c,Dt as d,re as e,He as f,z as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-TpmY-fzk.js","assets/vendor-LjwCbGUp.js","assets/isArrayLike--sVJAW2Y.js","assets/isObject-tyZXtoJz.js","assets/Lazy-VC--FkXG.js","assets/index-scunr7sf.css","assets/index-olIff9vX.js","assets/Columns-owGWBbH-.js","assets/toFinite-GMFxiq4g.js","assets/index-9zbedqsm.js","assets/index-SN8yrOty.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
