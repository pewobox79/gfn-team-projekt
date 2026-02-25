
import axios from "axios";
import { BASE_URL_STRAPI } from "./config";

export const getNavigation = async () => {
    const URL = BASE_URL_STRAPI + `/api/navigation?populate=*`
    console.log("url", URL)

    try {
        const response = await axios.get(URL)
        return response.data;
    } catch (error) {
        console.log("Error:", error);
        return null
    }
}