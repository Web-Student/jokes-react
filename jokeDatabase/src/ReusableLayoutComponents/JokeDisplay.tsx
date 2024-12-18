import React from "react"
import { Joke } from "../DataTransfer/Joke"
import { PencilIcon } from "../svg/PencilIcon";
import { Link } from "react-router";
import { toast, Toaster } from "sonner";
import useGetAllJokes from "../CustomHooks/useGetAllJokes";
import { useDeleteJoke } from "../CustomHooks/useDeleteJoke";
import { UseMutationResult } from "@tanstack/react-query";
import { TrashCanIcon } from "../svg/TrashCanIcon";
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
    answer: "default answer",
    author: ""
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
    const deleteMutation = useDeleteJoke();
    const {invalidate} = useGetAllJokes();
    const handleDelete = (deleteMutation:UseMutationResult<unknown, Error, number>, id?: number,) => {
        if (id === undefined) {
            toast.error("Error deleting joke: joke does not exist")
        }
        
        deleteMutation.mutate(id ?? 0, {
            onSuccess: () => {
                toast.success("Joke deleted")
                invalidate();
            }
        }) 
      }
      
    return (
        <div className = "card bg-custom-bg">
            <div className="card-body">
                        <button onClick = {() => { handleDelete(deleteMutation, joke.id)}}>
                            <TrashCanIcon />
                        </button>
                        <Link className="m-4" to = {`edit/${joke.id}`}>
                            <PencilIcon/>
                        </Link>
                <p className="card-title">{joke.question}</p>
                <p className="card-text">{joke.answer}</p>
                <p className="text-end">by {joke.author == '' ? "Anonymous" : joke.author}</p>
            </div>
            <Toaster richColors position="top-center" />
        </div>
    )
}