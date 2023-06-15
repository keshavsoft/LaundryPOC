import { StartFunc as StartFuncFromAddOns } from "../../FromLocalStorage/FromAddOns.js";

let StartFunc = ({ inItemSerial }) => {
    let jVarLocalHtmlIdAddOnCardId = document.getElementById("AddOnCardId");
    let jVarLocalAddOnItemToAddOnClass = jVarLocalHtmlIdAddOnCardId.querySelector(".AddOnItemToAddOnClass");
    jVarLocalAddOnItemToAddOnClass.value = inItemSerial;

    let jVarLocalItemsTableBodyId = "AddOnTableBodyId";
    var jVarLocalHtmlTableBody = document.getElementById(jVarLocalItemsTableBodyId);

    jVarLocalHtmlTableBody.innerHTML = "";

    let jVarLocaljVarLocalItemsInOrderJson = StartFuncFromAddOns({ inItemSerial });
    // let jVarLocalFilered = jFLocalFilterData({ inData: jVarLocaljVarLocalItemsInOrderJson, inItemSerial });
    console.log("aaaaaaaa : ", jVarLocaljVarLocalItemsInOrderJson);

    jVarLocaljVarLocalItemsInOrderJson.forEach(
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
    var row = table.insertRow();

    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    var cell4 = row.insertCell();
    var cell5 = row.insertCell();

    // cell1.innerHTML = inAddOnItemSerial;
    // cell2.innerHTML = jVarLocalTableRowLength + 1;


    // cell3.innerHTML = inAddOnService;
    // cell4.innerHTML = inAddOnRate;
    // cell5.innerHTML = inAddOnImageSerial;

    var newText1 = document.createTextNode(inAddOnItemSerial);
    var newText2 = document.createTextNode(jVarLocalTableRowLength + 1);
    var newText3 = document.createTextNode(inAddOnService);
    var newText4 = document.createTextNode(inAddOnRate);
    var newText5 = document.createTextNode(inAddOnImageSerial);

    cell1.appendChild(newText1);
    cell2.appendChild(newText2);
    cell3.appendChild(newText3);
    cell4.appendChild(newText4);
    cell5.appendChild(newText5);
};

export { StartFunc };