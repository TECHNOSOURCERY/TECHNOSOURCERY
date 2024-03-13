ServerEvents.recipes((events) => {
  events.remove({output: ""})
  // Machine Frame
  events.remove({output: "thermal:machine_frame"})
  events.shaped(Item.of("thermal:machine_frame"), ["AAA", "ABA", "AAA"], {
    A: "#forge:plates/steel",
    B: "immersiveengineering:light_engineering",
  })

  // Redstone Flux Coil
  events.remove({output: "thermal:rf_coil"})
  events.shaped(Item.of("thermal:rf_coil", 4), ["  A", " B ", "A  "], {
    A: "immersiveengineering:coil_lv",
    B: "immersiveengineering:component_electronic",
  })

  // Machine Upgrade
  events.remove({output: "thermal:upgrade_augment_1"})
  events.remove({output: "thermal:upgrade_augment_2"})
  events.remove({output: "thermal:upgrade_augment_3"})

  events.shaped(Item.of("thermal:upgrade_augment_1"), ["ABA", "C C", "ABA"], {
    A: "thermal:invar_plate",
    B: "#forge:glass",
    C: "#forge:gears/constantan",
  })

  events.shaped(Item.of("thermal:upgrade_augment_2"), ["ABA", "CDC", "ABA"], {
    A: "#forge:ingots/electrum",
    B: "thermal:steel_gear",
    C: "ae2:quartz_glass",
    D: "thermal:upgrade_augment_1",
  })
})
