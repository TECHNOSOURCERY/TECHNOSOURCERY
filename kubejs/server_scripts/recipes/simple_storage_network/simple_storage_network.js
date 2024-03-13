ServerEvents.recipes((events) => {
  // Network Cable
  events.remove({output: "storagenetwork:kabel"})
  events.shaped(Item.of("storagenetwork:kabel", 16), ["ABA", " C ", "ABA"], {
    A: "#forge:plates/aluminum",
    B: "#forge:glass",
    C: "immersiveengineering:hemp_fabric",
  })

  // Storage Inventory
  events.remove({output: "storagenetwork:inventory"})
  events.shaped(Item.of("storagenetwork:inventory"), ["ABA", "BCB", "ABA"], {
    A: "#forge:plates/silver",
    B: "storagenetwork:kabel",
    C: "immersiveengineering:crate",
  })

  // Storage Request Table
  events.remove({output: "storagenetwork:request"})
  events.shaped(Item.of("storagenetwork:request"), ["ABA", "CDC", "ABA"], {
    A: "immersiveengineering:component_steel",
    B: "quark:crafter",
    C: "cyclic:hopper_gold",
    D: "storagenetwork:inventory",
  })
})
