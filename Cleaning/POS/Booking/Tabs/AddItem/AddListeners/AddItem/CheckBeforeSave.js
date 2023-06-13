let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalClosestTabPane = inCurrentTarget.closest(".tab-pane");
    let jVarLocalPcsClass = jVarLocalClosestTabPane.querySelector(".PcsClass");

    // if (parseInt(jVarLocalPcsClass.value) > 0 === false) {
    //     jVarLocalPcsClass.classList.add("is-invalid");
    //     jVarLocalPcsClass.focus();
    //     return false;
    // };

    if (jFLocalForPcs({ inClosestTabPane: jVarLocalClosestTabPane }) === false) return false;
    if (jFLocalForRate({ inClosestTabPane: jVarLocalClosestTabPane }) === false) return false;

    return true;
};

let jFLocalForPcs = ({ inClosestTabPane }) => {
    let jVarLocalPcsClass = inClosestTabPane.querySelector(".PcsClass");

    if (parseInt(jVarLocalPcsClass.value) > 0 === false) {
        jVarLocalPcsClass.classList.add("is-invalid");
        jVarLocalPcsClass.focus();
        return false;
    };

    return true;
};

let jFLocalForRate = ({ inClosestTabPane }) => {
    let jVarLocalPcsClass = inClosestTabPane.querySelector(".RateClass");

    if (parseInt(jVarLocalPcsClass.value) > 0 === false) {
        jVarLocalPcsClass.classList.add("is-invalid");
        jVarLocalPcsClass.focus();
        return false;
    };

    return true;
};



export { StartFunc };