import { StartFunc as StartFuncNavBar } from "./NavBar/StartFunc.js";
import { StartFunc as StartFuncGoButton } from "./GoButton/StartFunc.js";

const StartFunc = async () => {
    StartFuncNavBar();
    StartFuncGoButton();
};

export { StartFunc }