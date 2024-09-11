"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[645],{3138:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(4848),i=t(8453);const o={title:"Understanding Access Control and Integrating with other Microservices"},c=void 0,a={id:"Understanding-Access-Control-and-Integrating-with-Other-Microservices",title:"Understanding Access Control and Integrating with other Microservices",description:"Introduction to scope based access control",source:"@site/docs/Understanding-Access-Control-and-Integrating-with-Other-Microservices.md",sourceDirName:".",slug:"/Understanding-Access-Control-and-Integrating-with-Other-Microservices",permalink:"/liquid/Understanding-Access-Control-and-Integrating-with-Other-Microservices",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Understanding Access Control and Integrating with other Microservices"},sidebar:"tutorialSidebar",previous:{title:"Making Liquid Production Ready",permalink:"/liquid/Making-Liquid-Production-Ready"},next:{title:"Debugging Common Errors",permalink:"/liquid/Debugging-Common-Errors"}},r={},d=[{value:"Introduction to scope based access control",id:"introduction-to-scope-based-access-control",level:2},{value:"Extending the Scope list",id:"extending-the-scope-list",level:2},{value:"Connecting to liquid from other microservices",id:"connecting-to-liquid-from-other-microservices",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction-to-scope-based-access-control",children:"Introduction to scope based access control"}),"\n",(0,s.jsxs)(n.p,{children:["Liquid uses a list of permission names (also known as scopes) to determine if a user is authorized to access a specific API / resource. There is a set of default permissions assigned to users at the time of account creation. By default, the scope assigned is ",(0,s.jsx)(n.code,{children:"delegated:all"}),", but it can be changed by setting the option ",(0,s.jsx)(n.code,{children:"user.account-creation.default-scope"})," to a comma separated list of scopes you would like to be assigned for a user at the time of account creation. This does not affect any of the existing accounts. ",(0,s.jsx)(n.code,{children:"delegated:all"})," means the user has access to all user level APIs like follow, unfollow, block, unblock and profile edit, but no access to admin level APIs."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/shrihari-prakash/liquid/blob/main/src/service/scope-manager/scopes.json",children:"See list of all scopes available in Liquid"})}),"\n",(0,s.jsxs)(n.p,{children:["You can assign additional scopes to users than the ones assigned at the time of account creation by using the ",(0,s.jsx)(n.code,{children:"/user/admin-api/access"})," endpoint. You either need to be a super_admin or you need to have access to the scope ",(0,s.jsx)(n.code,{children:"admin:profile:access:write"})," to use this API. Here's a sample request to the endpoint which assigns a user access to some admin APIs:"]}),"\n",(0,s.jsx)(n.p,{children:"Request:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"POST https://liquid-host/user/admin-api/access\n"})}),"\n",(0,s.jsx)(n.p,{children:"Body:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "targets": ["list", "of", "user", "ids"],\n  "targetType": "user",\n  "scope": ["admin:profile:all", "admin:profile:ban:write", "admin:profile:credits:write"],\n  "operation": "set"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The above request provides an user permissions to edit other user's profile info, ban other users in the system and create OAuth clients that can access client APIs. ",(0,s.jsx)(n.code,{children:"targetType"})," can be either ",(0,s.jsx)(n.code,{children:"user"})," or ",(0,s.jsx)(n.code,{children:"client"})," which means it is also possible to assign scopes to OAuth clients. Use operations ",(0,s.jsx)(n.code,{children:"del"})," or ",(0,s.jsx)(n.code,{children:"add"})," for more granular control."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["As a general best practice, it is preferrable to assign permissions to users starting with the least privilege and then move up to more generic permissions if they need more. Assigning scopes like ",(0,s.jsx)(n.code,{children:"*"})," and ",(0,s.jsx)(n.code,{children:"admin:all"})," can give users more permissions than they actually require and can be catastrophic. Don't shoot yourself in the foot."]})}),"\n",(0,s.jsxs)(n.p,{children:["You can remove permissions by sending ",(0,s.jsx)(n.code,{children:"status"})," attribute as false."]}),"\n",(0,s.jsx)(n.h2,{id:"extending-the-scope-list",children:"Extending the Scope list"}),"\n",(0,s.jsxs)(n.p,{children:["If you have the need to add some additional scopes in the service, which you probably will (for instance, you might want to introduce a scope called ",(0,s.jsx)(n.code,{children:"delegated:chat:read"})," which controls if users can read a chat in your chat microservice), you can do so by passing to Liquid a JSON file that contains the metadata about the new scopes."]}),"\n",(0,s.jsxs)(n.p,{children:["Here's a sample ",(0,s.jsx)(n.code,{children:"scope-extensions.json"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "name": "sub-scope",\n    "description": "A scope that directly gets attached under *",\n    "parent": "*"\n  },\n  {\n    "name": "delegated:chat:all",\n    "description": "View and manage your chats.",\n    "parent": "delegated:all"\n  },\n  {\n    "name": "delegated:chat:read",\n    "description": "View your chat history.",\n    "parent": "delegated:chat:all"\n  },\n  {\n    "name": "delegated:chat:write",\n    "description": "Manage your chat history.",\n    "parent": "delegated:chat:all"\n  }\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"parent"})," field specifies the hierarchy of permissions. In this case, if a user is assigned ",(0,s.jsx)(n.code,{children:"delegated:chat:all"}),", they implicitly have the permissions ",(0,s.jsx)(n.code,{children:"delegated:chat:read"})," and ",(0,s.jsx)(n.code,{children:"delegated:chat:write"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Once this file is ready, you can extend the Liquid scopes by providing the path to this file in the option ",(0,s.jsx)(n.code,{children:"system.scope-extension-file-path"}),". Note that scope tree is printed by Liquid when you run the service. Check the logs to see if the extended hierarchy is as indented."]}),"\n",(0,s.jsx)(n.h2,{id:"connecting-to-liquid-from-other-microservices",children:"Connecting to liquid from other microservices"}),"\n",(0,s.jsxs)(n.p,{children:["If the microservices that need to use Liquid as an auth service are running on Node.js, you can authenticate your routes by using the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/liquid-node-authenticator",children:"Liquid Node Authenticator"})," package."]}),"\n",(0,s.jsxs)(n.p,{children:["When you authenticate a user by using ",(0,s.jsx)(n.code,{children:"const tokenDetails = liquidAuthenticator.authenticate(token);"}),", Liquid returns some important information about the token and the user associated with it."]}),"\n",(0,s.jsxs)(n.p,{children:["You can get the user associated with the token by inspecting the ",(0,s.jsx)(n.code,{children:"tokenDetails.user"})," field."]}),"\n",(0,s.jsxs)(n.p,{children:["Under the hood, Liquid Node Authenticator (LNA) utilizes the API endpoint ",(0,s.jsx)(n.code,{children:"/oauth/introspect"})," by sending the token in ",(0,s.jsx)(n.code,{children:"token"})," field of the request body to get this information. If your microservice is not running on node, you can use this API to authenticate users from your microservice."]}),"\n",(0,s.jsxs)(n.p,{children:["Each token comes with a ",(0,s.jsx)(n.code,{children:"scope"})," field that contains all authorized scopes for the token. You can choose to disallow an API call if the scope field doesn't include the scope that is required for an API call. This is extremely simple to do in Liquid Node Authenticator. Simply call the ",(0,s.jsx)(n.code,{children:"checkTokenScope"})," method with the token details:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// auth-middleware.js\n\n// Some code...\nconst tokenDetails = await liquidAuthenticator.authenticate(token);\n// Save token details to res.locals or somewhere accessible by the API code\n// More code...\n\n// api.js\n\n// Some code...\n// Get tokenDetails from res.locals\n\nconst allowed = await liquidAuthenticator.checkTokenScope(\n  "your:scope:name",\n  token /* tokenDetails object acqurired in authenticate() function */\n);\n\nif (allowed) {\n  // Scope is allowed, continue with action\n} else {\n  // Scope is NOT allowed, send insufficient priviledge error\n}\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If for some reason, you want to do the scope checking by yourself ",(0,s.jsx)(n.strong,{children:"(NOT RECOMMENDED)"}),", here's a sample implementation:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const response = await fetch(`https://liquid-host/user/scopes`);\nconst scopes = (await response.json()).data.scopes;\n\nfunction isScopeAllowed(scope, allowedScopes) {\n  const scopeObject = scopes[scope];\n  if (!scopeObject) {\n    return false;\n  }\n  if (allowedScopes.includes(scopeObject.name) || allowedScopes.includes(scopeObject.parent)) {\n    return true;\n  } else if (scopeObject.parent) {\n    return isScopeAllowed(scopeObject.parent, allowedScopes);\n  } else {\n    return false;\n  }\n}\n\nconsole.log(\n  isScopeAllowed("delegated:chat:read", ["delegated:chat:all"])\n); // true\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var s=t(6540);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);