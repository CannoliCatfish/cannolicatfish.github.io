# Alloy Crafting JSON Format

Alloy Crafting recipes are used to produce outputs in the crafting table which pass data of the alloy from the ingredients to the result.
It functions just as a normal crafting recipe, except it contains two additional arguments.

*inherit*: Boolean. Single-time use in the recipe. When set to true the recipe will take the alloy information from the ingredients and add it to the output. It also adds the requirement that all of the ingredients with alloy data used in the recipe must have the same alloy data ("composition"). If not defined, the boolean is set to false.

*alloyData*: String. Can be used in any key or the result. Used to define a specific alloy composition which is either required if it is an ingredient or will be added to the output of the recipe. This can be used in multiple "key" ingredients and does not have to be the same (when used in this manner, inherit should be set to false.)

This can be used in two main ways:
1. Adding a recipe which "inherits" the alloy information of the ingredients (ex. making an Alloy Tool)
2. Adding a recipe which requires a specific alloy composition (ex. making a machine or block require a specific composition alloy)

**Example 1**: Making a Bronze Pickaxe that inherits its composition from Bronze Alloy

    {
      "type": "rankine:alloy_crafting",
      "inherit": "true",
      "pattern": [
      "###",
      " t ",
      " t "
      ],
      "key": {
        "#": {
            "item": "rankine:bronze_alloy"
            },
        "t": {
            "tag": "forge:rods/wooden"
            }
      },
      "result": {
          "item": "rankine:bronze_pickaxe",
          "count": 1        
       }
    }

**Example 2**: Making the Evaporation Tower require a specific composition of Cupronickel Alloy

    {
      "type": "rankine:alloy_crafting",
      "pattern": [
      "ccc",
      "sms",
      "chc"
      ],
      "key": {
        "m": {
            "item": "minecraft:magma_block"
            },
        "s": {
            "item": "minecraft:cauldron"
            },
        "c": {
            "item": "rankine:cupronickel_alloy",
            "alloyData": "90Cu-10Ni",
            },
        "t": {
            "item": "minecraft:hopper"
            }
      },
      "result": {
          "item": "rankine:evaporation_tower",
          "count": 1        
       }
    }
