import { StartFunc as StartFuncMenuIdChange } from "./MenuIdChange.js";
import { StartFunc as StartFuncAddOnMenuIdChange } from "./AddOnMenuIdChange.js";

const StartFunc = () => {
    StartFuncMenuIdChange();
    StartFuncAddOnMenuIdChange();
};

const StartFunc_Keshav12Jun2023 = () => {
    let jVarLocalMenuId = document.getElementById("MenuId");
    let jVarLocalMenuTabId = document.getElementById("MenuTabId");
    let jVarLocalAddOnMenuId = document.getElementById("AddOnMenuId");
    let jVarLocalMenuTabAddOnId = document.getElementById("MenuTabAddOnId");

    jVarLocalMenuId.addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
            jVarLocalMenuTabId.classList.add("col-3");
        } else {
            jVarLocalMenuTabId.classList.remove("col-3");
        }
    });

    if (jVarLocalAddOnMenuId === null === false) {
        jVarLocalAddOnMenuId.addEventListener("change", (event) => {
            if (event.currentTarget.checked) {
                jVarLocalMenuTabAddOnId.classList.add("col");
                jVarLocalMenuTabAddOnId.classList.remove("d-none");
            } else {
                jVarLocalMenuTabAddOnId.classList.remove("col");
                jVarLocalMenuTabAddOnId.classList.add("d-none");
            }
        });
    };
};

export { StartFunc };