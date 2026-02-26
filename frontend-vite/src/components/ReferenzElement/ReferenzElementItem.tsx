import type { ReferenzElementItemType } from "@/types/referenzElement"
import MyButton, { type MyButtonProps } from "../MyButton"

const imagePath = "./src/assets/images/referenzElementImages/"

export default function ReferenzElementItem(item: ReferenzElementItemType) {

    console.log("item", item)

    const bittonData: MyButtonProps = {
        label: "Test Button",
        link: "www.db.de",
        bgColor: 'red',
        hasBorderRadius: true
    }

    if (item.hasButton && item.button) {
        bittonData.label = item.button.label
        bittonData.link = item.button.link
        bittonData.bgColor = item.button.bgColor
        bittonData.hasBorderRadius = item.button.hasBorderRadius
    }

    return <div className="flex flex-col text-center p-0 md:p-12">
        <div className="mx-0 p-2 m-3">
            <img className="rounded-full w-80 h-80 object-cover p-3 mx-auto border-2 border-dashed" src={`${imagePath}${item.image}`} alt="Beschreibung des Bildes" />
        </div>

        <div className="text-center ">
            <h3 className="heading__title">{item.title}</h3>
            <p className="text-base w-72 justify-self-center text-center mt-4 leading-7 font-normal text-gray-500">{item.description}</p>
        </div>
        <div className="text-center m-2" style={{display: item.hasButton ? "block" : "none"}}>
            <MyButton label={bittonData.label} link={bittonData.link} bgColor={bittonData.bgColor} hasBorderRadius={bittonData.hasBorderRadius} />
        </div>
    </div>

}