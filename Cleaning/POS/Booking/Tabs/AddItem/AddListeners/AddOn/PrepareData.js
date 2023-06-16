import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/ToAddOnData.js";

let StartFunc = () => {
    let jVarLocalAddOnServiceId = document.getElementById("AddOnServiceId");
    let jVarLocalAddOnRateId = document.getElementById("AddOnRateId");
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");
    let jVarLocalAddOnImageId = document.getElementById("AddOnImageId");

    let jVarLocalAddOnRateIdValue = jVarLocalAddOnRateId.value;
    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarLocaljVarLocalAddOnImageIdValue = jVarLocalAddOnImageId.value;

    var jVarLocalAddOnServiceIdtext = jVarLocalAddOnServiceId.options[jVarLocalAddOnServiceId.selectedIndex].text;

    // StartFuncToLocalStorage({
    //     inAddOnService: jVarLocalAddOnServiceIdtext,
    //     inAddOnRate: parseInt(jVarLocalAddOnRateIdValue),
    //     inAddOnItemSerial: parseInt(jVarLocaljVarLocalAddOnItemIdValue),
    //     inAddOnImageSerial: jVarLocaljVarLocalAddOnImageIdValue
    // });

    // return jVarLocaljVarLocalAddOnItemIdValue;

    return {
        inAddOnService: jVarLocalAddOnServiceIdtext,
        inAddOnRate: parseInt(jVarLocalAddOnRateIdValue),
        inAddOnItemSerial: parseInt(jVarLocaljVarLocalAddOnItemIdValue),
        inAddOnImageSerial: jVarLocaljVarLocalAddOnImageIdValue
    };
};

export { StartFunc };