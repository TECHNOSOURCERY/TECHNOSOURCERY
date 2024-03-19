ServerEvents.recipes((events) => {
events.remove({output: 'minecraft:netherite_scrap'})

 // netherite scrap
 events.smelting({
    "result": "minecraft:netherite_ingot", 
    "ingredient": "2x mekanism:dirty_netherite_scrap"})

 // netherite scrap sand
  events.custom({
	"type":"mekanism:enriching",
	"input":{
		"ingredient":{
			"item":"bloodmagic:sand_netherite"
		}
	},
	"output":{
		"count":1,
		"item":"minecraft:netherite_scrap"
  }
 })
// enriched netherite
events.remove({output: 'armorplus:en_netherite'})
events.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: {
      amount: 80,
      tag: "mekanism:refined_obsidian",
    },
    itemInput: {
      ingredient: {
        tag: "forge:ingots/netherite",
      },
    },
    output: {
      amount: 8,
      item: "armorplus:en_netherite",
    },
  });
})
