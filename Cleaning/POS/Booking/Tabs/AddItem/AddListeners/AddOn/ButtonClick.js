import { StartFunc as StartFuncToAddOns } from "../../ToDom/ToTable/ToAddOns.js";
import { StartFunc as StartFuncToOrderItems } from "../../ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncPrepareData } from "./PrepareData.js";

let StartFunc = () => {
    let jVarLocalAddOnInsertButtonId = document.getElementById("AddOnInsertButtonId");

    jVarLocalAddOnInsertButtonId.addEventListener("click", jFLocalButtonClick);
};

let jFLocalButtonClick = () => {
    let jVarLocalItemSerial = StartFuncPrepareData();

    // StartFuncToOrderItems();
    StartFuncToAddOns({ inItemSerial: jVarLocalItemSerial });
    StartFuncToOrderItems();
};

export { StartFunc };