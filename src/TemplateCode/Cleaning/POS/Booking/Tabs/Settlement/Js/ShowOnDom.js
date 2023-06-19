import { StartFunc as StartFuncFromLocalStorage } from "./FromLocalStorage/Items.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = StartFuncFromLocalStorage();
    
    if (jVarLocalDataNeeded !== null) {
        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarLocalDataNeeded);
    };

    console.log("jVarLocalDataNeeded : ", jVarLocalDataNeeded);
};

export { StartFunc }