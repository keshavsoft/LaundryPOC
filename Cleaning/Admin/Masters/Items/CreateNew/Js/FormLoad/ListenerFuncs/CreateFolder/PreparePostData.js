let StartFunc = () => {
    let jVarLocalHtmlId = "CreateFolderInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        ItemName: jVarLocalFolderName,
        ...jFLocalRate(),
        ...jFLocalPics()
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


let jFLocalPics = () => {
    let jVarLocalHtmlPicsId = "PicsId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlPicsId);

    let jVarLocalFolderName = parseInt(jVarCreateFolderInputId.value.trim());

    return {
        Pcs: jVarLocalFolderName
    };
};

export { StartFunc };