import type { MyButtonProps } from "@/components/MyButton"
import type { PageBlockType } from "@/pages/RenderPageComponents"

export type referenzElementBgColor = "red" | "white" | "black"

export interface ReferenzElementItemType {
    title: string
    description: string
    hasButton: boolean
    button?: MyButtonProps | undefined
    image?: string | undefined
}

export interface ReferenzElementType extends PageBlockType {
    title: string
    subTitle: string
    hasBgImage: boolean
    image?: string | undefined
    bgColor: referenzElementBgColor
    items?: ReferenzElementItemType[] | undefined
}

