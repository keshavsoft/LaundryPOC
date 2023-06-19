import { StartFunc as StartFuncFromAddOnsAll } from "../../FromLocalStorage/FromAddOnsAll.js";

let StartFunc = ({ inItemData }) => {
    let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    Object.entries(inItemData).forEach(
        ([key, value]) => {
            value.Total = value.Rate * value.Pcs;

            let jVarLocalFilered = jFLocalFilterData({
                inData: jVarLocalAddOnData,
                inItemSerial: value.ItemSerial
            });

            if (jVarLocalFilered.length > 0) {
                let jVarLocalAddOnRateArray = jVarLocalFilered.map(element => {
                    return element.AddOnRate;
                });

                const sum = jVarLocalAddOnRateArray.reduce((a, b) => a + b, 0);
                value.Total = value.Total + sum;
            };
        }
    );
};

let jFLocalFilterData = ({ inData, inItemSerial }) => {
    let jVarLocaljVarLocalItemsInOrderJson = inData;

    let jVarLocalAddOnArray = Object.keys(jVarLocaljVarLocalItemsInOrderJson).map(
        key => {
            return {
                RowPk: key,
                ...jVarLocaljVarLocalItemsInOrderJson[key]
            };
        }
    );

    let jVarLocalFilered = jVarLocalAddOnArray.filter(element => {
        return element.AddOnItemSerial === inItemSerial;
    });

    return jVarLocalFilered;
};

export { StartFunc };