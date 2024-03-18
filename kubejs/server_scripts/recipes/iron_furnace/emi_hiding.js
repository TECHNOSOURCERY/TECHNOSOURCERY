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
    "kubejs/assets/emi/index/stacks/emi_hidden_iron_furnace.json",
    obj
  )
}

let itemList = [
  "ironfurnaces:upgrade_iron",
  "ironfurnaces:upgrade_gold",
  "ironfurnaces:upgrade_diamond",
  "ironfurnaces:upgrade_emerald",
  "ironfurnaces:upgrade_obsidian",
  "ironfurnaces:upgrade_crystal",
  "ironfurnaces:upgrade_netherite",
  "ironfurnaces:upgrade_copper",
  "ironfurnaces:upgrade_silver2",
  "ironfurnaces:upgrade_gold2",
  "ironfurnaces:upgrade_iron2",
  "ironfurnaces:upgrade_obsidian2",
  "ironfurnaces:upgrade_silver",
]

emiHideItems(itemList)

if (itemList.length > 0) {
  itemList.forEach((i) => {
    global.foo.push(`${i}`)
  })
  jeiHideItems(global.foo)
}
