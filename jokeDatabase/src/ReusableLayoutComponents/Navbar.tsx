import { Link } from "react-router"
import { NavbarLink } from "./NavbarLink"

export const Navigation = () => {
    return (
        <>
            <div className="navbar bg-secondary">
                <div className="nav-item p-3">
                    <Link to="/">Joke of the day</Link>
                </div>
                <div className="nav-item p-3">
                    <Link to="/search">Search</Link>
                </div>
                <div className="nav-item p-3">
                    <Link to="/jokes">All jokes</Link>
                </div>
                <div className="nav-item p-3">
                    <Link to="/add">Add a joke</Link>
                </div>
                <div className="nav-item">
                    <Link to="/authors">All authors</Link>
                </div>
                <NavbarLink text="sampleLink" path="/" />
            </div>
        </>
    )
}