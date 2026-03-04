import { getPageBySlug } from "@/lib/axios/pagesHelper"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RenderPageComponents from "./RenderPageComponents"
const DynamicPage = () => {

    const [pageContent, setPageContent] = useState<{ title: string, blocks: [] }>()
    //hier rufe ich den slug value aus der URL auf!
    const { slug } = useParams<{ slug: string }>()

    useEffect(() => {
        getPageBySlug(slug as string)
            .then(res => setPageContent(res.data[0]))
    }, [slug])

    if (!pageContent) {
        return <h1>no page available - 404</h1>
    }

    return <RenderPageComponents {...pageContent.blocks} />
    



}

export default DynamicPage