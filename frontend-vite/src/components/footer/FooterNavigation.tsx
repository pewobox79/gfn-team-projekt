import { getNavigation } from "@/lib/axios/navigationHelper"
import type { NavItemTypes } from "@/types/types"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const FooterNavigation = () => {
    const [links, setLinks] = useState<NavItemTypes[]>([])

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
        <ul>
            {links.map((linkNav: NavItemTypes) => (
                <Link key={linkNav.id} to={linkNav.link}>
                    <li
                        className="hover:text-white cursor-pointer"
                    >
                        {linkNav.label}
                    </li>
                </Link>
            ))}
        </ul>
    )
}
export default FooterNavigation;