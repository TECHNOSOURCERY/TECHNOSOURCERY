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

  //Basic Tier Installer
  events.remove({output: "mekanism:basic_tier_installer"})
  events.shaped(
    Item.of("mekanism:basic_tier_installer"),
    ["ABA", "CDC", "EBE"],
    {
      A: "mekanism:hdpe_sheet",
      B: "mekanism:basic_control_circuit",
      C: "thermal:steel_gear",
      D: "immersiveengineering:circuit_board",
      E: "thermal:lumium_plate",
    }
  )
  //Advanced Tier Installer
  events.remove({output: "mekanism:advanced_tier_installer"})
  events.shaped(
    Item.of("mekanism:advanced_tier_installer"),
    ["ABA", "CDC", "ABA"],
    {
      A: "mekanism:hdpe_sheet",
      B: "mekanism:advanced_control_circuit",
      C: "thermal:signalum_gear",
      D: "thermal:upgrade_augment_2",
    }
  )
  //Elite Tier Installer
  events.remove({output: "mekanism:elite_tier_installer"})
  events.shaped(
    Item.of("mekanism:elite_tier_installer"),
    ["ABA", "CDC", "ABA"],
    {
      A: "thermal:energy_cell",
      B: "mekanism:elite_control_circuit",
      C: "thermal:upgrade_augment_3",
      D: "ae2:engineering_processor",
    }
  )
  //Ultimate Tier Installer
  events.remove({output: "mekanism:ultimate_tier_installer"})
  events.custom({
    type: "extendedcrafting:shaped_table",
    pattern: ["ABBBA", "CDEFC", "GEHEG", "CFEDC", "ABBBA"],
    key: {
      A: {
        item: "thermal:xp_crystal",
      },
      B: {
        item: "mekanism:hdpe_sheet",
      },
      C: {
        item: "megacells:cell_component_4m",
      },
      D: {
        item: "minecraft:wither_skeleton_skull",
      },
      E: {
        item: "mekanism:ultimate_control_circuit",
      },
      F: {
        item: "thermal:upgrade_augment_3",
      },
      G: {
        item: "mekanism:alloy_atomic",
      },
      H: {
        item: "enderio:weather_crystal",
      },
    },
    result: {
      item: "mekanism:ultimate_tier_installer",
    },
  })

  //Basic Tier factory block
  for (var i = 0; i < 9; i++) {
    events.shapeless(Item.of(factory.tier1[i], 1), [
      factory.machines[i],
      "mekanism:basic_tier_installer",
    ])
  }
  //Advanced Tier factory block
  for (var i = 0; i < 9; i++) {
    events.shapeless(Item.of(factory.tier2[i], 1), [
      factory.tier1[i],
      "mekanism:advanced_tier_installer",
    ])
  }

  //Elite Tier factory block
  for (var i = 0; i < 9; i++) {
    events.shapeless(Item.of(factory.tier3[i], 1), [
      factory.tier2[i],
      "mekanism:elite_tier_installer",
    ])
  }

  //Ultimate Tier factory block
  for (var i = 0; i < 9; i++) {
    events.shapeless(Item.of(factory.tier4[i], 1), [
      factory.tier3[i],
      "mekanism:ultimate_tier_installer",
    ])
  }
})
