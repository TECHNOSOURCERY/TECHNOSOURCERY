ServerEvents.recipes((events) => {
  events.shaped(
    Item.of("more_immersive_wires:ae_coil"),
    ["ABA", "BCB", "ABA"],
    {
      A: "immersiveengineering:wire_steel",
      B: "#ae2:glass_cable",
      C: "immersiveengineering:hemp_fabric",
    }
  )
})
