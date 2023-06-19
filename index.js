import { StartFunc as StartFuncToLocalStorage } from "./ToLocalStorage/Items.js";
import { StartFunc as StartFuncCustomers } from "./ToLocalStorage/Customers/Bulk.js";
import { StartFunc as StartFuncOrdersData } from "./ToLocalStorage/OrdersData/Bulk.js";

const StartFunc = async () => {
    let jVarLocalHtmlId = "LoadDataId";
    let jVarLocalLoadDataId = document.getElementById(jVarLocalHtmlId);
    jVarLocalLoadDataId.addEventListener("click", StartFuncLoad);
};

const StartFuncLoad = async () => {
    const dirHandle = await window.showDirectoryPicker();

    await jFLocalForItems({ indirHandle: dirHandle });
    await jFLocalForCustomers({ indirHandle: dirHandle });
    await jFLocalForOrdersData({ indirHandle: dirHandle });
};

const jFLocalForItems = async ({ indirHandle }) => {
    const ConfigHandle = await indirHandle.getFileHandle('Items.json');
    let jVarLocalgetFile = await ConfigHandle.getFile();

    let jVarLocalgetFileData = await jVarLocalgetFile.text();

    StartFuncToLocalStorage({ inData: JSON.parse(jVarLocalgetFileData) });
};

const jFLocalForCustomers = async ({ indirHandle }) => {
    const ConfigHandle = await indirHandle.getFileHandle('Customers.json');
    let jVarLocalgetFile = await ConfigHandle.getFile();

    let jVarLocalgetFileData = await jVarLocalgetFile.text();

    StartFuncCustomers({ inData: JSON.parse(jVarLocalgetFileData) });
};

const jFLocalForOrdersData = async ({ indirHandle }) => {
    const ConfigHandle = await indirHandle.getFileHandle('OrdersData.json');
    let jVarLocalgetFile = await ConfigHandle.getFile();

    let jVarLocalgetFileData = await jVarLocalgetFile.text();

    StartFuncOrdersData({ inData: JSON.parse(jVarLocalgetFileData) });
};

StartFunc().then();