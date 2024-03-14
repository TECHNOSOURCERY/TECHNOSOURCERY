ServerEvents.recipes((events) => {
  events.remove({
    output: "quarryplus:quarry",
    type: "quarryplus:workbench_recipe",
  })
  //Quarry Plus
  events.custom({
    id: "quarryplus:builtin_quarryplus",
    type: "quarryplus:workbench_recipe",
    ingredients: [
      {
        item: "minecraft:diamond",
        count: 100,
      },
      {
        item: "minecraft:gold_ingot",
        count: 100,
      },
      {
        item: "minecraft:iron_ingot",
        count: 100,
      },
      {
        item: "minecraft:redstone",
        count: 100,
      },
      {
        item: "minecraft:ender_pearl",
        count: 100,
      },
    ],
    energy: 1000000.0,
    showInJEI: true,
    result: {
      item: "quarryplus:quarry",
      count: 1,
    },
    conditions: [
      {
        type: "quarryplus:machine_enabled",
        value: "NewQuarry",
      },
    ],
  })
})
