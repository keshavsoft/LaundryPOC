import { StartFunc as StartFuncItemsInOrder } from "../../LocalStorageFunc/ItemsInOrder/ReturnData.js";
import { StartFunc as StartFuncAddOnData } from "../../LocalStorageFunc/AddOnData/ReturnData.js";
import { StartFunc as StartFuncOrdersData } from "../../../../../../../../../ToLocalStorage/OrdersData/Single.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "CheckOutId";
    let jVarLocalCheckOutId = document.getElementById(jVarLocalHtmlId);

    jVarLocalCheckOutId.addEventListener("click", jFLocalButtonClickFunc)
};

const jFLocalButtonClickFunc = () => {
    let jVarLocalOrderNumberId = document.getElementById("OrderNumberId");
    //let jVarLocalOrderNumber = jVarLocalOrderNumberId.innerHTML;

    // let jVarLocalToLocalStorage = {};
    // jVarLocalToLocalStorage[jVarLocalOrderNumber] = {};
    // jVarLocalToLocalStorage[jVarLocalOrderNumber].ItemsInOrder = StartFuncItemsInOrder();
    // jVarLocalToLocalStorage[jVarLocalOrderNumber].AddOnData = StartFuncAddOnData();

    let jVarLocalToLocalStorage = {};
    jVarLocalToLocalStorage.ItemsInOrder = StartFuncItemsInOrder();
    jVarLocalToLocalStorage.AddOnData = StartFuncAddOnData();

    let jVarLocalOrderNumber = StartFuncOrdersData({ inEntry: jVarLocalToLocalStorage });
    jVarLocalOrderNumberId.innerHTML = jVarLocalOrderNumber;

    // localStorage.setItem("OrdersData", JSON.stringify(jVarLocalToLocalStorage));
};

export { StartFunc }