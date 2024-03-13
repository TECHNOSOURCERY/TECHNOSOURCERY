JEIEvents.hideItems((event) => {
    jei.items.hidden.forEach((hiddenItem) => {
        event.hide(hiddenItem);
    });
});