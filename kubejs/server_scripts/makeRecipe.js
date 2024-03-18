function convertArray(arr) {
  const keys = "ABCDEFGHI"
  const mapping = {}
  const newArray = [""]
  let uniqueElementsIndex = {}

  // ユニークな要素を取得し、マッピングを作成
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in uniqueElementsIndex)) {
      let key = keys[Object.keys(uniqueElementsIndex).length]
      uniqueElementsIndex[arr[i]] = key
      mapping[key] = arr[i]
    }
  }

  // 新しい配列を作成
  for (let i = 0; i < arr.length; i++) {
    const groupIndex = parseInt(i / 3, 10) // groupIndexを整数除算で計算
    if (i % 3 === 0) {
      if (i != 0) {
        newArray[groupIndex] += "','"
      }
    }
    newArray[groupIndex] += uniqueElementsIndex[arr[i]]
  }

  return [newArray, mapping]
}

BlockEvents.rightClicked((events) => {
  let inv = events.block.inventory
  let blank = "storagedrawers:creative_vending_upgrade"

  let itemids = {
    id: [],
    remove: [],
    array: [],
    mapping: [],
    allids: [],
  }

  let i = 1
  let ininv = inv.allItems

  ininv.forEach((item) => {
    if (i === 4) {
      events.player.tell("recipe removal item " + item.item)
      itemids.remove.push(`${item.id}`)
    } else {
      if (item.id === blank) {
        itemids.id.push("minecraft:air")
      } else {
        itemids.id.push(`${item.id}`)
      }
    }
    itemids.allids.push(`${item.id}`)
    i++
  })

  let [newArray, mapping] = convertArray(itemids.id)
  itemids.mapping.push(mapping)
  itemids.array.push(newArray)
  JsonIO.write("kubejs/server_scripts/recipe.json", itemids)
})
