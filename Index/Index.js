import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";

StartFuncFormLoad();

const StartFunc = async () => {
    StartFuncAddListeners();
};

StartFunc().then();