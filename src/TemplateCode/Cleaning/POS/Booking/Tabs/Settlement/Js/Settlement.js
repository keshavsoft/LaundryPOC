import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";

const StartFunc = () => {
    // let jVarLocalFromAdmin = StartFuncAdminData();
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad();

        // StartFuncShowOnDom().then(() => {
        // });
    };
};

StartFunc();