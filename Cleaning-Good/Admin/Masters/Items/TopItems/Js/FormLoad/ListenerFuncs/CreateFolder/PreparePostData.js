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


let jFLocalPcs = () => {
    let jVarLocalHtmlPcsId = "PcsId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlPcsId);

    let jVarLocalFolderName = parseInt(jVarCreateFolderInputId.value.trim());

    return {
        Pcs: jVarLocalFolderName
    };
};

export { StartFunc };