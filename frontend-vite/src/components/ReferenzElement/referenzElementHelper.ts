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
        title: "Dummy Item 1",
        description: "description of dummyItem1 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        hasButton: false,
        button: "",
        image: "services-round-1.png"
    }

    const dummyItem2: ReferenzElementItemType = {
        title: "Dummy Item 2",
        description: "description of dummyItem2 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        hasButton: false,
        button: "",
        image: "services-round-2.png"
    }

    const dummyItem3: ReferenzElementItemType = {
        title: "Dummy Item 3",
        description: "description of dummyItem3 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        hasButton: false,
        button: "",
        image: "services-round-3.png"
    }

    const dummyItem4: ReferenzElementItemType = {
        title: "Dummy Item 4",
        description: "description of dummyItem4 Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
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
        items: [dummyItem1, dummyItem2, dummyItem4]
    }

    return dummyReferenzElement

}
