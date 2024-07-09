"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[419,385],{7385:function(e,s,t){t.r(s);var a=t(5893),r=t(4080),n=t(1479),i=t(7473),o=t(1664),l=t.n(o),c=t(1163),u=t(7294);let d=(0,u.memo)(()=>{let e=["home","2023","through_time","user_beats","presentation","about"];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{navSections:e}),(0,a.jsx)(m,{navSections:e})]})}),m=(0,u.memo)(e=>{let{navSections:s}=e;return(0,a.jsx)("header",{className:"fixed top-0 z-50 hidden w-full bg-neutral-400/50 p-4 backdrop-blur sm:block",children:(0,a.jsx)("nav",{className:"flex justify-center gap-x-8",children:s.map(e=>(0,a.jsx)(h,{className:"-m-1.5 p-1.5 rounded-md font-bold first-letter:uppercase hover:transition-colors hover:duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 sm:hover:text-lime-500 text-neutral-100",section:e},e))})})}),f=(0,u.memo)(e=>{let{navSections:s}=e,[t,o]=(0,u.useState)(!1),l=(0,u.useCallback)(()=>{o(!t)},[t]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("button",{"aria-label":"Menu Button",className:"fixed right-2 top-2 z-40 rounded-md bg-emerald-800 p-2 ring-offset-gray-800/60 hover:bg-lime-500 focus:outline-none focus:ring-0 focus-visible:ring-2 focus-visible:ring-emerald-800 focus-visible:ring-offset-2 sm:hidden",onClick:l,children:[(0,a.jsx)(i.Z,{className:"h-8 w-8 text-white"}),(0,a.jsx)("span",{className:"sr-only",children:"Open sidebar"})]}),(0,a.jsx)(r.u.Root,{as:u.Fragment,show:t,children:(0,a.jsxs)(n.V,{as:"div",className:"fixed inset-0 z-40 flex sm:hidden",onClose:l,children:[(0,a.jsx)(r.u.Child,{as:u.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,a.jsx)(n.V.Overlay,{className:"fixed inset-0 bg-stone-900 bg-opacity-75"})}),(0,a.jsx)(r.u.Child,{as:u.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,a.jsx)("div",{className:"relative w-4/5 bg-stone-800",children:(0,a.jsx)("nav",{className:"mt-5 flex flex-col gap-y-2 px-2",children:s.map(e=>(0,a.jsx)(h,{className:"p-2 rounded-md first-letter:uppercase transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-800",section:e,onClick:l},e))})})})]})})]})}),h=(0,u.memo)(e=>{let{section:s,onClick:t}=e,r=(0,c.useRouter)(),n="/".concat("home"===s?"":s).toLowerCase(),i=r.asPath.toLowerCase()===n,o=s.charAt(0).toUpperCase()+s.slice(1);return"2023"===o?o="Year in Music 2023":"Through_time"===o?o="Through Time":"User_beats"===o&&(o="User Beats"),(0,a.jsx)(l(),{style:i?{color:"#047857",fontWeight:"600"}:{color:"#ffffff"},href:n,onClick:t,children:o},s)});d.displayName="Header",s.default=d}}]);