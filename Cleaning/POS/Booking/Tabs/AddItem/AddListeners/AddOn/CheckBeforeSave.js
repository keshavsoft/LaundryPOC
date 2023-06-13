import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/ItemsInOrder.js";

let StartFunc = () => {
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");

    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarFromLocalStorage = StartFuncFromLocalStorage();

    if (jVarLocaljVarLocalAddOnItemIdValue in jVarFromLocalStorage) {
        return true;
    };

    return false;
};

export { StartFunc };