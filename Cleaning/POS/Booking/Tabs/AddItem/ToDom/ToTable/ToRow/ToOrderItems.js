import { StartFunc as StartFuncFromAddOns } from "../../../FromLocalStorage/FromAddOns.js";
import { StartFunc as StartFuncToItemSerialButton } from "../AddListenersRunTime/ToItemSerialButton.js";
import { StartFunc as StartFuncToAddOnButton } from "../AddListenersRunTime/ToAddOnButton.js";
import { StartFunc as StartFuncDeleteFunc } from "../../../LocalStorageFunc/ItemsInOrder/DeleteFunc.js";
import { StartFunc as StartFuncToOrderItems } from "../ToOrderItems.js";
import { StartFunc as StartFuncClickFuncs } from "./Buttons/ClickFuncs.js";

let StartFunc = ({ inItemSerial, inClonedTemplateRow, inPcs }) => {
    let jVarLocalAddOnDataJson = StartFuncFromAddOns({ inItemSerial });

    let jVarLocalOrderItemsOrderItemsAddOnClass = inClonedTemplateRow.querySelector(".OrderItemsAddOnClass");

    let jVarLocalAddOnRateArray = jVarLocalAddOnDataJson.map(element => element.AddOnRate);
    let sum = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);

    jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML = `${jVarLocalAddOnRateArray.length}-${sum}`;

    StartFuncClickFuncs({ inItemSerial, inClonedTemplateRow, inPcs });
};

let jFLocalForButtons = ({ inItemSerial, inClonedTemplateRow, inPcs }) => {

    let jVarLocalOrderItemsOrderItemsDeleteButtonClass = inClonedTemplateRow.querySelector(".OrderItemsDeleteButtonClass");
    jVarLocalOrderItemsOrderItemsDeleteButtonClass.dataset.itemserial = inItemSerial;
    jVarLocalOrderItemsOrderItemsDeleteButtonClass.addEventListener("click", jFLocalItemDeleteButtonClickFunc)

    // let jVarLocalOrderItemsEditButtonClass = inClonedTemplateRow.querySelector(".OrderItemsEditButtonClass");
    // jVarLocalOrderItemsEditButtonClass.value = inItemSerial;
    // jVarLocalOrderItemsEditButtonClass.addEventListener("click", StartFuncToItemSerialButton);

    let jVarLocalOrderItemsAddOnButtonClass = inClonedTemplateRow.querySelector(".OrderItemsAddOnButtonClass");
    jVarLocalOrderItemsAddOnButtonClass.dataset.itemserial = inItemSerial;
    jVarLocalOrderItemsAddOnButtonClass.addEventListener("click", StartFuncToAddOnButton);

    let jVarLocalOrderItemsSerialButtonClass = inClonedTemplateRow.querySelector(".OrderItemsSerialButtonClass");
    jVarLocalOrderItemsSerialButtonClass.value = inItemSerial;
    jVarLocalOrderItemsSerialButtonClass.addEventListener("click", StartFuncToItemSerialButton);


    let jVarLocalOrderItemsOrderItemsItemPcsClass = inClonedTemplateRow.querySelector(".OrderItemsItemPcsClass");
    jVarLocalOrderItemsOrderItemsItemPcsClass.value = inPcs;


};

const jFLocalItemDeleteButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataset = jVarLocalCurrentTarget.dataset;
    let jVarLocalitemserial = jVarLocalDataset.itemserial;

    let jVarLocalFromDelete = StartFuncDeleteFunc({ inKey: jVarLocalitemserial });

    if (jVarLocalFromDelete) {
        StartFuncToOrderItems();
    };
};

const jFLocalItemEditButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    console.log("Edit", jVarLocalCurrentTarget);

};

export { StartFunc };