import{m as h,s as d,t as u,aS as B,j as r,a8 as E,aF as C,e as k,D,o as O,B as I,g as q,h as A,i as F,k as H,aG as R,v as f,J as G,aT as z,aU as M,aV as X,R as $,aD as W,a7 as m,aW as V,at as Q}from"./vendor-BRd9sncS.js";import{C as w,F as P,a as T,L as b,H as v,G as U,D as J}from"./index-CPdKjF50.js";function y(){return y=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s])}return n},y.apply(this,arguments)}var Y={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(n){},onComplete:function(n){},preStringTyped:function(n,i){},onStringTyped:function(n,i){},onLastStringBackspaced:function(n){},onTypingPaused:function(n,i){},onTypingResumed:function(n,i){},onReset:function(n){},onStop:function(n,i){},onStart:function(n,i){},onDestroy:function(n){}},K=new(function(){function n(){}var i=n.prototype;return i.load=function(t,s,e){if(t.el=typeof e=="string"?document.querySelector(e):e,t.options=y({},Y,s),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(p){return p.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var o=Array.prototype.slice.apply(t.stringsElement.children),a=o.length;if(a)for(var l=0;l<a;l+=1)t.strings.push(o[l].innerHTML.trim())}for(var c in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[c]=c;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},i.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},i.appendCursorAnimationCss=function(t){var s="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(e)}},i.appendFadeOutAnimationCss=function(t){var s="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+s+"]")){var e=document.createElement("style");e.setAttribute(s,"true"),e.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(e)}},n}()),S=new(function(){function n(){}var i=n.prototype;return i.typeHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var o=t.substring(s).charAt(0);if(o==="<"||o==="&"){var a;for(a=o==="<"?">":";";t.substring(s+1).charAt(0)!==a&&!(1+ ++s>t.length););s++}return s},i.backSpaceHtmlChars=function(t,s,e){if(e.contentType!=="html")return s;var o=t.substring(s).charAt(0);if(o===">"||o===";"){var a;for(a=o===">"?"<":"&";t.substring(s-1).charAt(0)!==a&&!(--s<0););s--}return s},n}()),Z=function(){function n(t,s){K.load(this,s,t),this.begin()}var i=n.prototype;return i.toggle=function(){this.pause.status?this.start():this.stop()},i.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},i.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},i.destroy=function(){this.reset(!1),this.options.onDestroy(this)},i.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},i.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},i.typewrite=function(t,s){var e=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),a=1;this.pause.status!==!0?this.timeout=setTimeout(function(){s=S.typeHtmlChars(t,s,e);var l=0,c=t.substring(s);if(c.charAt(0)==="^"&&/^\^\d+/.test(c)){var p=1;p+=(c=/\d+/.exec(c)[0]).length,l=parseInt(c),e.temporaryPause=!0,e.options.onTypingPaused(e.arrayPos,e),t=t.substring(0,s)+t.substring(s+p),e.toggleBlinking(!0)}if(c.charAt(0)==="`"){for(;t.substring(s+a).charAt(0)!=="`"&&(a++,!(s+a>t.length)););var x=t.substring(0,s),L=t.substring(x.length+1,s+a),N=t.substring(s+a+1);t=x+L+N,a--}e.timeout=setTimeout(function(){e.toggleBlinking(!1),s>=t.length?e.doneTyping(t,s):e.keepTyping(t,s,a),e.temporaryPause&&(e.temporaryPause=!1,e.options.onTypingResumed(e.arrayPos,e))},l)},o):this.setPauseStatus(t,s,!0)},i.keepTyping=function(t,s,e){s===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var o=t.substring(0,s+=e);this.replaceText(o),this.typewrite(t,s)},i.doneTyping=function(t,s){var e=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){e.backspace(t,s)},this.backDelay))},i.backspace=function(t,s){var e=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){s=S.backSpaceHtmlChars(t,s,e);var a=t.substring(0,s);if(e.replaceText(a),e.smartBackspace){var l=e.strings[e.arrayPos+1];e.stopNum=l&&a===l.substring(0,s)?s:0}s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.options.onLastStringBackspaced(),e.shuffleStringsIfNeeded(),e.begin()):e.typewrite(e.strings[e.sequence[e.arrayPos]],s))},o)}else this.setPauseStatus(t,s,!1)},i.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},i.setPauseStatus=function(t,s,e){this.pause.typewrite=e,this.pause.curString=t,this.pause.curStrPos=s},i.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},i.humanizer=function(t){return Math.round(Math.random()*t/2)+t},i.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},i.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},i.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},i.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(s){t.stop()}),this.el.addEventListener("blur",function(s){t.el.value&&t.el.value.length!==0||t.start()}))},i.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},n}();const _=h({main:{position:"relative"},img:{...w,aspectRatio:"42/9",width:"100%",minHeight:"320px",...d.borderRadius(u.borderRadiusXLarge)},mask:{position:"absolute",top:0,left:0,right:0,bottom:"4px",...d.borderRadius(u.borderRadiusXLarge),backdropFilter:"blur(1px) brightness(105%)"},info:{...P,position:"absolute",top:0,...d.padding(u.spacingHorizontalXXXL),height:"-webkit-fill-available"},space:{flexBasis:"50%",flexShrink:0,"@media screen and (max-width: 1024px)":{flexBasis:0}},txt:{...T,justifyContent:"space-around"},white:{color:"white !important","@media screen and (max-width: 600px)":{fontSize:u.fontSizeBase300,lineHeight:u.lineHeightBase300}},btn:{width:"fit-content"}});function j(){const n=_(),i=B(t=>{const s=new Z(t,{strings:["AwaiShop","Together","Dream","Forever"],typeSpeed:60,backSpeed:40,startDelay:1500,backDelay:3e3,showCursor:!1});return()=>s.destroy()});return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:n.main,children:[r.jsx(E,{className:n.img,src:"/banner.jpg"}),r.jsx("div",{className:n.mask,style:{background:"linear-gradient(to right, transparent, var(--colorBackgroundOverlay))"}}),r.jsxs("div",{className:n.info,children:[r.jsx("div",{className:n.space}),r.jsxs("div",{className:n.txt,children:[r.jsxs("div",{children:[r.jsx(C,{className:n.white,children:"Play "}),r.jsx(k,{ref:i,size:900,weight:"semibold",underline:!0,className:n.white,children:"?"}),r.jsx(C,{className:n.white,children:" With SoarCraft"})]}),r.jsx(k,{size:500,truncate:!0,className:n.white,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}),r.jsxs(D,{modalType:"non-modal",children:[r.jsx(O,{disableButtonEnhancement:!0,children:r.jsx("div",{className:n.btn,children:r.jsx(I,{appearance:"outline",size:"large",className:n.white,children:"Learn More"})})}),r.jsx(q,{children:r.jsxs(A,{children:[r.jsx(F,{children:"Welcome to AwaiShop"}),r.jsx(H,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus nec erat vel hendrerit. Nulla tempus placerat turpis dictum placerat. Suspendisse ut justo diam. Donec auctor augue feugiat purus mollis, vitae congue erat pretium. Nulla blandit orci ante, a posuere mauris eleifend vel. Nam dapibus venenatis scelerisque. Nullam nisl turpis, cursus in convallis in, eleifend eget arcu. Curabitur scelerisque pretium turpis, consectetur congue nulla convallis tincidunt. Quisque rhoncus lectus a nunc tempor scelerisque. Quisque non augue eget augue ultricies viverra. Maecenas aliquam nisi orci, id volutpat risus efficitur et. Aliquam ac nunc euismod, interdum mi ac, faucibus enim. Donec nec finibus metus. Phasellus iaculis elit finibus sem aliquam, ut viverra tortor dapibus. Phasellus rhoncus, libero sit amet pulvinar tempus, velit lorem venenatis nisi, id ornare quam quam eget orci. In hac habitasse platea dictumst."})]})})]})]})]})]}),r.jsx(R,{})]})}const tt=h({img:{aspectRatio:"1",...w,borderTopLeftRadius:u.borderRadiusMedium,borderTopRightRadius:u.borderRadiusMedium},fore:{color:u.colorBrandForegroundLink}}),g=new b("Gallery","Category","Card");function st({Id:n}){const i=tt(),{data:t}=f(()=>v.Product.Get.Basic(n,g),{onError:g.error});return r.jsx(G,{href:`/Product/${n}`,children:r.jsxs(z,{children:[r.jsx(M,{children:r.jsx(U,{className:i.img,Guid:t?.Cover,ParentLog:g})}),r.jsx(X,{children:r.jsx($,{className:i.fore,children:t?.Name||"Loading..."})})]})})}const et=h({card:{flexBasis:"20%",flexGrow:1,flexShrink:0,maxWidth:"25%",minWidth:`${375/2}px`,boxSizing:"border-box",paddingRight:u.spacingHorizontalL,paddingLeft:u.spacingHorizontalL},cate:{...P,flexWrap:"wrap",rowGap:u.spacingVerticalXL}}),it=new b("Gallery","Category");function nt({Category:n}){const i=et(),{data:t,loading:s}=f(()=>v.Gallery.Get.Products(n),{onError:it.error});return r.jsxs(r.Fragment,{children:[r.jsx(W,{children:n}),r.jsx("div",{className:i.cate,children:s?r.jsx(m,{size:128}):t.map((e,o)=>r.jsx("div",{className:i.card,children:r.jsx(st,{Id:e},o)}))})]})}const rt=h({main:{...T,rowGap:u.spacingVerticalXL}}),at=new b("Gallery");function lt(){const n=rt(),{data:i,loading:t}=f(()=>v.Gallery.Get.Categories(),{onError:at.error});return t?r.jsxs(V,{className:n.main,children:[r.jsx(j,{}),r.jsx(m,{appearance:"translucent",size:32}),r.jsx(m,{size:128})]}):r.jsxs("div",{className:n.main,children:[r.jsx(Q,{children:r.jsxs("title",{children:["Gallery - ",J.Name]})}),r.jsx(j,{}),i?.map((s,e)=>r.jsx(nt,{Category:s},e))]})}export{lt as default};