ServerEvents.recipes((events) => {
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

  //TODO すべてのdustのクラフティングレシピを削除する
  let remove = [
    "thermal:fire_charge/signalum_ingot_4",
    "thermal:fire_charge/lumium_ingot_4",
    "thermal:fire_charge/bronze_ingot_4",
    "thermal:fire_charge/electrum_ingot_2",
    "thermal:fire_charge/invar_ingot_3",
    "thermal:fire_charge/constantan_ingot_2",
    "thermal:fire_charge/enderium_ingot_2",
    "redstone_arsenal:materials/flux_ingot_fire_charge_from_dust",
    "thermal:fire_charge/obsidian_glass_2",
    "thermal:fire_charge/signalum_glass_2",
    "thermal:fire_charge/lumium_glass_2",
    "thermal:fire_charge/enderium_glass_2",
    "thermal:signalum_dust_4",
    "thermal:bronze_dust_4",
    "immersiveengineering:crafting/electrum_mix",
    "thermal:invar_dust_3",
    "immersiveengineering:crafting/constantan_mix",
    "thermal:enderium_dust_2",
    "redstone_arsenal:materials/flux_dust",
  ]

  remove.forEach((recipeid) => {
    events.remove({id: recipeid})
  })
})
