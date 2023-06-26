let StartFunc = () => {
    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalHtmlId = "BranchNameId";
    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.innerHTML = jFLocalBranchName;
    jFLocalShowOrderNumber();
    jFLocalShowCustomerName();
};

let jFLocalShowCustomerName = () => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";

    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "CustomerName" });

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.innerHTML = jFLocalBranchName;
};

let jFLocalShowOrderNumber = () => {
    let jVarLocalHtmlId = "OrderNumberId";

    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "OrderNumber" });

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.innerHTML = jFLocalBranchName;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }