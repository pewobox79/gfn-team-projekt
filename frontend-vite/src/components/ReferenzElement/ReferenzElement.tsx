import type { ReferenzElementType } from "@/types/referenzElement"
import { useEffect, useState } from "react"
import { getReferenzElement, getReferenzElementDummy } from "./referenzElementHelper"
import ReferenzElementItem from "./ReferenzElementItem"
import HeadingElement from "../HeadingElement"

const maxImagesCounter = 3

export default function ReferenzElement({title = 'My Services', subTitle = 'sub title', items = []}) {

    const [referenzElement, setReferenzElement] = useState<ReferenzElementType>()
    const [errorMsg, setErrorMsg] = useState<string>()

    useEffect(() => {
        getReferenzElement().then(data => {
            if (data.msg) {
                setErrorMsg(data.msg)
                console.log("error msg", data.msg)
            }
            setReferenzElement(data)
        })
    }, [])

    let referenzElementFromDB = getReferenzElementDummy()
    let itemList = null
    if (!errorMsg && referenzElement) {
        referenzElementFromDB = referenzElement
    }

    itemList = referenzElementFromDB.items?.map((item, index) => {
        if (index <= (maxImagesCounter - 0)) {
            return <ReferenzElementItem key={item.title.replaceAll(' ', '-')} {...item} />
        }
    })

    const imagePath = "./src/assets/images/referenzElementImages/"
    const imageFile = "services-bg-image-1.png"

    return <div className="w-full md:w-auto border" style={{backgroundImage: `url(${imagePath}${imageFile})`}}>
        <HeadingElement eyebrow={subTitle}
            title={title}
            level="h2" />
        <div className="flex flex-wrap column p-4">{itemList}</div>
    </div>

}