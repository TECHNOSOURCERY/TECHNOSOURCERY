ServerEvents.recipes((events) => {
  events.remove({output: ""})
  // Machine Frame
  events.remove({output: "minecraft:wooden_pickaxe"})
  events.shaped(Item.of("minecraft:wooden_pickaxe"), ["AAA", "BCB", "BCB"], {
    A: "minecraft:logs",
    B: "minecraft:air",
    C: "#forge:stick/wooden",
  })
})
