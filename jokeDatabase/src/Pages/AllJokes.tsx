import React from "react"
import useGetAllJokes from "../CustomHooks/useGetAllJokes";
import { Link } from "react-router-dom";
import { Joke } from "../DataTransfer/Joke";
import { JokeDisplay } from "../ReusableLayoutComponents/JokeDisplay";
import { TrashCanIcon } from "../svg/TrashCanIcon";
import { toast, Toaster } from "sonner";
import { UseMutationResult } from "@tanstack/react-query";
import { useDeleteJoke } from "../CustomHooks/useDeleteJoke";

export const AllJokes: React.FC = () => {
    const {getQuery, invalidate } = useGetAllJokes();
    const jokes = getQuery.data || []
    const deleteMutation = useDeleteJoke();

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

    if (getQuery.isLoading) {
      console.log("Data is loading")
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
    } 
    if (getQuery.isError){
      return (<p>Error, please put a custom error component here</p>)
    }
    else {
      console.log("Type of jokes:", Array.isArray(jokes));  // Should be true if jokes is an array  
    }
    if (jokes.length == 0) {
      console.log("length of jokes is 0")
    }
    else {
      console.log("jokes contains" ,jokes)
    }
    
    return (
      <>
        <Link to="/">Home</Link>
        {/* <LoginLogoutButton/> */}
        {jokes.map((jokeObject:Joke, id:number) => (
          <div>
            <button onClick = {() => { handleDelete(deleteMutation, jokeObject.id)}}>
                    <TrashCanIcon />
            </button>
            <JokeDisplay key = {id} joke = {jokeObject}></JokeDisplay>
          </div>
        ))}
        
        <Toaster richColors position="bottom-center" />        
      </>
    )
}