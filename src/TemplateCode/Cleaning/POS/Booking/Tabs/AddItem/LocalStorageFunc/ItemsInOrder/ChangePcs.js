import JsonData from './ItemsInOrder.json' assert {type: 'json'};

const StartFunc = ({ inKey, inPcs }) => {
    let jVarLocalLocalStorageKey = JsonData.LocalStorageKeyName;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalLocalStorageKey);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);

    if (inKey in jVarLocalJsonData) {
        jVarLocalJsonData[inKey].Pcs = inPcs;
        jVarLocalJsonData[inKey].Total = inPcs * jVarLocalJsonData[inKey].Rate;

        localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalJsonData));
        return true;
    };

    return false;
};

export { StartFunc };