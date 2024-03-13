/**
 *
 * @param {Array<string>} itemsToHide
 * Takes a list of item ids and hides them from EMI.
 */
function emiHideItems(itemsToHide) {
  console.info("Hiding items from EMI...")

  // == Hide low-level enchants and modified potions

  let obj = {
    removed: [],
  }

  itemsToHide.forEach((i) => {
    obj.removed.push(`item:${i}`)
  })

  JsonIO.write("kubejs/assets/emi/index/stacks/emi_hidden_mekanism.json", obj)
}

let itemList = [
  "mekanism:creative_chemical_tank",
  "mekanism:creative_fluid_tank",
  "mekenism:basic_smelting_factory",
  "mekenism:basic_enriching_factory",
  "mekenism:basic_crushing_factory",
  "mekenism:basic_compressing_factory",
  "mekenism:basic_combining_factory",
  "mekenism:basic_injecting_factory",
  "mekenism:basic_purifying_factory",
  "mekenism:basic_infusing_factory",
  "mekenism:basic_sawing_factory",
  "mekenism:advanced_smelting_factory",
  "mekenism:advanced_enriching_factory",
  "mekenism:advanced_crushing_factory",
  "mekenism:advanced_compressing_factory",
  "mekenism:advanced_combining_factory",
  "mekenism:advanced_injecting_factory",
  "mekenism:advanced_purifying_factory",
  "mekenism:advanced_infusing_factory",
  "mekenism:advanced_sawing_factory",
]

emiHideItems(itemList)
