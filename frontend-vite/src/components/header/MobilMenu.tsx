import { useState } from "react";

const MobilMenu = () => {
    const [open, setOpen] = useState(true);

    const menuItem = [
        "Home",
        "About Us",
        "Services",
        "Blog",
        "Pages",
        "Contact Us",
    ];
    return (
        <>
            <button onClick={() => setOpen(true)}
                className="m-5 px-4 py-2 bg-blue-600 text-white rounded">
                Open Menu
            </button>
            {/*Overlay*/}
            {open &&
             (<div className="fixed inset-0 bg-black/40 z-40 "
            onC/>)}

            
            {/*Sidebar*/}
            {/*Header*/}
            {/*Menu Items*/}
            

            
            
        </>
    )
}
export default MobilMenu;