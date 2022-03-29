---
id: element-json-format
title: Element JSON Format
---

The Element recipe type, introduced in Version 1.3, is used primarily to establish various stats for the alloying system of the mod. 

**name**: String. Must be defined. Directly defines the name of the element.

**symbol**: String. Must be defined. Defines the element's symbol, which typically is a length of one or two letters.

**color**: Integer, set to 16777215 (white) by default. Defines the element's color, which may be used in the future.

**atomic**: Integer. Must be defined. Defines the element's atomic number. A negative atomic number means the file won't be regarded as an actual "element", and is instead treated as a material. This distinction mainly means it will not be
used in processes similar to the Rankine Box in the future.

**potential**: Float, set to 0 by default.

**items**: JSON Array (string). The format is the following:
* For single items, use the string "I#" before the resource location. (ex. "I#minecraft:netherite_scrap").
* For tags, use the string "T#" before the string used for the tag. (ex. "T#forge:ingots/copper").

**values**: JSON Array (int). Determines the material count for the members of the **items** array. Therefore, the size of the two arrays should be consistent.

**enchantments**: JSON Array (string), set to empty by default. Setting nothing means that the element provides no enchantments Strings in this list should match the ResourceLocation (or ID) of the appropriate enchantment. 
(Special case: using rankine:random as an enchantment will attempt to put a random enchantment on the target item made by using this element)

**enchantmentTypes**: JSON Array (string), set to empty by default. Used in conjunction with the **enchantments** array to specify what the enchantment will be affecting. Possible options are:
["ALL","TOOLS","ARMOR","PICKAXE","AXE","SPEAR","SHOVEL","HOE","SWORD","HAMMER","KNIFE","CROWBAR","BLUNDERBUSS","HELMET","CHESTPLATE","LEGGINGS","BOOTS"]

**enchantmentFactors**: Float, set to 0f by default. Sets what each percentage point of the element contributes to the progress of obtaining the element from the alloy.


Following these variables begin the stat JSON objects. There are two types of stats: Additive and Min/Max. 
* Additive stats combine together (Element1 stat + Element2 stat + Element3 stat).
* Min/Max stats will take the highest and lowest value from the combination of elements and perform (Max + Min) for the final stat result in the alloy. (Min can only be 0 or a negative number as both min and max are set to 0 by default).

All of these stats act as JSON objects, with the string in quotations below acting as the variable name. The following stats can be defined in an element:
* "durability" - Determines the durability added with other elements to the alloy. Additive.
* "miningspeed" - Determines the mining speed added with other elements to the alloy. Additive.
* "mininglevel" - Determines the harvest level of this particular element. Min/Max.
* "enchantability" - Determines the enchantibility added with other elements to the alloy. Additive.
* "damage" - Determines the damage of this particular element. Min/Max.
* "attackspeed" - Determines the attack speed of this particular element. Min/Max.
* "corrosionresist" - Determines the corrosion resistance added with other elements to the alloy. Additive.
* "heatresist" - Determines the heat resistance added with other elements to the alloy. Additive.
* "knockbackresist" - Determines the knockback resistance added with other elements to the alloy. Additive.
* "toughness" - Determines the toughness added with other elements to the alloy. Additive.

### Stat specific variables:
All of the following are _JSON Arrays_ and within each stat should be the same size. All variables must be defined for each increase of size in any array.

**breaks**: Integer JSON Array. Determines where the current stat formula stops (less than or equal to). 

**formulas**: String JSON Array. Only specific arguments can be used in this variable which determine the format of the formula used for other variables. Below are the possible arguments (where x is the percentage, and **a** and **b** are variables defined below).
* "LINEAR": (**a***x + **b**)
>Uses a linear function.
* "POWER": (x^**a** + **b**)
>Uses a power function.
* "EXPONENTIAL": (**a**^x + **b**)
>Uses an exponential function.
* "LOGARITHMIC": (**a**ln(x) + **b**)
>Uses the log function with a base of e.
* "LOG10": (**a**log10(x) + **b**)
>Uses the log function with a base of 10.
* "QUADRATIC": (**a***x^2 + **b***x)
>Uses a quadratic function.
* "SIN": (**a***sin(**b***x))
>Uses the sine function.
* "COS": (**a***cos(**b***x))
>Uses the cosine function.
* "CONSTANT": (**a**)
>Uses a constant using variable **a** and ignores the values of x and b.
* "ALTERNATING": (**a***x or **b***x)
>Uses a function of **a***x or **b***x depending on the outcome of the modifier ALTERNATING_MODULO.
* "CONSTANT_ALTERNATING": (**a** or **b**)
>Uses a constant using variable **a** or **b** depending on the outcome of the modifier ALTERNATING_MODULO.

**a**: Float JSON Array. Determines the value of variable "a" in the formula. See above.

**b**: Float JSON Array. Determines the value of variable "b" in the formula. See above.

**modifiers**: String JSON Array. Only specific arguments can be used in this variable which can be used to make more complex formulas. Below are the possible arguments (where f is the output of the formula and **limit** is the variable defined below).
* "NONE": (f)
>Returns the value of f with no modification.
* "ABSOLUTE_VALUE": (abs(f))
>Returns the value of f ignoring negatives.
* "CEILING": (ceil(f))
>Returns the value of f rounded down to the nearest integer.
* "FLOOR": (floor(f))
>Returns the value of f rounded up to the nearest integer.
* "MAX": (max(f,**limit**))
>Returns the greatest of the two values, f and **limit**.
* "MIN": (min(f,**limit**))
>Returns the lowest of the two values, f and **limit**.
* "ADDITION": (extra = **limit**)
>Adds an optional addition/subtraction to the variable of **x** in the original formula. (ex. (**a**log10(x+extra) + **b**))
* "MULTIPLIER": (extra = **limit**)
>Adds an optional multiplier/divisor to the variable of **x** in the original formula. (ex. (**a**^(x*extra) + **b**))
* "ALTERNATING_MODULO": (f % **limit** == 0 ? f1 : f2)
>Returns an equation using the variable **a** or **b** depending on the condition (f modulo **limit** == 0). Only for use with the ALTERNATING or CONSTANT_ALTERNATING equation types.

**limit**: Float JSON Array. Used for modifier formulas. See above.

