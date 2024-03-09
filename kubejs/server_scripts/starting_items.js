PlayerEvents.loggedIn((event) => {
    if (!event.player.stages.has("starting_items")) {
        event.player.stages.add("starting_items");
        event.player.inventory.clear();
        // Give quest book to player
        event.player.give("ftbquests:book");
    }
});
