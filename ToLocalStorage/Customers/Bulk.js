import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inData }) => {
    localStorage.setItem(CommonKeys.Customers, JSON.stringify(inData));
};

export { StartFunc };