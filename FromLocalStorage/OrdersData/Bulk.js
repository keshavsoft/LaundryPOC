import CommonKeys from "../../ToLocalStorage/Keys.json" assert { type: "json" };

const StartFunc = () => {
    let jVarLocalStorageKey = CommonKeys.OrdersData;
    let jVarLocalDataNeeded = {};

    if (jVarLocalStorageKey in localStorage) {
        let jVarLocalCustomerData = localStorage.getItem(jVarLocalStorageKey);
        let jVarLocalCustomerDataAsJson = JSON.parse(jVarLocalCustomerData);

        jVarLocalDataNeeded = jVarLocalCustomerDataAsJson;
    };

    return jVarLocalDataNeeded;
};

export { StartFunc };