ServerEvents.recipes((events) => {
    // ME Item Cell Housing
    events.remove({ output: "ae2:item_cell_housing" });
    events.shaped(Item.of("ae2:item_cell_housing"), 
        ["ABA",
         "B B",
         "CCC"], {
        A: "ae2:quartz_glass",
        B: "immersiveengineering:wire_electrum",
        C: "mekanism:hdpe_sheet",
    });
});
