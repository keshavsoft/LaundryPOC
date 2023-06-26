import { StartFunc as StartFuncOrdersData } from "../../../../../../../../../ToLocalStorage/OrdersData/Single.js";
import { StartFunc as StartFuncPrepareData } from "./PrepareData/StartFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "CheckOutId";
    let jVarLocalCheckOutId = document.getElementById(jVarLocalHtmlId);

    jVarLocalCheckOutId.addEventListener("click", jFLocalButtonClickFunc)
};

const jFLocalButtonClickFunc = () => {
    let jVarLocalOrderNumberId = document.getElementById("OrderNumberId");

    let jVarLocalToLocalStorage = StartFuncPrepareData();
    
    let jVarLocalOrderNumber = StartFuncOrdersData({ inEntry: jVarLocalToLocalStorage });
    
    jVarLocalOrderNumberId.innerHTML = jVarLocalOrderNumber;
};

export { StartFunc }