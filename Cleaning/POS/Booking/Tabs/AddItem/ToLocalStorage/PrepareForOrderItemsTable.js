import { StartFunc as StartFuncItemsInOrder } from "../FromLocalStorage/ItemsInOrder.js";
import { StartFunc as StartFuncFromAddOnsAll } from "../FromLocalStorage/FromAddOnsAll.js";

let StartFunc = () => {
    LocalFuncClubData();
};

let LocalFuncClubData = () => {
    let jVarLocalStorageKey = "OrderItemsToShow";

    let jVarLocalToShowData = { BodyData: {}, FooterData: {} };
    jVarLocalToShowData.BodyData = LocalFuncAddItemData();

    LocalFuncClubAddOnData({ inItemData: jVarLocalToShowData.BodyData });

    localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalToShowData));
};

let LocalFuncClubAddOnData = ({ inItemData }) => {
    let jVarLocalAddOnData = StartFuncFromAddOnsAll();

    Object.entries(inItemData).forEach(
        ([key, value]) => {
            value.Total = 16;

            let jVarLocalFilered = jFLocalFilterData({
                inData: jVarLocalAddOnData,
                inItemSerial: value.ItemSerial
            });
            console.log("jVarLocalFilered : ", jVarLocalFilered, value.ItemSerial);
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

let LocalFuncAddItemData = () => {
    let jVarLocalOrderItemsData = StartFuncItemsInOrder();
    let jVarLocalToShowData = {};

    Object.entries(jVarLocalOrderItemsData).forEach(
        ([key, value]) => {
            jVarLocalToShowData[key] = {};
            jVarLocalToShowData[key].ItemSerial = value.ItemSerial;
            jVarLocalToShowData[key].Category = value.Category;
            jVarLocalToShowData[key].ItemName = value.ItemName;
            jVarLocalToShowData[key].ItemNamePk = value.ItemNamePk;
            jVarLocalToShowData[key].location = value.location;
            jVarLocalToShowData[key].locationPk = value.locationPk;
            jVarLocalToShowData[key].Pcs = value.Pcs;
            jVarLocalToShowData[key].Rate = value.Rate;
            jVarLocalToShowData[key].DeliveryDateTime = value.DeliveryDateTime;
        }
    );

    return jVarLocalToShowData;
};

export { StartFunc };