global.foo = []

/**
 *
 * @param {Array<string>} itemsToHide
 * Takes a list of item ids and hides them from jei.
 */

function jeiHideItems(itemsToHide) {
  let obj = {
    target: [],
  }

  itemsToHide.forEach((i) => {
    obj.target.push(`${i}`)
  })

  JsonIO.write("kubejs/assets/jei/jei_hidden_items.json", obj)
}

jeiHideItems(global.foo)
