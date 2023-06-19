const StartFunc = ({ inTabPane }) => {
    let jVarLocalItemSerialClass = inTabPane.querySelector(".ItemSerialClass");
    let jVarLocalItemsTableBodyId = document.getElementById("ItemsTableBodyId");

    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");

    let jVarLocalOrderItemsTableRowCount = jVarLocalItemsTableBodyId.rows;
    jVarLocalItemSerialClass.value = jVarLocalOrderItemsTableRowCount.length + 1;

    jVarLocalItemsTableBodyId.rows[jVarLocalOrderItemsTableRowCount.length - 1].classList.add("table-success");
    jVarLocalAddOnItemId.value = jVarLocalItemsTableBodyId.rows.length;

    jFLocalClearEntryHtmls({ inTabPane });
    jFLocalSetFocus({ inTabPane });
};

const jFLocalClearEntryHtmls = ({ inTabPane }) => {
    let jVarLocalItemSelect = inTabPane.querySelector(".ItemSelect");
    let jVarLocalRate = inTabPane.querySelector(".RateClass");
    let jVarLocalPcs = inTabPane.querySelector(".PcsClass");

    jVarLocalItemSelect.value = "";
    jVarLocalRate.value = "";
    jVarLocalPcs.value = 0;

    jVarLocalItemSelect.classList.remove("is-invalid");
    jVarLocalRate.classList.remove("is-invalid");
    jVarLocalPcs.classList.remove("is-invalid");

    jVarLocalItemSelect.classList.remove("is-valid");
    jVarLocalRate.classList.remove("is-valid");
    jVarLocalPcs.classList.remove("is-valid");
};

const jFLocalSetFocus = ({ inTabPane }) => {
    let jVarLocalItemSelect = inTabPane.querySelector(".ItemSelect");

    jVarLocalItemSelect.focus();
};

export { StartFunc };