(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521,385],{4184:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var l=n.apply(null,r);l&&e.push(l)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)a.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0!==(r=(function(){return n}).apply(t,[]))&&(e.exports=r)}()},9212:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return r(9562)}])},7385:function(e,t,r){"use strict";r.r(t);var a=r(5893),n=r(4080),s=r(1479),l=r(7473),o=r(1664),i=r.n(o),c=r(1163),d=r(7294);let m=(0,d.memo)(()=>{let e=["home","dashboard","presentation","about"];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{navSections:e}),(0,a.jsx)(u,{navSections:e})]})}),u=(0,d.memo)(e=>{let{navSections:t}=e;return(0,a.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-400/50 p-4 backdrop-blur sm:block",children:(0,a.jsx)("nav",{className:"flex justify-center gap-x-8",children:t.map(e=>(0,a.jsx)(x,{className:"-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 sm:hover:text-lime-500 text-neutral-100",section:e},e))})})}),h=(0,d.memo)(e=>{let{navSections:t}=e,[r,o]=(0,d.useState)(!1),i=(0,d.useCallback)(()=>{o(!r)},[r]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{"aria-label":"Menu Button",className:"fixed right-2 top-2 z-40 rounded-md bg-emerald-800 p-2 ring-offset-gray-800/60 hover:bg-lime-500 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2 sm:hidden",onClick:i,children:[(0,a.jsx)(l.Z,{className:"h-8 w-8 text-white"}),(0,a.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,a.jsx)(n.u.Root,{as:d.Fragment,show:r,children:(0,a.jsxs)(s.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:i,children:[(0,a.jsx)(n.u.Child,{as:d.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)(s.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,a.jsx)(n.u.Child,{as:d.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,a.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,a.jsx)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:t.map(e=>(0,a.jsx)(x,{className:"p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800",section:e,onClick:i},e))})})})]})})]})}),x=(0,d.memo)(e=>{let{section:t,className:r,onClick:n}=e,s=(0,c.useRouter)(),l="/".concat("home"===t?"":t),o=s.pathname===l;return(0,a.jsx)(i(),{className:"".concat(r," ").concat(o?"text-emerald-700":"text-neutral-100"),href:l,onClick:n,children:t},t)});m.displayName="Header",t.default=m},9562:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(5893),n=r(7294),s=r(2252),l=r(6794),o=(0,n.memo)(()=>(0,a.jsxs)("div",{className:"container-xxl px-4 py-5 bg-green-50 rounded-lg",children:[(0,a.jsx)("h2",{className:"mb-8 text-3xl text-center font-bold text-teal-900",children:"Credits, Tools & Sources"}),(0,a.jsx)("table",{className:"w-full table-auto",children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{className:"border-t",children:[(0,a.jsx)("th",{className:"align-top px-4 py-2 text-left",children:"Visualization Tools"}),(0,a.jsx)("td",{className:"px-4 py-2",children:(0,a.jsx)("a",{href:"https://www.tableau.com",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"Tableau"})})]}),(0,a.jsxs)("tr",{className:"border-t",children:[(0,a.jsx)("th",{className:"align-top px-4 py-2 text-left",children:"Web Framework & Libraries"}),(0,a.jsxs)("td",{className:"px-4 py-2",children:[(0,a.jsx)("a",{href:"https://nextjs.org/",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"Next.js"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://react.dev/",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"React"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"Tailwind CSS"})]})]}),(0,a.jsxs)("tr",{className:"border-t",children:[(0,a.jsx)("th",{className:"align-top px-4 py-2 text-left",children:"Site Hosting"}),(0,a.jsx)("td",{className:"px-4 py-2",children:(0,a.jsx)("a",{href:"https://vercel.com/",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"Vercel"})})]}),(0,a.jsxs)("tr",{className:"border-t",children:[(0,a.jsx)("th",{className:"align-top px-4 py-2 text-left",children:"Kaggle Datasets"}),(0,a.jsxs)("td",{className:"px-4 py-2",children:[(0,a.jsx)("a",{href:"https://www.kaggle.com/datasets/nelgiriyewithana/top-spotify-songs-2023",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"Most Streamed Spotify Songs 2023"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://www.kaggle.com/datasets/meeraajayakumar/spotify-user-behavior-dataset",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"Spotify User Behavior Dataset"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://www.kaggle.com/datasets/meeratif/spotify-most-streamed-artists-of-all-time",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"Spotify Most Streamed Artists"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://www.kaggle.com/datasets/asaniczka/top-spotify-songs-in-73-countries-daily-updated",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"Top Spotify Songs in 73 Countries"})," ",(0,a.jsx)("br",{}),(0,a.jsx)("a",{href:"https://www.kaggle.com/datasets/josephinelsy/spotify-top-hit-playlist-2010-2022",target:"_blank",rel:"noopener noreferrer",className:"text-teal-600 hover:underline",children:"Spotify Top Hit Playlist (2010-2023)"})]})]})]})})]})),i=r(7065);let c=(0,n.memo)(()=>(0,a.jsxs)(i.Z,{sectionId:l._h.About,style:{background:"rgba(109,139,133,255)"},children:[(0,a.jsx)("div",{className:"my-16 bg-green-50 rounded-lg",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 text-center",children:[(0,a.jsx)("div",{className:"mb-8 py-5",children:(0,a.jsx)("h2",{className:"text-3xl font-bold text-teal-900",children:"Project Team"})}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center",children:[(0,a.jsxs)("div",{className:"w-full md:w-1/3 p-4 flex flex-col items-center",children:[(0,a.jsx)("h4",{className:"text-xl font-semibold",children:"Anastasia Antonelou"}),(0,a.jsx)("div",{className:"mt-2 mb-4 w-1/2 border-t-2 border-gray-300"})]}),(0,a.jsxs)("div",{className:"w-full md:w-1/3 p-4 flex flex-col items-center",children:[(0,a.jsx)("h4",{className:"text-xl font-semibold",children:"Giannis Asimakopoulos"}),(0,a.jsx)("div",{className:"mt-2 mb-4 w-1/2 border-t-2 border-gray-300"})]}),(0,a.jsxs)("div",{className:"w-full md:w-1/3 p-4 flex flex-col items-center",children:[(0,a.jsx)("h4",{className:"text-xl font-semibold",children:"Eva Mikraki-Petroula"}),(0,a.jsx)("div",{className:"mt-2 mb-4 w-1/2 border-t-2 border-gray-300"})]})]})]})}),(0,a.jsx)(o,{})]}));c.displayName="About";var d=r(7385),m=r(7666);let u=(0,n.memo)(()=>{let{title:e,description:t,favicon:r}=l.homePageMeta;return(0,a.jsxs)(s.Z,{description:t,title:e,favicon:r,children:[(0,a.jsx)(d.default,{}),(0,a.jsx)(c,{}),(0,a.jsx)(m.Z,{})]})});var h=u},9008:function(e,t,r){e.exports=r(9201)},8662:function(e,t,r){"use strict";var a=r(7294);let n=a.forwardRef(function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"}))});t.Z=n},2364:function(e,t,r){"use strict";var a=r(7294);let n=a.forwardRef(function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"}))});t.Z=n},9871:function(e,t,r){"use strict";var a=r(7294);let n=a.forwardRef(function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"}))});t.Z=n},6301:function(e,t,r){"use strict";var a=r(7294);let n=a.forwardRef(function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"}))});t.Z=n},4912:function(e,t,r){"use strict";var a=r(7294);let n=a.forwardRef(function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"}))});t.Z=n},5083:function(e,t,r){"use strict";var a=r(7294);let n=a.forwardRef(function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"}))});t.Z=n},8957:function(e,t,r){"use strict";var a=r(7294);let n=a.forwardRef(function({title:e,titleId:t,...r},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":t},r),e?a.createElement("title",{id:t},e):null,a.createElement("path",{fillRule:"evenodd",d:"M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z",clipRule:"evenodd"}))});t.Z=n}},function(e){e.O(0,[57,409,774,888,179],function(){return e(e.s=9212)}),_N_E=e.O()}]);