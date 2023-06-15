import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/Items.js";

const StartFunc = async () => {
    let jVarLocalHtmlId = "LoadDataId";
    let jVarLocalLoadDataId = document.getElementById(jVarLocalHtmlId);
    jVarLocalLoadDataId.addEventListener("click", StartFuncLoad);
};

const StartFuncLoad = async () => {
    const dirHandle = await window.showDirectoryPicker();

    // for await (const entry of dirHandle.values()) {
    //     entry.getFile().then(PromiseData => {
    //         switch (PromiseData.name) {
    //             case "Items.json":
    //                 PromiseData.text().then(FileData => {
    //                     console.log(FileData);
    //                 });
    //                 break;

    //             default:
    //                 break;
    //         };
    //     });
    // };


    const ConfigHandle = await dirHandle.getFileHandle('Items.json');
    let jVarLocalgetFile = await ConfigHandle.getFile();

    let jVarLocalgetFileData = await jVarLocalgetFile.text();

    StartFuncToLocalStorage({ inData: JSON.parse(jVarLocalgetFileData) });
    // const AdminHandle = await ConfigHandle.getDirectoryHandle('Masters');
    // console.log("AdminHandle  : ", AdminHandle);

};


const StartFuncLoad_Keshav_15Jun = async () => {
    const dirHandle = await window.showDirectoryPicker();

    for await (const entry of dirHandle.values()) {
        entry.getFile().then(PromiseData => {
            switch (PromiseData.name) {
                case "Items.json":
                    PromiseData.text().then(FileData => {
                        console.log(FileData);
                    });
                    break;

                default:
                    break;
            };
        });
    };
};


StartFunc().then();