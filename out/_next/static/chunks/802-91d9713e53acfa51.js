(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[802],{1163:function(e,t,n){e.exports=n(9974)},1479:function(e,t,n){"use strict";let r,o;n.d(t,{V:function(){return ex}});var l,i,u,a,s,c,d,f,p,m,v,h,g,E,b=n(7294),w=n.t(b,2),y=n(2984),T=n(2351),S=n(3784),L=((l=L||{}).Space=" ",l.Enter="Enter",l.Escape="Escape",l.Backspace="Backspace",l.Delete="Delete",l.ArrowLeft="ArrowLeft",l.ArrowUp="ArrowUp",l.ArrowRight="ArrowRight",l.ArrowDown="ArrowDown",l.Home="Home",l.End="End",l.PageUp="PageUp",l.PageDown="PageDown",l.Tab="Tab",l),C=n(6723),P=n(2180),F=n(7896);let O=null!=(E=b.useId)?E:function(){let e=(0,P.H)(),[t,n]=b.useState(e?()=>F.O.nextId():null);return(0,C.e)(()=>{null===t&&n(F.O.nextId())},[t]),null!=t?""+t:void 0};var M=((i=M||{})[i.None=1]="None",i[i.Focusable=2]="Focusable",i[i.Hidden=4]="Hidden",i);let N=(0,T.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,T.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})});function k(e){return F.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let A=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var R=((u=R||{})[u.First=1]="First",u[u.Previous=2]="Previous",u[u.Next=4]="Next",u[u.Last=8]="Last",u[u.WrapAround=16]="WrapAround",u[u.NoScroll=32]="NoScroll",u),x=((a=x||{})[a.Error=0]="Error",a[a.Overflow=1]="Overflow",a[a.Success=2]="Success",a[a.Underflow=3]="Underflow",a),D=((s=D||{})[s.Previous=-1]="Previous",s[s.Next=1]="Next",s),H=((c=H||{})[c.Strict=0]="Strict",c[c.Loose=1]="Loose",c),j=((d=j||{})[d.Keyboard=0]="Keyboard",d[d.Mouse=1]="Mouse",d);function I(e){null==e||e.focus({preventScroll:!0})}function V(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var l,i,u;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?function(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:function(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(A)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);o.length>0&&s.length>1&&(s=s.filter(e=>!o.includes(e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},p=0,m=s.length,v;do{if(p>=m||p+m<=0)return 0;let e=d+p;if(16&t)e=(e+m)%m;else{if(e<0)return 3;if(e>=m)return 1}null==(v=s[e])||v.focus(f),p+=c}while(v!==a.activeElement);return 6&t&&null!=(u=null==(i=null==(l=v)?void 0:l.matches)?void 0:i.call(l,"textarea,input"))&&u&&v.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var Y=n(3781),z=n(3855);function B(e,t,n){let r=(0,z.E)(t);(0,b.useEffect)(()=>{function t(e){r.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}var U=((f=U||{})[f.Forwards=0]="Forwards",f[f.Backwards=1]="Backwards",f),$=n(4879);function _(...e){return(0,b.useMemo)(()=>k(...e),[...e])}function W(e,t,n,r){let o=(0,z.E)(n);(0,b.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}var Z=n(1021);function q(e,t){let n=(0,b.useRef)([]),r=(0,Y.z)(e);(0,b.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}var G=n(4192);function K(e){let t=(0,Y.z)(e),n=(0,b.useRef)(!1);(0,b.useEffect)(()=>(n.current=!1,()=>{n.current=!0,(0,Z.Y)(()=>{n.current&&t()})}),[t])}function J(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var X=((p=X||{})[p.None=1]="None",p[p.InitialFocus=2]="InitialFocus",p[p.TabLock=4]="TabLock",p[p.FocusLock=8]="FocusLock",p[p.RestoreFocus=16]="RestoreFocus",p[p.All=30]="All",p);let Q=Object.assign((0,T.yV)(function(e,t){let n,r=(0,b.useRef)(null),o=(0,S.T)(r,t),{initialFocus:l,containers:i,features:u=30,...a}=e;(0,P.H)()||(u=1);let s=_(r);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,b.useRef)(ee.slice());return q(([e],[n])=>{!0===n&&!1===e&&(0,Z.Y)(()=>{t.current.splice(0)}),!1===n&&!0===e&&(t.current=ee.slice())},[e,ee,t]),(0,Y.z)(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);q(()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&I(n())},[t]),K(()=>{t&&I(n())})}({ownerDocument:s},!!(16&u));let c=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,b.useRef)(null),l=(0,$.t)();return q(()=>{if(!r)return;let i=t.current;i&&(0,Z.Y)(()=>{if(!l.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(i.contains(t)){o.current=t;return}null!=n&&n.current?I(n.current):V(i,R.First)===x.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:s,container:r,initialFocus:l},!!(2&u));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=(0,$.t)();W(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!l.current)return;let i=J(n);t.current instanceof HTMLElement&&i.add(t.current);let u=r.current;if(!u)return;let a=e.target;a&&a instanceof HTMLElement?et(i,a)?(r.current=a,I(a)):(e.preventDefault(),e.stopPropagation(),I(u)):I(r.current)},!0)}({ownerDocument:s,container:r,containers:i,previousActiveElement:c},!!(8&u));let d=(n=(0,b.useRef)(0),B("keydown",e=>{"Tab"===e.key&&(n.current=e.shiftKey?1:0)},!0),n),f=(0,Y.z)(e=>{let t=r.current;t&&(0,y.E)(d.current,{[U.Forwards]:()=>{V(t,R.First,{skipElements:[e.relatedTarget]})},[U.Backwards]:()=>{V(t,R.Last,{skipElements:[e.relatedTarget]})}})}),p=(0,G.G)(),m=(0,b.useRef)(!1);return b.createElement(b.Fragment,null,!!(4&u)&&b.createElement(N,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:M.Focusable}),(0,T.sY)({ourProps:{ref:o,onKeyDown(e){"Tab"==e.key&&(m.current=!0,p.requestAnimationFrame(()=>{m.current=!1}))},onBlur(e){let t=J(i);r.current instanceof HTMLElement&&t.add(r.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(et(t,n)||(m.current?V(r.current,(0,y.E)(d.current,{[U.Forwards]:()=>R.Next,[U.Backwards]:()=>R.Previous})|R.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&I(e.target)))}},theirProps:a,defaultTag:"div",name:"FocusTrap"}),!!(4&u)&&b.createElement(N,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:M.Focusable}))}),{features:X}),ee=[];function et(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&ee[0]!==e.target&&(ee.unshift(e.target),(ee=ee.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var en=n(3935);let er=(0,b.createContext)(!1);function eo(e){return b.createElement(er.Provider,{value:e.force},e.children)}let el=b.Fragment,ei=b.Fragment,eu=(0,b.createContext)(null),ea=(0,b.createContext)(null),es=Object.assign((0,T.yV)(function(e,t){let n=(0,b.useRef)(null),r=(0,S.T)((0,S.h)(e=>{n.current=e}),t),o=_(n),l=function(e){let t=(0,b.useContext)(er),n=(0,b.useContext)(eu),r=_(e),[o,l]=(0,b.useState)(()=>{if(!t&&null!==n||F.O.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,b.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,b.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[i]=(0,b.useState)(()=>{var e;return F.O.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),u=(0,b.useContext)(ea),a=(0,P.H)();return(0,C.e)(()=>{!l||!i||l.contains(i)||(i.setAttribute("data-headlessui-portal",""),l.appendChild(i))},[l,i]),(0,C.e)(()=>{if(i&&u)return u.register(i)},[u,i]),K(()=>{var e;l&&i&&(i instanceof Node&&l.contains(i)&&l.removeChild(i),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))}),a&&l&&i?(0,en.createPortal)((0,T.sY)({ourProps:{ref:r},theirProps:e,defaultTag:el,name:"Portal"}),i):null}),{Group:(0,T.yV)(function(e,t){let{target:n,...r}=e,o={ref:(0,S.T)(t)};return b.createElement(eu.Provider,{value:n},(0,T.sY)({ourProps:o,theirProps:r,defaultTag:ei,name:"Popover.Group"}))})}),ec=(0,b.createContext)(null),ed=Object.assign((0,T.yV)(function(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...o}=e,l=function e(){let t=(0,b.useContext)(ec);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),i=(0,S.T)(t);(0,C.e)(()=>l.register(r),[r,l.register]);let u={ref:i,...l.props,id:r};return(0,T.sY)({ourProps:u,theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})}),{});var ef=n(6567);let ep=(0,b.createContext)(()=>{});ep.displayName="StackContext";var em=((m=em||{})[m.Add=0]="Add",m[m.Remove=1]="Remove",m);function ev({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=(0,b.useContext)(ep),i=(0,Y.z)((...e)=>{null==t||t(...e),l(...e)});return(0,C.e)(()=>{let e=void 0===o||!0===o;return e&&i(0,n,r),()=>{e&&i(1,n,r)}},[i,n,r,o]),b.createElement(ep.Provider,{value:i},e)}function eh(e,t,n){let r=(0,z.E)(t);(0,b.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}let{useState:eg,useEffect:eE,useLayoutEffect:eb,useDebugValue:ew}=w;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let ey=w.useSyncExternalStore;var eT=n(9362);let eS=(v={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,eT.k)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r,o;let l={doc:e,d:t,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(n)},i=[/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0?{before(){r=window.pageYOffset},after({doc:e,d:t,meta:n}){function o(e){return n.containers.flatMap(e=>e()).some(t=>t.contains(e))}t.microTask(()=>{if("auto"!==window.getComputedStyle(e.documentElement).scrollBehavior){let n=(0,eT.k)();n.style(e.documentElement,"scroll-behavior","auto"),t.add(()=>t.microTask(()=>n.dispose()))}t.style(e.body,"marginTop",`-${r}px`),window.scrollTo(0,0);let n=null;t.addEventListener(e,"click",t=>{if(t.target instanceof HTMLElement)try{let r=t.target.closest("a");if(!r)return;let{hash:l}=new URL(r.href),i=e.querySelector(l);i&&!o(i)&&(n=i)}catch{}},!0),t.addEventListener(e,"touchmove",e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+r),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})})}}:{},{before({doc:e}){var t;let n=e.documentElement;o=(null!=(t=e.defaultView)?t:window).innerWidth-n.clientWidth},after({doc:e,d:t}){let n=e.documentElement,r=n.clientWidth-n.offsetWidth,l=o-r;t.style(n,"paddingRight",`${l}px`)}},{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];i.forEach(({before:e})=>null==e?void 0:e(l)),i.forEach(({after:e})=>null==e?void 0:e(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}},r=new Map,o=new Set,{getSnapshot:()=>r,subscribe:e=>(o.add(e),()=>o.delete(e)),dispatch(e,...t){let n=v[e].call(r,...t);n&&(r=n,o.forEach(e=>e()))}});eS.subscribe(()=>{let e=eS.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&eS.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&eS.dispatch("TEARDOWN",n)}});let eL=new Map,eC=new Map;function eP(e,t=!0){(0,C.e)(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=eC.get(r))?n:0;return eC.set(r,o+1),0!==o||(eL.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=eC.get(r))?e:1;if(1===t?eC.delete(r):eC.set(r,t-1),1!==t)return;let n=eL.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,eL.delete(r))}},[e,t])}var eF=((h=eF||{})[h.Open=0]="Open",h[h.Closed=1]="Closed",h),eO=((g=eO||{})[g.SetTitleId=0]="SetTitleId",g);let eM={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},eN=(0,b.createContext)(null);function ek(e){let t=(0,b.useContext)(eN);if(null===t){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ek),t}return t}function eA(e,t){return(0,y.E)(t.type,eM,e,t)}eN.displayName="DialogContext";let eR=T.AN.RenderStrategy|T.AN.Static,ex=Object.assign((0,T.yV)(function(e,t){var n;let r,o,l,i,u;let a=O(),{id:s=`headlessui-dialog-${a}`,open:c,onClose:d,initialFocus:f,__demoMode:p=!1,...m}=e,[v,h]=(0,b.useState)(0),g=(0,ef.oJ)();void 0===c&&null!==g&&(c=(g&ef.ZM.Open)===ef.ZM.Open);let E=(0,b.useRef)(null),w=(0,S.T)(E,t),F=_(E),R=e.hasOwnProperty("open")||null!==g,x=e.hasOwnProperty("onClose");if(!R&&!x)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!R)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!x)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof c)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`);if("function"!=typeof d)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${d}`);let D=c?0:1,[j,I]=(0,b.useReducer)(eA,{titleId:null,descriptionId:null,panelRef:(0,b.createRef)()}),V=(0,Y.z)(()=>d(!1)),z=(0,Y.z)(e=>I({type:0,id:e})),U=!!(0,P.H)()&&!p&&0===D,$=v>1,Z=null!==(0,b.useContext)(eN),[q,G]=(r=(0,b.useContext)(ea),o=(0,b.useRef)([]),l=(0,Y.z)(e=>(o.current.push(e),r&&r.register(e),()=>i(e))),i=(0,Y.z)(e=>{let t=o.current.indexOf(e);-1!==t&&o.current.splice(t,1),r&&r.unregister(e)}),u=(0,b.useMemo)(()=>({register:l,unregister:i,portals:o}),[l,i,o]),[o,(0,b.useMemo)(()=>function({children:e}){return b.createElement(ea.Provider,{value:u},e)},[u])]),{resolveContainers:K,mainTreeNodeRef:J,MainTreeNode:X}=function({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let o=(0,b.useRef)(null!=(r=null==n?void 0:n.current)?r:null),l=_(o),i=(0,Y.z)(()=>{var n;let r=[];for(let t of e)null!==t&&(t instanceof HTMLElement?r.push(t):"current"in t&&t.current instanceof HTMLElement&&r.push(t.current));if(null!=t&&t.current)for(let e of t.current)r.push(e);for(let e of null!=(n=null==l?void 0:l.querySelectorAll("html > *, body > *"))?n:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(o.current)||r.some(t=>e.contains(t))||r.push(e));return r});return{resolveContainers:i,contains:(0,Y.z)(e=>i().some(t=>t.contains(e))),mainTreeNodeRef:o,MainTreeNode:(0,b.useMemo)(()=>function(){return null!=n?null:b.createElement(N,{features:M.Hidden,ref:o})},[o,n])}}({portals:q,defaultContainers:[null!=(n=j.panelRef.current)?n:E.current]}),ee=null!==g&&(g&ef.ZM.Closing)===ef.ZM.Closing,et=!Z&&!ee&&U;eP((0,b.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==F?void 0:F.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(J.current)&&e instanceof HTMLElement))?t:null},[J]),et);let en=!!$||U;eP((0,b.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==F?void 0:F.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(J.current)&&e instanceof HTMLElement))?t:null},[J]),en),function(e,t,n=!0){let r=(0,b.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let l=o(n);if(null!==l&&l.getRootNode().contains(l)&&l.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(l)||n.composed&&n.composedPath().includes(e))return}return!function(e,t=0){var n;return e!==(null==(n=k(e))?void 0:n.body)&&(0,y.E)(t,{0:()=>e.matches(A),1(){let t=e;for(;null!==t;){if(t.matches(A))return!0;t=t.parentElement}return!1}})}(l,H.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,b.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,b.useRef)(null);eh("pointerdown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),eh("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),eh("click",e=>{l.current&&(o(e,()=>l.current),l.current=null)},!0),eh("touchend",e=>o(e,()=>e.target instanceof HTMLElement?e.target:null),!0),B("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(K,V,!(!U||$));let er=!($||0!==D);W(null==F?void 0:F.defaultView,"keydown",e=>{er&&(e.defaultPrevented||e.key===L.Escape&&(e.preventDefault(),e.stopPropagation(),V()))}),function(e,t,n=()=>[document.body]){var r;let o,l;r=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}},o=ey(eS.subscribe,eS.getSnapshot,eS.getSnapshot),(l=e?o.get(e):void 0)&&l.count,(0,C.e)(()=>{if(!(!e||!t))return eS.dispatch("PUSH",e,r),()=>eS.dispatch("POP",e,r)},[t,e])}(F,!(ee||0!==D||Z),K),(0,b.useEffect)(()=>{if(0!==D||!E.current)return;let e=new ResizeObserver(e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&V()}});return e.observe(E.current),()=>e.disconnect()},[D,E,V]);let[el,ei]=function(){let[e,t]=(0,b.useState)([]);return[e.length>0?e.join(" "):void 0,(0,b.useMemo)(()=>function(e){let n=(0,Y.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,b.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return b.createElement(ec.Provider,{value:r},e.children)},[t])]}(),eu=(0,b.useMemo)(()=>[{dialogState:D,close:V,setTitleId:z},j],[D,j,V,z]),ed=(0,b.useMemo)(()=>({open:0===D}),[D]),ep={ref:w,id:s,role:"dialog","aria-modal":0===D||void 0,"aria-labelledby":j.titleId,"aria-describedby":el};return b.createElement(ev,{type:"Dialog",enabled:0===D,element:E,onUpdate:(0,Y.z)((e,t)=>{"Dialog"===t&&(0,y.E)(e,{[em.Add]:()=>h(e=>e+1),[em.Remove]:()=>h(e=>e-1)})})},b.createElement(eo,{force:!0},b.createElement(es,null,b.createElement(eN.Provider,{value:eu},b.createElement(es.Group,{target:E},b.createElement(eo,{force:!1},b.createElement(ei,{slot:ed,name:"Dialog.Description"},b.createElement(Q,{initialFocus:f,containers:K,features:U?(0,y.E)($?"parent":"leaf",{parent:Q.features.RestoreFocus,leaf:Q.features.All&~Q.features.FocusLock}):Q.features.None},b.createElement(G,null,(0,T.sY)({ourProps:ep,theirProps:m,slot:ed,defaultTag:"div",features:eR,visible:0===D,name:"Dialog"}))))))))),b.createElement(X,null))}),{Backdrop:(0,T.yV)(function(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},i]=ek("Dialog.Backdrop"),u=(0,S.T)(t);(0,b.useEffect)(()=>{if(null===i.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[i.panelRef]);let a=(0,b.useMemo)(()=>({open:0===l}),[l]);return b.createElement(eo,{force:!0},b.createElement(es,null,(0,T.sY)({ourProps:{ref:u,id:r,"aria-hidden":!0},theirProps:o,slot:a,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,T.yV)(function(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},i]=ek("Dialog.Panel"),u=(0,S.T)(t,i.panelRef),a=(0,b.useMemo)(()=>({open:0===l}),[l]),s=(0,Y.z)(e=>{e.stopPropagation()});return(0,T.sY)({ourProps:{ref:u,id:r,onClick:s},theirProps:o,slot:a,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:(0,T.yV)(function(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:i}]=ek("Dialog.Overlay"),u=(0,S.T)(t),a=(0,Y.z)(e=>{if(e.target===e.currentTarget){if(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),i()}}),s=(0,b.useMemo)(()=>({open:0===l}),[l]);return(0,T.sY)({ourProps:{ref:u,id:r,"aria-hidden":!0,onClick:a},theirProps:o,slot:s,defaultTag:"div",name:"Dialog.Overlay"})}),Title:(0,T.yV)(function(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:i}]=ek("Dialog.Title"),u=(0,S.T)(t);(0,b.useEffect)(()=>(i(r),()=>i(null)),[r,i]);let a=(0,b.useMemo)(()=>({open:0===l}),[l]);return(0,T.sY)({ourProps:{ref:u,id:r},theirProps:o,slot:a,defaultTag:"h2",name:"Dialog.Title"})}),Description:ed})},4080:function(e,t,n){"use strict";n.d(t,{u:function(){return A}});var r,o=n(7294),l=n(2351),i=n(6567),u=n(2984),a=n(4879),s=n(6723),c=n(3855),d=n(2180),f=n(3784),p=n(9362);function m(e,...t){e&&t.length>0&&e.classList.add(...t)}function v(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=n(4192),g=n(3781),E=n(4067);function b(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let w=(0,o.createContext)(null);w.displayName="TransitionContext";var y=((r=y||{}).Visible="visible",r.Hidden="hidden",r);let T=(0,o.createContext)(null);function S(e){return"children"in e?S(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function L(e,t){let n=(0,c.E)(e),r=(0,o.useRef)([]),i=(0,a.t)(),s=(0,h.G)(),d=(0,g.z)((e,t=l.l4.Hidden)=>{let o=r.current.findIndex(({el:t})=>t===e);-1!==o&&((0,u.E)(t,{[l.l4.Unmount](){r.current.splice(o,1)},[l.l4.Hidden](){r.current[o].state="hidden"}}),s.microTask(()=>{var e;!S(r)&&i.current&&(null==(e=n.current)||e.call(n))}))}),f=(0,g.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>d(e,l.l4.Unmount)}),p=(0,o.useRef)([]),m=(0,o.useRef)(Promise.resolve()),v=(0,o.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)((e,n,r)=>{p.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(v.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?m.current=m.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,g.z)((e,t,n)=>{Promise.all(v.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>n(t))});return(0,o.useMemo)(()=>({children:r,register:f,unregister:d,onStart:E,onStop:b,wait:m,chains:v}),[f,d,r,E,b,v,m])}function C(){}T.displayName="NestingContext";let P=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function F(e){var t;let n={};for(let r of P)n[r]=null!=(t=e[r])?t:C;return n}let O=l.AN.RenderStrategy,M=(0,l.yV)(function(e,t){let{show:n,appear:r=!1,unmount:u=!0,...a}=e,c=(0,o.useRef)(null),p=(0,f.T)(c,t);(0,d.H)();let m=(0,i.oJ)();if(void 0===n&&null!==m&&(n=(m&i.ZM.Open)===i.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,o.useState)(n?"visible":"hidden"),E=L(()=>{h("hidden")}),[b,y]=(0,o.useState)(!0),C=(0,o.useRef)([n]);(0,s.e)(()=>{!1!==b&&C.current[C.current.length-1]!==n&&(C.current.push(n),y(!1))},[C,n]);let P=(0,o.useMemo)(()=>({show:n,appear:r,initial:b}),[n,r,b]);(0,o.useEffect)(()=>{if(n)h("visible");else if(S(E)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,E]);let F={unmount:u},M=(0,g.z)(()=>{var t;b&&y(!1),null==(t=e.beforeEnter)||t.call(e)}),k=(0,g.z)(()=>{var t;b&&y(!1),null==(t=e.beforeLeave)||t.call(e)});return o.createElement(T.Provider,{value:E},o.createElement(w.Provider,{value:P},(0,l.sY)({ourProps:{...F,as:o.Fragment,children:o.createElement(N,{ref:p,...F,...a,beforeEnter:M,beforeLeave:k})},theirProps:{},defaultTag:o.Fragment,features:O,visible:"visible"===v,name:"Transition"})))}),N=(0,l.yV)(function(e,t){var n,r,y;let C;let{beforeEnter:P,afterEnter:M,beforeLeave:N,afterLeave:k,enter:A,enterFrom:R,enterTo:x,entered:D,leave:H,leaveFrom:j,leaveTo:I,...V}=e,Y=(0,o.useRef)(null),z=(0,f.T)(Y,t),B=null==(n=V.unmount)||n?l.l4.Unmount:l.l4.Hidden,{show:U,appear:$,initial:_}=function(){let e=(0,o.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[W,Z]=(0,o.useState)(U?"visible":"hidden"),q=function(){let e=(0,o.useContext)(T);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:G,unregister:K}=q;(0,o.useEffect)(()=>G(Y),[G,Y]),(0,o.useEffect)(()=>{if(B===l.l4.Hidden&&Y.current){if(U&&"visible"!==W){Z("visible");return}return(0,u.E)(W,{hidden:()=>K(Y),visible:()=>G(Y)})}},[W,Y,G,K,U,B]);let J=(0,c.E)({base:b(V.className),enter:b(A),enterFrom:b(R),enterTo:b(x),entered:b(D),leave:b(H),leaveFrom:b(j),leaveTo:b(I)}),X=(y={beforeEnter:P,afterEnter:M,beforeLeave:N,afterLeave:k},C=(0,o.useRef)(F(y)),(0,o.useEffect)(()=>{C.current=F(y)},[y]),C),Q=(0,d.H)();(0,o.useEffect)(()=>{if(Q&&"visible"===W&&null===Y.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[Y,W,Q]);let ee=$&&U&&_,et=Q&&(!_||$)?U?"enter":"leave":"idle",en=function(e=0){let[t,n]=(0,o.useState)(e),r=(0,a.t)(),l=(0,o.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),i=(0,o.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:l,hasFlag:i,removeFlag:(0,o.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,o.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),er=(0,g.z)(e=>(0,u.E)(e,{enter:()=>{en.addFlag(i.ZM.Opening),X.current.beforeEnter()},leave:()=>{en.addFlag(i.ZM.Closing),X.current.beforeLeave()},idle:()=>{}})),eo=(0,g.z)(e=>(0,u.E)(e,{enter:()=>{en.removeFlag(i.ZM.Opening),X.current.afterEnter()},leave:()=>{en.removeFlag(i.ZM.Closing),X.current.afterLeave()},idle:()=>{}})),el=L(()=>{Z("hidden"),K(Y)},q);!function({immediate:e,container:t,direction:n,classes:r,onStart:o,onStop:l}){let i=(0,a.t)(),d=(0,h.G)(),f=(0,c.E)(n);(0,s.e)(()=>{e&&(f.current="enter")},[e]),(0,s.e)(()=>{let e=(0,p.k)();d.add(e.dispose);let n=t.current;if(n&&"idle"!==f.current&&i.current){var a,s,c;let t,i,d,h,g,E,b;return e.dispose(),o.current(f.current),e.add((a=r.current,s="enter"===f.current,c=()=>{e.dispose(),l.current(f.current)},i=s?"enter":"leave",d=(0,p.k)(),h=void 0!==c?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,c(...e)}):()=>{},"enter"===i&&(n.removeAttribute("hidden"),n.style.display=""),g=(0,u.E)(i,{enter:()=>a.enter,leave:()=>a.leave}),E=(0,u.E)(i,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),b=(0,u.E)(i,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom}),v(n,...a.base,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),m(n,...a.base,...g,...b),d.nextFrame(()=>{v(n,...a.base,...g,...b),m(n,...a.base,...g,...E),function(e,t){let n=(0,p.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[l,i]=[r,o].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),u=l+i;if(0!==u){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},u),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(n,()=>(v(n,...a.base,...g),m(n,...a.base,...a.entered),h()))}),d.dispose)),e.dispose}},[n])}({immediate:ee,container:Y,classes:J,direction:et,onStart:(0,c.E)(e=>{el.onStart(Y,e,er)}),onStop:(0,c.E)(e=>{el.onStop(Y,e,eo),"leave"!==e||S(el)||(Z("hidden"),K(Y))})});let ei=V;return ee?ei={...ei,className:(0,E.A)(V.className,...J.current.enter,...J.current.enterFrom)}:(ei.className=(0,E.A)(V.className,null==(r=Y.current)?void 0:r.className),""===ei.className&&delete ei.className),o.createElement(T.Provider,{value:el},o.createElement(i.up,{value:(0,u.E)(W,{visible:i.ZM.Open,hidden:i.ZM.Closed})|en.flags},(0,l.sY)({ourProps:{ref:z},theirProps:ei,defaultTag:"div",features:O,visible:"visible"===W,name:"Transition.Child"})))}),k=(0,l.yV)(function(e,t){let n=null!==(0,o.useContext)(w),r=null!==(0,i.oJ)();return o.createElement(o.Fragment,null,!n&&r?o.createElement(M,{ref:t,...e}):o.createElement(N,{ref:t,...e}))}),A=Object.assign(M,{Child:k,Root:M})},4192:function(e,t,n){"use strict";n.d(t,{G:function(){return l}});var r=n(7294),o=n(9362);function l(){let[e]=(0,r.useState)(o.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},3781:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(7294),o=n(3855);let l=function(e){let t=(0,o.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},4879:function(e,t,n){"use strict";n.d(t,{t:function(){return l}});var r=n(7294),o=n(6723);function l(){let e=(0,r.useRef)(!1);return(0,o.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},6723:function(e,t,n){"use strict";n.d(t,{e:function(){return l}});var r=n(7294),o=n(7896);let l=(e,t)=>{o.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},3855:function(e,t,n){"use strict";n.d(t,{E:function(){return l}});var r=n(7294),o=n(6723);function l(e){let t=(0,r.useRef)(e);return(0,o.e)(()=>{t.current=e},[e]),t}},2180:function(e,t,n){"use strict";n.d(t,{H:function(){return i}});var r,o=n(7294),l=n(7896);function i(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(o,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[i,u]=o.useState(l.O.isHandoffComplete);return i&&!1===l.O.isHandoffComplete&&u(!1),o.useEffect(()=>{!0!==i&&u(!0)},[i]),o.useEffect(()=>l.O.handoff(),[]),!t&&i}},3784:function(e,t,n){"use strict";n.d(t,{T:function(){return u},h:function(){return i}});var r=n(7294),o=n(3781);let l=Symbol();function i(e,t=!0){return Object.assign(e,{[l]:t})}function u(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,o.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[l]))?void 0:n}},6567:function(e,t,n){"use strict";n.d(t,{ZM:function(){return i},oJ:function(){return u},up:function(){return a}});var r,o=n(7294);let l=(0,o.createContext)(null);l.displayName="OpenClosedContext";var i=((r=i||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function u(){return(0,o.useContext)(l)}function a({value:e,children:t}){return o.createElement(l.Provider,{value:e},t)}},4067:function(e,t,n){"use strict";function r(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}n.d(t,{A:function(){return r}})},9362:function(e,t,n){"use strict";n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,o)=>(e.addEventListener(t,r,o),n.add(()=>e.removeEventListener(t,r,o))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(1021)},7896:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=Object.defineProperty,o=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,l=(e,t,n)=>(o(e,"symbol"!=typeof t?t+"":t,n),n);class i{constructor(){l(this,"current",this.detect()),l(this,"handoffState","pending"),l(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let u=new i},2984:function(e,t,n){"use strict";function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,r),o}n.d(t,{E:function(){return r}})},1021:function(e,t,n){"use strict";function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}n.d(t,{Y:function(){return r}})},2351:function(e,t,n){"use strict";n.d(t,{AN:function(){return a},l4:function(){return s},sY:function(){return c},yV:function(){return p}});var r,o,l=n(7294),i=n(4067),u=n(2984),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((o=s||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:i}){let a=f(t,e);if(l)return d(a,n,r,i);let s=null!=o?o:0;if(2&s){let{static:e=!1,...t}=a;if(e)return d(t,n,r,i)}if(1&s){let{unmount:e=!0,...t}=a;return(0,u.E)(e?0:1,{0:()=>null,1:()=>d({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return d(a,n,r,i)}function d(e,t={},n,r){let{as:o=n,children:u,refName:a="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},d="function"==typeof u?u(t):u;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let p={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r);e&&(p["data-headlessui-state"]=n.join(" "))}if(o===l.Fragment&&Object.keys(m(s)).length>0){if(!(0,l.isValidElement)(d)||Array.isArray(d)&&d.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=d.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,i.A)(null==e?void 0:e.className(...t),s.className):(0,i.A)(null==e?void 0:e.className,s.className);return(0,l.cloneElement)(d,Object.assign({},f(d.props,m(v(s,["ref"]))),p,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(d.ref,c.ref),t?{className:t}:{}))}return(0,l.createElement)(o,Object.assign({},v(s,["ref"]),o!==l.Fragment&&c,o!==l.Fragment&&p),d)}function f(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let o of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...r)}}});return t}function p(e){var t;return Object.assign((0,l.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function m(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},7473:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"}))});t.Z=o}}]);