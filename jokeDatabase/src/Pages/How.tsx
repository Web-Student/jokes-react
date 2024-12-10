import { Link } from "react-router"
import { Joke } from "../DataTransfer/Joke"
import { JokeDisplay } from "../ReusableLayoutComponents/JokeDisplay"

export const How = () => {
    const joke:Joke = {
        question: "What's the secret to a good joke Pacing ? .",
        answer: "",
        author: "Jonathan Allen"
    }
    return (
        <>
            <div className="container justify-content-center p-2">
                <h3>People often ask us how to create a good joke, and we only have one answer for you.</h3>
                <p><i>Joke Courtesy of Jonathan Allen in a classroom lecture</i></p>
                <JokeDisplay joke={joke}/>
                <br></br>
                <p className="py-4"><i>(The truth is, we don't actually know yet how to make a good joke. But that's your job! Add a joke <Link to="/add">here</Link>.)</i></p>
            </div>
        </>
    )
}