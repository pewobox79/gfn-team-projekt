import axios from "axios";
import { BASE_URL_STRAPI } from "./config";
import { pagesQuery } from "../strapi/queries/pagesQuery";

export async function getPages() {
    const url = BASE_URL_STRAPI + `/api/pages?${pagesQuery}`
    try {
        const response = await axios.get(url) //.get liefert javascript object
        if (response.request.statusText !== "OK") {
            console.log("failed to fetch")
            return
        }
        return response.data
    } catch (err) {
        console.log("error on fetch with axios", err)
    }
}

export const getPageBySlug = async (slug: string) => {
    const url = BASE_URL_STRAPI + `/api/pages?filters[slug][$eq]=${slug}&${pagesQuery}`
    try {
        const response = await axios.get(url) //.get liefert javascript object
        if (response.request.statusText !== "OK") {
            console.log("failed to fetch")
            return
        }
        return response.data
    } catch (err) {
        console.log("error on fetch with axios", err)
    }

}

export function test(){
    console.log("test")
}