import{r as x,u as Ct,j as n,d as w,t as m,s as R,m as P,a as Wt,T as Z,b as tt,c as et,e as J,f as jt,D as bt,g as vt,h as Tt,i as Qt,k as Lt,F as E,I as z,L as H,l as Et,n as ht,B as N,S as mt,o as O,A as W,X as Xt,P as qt,p as ft,H as _,q as St,v as Nt,M as It,w as kt,x as h,y as A,z as Gt,C as Yt,E as Jt,G as Kt,J as U,K as ot,N as Zt,O as te,Q as ee,R as se,U as ne,V as re,W as ae,Y as oe,Z as ie,_ as B,$ as ce,a0 as ue,a1 as wt,a2 as de,a3 as le,a4 as At,a5 as Q,a6 as he,a7 as X,a8 as me,a9 as pe,aa as ge,ab as xe,ac as fe,ad as we,ae as ye,af as Pe,ag as Ce,ah as je,ai as be,aj as ve,ak as Te,al as Le,am as Ee,an as Se,ao as Ne,ap as Ie,aq as ke,ar as q,as as st,at as Ge,au as Ae,av as $e,aw as Oe,ax as Ue}from"./vendor-VMat-HGY.js";function it(o){return`/${o.filter(s=>s).map(s=>s.toString().replace(/^\/+/,"")).join("/")}`}const $t=x.createContext({});function V(){return x.useContext($t)}function Me({children:o}){const[t,s]=x.useState(()=>({Paths:location.pathname.split("/").filter(c=>c),Search:new URLSearchParams(location.search),Put:e,Nav:(...c)=>a(it(c)),Rep:(...c)=>i(it(c)),Reload:(...c)=>d(c)}));function e(c){history.replaceState(null,"",`${location.pathname}${c.size?"?":""}${c.toString()}`),t.Search=new URLSearchParams(c),s({...t})}function r(c){t.Paths=c.split("/").filter(u=>u),t.Search=new URLSearchParams(location.search),s({...t})}function a(c){history.pushState(null,"",c),r(c)}function i(c){history.replaceState(null,"",c),r(c)}function d(c){history.replaceState(null,"","/Reload"),r("/Reload"),setTimeout(()=>{const u=c.length?it(c):location.pathname;history.pushState(null,"",u),r(u)},100)}return Ct(()=>{location.pathname==="/"&&location.search.startsWith("?/")&&i(location.search.substring(2)),addEventListener("click",c=>{const u=c.target?.closest("a");if(u){if(u.origin!==location.origin){u.target="_blank";return}c.preventDefault(),a(u.pathname)}}),addEventListener("popstate",c=>{c.preventDefault(),r(location.pathname)})}),n.jsx($t.Provider,{value:t,children:o})}class ${namespace;info;error;warn;debug;throw;constructor(...t){this.namespace=t.join(" > "),this.error=console.error.bind(this,this.baseColor(101,"error"),`
	`),this.warn=console.warn.bind(this,this.baseColor(103,"warn"),`
	`),this.info=console.info.bind(this,this.baseColor(104,"info"),`
	`),this.debug=console.debug.bind(this,this.baseColor(102,"debug"),`
	`),this.throw=console.log.bind(this,this.baseColor(105,"throw"),"↓ The Following Error is Thrown ↓")}With(...t){return new $(this.namespace,...t)}baseColor(t,s){return`\x1B[${t};30;1m ${s.toUpperCase()} \x1B[0m\x1B[100;97m ${w().format("YY-M-D H:m:s")} \x1B[1m\x1B[40;97m ${this.namespace} `}}const k={display:"flex"},De={flexDirection:"column"},M={...k,...De},Qs={...k,backgroundColor:m.colorNeutralBackground1,boxShadow:m.shadow4,...R.borderRadius(m.borderRadiusMedium)},Re={whiteSpace:"pre-line"},pt=60,gt="1636px",Ve={objectFit:"cover",objectPosition:"center"},Be=P({pre:Re});function nt(o){const t=Be(),{dispatchToast:s}=Wt();return{dispatch:e=>{const r=e.Error.message,a=r.indexOf("Exception:");let i=r;a!==-1&&(i=r.substring(a+10)),s(n.jsxs(Z,{children:[n.jsx(tt,{children:"Internal Error"}),n.jsx(et,{subtitle:n.jsxs(J,{className:t.pre,children:[i,n.jsx("br",{}),"More Info, See Console"]}),children:n.jsx(J,{className:t.pre,children:e.Message})})]}),{intent:"error",timeout:1e4}),o.error(e)},dispatchToast:s}}const He=P({box:{...M,rowGap:m.spacingVerticalM},one:{...k,columnGap:m.spacingVerticalXXXL}}),yt=new $("Setting");function Ot({Open:o,Toggle:t,New:s}){const e=He(),r=jt().instance.getActiveAccount(),[a,i]=x.useState(),[d,c]=x.useState(),[u,l]=x.useState(),p=b.User.Get.useMe(yt);x.useEffect(()=>{if(s||!p)return;const{Name:f,Phone:g,Address:_t}=p;i(f),c(g),l(_t)},[p]);const{dispatch:y,dispatchToast:v}=nt(yt),{run:T}=b.User.Post.useUpdate({manual:!0,onError(f,[g]){y({Message:`Failed ${s?"Create":"Update"} Info`,Error:f,Request:g})},onSuccess(f,[g]){v(n.jsxs(Z,{children:[n.jsxs(tt,{children:["Info ",s?"Created":"Updated"]}),n.jsxs(et,{children:[g.Name,n.jsx("br",{}),g.Phone,n.jsx("br",{}),g.Address]})]}),{intent:"success"}),s&&(D.next(!1),D.complete(),D.closed=!0),t()}});return n.jsx(bt,{open:o,onOpenChange:t,modalType:s?"alert":"modal",children:n.jsx(vt,{children:n.jsxs(Tt,{children:[n.jsx(Qt,{children:s?"Welcome! Fill in your info to get started.":"Personal Information"}),n.jsxs(Lt,{className:e.box,children:[n.jsxs("div",{className:e.one,children:[n.jsx(E,{label:"Name",size:"large",required:!0,children:n.jsx(z,{size:"medium",value:a,maxLength:20,onChange:(f,g)=>i(g.value)})}),n.jsx(E,{label:"Phone",size:"large",required:!0,children:n.jsx(z,{size:"medium",value:d,maxLength:20,onChange:(f,g)=>c(g.value)})})]}),n.jsx(E,{label:"E-Mail",size:"large",children:n.jsx(H,{children:r?.username})}),n.jsx(E,{label:"Address",size:"large",required:!0,children:n.jsx(z,{size:"medium",value:u,maxLength:100,minLength:20,onChange:(f,g)=>l(g.value)})})]}),n.jsxs(Et,{children:[!s&&n.jsx(ht,{disableButtonEnhancement:!0,children:n.jsx(N,{appearance:"secondary",children:"Cancel"})}),n.jsx(N,{appearance:"primary",onClick:()=>T({EMail:r?.username,Name:a,Address:u,Phone:d}),children:"Submit"})]})]})})})}const D=new mt;function ze(){const[o,{toggle:t}]=O();return Ct(()=>D.subscribe(s=>s&&t())),n.jsx(W,{children:n.jsx(Ot,{Open:o,Toggle:t,New:!0})})}const rt={Name:"AwaiShop"};class Fe{constructor(t,s){this.DB=t,this.Name=s,this.Sto=t.table(s),this.Trim()}Sto;async Get(t,s){const e=await this.Sto.get(t);return e?s&&await Promise.resolve(s(e))||typeof e.Exp=="number"&&e.Exp<w().unix()?(await this.Sto.delete(t),null):e.Val:null}async GetOrSet(t,s,e,r){const a=await this.Get(t,r);return a||this.Set(t,await Promise.resolve(s()),e)}async Set(t,s,e){if(!s)throw TypeError("Value cannot be null");if(e===null)return await this.Sto.put({Id:t,Exp:e,Val:s}),s;const r=(e||w().add(1,"week")).unix();if(e&&r<w().unix())throw RangeError(`Expire time [${r}] cannot be less than now [${w().unix()}]`);return await this.Sto.put({Id:t,Exp:r,Val:s}),s}Trim(){return this.Sto.filter(t=>typeof t.Exp=="number"&&t.Exp<w().unix()).delete()}}const at=new Xt(rt.Name,{autoOpen:!1});at.version(1).stores({Shared:"Id, Exp",ShopCart:"Id"});at.open();const L=new Fe(at,"Shared"),ct=at.table("ShopCart"),I=new qt({auth:{clientId:"0ac3ee82-159d-407c-8539-7a9e1e3a1989",authority:"https://SoarCraft.b2clogin.com/SoarCraft.onmicrosoft.com/B2C_1_RegLog",knownAuthorities:["SoarCraft.b2clogin.com"],redirectUri:"https://awai.aloen.to/Login"},cache:{cacheLocation:"localStorage"},system:{loggerOptions:{loggerCallback(o,t){switch(o){case ft.Error:console.error(t);return;case ft.Warning:console.warn(t);return;default:console.debug(t)}}}}});async function Ut(){try{return(await I.acquireTokenSilent({scopes:[]})).idToken}catch(o){I.getActiveAccount()&&await I.loginRedirect(),console.warn(o)}}await I.initialize();await I.handleRedirectPromise();I.setActiveAccount(I.getAllAccounts()[0]);class Mt extends Error{constructor(){super("Please Login First")}}class _e extends Error{constructor(){super("Server Returned False")}}class Dt extends Error{constructor(){super("Server Returned Empty Response")}}class Rt{static async EnsureConnected(){return this.Hub.state===_.Connected?Promise.resolve():((this.Hub.state===_.Disconnected||this.Hub.state===_.Disconnecting)&&await this.Hub.start(),new Promise(t=>{const s=setInterval(()=>{this.Hub.state===_.Connected&&(clearInterval(s),t())},100)}))}static async Invoke(t,...s){return await this.EnsureConnected(),this.Hub.invoke(t,...s)}static EnsureLogin(){if(!I.getActiveAccount())throw new Mt}static EnsureTrue(t){if(!t)throw new _e}static Index(t,s){return`${s}_${t}`}static async UpdateCache(t,s,e,r){const a=this.Index(s,e),i=await L.Get(a);if(!i)return;const d=t(i);i.QueryExp?await L.Set(a,{...d,QueryExp:w().add(1,"m").unix()},w().add(1,"w")):await L.Set(a,d,r||null)}static async GetVersionCache(t,s){const e=this.Index(t,s),r=await L.Get(e);if(r&&r.QueryExp>w().unix())return r;const a=await Promise.resolve(this.Invoke(s,t,r?.Version));if(a===!0)return L.Set(e,{...r,QueryExp:w().add(1,"m").unix()},w().add(1,"w")),r;if(!a)throw L.Sto.delete(e),new Dt;return await L.Set(e,{...a,QueryExp:w().add(1,"m").unix()},w().add(1,"w")),a}static async GetTimeCache(t,s,e,...r){return await L.GetOrSet(this.Index(t,s),async()=>await this.Invoke(s,...r),e(w()))}static async HandleFileStream(t,s,e){const a=Math.ceil(t.size/30720);let i=0;for(;i<a;){const d=i*30720,c=Math.min(d+30720,t.size),u=t.slice(d,c),l=new FileReader,p=await new Promise((y,v)=>{l.onload=()=>y(new Uint8Array(l.result)),l.onerror=()=>v(l.error),l.readAsArrayBuffer(u)});s.next(p),e?.debug(`Sent chunk ${i+1}/${a}`),i++}s.complete()}}class G extends Rt{static Log=["|","ShopNet"];static Hub=new St().withUrl("https://awaishop.aloen.to:3389/Hub",{skipNegotiation:!0,transport:Nt.WebSockets,logMessageContent:!1,async accessTokenFactory(){const t=await Ut();return t||""}}).withAutomaticReconnect().withStatefulReconnect().withHubProtocol(new It).configureLogging(kt.Information).build()}G.Hub.on("OnNewUser",()=>{D.next(!0),console.debug("OnNewUser")});class We extends G{static Categories(){return this.GetTimeCache("","GalleryGetCategories",t=>t.add(1,"m"))}static async Products(t){return await this.GetTimeCache(t,"GalleryGetProducts",e=>e.add(1,"m"),t)}}const Qe={Get:We};class Xe extends G{static async Get(t){if(!/^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(t))throw new Error(`Invalid ObjectId ${t}`);return await this.EnsureConnected(),this.Hub.stream("ObjectStorageGet",t)}static GetBySlice(t,s){const e=[];return L.GetOrSet(t,()=>new Promise((r,a)=>{this.Get(t).then(i=>i.subscribe({error(d){a(d)},next(d){e.push(d),s.debug("Received Slice",t,e.length)},complete(){r(e)}}))}))}}class qe extends G{static useDelete(t){return h(async s=>{this.EnsureLogin();const e=await this.Invoke("OrderDeleteCancel",s);return this.EnsureTrue(e),e},t)}}class C extends G{static product="ProductEntity";static Product(t){return this.GetVersionCache(t,this.product)}static ProductUpdate(t,s){return this.UpdateCache(s,t,this.product)}static Lexical(t){return this.GetVersionCache(t,"LexicalEntity")}static photo="PhotoEntity";static Photo(t){return this.GetVersionCache(t,this.photo)}static PhotoUpdate(t,s){return this.UpdateCache(s,t,this.photo)}static Type(t){return this.GetVersionCache(t,"TypeEntity")}static Variant(t){return this.GetVersionCache(t,"VariantEntity")}}class S extends C{static Log=[...super.Log,"Product","Get"];static async Basic(t,s){const e=s.With(...this.Log,"Basic"),r=await this.Product(t);if(!r)throw new Error(`Product ${t} Not Found`);const[a,i]=await this.PhotoList(t,s);return i?{Name:r.Name,Cover:i}:(e.warn(`Product ${t} has no photo`),{Name:r.Name,Cover:""})}static Limit(t){return this.Invoke("ProdGetLimit",t)}static async Combo(t,s){const e=s.With(...this.Log,"Combo"),r=await this.ComboList(t),a=[];for(const i of r){const d={};for(const c of i.Types){const u=await this.Type(c);if(!u){e.error(`[Mismatch] Type ${c} not found. Combo ${i.ComboId} : Product ${t}`);continue}const l=await this.Variant(u.VariantId);if(!l){e.error(`[Mismatch] Variant ${u.VariantId} not found. Combo ${i.ComboId} : Type ${c} : Product ${t}`);continue}d[l.Name]=u.Name}a.push({Id:i.ComboId,Stock:i.Stock,Combo:d})}return a}static ComboList(t){return this.GetTimeCache(t,"ProductGetComboList",s=>s.add(1,"m"),t)}static photoList="ProductGetPhotoList";static async PhotoList(t,s){const e=s.With(...this.Log,"PhotoList"),r=await this.GetTimeCache(t,this.photoList,d=>d.add(1,"m"),t).catch(e.error);let a=[],i="";for(const d of r||[]){const c=await this.Photo(d).catch(e.error);c?(a.push(c),c.Cover&&(i=c.ObjectId)):e.warn(`Photo ${d} not found in Product ${t}`)}return a=a.sort((d,c)=>d.Order-c.Order),!i&&a.length>0?(e.warn(`Product ${t} has no cover photo, using first photo instead`),[a,a[0].ObjectId]):[a,i]}static PhotoListUpdate(t,s){return this.UpdateCache(s,t,this.photoList,w().add(1,"m"))}}class Ye extends G{static Order(t){return this.EnsureLogin(),this.GetVersionCache(t,"OrderEntity")}static Comment(t){return this.EnsureLogin(),this.GetVersionCache(t,"CommentEntity")}}class Je extends Ye{static Log=[...super.Log,"Order","Get"];static async List(t){this.EnsureLogin();const s=t.With(...this.Log,"List"),e=await this.GetTimeCache("","OrderGetList",a=>a.add(1,"m")),r=[];for(const a of e){const i=await this.Order(a.OrderId);if(!i){s.warn(`[Mismatch] Order ${a.OrderId} not found`);continue}const d=[];for(const c of a.Products){const u=await C.Product(c);if(!u){s.warn(`[Mismatch] Product ${c} not found`);continue}d.push(u.Name)}r.push({Id:a.OrderId,Items:d,Quantity:a.Quantity,Status:i.Status,TrackNumber:i.TrackingNumber,OrderDate:i.CreateAt})}return r.sort((a,i)=>i.OrderDate.getTime()-a.OrderDate.getTime())}static async Detail(t,s){this.EnsureLogin();const e=s.With(...this.Log,"Detail"),r=await this.GetTimeCache(t,"OrderGetDetail",c=>c.add(1,"m"),t),a=[];let i=0;for(const c of r.Items){const u={};let l=0;for(const T of c.Types){const f=await C.Type(T);if(!f){e.warn(`[Mismatch] Type ${T} not found. Order : ${t}`);continue}const g=await C.Variant(f.VariantId);if(!g){e.warn(`[Mismatch] Variant ${f.VariantId} not found. Type : ${T}, Order : ${t}`);continue}u[g.Name]=f.Name,l=g.ProductId}const p=await C.Product(l);if(!p){e.warn(`[Mismatch] Product ${l} not found. Order : ${t}`);continue}const[y,v]=await S.PhotoList(l,e);v||e.warn(`Product ${l} has no photo`),a.push({Id:i++,ProdId:l,Cover:v||"",Name:p.Name,Type:u,Quantity:c.Quantity})}const d=[];for(const c of r.Comments){const u=await this.Comment(c);if(!u){e.warn(`[Mismatch] Comment ${c} not found. Order : ${t}`);continue}d.push({Content:u.Content,Time:u.CreateAt,User:u.Name||"You"})}return{ShopCart:a,Comments:d.sort((c,u)=>c.Time.getTime()-u.Time.getTime())}}}class Ke extends G{static useNew(t){return h((s,e)=>{this.EnsureLogin();const r=s.map(a=>({ProdId:a.ProdId,Type:Object.values(a.Type),Quantity:a.Quantity}));return this.Invoke("OrderPostNew",r,e)},t)}static useAppend(t){return h(async(s,e)=>{this.EnsureLogin();const r=await this.Invoke("OrderPostAppend",s,e);return this.EnsureTrue(r),r},t)}static useCancel(t){return h(async(s,e)=>{this.EnsureLogin();const r=await this.Invoke("OrderPostCancel",s,e);return this.EnsureTrue(r),r},t)}static useReceived(t){return h(async s=>{this.EnsureLogin();const e=await this.Invoke("OrderPostReceived",s);return this.EnsureTrue(e),e},t)}}const Ze={Get:Je,Post:Ke,Delete:qe},ts={Get:S};class Vt extends G{static Log=[...super.Log,"User","Get"];static me="UserGetMe";static useMe(t){const s=A(()=>t.With(...this.Log,"Me")),{dispatch:e}=nt(s);return Gt(async()=>{try{return this.EnsureLogin(),await this.GetVersionCache(0,this.me)}catch(a){if(a instanceof Dt)return;a instanceof Mt?s.info(a):e({Message:"Failed to Get Your Info",Error:a,Request:""})}})}static MeUpdate(t){return this.UpdateCache(t,0,this.me)}}class es extends G{static useUpdate(t){return h(async s=>{this.EnsureLogin();const e=await this.Invoke("UserPostUpdate",s);return this.EnsureTrue(e),Vt.MeUpdate(r=>({...r,...s})),e},t)}}const ss={Get:Vt,Post:es},b={Gallery:Qe,Product:ts,User:ss,Order:Ze,Storage:Xe},Bt=x.createContext({});function F(){return x.useContext(Bt)}const ut=new $("ShopCart","Context");function ns({children:o}){const[t,s]=x.useState([]);h(async()=>{const a=await ct.toArray(),i=[];for(const d of a){const c=await b.Product.Get.Basic(d.ProdId,ut);i.push({...d,...c})}s(i)},{onError:ut.error});async function e(a){for(let i=0;i<a.length;i++)a[i].Id=i;s([...a]),await ct.clear(),await ct.bulkPut(a.map(i=>({Id:i.Id,ProdId:i.ProdId,Type:i.Type,Quantity:i.Quantity})))}async function r(a,i,d){const c=await b.Product.Get.Basic(a,ut);t.push({...c,Id:t.length,ProdId:a,Type:i,Quantity:d}),e(t)}return n.jsx(Bt.Provider,{value:{List:t,Add:r,Update:e},children:o})}const rs=P({box:{width:"-webkit-fill-available",marginTop:m.spacingVerticalXXXL,...R.padding(m.spacingVerticalXXXL,0),backgroundColor:m.colorNeutralBackgroundInverted},main:{...k,maxWidth:gt,...R.margin(0,"auto")},logo:{width:"150px",filter:"invert(96%)"},otc:{color:"white"}});function as(){const o=rs();return n.jsx("footer",{className:o.box,children:n.jsx("div",{className:o.main,children:n.jsx("img",{src:"/safari-pinned-tab.svg",className:o.logo})})})}function os(){const{Paths:o,Search:t,Put:s}=V(),e=o.at(0),r=o.at(1),a=r==="User",i=r==="Order",d=a?"admin":"pending";return e==="Admin"&&(a||i)&&n.jsxs(n.Fragment,{children:[n.jsx(z,{placeholder:"Search in Any Field",contentBefore:n.jsx(Yt,{}),appearance:"underline",onChange:(c,u)=>{u.value?t.set("search",u.value):t.delete("search"),s(t)}}),n.jsx(Jt,{label:`Only ${a?"Admin":"Pending"}`,checked:t.get(d)==="",onChange:(c,u)=>{u.checked?t.set(d,""):t.delete(d),s(t)}})]})}const is=P({box:{...k,flexGrow:1,height:"inherit",marginLeft:m.spacingHorizontalS,alignItems:"center"},div:{color:m.colorNeutralForegroundDisabled},link:{textDecorationLine:"unset !important"}});function cs(){const o=is(),{Paths:t}=V(),s=t.at(0),e=t.at(1)||"Product";return s==="Admin"&&n.jsxs("div",{className:o.box,children:[n.jsx(J,{size:600,font:"monospace",className:o.div,children:"|"}),n.jsxs(Kt,{selectedValue:e,children:[n.jsx(U,{appearance:"subtle",href:"/Admin",className:o.link,children:n.jsx(ot,{value:"Product",children:"Product List"})}),n.jsx(U,{appearance:"subtle",href:"/Admin/Order",className:o.link,children:n.jsx(ot,{value:"Order",children:"Order List"})}),n.jsx(U,{appearance:"subtle",href:"/Admin/User",className:o.link,children:n.jsx(ot,{value:"User",children:"User List"})})]})]})}class j extends Rt{static Log=["|","AdminNet"];static Hub=new St().withUrl("https://awaishop.aloen.to:3389/AdminHub",{skipNegotiation:!0,transport:Nt.WebSockets,logMessageContent:!1,async accessTokenFactory(){const t=await Ut();if(t)return t;throw new Error("Please Login First")}}).withAutomaticReconnect().withStatefulReconnect().withHubProtocol(new It).configureLogging(kt.Information).build();static Index(t,s){return`${s}_Admin_${t}`}}class K extends j{static User(t){return this.EnsureLogin(),this.GetVersionCache(t,"UserEntity")}}class Y extends j{static Order(t){return this.EnsureLogin(),this.GetVersionCache(t,"OrderEntity")}static Comment(t){return this.EnsureLogin(),this.GetVersionCache(t,"CommentEntity")}}class us extends j{static Log=[...super.Log,"Order","Get"];static async List(t){this.EnsureLogin();const s=t.With(...this.Log,"List"),e=await this.GetTimeCache("","OrderGetList",a=>a.add(1,"m")),r=[];for(const a of e){const i=await Y.Order(a.OrderId);if(!i){s.warn(`[Mismatch] Order ${a.OrderId} not found`);continue}const d=[];for(const u of a.Products){const l=await C.Product(u);if(!l){s.warn(`[Mismatch] Product ${u} not found`);continue}d.push(l.Name)}const c=await K.User(i.UserId);if(!c){s.error(`[Mismatch] User ${i.UserId} not found`);continue}r.push({Id:a.OrderId,Items:d,Quantity:a.Quantity,Status:i.Status,TrackNumber:i.TrackingNumber,OrderDate:i.CreateAt,User:c.Name})}return r.sort((a,i)=>i.OrderDate.getTime()-a.OrderDate.getTime())}static async Detail(t,s){this.EnsureLogin();const e=s.With(...this.Log,"Detail"),r=await this.GetTimeCache(t,"OrderGetDetail",c=>c.add(1,"m"),t),a=[];let i=0;for(const c of r.Items){const u={};let l=0;for(const T of c.Types){const f=await C.Type(T);if(!f){e.warn(`[Mismatch] Type ${T} not found. Order : ${t}`);continue}const g=await C.Variant(f.VariantId);if(!g){e.warn(`[Mismatch] Variant ${f.VariantId} not found. Type : ${T}, Order : ${t}`);continue}u[g.Name]=f.Name,l=g.ProductId}const p=await C.Product(l);if(!p){e.warn(`[Mismatch] Product ${l} not found. Order : ${t}`);continue}const[y,v]=await S.PhotoList(l,e);v||e.warn(`Product ${l} has no photo`),a.push({Id:i++,ProdId:l,Cover:v||"",Name:p.Name,Type:u,Quantity:c.Quantity})}const d=[];for(const c of r.Comments){const u=await Y.Comment(c);if(!u){e.warn(`[Mismatch] Comment ${c} not found. Order : ${t}`);continue}let l="Client";if(u.UserId){const p=await K.User(u.UserId);p?l=p.Name:e.warn(`[Mismatch] User ${u.UserId} not found. Order : ${t}`)}d.push({Content:u.Content,Time:u.CreateAt,User:l})}return{ShopCart:a,Comments:d.sort((c,u)=>c.Time.getTime()-u.Time.getTime())}}static Order=Y.Order}class ds extends j{static useAppend(t){return h(async(s,e)=>{const r=await this.Invoke("OrderPostAppend",s,e);return this.EnsureTrue(r),r},t)}static useClose(t){return h(async(s,e)=>{const r=await this.Invoke("OrderPostClose",s,e);return this.EnsureTrue(r),r},t)}static useShip(t){return h(async(s,e)=>{const r=await this.Invoke("OrderPostShip",s,e);return this.EnsureTrue(r),r},t)}static useAccept(t){return h(async s=>{const e=await this.Invoke("OrderPostAccept",s);return this.EnsureTrue(e),e},t)}}const ls={Get:us,Post:ds};class xt extends j{static Log=[...super.Log,"Product","Get"];static list="ProductGetList";static useList(t){const s=A(()=>t.With(...this.Log,"List"));return Gt(()=>this.GetTimeCache("",this.list,r=>r.add(1,"m")).catch(s.error))}static ListUpdate(t){return this.UpdateCache(t,"",this.list,w().add(1,"m"))}static Count(t){return this.GetTimeCache(t,"ProductGetCount",s=>s.add(1,"m"),t)}static async Name(t){const s=await S.Product(t);if(!s)throw new Error(`Product ${t} Not Found`);return s.Name}static async Category(t){const s=await S.Product(t);if(!s)throw new Error(`Product ${t} Not Found`);return s.Category}static async Variants(t,s){const e=s.With(...this.Log,"Variants"),r=await this.GetTimeCache(t,"ProductGetVariants",i=>i.add(1,"m"),t),a=[];for(const i of r){const d=await S.Variant(i.VariantId);if(!d){e.warn(`Variant ${i} Not Found. Product : ${t}`);continue}const c=[];for(const u of i.Types){const l=await S.Type(u);if(!l){e.warn(`Type ${u} Not Found. Variant : ${i.VariantId}, Product : ${t}`);continue}c.push(l.Name)}a.push({Id:i.VariantId,Name:d.Name,Types:c})}return a}}class hs extends j{static usePhoto(t){return h(async(s,e)=>{const r=await this.Invoke("ProductDeletePhoto",e);return this.EnsureTrue(r),S.PhotoListUpdate(s,a=>a.filter(i=>i!==e)),r},t)}static useVariant(t){return h(async s=>{const e=await this.Invoke("ProductDeleteVariant",s);return this.EnsureTrue(e),e},t)}static useType(t){return h(async(s,e)=>{const r=await this.Invoke("ProductDeleteType",s,e);return this.EnsureTrue(r),r},t)}static useCombo(t){return h(async s=>{const e=await this.Invoke("ProductDeleteCombo",s);return this.EnsureTrue(e),e},t)}static useProduct(t){return h(async s=>{const e=await this.Invoke("ProductDeleteProduct",s);return this.EnsureTrue(e),xt.ListUpdate(r=>r.filter(a=>a!==s)),e},t)}static useCategory(t){return h(async s=>{const e=await this.Invoke("ProductDetachCategory",s);return this.EnsureTrue(e),C.ProductUpdate(s,r=>(r.Category=void 0,r)),e},t)}}class ms extends j{static Log=[...super.Log,"Product","Patch"];static useName(t){return h(async(s,e)=>{const r=await this.Invoke("ProductPatchName",s,e);return this.EnsureTrue(r),r},t)}static useCategory(t){return h(async(s,e)=>{const r=await this.Invoke("ProductPatchCategory",s,e);return this.EnsureTrue(r),r},t)}static usePhoto(t,s){const e=A(()=>t.With(...this.Log,"Photo"));return h(async(r,a)=>{if(!a.type.startsWith("image/"))throw new TypeError("File is not an image");if(a.size>10*1024*1024)throw new RangeError("File is too large, max 10MB");await this.EnsureConnected();const i=new mt,d=this.Hub.invoke("ProductPatchPhoto",r,i);return await this.HandleFileStream(a,i,e),this.EnsureTrue(await d),!0},s)}static useCaption(t){return h(async(s,e)=>{const r=await this.Invoke("ProductPatchCaption",s,e);return this.EnsureTrue(r),C.PhotoUpdate(s,a=>(a.Caption=e,a)),r},t)}static useVariantName(t){return h(async(s,e)=>{const r=await this.Invoke("ProductPatchVariantName",s,e);return this.EnsureTrue(r),r},t)}static useType(t){return h(async(s,e,r)=>{const a=await this.Invoke("ProductPatchType",s,e,r);return this.EnsureTrue(a),a},t)}static useCombo(t){return h(async(s,e,r)=>{const a=await this.Invoke("ProductPatchCombo",s,e,r);return this.EnsureTrue(a),a},t)}}let Ht;function Xs(o){Ht=o}class ps extends j{static Log=[...super.Log,"Product","Post"];static useCreate(t){return h(async s=>{const e=await this.Invoke("ProductPostCreate",s);return xt.ListUpdate(r=>[e,...r]),e},t)}static useMovePhoto(t){return h(async(s,e)=>{const r=await this.Invoke("ProductPostMovePhoto",s,e);return this.EnsureTrue(r),r},t)}static usePhoto(t,s){const e=A(()=>t.With(...this.Log,"Photo"));return h(async(r,a)=>{if(!a.type.startsWith("image/"))throw new TypeError("File is not an image");if(a.size>10*1024*1024)throw new RangeError("File is too large, max 10MB");const i=new mt,d=this.Invoke("ProductPostPhoto",r,i);await this.HandleFileStream(a,i,e);const c=await d;return S.PhotoListUpdate(r,u=>[...u,c]),c},s)}static useVariant(t){return h((s,e)=>this.Invoke("ProductPostVariant",s,e),t)}static useType(t){return h((s,e)=>this.Invoke("ProductPostType",s,e),t)}static useCombo(t){return h((s,e,r)=>this.Invoke("ProductPostCombo",s,e,r),t)}static useLexical(t){return h(async s=>{const e=Ht?.getEditorState();let r;e&&!e.isEmpty()&&(r=JSON.stringify(e.toJSON()));const a=await this.Invoke("ProductPostDescription",s,r);return this.EnsureTrue(a),a},t)}}const gs={Get:xt,Post:ps,Patch:ms,Delete:hs};class xs extends j{static useUser(t){return h(async s=>{const e=await this.Invoke("UserDeleteUser",s);return this.EnsureTrue(e),e},t)}static useAdmin(t){return h(async s=>{const e=await this.Invoke("UserDeleteAdmin",s);return this.EnsureTrue(e),e},t)}}class fs extends j{static async OrderUser(t){const s=await Y.Order(t);if(!s)throw new Error(`Order ${t} not found`);const e=await K.User(s.UserId);if(!e)throw new Error(`User ${s.UserId} not found in order ${t}`);return e}static async List(){const t=await this.GetTimeCache("","UserGetList",e=>e.add(1,"m")),s=[];for(const e of t){const r=await K.User(e);if(!r){console.warn(`User ${e} not found`);continue}s.push({Id:e,Name:r.Name,EMail:r.EMail,Admin:r.Admin})}return s}}class ws extends j{static useAdmin(t){return h(async s=>{const e=await this.Invoke("UserPostAdmin",s);return this.EnsureTrue(e),e},t)}}const ys={Get:fs,Post:ws,Delete:xs},Ps={Product:gs,Order:ls,User:ys},Cs=P({body:M}),js=new $("Admin","Product","AddButton");function bs(){const{Nav:o,Paths:t}=V(),s=t.at(0),e=t.at(1),r=Cs(),[a,i]=x.useState(""),{dispatch:d,dispatchToast:c}=nt(js),{run:u,loading:l}=Ps.Product.Post.useCreate({manual:!0,onError(p,y){d({Message:`Failed Create ${a}`,Request:y,Error:p})},onSuccess(p){c(n.jsxs(Z,{children:[n.jsx(tt,{children:"New Product Created"}),n.jsxs(et,{children:[p," ",a]})]}),{intent:"success"}),o("Admin",p),i("")}});return s==="Admin"&&!e&&n.jsxs(bt,{children:[n.jsx(ht,{disableButtonEnhancement:!0,children:n.jsx(N,{appearance:"primary",icon:n.jsx(Zt,{}),children:"New Product"})}),n.jsx(vt,{children:n.jsxs(Tt,{children:[n.jsx(Lt,{className:r.body,children:n.jsx(z,{required:!0,size:"large",value:a,maxLength:15,appearance:"underline",onChange:(p,y)=>i(y.value),contentBefore:n.jsx(te,{children:"Give A Name"})})}),n.jsxs(Et,{children:[n.jsx(ht,{disableButtonEnhancement:!0,children:n.jsx(N,{appearance:"secondary",children:"Cancel"})}),n.jsx(N,{disabled:l,appearance:"primary",onClick:()=>u(a),children:"Create"})]})]})})]})}const vs=new $("Avatar","Menu");function Ts(){const[o,{toggle:t}]=O(),[s,{toggle:e}]=O(),{instance:r}=jt(),[a,{set:i}]=O(!0);x.useEffect(()=>{D.subscribe(l=>i(!l))},[]);const d=b.User.Get.useMe(vs),c=r.getActiveAccount(),u=c?.name||c?.username;return n.jsxs(n.Fragment,{children:[n.jsxs(ee,{open:o,onOpenChange:t,children:[n.jsx(se,{children:n.jsx(ne,{size:36,active:o?"active":"unset",name:u})}),n.jsx(re,{children:n.jsxs(ae,{children:[n.jsx(W,{children:n.jsxs(oe,{children:["Hi ",u]})}),n.jsx(ie,{children:n.jsx(B,{onClick:()=>r.loginRedirect(),children:"Login"})}),n.jsxs(W,{children:[n.jsx(U,{appearance:"subtle",href:"/History",children:n.jsx(B,{children:"History"})}),d?.Admin&&n.jsx(U,{appearance:"subtle",href:"/Admin",children:n.jsx(B,{children:"Admin"})}),n.jsx(B,{onClick:e,children:"Setting"}),n.jsx(B,{onClick:()=>r.logoutRedirect(),children:"Logout"})]})]})})]}),a&&n.jsx(W,{children:n.jsx(Ot,{Open:s,Toggle:e})})]})}function zt({Items:o,Columns:t,NoHeader:s}){return n.jsxs(ce,{items:o||[],columns:t,getRowId:e=>e.Id,children:[!s&&n.jsx(ue,{children:n.jsx(wt,{children:({renderHeaderCell:e})=>e()})}),n.jsx(de,{children:({item:e,rowId:r})=>n.jsx(wt,{children:({renderCell:a})=>a(e)},r)}),!o&&n.jsx(le,{size:48})]})}function Ls({Guid:o,Log:t,...s}){const e=A(()=>t.With("GuidImage")),{data:r,run:a}=h(b.Storage.GetBySlice.bind(b.Storage),{manual:!0,onError:e.error});return x.useEffect(()=>{o&&a(o,e)},[o]),n.jsx(At,{...s,src:r?URL.createObjectURL(new Blob(r)):"https://placehold.co/400?text=Loading..."})}const Pt=P({unset:{flexBasis:"unset",flexGrow:0},img:{...Ve,aspectRatio:"1",marginTop:m.spacingVerticalXS,marginBottom:m.spacingVerticalXS}});function Es(o,t){const s={width:`${o}px`};return Q({columnId:"Cover",renderHeaderCell:()=>{const e=Pt();return n.jsx(he,{className:e.unset,children:n.jsx("div",{style:s})})},renderCell(e){const r=Pt();return n.jsx(X,{className:r.unset,children:n.jsx(Ls,{className:r.img,style:s,Guid:e.Cover,Log:t})})}})}function Ss(o){const{List:t}=F(),{data:s}=h(()=>b.Product.Get.Limit(o)),e=s||3;let r=0;for(const a of t)if(a.ProdId===o&&(r+=a.Quantity),r>=e)return[!0,e];return[!1,e]}const dt=P({prod:{...M,alignItems:"flex-start",justifyContent:"center"},qua:{flexBasis:"12%",flexGrow:0},act:{flexBasis:"7%",flexGrow:0}}),Ns=[Q({columnId:"Product",renderCell(o){return n.jsxs(X,{className:dt().prod,children:[n.jsx(U,{href:`/Product/${o.ProdId}`,appearance:"subtle",children:n.jsx(me,{children:o.Name})}),n.jsx(pe,{children:Object.values(o.Type).reduce((t,s)=>`${t} ${s},`,"")})]})}}),Q({columnId:"Quantity",renderCell(o){const{List:t,Update:s}=F(),[e,r]=Ss(o.ProdId);return n.jsx(X,{className:dt().qua,children:n.jsx(ge,{min:1,max:r,value:o.Quantity,onChange:(a,i)=>{e&&i.value>=o.Quantity||(o.Quantity=i.value,s(t))}})})}}),Q({columnId:"Action",renderCell(o){const{List:t,Update:s}=F();return n.jsx(X,{className:dt().act,children:n.jsx(N,{appearance:"subtle",icon:n.jsx(xe,{}),onClick:()=>s(t.filter(e=>e.Id!==o.Id))})})}})];function Ft(o){return[Es(44,o),...Ns]}const Is=P({person:k,inf:{...M,flexBasis:"50%",rowGap:m.spacingVerticalM}});function ks({Log:o}){const t=Is(),s=A(()=>o.With("PersonaInfo")),e=b.User.Get.useMe(s);return n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:t.person,children:[n.jsx("div",{className:t.inf,children:n.jsx(E,{label:"Name",size:"large",children:n.jsx(H,{children:e?.Name})})}),n.jsx("div",{className:t.inf,children:n.jsx(E,{label:"Phone",size:"large",children:n.jsx(H,{children:e?.Phone})})})]}),n.jsx(E,{label:"E-Mail",size:"large",children:n.jsx(H,{children:e?.EMail})}),n.jsx(E,{label:"Address",size:"large",children:n.jsx(H,{children:e?.Address})})]})}const Gs=P({body:{...M,rowGap:m.spacingVerticalXL},sub:{width:"fit-content",alignSelf:"flex-end"}}),lt=new $("TopNavBar","ShopCart","Confirm");function As(){const[o,t]=x.useState(),[s,{toggle:e}]=O(),{List:r,Update:a}=F(),{Nav:i}=V(),d=Gs(),{dispatch:c,dispatchToast:u}=nt(lt),{run:l}=b.Order.Post.useNew({manual:!0,onError(p,y){c({Message:"Failed Create Order",Request:y,Error:p})},onSuccess(p){u(n.jsxs(Z,{children:[n.jsx(tt,{children:"Order Placed"}),n.jsxs(et,{children:["Order Id: ",p]})]}),{intent:"success"}),a([]),e(),i("History",p)}});return n.jsxs(n.Fragment,{children:[n.jsx(N,{appearance:"primary",onClick:e,disabled:!r.length,children:"Checkout"}),n.jsxs(fe,{open:s,onOpenChange:e,position:"end",size:"medium",modalType:"alert",children:[n.jsx(we,{children:n.jsx(ye,{action:n.jsx(N,{appearance:"subtle",icon:n.jsx(Pe,{}),onClick:e}),children:"Confirm Order"})}),n.jsx(Ce,{children:n.jsxs("div",{className:d.body,children:[n.jsx(ks,{Log:lt}),n.jsx(zt,{Items:r,Columns:A(()=>Ft(lt)),NoHeader:!0}),n.jsx(E,{label:"Comment",size:"large",children:n.jsx(je,{value:o,onChange:(p,y)=>t(y.value),maxLength:1e3})}),n.jsx(N,{appearance:"primary",className:d.sub,disabled:!r.length,onClick:()=>l(r,o),children:"Submit"})]})})]})]})}const $s=P({conf:{...k,width:"100%",alignItems:"center",justifyContent:"space-between",marginTop:m.spacingVerticalS,columnGap:m.spacingHorizontalL},tooltip:{backgroundColor:m.colorBrandBackground,color:m.colorNeutralForegroundInverted,...R.borderRadius(m.borderRadiusCircular)}}),Os=new $("TopNavBar","ShopCart");function Us(){const[o,{toggle:t}]=O(),[s,{toggle:e}]=O(),r=$s(),{List:a}=F();return be(()=>{if(o)return;e();const i=setTimeout(e,2e3);return()=>clearTimeout(i)},[a]),n.jsxs(ve,{withArrow:!0,open:o,onOpenChange:t,children:[n.jsx(Te,{disableButtonEnhancement:!0,children:n.jsx(Le,{visible:s,withArrow:!0,content:{children:"↑",className:r.tooltip},relationship:"inaccessible",children:n.jsx(Ee,{icon:n.jsx(Se,{}),appearance:"subtle",size:"large",checked:o})})}),n.jsxs(Ne,{children:[n.jsx(zt,{Items:a,Columns:A(()=>Ft(Os)),NoHeader:!0}),n.jsxs("div",{className:r.conf,children:[a.map(i=>i.Quantity).reduce((i,d)=>i+d,0)," items in shopping cart",n.jsx(As,{})]})]})]})}const Ms=P({navBox:{position:"fixed",top:0,width:"100%",height:`${pt}px`,...R.padding(0,m.spacingHorizontalXXXL),backgroundColor:"#fff",boxSizing:"border-box",boxShadow:m.shadow4},navBar:{...k,maxWidth:gt,height:"100%",...R.margin(0,"auto"),alignItems:"center",justifyContent:"space-between"},logoBox:{...k,columnGap:m.spacingHorizontalL,alignItems:"center"},logoText:{color:m.colorBrandForeground2}});function Ds(){const o=Ms();return n.jsx(Ie,{children:n.jsx("header",{className:o.navBox,children:n.jsxs("nav",{className:o.navBar,children:[n.jsxs(U,{className:o.logoBox,href:"/",appearance:"subtle",children:[n.jsx(At,{src:"/Awai.png",height:pt}),n.jsx(J,{size:600,font:"monospace",className:o.logoText,children:rt.Name})]}),n.jsx(cs,{}),n.jsxs("div",{className:o.logoBox,children:[n.jsx(bs,{}),n.jsx(os,{}),n.jsx(Us,{}),n.jsx(Ts,{})]})]})})})}function Rs(){const{Rep:o}=V();return setTimeout(()=>o("/"),3e3),n.jsxs(n.Fragment,{children:[n.jsxs(ke,{children:[n.jsxs("title",{children:["Redirect - Not Found - ",rt.Name]}),n.jsx("meta",{name:"robots",content:"noindex, nofollow"})]}),n.jsx(q,{size:"huge",label:"Redirecting..."})]})}const Vs=P({body:{...M,minWidth:"375px",position:"absolute",marginTop:`${pt}px`,width:"100%",minHeight:"-webkit-fill-available",justifyContent:"space-between",backgroundColor:m.colorNeutralBackground2},content:{...M,maxWidth:gt,width:"-webkit-fill-available",marginLeft:"auto",marginRight:"auto",paddingLeft:m.spacingHorizontalM,paddingRight:m.spacingHorizontalM,paddingTop:m.spacingVerticalXXXL}});function Bs(){const o=Vs(),{Paths:t}=V(),s=t.at(0),e=x.useMemo(()=>{switch(s){case"Product":return n.jsx(Hs,{});case"Admin":return n.jsx(zs,{});case"History":return n.jsx(Fs,{});case"Login":return n.jsx(q,{size:"huge",label:"Login Redirecting..."});case"Reload":return n.jsx(q,{size:"huge",label:"Reloading..."});case"":case void 0:return n.jsx(_s,{});default:return n.jsx(Rs,{})}},[s]);return n.jsxs(n.Fragment,{children:[n.jsx(Ds,{}),n.jsxs("div",{className:o.body,children:[n.jsx("main",{className:o.content,children:n.jsx(x.Suspense,{fallback:n.jsx(q,{}),children:e})}),n.jsx(as,{})]}),n.jsx(ze,{})]})}const Hs=x.lazy(()=>st(()=>import("./index-jtukfdBR.js"),__vite__mapDeps([0,1,2,3]))),zs=x.lazy(()=>st(()=>import("./index-5RkaVN2u.js"),__vite__mapDeps([4,1,5,2]))),Fs=x.lazy(()=>st(()=>import("./index-QtnnZT98.js"),__vite__mapDeps([6,1,5]))),_s=x.lazy(()=>st(()=>import("./index-OlsiI6dd.js"),__vite__mapDeps([7,1])));Ge.createRoot(document.getElementById(rt.Name)).render(n.jsx(Ae,{theme:$e,children:n.jsx(Me,{children:n.jsx(Oe,{instance:I,children:n.jsxs(ns,{children:[n.jsx(Ue,{pauseOnHover:!0}),n.jsx(Bs,{})]})})})}));export{Ps as A,Qs as B,Ve as C,rt as D,k as F,Ls as G,b as H,$ as L,Es as M,Xs as S,M as a,Ss as b,V as c,De as d,nt as e,zt as f,F as u};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-jtukfdBR.js","assets/vendor-VMat-HGY.js","assets/Lazy-TS6YJ6ri.js","assets/index-scunr7sf.css","assets/index-5RkaVN2u.js","assets/Columns-2WbzxjVt.js","assets/index-QtnnZT98.js","assets/index-OlsiI6dd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
