let StartFunc = ({ inAddOnService, inAddOnRate, inAddOnItemSerial, inAddOnImageSerial }) => {
    jFLocalToLocalStorage({ inAddOnService, inAddOnRate, inAddOnItemSerial, inAddOnImageSerial });
};

let jFLocalToLocalStorage = ({ inItemName, inPcs, inRate, inAddOn, inTotal, inLocaltion, inDelivery }) => {
    let jVarLocalObjectToInsert = {
        ItemName: inItemName,
        Pcs: inPcs,
        Rate: inRate,
        AddOn: inAddOn,
        Total: inTotal,
        Localtion: inLocaltion,
        Delivery: inDelivery
    };

    try {
        let jVarLocalStorageKey = "OrderItemsToShow";

        let jVLocalFromLocalStorate = localStorage.getItem(jVarLocalStorageKey);
        let jVarLocalOrderItems = JSON.parse(jVLocalFromLocalStorate);
        let jVarLocalKeys = Object.keys(jVarLocalOrderItems);
        let jVarLocalNewKey = 1;

        if (jVarLocalKeys.length > 0) {
            const max = Math.max(...jVarLocalKeys);

            jVarLocalNewKey = max + 1;
        }

        jVarLocalOrderItems[jVarLocalNewKey] = jVarLocalObjectToInsert;

        localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalOrderItems));
    } catch (error) {
        console.log("error : ", error);
    };
};

export { StartFunc };