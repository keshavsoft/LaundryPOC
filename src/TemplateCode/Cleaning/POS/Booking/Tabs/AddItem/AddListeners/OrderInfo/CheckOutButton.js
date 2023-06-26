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

    if (jVarLocalOrderNumber > 0) {
        jFLocalAfterSave();
    };
};

const jFLocalAfterSave = () => {
    // window.location = "/Index.html";
    window.location = "../Settlement/Settlement.html";
    //  http://127.0.0.1:5500/public/Html/Cleaning/POS/Booking/Tabs/Settlement/Settlement.html
};

export { StartFunc }