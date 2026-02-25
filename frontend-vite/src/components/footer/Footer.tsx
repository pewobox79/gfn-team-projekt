import FooterNavigation from "./FooterNavigation";

const Footer = ({navHeading = "Quick Link", copyRight = "© Copyright 2024. All Rights Reserved by", company= "Themes-Park"}: {navHeading: string,copyRight: string ,company: string }) => {
    return (
        <footer className="bg-[#070b2b] text-white mt-auto w-full ">
            <div className="container mx-auto px-6 py-8">
                <h3 className="text-xl font-semibold mb-6" >
                    {navHeading}
                </h3>
                <FooterNavigation />

            </div>

            <div className="bg-[#3c3f55] text-center py-4 text-sm mt-auto">
                {copyRight}<span className="text-red-500 ml-1">{company}</span>
            </div>

        </footer>
    )
}
export default Footer;