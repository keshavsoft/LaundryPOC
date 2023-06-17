import { StartFunc as StartFuncAddlisteners } from "./Addlisteners.js";
import { StartFunc as StartFuncShowOnDom } from "./ShowOnDom.js";
import ApiConfigJson from '../../../../ApiConfig.json' assert {type: 'json'};
import { StartFunc as StartFuncAdminData } from "../../../../../AdminData/StartFunc.js";
import { StartFunc as StartFuncFormLoad } from "./FormLoad/StartFunc.js";
import { StartFunc as StartFuncAfterDomLoad } from "./AfterDomLoad/StartFunc.js";

let jVarCommonProjectName = ApiConfigJson.ProjectName;

const StartFunc = () => {
    // let jVarLocalFromAdmin = StartFuncAdminData();
    let jVarLocalFromAdmin = true;

    if (jVarLocalFromAdmin) {
        StartFuncFormLoad({ inProjectName: jVarCommonProjectName });

        StartFuncShowOnDom({ inProjectName: jVarCommonProjectName }).then(() => {
            // StartFuncAddlisteners({ inProjectName: jVarCommonProjectName });

            // StartFuncAfterDomLoad({ inProjectName: jVarCommonProjectName });
        });
    };
};

StartFunc();