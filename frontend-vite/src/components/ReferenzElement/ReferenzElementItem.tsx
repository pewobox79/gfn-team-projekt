import type { ReferenzElementItemType } from "@/types/referenzElement"
import MyButton from "../MyButton"
import getOptimizedImage from "@/utils/formatter"
import type { MyButtonProps } from "@/types/types"

export default function ReferenzElementItem(item: ReferenzElementItemType) {

    const buttonData: MyButtonProps = {
        label: "Test Button",
        link: "www.db.de",
        bgColor: 'red',
        hasBorderRadius: true
    }

    if (item.hasButton && item.button) {
        buttonData.label = item.button.label
        buttonData.link = item.button.link
        buttonData.bgColor = item.button.bgColor
        buttonData.hasBorderRadius = item.button.hasBorderRadius
    }
    const {url, alt} = getOptimizedImage(item.image)

    return <div className="flex flex-col text-center p-0 md:p-12">
        <div className="mx-0 p-2 m-3">
            <img className="rounded-full w-80 h-80 object-cover p-3 mx-auto border-2 border-dashed" src={url} alt={alt}/>
        </div>

        <div className="text-center ">
            <h3 className="heading__title">{item.title}</h3>
            <p className="text-base w-72 justify-self-center text-center mt-4 leading-7 font-normal text-gray-500">{item.description}</p>
        </div>
        <div className="text-center m-2" style={{display: item.hasButton ? "block" : "none"}}>
            <MyButton label={buttonData.label} link={buttonData.link} bgColor={buttonData.bgColor} hasBorderRadius={buttonData.hasBorderRadius} />
        </div>
    </div>

}