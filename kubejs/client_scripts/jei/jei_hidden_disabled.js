const jei = {
  items: {hidden: [], disabled: []},
  fluids: {hidden: []},
  gases: {hidden: []},
  categories: {hidden: []},
  recipes: {hidden: []},
}

let jeiHideItems = JsonIO.read("kubejs/assets/jei/jei_hidden_items.json")
for (var i in jeiHideItems) {
  jei.items.hidden.push([i, jeiHideItems[i]])
}

jei.categories.hidden = [
  "twilightforest:uncrafting",
  "emi_loot:chest_loot",
  "emi_loot:block_drops",
]
