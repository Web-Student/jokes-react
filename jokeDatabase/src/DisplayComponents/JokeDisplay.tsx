import React from "react"
import { Joke } from "../DataTransfer/Joke"
//import { useDeleteJoke } from "../CustomHooks/useDeleteJoke";
//import { TrashCanIcon } from "../svg/TrashCanIcon";
//import { toast, Toaster } from "sonner";
//import { UseMutationResult } from "@tanstack/react-query";

interface Props {
    joke: Joke;
}

const defaultJoke:Joke = {
    id:1,
    question: "default question",
    answer: "default answer"
}

// const handleDelete = (deleteMutation:UseMutationResult<unknown, Error, number>, id?: number,) => {
//     if (id === undefined) {
//         toast.error("Error deleting joke: joke does not exist")
//     }
    
//     deleteMutation.mutate(id ?? 0, {
//         onSuccess: () => {
//             toast.success("Joke deleted")
//         }
//     }) 
// }
export const JokeDisplay: React.FC<Props> = ({joke = defaultJoke}) => {
    //const deleteMutation = useDeleteJoke();
    return (
        <div className = "card">
            <div className="card-body">
                {/* <button onClick = {() => { handleDelete(deleteMutation, joke.id)}}>
                    <TrashCanIcon />
                </button> */}
                <p className="card-title">{joke.question}</p>
                <p className="card-text">{joke.answer}</p>
            </div>
            {/* <Toaster richColors position="bottom-center" /> */}
        </div>
    )
}