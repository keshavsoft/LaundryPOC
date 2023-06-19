import { StartFunc as StartFuncAddToLocalStorageItemsInOrder } from "./ItemsTable/ItemsInOrder.js";
// import { StartFunc as StartFuncAddOnData } from "./AddOnData/Insert.js";

let StartFunc = () => {
    if ("ItemsInOrder" in localStorage === false) {
        localStorage.setItem("ItemsInOrder", JSON.stringify({}));
    };

    if ("AddOnData" in localStorage === false) {
        localStorage.setItem("AddOnData", JSON.stringify({}));
    };

    // StartFuncAddToLocalStorageItemsInOrder();
    // StartFuncAddOnData();
};

export { StartFunc }