// import { StartFunc as StartFuncToAddOns } from "../../ToDom/ToTable/ToAddOns.js";
import { StartFunc as StartFuncPrepareData } from "./PrepareData.js";
import { StartFunc as StartFuncCheckBeforeSave } from "./CheckBeforeSave.js";
import { StartFunc as StartFuncToLocalStorage } from "../../ToLocalStorage/ToAddOnData.js";

import { StartFunc as StartFuncToAddOns } from "../../ToDom/ToTable/AddOnSection/StartFunc.js";

let StartFunc = () => {
    let jVarLocalAddOnInsertButtonId = document.getElementById("AddOnInsertButtonId");

    jVarLocalAddOnInsertButtonId.addEventListener("click", jFLocalButtonClick);
};

let jFLocalButtonClick = (event) => {
    event.preventDefault();

    let jVarLocalFromCheck = StartFuncCheckBeforeSave();

    if (jVarLocalFromCheck) {
        let jVarLocalDataToInsert = StartFuncPrepareData();

        let jVarLocalNewPk = StartFuncToLocalStorage(jVarLocalDataToInsert);

        StartFuncToAddOns({ inItemSerial: jVarLocalDataToInsert.inAddOnItemSerial });
    };
};

export { StartFunc };