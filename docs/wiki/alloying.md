---
id: alloying
title: Alloying
---
import alloyJEIUrl from './assets/example-alloy-jei.png';

Alloying in Project Rankine relies on a system of modularity, where there are many different possible compositions for a single alloy. It may be helpful to understand how <a href="elements">Elements</a> work before continuing.
The percentages for alloy production allow for variability based off of resource availability and are comparable to real world counterparts.

If JEI is installed, you can see which elements you can use in order to make alloys. 
<img src={alloyJEIUrl} alt="Alloy JEI Example" />

The elements in the numbered slots on the left represent the **required** elements. You must include these elements within their bounded percentages in order to produce the respective alloy.

The elements in the large box on the right represent the **optional** elements. These represent options you can choose from to fill out the rest of your composition. In total, an alloy can use up to five unique elements, provided that all elements are within their bounds.

Alloys are made in the Alloy Furnace and Induction Furnace. Each furnace has six slots that can be filled with elements to produce an alloy. The more material you add to the furnace, the more alloy that gets produced, meaning that it is fuel efficient to make larger batches of alloys rather than smaller.

The Alloy Template Table can be used to produce Alloy Templates given paper, dye, and the ingredients you want to use in the recipe. By putting the template in the Alloy Furnace/Induction Furnace, it will allow for easy automation as you can put in stacks of each ingredient in the template and it will automatically produce the output.

If JEI is not installed, then the Alloy Template Table can be used to get a small idea on what the required elements for each alloy are. In future updates, the Alloy Template Table will act as an in-game way to get all the details of making a certain alloy.
Alloy Templates can also be obtained from the Metallurgist Villager, which will automically transform into a random Alloy Template when picked up.

Each alloy tool has the following stats:

**Harvest Level**:
Harvest level is at what tier the tool can mine. The harvest level of a tool is mostly hard coded in depending on the alloy. Within certain alloys however, adding a sufficient amount of an element can boost the level from its default.

**Durability**:
Durability is a pretty familiar stat for tools. It is the number of uses a tool has before breaking.

**Mining Speed**:
Mining speed is how fast the tool can break a block. For comparison, gold tools are the fastest in vanilla with a mining speed of 12.

**Damage**:
Damage is how many hearts a tool/weapon removes on attack.

**Attack Speed**:
Attack speed is how often the player can swing a tool/weapon. The attack bar indicator shows when a swing is fully off cooldown. Weapons do their maximum damage and Hammers / Crowbars can only break blocks when the cooldown is reset.

**Enchantability**:
Enchantability is an in-game mechanic for determining how to apply good enchantments (fortune III) and applying multiple at once to tools. Higher numbers mean greater chance of those enchantments. The highest of vanilla tools is gold at 22, while diamond is a mere 10.
Additionally, alloys will apply enchantments from either its element components or its bonus enchantments based on its Enchantability value. Typical alloys confer enchantments automatically at a value of 20, with every 5 levels increasing the enchantment level of the enchantment provided.

**Corrosion Resistance**:
Corrosion is the degradation of materials in wet environments (ie. in water or the rain). Corrosion resistance is the chance to not consume an durability when wet. At 100%, the tool will not consume an extra durability while at 0% it is guaranteed.

**Heat Resistance**:
Hot environments (like in lava or the Nether) cause materials to deform. When in these environments, heat resistnce is the chance to not consume an extra durability. At 100%, the tool will not consume an extra durability while at 0% it is guaranteed.

**Toughness**:
Toughness acts like built in unbreaking. It is the chance to not consume a durability on use. It ranges from -100% to 100%, where 0% means it acts like normal and where negatives means a chance to consume two durability.

For the most part the stats provided by elements are additive, meaning the total durability of a tool that is 85Cu-10Sn-5Al is the durability of Cu at 85% plus the durability of Sn at 10% plus the durability of Al at 5%. There are varying formulas to calculate stats of an element at various percentages. 
Not all stat formulas are linear, which means there are different trade-offs to find. Low percentages of certain elements can still be very useful.

Some bonuses are given to certain alloy tools which are applied after element stats. These help specific alloys have an advantage over similar compositions than in alloys such as Amalgam.

There is also a command which allows you to construct alloys easily with a specific composition or alloy recipe without having to first use any type of Alloy Furnace.
```
 /givealloy [player] [item] [composition] [alloying recipe] [count] [alloy modifier]
 ```
 
For instance, using the following command, you would generate three alloy ingots with composition "85Cu-10Sn-5Al", mimic the properties of the Bronze Alloying recipe, and has its stats modified by Argon.
```
/givealloy @s rankine:alloy_ingot "85Cu-10Sn-5Al" rankine:alloying/bronze_alloying 3 rankine:alloy_modifier/argon_modifier 
```


