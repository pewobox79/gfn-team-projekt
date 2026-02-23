
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

const Jumbotron = ({ title, subTitle, bgImage, bgColor, hasButton, button }: JumbotronType) => {

    return (<>
        <div className={`flex w-full ${bgColor ? bgColor : " "}`}>
            <h1>{title}</h1>
            <h4>{subTitle}</h4>

        </div>
    </>

    )

}

export default Jumbotron