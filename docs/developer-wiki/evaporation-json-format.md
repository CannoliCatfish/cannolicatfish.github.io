# Evaporation JSON Format

A recipe type that is used by the Evaporation Boiler and Evaporation Tower structures. 

### General variables:

**large**: Boolean, set to true by default. Determines whether the Evaporation Tower (true) or Evaporation Boiler (false) structure should be used.

**biomes**: JSON array (string). Each entry in the array is used to determine which biomes this recipe works in. The format is the following:
* For single biomes, use the string "B#" before the resource location. (ex. "B#minecraft:snowy_tundra").
* For biome categories, use the string "C#" before the string used for the category. (ex. "C#taiga").

**total**: Integer. Has to be defined once by the recipe. Set this value equal to the number of outputs used in the recipe.

**large**: Boolean, set to true by default. Determines whether the Evaporation Tower (true) or Evaporation Boiler (false) structure should be used.

**cookTime**: Integer. Determines the number of ticks required until recipe completion. Evaporation Towers can increase height to decrease processing time.

**input**: JSON object. Inside this object is the variable "block" which must be set to the fluid that will be placed in the structure. 

**bucket**: JSON object. Inside this object is the variable "item"/"tag" which is set to help with JEI integration. The item/tag provided does not have to be a bucket. This is mainly used to tell the player which liquid they need to place in the structure.

**output#**: JSON object. The "#" should be replaced in sequential numerical order for proper recipe population, starting at 1.  

### output# specific variables:

**item**: Defines the item that will be outputted.

**weight**: Int. Set to 0 by default. Represents the likelihood of this item to be chosen as the random output from the sluicing process. Higher weights equal a higher likelihood.

**min**: Int. Set to 1 by default. Represents the lowest possible count that can be produced if this item is the result.

**max**: Int. Set to 1 by default. Represents the highest possible count that can be produced if this item is the result.

### Example 1: Evaporating resin in a Evaporation Boiler
```
{
  "type": "rankine:evaporation",
  "large": false,
  "total": 1,
  "cookTime": 1200,
  "input": {
    "block": "rankine:resin"
  },
  "bucket": {
    "item": "rankine:resin_bucket"
  },
  "output1": {
    "item": "rankine:amber",
    "weight": 1
  }
}
```

### Example 2: Evaporating water in an Evaporation Tower located in any Ocean Biome and the Snowy Beach biome
```
{
  "type": "rankine:evaporation",
  "total": 3,
  "biomes": ["C#ocean","B#minecraft:snowy_beach"],
  "input": {
    "block": "minecraft:water"
  },
  "bucket": {
    "item": "minecraft:water_bucket"
  },
  "output1": {
    "item": "rankine:bromine_nugget",
    "weight": 1
  },
  "output2": {
    "item": "rankine:iodine_nugget",
    "weight": 1
  },
  "output3": {
    "item": "rankine:salt",
    "weight": 80
  }
}
```

