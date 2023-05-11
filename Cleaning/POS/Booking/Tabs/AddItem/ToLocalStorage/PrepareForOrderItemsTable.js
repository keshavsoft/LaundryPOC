import { StartFunc as StartFuncItemsInOrder } from "../FromLocalStorage/ItemsInOrder.js";
import { StartFunc as StartFuncFromAddOnsAll } from "../FromLocalStorage/FromAddOnsAll.js";
import { StartFunc as StartFuncToOrderItemsToShow } from "./ToOrderItemsToShow.js";

let StartFunc = () => {
    let jVarLocalOrderItemsData = StartFuncItemsInOrder();
    let jVarLocalAddOnData = StartFuncFromAddOnsAll();
    let jVarLocalStorageKey = "OrderItemsToShow";
    LocalFuncClubData();

    // let jVarLocalToShowData.BodyData = { BodyData: {}, FooterData: {} };

    // jVarLocalToShowData.BodyData.BodyData = JSON.parse(JSON.stringify(jVarLocalOrderItemsData));

    // localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalToShowData.BodyData));
};

let LocalFuncClubData = () => {
    let jVarLocalOrderItemsData = StartFuncItemsInOrder();
    let jVarLocalAddOnData = StartFuncFromAddOnsAll();
    let jVarLocalStorageKey = "OrderItemsToShow";

    let jVarLocalToShowData = { BodyData: {}, FooterData: {} };

    Object.entries(jVarLocalOrderItemsData).forEach(
        ([key, value]) => {
            jVarLocalToShowData.BodyData[key] = {};
            jVarLocalToShowData.BodyData[key].ItemSerial = value.ItemSerial;
            jVarLocalToShowData.BodyData[key].Category = value.Category;
            jVarLocalToShowData.BodyData[key].ItemName = value.ItemName;
            jVarLocalToShowData.BodyData[key].ItemNamePk = value.ItemNamePk;
            jVarLocalToShowData.BodyData[key].location = value.location;
            jVarLocalToShowData.BodyData[key].locationPk = value.locationPk;
            jVarLocalToShowData.BodyData[key].Pcs = value.Pcs;
            jVarLocalToShowData.BodyData[key].Rate = value.Rate;
            jVarLocalToShowData.BodyData[key].DeliveryDateTime = value.DeliveryDateTime;
        }
    );

    localStorage.setItem(jVarLocalStorageKey, JSON.stringify(jVarLocalToShowData));
};

export { StartFunc };