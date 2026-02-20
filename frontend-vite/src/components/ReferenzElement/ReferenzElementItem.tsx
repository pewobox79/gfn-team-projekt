import type { ReferenzElementItemType } from "@/types/referenzElement"
import Button from 'react';


const imagePath = "./src/assets/images/referenzElementImages/"

export default function ReferenzElementItem(item: ReferenzElementItemType) {

    console.log("item", item)

    return <div className="flex-1 border my-3 p-2 col-lg-4 col-md-6 col-sm-12 col-12 single-services services-inner">
        {/* <div>{item.title}</div> */}
        {/* <div>{item.description}</div> */}
        <div><img src={`${imagePath}${item.image}`} alt="Beschreibung des Bildes" /></div>

        <div className="services-content services-content-style-1 text-center">
            <h5 className="title">{item.title}</h5>
            <p className="description">{item.description}</p>
        </div>
        {/* <div><Button title={item.title} onPress={()=>showAlert('Cannot press this one')}/></div> */}
        <div className="text-center">
            <button className="border bg-sky-200" onClick={() => alert(`${item.title}`)}>{item.title}</button>
        </div>

        {/* <div><img src="./src/assets/images/referenzElementImages/services-round-1.png" alt="Beschreibung des Bildes" /></div> */}
    </div>

}