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

  JsonIO.write("kubejs/assets/emi/index/stacks/emi_hidden_cyclic.json", obj)
}

let itemList = [
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

emiHideItems(itemList)

if (itemList.length > 0) {
  itemList.forEach((i) => {
    global.foo.push(`${i}`)
  })
  jeiHideItems(global.foo)
}
