const StartFunc = () => {
    let jVarLocalAddOnMenuId = document.getElementById("AddOnMenuId");

    if (jVarLocalAddOnMenuId === null === false) {
        jVarLocalAddOnMenuId.addEventListener("change", (event) => {
            if (event.currentTarget.checked) {
                jFLocalChecked();
            } else {
                jFLocalUnChecked({ inHtmlControl: jVarLocalAddOnMenuId });
            }
        });
    };
};

const StartFunc_Keshav_12Jun2023 = () => {
    let jVarLocalAddOnMenuId = document.getElementById("AddOnMenuId");
    let jVarLocalMenuTabAddOnId = document.getElementById("MenuTabAddOnId");

    if (jVarLocalAddOnMenuId === null === false) {
        jVarLocalAddOnMenuId.addEventListener("change", (event) => {
            if (event.currentTarget.checked) {
                jVarLocalMenuTabAddOnId.classList.add("col");
                jVarLocalMenuTabAddOnId.classList.remove("d-none");

                let jVarLocalHtmlId = "AddOnServiceId";
                let jVarLocalAddOnServiceId = document.getElementById(jVarLocalHtmlId);
                jVarLocalAddOnServiceId.focus();
                console.log("this");
            } else {
                jVarLocalMenuTabAddOnId.classList.remove("col");
                jVarLocalMenuTabAddOnId.classList.add("d-none");

                // ItemSelect
            }
        });
    };
};

const jFLocalChecked = () => {
    let jVarLocalMenuTabAddOnId = document.getElementById("MenuTabAddOnId");

    jVarLocalMenuTabAddOnId.classList.add("col");
    jVarLocalMenuTabAddOnId.classList.remove("d-none");

    let jVarLocalHtmlId = "AddOnServiceId";
    let jVarLocalAddOnServiceId = document.getElementById(jVarLocalHtmlId);
    jVarLocalAddOnServiceId.focus();
};

const jFLocalUnChecked = ({ inHtmlControl }) => {
    let jVarLocalClosestTabPane = inHtmlControl.closest(".tab-pane");

    let jVarLocalMenuTabAddOnId = document.getElementById("MenuTabAddOnId");

    jVarLocalMenuTabAddOnId.classList.remove("col");
    jVarLocalMenuTabAddOnId.classList.add("d-none");


    let jVarLocalHtmlClass = ".ItemSelect";
    let jVarLocalItemSelect = jVarLocalClosestTabPane.querySelector(jVarLocalHtmlClass);

    jVarLocalItemSelect.focus();
};

export { StartFunc };