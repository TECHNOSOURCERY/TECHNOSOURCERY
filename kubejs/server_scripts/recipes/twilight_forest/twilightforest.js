ServerEvents.recipes((event) => {
  //Dsable Uncrafting
  event.remove({type: "twilightforest:uncrafting"})
  event.remove({output: "twilightforest:uncrafting_table"})
})
