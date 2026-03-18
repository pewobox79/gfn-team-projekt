import Jumbotron from "@/components/Jumbotron"
import { getPages } from "@/lib/axios/pagesHelper"
import { useEffect, useState } from "react"
import { getHomepageViaProxy } from '../../proxy/strapi/homepage';

export default function HomePage() {

    const [pages, setPages] = useState([])
    useEffect(() => {

        //testabfrage proxy
        getHomepageViaProxy().then(data => console.log("res in useEffect", data))

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
            hasBgImage={true}

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