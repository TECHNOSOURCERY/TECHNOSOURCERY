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

  // gold pickaxe
  events.remove({output: "minecraft:iron_pickaxe"})
  events.shaped(Item.of("minecraft:iron_pickaxe"), ["AAA", " B ", " B "], {
    A: "minecraft:gold_block",
    B: "forge:rods/wooden",
  })
})

  // diamond pickaxe
  events.remove({output: "minecraft:diamond_pickaxe"})
  events.shaped(Item.of("minecraft:diamond_pickaxe"), ["ACA", " B ", " B "], {
    A: "minecraft:logs",
    B: "forge:rods/wooden"
    C: "mekanism:enriched_diamond",
  })
})

// netherite pickaxe
  events.remove({output: "minecraft:netherite_pickaxe"})
onEvent("recipes", event => {
 event.custom({
   type: "minecraft_netherite_pickaxe",
   pattern: [" AAA ", "B   B", "  C  ", "  C  ", "  C  ",]
   {
   A: "minecraft:netherite_block"
   B: "armorplus:en_netherite"
   C: "enderio:infinity_rod"
   }
