import ApiUrl from "../utils/ApiUrl";
import axiosInstance from "../config/axiosConfig";

const getStoreDetails = async() => {
    try {
        let body = {Latitude: '51.5025', Longitude: '-0.1414', Limit: '20', Radius: '20', SearchText: ' '}
        const response = await axiosInstance.post(ApiUrl.storeList, body);
        return response.data.ResponsePacket;
    } catch(e) {
        console.log("Api Error -", e.message);
    }
};

export {
    getStoreDetails
}