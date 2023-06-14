import { StartFunc as StartFuncToItemSerialButton } from "../../AddListenersRunTime/ToItemSerialButton.js";
import { StartFunc as StartFuncToAddOnButton } from "../../AddListenersRunTime/ToAddOnButton.js";

import { StartFunc as StartFuncDeleteFunc } from "../../../../LocalStorageFunc/ItemsInOrder/DeleteFunc.js";
import { StartFunc as StartFuncAddOnData } from "../../../../LocalStorageFunc/AddOnData/DeleteFunc.js";

import { StartFunc as StartFuncToOrderItems } from "../../ToOrderItems.js";
import { StartFunc as StartFuncToPcsButton } from "../../AddListenersRunTime/ToPcsButton.js";

let StartFunc = ({ inItemSerial, inClonedTemplateRow, inPcs }) => {
    let jVarLocalOrderItemsOrderItemsDeleteButtonClass = inClonedTemplateRow.querySelector(".OrderItemsDeleteButtonClass");
    jVarLocalOrderItemsOrderItemsDeleteButtonClass.dataset.itemserial = inItemSerial;
    jVarLocalOrderItemsOrderItemsDeleteButtonClass.addEventListener("click", jFLocalItemDeleteButtonClickFunc);

    let jVarLocalOrderItemsAddOnButtonClass = inClonedTemplateRow.querySelector(".OrderItemsAddOnButtonClass");
    jVarLocalOrderItemsAddOnButtonClass.dataset.itemserial = inItemSerial;
    jVarLocalOrderItemsAddOnButtonClass.addEventListener("click", StartFuncToAddOnButton);

    let jVarLocalOrderItemsSerialButtonClass = inClonedTemplateRow.querySelector(".OrderItemsSerialButtonClass");
    jVarLocalOrderItemsSerialButtonClass.value = inItemSerial;
    jVarLocalOrderItemsSerialButtonClass.addEventListener("click", StartFuncToItemSerialButton);

    let jVarLocalOrderItemsOrderItemsItemPcsClass = inClonedTemplateRow.querySelector(".OrderItemsItemPcsClass");
    jVarLocalOrderItemsOrderItemsItemPcsClass.value = inPcs;
    jVarLocalOrderItemsOrderItemsItemPcsClass.dataset.itemserial = inItemSerial;
    jVarLocalOrderItemsOrderItemsItemPcsClass.addEventListener("click", StartFuncToPcsButton);
};

const jFLocalItemDeleteButtonClickFunc = (event) => {
    let jVarLocalEvent = event;
    let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
    let jVarLocalDataset = jVarLocalCurrentTarget.dataset;
    let jVarLocalitemserial = jVarLocalDataset.itemserial;

    let jVarLocalFromDelete = StartFuncDeleteFunc({ inKey: jVarLocalitemserial });
    StartFuncAddOnData({ inKey: jVarLocalitemserial });

    if (jVarLocalFromDelete) {
        StartFuncToOrderItems();
    };
};

export { StartFunc };