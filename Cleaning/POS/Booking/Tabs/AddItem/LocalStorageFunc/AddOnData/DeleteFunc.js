import JsonData from './AddOnData.json' assert {type: 'json'};

const StartFunc = ({ inKey }) => {
    let jVarLocalLocalStorageKey = JsonData.LocalStorageKeyName;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalLocalStorageKey);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);

    var userCleaned = _.pickBy(jVarLocalJsonData, function (value, key) {
        return value.AddOnItemSerial === parseInt(inKey) === false;
    });

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(userCleaned));

    return false;
};

const DeleteFromPk = ({ inPK }) => {
    let jVarLocalLocalStorageKey = JsonData.LocalStorageKeyName;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalLocalStorageKey);
    let jVarLocalJsonData = JSON.parse(jVarLocalFromLocalStorage);

    delete jVarLocalJsonData[inPK];

    localStorage.setItem(jVarLocalLocalStorageKey, JSON.stringify(jVarLocalJsonData));

    return true;
};

export { StartFunc, DeleteFromPk };