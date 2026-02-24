import type { ReferenzElementType } from "@/types/referenzElement"
import { useEffect, useState } from "react"
import { getReferenzElement, getReferenzElementDummy } from "./referenzElementHelper"
import ReferenzElementItem from "./ReferenzElementItem"
import HeadingElement from "../HeadingElement"

const maxImagesCounter = 3

export default function ReferenzElement() {

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

    return <div className="border my-3 p-2 rounded-20">
        <HeadingElement eyebrow={referenzElementFromDB.title}
            title={referenzElementFromDB.subTitle}
            level="h2" />
        <div className="flex flex-wrap column p-4">{itemList}</div>
    </div>

}