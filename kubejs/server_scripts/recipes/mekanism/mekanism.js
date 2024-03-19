ServerEvents.recipes((events) => {
  //remove items
  let remove = []

  remove.forEach((item) => {
    events.remove({output: item})
  })
  events.remove({output: "/mekanism:.*_factory/"})

  // Steel Casing
  events.remove({output: "mekanism:steel_casing"})
  events.shaped(Item.of("mekanism:steel_casing"), ["ACA", "BDB", "ACA"], {
    A: {tag: "forge:plates/steel"},
    B: "thermal:signalum_glass",
    C: {tag: "forge:gears/invar"},
    D: "immersiveengineering:component_steel",
  })

  // Metallurgic Infuser
  events.remove({output: "mekanism:metallurgic_infuser"})
  events.shaped(
    Item.of("mekanism:metallurgic_infuser"),
    ["CBC", "ADA", "CBC"],
    {
      A: {tag: "forge:gems/ruby"},
      B: "ironfurnaces:iron_furnace",
      C: {tag: "forge:ingots/osmium"},
      D: "mekanism:steel_casing",
    }
  )

  //Basic Tier
  for (var i = 0; i < 9; i++) {
    events.shapeless(Item.of(factory.tier1[i], 1), [
      factory.machines[i],
      "mekanism:basic_tier_installer",
    ])
  }
  //Advanced Tier
  for (var i = 0; i < 9; i++) {
    events.shapeless(Item.of(factory.tier2[i], 1), [
      factory.tier1[i],
      "mekanism:advanced_tier_installer",
    ])
  }

    //Elite Tier
    for (var i = 0; i < 9; i++) {
      events.shapeless(Item.of(factory.tier3[i], 1), [
        factory.tier2[i],
        "mekanism:elite_tier_installer",
      ])
    }

      //Ultimate Tier
  for (var i = 0; i < 9; i++) {
    events.shapeless(Item.of(factory.tier4[i], 1), [
      factory.tier3[i],
      "mekanism:ultimate_tier_installer"
    ])
  }
})
