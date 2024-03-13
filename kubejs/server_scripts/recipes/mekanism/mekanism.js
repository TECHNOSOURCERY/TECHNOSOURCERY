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

  events.remove({
    input: [
      "mekanism:energized_smelter",
      "mekanism:crusher",
      "mekanism:enrichment_chamber",
      "mekanism:osmium_compressor",
      "mekanism:chemical_purification_chamber",
      "mekanism:combiner",
      "mekanism:chemical_injection_chamber",
      "mekanism:metallurgic_infuser",
      "mekanism:precision_sawmill",
    ],
  })

  // events.remove({mod: "mekanism", not: {output: /:.*meka_/}})

  //remove basic factory recipes
  events.remove({
    input: [
      "mekenism:basic_smelting_factory",
      "mekenism:basic_enriching_factory",
      "mekenism:basic_crushing_factory",
      "mekenism:basic_compressing_factory",
      "mekenism:basic_combining_factory",
      "mekenism:basic_injecting_factory",
      "mekenism:basic_purifying_factory",
      "mekenism:basic_infusing_factory",
      "mekenism:basic_sawing_factory",
    ],
  })
})
