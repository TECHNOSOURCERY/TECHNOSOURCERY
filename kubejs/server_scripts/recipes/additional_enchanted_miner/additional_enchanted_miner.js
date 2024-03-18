ServerEvents.recipes((events) => {
  let remove = [
    "quarryplus:adv_quarry",
    "quarryplus:solid_fuel_quarry",
    "quarryplus:mining_well",
    "quarryplus:book_mover",
    "quarryplus:replacer",
    "quarryplus:adv_pump",
    "quarryplus:mini_quarry",
    "quarryplus:waterlogged_marker",
    "quarryplus:waterlogged_flex_marker",
    "quarryplus:waterlogged_marker16",
    "quarryplus:placer_plus",
    "quarryplus:remote_placer",
    "quarryplus:spawner_controller",
    "quarryplus:creative_generator",
    "quarryplus:replacer_module",
    "quarryplus:remove_bedrock_module",
    "quarryplus:filler_module",
    "quarryplus:repeat_tick_module",
  ]

  remove.forEach((item) => {
    events.remove({output: item})
  })
})
