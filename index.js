const StartFunc = async () => {
    let jVarLocalHtmlId = "LoadDataId";
    let jVarLocalLoadDataId = document.getElementById(jVarLocalHtmlId);
    jVarLocalLoadDataId.addEventListener("click", StartFuncLoad);
};

const StartFuncLoad = async () => {
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