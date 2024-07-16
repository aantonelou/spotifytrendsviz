(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[800],{4184:function(e,t){var s;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var n=typeof s;if("string"===n||"number"===n)e.push(s);else if(Array.isArray(s)){if(s.length){var a=r.apply(null,s);a&&e.push(a)}}else if("object"===n){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){e.push(s.toString());continue}for(var l in s)i.call(s,l)&&s[l]&&e.push(l)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0!==(s=(function(){return r}).apply(t,[]))&&(e.exports=s)}()},7479:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2023",function(){return s(9422)}])},1342:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{noSSR:function(){return a},default:function(){return l}});let i=s(8754),r=(s(7294),i._(s(4304)));function n(e){return{default:(null==e?void 0:e.default)||e}}function a(e,t){return delete t.webpack,delete t.modules,e(t)}function l(e,t){let s=r.default,i={loading:e=>{let{error:t,isLoading:s,pastDelay:i}=e;return null}};e instanceof Promise?i.loader=()=>e:"function"==typeof e?i.loader=e:"object"==typeof e&&(i={...i,...e}),i={...i,...t};let l=i.loader;return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?s({...i,loader:()=>null!=l?l().then(n):Promise.resolve(n(()=>null))}):(delete i.webpack,delete i.modules,a(s,i))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},43:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return n}});let i=s(8754),r=i._(s(7294)),n=r.default.createContext(null)},4304:function(e,t,s){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let i=s(8754),r=i._(s(7294)),n=s(43),a=[],l=[],o=!1;function u(e){let t=e(),s={loading:!0,loaded:null,error:null};return s.promise=t.then(e=>(s.loading=!1,s.loaded=e,e)).catch(e=>{throw s.loading=!1,s.error=e,e}),s}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let s=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),i=null;function a(){if(!i){let t=new d(e,s);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()}if(!o){let e=s.webpack?s.webpack():s.modules;e&&l.push(t=>{for(let s of e)if(t.includes(s))return a()})}function u(e,t){!function(){a();let e=r.default.useContext(n.LoadableContext);e&&Array.isArray(s.modules)&&s.modules.forEach(t=>{e(t)})}();let l=r.default.useSyncExternalStore(i.subscribe,i.getCurrentValue,i.getCurrentValue);return r.default.useImperativeHandle(t,()=>({retry:i.retry}),[]),r.default.useMemo(()=>{var t;return l.loading||l.error?r.default.createElement(s.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:i.retry}):l.loaded?r.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return u.preload=()=>a(),u.displayName="LoadableComponent",r.default.forwardRef(u)}(u,e)}function h(e,t){let s=[];for(;e.length;){let i=e.pop();s.push(i(t))}return Promise.all(s).then(()=>{if(e.length)return h(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{h(a).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let s=()=>(o=!0,t());h(l,e).then(s,s)})),window.__NEXT_PRELOADREADY=c.preloadReady;let f=c},2252:function(e,t,s){"use strict";var i=s(5893),r=s(9008),n=s.n(r),a=s(7294);let l=(0,a.memo)(e=>{let{children:t,description:s,favicon:r,title:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n(),{children:[(0,i.jsx)("title",{children:a}),(0,i.jsx)("meta",{content:s,name:"description"}),(0,i.jsx)("link",{rel:"icon",href:r,type:"image/x-icon"})]}),(0,i.jsx)("div",{className:"flex flex-col min-h-screen",children:t})]})});l.displayName="Page",t.Z=l},7065:function(e,t,s){"use strict";var i=s(5893),r=s(4184),n=s.n(r),a=s(7294);let l=(0,a.memo)(e=>{let{children:t,sectionId:s,noPadding:r=!1,className:a,style:l}=e;return(0,i.jsx)("section",{className:n()(a,{"px-4 py-16 md:py-24 lg:px-8":!r}),id:s,style:l,children:(0,i.jsx)("div",{className:n()({"mx-auto max-w-screen-lg":!r}),children:t})})});l.displayName="Section",t.Z=l},5049:function(e,t,s){"use strict";var i=s(5893),r=s(7294);let n=e=>{let{vizUrl:t,height:s="600px",width:n="800px"}=e,a=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(a.current)try{new window.tableau.Viz(a.current,t,{hideTabs:!0,onFirstInteractive:function(){console.log("Tableau visualization is interactive")}}),console.log("Tableau Viz initialized")}catch(e){console.error("Error initializing Tableau Viz:",e)}},[t]),(0,i.jsx)("div",{ref:a,style:{height:s,width:n}})};n.displayName="TableauDashboard",t.Z=n},4152:function(e,t,s){"use strict";s.d(t,{_:function(){return n},heroData:function(){return a},homePageMeta:function(){return r}});var i=s(5893);let r={title:"Spotify Visualization",description:"Visualizing Spotify Music Streaming Trends",favicon:"/favicon.ico"},n={Home:"home",Hero:"hero",About:"about",Dashboard:"dashboard",Presentation:"presentation"},a={imageSrc:{src:"/_next/static/media/header-background.dc451915.webp",height:675,width:1200,blurDataURL:"data:image/webp;base64,UklGRi4AAABXRUJQVlA4ICIAAABQAQCdASoIAAUAAkA4JQBOgDfQAMTPibL54lenBskU12AA",blurWidth:8,blurHeight:5},name:"Visualizing Spotify Music Streaming Trends",subtitle:(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("p",{className:"prose-sm text-stone-200 sm:prose-base lg:prose-lg",children:"Insights into global music preferences, seasonal trends and user behavior"})}),description:(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"prose-sm sm:prose-base lg:prose-lg flex flex-col md:flex-row w-full text-white",children:[(0,i.jsx)("div",{className:"md:w-1/2 md:mr-12",children:"At the heart of our project lies the vibrant universe of Spotify, where millions of songs and artists converge to create a symphony of trends, tastes, and tunes. Since its launch in 2008, Spotify has grown into a global platform with over 345 million active users. Imagine discovering the beats that set hearts racing worldwide, the seasonal anthems that capture the essence of our summers and winters, and the unique listening habits that unveil our true musical personalities."}),(0,i.jsxs)("div",{className:"md:w-1/2 md:ml-12",children:["Whether you're a data geek, a music enthusiast, or just someone who loves a good melody, our visualizations will take you on a global tour of sound, showing how music unites us, surprises us, and defines our every mood.",(0,i.jsx)("br",{}),"So, plug in your headphones and join us as we explore the magical world of Spotify through the lens of data!"]})]})})}},9422:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return b}});var i=s(5893),r=s(7294),n=s(2252),a=s(4152),l=s(7065),o=s(5049),u=()=>(0,i.jsxs)("div",{className:"p-4 md:p-8 bg-transparent text-white rounded-md m-4",children:[(0,i.jsxs)("p",{children:['The "',(0,i.jsx)("strong",{children:"Top 20 Tracks of 2023 in Spotify Playlists"}),'" dashboard indicates a preference for both old and new tracks, reflecting a blend of nostalgia and contemporary tastes in playlists.']}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:['The "',(0,i.jsx)("strong",{children:"Top 20 Tracks of 2023 by Streams"}),'" dashboard showcases a fascinating mix of songs from various years. The prevalence of older tracks in the top 20 underscores the power of streaming platforms in maintaining the relevance of music over time.']}),(0,i.jsx)("br",{}),(0,i.jsxs)("p",{children:['These observations highlight the timeless appeal of many older tracks and the role of digital platforms in sustaining their popularity. These songs continue to enjoy significant streaming numbers and appear in numerous playlists, demonstrating their strong connection with audiences. This trend is further analyzed in the "',(0,i.jsx)("strong",{children:"Track Popularity Over Time"}),'" dashboard, which shows the release dates of all the top tracks of 2023.']})]});let d=(0,r.memo)(()=>(0,i.jsxs)(l.Z,{noPadding:!0,sectionId:a._.Dashboard,className:"flex-grow p-4 md:p-12",children:[(0,i.jsxs)("div",{className:"flex flex-col md:flex-row items-center justify-center mt-8 w-full",children:[(0,i.jsx)("div",{className:"w-full md:w-1/2 p-2",children:(0,i.jsx)(o.Z,{vizUrl:"https://public.tableau.com/views/Spotify_Book3/Dashboard3?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",height:"100%",width:"100%"})}),(0,i.jsx)("div",{className:"w-full md:w-1/2 p-2",children:(0,i.jsx)(o.Z,{vizUrl:"https://public.tableau.com/views/Spotify_Book1/Dashboard1?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",height:"100%",width:"100%"})})]}),(0,i.jsx)("div",{className:"flex flex-col items-center justify-center mt-8 w-full",children:(0,i.jsx)("div",{className:"w-full p-2",children:(0,i.jsx)(u,{})})}),(0,i.jsx)("div",{className:"flex flex-col items-center justify-center mb-8 w-full",children:(0,i.jsx)("div",{className:"w-full p-2 md:w-auto md:flex md:justify-center",children:(0,i.jsx)(o.Z,{vizUrl:"https://public.tableau.com/views/Spotify_Book5/Dashboard4?:language=en-GB&publish=yes&:device=desktop&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",height:"100%",width:"100%"})})})]}));d.displayName="Dashboards2023";var c=s(5152),h=s.n(c);let f=h()(()=>s.e(666).then(s.bind(s,7666)),{loadableGenerated:{webpack:()=>[7666]},ssr:!1}),p=h()(()=>Promise.all([s.e(802),s.e(664),s.e(419)]).then(s.bind(s,7385)),{loadableGenerated:{webpack:()=>[7385]},ssr:!1}),m=(0,r.memo)(()=>{let{title:e,description:t,favicon:s}=a.homePageMeta;return(0,i.jsxs)(n.Z,{description:t,title:e,favicon:s,children:[(0,i.jsx)(p,{}),(0,i.jsx)(d,{}),(0,i.jsx)(f,{})]})});var b=m},5152:function(e,t,s){e.exports=s(1342)},9008:function(e,t,s){e.exports=s(9201)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7479)}),_N_E=e.O()}]);