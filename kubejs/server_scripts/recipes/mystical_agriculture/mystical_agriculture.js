ServerEvents.recipes((events) => {
  let remove = [
    "mysticalagriculture:inferium_furnace",
    "mysticalagriculture:prudentium_furnace",
    "mysticalagriculture:tertium_furnace",
    "mysticalagriculture:imperium_furnace",
    "mysticalagriculture:supremium_furnace",
    "mysticalagriculture:awakened_supremium_furnace",
  ]

  remove.forEach((item) => {
    events.remove({output: item})
  })
})
