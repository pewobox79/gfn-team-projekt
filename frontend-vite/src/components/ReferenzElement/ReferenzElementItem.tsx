import type { ReferenzElementItemType } from "@/types/referenzElement"

const imagePath = "./src/assets/images/referenzElementImages/"

export default function ReferenzElementItem(item: ReferenzElementItemType) {

    console.log("item", item)

    return <div className="flex flex-col text-center p-0 md:p-12">
        <div className="mx-0 p-2 m-3">
            <img className="rounded-full w-80 h-80 object-cover p-3 mx-auto border-2 border-dashed" src={`${imagePath}${item.image}`} alt="Beschreibung des Bildes" />
        </div>

        <div className="text-center ">
            <h3 className="heading__title">{item.title}</h3>
            <p className="text-base w-72 justify-self-center text-center mt-4 leading-7 font-normal text-gray-500">{item.description}</p>
        </div>
        <div className="text-center m-2">
            <button className="border bg-sky-200" onClick={() => alert(`${item.title}`)}>{item.title}</button>
        </div>
    </div>

}