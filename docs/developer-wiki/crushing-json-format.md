---
id: crushing-json-format
title: Crushing JSON Format
---

Crushing recipes are used to produce outputs in the Piston Crusher and its affiliates, as well as influence the result of using a hammer on a block in the world.

For reference the harvest levels and output levels can be summarized as:
1: Flint
2: Bronze
3: Invar
4: Steel
5: Superalloy
6: Advanced

**input**: Item or Tag. Represents the item(s) that will be crushed. Tags will only work properly if all members of the tag do not have another crushing recipe that they are apart of.

**output#**: Item. There are 6 outputs ("output1","output2","output3","output4","output5","output6"). If an output is not filled out, then the output is skipped for that harvest level.

**chance**: Float. Set to 0 by default. Represents the chance for the item to drop from crushing if the harvest level is equal or greater than the output level.

**additional**: Float. Set to 0 by default. Represents the additional chance for the item to drop from crushing if the harvest level matches the output level. Setting "additional" while not setting "chance" would make an output that is effectively restricted to a certain harvest level.

**alloyData**: String. Can be used in any output. Used to define a specific alloy composition that is a part of the item.

###Example : Horneblende Andesite
```
 {
  "type": "rankine:crushing",
  "input": {
    "item": "rankine:hornblende_andesite"
  },
  "output1": {
    "item": "minecraft:cobblestone",
    "chance": 0.8,
    "additional": 0.2
  },
  "output2": {
    "item": "rankine:plagioclase_feldspar",
    "chance": 0.4,
    "additional": 0.15
  },
  "output3": {
    "item": "rankine:amphibole",
    "chance": 0.20,
    "additional": 0.10
  },
  "output4": {
    "item": "rankine:zircon",
    "chance": 0.10,
    "additional": 0.10
  },
  "output5": {
    "item": "rankine:ilmenite",
    "chance": 0.05,
    "additional": 0.05
  },
  "output6": {
    "item": "rankine:garnet",
    "chance": 0.02
  }
 }
```