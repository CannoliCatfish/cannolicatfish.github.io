---
id: air-distillation-json-format
title: Air Distillation JSON Format
---

The Air Distillation recipe type is used in the Air Distillation Tower multiblock in order to determine which gas blocks should be generated based on biome/dimension. 

### General variables:

**dimensions**: JSON array (string). Each entry in the array is used to determine which dimension this recipe works in. 

**biomes**: JSON array (string). Each entry in the array is used to determine which biomes this recipe works in. The format is the following:
* For single biomes, use the string "B#" before the resource location. (ex. "B#minecraft:snowy_tundra").
* For biome categories, use the string "C#" before the string used for the category. (ex. "C#taiga").

In most recipes, either **dimensions** or **biomes** should have a value. Not having either would make the recipe universal, meaning that it would overwrite any specific dimension/biome recipe.

**output#**
JSON object. The "#" should be replaced in sequential numerical order for proper recipe population, starting at 1 and ending at 10. These numbers correspond to the level of the Air Distillation Tower the block will end up spawning.

### output# specific variables:

**item**: Defines the item that will be outputted. Should be a block item, as it will be placed in-world at the respective level based on random chance.

**chance**: Float. Set to 0 by default. Represents the chance for the block to spawn in-world next to the Air Distillation Tower at any given tick.

### Example 1: Air Distillation in The End
```
{
  "type": "rankine:air_distillation",
  "dimensions": ["minecraft:the_end"],
  "output3": {
    "item": "rankine:hydrogen_gas_block",
    "chance": 0.5
  },
  "output4": {
    "item": "rankine:helium_gas_block",
    "chance": 0.1
  },
  "output5": {
    "item": "rankine:fluorine_gas_block",
    "chance": 0.05
  },
  "output6": {
    "item": "rankine:chlorine_gas_block",
    "chance": 0.05
  },
  "output7": {
    "item": "rankine:neon_gas_block",
    "chance": 0.05
  },
  "output8": {
    "item": "rankine:argon_gas_block",
    "chance": 0.01
  },
  "output9": {
    "item": "rankine:krypton_gas_block",
    "chance": 0.007
  },
  "output10": {
    "item": "rankine:oxygen_gas_block",
    "chance": 0.005
  }
}
```


