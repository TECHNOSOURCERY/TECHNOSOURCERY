ItemEvents.modification((event) => {
  const increaseStackSize = [
    "minecraft:ender_pearl",
    "minecraft:bucket",
    "minecraft:snowball",
    "minecraft:honey_bottle",
    "minecraft:egg",
    "mekanism:cardboard_box",
    "/ironchest:.*_upgrade/",
    "/industrialforegoing:efficiency_addon/",
    "/industrialforegoing:speed_addon/",
    "/industrialforegoing:processing_addon/",
    "/industrialforegoing:range_addon/",
  ]

  event.modify(increaseStackSize, (item) => {
    item.maxStackSize = 64
  })
})
