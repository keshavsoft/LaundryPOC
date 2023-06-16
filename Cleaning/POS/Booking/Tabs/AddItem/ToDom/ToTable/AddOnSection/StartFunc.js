import { StartFunc as StartFuncFromAddOns } from "../../../FromLocalStorage/FromAddOns.js";
import { StartFunc as StartFuncInsertRow } from "./InsertRow.js";

let StartFunc = ({ inItemSerial }) => {
    let jVarLocalHtmlIdAddOnCardId = document.getElementById("AddOnCardId");
    let jVarLocalAddOnItemToAddOnClass = jVarLocalHtmlIdAddOnCardId.querySelector(".AddOnItemToAddOnClass");
    jVarLocalAddOnItemToAddOnClass.value = inItemSerial;

    let jVarLocalItemsTableBodyId = "AddOnTableBodyId";
    var jVarLocalHtmlTableBody = document.getElementById(jVarLocalItemsTableBodyId);

    jVarLocalHtmlTableBody.innerHTML = "";

    let jVarLocaljVarLocalItemsInOrderJson = StartFuncFromAddOns({ inItemSerial });

    jVarLocaljVarLocalItemsInOrderJson.forEach(
        LoopItem => {
            StartFuncInsertRow({
                inTableBodyId: jVarLocalHtmlTableBody,
                inAddOnService: LoopItem.AddOnService,
                inAddOnRate: LoopItem.AddOnRate,
                inAddOnItemSerial: LoopItem.AddOnItemSerial,
                inAddOnImageSerial: LoopItem.AddOnImageSerial,
                inNewPk: LoopItem.RowPk
            });
        }
    );
};

let jFLocalInsertRow = ({ inTableBodyId, inAddOnService, inAddOnRate, inAddOnItemSerial, inAddOnImageSerial, inNewPk }) => {
    var table = inTableBodyId;
    let jVarLocalTableRowLength = table.rows.length

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow();

    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();
    var cell6 = row.insertCell();

    var newText1 = document.createTextNode(inAddOnItemSerial);
    var newText2 = document.createTextNode(jVarLocalTableRowLength + 1);
    var newText3 = document.createTextNode(inAddOnService);
    var newText4 = document.createTextNode(inAddOnRate);
    var newText5 = document.createTextNode(inAddOnImageSerial);

    let jVarLocalTemplate = document.getElementById("TemplateForDeleteButton");

    const clone = jVarLocalTemplate.content.cloneNode(true);
    let jVarLocalDeleteButton = clone.querySelector("button");
    jVarLocalDeleteButton.setAttribute("data-pk", inNewPk);

    cell1.appendChild(newText1);
    cell2.appendChild(newText2);
    cell3.appendChild(newText3);
    cell4.appendChild(newText4);
    cell5.appendChild(newText5);
    cell6.appendChild(clone);
};

export { StartFunc };