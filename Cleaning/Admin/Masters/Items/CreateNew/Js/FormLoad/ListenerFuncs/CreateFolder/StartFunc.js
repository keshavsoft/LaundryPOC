import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = ({ inProjectName }) => {
    let jVarLocalCreateFolderButtonId = document.getElementById("CreateFolderButtonId");

    jVarLocalCreateFolderButtonId.addEventListener("click", async () => {
        await StartFuncButtonClickFunc({
            inProjectName
        });
    });
};

export { StartFunc };
