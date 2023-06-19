import { StartFunc as StartFuncAddToLocalStorageWashTypesInsert } from "./WashTypesInsert.js";
import { StartFunc as StartFuncPullCustomers } from "./Customers/PullCustomers.js";
import { StartFunc as StartFuncItemsToLocalStorage } from "./Items/ItemsToLocalStorage.js";
import { StartFunc as StartFuncFactoriesToLocalStorage } from "./Factories/FactoriesToLocalStorage.js";

let StartFunc = () => {
    StartFuncAddToLocalStorageWashTypesInsert();
    StartFuncPullCustomers();
    // StartFuncItemsToLocalStorage();
    StartFuncFactoriesToLocalStorage();
};

export { StartFunc }