let StartFunc = () => {
    let jVarLocalItemsInOrder = localStorage.getItem("OrderItemsToShow");
    let jVarLocaljVarLocalItemsInOrderJson = JSON.parse(jVarLocalItemsInOrder);

    return jVarLocaljVarLocalItemsInOrderJson;
};

export { StartFunc };