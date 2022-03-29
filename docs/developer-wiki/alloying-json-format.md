---
id: alloying-json-format
title: Alloying JSON Format
---

Different from the alloy_crafting type, the Alloying recipe type reflects the actual creation of an alloy in the Alloy Furnace and the Induction Furnace. Due to the highly variable nature of alloys, this recipe type is the most complex. All alloying recipes in Project Rankine are also located in a subfolder labelled alloying.

### General variables:

**total**: Integer. Has to be defined once by the recipe. Set this value equal to the number of inputs used in the recipe.

**tier**: Integer. Defaults to 3. Defines what furnace the alloy can be made in.
* 0 = None
* 1 = Alloy Furnace
* 2 = Induction Furnace
* 3 = Both Alloy Furnace and Induction Furnace

**required**: Integer. Set by default in the recipe, unless the value is set. Can be as low as 1 and as high as 5. Determines how many inputs are required to make the alloy, which only needs to be defined specifically in special circumstances.

**input#**: JSON object. The "#" should be replaced in sequential numerical order for proper recipe population, starting at 1.  

**result**: JSON object (item). Defines the item to be outputted. NBT data is provided to the item regardless of what type of item it is. A "count" variable should not be defined, as the count is determined by the amount of material provided by the inputs. 

### Input# specific variables:

**auto**: Boolean. Set to true by default and can be used in any input. When true, the items associated with the element from Project Rankine tags (rankine:element/[element]) will be set as the items. Turn to false if you wish to use your own tags or items.

If auto is set to false, you must provide either a "tag" or an "item" JSON object for the recipe to be valid. You should not include a "count" variable.

**min**: Float. Set to 0 by default. Represents the lowest possible percentage for the input. Should be between 0 and 1. Decimal percentages (ex. 0.333, or 33.3%) should not be used as percentages are rounded.

**max**: Float. Set to 0 by default. Represents the highest possible percentage for the input. Should be between 0 and 1. Decimal percentages (ex. 0.333, or 33.3%) should not be used as percentages are rounded.

### Important Notes

Names for implemented elements can be found in the item tags in Project Rankine, under the elements subfolder. We have implemented all 118 normal elements from the Periodic Table and plan to add extended elements in a future update. Currently, the only extended element is Netherite, located at Atomic Number 156. Element stats change on a regular basis, and not all elements have fully implemented stats. To see the stats of a particular element, you can use the Element Indexer.

You may have functionally as many inputs as you want, but the number of actually required inputs is restricted to 5. A required input is defined as having a minimum greater than 0.

Inputs are on a per alloy basis, meaning that setting an item as an element for one alloy does not make that item have that element intrinsically for other alloys.

To determine percentages, each item inserted as an ingredient is assigned a material value. Below are how these values are assigned in sequential order. (Meaning, that if an item fits more than one requirement, the first requirement met in the list will be its material value.) 
Count will refer to the number of items in the itemstack.
* BlockItems or contains tag "forge:storage_blocks" or in registry name contains "block": 81 * count
* Contains tag "forge:ingots" or in registry name contains "ingot": 9 * count
* Contains tag "forge:nuggets" or in registry name contains "nugget": count
* Registry name contains "scrap": 2 * count
* All other items: 9 * count

The total amount of alloy produced by a furnace is the amount of material divided by 10. It cannot be less than 1 or greater than 64.

### Example: Making a Custom Gold Alloy using a fictional Emerald tag for the Induction Furnace
```
{
	  "type": "rankine:alloying",
	  "total": 7,
	  "tier": 2,
	  "required": 3,
	  "input1": {
		"element": "gold",
		"min": 0.86,
		"max": 0.91
	  },
	  "input2": {
		"element": "beryllium",
		"auto": false,
		"tag": "modid:emerald_and_emerald_block",
		"min": 0.04,
		"max": 0.09
	  },
	  "input3": {
		"element": "manganese",
		"min": 0.0,
		"max": 0.05
	  },
	  "input4": {
		"element": "nickel",
		"min": 0.0,
		"max": 0.05
	  },
	  "input5": {
		"element": "vanadium",
		"min": 0.0,
		"max": 0.05
	  },
	  "input6": {
		"element": "silicon",
		"min": 0.0,
		"max": 0.05
	  },
	  "input7": {
		"element": "phosphorus",
		"min": 0.0,
		"max": 0.05
	  },
	  "result": "rankine:alloy_ingot"
}
```

In this example, we made an alloy which requires 86-91% gold, 4-9% beryllium, and a third input. All remaining elements are set to have the same min-max (0-5%), but this can be set differently. 
The fictional tag, "modid:emerald_and_emerald_block", contains both the items for "minecraft:emerald" and "minecraft:emerald_block" so that both can be used in this alloying recipe. Typically, all outputs are set to be some form of ingot. The alloy_crafting recipe type can then be used to make the ingot into a different item, such as a gear, dust, plate, or other item.