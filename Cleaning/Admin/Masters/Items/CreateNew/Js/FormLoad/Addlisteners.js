import { StartFunc as StartFuncListenerFuncs } from "./ListenerFuncs/StartFunc.js";

let StartFunc = ({ inProjectName }) => {
    StartFuncListenerFuncs({ inProjectName });
};

export { StartFunc };