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
        console.log("jVarLocalToLocalStorage : ", jVarLocalToLocalStorage);
        jFLocalToUrl({
            inBranchName: jVarLocalToLocalStorage.CustomerData.BranchName,
            inOrderNumber: jVarLocalOrderNumber
        });
    };
};

const jFLocalAfterSave = ({ inBranchName, inOrderNumber }) => {
    // window.location = "/Index.html";
    window.location = "../Settlement/Settlement.html";
    //  http://127.0.0.1:5500/public/Html/Cleaning/POS/Booking/Tabs/Settlement/Settlement.html
};

let jFLocalToUrl = ({ inBranchName, inOrderNumber }) => {
    let jVarLocalToUrl = "/public/Html/Cleaning/POS/Booking/Tabs/AddItem/AddItemCommon.html";
    console.log("inBranchName, inOrderNumber : ", inBranchName, inOrderNumber);
    const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    myUrlWithParams.searchParams.append("BranchName", inBranchName);
    myUrlWithParams.searchParams.append("OrderNumber", inOrderNumber);

    window.location.href = myUrlWithParams.href.replace("/AddItem/AddItemCommon", "/Settlement/Settlement");
};

export { StartFunc }