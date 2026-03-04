export type referenzBgColor = "red" | "white" | "black"

export type CallToActionProps = {
    __component?: string
    id?: number
    title?: string;
    description?: string
    bgColor?: referenzBgColor;
    hasButton?: boolean
    button?: MyButtonProps
};

export interface MyButtonProps {
    label?: string;
    link?: string;
    bgColor?: referenzBgColor;
    hasBorderRadius?: boolean;
}

export type JumbotronType = {
    __component?: string,
    id?: number
    title?: string
    subTitle?: string
    bgImage?: {
        url: string
    }
    hasBgImage?: boolean
    bgColor?: referenzBgColor;
    hasButton?: boolean
    button?: ButtonType
}

export type ButtonType = {
    label: string
    link: string
    bgColor: referenzBgColor;
    hasBorderRadius: boolean
    hasIcon: boolean
    icon?: string
}

export interface FooterTypes { navHeading?: string, copyright?: string, company?: string }
export type NavItemTypes = { id?: number, label?: string, link?: string }