import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";
import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/StartFunc.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    // StartFuncShowAlerts();
    StartFuncAddlisteners();
};

export { StartFunc };
