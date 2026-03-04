import { useEffect, useState } from "react";
import FooterNavigation from "./FooterNavigation";
import { getFooter } from "@/lib/axios/footerHelper";
import type { FooterTypes } from "@/types/types";

const Footer = () => {
    const [footer, setFooter] = useState<FooterTypes>()

    useEffect(() => {
        const fetchFooter = async () => {
            const response = await getFooter();

            if (response) {
                setFooter(response.data)
            }
        }
        fetchFooter()
    }, [])
    console.log(footer)
    return (
        <footer className="bg-[#070b2b] text-white mt-auto w-full ">
            <div className="container mx-auto px-6 py-8">
                <h3 className="text-xl font-semibold mb-6" >
                    {footer?.navHeading}
                </h3>
                <FooterNavigation />

            </div>

            <div className="bg-[#3c3f55] text-center py-4 text-sm mt-auto">
                {footer?.copyright}<span className="text-red-500 ml-1">{footer?.company}</span>
            </div>

        </footer>
    )
}
export default Footer;