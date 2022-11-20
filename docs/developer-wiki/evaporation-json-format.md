---
id: evaporation-json-format
title: Evaporation JSON Format
---

A recipe type that is used by the Evaporation Tower structure.

### Variables:

**"processTime"**: Integer. Determines the number of ticks required until recipe completion. Each layer of the tower, up to 20, will decrease the processing time by 4%.

**"consumeFluid"**: Boolean. Determines if fluid blocks will be removed from the structure on the completeion of a process.

**"biomes"**: JSON object. Contains "biomes" and/or "biomeTags" JSON arrays to declare all the biomes the recipe is valid in. If no biomes are listed in either array, then the recipe is valid everywhere. 

- **"biomes"**: JSON string array. List of biome resource locations as strings.

- **"biomeTags"**: JSON string array. List of biome tag resource locations as strings.

**"input"**: JSON object. Inside this object is the variable "fluid" which must be set to the fluid that will be placed in the structure. 

**"outputs"**: JSON object array. Each object of this array contains an "item" and "weight" to determine the output from the process.  

- **"item"**: Defines the item that will be outputted. Omitting the item entry will return an empty itemstack.

- **"weight"**: Int. Set to 0 by default. Represents the likelihood of this item to be chosen as the random output. Higher weights equal a higher likelihood.

### Examples:

Evaporating lava in any Nether biome. Lava is not consumed by the operation and thus a long "processTime" is used.
```
{
  "type": "rankine:evaporation",
  "processTime": 20000
  "consumeFluid": false
  "biomes": {
    "biomeTags": ["minecraft:is_nether"]
  }
  "input": {
    "fluid": "minecraft:lava"
  },
  "outputs": [
    {
      "item": "minecraft:basalt",
      "weight": 20
    },
    {
      "item": "minecraft:magma_cream",
      "weight": 2
    },
    {
      "item": "minecraft:blaze_powder",
      "weight": 1
    },
    {
      "item": "rankine:saltpeter",
      "weight": 1
    },
    {
      "item": "rankine:ash",
      "weight": 10
    },
    {
      "item": "minecraft:bone",
      "weight": 2
    }
  ]
}
```

Evaporating milk in a Sunflower Plains and Flower Forest biomes. Milk is consumed each operation.
```
{
  "type": "rankine:evaporation",
  "processTime": 600
  "consumeFluid": true
  "biomes": {
    "biomes": ["minecraft:sunflower_plains", "minecraft:flower_forest"]
  }
  "input": {
    "fluid": "forge:milk"
  },
  "outputs": [
    {
      "item": "minecraft:cake",
      "weight": 2
    }
    {
      "item": "rankine:cheese",
      "weight": 10
    }
  ]
}
```

