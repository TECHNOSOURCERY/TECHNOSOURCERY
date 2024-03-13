// give items when player first log in
// プレイヤーが最初にワールドに入った際のアイテム付与

PlayerEvents.loggedIn((event) => {
  if (!event.player.stages.has("starting_items")) {
    event.player.stages.add("starting_items")
    event.player.inventory.clear()
    // set quest book
    event.player.give("ftbquests:book")
  }
})
