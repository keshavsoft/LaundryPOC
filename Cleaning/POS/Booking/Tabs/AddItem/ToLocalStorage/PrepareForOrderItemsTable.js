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

let LocalFuncClubData_Keshav_11May2023 = () => {
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