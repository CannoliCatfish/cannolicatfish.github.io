---
id: elements
title: Elements
---

import elementJEIUrl from './assets/example-element-jei.png';

Elements are the main components of the alloying system which dictate many factors of how your alloy will turn out. The default elements provided by Project Rankine are the 118 elements that can be found in the Periodic Table, as well as some additional "elements" based on more Minecraft-based aspects, such as Netherite.

Every element has a set of items which correspond to it and are used within the Alloying system of the mod, which can be read about in more detail <a href="alloying">here</a>. Besides being associated with the element, each item also includes a "material" count, which helps with calculating the compositions of your alloys as well as determining how much alloy you can create.

If JEI is installed, an item that is a part of an Element will belong to an accompanying "use" page for the respective element. This will give you details such as the Atomic Number, Electrode Potential, Chemical Symbol, and the respective items that belong to that element. Hovering over an item will also provide you the material count for that item. Elements that are provided by Project Rankine that do not belong to the normal Periodic Table do not have an Atomic Number.
<img src={elementJEIUrl} alt="Element JEI Example" />

Elements mainly come into play when considering alloy compositions for your tools. For an example, lets say you wanted to make your Pewter Alloy tool have extra enchantability in order to achieve its special enchantment. In order to do so, you would want to choose a composition which can give you the enchantability you want while also still maintaining an overall good stat spread in other stats, such as Durability, Mining Speed, etc.
In this case, you would need to experiment with the bounds of each element that can be put in the alloy. Since Tin and Antimony are required in the formula, starting with those would be the most prudent. Which gives a higher amount of Enchantability, a Pewter tool at the Maximum amount of Tin (98Sn-2Sb), or a tool that has the maximum amount of Antimony (90Sn-10Sb)? Starting with an elements highest and lowest bounds may give you enough insight to decide. Typically however, most alloys will require an additional optional element, or multiple, in order to achieve the goals you desire for your tool.

Each element confers particular stats based on a set formula that is unique to that element. For instance, Iron has a Durability formula of D (durability) = 2.5 times x, where x is the percentage that Iron (or Fe) makes up in the composition. Therefore, if you were to make a hypothetical tool of 100% Iron, you would have a durability of 250.  
When looking for information about Elements, whether it be the Formulas or just the simple calculations per percentage, there are two other in-game tools that you can use at your disposal. 

The first and earliest tool is the Material Testing Table. This table is used to provide information of the formulas for each element. However, you must also obtain certain tools in conjuction to the element in order to examine each stat.

The second tool is the Element Indexer. This tool calculates out the formulas and gives you the values for each stat at the currently observed percentage. Scrolling up and down while in the menu of the Element Indexer will allow you to shift the percentage.