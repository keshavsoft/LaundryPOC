import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";
const toNumbers = arr => arr.map(Number);

let StartFunc = ({ inEntry }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.ItemKey);
    let jVarLocalItemData = JSON.parse(jVarLocalFromLocalStorage);
    let jVarLocalKeys = Object.keys(jVarLocalItemData);
    let jVarLocalNumbers = toNumbers(jVarLocalKeys);
    const max = Math.max(...jVarLocalNumbers);

    jVarLocalItemData[max] = inEntry;

    StartFuncBulk({ inData: jVarLocalItemData });
};

export { StartFunc };