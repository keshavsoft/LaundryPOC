import { StartFuncs as StartFuncItemButtonClick } from "./AddItem/AddItemButton.js";
import { StartFunc as StartFuncAddOn } from "./AddOn/ButtonClick.js";
import { StartFunc as StartFuncOnChange } from "./OnChange/StartFunc.js";
import { StartFunc as StartFuncMainScreen } from "./MainScreen/MenuIdCollapse.js";
import { StartFunc as StartFuncOrderInfo } from "./OrderInfo/CheckOutButton.js";

let StartFunc = () => {
    StartFuncOrderInfo();
    StartFuncItemButtonClick();
    StartFuncAddOn();
    StartFuncOnChange();
    StartFuncMainScreen();
};

export { StartFunc };