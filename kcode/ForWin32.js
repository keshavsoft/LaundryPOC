let LocalFolderPath = "src\\TemplateCode";
let LocalDestinationPath = "";

let CommonWalk = require("./WalkFuncs");

let StartFunc = () => {
    CommonWalk.walk(LocalFolderPath, LocalFolderPath, LocalDestinationPath, CommonWalk.CallBackFunc);
};

module.exports = { StartFunc };

