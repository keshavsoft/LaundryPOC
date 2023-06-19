import data from './ItemsInOrder.json' assert {type: 'json'};

let StartFunc = () => {
    if ("ItemsInOrder" in localStorage === false) {
        localStorage.setItem("ItemsInOrder", JSON.stringify(data));
    };
};

export { StartFunc };