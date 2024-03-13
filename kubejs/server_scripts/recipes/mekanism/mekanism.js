ServerEvents.recipes((events) => {
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
})

ServerEvents.recipes((events) => {
  //remove basic factory recipes
  events.remove({
    output: [
      "mekenism:basic_smelting_factory",
      "mekenism:basic_enriching_factory",
      "mekenism:basic_crushing_factory",
    ],
  })
  events.remove({output: "mekenism:basic_compressing_factory"})
  events.remove({output: "mekenism:basic_combining_factory"})
  events.remove({output: "mekenism:basic_injecting_factory"})
  events.remove({output: "mekenism:basic_purifying_factory"})
  events.remove({output: "mekenism:basic_infusing_factory"})
  events.remove({output: "mekenism:basic_sawing_factory"})
  //remove advanced factory recipes
  events.remove({output: "mekenism:advanced_smelting_factory"})
  events.remove({output: "mekenism:advanced_enriching_factory"})
  events.remove({output: "mekenism:advanced_crushing_factory"})
  events.remove({output: "mekenism:advanced_compressing_factory"})
  events.remove({output: "mekenism:advanced_combining_factory"})
  events.remove({output: "mekenism:advanced_injecting_factory"})
  events.remove({output: "mekenism:advanced_purifying_factory"})
  events.remove({output: "mekenism:advanced_infusing_factory"})
  events.remove({output: "mekenism:advanced_sawing_factory"})
})
