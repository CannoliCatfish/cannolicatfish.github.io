---
id: fusion-furnace-json-format
title: Fusion Furnace JSON Format
---

The Fusion Furnace recipe type is used to make recipes that involve gas, liquid, and/or item input. As of Version 1.3.X, gases are handled by Gas Bottles.

### General variables:
**input1**/**input2**
JSON object that defines the item input for an input slot. Order is not considered by the Fusion Furnace, and either input can be put in either slot.

**cookTime**: Integer. Determines the number of ticks required until recipe completion.

**result1**/**result2**
JSON object that defines the item output for a result slot.

### Example 1: Cerium Monazite Smelting
```
{
  "type": "rankine:fusion_furnace",
  "cookTime": 400,
  "input1": {
    "item": "rankine:cerium_monazite"
  },
  "input2": {
    "tag": "rankine:alkali_hydroxides"
  },
  "fluidInput": {
    "fluid": "rankine:sulfuric_acid"
  },
  "fluidOutput": {
    "fluid": "rankine:gray_mud"
  },
  "result1": {
    "item": "rankine:cerium_ingot"
  },
  "result2": {
    "item": "minecraft:quartz"
  },
  "gasInput": {
    "item": "minecraft:glass_bottle"
  },
  "gasOutput": {
    "item": "rankine:helium_gas_bottle"
  }
}
```


