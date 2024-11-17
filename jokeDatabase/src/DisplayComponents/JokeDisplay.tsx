import React from "react"
import { Joke } from "../DataTransfer/Joke"

interface Props {
    joke: Joke;
}

const defaultJoke:Joke = {
    id:1,
    question: "default question",
    answer: "default answer"
}

export const JokeDisplay: React.FC<Props> = ({joke = defaultJoke}) => {
    return (
        <div className = "card">
            <div className="card-body">
                <p className="card-title">{joke.question}</p>
                <p className="card-text">{joke.answer}</p>
            </div>
        </div>
    )
}