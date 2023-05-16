import { StartFunc as StartFuncWashTypeFill } from "./FillSelect/WashTypeFill.js";
import { StartFunc as StartFuncItemsToSelect } from "./FillSelect/ItemsToSelect.js";
import { StartFunc as StartFuncToDomToOrderItems } from "../ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncFactoriesToSelect } from "../FormLoad/FillSelect/FactoriesToSelect.js";
// import { StartFunc as StartFuncToOrderItems } from "../ToDom/ToTable/ToOrderItems.js";

let StartFunc = () => {
    // StartFuncTemplates();

    StartFuncWashTypeFill();
    StartFuncItemsToSelect();
    StartFuncFactoriesToSelect();

    StartFuncToDomToOrderItems();


    // StartFuncOrderItemsTableRow().then(() => {

    // });
};

export { StartFunc }