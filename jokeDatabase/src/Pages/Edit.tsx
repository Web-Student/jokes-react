import { Link } from "react-router-dom";
import { JokeDisplay } from "../ReusableLayoutComponents/JokeDisplay";
//import { toast, Toaster } from "sonner";

import LoginLogoutButton from "../Authentication/LoginLogoutButton";
import useGetJokeById from "../CustomHooks/useGetJokeById";
import { Toaster } from "sonner";
import { TextInput } from "../ReusableInputComponents/TextInput";
import { useState } from "react";

interface JokesByAuthorProps {
    jokeid: number;
}


export const Edit: React.FC<JokesByAuthorProps> = ({jokeid}) => {
    // const {getQuery, invalidate } = useGetJokeById(jokeid);
    const {getQuery} = useGetJokeById(jokeid); //TODO: invalidate jokes
    const originalJoke = getQuery.data || {
        question: "Error retrieving joke",
        answer: "error retrieving joke",
        author: ""
    }
    const [editedJoke, setEditedJoke] = useState(originalJoke)

    const validationFunction = () => {
      return true;
    }


    // const deleteMutation = useDeleteJoke();

    // const handleDelete = (deleteMutation:UseMutationResult<unknown, Error, number>, id?: number,) => {
    //   if (id === undefined) {
    //       toast.error("Error deleting joke: joke does not exist")
    //   }
      
    //   deleteMutation.mutate(id ?? 0, {
    //       onSuccess: () => {
    //           toast.success("Joke deleted")
    //           invalidate();
    //       }
    //   }) 
    // }

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
      console.log("jokes contains" ,originalJoke)
    }
    const EditJoke = (e:React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
    }

    return (
      <>
        <LoginLogoutButton/>
        <Link to="/">Home</Link>
        <div className="container">
            <div className="row"> 
                <div className="column">
                    <h3>Original Joke:</h3>
                    <JokeDisplay joke={originalJoke} />
                </div>
                <form className="column">
                    <h3>Edited Version:</h3>
                    <TextInput label={"Question"} defaultValue={editedJoke.question} validationFunction={validationFunction}/>
                    <TextInput label={"Answer"} defaultValue={editedJoke.answer} validationFunction={validationFunction} />
                    <p>Edited question: {editedJoke.question}</p>
                    <p>Edited answer: {editedJoke.answer} </p>
                    <br></br>
                    <button className="btn btn-secondary" onSubmit={(e) => EditJoke(e)}>Request Edit</button>
                </form>
            </div>
        </div>
        
        <Toaster richColors position="bottom-center" />        
      </>
    )
}