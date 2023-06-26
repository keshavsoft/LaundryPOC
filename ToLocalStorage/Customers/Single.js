import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

const toNumbers = arr => arr.map(Number);

let StartFunc = ({ inEntry }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.Customers);
    let jVarLocalParsed = JSON.parse(jVarLocalFromLocalStorage);

    let jVarLocalItemData = jVarLocalParsed[CommonKeys.CustomersSubKey];

    let jVarLocalKeys = Object.keys(jVarLocalItemData);
    ;
    let jVarLocalNumbers = toNumbers(jVarLocalKeys);
    const max = Math.max(...jVarLocalNumbers);

    jVarLocalItemData[max + 1] = jFLocalPrepareData({ inEntry });

    jFLocalPrepareData({ inEntry });

    StartFuncBulk({ inData: jVarLocalParsed });

    return { KTF: true };
};

let jFLocalPrepareData = ({ inEntry }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.Customers);
    let jVarLocalItemData = JSON.parse(jVarLocalFromLocalStorage);
    let jVarLocalvalues = Object.values(jVarLocalItemData);
    let jVarLocalPkArray = jVarLocalvalues.map(element => element.pk);
    const max = Math.max(...jVarLocalPkArray);

    return {
        ...inEntry,
        pk: max + 1
    };
};

export { StartFunc };