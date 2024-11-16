import React from "react"
import { Joke } from "../DataTransfer/Joke"

interface Props {
    joke: Joke;
}
export const JokeDisplay: React.FC<Props> = ({joke}) => {
    return (
        <div>
            <h3>{joke.question}</h3>
            <p>{joke.answer}</p>
        </div>
    )
}