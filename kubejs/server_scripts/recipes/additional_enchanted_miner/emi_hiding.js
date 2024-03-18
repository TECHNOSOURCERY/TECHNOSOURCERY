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
    "kubejs/assets/emi/index/stacks/emi_hidden_additional_enchanted_miner.json",
    obj
  )
}

let itemList = [
  "quarryplus:adv_quarry",
  "quarryplus:solid_fuel_quarry",
  "quarryplus:mining_well",
  "quarryplus:book_mover",
  "quarryplus:replacer",
  "quarryplus:adv_pump",
  "quarryplus:mini_quarry",
  "quarryplus:waterlogged_marker",
  "quarryplus:waterlogged_flex_marker",
  "quarryplus:waterlogged_marker16",
  "quarryplus:placer_plus",
  "quarryplus:remote_placer",
  "quarryplus:spawner_controller",
  "quarryplus:creative_generator",
  "quarryplus:replacer_module",
  "quarryplus:remove_bedrock_module",
  "quarryplus:filler_module",
  "quarryplus:repeat_tick_module",
]

emiHideItems(itemList)

if (itemList.length > 0) {
  itemList.forEach((i) => {
    global.foo.push(`${i}`)
  })
  jeiHideItems(global.foo)
}
