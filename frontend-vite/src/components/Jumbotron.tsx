
type JumbotronType = {
    title: string
    subTitle: string
    bgImage?: string
    hasImage: boolean
    bgColor?: string 
    hasButton: boolean
    button?: ButtonType
}

type ButtonType = {
    label: string
    link: string
    bgColor: string
    hasBorderRaduis: boolean
    hasIcon: boolean
    icon?: string
}

const Jumbotron = ({title, subTitle, bgImage, button}: JumbotronType) => {

    return (
        
    )

}