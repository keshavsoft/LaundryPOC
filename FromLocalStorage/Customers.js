import CommonKeys from "../ToLocalStorage/Keys.json" assert { type: "json" };

const StartFunc = () => {
    let jVarLocalStorageKey = CommonKeys.Customers;
    let jVarLocalStorageSubKey = CommonKeys.CustomersSubKey;

    let jVarLocalCustomerData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalCustomerDataAsJson = JSON.parse(jVarLocalCustomerData);

    let jVarLocalDataNeeded = jVarLocalCustomerDataAsJson[jVarLocalStorageSubKey];

    return jVarLocalDataNeeded;
};

export { StartFunc };