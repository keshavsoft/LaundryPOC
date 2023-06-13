import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/ItemsInOrder.js";

let StartFunc = () => {
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");

    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarFromLocalStorage = StartFuncFromLocalStorage();

    if (jVarLocaljVarLocalAddOnItemIdValue in jVarFromLocalStorage === false) {
        return false;
    };

    if (jFLocalForAddOnService() === false) return false;

    return true;
};

const jFLocalForAddOnService = () => {
    let jVarLocalHtmlId = "AddOnServiceId";
    let jVarLocalAddOnServiceId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalAddOnServiceIdValue = jVarLocalAddOnServiceId.value;

    if (jVarLocalAddOnServiceIdValue === "") {
        jVarLocalAddOnServiceId.classList.add("is-invalid");
        jVarLocalAddOnServiceId.focus();
        return false;
    } else {
        jVarLocalAddOnServiceId.classList.remove("is-invalid");
        jVarLocalAddOnServiceId.classList.add("is-valid");
    };
};

export { StartFunc };