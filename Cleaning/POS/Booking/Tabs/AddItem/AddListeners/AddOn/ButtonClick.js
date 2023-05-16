import { StartFunc as StartFuncToAddOns } from "../../ToDom/ToTable/ToAddOns.js";
import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/ToAddOnData.js";
import { StartFunc as StartFuncToOrderItems } from "../../ToDom/ToTable/ToOrderItems.js";

let StartFunc = () => {
    let jVarLocalAddOnInsertButtonId = document.getElementById("AddOnInsertButtonId");

    jVarLocalAddOnInsertButtonId.addEventListener("click", jFLocalButtonClick);
};

let jFLocalButtonClick = () => {
    let jVarLocalItemSerial = jFLocalPrepareData();

    // StartFuncToOrderItems();
    StartFuncToAddOns({ inItemSerial: jVarLocalItemSerial });
    StartFuncToOrderItems();

};

let jFLocalPrepareData = () => {
    let jVarLocalAddOnServiceId = document.getElementById("AddOnServiceId");
    let jVarLocalAddOnRateId = document.getElementById("AddOnRateId");
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");
    let jVarLocalAddOnImageId = document.getElementById("AddOnImageId");

    let jVarLocalAddOnRateIdValue = jVarLocalAddOnRateId.value;
    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarLocaljVarLocalAddOnImageIdValue = jVarLocalAddOnImageId.value;

    var jVarLocalAddOnServiceIdtext = jVarLocalAddOnServiceId.options[jVarLocalAddOnServiceId.selectedIndex].text;

    StartFuncToLocalStorage({
        inAddOnService: jVarLocalAddOnServiceIdtext,
        inAddOnRate: parseInt(jVarLocalAddOnRateIdValue),
        inAddOnItemSerial: parseInt(jVarLocaljVarLocalAddOnItemIdValue),
        inAddOnImageSerial: jVarLocaljVarLocalAddOnImageIdValue
    });

    return jVarLocaljVarLocalAddOnItemIdValue;
};

export { StartFunc };