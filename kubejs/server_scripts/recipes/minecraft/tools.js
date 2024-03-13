ServerEvents.recipes((events) => {
  events.remove({output: ""})
  // wooden pickaxe
  events.remove({output: "minecraft:wooden_pickaxe"})
  events.shaped(Item.of("minecraft:wooden_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "#minecraft:logs",
    B: "minecraft:air",
    C: "#forge:rods/wooden",
  })

  // iron pickaxe
  events.remove({output: "minecraft:iron_pickaxe"})
  events.shaped(Item.of("minecraft:iron_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "minecraft:iron_block",
    B: "minecraft:air",
    C: "#forge:rods/wooden",
  })

  // gold pickaxe
  events.remove({output: "minecraft:golden_pickaxe"})
  events.shaped(Item.of("minecraft:golden_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "minecraft:gold_block",
    B: "minecraft:air",
    C: "#forge:rods/wooden",
  })

  // diamond pickaxe
  events.remove({output: "minecraft:diamond_pickaxe"})
  events.shaped(Item.of("minecraft:diamond_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "minecraft:diamond_block",
    B: "minecraft:air",
    C: "#forge:rods/wooden",
  })

  // netherite pickaxe
  events.remove({output: 'minecraft:netherite_pickaxe'})
  events.custom({
      "type": "extendedcrafting:shaped_table",
      "pattern": [
          " AAA ",
          "B C B",
          "  C  ",
          "  C  ",
          "  C  "
      ],
      "key": {
          "A": {
              "item": "minecraft:netherite_block"
          },
          "B": {
              "item": "armorplus:en_netherite",
          },
          "C": {
              "item": "enderio:infinity_rod",
          }
      },
      "result": {
          "item": "minecraft:netherite_pickaxe"
      }
  })
})
