import { getNavigation } from "@/lib/axios/navigationHelper"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const FooterNavigation = () => {
    const [links, setLinks] = useState<[]>([])

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
            {links.map((linkNav: { id: number, label: string, link: string }) => (
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