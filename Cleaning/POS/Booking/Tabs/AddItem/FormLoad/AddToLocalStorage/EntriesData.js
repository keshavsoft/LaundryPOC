import { StartFunc as StartFuncAddToLocalStorageItemsInOrder } from "./ItemsTable/ItemsInOrder.js";
import { StartFunc as StartFuncAddOnData } from "./AddOnData/Insert.js";

let StartFunc = () => {
   // StartFuncAddToLocalStorageItemsInOrder();
    StartFuncAddOnData();
};

export { StartFunc }