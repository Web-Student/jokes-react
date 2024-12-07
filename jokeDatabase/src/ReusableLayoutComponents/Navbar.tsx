import { NavbarLink } from "./NavbarLink"
import LoginLogoutButton from "../Authentication/LoginLogoutButton"

export const Navigation = () => {
    return (
        <>
            <div className="navbar bg-secondary">
                {/* <div className="nav-item p-3">
                    <Link to="/">Joke of the day</Link>
                </div> */}
                <NavbarLink text="Home" path="/" />
                <NavbarLink text="Search" path="/search" />
                <NavbarLink text="All jokes" path="/jokes"/>
                <NavbarLink text="Add a joke" path="/add" />
                <NavbarLink text="All authors" path="/authors" />
                <NavbarLink text="sample link someday for my jokes" path="/"/>
                <div className="p-2 m-2">
                    <LoginLogoutButton/>
                </div>
            </div>
        </>
    )
}