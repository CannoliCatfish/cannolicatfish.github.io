"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2999],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2222:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s="Alloying JSON Format",u={unversionedId:"developer-wiki/alloying-json-format",id:"developer-wiki/alloying-json-format",isDocsHomePage:!1,title:"Alloying JSON Format",description:"Different from the alloy_crafting type, the Alloying recipe type reflects the actual creation of an alloy in the Alloy Furnace and the Induction Furnace. Due to the highly variable nature of alloys, this recipe type is the most complex. All alloying recipes in Project Rankine are also located in a subfolder labelled alloying.",source:"@site/docs/developer-wiki/alloying-json-format.md",sourceDirName:"developer-wiki",slug:"/developer-wiki/alloying-json-format",permalink:"/docs/developer-wiki/alloying-json-format",editUrl:"https://github.com/CannoliCatfish/cannolicatfish.github.io/docs/developer-wiki/alloying-json-format.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Alloy Crafting JSON Format",permalink:"/docs/developer-wiki/alloy-crafting-json-format"},next:{title:"Beehive Oven JSON Format",permalink:"/docs/developer-wiki/beehive-oven-json-format"}},c=[{value:"General variables:",id:"general-variables",children:[],level:3},{value:"Input# specific variables:",id:"input-specific-variables",children:[],level:3},{value:"Important Notes",id:"important-notes",children:[],level:3},{value:"Example: Making a Custom Gold Alloy using a fictional Emerald tag for the Induction Furnace",id:"example-making-a-custom-gold-alloy-using-a-fictional-emerald-tag-for-the-induction-furnace",children:[],level:3}],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"alloying-json-format"},"Alloying JSON Format"),(0,i.kt)("p",null,"Different from the alloy_crafting type, the Alloying recipe type reflects the actual creation of an alloy in the Alloy Furnace and the Induction Furnace. Due to the highly variable nature of alloys, this recipe type is the most complex. All alloying recipes in Project Rankine are also located in a subfolder labelled alloying."),(0,i.kt)("h3",{id:"general-variables"},"General variables:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"total"),": Integer. Has to be defined once by the recipe. Set this value equal to the number of inputs used in the recipe."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"tier"),": Integer. Defaults to 3. Defines what furnace the alloy can be made in."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 = None"),(0,i.kt)("li",{parentName:"ul"},"1 = Alloy Furnace"),(0,i.kt)("li",{parentName:"ul"},"2 = Induction Furnace"),(0,i.kt)("li",{parentName:"ul"},"3 = Both Alloy Furnace and Induction Furnace")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"required"),": Integer. Set by default in the recipe, unless the value is set. Can be as low as 1 and as high as 5. Determines how many inputs are required to make the alloy, which only needs to be defined specifically in special circumstances."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"input#"),': JSON object. The "#" should be replaced in sequential numerical order for proper recipe population, starting at 1.  '),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"result"),': JSON object (item). Defines the item to be outputted. NBT data is provided to the item regardless of what type of item it is. A "count" variable should not be defined, as the count is determined by the amount of material provided by the inputs. '),(0,i.kt)("h3",{id:"input-specific-variables"},"Input# specific variables:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"auto"),": Boolean. Set to true by default and can be used in any input. When true, the items associated with the element from Project Rankine tags (rankine:element/","[element]",") will be set as the items. Turn to false if you wish to use your own tags or items."),(0,i.kt)("p",null,'If auto is set to false, you must provide either a "tag" or an "item" JSON object for the recipe to be valid. You should not include a "count" variable.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"min"),": Float. Set to 0 by default. Represents the lowest possible percentage for the input. Should be between 0 and 1. Decimal percentages (ex. 0.333, or 33.3%) should not be used as percentages are rounded."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"max"),": Float. Set to 0 by default. Represents the highest possible percentage for the input. Should be between 0 and 1. Decimal percentages (ex. 0.333, or 33.3%) should not be used as percentages are rounded."),(0,i.kt)("h3",{id:"important-notes"},"Important Notes"),(0,i.kt)("p",null,"Names for implemented elements can be found in the item tags in Project Rankine, under the elements subfolder. We have implemented all 118 normal elements from the Periodic Table and plan to add extended elements in a future update. Currently, the only extended element is Netherite, located at Atomic Number 156. Element stats change on a regular basis, and not all elements have fully implemented stats. To see the stats of a particular element, you can use the Element Indexer."),(0,i.kt)("p",null,"You may have functionally as many inputs as you want, but the number of actually required inputs is restricted to 5. A required input is defined as having a minimum greater than 0."),(0,i.kt)("p",null,"Inputs are on a per alloy basis, meaning that setting an item as an element for one alloy does not make that item have that element intrinsically for other alloys."),(0,i.kt)("p",null,"To determine percentages, each item inserted as an ingredient is assigned a material value. Below are how these values are assigned in sequential order. (Meaning, that if an item fits more than one requirement, the first requirement met in the list will be its material value.)\nCount will refer to the number of items in the itemstack."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'BlockItems or contains tag "forge:storage_blocks" or in registry name contains "block": 81 * count'),(0,i.kt)("li",{parentName:"ul"},'Contains tag "forge:ingots" or in registry name contains "ingot": 9 * count'),(0,i.kt)("li",{parentName:"ul"},'Contains tag "forge:nuggets" or in registry name contains "nugget": count'),(0,i.kt)("li",{parentName:"ul"},'Registry name contains "scrap": 2 * count'),(0,i.kt)("li",{parentName:"ul"},"All other items: 9 * count")),(0,i.kt)("p",null,"The total amount of alloy produced by a furnace is the amount of material divided by 10. It cannot be less than 1 or greater than 64."),(0,i.kt)("h3",{id:"example-making-a-custom-gold-alloy-using-a-fictional-emerald-tag-for-the-induction-furnace"},"Example: Making a Custom Gold Alloy using a fictional Emerald tag for the Induction Furnace"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n      "type": "rankine:alloying",\n      "total": 7,\n      "tier": 2,\n      "required": 3,\n      "input1": {\n        "element": "gold",\n        "min": 0.86,\n        "max": 0.91\n      },\n      "input2": {\n        "element": "beryllium",\n        "auto": false,\n        "tag": "modid:emerald_and_emerald_block",\n        "min": 0.04,\n        "max": 0.09\n      },\n      "input3": {\n        "element": "manganese",\n        "min": 0.0,\n        "max": 0.05\n      },\n      "input4": {\n        "element": "nickel",\n        "min": 0.0,\n        "max": 0.05\n      },\n      "input5": {\n        "element": "vanadium",\n        "min": 0.0,\n        "max": 0.05\n      },\n      "input6": {\n        "element": "silicon",\n        "min": 0.0,\n        "max": 0.05\n      },\n      "input7": {\n        "element": "phosphorus",\n        "min": 0.0,\n        "max": 0.05\n      },\n      "result": "rankine:alloy_ingot"\n}\n')),(0,i.kt)("p",null,'In this example, we made an alloy which requires 86-91% gold, 4-9% beryllium, and a third input. All remaining elements are set to have the same min-max (0-5%), but this can be set differently.\nThe fictional tag, "modid:emerald_and_emerald_block", contains both the items for "minecraft:emerald" and "minecraft:emerald_block" so that both can be used in this alloying recipe. Typically, all outputs are set to be some form of ingot. The alloy_crafting recipe type can then be used to make the ingot into a different item, such as a gear, dust, plate, or other item.'))}p.isMDXComponent=!0}}]);