import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = ({ inProjectName }) => {
    let jVarLocalCreateButtonId = document.getElementById("CreateButtonId");

    jVarLocalCreateButtonId.addEventListener("click", async () => {
        await StartFuncButtonClickFunc({
            inProjectName
        });
    });
};

export { StartFunc };
