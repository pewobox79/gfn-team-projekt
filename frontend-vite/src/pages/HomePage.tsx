
import CallToAction from "@/components/CallToActionElement"
import { getPages } from "@/lib/axios/pagesHelper"
import { useEffect, useState } from "react"

export default function HomePage() {

    const [pages, setPages] = useState([])
    useEffect(() => {

        getPages().then(res => setPages(res.data))
    }, [])


    return <>
        <h1 className="text-[4rem]">GFN Projekt</h1>
        {pages.map((page: { documentId: string }) => {
            return <p key={page.documentId}>{JSON.stringify(page)}</p>
        })}
        <CallToAction
            title="Subscribe to Newsletter"
            bgColor="bg-slate-700"
            button={{
                label: "SUBSCRIBE NOW",
                bgColor: "bg-red-500",
                hasBorderRadius: true,
                hasIcon: true,
            }}
        />
    </>
}