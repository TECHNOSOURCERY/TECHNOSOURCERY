ServerEvents.recipes((events) => {
  let remove = [
    "cyclic:crafter",
    "cyclic:uncrafter",
    "cyclic:harvester",
    "cyclic:forester",
    "cyclic:miner",
    "cyclic:collector_fluid",
    "cyclic:generator_item",
    "cyclic:generator_fluid",
    "cyclic:generator_food",
    "cyclic:generator_fuel",
    "cyclic:wireless_energy",
    "cyclic:wireless_item",
    "cyclic:wireless_fluid",
    "cyclic:experience_pylon",
  ]

  remove.forEach((item) => {
    events.remove({output: item})
  })
})
