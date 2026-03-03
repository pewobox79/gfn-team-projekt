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
    let itemList = null
    // if (!errorMsg && referenzElement) {
    //     referenzElementFromDB = referenzElement
    // }

    itemList = elementFromStrapi.items?.map((item, index) => {
        if (index <= (maxImagesCounter - 1)) {
            return <ReferenzElementItem key={item.title.replaceAll(' ', '-')} {...item} />
        }
    })

    const imagePath = "./src/assets/images/referenzElementImages/"
    const imageFile = "services-bg-image-1.png"

    const {url} = getOptimizedImage(props.image)

    return <div className="w-full md:w-auto border" style={{ backgroundImage: `url(${url})` }}>
        <HeadingElement eyebrow={elementFromStrapi.subTitle}
            title={elementFromStrapi.title}
            level="h2" />
        <div className="flex flex-wrap column p-4">{itemList}</div>
    </div>

}