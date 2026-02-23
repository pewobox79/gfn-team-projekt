
import { getPages } from "@/lib/axios/pagesHelper"
import { useEffect, useState } from "react"

export default function HomePage() {

    const [pages, setPages] = useState([])
    useEffect(() => {

        getPages().then(res => setPages(res.data))
    }, [])

    return <>
        <h1 className="text-[4rem]">GFN Projekt make it</h1>
        {pages.map((page: { documentId: string }) => {
            return <p key={page.documentId}>{JSON.stringify(page)}</p>
        })}
    </>
}