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

  JsonIO.write("kubejs/assets/emi/index/stacks/emi_hidden_others.json", obj)
}

let itemList = [
  "chiselsandbits:block_bit",
  "apotheosis:potion_charm",
  "/alexsmobs:spawn_egg_.*/",
  "/tombstone:scroll_.*/",
  "/guardvillagers:.*_spawn_egg/",
  "/quark:.*_spawn_egg/",
  "/aquaculture:.*_spawn_egg/",
  "/aether:.*_spawn_egg/",
  "/creeperoverhaul:.*_spawn_egg/",
  "/cataclysm:.*_spawn_egg/",
]

emiHideItems(itemList)

if (itemList.length > 0) {
  itemList.forEach((i) => {
    global.foo.push(`${i}`)
  })
  jeiHideItems(global.foo)
}
