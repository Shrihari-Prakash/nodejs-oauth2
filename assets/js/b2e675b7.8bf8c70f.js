"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[387],{310:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=t(4848),n=t(8453);const s={title:"Profile Pictures"},o="Profile Pictures",c={id:"features/Profile-Pictures",title:"Profile Pictures",description:"The Profile pictures feature usually requires an Amazon S3 or any S3 compatible storage system like Cloudflare R2.",source:"@site/docs/features/Profile-Pictures.md",sourceDirName:"features",slug:"/features/Profile-Pictures",permalink:"/features/Profile-Pictures",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Profile Pictures"},sidebar:"tutorialSidebar",previous:{title:"Invite Only Mode",permalink:"/features/Invite-Only-Mode"},next:{title:"Google SSO",permalink:"/features/Google-SSO"}},l={},a=[{value:"Enabling profile picture usage",id:"enabling-profile-picture-usage",level:2},{value:"Size restrictions",id:"size-restrictions",level:2}];function u(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"profile-pictures",children:"Profile Pictures"})}),"\n",(0,r.jsx)(i.p,{children:"The Profile pictures feature usually requires an Amazon S3 or any S3 compatible storage system like Cloudflare R2."}),"\n",(0,r.jsxs)(i.p,{children:["See the profile pictures API documentation ",(0,r.jsx)(i.a,{href:"/api-documentation/API-Documentation-Delegated#set-profile-picture",children:"here"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"enabling-profile-picture-usage",children:"Enabling profile picture usage"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["Enable the option ",(0,r.jsx)(i.code,{children:"privilege.can-use-profile-picture-apis"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Enable the option ",(0,r.jsx)(i.code,{children:"privilege.can-use-cloud-storage"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Set the options ",(0,r.jsx)(i.code,{children:"s3.endpoint"}),", ",(0,r.jsx)(i.code,{children:"s3.access-key-id"}),", ",(0,r.jsx)(i.code,{children:"s3.access-key-secret"})," and ",(0,r.jsx)(i.code,{children:"s3.bucket-name"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"size-restrictions",children:"Size restrictions"}),"\n",(0,r.jsxs)(i.p,{children:["By default, the max size of the profile picture is set to ",(0,r.jsx)(i.code,{children:"500KB"}),". This can be changed by changing the option ",(0,r.jsx)(i.code,{children:"user.profile-picture.max-file-size"}),". The size of the file should be provided in bytes."]})]})}function d(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>c});var r=t(6540);const n={},s=r.createContext(n);function o(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);