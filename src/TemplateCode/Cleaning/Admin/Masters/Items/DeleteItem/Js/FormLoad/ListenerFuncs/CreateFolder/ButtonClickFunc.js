import { StartFunc as StartFuncPostFetch } from "./PostFetch.js";
import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";

let StartFunc = async ({ inProjectName }) => {
    if (jFLocalCheckBeforeFetch()) {
        let jVarLocalBodyData = StartFuncPreparePostData();
        let jVarLocalFolderName = jVarLocalBodyData.NewFolderName;

        let response = await StartFuncFetchFunc({
            inBodyData: jVarLocalBodyData,
            inProjectName
        });
        
        // StartFuncPostFetch({
        //     inFromFetch: response,
        //     inNewFolderName: jVarLocalFolderName
        // });
    };
};

let jFLocalCheckBeforeFetch = () => {
    let jVarLocalHtmlId = "CreateFolderInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value;

    if (jVarLocalFolderName === "") {
        jVarCreateFolderInputId.classList.add("is-invalid");
        jVarCreateFolderInputId.focus();
        return false;
    };

    return true;
};

let jFLocalPreparePostData = () => {
    let jVarLocalHtmlId = "CreateFolderInputId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        NewFolderName: jVarLocalFolderName
    };
};

let jFLocalCallFetch = async ({ inBodyData, inProjectName }) => {
    //  let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/ConfigAndDataFolders/CreateNew/CreateFolder`;

    let jFetchUrl = `/${inProjectName}/AdminApi/AsTree/Json/UserFolders/DataFolder/CreateNew/CreateFolder`;

    let jFetchBody = {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inBodyData)
    }

    let response = await fetch(jFetchUrl, jFetchBody);

    if (response.status === 200) {
        return await response.json();
    };
};

export { StartFunc };