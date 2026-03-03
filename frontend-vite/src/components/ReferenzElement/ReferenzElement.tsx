import type { ReferenzElementType } from "@/types/referenzElement"
import ReferenzElementItem from "./ReferenzElementItem"
import HeadingElement from "../HeadingElement"
import getOptimizedImage from "@/utils/formatter"

const maxImagesCounter = 3

export default function ReferenzElement(props: ReferenzElementType) {

    const elementFromStrapi: ReferenzElementType = props

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