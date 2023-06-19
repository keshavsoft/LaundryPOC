import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalCreateButtonId = document.getElementById("CreateButtonId");

    jVarLocalCreateButtonId.addEventListener("click", async () => {
        await StartFuncButtonClickFunc();
    });
};

export { StartFunc };
