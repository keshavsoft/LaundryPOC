import KeyNeeded from './KeyNeeded.json' assert {type: 'json'};

const StartFunc = () => {
    let jVarLocalKeyNeeded = KeyNeeded.KeyName;
    let jVarLocalFromLocalStorage = localStorage.getItem(jVarLocalKeyNeeded);
    let jVarLocalDataNeeded = JSON.parse(jVarLocalFromLocalStorage);

    return jVarLocalDataNeeded;
};

export { StartFunc };