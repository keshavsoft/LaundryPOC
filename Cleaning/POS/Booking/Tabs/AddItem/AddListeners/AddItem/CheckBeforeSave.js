let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalClosestTabPane = inCurrentTarget.closest(".tab-pane");
    let jVarLocalPcsClass = jVarLocalClosestTabPane.querySelector(".PcsClass");

    if (parseInt(jVarLocalPcsClass.value) > 0 === false) {
        jVarLocalPcsClass.classList.add("is-invalid");
        jVarLocalPcsClass.focus();
        return false;
    };

    console.log("aaaaaaaaaaaa", inCurrentTarget, jVarLocalClosestTabPane, jVarLocalPcsClass);
    return true;
};

export { StartFunc };