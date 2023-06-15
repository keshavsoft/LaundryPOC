let StartFunc = () => {
    let jVarLocalHtmlId = "CreateFolderInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        ItemName: jVarLocalFolderName,
        ...jFLocalRate()
    };
};

let jFLocalRate = () => {
    let jVarLocalHtmlRateId = "RateId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = parseInt(jVarCreateFolderInputId.value.trim());

    return {
        DryWashRate: jVarLocalFolderName
    };
};

export { StartFunc };