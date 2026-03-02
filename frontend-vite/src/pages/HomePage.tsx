

import CallToAction from "@/components/CallToActionElement"

import Footer from "@/components/footer/Footer"
import { getPages } from "@/lib/axios/pagesHelper"
import { useEffect, useState } from "react"



    

export default function HomePage() {
  const [pages, setPages] = useState([])
    useEffect(() => {
        getPages().then(res => setPages(res.data))
    }, [])


    return <>
        <h1 className="text-[4rem]">GFN Projekt</h1>
        {JSON.stringify(pages)}
        <CallToAction 
            title="Subscribe to our Newsletter!"
            description='this description lorem ipsum was brought to you by blabla hirone the third company in a row.'
            hasButton={true}
        />
        <Footer/>

        

    </>
}