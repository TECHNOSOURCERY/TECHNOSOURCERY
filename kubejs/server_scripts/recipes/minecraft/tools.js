ServerEvents.recipes((events) => {
  events.remove({output: ""})
  // wooden pickaxe
  events.remove({output: "minecraft:wooden_pickaxe"})
  events.shaped(Item.of("minecraft:wooden_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "minecraft:netherite_block",
    B: "minecraft:air",
    C: "#forge:stick/wooden",
  })
})
