"use strict";(self.webpackChunkcsb_jp_github_io=self.webpackChunkcsb_jp_github_io||[]).push([[4],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=d(n),u=o,m=f["".concat(p,".").concat(u)]||f[u]||s[u]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"configuration",title:"\u8a2d\u5b9a"},p=void 0,d={unversionedId:"configuration",id:"configuration",title:"\u8a2d\u5b9a",description:"\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3068\u305d\u308c\u305e\u308c\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,editUrl:"https://github.com/csb-jp/csb-jp.github.io/edit/master/docs/configuration.md",tags:[],version:"current",lastUpdatedBy:"Kohei Watanabe",lastUpdatedAt:1660281845,formattedLastUpdatedAt:"2022\u5e748\u670812\u65e5",frontMatter:{id:"configuration",title:"\u8a2d\u5b9a"},sidebar:"docs",previous:{title:"Live (\u5171\u540c\u7de8\u96c6)",permalink:"/docs/live"},next:{title:"\u74b0\u5883",permalink:"/docs/environment"}},c={},s=[{value:"package.json",id:"packagejson",level:2},{value:"sandbox.config.json",id:"sandboxconfigjson",level:2},{value:".prettierrc",id:"prettierrc",level:2},{value:"netlify.toml",id:"netlifytoml",level:2},{value:"now.json (vercel.json)",id:"nowjson-verceljson",level:2}],f={toc:s};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u306e\u8a2d\u5b9a\u65b9\u6cd5\u3068\u305d\u308c\u305e\u308c\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,a.kt)("h2",{id:"packagejson"},"package.json"),(0,a.kt)("p",null,"\u30d1\u30c3\u30b1\u30fc\u30b8\u306b\u5fc5\u8981\u306a\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u7ba1\u7406\u306a\u3069\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002\u8a73\u3057\u304f\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/files/package.json"},"npm \u516c\u5f0f\u306e package.json \u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"sandboxconfigjson"},"sandbox.config.json"),(0,a.kt)("p",null,"\u30b5\u30f3\u30c9\u30dc\u30c3\u30af\u30b9\u306e\u8a2d\u5b9a\u306f sandbox.config.json \u30d5\u30a1\u30a4\u30eb\u306e\u5185\u5bb9\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u884c\u3044\u307e\u3059\u3002\u5de6\u7aef\u306e\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3\u306e\u4e2d\u304b\u3089","[Configuration Files]","\u2192","[sandbox.config.json]","\u2192","[Create]","\u307e\u305f\u306f","[Edit]","\u9078\u629e\u3059\u308b\u3068 sandbox.config.json \u306e\u5185\u5bb9\u3092\u5909\u66f4\u3067\u304d\u307e\u3059"),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},"Infinite Loop Protection"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("inlineCode",{parentName:"dd"},"infiniteLoopProtection"),"\n\u7121\u9650\u30eb\u30fc\u30d7\u3092\u691c\u77e5\u3057\u305f\u3068\u304d\u5b9f\u884c\u3092\u505c\u6b62\u3059\u308b\u304b\u3069\u3046\u304b\u8a2d\u5b9a\u3057\u307e\u3059\u3002(\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,a.kt)("inlineCode",{parentName:"dd"},"false")," \u505c\u6b62\u3057\u306a\u3044)")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u7121\u9650\u30eb\u30fc\u30d7\u3092\u52d5\u4f5c\u3057\u305f\u3044\u5834\u5408\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002")),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},"Hard Reload on Change"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("inlineCode",{parentName:"dd"},"hardReloadOnChange"),"\n\u30d5\u30a1\u30a4\u30eb\u3092\u5909\u66f4\u3059\u308b\u305f\u3073\u5f37\u5236\u7684\u306b\u30ea\u30ed\u30fc\u30c9\u3059\u308b\u304b\u3069\u3046\u304b\u8a2d\u5b9a\u3057\u307e\u3059\u3002(\u30c7\u30d5\u30a9\u30eb\u30c8: ",(0,a.kt)("inlineCode",{parentName:"dd"},"false")," \u5f37\u5236\u7684\u306a\u30ea\u30ed\u30fc\u30c9\u3092\u3057\u306a\u3044)")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"setInterval()"),"\u306a\u3069\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u72b6\u614b\u3092\u6271\u3046\u969b\u306f",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002")),(0,a.kt)("dl",null,(0,a.kt)("dt",{parentName:"dl"},"Template"),(0,a.kt)("dd",{parentName:"dl"},(0,a.kt)("a",{parentName:"dd",href:"https://github.com/codesandbox/codesandbox-importers/blob/97d52141aa025ac7baf83b9574a9e5ae4f771df7/packages/types/index.d.ts#L38-L65"},(0,a.kt)("inlineCode",{parentName:"a"},"template")),"\n\u9078\u629e\u3057\u305f\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002(",(0,a.kt)("inlineCode",{parentName:"dd"},"static")," \u9759\u7684\u30d5\u30a1\u30a4\u30eb\u3001",(0,a.kt)("inlineCode",{parentName:"dd"},"node")," Node.js \u30b3\u30f3\u30c6\u30ca\u30fc\u74b0\u5883)")),(0,a.kt)("h2",{id:"prettierrc"},".prettierrc"),(0,a.kt)("p",null,"\u30b3\u30fc\u30c9\u306e\u81ea\u52d5\u6574\u5f62\u306e\u8a2d\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002\u8a73\u3057\u304f\u306f",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/configuration.html"},"Prettier \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"netlifytoml"},"netlify.toml"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u30c7\u30d7\u30ed\u30a4\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3067\u3059\u3002")),(0,a.kt)("p",null,"Netlify \u3078\u306e\u30c7\u30d7\u30ed\u30a4\u306b\u95a2\u308f\u308b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002\u8a73\u3057\u304f\u306f",(0,a.kt)("a",{parentName:"p",href:"https://docs.netlify.com/configure-builds/file-based-configuration/"},"Netlify \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,a.kt)("h2",{id:"nowjson-verceljson"},"now.json (vercel.json)"),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u30c7\u30d7\u30ed\u30a4\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3067\u3059\u3002")),(0,a.kt)("p",null,"Vercel \u3078\u306e\u30c7\u30d7\u30ed\u30a4\u306b\u95a2\u308f\u308b\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u3067\u3059\u3002\u8a73\u3057\u304f\u306f",(0,a.kt)("a",{parentName:"p",href:"https://vercel.com/docs/configuration"},"Vercel \u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"))}u.isMDXComponent=!0}}]);