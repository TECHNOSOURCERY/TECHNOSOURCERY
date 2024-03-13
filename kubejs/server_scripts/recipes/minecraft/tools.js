ServerEvents.recipes((events) => {
  // wooden pickaxe
  events.remove({output: "minecraft:wooden_pickaxe"})
  events.shaped(Item.of("ae2:item_cell_housing"), ["AAA", " B ", " B "], {
    A: "minecrafft:logs",
    B: "forge:rods/wooden",
  })
})
