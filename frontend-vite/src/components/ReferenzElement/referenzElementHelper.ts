import type { ReferenzElementItemType, ReferenzElementType } from "@/types/referenzElement"

const DOMAIN_API_URL = 'http://localhost:1337/api'

export const getReferenzElement = async () => {

    const url = `${DOMAIN_API_URL}/homepage`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            return { msg: "error on response" }
        }
        return await response.json()
    } catch (err) {
        return { msg: `error on fetch: ${err}` }
    }

}

export function getReferenzElementDummy(): ReferenzElementType {

    const dummyItem1: ReferenzElementItemType = {
        title: "dummyItem1",
        description: "description of dummyItem1",
        hasButton: false,
        button: "",
        image: "services-round-1.png"
    }

    const dummyItem2: ReferenzElementItemType = {
        title: "dummyItem2",
        description: "description of dummyItem2",
        hasButton: false,
        button: "",
        image: "services-round-2.png"
    }

    const dummyItem3: ReferenzElementItemType = {
        title: "dummyItem3",
        description: "description of dummyItem3",
        hasButton: false,
        button: "",
        image: "services-round-3.png"
    }

    const dummyItem4: ReferenzElementItemType = {
        title: "dummyItem4",
        description: "description of dummyItem4",
        hasButton: false,
        button: "",
        image: "work-1.jpg"
    }

    const dummyReferenzElement: ReferenzElementType = {
        title: "title dummyReferenzElement",
        subTitle: "subTitle dummyReferenzElement",
        hasBgImage: false,
        image: undefined,
        bgColor: "black",
        items: [dummyItem1, dummyItem2, dummyItem3, dummyItem4]
    }

    return dummyReferenzElement

}
