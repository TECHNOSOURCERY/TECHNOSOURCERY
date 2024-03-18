ServerEvents.recipes((events) => {
  let remove = [
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

  remove.forEach((item) => {
    events.remove({output: item})
  })
})
