import { ReactNode } from "react"
import { Link } from "react-router"
interface Props {
    text: string,
    path: string,
    icon?: ReactNode
}

export const NavbarLink:React.FC<Props> = ({path, text, icon}) => {
    return (
        <>
            <div className="nav-item p-2 m-2">
                <Link to={path} className="p-2">{icon}{text}</Link>
            </div>
        </>
    )
}