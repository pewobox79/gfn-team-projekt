import MobilMenu from "@/components/header/MobilMenu";
import { Outlet } from "react-router-dom";

export default function MainLayout(){

    return <div className="w-full p-4 flex center flex-col items-center">
        <MobilMenu />
        <Outlet/>
    </div>
}