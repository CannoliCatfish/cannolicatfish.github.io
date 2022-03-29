---
id: crucible-json-format
title: Crucible JSON Format
---

The Crucible recipe type is used for the Crucible block obtained in the middle of progression through the mod. It is typically used at that point to obtain Steel, as well as other smaller products such as redstone and glass.

**result**: JSON object (item). Defines the primary item to be outputted by defining an "item" variable in the object.

**secondary**: JSON object (item). Defines the secondary item to be outputted by defining an "item" variable in the object.

**cookTime**: Integer. Determines the number of ticks required until recipe completion.

**alloyData**: String, empty by default. Determines the starting composition of the output item. Only provide this if the output should be considered an alloy.

**total**: Integer. Has to be defined once by the recipe. Set this value equal to the number of inputs used in the recipe.

**required**: JSON Array (boolean). Determines which ingredient groups are required in the recipe. Only groups 0,1,2,3 can be set as required.

**input#**: JSON object. The "#" should be replaced in sequential numerical order for proper recipe population, starting at 1.  

### Input# specific variables:

**item** or **tag**: JSON object pointing to an item or tag.

**group**: Integer, set to -1 by default. Determines the ingredient group that the input is considered to be in. The crucible only allows one unique member from each ingredient group, except for -1. 

**countMod**: Integer, set to 0 by default. If set, this input will increase or decrease the resulting count of the output by this amount.

**cookMod**: Integer, set to 0 by default. If set, increases or decreases the cookTime of the recipe. Negative numbers decrease cookTime.

**shiftMod**: JSON Array (String), set as empty by default. If set (and alloyData is set), the list provides a set of instructions on how to modify the output composition. The format for each string is: "[negative sign] [number] [elementSymbol]". Examples: "-9Fe", "2Cu".
A special case occurs if no number is provided and only two strings are in the list, where the first member is negative and the second is positive.
This forces the composition to remove all of the first element and add the amount subtracted to the second element.
Example: original composition "95Fe-3S-2C" -> ["-S","Fe"] -> new composition "98Fe-2C"

### Example 1: Making Glowstone in the Crucible
```
{
  "type": "rankine:crucible",
  "result": {
    "item": "minecraft:glowstone_dust"
  },
  "secondary": {
    "item": "rankine:slag"
  },
  "cookTime": 1200,
  "color": 13403732,
  "required": [true,true,false,false],
  "total": 9,
  "input1": {
    "item": "rankine:phosphorus",
    "countMod": 1,
    "group": 0
  },
  "input2": {
    "item": "minecraft:blaze_powder",
    "countMod": 3,
    "cookMod": -400,
    "group": 0
  },
  "input3": {
    "tag": "forge:silicon"
  },
  "input4": {
    "tag": "forge:nuggets/arsenic"
  },
  "input5": {
    "tag": "forge:gems/quartz"
  },
  "input6": {
    "tag": "forge:sulfur"
  },
  "input7": {
    "tag": "forge:ingots/sodium",
    "countMod": 1
  },
  "input8": {
    "tag": "forge:ingots/neon",
    "countMod": 2
  },
  "input9": {
    "tag": "forge:ingots/argon",
    "countMod": 2
  }
}
```

### Example 2: Making Green Gold in the Crucible
``` 
{
  "type": "rankine:crucible",
  "result": {
    "item": "rankine:green_gold_alloy"
  },
  "secondary": {
    "item": "rankine:slag"
  },
  "cookTime": 3200,
  "alloyData": "50Au-50Ag",
  "required": [true,true,false,false],
  "total": 16,
  "input1": {
    "tag": "forge:ingots/gold",
    "group": 0
  },
  "input2": {
    "item": "forge:ingots/netherite",
    "group": 0,
    "shiftMod": [-Au,Nr],
  },
  "input3": {
    "tag": "forge:ingots/silver",
    "group": 1
  },
  "input3": {
    "tag": "forge:nuggets/copper",
    "shiftMod": ["-6Ag","6Cu"]
  },
  "input4": {
    "item": "rankine:element_transmuter",
    "countMod": 1
  },
  "input5": {
    "item": "rankine:borax",
    "cookMod": 1600
  }
}
```

 