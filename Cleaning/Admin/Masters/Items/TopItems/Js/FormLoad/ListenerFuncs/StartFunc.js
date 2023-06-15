import { StartFunc as StartFuncCreateFolder } from "./CreateFolder/StartFunc.js";

let StartFunc = ({ inProjectName }) => {
    StartFuncCreateFolder({ inProjectName });
};

export { StartFunc };