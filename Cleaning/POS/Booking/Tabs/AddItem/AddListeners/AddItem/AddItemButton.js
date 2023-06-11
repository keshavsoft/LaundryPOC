import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFuncs = () => {
    jFLocalMenTab();
};

let jFLocalMenTab = () => {
    let jVarLocalMenItemsTabId = document.getElementById("MenItemsTabId");

    if (jVarLocalMenItemsTabId === null === false) {
        let jVarLocalAddButton = jVarLocalMenItemsTabId.querySelector(".AddItemButtonClass");
        // AddItemButtonClass
        if (jVarLocalAddButton === null === false) jVarLocalAddButton.addEventListener("click", StartFuncButtonClickFunc);
    };
};

export { StartFuncs };