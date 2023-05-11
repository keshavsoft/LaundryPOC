import { StartFunc as StartFuncOrderItemsTableRow } from "../../FetchFuncs/FetchHtml/OrderItemsTableFooter.js";

let StartFunc = async () => {
    let jVarLocalTemplateForOrderItemsTableRow = document.getElementById("ItemsTableFootId");
    let jVarLocalFromTemplate = await StartFuncOrderItemsTableRow();
    
    if (jVarLocalFromTemplate.KTF) {
        jVarLocalTemplateForOrderItemsTableRow.innerHTML = jVarLocalFromTemplate.HtmlString;
    };
};

export { StartFunc };