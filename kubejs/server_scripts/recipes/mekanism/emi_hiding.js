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
  "/mekanism:.*_bin/",
  // "/mekanism:.*_factory/",
  "/mekanismadditions:.*_spawn_egg/",
]

emiHideItems(itemList)

if (itemList.length > 0) {
  itemList.forEach((i) => {
    global.foo.push(`${i}`)
  })
  jeiHideItems(global.foo)
}
