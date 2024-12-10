import { NavbarLink } from "./NavbarLink"
import LoginLogoutButton from "../Authentication/LoginLogoutButton"
import { SearchIcon } from "../svg/SearchIcon"
import { HouseIcon } from "../svg/HouseIcon"
import { AddIcon } from "../svg/AddIcon"
import { ListIcon } from "../svg/ListIcon"
import { AuthorsIcon } from "../svg/AuthorsIcon"
import { PersonIcon } from "../svg/PersonIcon"
import { InfoIcon } from "../svg/InfoIcon"

export const Navigation = () => {
    return (
        <>
            <div className="navbar bg-secondary">
                {/* <div className="nav-item p-3">
                    <Link to="/">Joke of the day</Link>
                </div> */}
                <NavbarLink text="Home" path="/" icon={<HouseIcon/>}/>
                <NavbarLink text="Search" path="/search" icon={<SearchIcon/>}/>
                <NavbarLink text="All jokes" path="/jokes" icon={<ListIcon/>}/>
                <NavbarLink text="Add a joke" path="/add" icon={<AddIcon/>} />
                <NavbarLink text="All authors" path="/authors" icon={<AuthorsIcon/>} />
                <NavbarLink text="My jokes" path="/myjokes" icon={<PersonIcon/>}/>
                <NavbarLink text="How" path="/how"  icon={<InfoIcon/>}/>
                <div className="p-2 m-2">
                    <LoginLogoutButton/>
                </div>
            </div>
        </>
    )
}