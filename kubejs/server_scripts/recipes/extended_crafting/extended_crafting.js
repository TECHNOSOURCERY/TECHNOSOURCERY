ServerEvents.recipes((events) => {
  let remove = [
    "extendedcrafting:black_iron_ingot",
    "extendedcrafting:ender_ingot",
    "extendedcrafting:redstone_ingot",
  ]

  remove.forEach((item) => {
    events.remove({output: item, type: "minecraft:crafting"})
  })
})
