import { StartFunc as StartFuncItemsInOrder } from "../FromLocalStorage/ItemsInOrder.js";
import { StartFunc as StartFuncClubAddOnData } from "./PrepareForOrderItemsTable/ClubAddOnData.js";

let StartFunc = () => {
    LocalFuncClubData();
};

let LocalFuncClubData = () => {
    let jVarLocalStorageKey = "OrderItemsToShow";

    let jVarLocalToShowData = { BodyData: {}, FooterData: {} };
    jVarLocalToShowData.BodyData = LocalFuncAddItemData();

    StartFuncClubAddOnData({ inItemData: jVarLocalToShowData.BodyData });

    localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalToShowData));
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