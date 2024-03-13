ServerEvents.recipes((events) => {
  // wooden pickaxe
  events.remove({output: "minecraft:wooden_pickaxe"})
  events.shaped(Item.of("minecraft:wooden_pickaxe"), ["AAA", " B ", " B "], {
    A: "minecraft:logs",
    B: "forge:rods/wooden",
  })
})

  // iron pickaxe
  events.remove({output: "minecraft:iron_pickaxe"})
  events.shaped(Item.of("minecraft:iron_pickaxe"), ["AAA", " B ", " B "], {
    A: "minecraft:iron_block",
    B: "forge:rods/wooden",
  })
})

  // wooden pickaxe
  events.remove({output: "minecraft:iron_pickaxe"})
  events.shaped(Item.of("minecraft:iron_pickaxe"), ["AAA", " B ", " B "], {
    A: "minecraft:gold_block",
    B: "forge:rods/wooden",
  })
})

  // wooden pickaxe
  events.remove({output: "minecraft:diamond_pickaxe"})
  events.shaped(Item.of("minecraft:diamond_pickaxe"), ["ACA", " B ", " B "], {
    A: "minecraft:logs",
    B: "forge:rods/wooden"
    C: "mekanism:enriched_diamond",
  })
})

