ServerEvents.recipes((events) => {
  events.remove({output: ""})
  // wooden pickaxe
  events.remove({output: "minecraft:wooden_pickaxe"})
  events.shaped(Item.of("minecraft:wooden_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "minecraft:logs",
    B: "minecraft:air",
    C: "#forge:stick/wooden",
  })

  // iron pickaxe
  events.remove({output: "minecraft:iron_pickaxe"})
  events.shaped(Item.of("minecraft:iron_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "minecraft:iron_block",
    B: "minecraft:air",
    C: "#forge:stick/wooden",
  })

  // gold pickaxe
  events.remove({output: "minecraft:gold_pickaxe"})
  events.shaped(Item.of("minecraft:gold_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "minecraft:gold_block",
    B: "minecraft:air",
    C: "#forge:stick/wooden",
  })

  // diamond pickaxe
  events.remove({output: "minecraft:diamond_pickaxe"})
  events.shaped(Item.of("minecraft:diamond_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "minecraft:diamond_block",
    B: "minecraft:air",
    C: "#forge:stick/wooden",
  })


})
