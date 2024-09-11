"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[375],{7276:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var t=i(4848),s=i(8453);const o={title:"Setup"},r=void 0,d={id:"Setup",title:"Setup",description:"Before you start",source:"@site/docs/Setup.md",sourceDirName:".",slug:"/Setup",permalink:"/Setup",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Setup"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/"},next:{title:"Making Liquid Production Ready",permalink:"/Making-Liquid-Production-Ready"}},a={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"Full list of dependencies",id:"full-list-of-dependencies",level:2},{value:"The basics",id:"the-basics",level:2},{value:"Editing Liquid configurations",id:"editing-liquid-configurations",level:2},{value:"Backend",id:"backend",level:3},{value:"Frontend",id:"frontend",level:3},{value:"Installation",id:"installation",level:2},{value:"First time setup",id:"first-time-setup",level:2},{value:"Login",id:"login",level:3},{value:"To make Liquid production ready, continue to the Production Guide",id:"to-make-liquid-production-ready-continue-to-the-production-guide",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,t.jsx)(n.p,{children:"There are a few dependencies for Liquid to run as intented."}),"\n",(0,t.jsxs)(n.p,{children:["First of all, you need ",(0,t.jsx)(n.strong,{children:"MongoDB"})," and ",(0,t.jsx)(n.strong,{children:"Redis"})," instances running. Redis is not absolutely required, but it is highly recommended that you have it. You can disable Redis by disabling the option ",(0,t.jsx)(n.code,{children:"privilege.can-use-cache"}),", but again, it is not recommended."]}),"\n",(0,t.jsxs)(n.p,{children:["Secondly, you need a ",(0,t.jsx)(n.strong,{children:"SendGrid"})," account, because this is how Liquid sends emails to verify user accounts and reset account passwords. If you do not have a SendGrid account right away, you can disable SendGrid usage by disabling the following options: ",(0,t.jsx)(n.code,{children:"user.account-creation.require-email-verification"})," (backend & frontend), ",(0,t.jsx)(n.code,{children:"privilege.can-reset-password"})," (frontend). As you might have noticed, this will bypass email verifications when users are signing up and will also disable the forgot password button. Disabling these can be useful for development purposes."]}),"\n",(0,t.jsx)(n.h2,{id:"full-list-of-dependencies",children:"Full list of dependencies"}),"\n",(0,t.jsxs)(n.p,{children:["Almost everything is ",(0,t.jsx)(n.strong,{children:"optional"})," except MongoDB."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Dependency"}),(0,t.jsx)(n.th,{children:"Optional"}),(0,t.jsx)(n.th,{children:"Used by Default"}),(0,t.jsx)(n.th,{children:"Related Options"}),(0,t.jsx)(n.th,{children:"Disable Recommended?"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MongoDB"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"mongo-db.connection-string"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Redis"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"privilege.can-use-cache, redis.*"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SendGrid"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"user.account-creation.require-email-verification (backend & frontend), privilege.can-reset-password (frontend), sendgrid.*"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"AWS S3 (or) S3 like storage"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"privilege.can-use-profile-picture-apis, s3.*"}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RabbitMQ"}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"privilege.can-use-push-events, privilege.can-use-rabbitmq, rabbitmq.*"}),(0,t.jsx)(n.td,{children:"Yes"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"the-basics",children:"The basics"}),"\n",(0,t.jsx)(n.p,{children:"There are a few configuration files required for liquid to function:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"app-config.json"}),": The frontend configuration file. This controls everything that the user sees in pages like login, signup, etc. Heavily used for cosmetic changes, but also controls enabling and disabling certain features shown in forms."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:".env"}),": The backend configuration file. This is the file where all your important liquid configurations and secrets are stored. Like MongoDB URL, Redis credentials, what features to enable in the system, etc."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"scope-extensions.json"}),": The scopes file (Optional). OAuth systems usually determine if a user is allowed to access an API by checking if they have access to the scope associated with the API. More about this later."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Changing Backend options (",(0,t.jsx)(n.code,{children:"app-config.service.json"})," / ",(0,t.jsx)(n.code,{children:".env"})," file passed to Liquid) requires a restart of the service. Changing Frontend options instantly reflect when you refresh static pages."]})}),"\n",(0,t.jsx)(n.h2,{id:"editing-liquid-configurations",children:"Editing Liquid configurations"}),"\n",(0,t.jsx)(n.h3,{id:"backend",children:"Backend"}),"\n",(0,t.jsxs)(n.p,{children:["All the available backend options are listed in ",(0,t.jsx)(n.a,{href:"https://github.com/shrihari-prakash/liquid/blob/main/src/service/configuration/options.json",children:"this file"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To configure options, create a file named ",(0,t.jsx)(n.code,{children:"app-config.service.json"}),". Now copy the ",(0,t.jsx)(n.code,{children:"name"})," field of the option you want to configure to the JSON file and set the intended value."]}),"\n",(0,t.jsxs)(n.p,{children:["Here's a sample ",(0,t.jsx)(n.code,{children:"app-config.service.json"})," file for a very minimal Liquid setup:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "environment": "development",\n  "cookie.secure": true,\n  "cors.allowed-origins": ["http://localhost:2001", "https://your.frontend.origin"],\n  "mongo-db.connection-string": "mongodb://localhost:27017/liquid",\n  "redis.port": 6379,\n  "redis.host": "127.0.0.1",\n  "redis.db": 0,\n  "system.app-name": "Liquid",\n  "system.static.app-config-file-path": "/environment/app-config.static.json",\n  "privilege.can-reset-password": false,\n  "user.account-creation.require-email-verification": false,\n  "system.email-adapter": "print",\n  "system.rate-limit.light-api-max-limit": 100000000,\n  "system.rate-limit.medium-api-max-limit": 100000000,\n  "system.rate-limit.heavy-api-max-limit": 100000000,\n  "system.rate-limit.extreme-api-max-limit": 100000000,\n  "system.demo-mode": true\n}\n\n'})}),"\n",(0,t.jsx)(n.h3,{id:"frontend",children:"Frontend"}),"\n",(0,t.jsxs)(n.p,{children:["All the available options are listed in ",(0,t.jsx)(n.a,{href:"https://github.com/shrihari-prakash/liquid/blob/main/src/public/configuration/options.json",children:"this file"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When you want to configure an option, you would copy the ",(0,t.jsx)(n.code,{children:"name"})," field of the option and set it in app-config.static.json."]}),"\n",(0,t.jsxs)(n.p,{children:["Here's a sample ",(0,t.jsx)(n.code,{children:"app-config.static.json"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "oauth.client-id": "application_client",\n  "oauth.redirect-uri": "{{your-default-oauth-redirect-uri}}",\n  "content.app-name": "My App",\n  "content.app-tagline": "My App Tagline."\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"Now that we have our configuration files ready, let's boot up liquid with them."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Pull the docker image by using command ",(0,t.jsx)(n.code,{children:"docker pull shrihariprakash/liquid"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Create a collection in your database named ",(0,t.jsx)(n.code,{children:"clients"})," and insert the following document into the collection (Make sure you edit the frontend URIs and secret in the document below):"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id": "application_client",\n  "grants": ["client_credentials", "authorization_code", "refresh_token"],\n  "redirectUris": [\n    "{{frontend-redirect-uri-1}}",\n    "{{frontend-redirect-uri-2}}"\n  ],\n  "secret": "super-secure-client-secret",\n  "role": "internal_client",\n  "scope": ["*"],\n  "displayName": "Application Client"\n}\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Update properties ",(0,t.jsx)(n.code,{children:"oauth.client-id"})," and ",(0,t.jsx)(n.code,{children:"oauth.redirect-uri"})," in your ",(0,t.jsx)(n.code,{children:"app-config.json"})," to values from the document you just inserted into ",(0,t.jsx)(n.code,{children:"clients"})," collection. Feel free to explore other options related to UI customizations."]}),"\n",(0,t.jsxs)(n.li,{children:["Have your backend configurations ready in the file ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:".env"})})," (preferably put it on the same folder as your app-config.json)."]}),"\n",(0,t.jsxs)(n.li,{children:["Now open terminal in the folder that contains your ",(0,t.jsx)(n.code,{children:"app-config.json"})," and ",(0,t.jsx)(n.code,{children:".env"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"If you are on Windows, run:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -p 2000:2000 -v "%cd%":/environment --env "SYSTEM_SERVICE_APP_CONFIG_FILE_PATH=/environment/app-config.service.json" --name liquid -itd shrihariprakash/liquid:latest\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"If you are on Linux, run"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker run -p 2000:2000 -v "$(pwd)":/environment --env "SYSTEM_SERVICE_APP_CONFIG_FILE_PATH=/environment/app-config.service.json" --name liquid -itd shrihariprakash/liquid:latest\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"Alternatively, you can use docker compose for easy restarts:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'version: "3"\nservices:\n  liquid:\n    image: shrihariprakash/liquid:latest\n    container_name: liquid\n    ports:\n      - "2000:2000"\n    volumes:\n      - .:/environment # Replace . with the folder that contains app-config.json and .env\n    env_file:\n      - .env\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsxs)(n.li,{children:["All done \u2728, navigating to ",(0,t.jsx)(n.code,{children:"host-machine:2000"})," should render login page. All the APIs are ready to be called from your other services. If the rest of your project is running on Node, you can use the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/liquid-node-connector",children:"Liquid Node Connector"})," to authenticate users connecting to your service and also to get client tokens to interact with Liquid client APIs. ",(0,t.jsx)(n.a,{href:"https://shrihari-prakash.github.io/liquid-docs",children:"Click here for Swagger"}),". Also see Sign Up and Login section in the bottom of this document to find how to handle redirects from your app for authentication."]}),"\n",(0,t.jsx)(n.li,{children:"As a general best practice, whenever you launch Liquid, always look for any warnings in the logs. This can help you catch misconfigurations very early before your users notice them."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"first-time-setup",children:"First time setup"}),"\n",(0,t.jsx)(n.p,{children:"Now we have our liquid instance running. That's fantastic! There's just one more thing to do. Assign someone as the system administrator. Liquid needs a super admin for the system that can provide access to all other users in the system. To do this, create an account on Liquid by doing the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Visit ",(0,t.jsx)(n.code,{children:"/signup"})," and fill the details."]}),"\n",(0,t.jsx)(n.li,{children:"Click on Create Account."}),"\n",(0,t.jsxs)(n.li,{children:["If you have email verifications enabled, a code is sent to your email. Enter this code on the verification page. If you have verifications disabled, you are redirected to the login page. ",(0,t.jsx)(n.strong,{children:"DO NOT LOGIN YET!"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Once you sign up for an account, you would need to make yourself super admin by editing the database entry for your account. This is the last time you will touch the database manually. Run the following commands in your MongoDB instance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'use liquid\n\ndb.users.updateOne( { username: "your_username" },\n{\n  $set: {\n    role: "super_admin",\n    scope: ["*"]\n  }\n})\n'})}),"\n",(0,t.jsx)(n.p,{children:"This would give you full access to the system."}),"\n",(0,t.jsx)(n.h3,{id:"login",children:"Login"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["To authenticate with liquid, redirect to ",(0,t.jsx)(n.code,{children:"/login?redirect={{your_target_uri}}&theme={{light | dark}}"})," from your app (or you could just visit the login URL) and enter your credentials. Note that the value of redirect parameter must be one of the values configured in ",(0,t.jsx)(n.code,{children:"redirectUris"})," of Setup(2)."]}),"\n",(0,t.jsxs)(n.li,{children:["If the credentials are correct, the application redirects the control to the url specified in ",(0,t.jsx)(n.code,{children:"redirect"})," parameter with the state and authorization code."]}),"\n",(0,t.jsxs)(n.li,{children:["In your application logic, you can use this code in exchange for an access and refresh token using the ",(0,t.jsx)(n.code,{children:"authorization_code"})," grant."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"to-make-liquid-production-ready-continue-to-the-production-guide",children:["To make Liquid production ready, continue to the ",(0,t.jsx)(n.a,{href:"/Making-Liquid-Production-Ready",children:"Production Guide"})]}),"\n",(0,t.jsxs)(n.p,{children:["Get started with the APIs ",(0,t.jsx)(n.a,{href:"/api-documentation/API-Documentation-OAuth-2.0",children:"here"})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);