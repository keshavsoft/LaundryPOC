import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../ToLocalStorage/Items/Single.js";

let StartFunc = ({ inBodyData, inProjectName }) => {
    jFToLocalStorage({ inBodyData });
};

const jFToLocalStorage = ({ inBodyData }) => {
    StartFuncToLocalStorage({ inEntry: inBodyData });
};

let jFLocalToServer = async ({ inBodyData, inProjectName }) => {
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