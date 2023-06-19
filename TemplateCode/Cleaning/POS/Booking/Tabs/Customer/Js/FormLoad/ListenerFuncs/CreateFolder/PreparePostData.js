let StartFunc = () => {
    let jVarLocalHtmlId = "CustomerNameId";
    let jVarCreateCustomerInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateCustomerInputId.value.trim();

    return {
        ItemName: jVarLocalFolderName,
        ...jFLocalCity(),
        ...jFLocalMobile()
    };
};

let jFLocalCity = () => {
    let jVarLocalHtmlRateId = "CityId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        DryWashRate: jVarLocalFolderName
    };
};


let jFLocalMobile = () => {
    let jVarLocalHtmlMobileId = "MobileId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlMobileId);

    let jVarLocalFolderName = parseInt(jVarCreateFolderInputId.value.trim());

    return {
        Pcs: jVarLocalFolderName
    };
};

export { StartFunc };