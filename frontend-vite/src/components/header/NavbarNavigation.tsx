import { getNavigation } from "@/lib/axios/navigationHelper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface LinkType {
    label: string,
    id: number,
    link: string,
}
const NavbarNavigation = ({ onClick }: { onClick?: () => void }) => {
    const [links, setLinks] = useState([])
    useEffect(() => {
        const fetchLinks = async () => {
            const response = await getNavigation();
            if (response) {
                setLinks(response.data.navLinks)
            }
        }
        fetchLinks()
    }, [])

    return (
        <>
            {links.map((item: LinkType) => (
                <Link key={item.id + item.label}
                    to={item.link}
                    onClick={onClick}
                    className="block md:inline text-block hover:text-orange-500 font-medium text-lg transition px-6 md:px-0 py-4 md:py-0"
                >
                    {item.label}
                </Link>
            ))}
        </>
    );
};
export default NavbarNavigation;