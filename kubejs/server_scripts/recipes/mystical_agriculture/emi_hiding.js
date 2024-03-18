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

  JsonIO.write(
    "kubejs/assets/emi/index/stacks/emi_hidden_mystical_agriculture.json",
    obj
  )
}

let itemList = [
  "mysticalagriculture:inferium_furnace",
  "mysticalagriculture:prudentium_furnace",
  "mysticalagriculture:tertium_furnace",
  "mysticalagriculture:imperium_furnace",
  "mysticalagriculture:supremium_furnace",
  "mysticalagriculture:awakened_supremium_furnace",
]

emiHideItems(itemList)

if (itemList.length > 0) {
  itemList.forEach((i) => {
    global.foo.push(`${i}`)
  })
  jeiHideItems(global.foo)
}
