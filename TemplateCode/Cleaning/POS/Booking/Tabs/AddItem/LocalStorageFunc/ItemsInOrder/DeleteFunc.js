import JsonData from './ItemsInOrder.json' assert {type: 'json'};

const StartFunc = ({ inKey }) => {
    let jVarLocalLocalStorageKey = JsonData.LocalStorageKeyName;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalLocalStorageKey);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);

    if (inKey in jVarLocalJsonData) {
        delete jVarLocalJsonData[inKey];

        localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalJsonData));
        return true;
    };

    return false;
};

export { StartFunc };