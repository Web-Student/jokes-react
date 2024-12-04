import { GetCurrentUserEmail, IsAuthorized } from "../Authentication/authServices"
import { JokesByAuthor } from "./JokesByAuthor"

export const MyJokes: React.FC = () => {
    const myUsername = GetCurrentUserEmail()
    if (!IsAuthorized(myUsername ?? "")) {
        return (
            <p>Sorry, you are not logged in or this page does not belong to you</p>
        )
    }
    return (
        <>
            <JokesByAuthor author={myUsername ?? ""}/>
        </>
    )
}