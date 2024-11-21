import React from "react"
import { Joke } from "../DataTransfer/Joke"
import { useDeleteJoke } from "../CustomHooks/useDeleteJoke";

interface Props {
    joke: Joke;
}

const defaultJoke:Joke = {
    id:1,
    question: "default question",
    answer: "default answer"
}

export const JokeDisplay: React.FC<Props> = ({joke = defaultJoke}) => {
    const deleteMutation = useDeleteJoke();

    return (
        <div className = "card">
            <div className="card-body">
                <button onClick = {() => {
                    deleteMutation.mutate(joke.id ?? 0)} //TODO: fix this so perhaps id isn't undefined anymore, or delete allows undefined id and has 
                    }>Delete</button>
                <p className="card-title">{joke.question}</p>
                <p className="card-text">{joke.answer}</p>
            </div>
        </div>
    )
}