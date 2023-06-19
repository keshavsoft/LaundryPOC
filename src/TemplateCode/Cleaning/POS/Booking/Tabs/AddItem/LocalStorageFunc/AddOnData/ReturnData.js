import JsonData from './AddOnData.json' assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalLocalStorageKey = JsonData.LocalStorageKeyName;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalLocalStorageKey);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);

    return jVarLocalJsonData;
};

export { StartFunc };