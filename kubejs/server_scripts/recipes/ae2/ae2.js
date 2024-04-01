ServerEvents.recipes((events) => {
  // ME Item Cell Housing
  events.remove({output: "ae2:item_cell_housing"})
  events.shaped(Item.of("ae2:item_cell_housing"), ["ABA", "B B", "CCC"], {
    A: "ae2:glass_cable",
    B: "immersiveengineering:wire_electrum",
    C: "mekanism:hdpe_sheet",
  })

  let remove = [
    "expatternprovider:infinity_cell",
    "expatternprovider:infinity_cell",
  ]

  remove.forEach((item) => {
    events.remove({output: item})
  })

  events.shaped(Item.of("ae2:controller"), ["AAB", "BBB", "BBB"], {
    A: "minecraft:stone",
    B: "minecraft:air",
  })
})
