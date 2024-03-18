const fs = require("fs")

// JSONファイルのパス
const filePath = "kubejs/server_scripts/recipe.json"

// ファイルを非同期で読み込む
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("ファイルの読み込みエラー:", err)
    return
  }

  try {
    // JSON文字列をJSONオブジェクトにパース
    const jsonObject = JSON.parse(data)
    console.log(generateCode(jsonObject))
  } catch (error) {
    console.error("JSONパースエラー:", error)
  }
})

function generateCode(jsonData) {
  const removalItem = jsonData.remove[0]
  const pattern = jsonData.array[0][0].split("','")
  const mapping = jsonData.mapping[0]

  return `events.shaped(Item.of("${removalItem}"), ${JSON.stringify(
    pattern
  )}, ${JSON.stringify(mapping)})`
}
