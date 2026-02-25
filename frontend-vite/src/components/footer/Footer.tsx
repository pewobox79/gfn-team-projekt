import FooterNavigation from "./FooterNavigation";

const Footer = () => {
    return (
        <footer className="bg-[#070b2b] text-white mt-auto w-full ">
            <div className="container mx-auto px-6 py-8">
                <h3 className="text-xl font-semibold mb-6" >
                    Quick Link
                </h3>
                <FooterNavigation />

            </div>

            <div className="bg-[#3c3f55] text-center py-4 text-sm mt-auto">
                © Copyright 2024. All Rights Reserved by<span className="text-red-500 ml-1">Themes-Park</span>
            </div>

        </footer>
    )
}
export default Footer;