import getOptimizedImage from "@/utils/formatter"
import MyButton from "./MyButton"

type JumbotronType = {
    title: string
    subTitle: string
    bgImage?: {
        url: string
    }
    hasImage: boolean
    bgColor?: 'white' | 'red' | 'black';
    hasButton: boolean
    button?: ButtonType
}

type ButtonType = {
    label: string
    link: string
    bgColor: 'white' | 'red' | 'black';
    hasBorderRaduis: boolean
    hasIcon: boolean
    icon?: string
}

const Jumbotron = ({ title, subTitle, bgImage, hasImage, bgColor, hasButton, button }: JumbotronType) => {

    return (<>
        <div className={`relative flex flex-col w-full h-[500px] text-white justify-center items-center   ${bgColor ? bgColor : " "}`}
            style={bgImage?.url && hasImage ? {
                backgroundImage: `url(${bgImage.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            } : undefined}>

            <h1 className="text-6xl font-bold whitespace-pre-line text-center leading-tight">{title}</h1>

            <h4 className="mt-8 text-xs">{subTitle}</h4>

            {hasButton && button && (
                <MyButton
                    label={button.label}
                    link={button.link}
                    bgColor={button.bgColor}
                    hasBorderRadius={button.hasBorderRaduis}
                    hasIcon ={button.hasIcon}
                />
            )}

        </div>
    </>

    )

}

export default Jumbotron