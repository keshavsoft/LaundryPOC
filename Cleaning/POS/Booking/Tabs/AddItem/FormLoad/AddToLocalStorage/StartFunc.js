import { StartFunc as StartFuncMastersData } from "./MastersData.js";
import { StartFunc as StartFuncEntriesData } from "./EntriesData.js";

let StartFunc = () => {
    StartFuncMastersData();
    StartFuncEntriesData();
};

export { StartFunc }