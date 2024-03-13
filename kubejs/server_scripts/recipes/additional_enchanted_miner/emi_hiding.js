/**
 *
 * @param {Array<string>} itemsToHide
 * Takes a list of item ids and hides them from EMI.
 */
function emiHideItems(itemsToHide) {
    console.info("Hiding items from EMI...");
  
    // == Hide low-level enchants and modified potions
  
    let obj = {
      removed: [],
    };
  
    itemsToHide.forEach((i) => {
      obj.removed.push(`item:${i}`);
    });
  
    JsonIO.write("kubejs/assets/emi/index/stacks/emi_hidden_additional_enchanted_miner.json", obj);
  }
  
  let itemList = ["quarryplus:adv_quarry"];
  
  emiHideItems(itemList);