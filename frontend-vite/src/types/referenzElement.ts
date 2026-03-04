import type { PageBlockType } from "@/pages/RenderPageComponents"
import type { MyButtonProps, referenzBgColor } from "./types"


export interface ReferenzElementItemType {
    title: string
    description: string
    hasButton: boolean
    button?: MyButtonProps | undefined
    image?: string | undefined
}
export interface ReferenzElementType extends PageBlockType {
    title? : string
    subTitle? : string
    hasBgImage? : boolean
    image?: string
    bgColor? : referenzBgColor
    items?: ReferenzElementItemType[]
}

