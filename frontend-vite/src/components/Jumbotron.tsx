import getOptimizedImage from "@/utils/formatter"
import MyButton from "./MyButton"
import Navbar from "./header/Navbar"
import type { JumbotronType } from "@/types/types"

const Jumbotron = ({ title, subTitle, bgImage, hasBgImage, bgColor, hasButton, button }: JumbotronType) => {
    const optimized = getOptimizedImage(bgImage)
    const bgClass =
        bgColor === "black"
            ? "bg-black"
            : bgColor === "red"
                ? "bg-red-600"
                : "bg-white";

    return (<>
        <div className={`relative flex flex-col w-full h-[500px] text-white justify-center items-center  ${bgClass}`}
            style={optimized?.url && hasBgImage ? {
                backgroundImage: `url(${optimized.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            } : undefined}>

            <Navbar />
            <h1 className="text-6xl font-bold whitespace-pre-line text-center leading-tight">{title}</h1>

            <h4 className="mt-8 mb-8 text-xs">{subTitle}</h4>

            {hasButton && button && (
                <MyButton
                    label={button.label}
                    link={button.link}
                    bgColor={button.bgColor}
                    hasBorderRadius={button.hasBorderRadius}
                />
            )}

        </div>
    </>

    )

}

export default Jumbotron