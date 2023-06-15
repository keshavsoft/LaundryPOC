let StartFunc = ({ inFromFetch, inNewFolderName }) => {
    if (Array.isArray(inFromFetch)) {
        jFLocalPostFetchAsArray({ inFromFetch, inNewFolderName });
    } else {
        jFLocalPostFetchNotArray({ inFromFetch, inNewFolderName });
    };
};

let jFLocalPostFetchNotArray = ({ inFromFetch, inNewFolderName }) => {
    console.log("aaaaaaaaaa : ", inFromFetch);
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);

    if (inFromFetch.ConfigFolderCreated) {
        myUrlWithParams.searchParams.append("ConfigFolderCreated", true);
    };

    window.location.href = myUrlWithParams.href;
};

let jFLocalPostFetchAsArray = ({ inFromFetch, inNewFolderName }) => {
    const myUrlWithParams = new URL(`${window.location.origin}${window.location.pathname}`);

    let jVarLocalFromConfig = inFromFetch.find(element => {
        return element.ConfigFolderCreated
    });

    if (jVarLocalFromConfig === undefined === false) {
        myUrlWithParams.searchParams.append("ConfigFolderCreated", true);
    };

    let jVarLocalFromData = inFromFetch.find(element => {
        return element.DataFolderCreated
    });

    if (jVarLocalFromData === undefined === false) {
        myUrlWithParams.searchParams.append("DataFolderCreated", true);
    };

    let jVarLocalAnyCreated = inFromFetch.filter(element => {
        return element.KTF
    });

    if (jVarLocalAnyCreated.length > 0) {
        myUrlWithParams.searchParams.append("NewFolderName", inNewFolderName);
        window.location.href = myUrlWithParams.href;
    };
};

export { StartFunc };