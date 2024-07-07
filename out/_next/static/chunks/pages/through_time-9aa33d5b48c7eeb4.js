(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[126,385],{4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)n.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(r=(function(){return i}).apply(t,[]))&&(e.exports=r)}()},7201:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/through_time",function(){return r(2102)}])},7065:function(e,t,r){"use strict";var n=r(5893),i=r(4184),a=r.n(i),s=r(7294);let l=(0,s.memo)(e=>{let{children:t,sectionId:r,noPadding:i=!1,className:s,style:l}=e;return(0,n.jsx)("section",{className:a()(s,{"px-4 py-16 md:py-24 lg:px-8":!i}),id:r,style:l,children:(0,n.jsx)("div",{className:a()({"mx-auto max-w-screen-lg":!i}),children:t})})});l.displayName="Section",t.Z=l},7385:function(e,t,r){"use strict";r.r(t);var n=r(5893),i=r(4080),a=r(1479),s=r(7473),l=r(1664),o=r.n(l),c=r(1163),u=r(7294);let d=(0,u.memo)(()=>{let e=["home","2023","through_time","user_beats","presentation","about"];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{navSections:e}),(0,n.jsx)(m,{navSections:e})]})}),m=(0,u.memo)(e=>{let{navSections:t}=e;return(0,n.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-400/50 p-4 backdrop-blur sm:block",children:(0,n.jsx)("nav",{className:"flex justify-center gap-x-8",children:t.map(e=>(0,n.jsx)(f,{className:"-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 sm:hover:text-lime-500 text-neutral-100",section:e},e))})})}),h=(0,u.memo)(e=>{let{navSections:t}=e,[r,l]=(0,u.useState)(!1),o=(0,u.useCallback)(()=>{l(!r)},[r]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("button",{"aria-label":"Menu Button",className:"fixed right-2 top-2 z-40 rounded-md bg-emerald-800 p-2 ring-offset-gray-800/60 hover:bg-lime-500 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2 sm:hidden",onClick:o,children:[(0,n.jsx)(s.Z,{className:"h-8 w-8 text-white"}),(0,n.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,n.jsx)(i.u.Root,{as:u.Fragment,show:r,children:(0,n.jsxs)(a.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:o,children:[(0,n.jsx)(i.u.Child,{as:u.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)(a.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,n.jsx)(i.u.Child,{as:u.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,n.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,n.jsx)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:t.map(e=>(0,n.jsx)(f,{className:"p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800",section:e,onClick:o},e))})})})]})})]})}),f=(0,u.memo)(e=>{let{section:t,onClick:r}=e,i=(0,c.useRouter)(),a="/".concat("home"===t?"":t).toLowerCase(),s=i.asPath.toLowerCase()===a,l=t.charAt(0).toUpperCase()+t.slice(1);return"2023"===l?l="Year in Music 2023":"Through_time"===l?l="Through Time":"User_beats"===l&&(l="User Beats"),(0,n.jsx)(o(),{style:s?{color:"#047857",fontWeight:"600"}:{color:"#ffffff"},href:a,onClick:r,children:l},t)});d.displayName="Header",t.default=d},5049:function(e,t,r){"use strict";var n=r(5893),i=r(7294);let a=e=>{let{vizUrl:t,height:r="600px",width:a="800px"}=e,s=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(s.current)try{new window.tableau.Viz(s.current,t,{hideTabs:!0,onFirstInteractive:function(){console.log("Tableau visualization is interactive")}}),console.log("Tableau Viz initialized")}catch(e){console.error("Error initializing Tableau Viz:",e)}},[t]),(0,n.jsx)("div",{ref:s,style:{height:r,width:a}})};a.displayName="TableauDashboard",t.Z=a},2102:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),i=r(7294),a=r(2252),s=r(6794),l=r(7385),o=r(7666),c=r(7065),u=r(5049);let d=(0,i.memo)(()=>(0,n.jsxs)(c.Z,{noPadding:!0,sectionId:s._h.Dashboard,className:"p-12",style:{background:"rgba(109,139,133,255)"},children:[(0,n.jsx)("div",{className:"flex items-center justify-center mt-8",children:(0,n.jsx)("div",{className:"p-2",children:(0,n.jsx)(u.Z,{vizUrl:"https://public.tableau.com/views/TopArtistsByStreams/TopArtistsbyStreams?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",height:"100%",width:"100%"})})}),(0,n.jsx)("div",{className:"flex items-center justify-center mt-8",children:(0,n.jsx)("div",{className:"p-2",children:(0,n.jsx)(u.Z,{vizUrl:"https://public.tableau.com/views/ArtistPopularity/Dashboard1?:language=en-GB&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",height:"100%",width:"100%"})})}),(0,n.jsx)("div",{className:"flex items-center justify-center mt-8",children:(0,n.jsx)("div",{className:"p-2",children:(0,n.jsx)(u.Z,{vizUrl:"https://public.tableau.com/views/SongLength_17203122981520/Dashboard2?:language=en-GB&:device=desktop&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",height:"100%",width:"100%"})})})]}));d.displayName="AllTimeDashboards";let m=(0,i.memo)(()=>{let{title:e,description:t,favicon:r}=s.homePageMeta;return(0,n.jsxs)(a.Z,{description:t,title:e,favicon:r,children:[(0,n.jsx)(l.default,{}),(0,n.jsx)(d,{}),(0,n.jsx)(o.Z,{})]})});var h=m},9008:function(e,t,r){e.exports=r(9201)},8662:function(e,t,r){"use strict";var n=r(7294);let i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"}))});t.Z=i},2364:function(e,t,r){"use strict";var n=r(7294);let i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"}))});t.Z=i},9871:function(e,t,r){"use strict";var n=r(7294);let i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}))});t.Z=i},6301:function(e,t,r){"use strict";var n=r(7294);let i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"}))});t.Z=i},4912:function(e,t,r){"use strict";var n=r(7294);let i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"}))});t.Z=i},5083:function(e,t,r){"use strict";var n=r(7294);let i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"}))});t.Z=i},8957:function(e,t,r){"use strict";var n=r(7294);let i=n.forwardRef(function({title:e,titleId:t,...r},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:i,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z",clipRule:"evenodd"}))});t.Z=i}},function(e){e.O(0,[57,662,774,888,179],function(){return e(e.s=7201)}),_N_E=e.O()}]);