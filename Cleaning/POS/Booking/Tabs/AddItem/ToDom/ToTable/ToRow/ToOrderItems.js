import { StartFunc as StartFuncFromAddOns } from "../../../FromLocalStorage/FromAddOns.js";

let StartFunc = ({ inItemSerial, inClonedTemplateRow }) => {
    let jVarLocalAddOnDataJson = StartFuncFromAddOns({ inItemSerial });
    console.log("aaaaaaaaaaa : ", jVarLocalAddOnDataJson);
    let jVarLocalOrderItemsOrderItemsAddOnClass = inClonedTemplateRow.querySelector(".OrderItemsAddOnClass");

    let jVarLocalAddOnRateArray = jVarLocalAddOnDataJson.map(element => element.AddOnRate);
    let sum = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);

    jVarLocalOrderItemsOrderItemsAddOnClass.innerHTML = `${jVarLocalAddOnRateArray.length}-${sum}`;
};

export { StartFunc };