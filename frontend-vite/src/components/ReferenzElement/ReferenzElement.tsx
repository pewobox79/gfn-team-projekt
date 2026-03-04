import type { ReferenzElementType } from "@/types/referenzElement"
import ReferenzElementItem from "./ReferenzElementItem"
import HeadingElement from "../HeadingElement"
import getOptimizedImage from "@/utils/formatter"
import { getBgColor } from "@/utils/bgColor"

const maxImagesCounter = 3

export default function ReferenzElement(props: ReferenzElementType) {

    const elementFromStrapi: ReferenzElementType = props

    const itemList = elementFromStrapi.items?.map((item, index) => {
        if (index <= (maxImagesCounter - 1)) {
            return <ReferenzElementItem key={item.title.replaceAll(' ', '-')} {...item} />
        }
    })

    const {url} = getOptimizedImage(props.image)

    return <div className={`inline-block w-full items-center border ${!props.hasBgImage && getBgColor(props.bgColor as string)}`} style={props.hasBgImage ? { backgroundImage: `url(${url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }:{}}>
        <HeadingElement eyebrow={elementFromStrapi.subTitle}
            title={elementFromStrapi.title ? elementFromStrapi.title : "Title undefined"}
            level="h2" />
        <div className="flex flex-wrap column p-4 justify-center">{itemList}</div>
    </div>

}