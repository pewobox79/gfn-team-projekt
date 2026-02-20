import type { ReferenzElementType } from "@/types/referenzElement"
import { useEffect, useState } from "react"
import { getReferenzElement, getReferenzElementDummy } from "./referenzElementHelper"
import ReferenzElementItem from "./ReferenzElementItem"

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

    console.log("referenzElement", referenzElement, "typeof", typeof referenzElement, "errorMsg", errorMsg)

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

    // console.log("referenzElementFromDB", referenzElementFromDB)


    return <div className="border my-3 p-2 rounded-20">
        <div>ReferenzElement Test</div>
        <div className="section-sub-title center-title text-center">{referenzElementFromDB.title}</div>
        <div className="title split-collab text-center">{referenzElementFromDB.subTitle}</div>
        {/* <div><img src="./src/assets/images/referenzElementImages/services-round-1.png" alt="Beschreibung des Bildes" /></div> */}
        <div className="inline-flex row g-5">{itemList}</div>
        {/* {itemList} */}

    </div>

}