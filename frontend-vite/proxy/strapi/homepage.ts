import { pagesQuery } from '@/lib/strapi/queries/pagesQuery';
import axios from 'axios';

const PROXY_BASE_URL = 'http://localhost:3000/proxy'

export const getHomepageViaProxy = async ()=>{

    const config ={
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pagesQuery)
    }
    try{
        const response = await axios.post(`${PROXY_BASE_URL}/homepage`, config)
        return await response.data

    }catch(err){
        console.error("proxy failed for homepage", err)
    }
}