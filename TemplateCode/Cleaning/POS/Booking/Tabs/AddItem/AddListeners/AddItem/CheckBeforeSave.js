let StartFunc = ({ inCurrentTarget }) => {
    let jVarLocalClosestTabPane = inCurrentTarget.closest(".tab-pane");

    if (jFLocalForItem({ inClosestTabPane: jVarLocalClosestTabPane }) === false) return false;
    if (jFLocalForRate({ inClosestTabPane: jVarLocalClosestTabPane }) === false) return false;
    if (jFLocalForPcs({ inClosestTabPane: jVarLocalClosestTabPane }) === false) return false;

    return true;
};

let jFLocalForPcs = ({ inClosestTabPane }) => {
    let jVarLocalPcsClass = inClosestTabPane.querySelector(".PcsClass");

    if (parseInt(jVarLocalPcsClass.value) > 0 === false) {
        jVarLocalPcsClass.classList.add("is-invalid");
        jVarLocalPcsClass.focus();
        return false;
    } else {
        jVarLocalPcsClass.classList.remove("is-invalid");
        jVarLocalPcsClass.classList.add("is-valid");
    };

    return true;
};

let jFLocalForRate = ({ inClosestTabPane }) => {
    let jVarLocalPcsClass = inClosestTabPane.querySelector(".RateClass");

    if (parseInt(jVarLocalPcsClass.value) > 0 === false) {
        jVarLocalPcsClass.classList.add("is-invalid");
        jVarLocalPcsClass.focus();
        return false;
    } else {
        jVarLocalPcsClass.classList.remove("is-invalid");
        jVarLocalPcsClass.classList.add("is-valid");
    };

    return true;
};

let jFLocalForItem = ({ inClosestTabPane }) => {
    let jVarLocalPcsClass = inClosestTabPane.querySelector(".ItemSelect");
    let jVarLocalHtmlValue = jVarLocalPcsClass.value;

    if (parseInt(jVarLocalHtmlValue) > 0 === false) {
        jVarLocalPcsClass.classList.add("is-invalid");
        jVarLocalPcsClass.focus();
        return false;
    } else {
        jVarLocalPcsClass.classList.remove("is-invalid");
        jVarLocalPcsClass.classList.add("is-valid");
    };

    return true;

};

export { StartFunc };