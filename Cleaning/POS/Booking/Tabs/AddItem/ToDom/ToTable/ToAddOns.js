import { StartFunc as StartFuncFromAddOns } from "../../FromLocalStorage/FromAddOns.js";

let StartFunc = ({ inItemSerial }) => {
    let jVarLocalHtmlIdAddOnCardId = document.getElementById("AddOnCardId");
    let jVarLocalAddOnItemToAddOnClass = jVarLocalHtmlIdAddOnCardId.querySelector(".AddOnItemToAddOnClass");
    jVarLocalAddOnItemToAddOnClass.value = inItemSerial;

    let jVarLocalItemsTableBodyId = "AddOnTableBodyId";
    var jVarLocalHtmlTableBody = document.getElementById(jVarLocalItemsTableBodyId);

    jVarLocalHtmlTableBody.innerHTML = "";

    // let jVarLocalItemsInOrder = localStorage.getItem("AddOnData");
    // let jVarLocaljVarLocalItemsInOrderJson = JSON.parse(jVarLocalItemsInOrder);
    let jVarLocaljVarLocalItemsInOrderJson = StartFuncFromAddOns({ inItemSerial });
    let jVarLocalFilered = jFLocalFilterData({ inData: jVarLocaljVarLocalItemsInOrderJson, inItemSerial });

    jVarLocalFilered.forEach(
        LoopItem => {
            jFLocalInsertRow({
                inTableBodyId: jVarLocalHtmlTableBody,
                inAddOnService: LoopItem.AddOnService,
                inAddOnRate: LoopItem.AddOnRate,
                inAddOnItemSerial: LoopItem.AddOnItemSerial,
                inAddOnImageSerial: LoopItem.AddOnImageSerial
            });
        }
    );

    // jFLocalShowTotals({ inJsonData: Object.values(jVarLocaljVarLocalItemsInOrderJson) });
};

let jFLocalFilterData = ({ inData, inItemSerial }) => {
    let jVarLocaljVarLocalItemsInOrderJson = inData;

    let jVarLocalAddOnArray = Object.keys(jVarLocaljVarLocalItemsInOrderJson).map(
        key => {
            return {
                RowPk: key,
                ...jVarLocaljVarLocalItemsInOrderJson[key]
            };
        }
    );

    let jVarLocalFilered = jVarLocalAddOnArray.filter(element => {
        return element.AddOnItemSerial === inItemSerial;
    });

    return jVarLocalFilered;
};

let jFLocalInsertRow = ({ inTableBodyId, inAddOnService, inAddOnRate, inAddOnItemSerial, inAddOnImageSerial }) => {
    var table = inTableBodyId;
    let jVarLocalTableRowLength = table.rows.length

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = inAddOnItemSerial;
    cell2.innerHTML = jVarLocalTableRowLength + 1;
    cell3.innerHTML = inAddOnService;
    cell4.innerHTML = inAddOnRate;
    cell5.innerHTML = inAddOnImageSerial;
};

export { StartFunc };