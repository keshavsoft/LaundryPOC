const StartFunc = async () => {
    let jVarLocalHtmlId = "LoadDataId";
    let jVarLocalLoadDataId = document.getElementById(jVarLocalHtmlId);
    jVarLocalLoadDataId.addEventListener("click", StartFuncLoad);
};

const StartFuncLoad = async () => {
    const dirHandle = await window.showDirectoryPicker();

    // const newFileHandle = await dirHandle.getFileHandle('Items.json', { create: true });

    // console.log("aaaaa ", newFileHandle.text());

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

    // const newFileHandle = await dirHandle.getFileHandle('Items.json');

    // const accessHandle = await newFileHandle.createSyncAccessHandle();

    // // Get size of the file.
    // const fileSize = accessHandle.getSize();

    // console.log("fileSize : ", fileSize);
};

StartFunc().then();