import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../ToLocalStorage/Customers/Single.js";

let StartFunc = ({ inBodyData }) => {
    jFToLocalStorage({ inBodyData });
};

const jFToLocalStorage = ({ inBodyData }) => {
    StartFuncToLocalStorage({ inEntry: inBodyData });
};

export { StartFunc };