import { StartFunc as StartFuncBulk } from "./Bulk.js"

const StartFunc = ({ inPk }) => {
    let jVarLocalDataNeeded = StartFuncBulk();
    let jVarLocalReturnData = {};
    jVarLocalReturnData.KTF = false;

    if (inPk in jVarLocalDataNeeded) {
        jVarLocalReturnData.JsonData = jVarLocalDataNeeded[inPk];
        jVarLocalReturnData.KTF = true;
    };

    return jVarLocalReturnData;
};

export { StartFunc };