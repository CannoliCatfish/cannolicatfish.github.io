# Sluicing JSON Format

A recipe type that is used by the Steel Gold Pan to obtain random items from certain blocks. 

### General variables:

**total**: Integer. Has to be defined once by the recipe. Set this value equal to the number of outputs used in the recipe.

**input**: JSON object (item). Defines the block that must be interacted with (by a Steel Gold Pan) to obtain the output items by defining an "item" or "tag" variable in the object. This object currently uses item and item tags (as of v1.2.3), but will be changed in a future major update.

**output#**: JSON object. The "#" should be replaced in sequential numerical order for proper recipe population, starting at 1.  

### output# specific variables:

**item**: Defines the item that will be outputted.

**weight**: Int. Set to 0 by default. Represents the likelihood of this item to be chosen as the random output from the sluicing process. Higher weights equal a higher likelihood.

**min**: Int. Set to 1 by default. Represents the lowest possible count that can be produced if this item is the result.

**max**: Int. Set to 1 by default. Represents the highest possible count that can be produced if this item is the result.

### Example: Adding Sluicing to Gravel
```
{
  "type": "rankine:sluicing",
  "total": 4,
  "input": {
    "item": "minecraft:gravel"
  },
  "output1": {
    "item": "minecraft:gold_nugget",
    "weight": 1,
    "min": 2,
    "max": 4
  },
  "output2": {
    "item": "minecraft:iron_nugget",
    "weight": 3,
    "min": 2,
    "max": 4
  },
  "output3": {
    "item": "minecraft:flint",
    "weight": 8,
    "min": 1,
    "max": 2
  },
  "output4": {
    "item": "minecraft:sand",
    "weight": 10
  }
}
```

In this recipe example, sand would be the most likely resulting output, while gold nuggets would be the least.