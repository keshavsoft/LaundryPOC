import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";
const toNumbers = arr => arr.map(Number);

let StartFunc = ({ inEntry }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.ItemKey);
    let jVarLocalItemData = JSON.parse(jVarLocalFromLocalStorage);
    let jVarLocalKeys = Object.keys(jVarLocalItemData);
    let jVarLocalNumbers = toNumbers(jVarLocalKeys);
    const max = Math.max(...jVarLocalNumbers);

    jVarLocalItemData[max + 1] = jFLocalPrepareData({ inEntry });

    jFLocalPrepareData({ inEntry });

    StartFuncBulk({ inData: jVarLocalItemData });

    return { KTF: true };
};

let jFLocalPrepareData = ({ inEntry }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.ItemKey);
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