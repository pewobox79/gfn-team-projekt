import type { ReferenzElementType } from "@/types/referenzElement"
import { useEffect, useState } from "react"
import { getReferenzElement, getReferenzElementDummy } from "./referenzElementHelper"
import ReferenzElementItem from "./ReferenzElementItem"
import HeadingElement from "../HeadingElement"
import getOptimizedImage from "@/utils/formatter"

const maxImagesCounter = 3

export default function ReferenzElement(props: ReferenzElementType) {

    // const [referenzElement, setReferenzElement] = useState<ReferenzElementType>()
    // const [errorMsg, setErrorMsg] = useState<string>()

    console.log("props", props)

    const elementFromStrapi: ReferenzElementType = props

    // useEffect(() => {
    //     getReferenzElement().then(data => {
    //         if (data.msg) {
    //             setErrorMsg(data.msg)
    //             console.log("error msg", data.msg)
    //         }
    //         setReferenzElement(data)
    //     })
    // }, [])

    // let referenzElementFromDB = getReferenzElementDummy()
    // let itemList = null
    // if (!errorMsg && referenzElement) {
    //     referenzElementFromDB = referenzElement
    // }

    const itemList = elementFromStrapi.items?.map((item, index) => {
        if (index <= (maxImagesCounter - 1)) {
            return <ReferenzElementItem key={item.title.replaceAll(' ', '-')} {...item} />
        }
    })

    const {url} = getOptimizedImage(props.image)

    return <div className="inline-block md:w-auto items-center border" style={{ backgroundImage: `url(${url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <HeadingElement eyebrow={elementFromStrapi.subTitle}
            title={elementFromStrapi.title}
            level="h2" />
        <div className="flex flex-wrap column p-4">{itemList}</div>
    </div>

}