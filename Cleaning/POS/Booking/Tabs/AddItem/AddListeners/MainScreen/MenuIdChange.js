const StartFunc = () => {
    let jVarLocalMenuId = document.getElementById("MenuId");
    let jVarLocalMenuTabId = document.getElementById("MenuTabId");

    jVarLocalMenuId.addEventListener("change", (event) => {
        if (event.currentTarget.checked) {
            jVarLocalMenuTabId.classList.add("col-3");
        } else {
            jVarLocalMenuTabId.classList.remove("col-3");
        }
    });
};

export { StartFunc };