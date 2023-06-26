import { jFForItems } from "./ButtonClickFunc.js";
import { jFForCustomers } from "./ButtonClickFunc.js";
import { jFForOrdersData } from "./ButtonClickFunc.js";

const StartFunc = () => {
    let jVarLocalHtmlId = "LoadDataId";
    let jVarLocalLoadDataId = document.getElementById(jVarLocalHtmlId);

    jVarLocalLoadDataId.addEventListener("click", async () => {
        const dirHandle = await window.showDirectoryPicker();

        await jFForItems({ indirHandle: dirHandle });
        await jFForCustomers({ indirHandle: dirHandle });
        await jFForOrdersData({ indirHandle: dirHandle });

        // await StartFuncButtonClickFunc({ indirHandle: dirHandle });
    });
};

export { StartFunc }