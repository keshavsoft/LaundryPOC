import { StartFunc as StartFuncToDom } from "../../ToDom/ToTable/ToOrderItems.js";
import { StartFunc as StartFuncPrepareObject } from "./PrepareObject.js";
import { StartFunc as StartFuncPostItemInsertFunc } from "./PostItemInsertFunc.js";
import { StartFunc as StartFuncCheckBeforeSave } from "./CheckBeforeSave.js";

let StartFunc = (event) => {
    try {
        let jVarLocalEvent = event;
        let jVarLocalCurrentTarget = jVarLocalEvent.currentTarget;
        let jVarClosestTabPane = jVarLocalCurrentTarget.closest(".tab-pane");

        let jVarLocalFromCheck = StartFuncCheckBeforeSave({ inCurrentTarget: jVarLocalCurrentTarget });

        if (jVarLocalFromCheck) {

            let jVarObjectToInsert = StartFuncPrepareObject({ inTabPane: jVarClosestTabPane });

            jFLocalToLocalStorage({ inObjectToInsert: jVarObjectToInsert });
            StartFuncToDom();

            StartFuncPostItemInsertFunc({ inTabPane: jVarClosestTabPane });
        };

    } catch (error) {
        console.log("error : ", error);
    };
};

let jFLocalToLocalStorage = ({ inObjectToInsert }) => {
    try {
        let jVarObjectToInsert = inObjectToInsert;

        let jVLocalFromLocalStorate = localStorage.getItem("ItemsInOrder");
        let jVarLocalOrderItems = JSON.parse(jVLocalFromLocalStorate);
        let jVarLocalKeys = Object.keys(jVarLocalOrderItems);
        let jVarLocalNewKey = 1;

        if (jVarLocalKeys.length > 0) {
            const max = Math.max(...jVarLocalKeys);

            jVarLocalNewKey = max + 1;
        }

        jVarLocalOrderItems[jVarLocalNewKey] = jVarObjectToInsert;
        //  jVarLocalItemsArray.push(jVarObjectToInsert);

        localStorage.setItem("ItemsInOrder", JSON.stringify(jVarLocalOrderItems));
    } catch (error) {
        console.log("error : ", error);
    };
};

export { StartFunc };