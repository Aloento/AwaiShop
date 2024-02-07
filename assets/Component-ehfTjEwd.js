import{j as g,Z as Te,a0 as W,bG as ne,m as pe,s as Ie,r as N,b3 as ae,U as we,V as Ae,B as je,bJ as Le,Y as $e}from"./vendor-bJfMN0GW.js";import{a as e,h as ue,i as he,j as de,C as xe,u as Pe,L as Ye,b as ke,T as Ke,I as fe,k as se,l as We,m as Se,n as ze,o as ve,p as Je}from"./index-HqdRcbJ0.js";import{L as Be}from"./LexicalNestedComposer-OOuutXws.js";import"./index-Ztl3jp0r.js";function He({cell:t,rows:s,cellCoordMap:c,updateCellsByID:a,onClose:C,updateTableNode:y,setSortingOptions:x,sortingOptions:n}){const j=c.get(t.id);if(!j)return null;const[_,w]=j,S=[];return t.type==="header"&&w===0&&(n&&n.x===_&&S.push(g.jsx(W,{onClick:()=>{x(null),C()},children:"Remove Sorting"})),(!n||n.x!==_||n.type==="descending")&&S.push(g.jsx(W,{onClick:()=>{x({type:"ascending",x:_}),C()},children:"Sort Ascending"})),(!n||n.x!==_||n.type==="ascending")&&S.push(g.jsx(W,{onClick:()=>{x({type:"descending",x:_}),C()},children:"Sort Descending"})),S.push(g.jsx(ne,{}))),g.jsxs(Te,{children:[g.jsx(W,{onClick:()=>{y(M=>{M.updateCellType(_,w,t.type==="normal"?"header":"normal")}),C()},children:t.type==="normal"?"Make header":"Remove header"}),g.jsx(W,{onClick:()=>{a([t.id],()=>{const M=e.$getRoot();M.clear(),M.append(e.$createParagraphNode())}),C()},children:"Clear Cell"}),g.jsx(ne,{}),S,g.jsx(W,{onClick:()=>{y(M=>{M.insertRowAt(w)}),C()},children:"Insert row above"}),g.jsx(W,{onClick:()=>{y(M=>{M.insertRowAt(w+1)}),C()},children:"Insert row below"}),g.jsx(ne,{}),g.jsx(W,{onClick:()=>{y(M=>{M.insertColumnAt(_)}),C()},children:"Insert column left"}),g.jsx(W,{onClick:()=>{y(M=>{M.insertColumnAt(_+1)}),C()},children:"Insert column right"}),g.jsx(ne,{}),s[0].cells.length!==1&&g.jsx(W,{onClick:()=>{y(M=>{M.deleteColumnAt(_)}),C()},children:"Delete column"}),s.length!==1&&g.jsx(W,{onClick:()=>{y(M=>{M.deleteRowAt(w)}),C()},children:"Delete row"}),g.jsx(W,{onClick:()=>{y(M=>{M.selectNext(),M.remove()}),C()},children:"Delete table"})]})}function Xe(t){return`<p class="${t.paragraph}"><br></p>`}function Fe(t,s){const c=s.parseEditorState(t);let a=ue.get(t);if(!a){a=c.read(()=>he.$generateHtmlFromNodes(s,null));const C=c.read(()=>e.$getRoot().getTextContent());ue.set(t,a),de.set(t,C)}return a}function Ue({cellEditor:t}){const{cellEditorConfig:s,cellEditorPlugins:c}=N.useContext(xe);return!c||!s?null:g.jsx(Be.LexicalNestedComposer,{initialEditor:t,initialTheme:s.theme,initialNodes:s.nodes,skipCollabChecks:!0,children:c})}function qe({cell:t,cellCoordMap:s,cellEditor:c,isEditing:a,isSelected:C,isPrimarySelected:y,theme:x,updateCellsByID:n,updateTableNode:j,rows:_,setSortingOptions:w,sortingOptions:S}){const[M,k]=N.useState(!1),u=t.type!=="normal",v=t.json,H=u?"th":"td",oe=t.width,P=s.get(t.id),z=S&&P&&P[0]===S.x&&P[1]===0;N.useEffect(()=>{(a||!y)&&k(!1)},[a,y]);const J=Ge();return g.jsxs(H,{className:ae(x.tableCell,u&&x.tableCellHeader,C&&x.tableCellSelected),"data-id":t.id,tabIndex:-1,style:{width:oe},children:[y&&g.jsx("div",{className:ae(x.tableCellPrimarySelected,a&&x.tableCellEditing)}),y&&a?g.jsx(Ue,{cellEditor:c}):g.jsxs(g.Fragment,{children:[g.jsx("div",{className:J.prim,dangerouslySetInnerHTML:{__html:v?Fe(v,c):Xe(x)}}),g.jsx("div",{className:x.tableCellResizer,"data-table-resize":"true"})]}),y&&!a&&g.jsx("div",{className:x.tableCellActionButtonContainer,children:g.jsxs(we,{open:M,children:[g.jsx(Ae,{disableButtonEnhancement:!0,children:g.jsx(je,{size:"small",shape:"circular",className:J.btn,children:g.jsx(Le,{}),onClick:V=>{k(!M),V.stopPropagation()}})}),g.jsx($e,{children:g.jsx(He,{cell:t,updateCellsByID:n,onClose:()=>k(!1),updateTableNode:j,cellCoordMap:s,rows:_,setSortingOptions:w,sortingOptions:S})})]})}),z&&g.jsx("div",{className:x.tableCellSortedIndicator})]})}const Ge=pe({prim:{position:"relative",zIndex:3},btn:{maxWidth:"unset",minWidth:"unset",...Ie.padding("4px")}}),X=[];function Ve(){const t=e.$createRangeSelection();return t.focus.set("root",e.$getRoot().getChildrenSize(),"element"),t}function ie(t,s){const c=t.querySelector(`[data-id=${s}]`);c&&c.focus()}function Ze(t){return t.nodeType===1&&t.hasAttribute("data-table-resize")}function ge(t){const s=t.getRootElement();return s?s.ownerDocument:document}function Qe(t,s,c,a){return s?!1:t===67?fe?c:a:!1}function et(t,s,c,a){return s?!1:t===88?fe?c:a:!1}function tt(t,s,c,a){return s?!1:t===86?fe?c:a:!1}function ce(t){let s=t;for(;s;){const c=s.getAttribute("data-id");if(c)return c;s=s.parentElement}return null}function nt(t){let s=t;for(;s;){if(s.nodeName==="TH"||s.nodeName==="TD")return s.getBoundingClientRect().width;s=s.parentElement}return 0}function G(t,s,c,a,C,y){for(const x of s){const n=re(t,x,c);if(n&&a){const j=a.parseEditorState(n.json);a._headless=!0,a.setEditorState(j),a.update(y,{discrete:!0}),a._headless=!1;const _=JSON.stringify(a.getEditorState());C(w=>{const[S,M]=c.get(x);w.updateCellJSON(S,M,_)})}}}function st(t){let s=t;for(;s;){const c=s.nodeName;if(c==="BUTTON"||c==="INPUT"||c==="TEXTAREA")return!0;s=s.parentElement}return!1}function Re(t,s,c){const a=c.get(t),C=c.get(s);if(!a||!C)return null;const y=Math.min(a[0],C[0]),x=Math.max(a[0],C[0]),n=Math.min(a[1],C[1]),j=Math.max(a[1],C[1]);return{endX:x,endY:j,startX:y,startY:n}}function Ce(t,s,c,a){const C=Re(s,c,a);if(!C)return[];const{startX:y,endY:x,endX:n,startY:j}=C,_=[];for(let w=y;w<=n;w++)for(let S=j;S<=x;S++)_.push(t[S].cells[w].id);return _}function rt(t,s){const{startX:c,endY:a,endX:C,startY:y}=s,x=[];for(let n=y;n<=a;n++){const j=t[n],_=Se();for(let w=c;w<=C;w++){const S={...j.cells[w]};S.id=ze(),_.cells.push(S)}x.push(_)}return x}function re(t,s,c){const a=c.get(s);if(!a)return null;const[C,y]=a;return t[y].cells[C]}function ot(t){const s=t.querySelectorAll("tr"),c=[];for(let a=0;a<s.length;a++){const y=s[a].querySelectorAll("td,th");if(!y||y.length===0)continue;const x=[];for(let j=0;j<y.length;j++){const _=y[j],w=_.nodeName==="TH",S=ve(w?"header":"normal");S.json=Je(JSON.stringify(_.innerText.replace(/\n/g," "))),x.push(S)}const n=Se();n.cells=x,c.push(n)}return c}function lt(t){return t instanceof Ke}function ft({nodeKey:t,rows:s,theme:c}){const[a,C,y]=Pe.useLexicalNodeSelection(t),{cellEditorConfig:x}=N.useContext(xe),[n]=Ye.useLexicalComposerContext(),j=N.useRef({point:0,size:0}),_=N.useRef(null),w=N.useRef(null),S=N.useRef(null),M=N.useRef(null),k=N.useRef(!1),[u,v]=N.useState(null),[H,oe]=N.useState(null),[P,z]=N.useState([]),[J,V]=N.useState(null),[ye,Ne]=N.useState(!1),[Me,Ee]=N.useState(!1),[I,U]=N.useState(!1),D=N.useMemo(()=>{const i=new Map;for(let R=0;R<s.length;R++){const A=s[R].cells;for(let m=0;m<A.length;m++){const b=A[m];i.set(b.id,[m,R])}}return i},[s]),O=N.useMemo(()=>{if(!H)return s;const i=s.slice(1);return i.sort((R,L)=>{const A=R.cells,m=L.cells,b=H.x,Y=de.get(A[b].json),T=de.get(m[b].json);return!Y||!T?1:H.type==="ascending"?Y.localeCompare(T):T.localeCompare(Y)}),i.unshift(s[0]),i},[s,H]),E=N.useMemo(()=>{if(!x)return null;const i=e.createEditor({namespace:x.namespace,nodes:x.nodes,onError:R=>x.onError(R,i),theme:x.theme});return i},[x]),me=N.useMemo(()=>new Set(P),[P]),$=N.useCallback(i=>{n.update(()=>{const R=e.$getNodeByKey(t);lt(R)&&i(R)})},[n,t]),F=N.useCallback((i,R,L)=>{const A=O[R].cells[i].id;if(S.current=A,L){const m=Ce(O,u,A,D);z(m)}else v(A),z(X),ie(M.current,A)},[D,u,O]),q=N.useCallback(()=>{if(E&&u){const i=JSON.stringify(E.getEditorState());$(R=>{const L=D.get(u);if(L===void 0)return;const[A,m]=L;R.updateCellJSON(A,m,i)})}},[D,E,u,$]),Z=N.useCallback(()=>{setTimeout(()=>{const i=n.getRootElement();i&&(i.focus({preventScroll:!0}),window.getSelection()?.removeAllRanges())},20)},[n]),le=N.useCallback((i,R)=>{G(O,i,D,E,$,R)},[D,E,O,$]),Q=N.useCallback(()=>u&&!I?(le([u,...P],()=>{const i=e.$getRoot();i.clear(),i.append(e.$createParagraphNode())}),!0):(a&&$(i=>{i.selectNext(),i.remove()}),!1),[I,a,u,P,le,$]);N.useEffect(()=>{const i=M.current;a&&document.activeElement===document.body&&i&&i.focus()},[a]),N.useEffect(()=>{const i=M.current;if(!i)return;const R=ge(n);function L(T){const r=T.clientX-m.x,o=T.clientY-m.y;return r<5||o<5}function A(T){const r=ce(T.target);if(r&&n.isEditable()&&i.contains(T.target)){if(L(T)){C(!0),v(null),Z();return}if(C(!1),Ze(T.target)){V(r),i.style.userSelect="none",j.current={point:T.clientX,size:nt(T.target)};return}k.current=!0,u!==r?(I&&q(),v(r),U(!1),S.current=r):S.current=null,z(X)}else u&&!st(T.target)&&(C(!1),k.current=!1,I&&q(),v(null),z(X),U(!1),S.current=null)}const m=i.getBoundingClientRect();function b(T){if(J){const o=_.current;if(o){const{size:l,point:d}=j.current,p=T.clientX-d,h=l+p;let f=T.clientX-m.x;f<10?f=10:f>m.width-10?f=m.width-10:h<20&&(f=d-l+20-m.x),o.style.left=`${f}px`}return}if(!I){const{clientX:o,clientY:l}=T,{width:d,x:p,y:h,height:f}=m,B=o>p+d*.9&&o<p+d+40&&!k.current;Ne(B);const K=T.target===w.current||l>h+f*.85&&l<h+f+5&&!k.current;Ee(K)}if(I||!k.current||!u)return;const r=ce(T.target);if(r&&r!==S.current){P.length===0&&(i.style.userSelect="none");const o=Ce(O,u,r,D);o.length===1?z(X):z(o),S.current=r}}function Y(T){if(J){const{size:r,point:o}=j.current,l=T.clientX-o;let d=r+l;d<10&&(d=10),$(p=>{const[h]=D.get(J);p.updateColumnWidth(h,d)}),V(null)}i&&P.length>1&&k.current&&(i.style.userSelect="text",window.getSelection()?.removeAllRanges()),k.current=!1}return R.addEventListener("pointerdown",A),R.addEventListener("pointermove",b),R.addEventListener("pointerup",Y),()=>{R.removeEventListener("pointerdown",A),R.removeEventListener("pointermove",b),R.removeEventListener("pointerup",Y)}},[E,n,I,O,q,u,me,P,D,J,$,C,Z]),N.useEffect(()=>{if(!I&&u){let i=function(m){if(m&&E){const b=m.json,Y=E.parseEditorState(b);E.setEditorState(Y)}},R=function(m){const b=ce(m.target);if(b===u&&n.isEditable()){const Y=re(O,b,D);i(Y),U(!0),z(X)}},L=function(m){const b=m.keyCode;if(b===16||b===27||b===9||b===37||b===38||b===39||b===40||b===8||b===46||!n.isEditable())return;if(b===13&&m.preventDefault(),!I&&u&&n.getEditorState().read(()=>!e.$getSelection())&&m.target.contentEditable!=="true"){if(Qe(b,m.shiftKey,m.metaKey,m.ctrlKey)){n.dispatchCommand(e.COPY_COMMAND,m);return}if(et(b,m.shiftKey,m.metaKey,m.ctrlKey)){n.dispatchCommand(e.CUT_COMMAND,m);return}if(tt(b,m.shiftKey,m.metaKey,m.ctrlKey)){n.dispatchCommand(e.PASTE_COMMAND,m);return}}if(m.metaKey||m.ctrlKey||m.altKey)return;const Y=re(O,u,D);i(Y),U(!0),z(X)};const A=ge(n);return A.addEventListener("dblclick",R),A.addEventListener("keydown",L),()=>{A.removeEventListener("dblclick",R),A.removeEventListener("keydown",L)}}},[E,n,I,O,u,D]),N.useEffect(()=>{const i=M.current;if(!i)return;function R(r,o,l,d){const p=r instanceof KeyboardEvent?null:r.clipboardData;if(r.preventDefault(),p)p.setData("text/html",o),p.setData("text/plain",d),p.setData("application/x-lexical-editor",l);else{const h=navigator.clipboard;if(h){const f=[new ClipboardItem({"text/html":new Blob([o],{type:"text/html"})})];h.write(f)}}}async function L(r,o){try{return r instanceof DataTransfer?r.getData(o):r instanceof ClipboardItem?await(await r.getType(o)).text():""}catch{return""}}async function A(r){let o=(r instanceof InputEvent?null:r.clipboardData)||null;if(u&&E){if(r.preventDefault(),!o)try{o=(await navigator.clipboard.read())[0]}catch{}const l=o?await L(o,"application/x-lexical-editor"):"";if(l)try{const h=JSON.parse(l);if(h.namespace===n._config.namespace&&Array.isArray(h.nodes)){G(O,[u],D,E,$,()=>{const f=e.$getRoot();f.clear(),f.append(e.$createParagraphNode()),f.selectEnd();const B=se.$generateNodesFromSerializedNodes(h.nodes),K=e.$getSelection();e.$isRangeSelection(K)&&se.$insertGeneratedNodes(E,B,K)});return}}catch{}const d=o?await L(o,"text/html"):"";if(d)try{const f=new DOMParser().parseFromString(d,"text/html"),B=f.querySelector("table");if(B){const K=ot(B);$(ee=>{const[te,_e]=D.get(u);ee.mergeRows(te,_e,K)});return}G(O,[u],D,E,$,()=>{const K=e.$getRoot();K.clear(),K.append(e.$createParagraphNode()),K.selectEnd();const ee=he.$generateNodesFromDOM(n,f),te=e.$getSelection();e.$isRangeSelection(te)&&se.$insertGeneratedNodes(E,ee,te)});return}catch{}const p=o?await L(o,"text/plain"):"";p&&G(O,[u],D,E,$,()=>{const h=e.$getRoot();h.clear(),h.selectEnd();const f=e.$getSelection();f&&f.insertRawText(p)})}}function m(r){if(u&&E){const l=re(O,u,D).json,d=ue.get(l)||null;if(!d)return;const p=E.parseEditorState(l),h=p.read(()=>e.$getRoot().getTextContent()),f=p.read(()=>JSON.stringify(se.$generateJSONFromSelectedNodes(E,null)));R(r,d,f,h)}}function b(r){const o=S.current;if(u&&E&&o){const l=Re(u,o,D);if(!l)return;const d=We(O,l),p=d.outerHTML,h=d.outerText,f=n.getEditorState().read(()=>e.$getNodeByKey(t).exportJSON());f.rows=rt(O,l);const B={namespace:E._config.namespace,nodes:[f]},K=JSON.stringify(B);R(r,p,K,h)}}function Y(r,o){const l=e.$getSelection();return u&&!I&&!l&&o===n?(A(r),k.current=!1,z(X),!0):!1}function T(r,o){const l=e.$getSelection();return u&&!I&&!l&&o===n?(P.length===0?m(r):b(r),!0):!1}return ke.mergeRegister(n.registerCommand(e.CLICK_COMMAND,r=>{const o=e.$getSelection();return!!e.$isNodeSelection(o)},e.COMMAND_PRIORITY_LOW),n.registerCommand(e.PASTE_COMMAND,Y,e.COMMAND_PRIORITY_LOW),n.registerCommand(e.COPY_COMMAND,T,e.COMMAND_PRIORITY_LOW),n.registerCommand(e.CUT_COMMAND,(r,o)=>T(r,o)?(Q(),!0):!1,e.COMMAND_PRIORITY_LOW),n.registerCommand(e.KEY_BACKSPACE_COMMAND,Q,e.COMMAND_PRIORITY_LOW),n.registerCommand(e.KEY_DELETE_COMMAND,Q,e.COMMAND_PRIORITY_LOW),n.registerCommand(e.FORMAT_TEXT_COMMAND,r=>u&&!I?(G(O,[u,...P],D,E,$,()=>{Ve().formatText(r)}),!0):!1,e.COMMAND_PRIORITY_LOW),n.registerCommand(e.KEY_ENTER_COMMAND,(r,o)=>{const l=e.$getSelection();if(!u&&!I&&e.$isNodeSelection(l)&&l.has(t)&&l.getNodes().length===1&&o===n){const d=O[0].cells[0].id;return v(d),ie(i,d),r.preventDefault(),r.stopPropagation(),y(),!0}return!1},e.COMMAND_PRIORITY_LOW),n.registerCommand(e.KEY_TAB_COMMAND,r=>{const o=e.$getSelection();if(!I&&!o&&u){const l=r.shiftKey,[d,p]=D.get(u);r.preventDefault();let h=null,f=null;if(d===0&&l?p!==0&&(f=p-1,h=O[f].cells.length-1):d===O[p].cells.length-1&&!l?p!==O.length-1&&(f=p+1,h=0):l?(h=d-1,f=p):(h=d+1,f=p),h&&f)return F(h,f,!1),!0}return!1},e.COMMAND_PRIORITY_LOW),n.registerCommand(e.KEY_ARROW_UP_COMMAND,(r,o)=>{const l=e.$getSelection();if(!I&&!l){const d=r.shiftKey,p=d&&S.current||u;if(p){const[h,f]=D.get(p);if(f!==0)return F(h,f-1,d),!0}}return!e.$isRangeSelection(l)||o!==E?!1:l.isCollapsed()&&!l.anchor.getNode().getTopLevelElementOrThrow().getPreviousSibling()?(r.preventDefault(),!0):!1},e.COMMAND_PRIORITY_LOW),n.registerCommand(e.KEY_ARROW_DOWN_COMMAND,(r,o)=>{const l=e.$getSelection();if(!I&&!l){const d=r.shiftKey,p=d&&S.current||u;if(p){const[h,f]=D.get(p);if(f!==O.length-1)return F(h,f+1,d),!0}}return!e.$isRangeSelection(l)||o!==E?!1:l.isCollapsed()&&!l.anchor.getNode().getTopLevelElementOrThrow().getNextSibling()?(r.preventDefault(),!0):!1},e.COMMAND_PRIORITY_LOW),n.registerCommand(e.KEY_ARROW_LEFT_COMMAND,(r,o)=>{const l=e.$getSelection();if(!I&&!l){const d=r.shiftKey,p=d&&S.current||u;if(p){const[h,f]=D.get(p);if(h!==0)return F(h-1,f,d),!0}}return!e.$isRangeSelection(l)||o!==E?!1:l.isCollapsed()&&l.anchor.offset===0?(r.preventDefault(),!0):!1},e.COMMAND_PRIORITY_LOW),n.registerCommand(e.KEY_ARROW_RIGHT_COMMAND,(r,o)=>{const l=e.$getSelection();if(!I&&!l){const d=r.shiftKey,p=d&&S.current||u;if(p){const[h,f]=D.get(p);if(h!==O[f].cells.length-1)return F(h+1,f,d),!0}}if(!e.$isRangeSelection(l)||o!==E)return!1;if(l.isCollapsed()){const d=l.anchor;if(d.type==="text"&&d.offset===d.getNode().getTextContentSize()||d.type==="element"&&d.offset===d.getNode().getChildrenSize())return r.preventDefault(),!0}return!1},e.COMMAND_PRIORITY_LOW),n.registerCommand(e.KEY_ESCAPE_COMMAND,(r,o)=>{const l=e.$getSelection();return!I&&!l&&o===n?(C(!0),v(null),Z(),!0):e.$isRangeSelection(l)&&I?(q(),U(!1),u&&setTimeout(()=>{ie(i,u)},20),!0):!1},e.COMMAND_PRIORITY_LOW))},[D,E,Q,y,n,I,F,t,u,O,q,Z,P,C,$]);function be(){$(i=>{i.addColumns(1)})}function De(){$(i=>{i.addRows(1)})}if(!E)return null;const Oe=it();return g.jsxs("div",{className:Oe.box,children:[g.jsx("table",{className:ae(c.table,a&&c.tableSelected),ref:M,tabIndex:-1,children:g.jsx("tbody",{children:O.map(i=>g.jsx("tr",{className:c.tableRow,children:i.cells.map(R=>{const{id:L}=R;return g.jsx(qe,{cell:R,theme:c,isSelected:me.has(L),isPrimarySelected:u===L,isEditing:I,sortingOptions:H,cellEditor:E,updateCellsByID:le,updateTableNode:$,cellCoordMap:D,rows:O,setSortingOptions:oe},L)})},i.id))})}),ye&&g.jsx("button",{className:c.tableAddColumns,onClick:be}),Me&&g.jsx("button",{className:c.tableAddRows,onClick:De,ref:w}),J&&g.jsx("div",{className:c.tableResizeRuler,ref:_})]})}const it=pe({box:{position:"relative"}});export{ft as default};
