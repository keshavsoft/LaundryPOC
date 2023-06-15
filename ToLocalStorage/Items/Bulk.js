let StartFunc = ({ inData }) => {
    localStorage.setItem("Items", JSON.stringify(inData));
};

export { StartFunc };