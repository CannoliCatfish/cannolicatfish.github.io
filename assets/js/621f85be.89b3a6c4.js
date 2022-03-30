"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1319],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||i;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],u={id:"crushing-json-format",title:"Crushing JSON Format"},l=void 0,c={unversionedId:"developer-wiki/crushing-json-format",id:"developer-wiki/crushing-json-format",title:"Crushing JSON Format",description:"Crushing recipes are used to produce outputs in the Piston Crusher and its affiliates, as well as influence the result of using a hammer on a block in the world.",source:"@site/docs/developer-wiki/crushing-json-format.md",sourceDirName:"developer-wiki",slug:"/developer-wiki/crushing-json-format",permalink:"/docs/next/developer-wiki/crushing-json-format",editUrl:"https://github.com/CannoliCatfish/cannolicatfish.github.io/blob/main/docs/developer-wiki/crushing-json-format.md",tags:[],version:"current",frontMatter:{id:"crushing-json-format",title:"Crushing JSON Format"},sidebar:"tutorialSidebar",previous:{title:"Crucible JSON Format",permalink:"/docs/next/developer-wiki/crucible-json-format"},next:{title:"Element JSON Format",permalink:"/docs/next/developer-wiki/element-json-format"}},s={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Crushing recipes are used to produce outputs in the Piston Crusher and its affiliates, as well as influence the result of using a hammer on a block in the world."),(0,i.kt)("p",null,"For reference the harvest levels and output levels can be summarized as:\n1: Flint\n2: Bronze\n3: Invar\n4: Steel\n5: Superalloy\n6: Advanced"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"input"),": Item or Tag. Represents the item(s) that will be crushed. Tags will only work properly if all members of the tag do not have another crushing recipe that they are apart of."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"output#"),': Item. There are 6 outputs ("output1","output2","output3","output4","output5","output6"). If an output is not filled out, then the output is skipped for that harvest level.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"chance"),": Float. Set to 0 by default. Represents the chance for the item to drop from crushing if the harvest level is equal or greater than the output level."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"additional"),': Float. Set to 0 by default. Represents the additional chance for the item to drop from crushing if the harvest level matches the output level. Setting "additional" while not setting "chance" would make an output that is effectively restricted to a certain harvest level.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"alloyData"),": String. Can be used in any output. Used to define a specific alloy composition that is a part of the item."),(0,i.kt)("p",null,"###Example : Horneblende Andesite"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},' {\n  "type": "rankine:crushing",\n  "input": {\n    "item": "rankine:hornblende_andesite"\n  },\n  "output1": {\n    "item": "minecraft:cobblestone",\n    "chance": 0.8,\n    "additional": 0.2\n  },\n  "output2": {\n    "item": "rankine:plagioclase_feldspar",\n    "chance": 0.4,\n    "additional": 0.15\n  },\n  "output3": {\n    "item": "rankine:amphibole",\n    "chance": 0.20,\n    "additional": 0.10\n  },\n  "output4": {\n    "item": "rankine:zircon",\n    "chance": 0.10,\n    "additional": 0.10\n  },\n  "output5": {\n    "item": "rankine:ilmenite",\n    "chance": 0.05,\n    "additional": 0.05\n  },\n  "output6": {\n    "item": "rankine:garnet",\n    "chance": 0.02\n  }\n }\n')))}m.isMDXComponent=!0}}]);