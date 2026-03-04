import type { PageBlockType } from "@/pages/RenderPageComponents"
import type { ImageType, MyButtonProps, referenzBgColor } from "./types"


export interface ReferenzElementItemType {
    title: string
    description: string
    hasButton: boolean
    button?: MyButtonProps | undefined
    image?: ImageType | undefined
}
export interface ReferenzElementType extends PageBlockType {
    title? : string
    subTitle? : string
    hasBgImage? : boolean
    image?: ImageType
    bgColor? : referenzBgColor
    items?: ReferenzElementItemType[]
}

