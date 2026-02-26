
type JumbotronType = {
    title: string
    subTitle: string
    bgImage?: {
        url: string
    }
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

const Jumbotron = ({ title, subTitle, bgImage, hasImage, bgColor, hasButton, button }: JumbotronType) => {

    return (<>
        <div className={`relative flex flex-col w-full h-[500px] text-white justify-center items-center   ${bgColor ? bgColor : " "}`}
            style={bgImage?.url && hasImage ? {
                backgroundImage: `url(http://localhost:1337${bgImage.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            } : undefined}>

            <h1 className="text-6xl font-bold whitespace-pre-line text-center leading-tight">{title}</h1>

            <h4 className="mt-8 text-xs">{subTitle}</h4>

            {hasButton && button && (
                <button className="bg-red-800 mt-8 rounded md px-8 py-4">
                    {button.label}
                </button>
            )}

        </div>
    </>

    )

}

export default Jumbotron