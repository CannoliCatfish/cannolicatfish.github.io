---
id: beehive-oven-json-format
title: Beehive Oven JSON Format
---

A simple recipe type that allows use of the beehive oven to turn one block into another block. Therefore, a prerequisite for using this recipe type is that both the input and output are recognized as blocks.

### General variables:
**input**: JSON object (item). Defines the block to be inputted (placed in the beehive oven) by defining an "item" or "tag" variable in the object. This object currently uses item and item tags (as of v1.2.3), but will be changed in a future major update.

**result**: JSON object (block). Defines the block to be outputted by defining a "block" variable in the object.

### Example: Making a Bone Char Block from a Bone Block
```
{
  "type": "rankine:beehive_oven",
  "input": {
    "item": "minecraft:bone_block"
  },
  "result": {
    "block": "rankine:bone_char_block"
  }
}
```