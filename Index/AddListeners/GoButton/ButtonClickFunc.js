const StartFunc = () => {
    let jVarLocalHtmlId = "ScanId";
    let jVarLocalScanId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalScanIdValue = jVarLocalScanId.value;
    let jVarLocalArray = jVarLocalScanIdValue.split(":");
    let jVarLocalCustomerName = jVarLocalArray[0].trim();
    let jVarLocalCustomerMobile = "";

    if (jVarLocalCustomerName.length > 1) {
        jVarLocalCustomerMobile = jVarLocalArray[1].trim()
    };

    jFLocalToUrl({ inCustomerName: jVarLocalCustomerName, inCustomerMobile: jVarLocalCustomerMobile });
};


let jFLocalToUrl = ({ inCustomerName, inCustomerMobile }) => {
    let jVarLocalToUrl = "/public/Html/Cleaning/POS/Booking/Tabs/AddItem/AddItemCommon.html";

    const myUrlWithParams = new URL(`${window.location.origin}${jVarLocalToUrl}`);

    myUrlWithParams.searchParams.append("CustomerName", inCustomerName);
    myUrlWithParams.searchParams.append("CustomerMobile", inCustomerMobile);

    window.location.href = myUrlWithParams.href;
};


export { StartFunc };