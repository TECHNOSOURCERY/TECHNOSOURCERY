ServerEvents.recipes((events) => {
  // Steel Casing
  events.remove({output: "mekanism:steel_casing"})
  events.shaped(Item.of("mekanism:steel_casing"), ["ACA", "BDB", "ACA"], {
    A: {tag: "forge:plates/steel"},
    B: "thermal:signalum_glass",
    C: {tag: "forge:gears/invar"},
    D: "immersiveengineering:component_steel",
  })
})
