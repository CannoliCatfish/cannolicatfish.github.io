"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2188],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,d=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8551:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},c=void 0,s={unversionedId:"developer-wiki/alloy-crafting-json-format",id:"version-1.2/developer-wiki/alloy-crafting-json-format",title:"alloy-crafting-json-format",description:"Alloy Crafting recipes are used to produce outputs in the crafting table which pass data of the alloy from the ingredients to the result.",source:"@site/versioned_docs/version-1.2/developer-wiki/alloy-crafting-json-format.md",sourceDirName:"developer-wiki",slug:"/developer-wiki/alloy-crafting-json-format",permalink:"/docs/developer-wiki/alloy-crafting-json-format",editUrl:"https://github.com/CannoliCatfish/cannolicatfish.github.io/blob/main/versioned_docs/version-1.2/developer-wiki/alloy-crafting-json-format.md",tags:[],version:"1.2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"version-1.2/tutorialSidebar",previous:{title:"home",permalink:"/docs/home"},next:{title:"alloying-json-format",permalink:"/docs/developer-wiki/alloying-json-format"}},p={},u=[],f={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alloy-crafting-json-format"},"Alloy Crafting JSON Format"),(0,i.kt)("p",null,"Alloy Crafting recipes are used to produce outputs in the crafting table which pass data of the alloy from the ingredients to the result.\nIt functions just as a normal crafting recipe, except it contains two additional arguments."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"inherit"),': Boolean. Single-time use in the recipe. When set to true the recipe will take the alloy information from the ingredients and add it to the output. It also adds the requirement that all of the ingredients with alloy data used in the recipe must have the same alloy data ("composition"). If not defined, the boolean is set to false.'),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"alloyData"),': String. Can be used in any key or the result. Used to define a specific alloy composition which is either required if it is an ingredient or will be added to the output of the recipe. This can be used in multiple "key" ingredients and does not have to be the same (when used in this manner, inherit should be set to false.)'),(0,i.kt)("p",null,"This can be used in two main ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Adding a recipe which "inherits" the alloy information of the ingredients (ex. making an Alloy Tool)'),(0,i.kt)("li",{parentName:"ol"},"Adding a recipe which requires a specific alloy composition (ex. making a machine or block require a specific composition alloy)")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1"),": Making a Bronze Pickaxe that inherits its composition from Bronze Alloy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "rankine:alloy_crafting",\n  "inherit": "true",\n  "pattern": [\n  "###",\n  " t ",\n  " t "\n  ],\n  "key": {\n    "#": {\n        "item": "rankine:bronze_alloy"\n        },\n    "t": {\n        "tag": "forge:rods/wooden"\n        }\n  },\n  "result": {\n      "item": "rankine:bronze_pickaxe",\n      "count": 1        \n   }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2"),": Making the Evaporation Tower require a specific composition of Cupronickel Alloy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "rankine:alloy_crafting",\n  "pattern": [\n  "ccc",\n  "sms",\n  "chc"\n  ],\n  "key": {\n    "m": {\n        "item": "minecraft:magma_block"\n        },\n    "s": {\n        "item": "minecraft:cauldron"\n        },\n    "c": {\n        "item": "rankine:cupronickel_alloy",\n        "alloyData": "90Cu-10Ni",\n        },\n    "t": {\n        "item": "minecraft:hopper"\n        }\n  },\n  "result": {\n      "item": "rankine:evaporation_tower",\n      "count": 1        \n   }\n}\n')))}m.isMDXComponent=!0}}]);