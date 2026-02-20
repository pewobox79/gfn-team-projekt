
import CallToAction from "@/components/CallToActionElement"

import Footer from "@/components/footer/Footer"
import MyButton from "@/components/MyButton"
import { getPages } from "@/lib/axios/pagesHelper"
import { useEffect, useState } from "react"

export default function HomePage() {

    const [pages, setPages] = useState([])
    useEffect(() => {
        getPages().then(res => setPages(res.data))
    }, [])


    return <>
        <h1 className="text-[4rem]">GFN Projekt</h1>

        <MyButton label="Click me" bgColor="black" link="https://www.bild.de" hasBorderRadius={true} />
        {pages.map((page: { documentId: string }) => {
            return <p key={page.documentId}>{JSON.stringify(page)}</p>
        })}
        <Footer />

        <CallToAction 
            title="Subscribe to our Newsletter!"
        />

    </>
}