let StartFunc = () => {
    let jVarLocalHtmlId = "CreateFolderInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        ItemName: jVarLocalFolderName
    };
};


let StartFuncId = () => {
    let jVarLocalHtmlRateId = "RateId"; 
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        ItemRate: jVarLocalFolderName
    };
};


export { StartFunc,StartFuncId };