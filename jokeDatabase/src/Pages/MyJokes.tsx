import { GetCurrentUserEmail, IsAuthorized } from "../Authentication/authServices"
import { JokesOnThisMachine } from "../LocalStorage/JokesOnThisMachine"
import { JokesByAuthor } from "./JokesByAuthor"

export const MyJokes: React.FC = () => {
    const myUsername = GetCurrentUserEmail()
    if (!IsAuthorized(myUsername ?? "")) {
        return (
            <>
                <JokesOnThisMachine />
                <p>Sorry, you are not logged in or this page does not belong to you</p>
            </>
        )
    }
    return (
        <>
            <JokesOnThisMachine />
            <JokesByAuthor author={myUsername ?? ""}/>
        </>
    )
}