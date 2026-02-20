export type referenzElementBgColor = "red" | "white" | "black"

export interface ReferenzElementItemType {
    title: string
    description: string
    hasButton: boolean
    button?: string
    image?: string
}

export interface ReferenzElementType {
    title: string
    subTitle: string
    hasBgImage: boolean
    image?: string
    bgColor: referenzElementBgColor
    items?: ReferenzElementItemType[]
}

