import TestElement from "@/components/TestElement";

import Jumbotron from "@/components/Jumbotron"
import { getPages } from "@/lib/axios/pagesHelper"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [pages, setPages] = useState([])
    useEffect(() => {
        getPages().then(res => {
            console.log(res.data)
            setPages(res.data)
        })
    }, [])


    return <>
        <h1 className="text-[4rem]">GFN Projekt</h1>
        <Jumbotron
            title={"Startup Your\nBusiness Agency"}
            subTitle="We build modern solutions"
            bgColor="black"
            hasButton={true}
            hasImage={true}
            
            button={{
                label: "GET STARTED NOW",
                link: "/start",
                bgColor: "red",
                hasBorderRadius: true,
                hasIcon: false
            }}
        />
        {pages.map((page: { documentId: string }) => {
            return <p key={page.documentId}>{JSON.stringify(page)}</p>
        })}
    </>
  ;
}