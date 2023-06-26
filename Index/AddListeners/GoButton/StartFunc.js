import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "GoButtonid";
    let jVarLocalLoadDataId = document.getElementById(jVarLocalHtmlId);

    jVarLocalLoadDataId.addEventListener("click", StartFuncButtonClickFunc);
};

export { StartFunc }