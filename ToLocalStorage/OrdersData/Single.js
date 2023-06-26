import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

const toNumbers = arr => arr.map(Number);

let StartFunc = ({ inEntry }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalParsed = JSON.parse(jVarLocalFromLocalStorage);

    let jVarLocalKeys = Object.keys(jVarLocalParsed);
    let max = 0;

    if (jVarLocalKeys.length > 0) {
        let jVarLocalNumbers = toNumbers(jVarLocalKeys);

        max = Math.max(...jVarLocalNumbers);
    };

    jVarLocalParsed[max + 1] = jFLocalPrepareData({ inEntry });

    jFLocalPrepareData({ inEntry });

    StartFuncBulk({ inData: jVarLocalParsed });

    return max + 1;
};

let jFLocalPrepareData = ({ inEntry }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
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