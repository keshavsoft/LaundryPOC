import CommonKeys from "../ToLocalStorage/Keys.json" assert { type: "json" };

const StartFunc = () => {
    let jVarLocalStorageKey = CommonKeys.Customers;
    let jVarLocalStorageSubKey = CommonKeys.CustomersSubKey;
    let jVarLocalDataNeeded = {};

    if (jVarLocalStorageKey in localStorage) {
        let jVarLocalCustomerData = localStorage.getItem(jVarLocalStorageKey);
        let jVarLocalCustomerDataAsJson = JSON.parse(jVarLocalCustomerData);

        jVarLocalDataNeeded = jVarLocalCustomerDataAsJson[jVarLocalStorageSubKey];
    };

    return jVarLocalDataNeeded;
};

export { StartFunc };