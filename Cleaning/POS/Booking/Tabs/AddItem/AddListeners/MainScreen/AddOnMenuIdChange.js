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