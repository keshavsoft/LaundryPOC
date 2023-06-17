import CommonKeys from "./Keys.json" assert { type: "json" };

let StartFunc = ({ inData }) => {
    localStorage.setItem(CommonKeys.ItemKey, JSON.stringify(inData));

    let jVarLocalCustomerData = {};

    localStorage.setItem(CommonKeys.Customers, JSON.stringify({
        CommonKeys
    }));
};

export { StartFunc };