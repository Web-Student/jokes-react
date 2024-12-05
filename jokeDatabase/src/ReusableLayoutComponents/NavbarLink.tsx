import { Link } from "react-router"
interface Props {
    text: string,
    path: string
}

export const NavbarLink:React.FC<Props> = ({path, text}) => {
    return (
        <>
            <div className="nav-item p-2 bg-success">
                <Link to={path}>{text}</Link>
            </div>
        </>
    )
}