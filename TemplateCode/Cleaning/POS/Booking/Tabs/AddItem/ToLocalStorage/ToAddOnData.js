let StartFunc = ({ inAddOnService, inAddOnRate, inAddOnItemSerial, inAddOnImageSerial }) => {
    return jFLocalToLocalStorage({ inAddOnService, inAddOnRate, inAddOnItemSerial, inAddOnImageSerial });
};

let jFLocalToLocalStorage = ({ inAddOnService, inAddOnRate, inAddOnItemSerial, inAddOnImageSerial }) => {
    let jVarLocalObjectToInsert = {
        AddOnService: inAddOnService,
        AddOnRate: inAddOnRate,
        AddOnItemSerial: inAddOnItemSerial,
        AddOnImageSerial: inAddOnImageSerial
    };

    try {
        let jVarLocalStorageKey = "AddOnData";

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

        return jVarLocalNewKey;
    } catch (error) {
        console.log("error : ", error);
    };

    return 0;
};

export { StartFunc };