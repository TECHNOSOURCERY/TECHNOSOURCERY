//delete recipes from game

ServerEvents.recipes(event => {
    event.remove({ id: 'mekanism:teleporter' })
    event.remove({ id: 'mekanism:teleporter_frame' })
})