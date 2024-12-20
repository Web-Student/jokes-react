import { JokeDisplay } from "../ReusableLayoutComponents/JokeDisplay";
import useGetJokeById from "../CustomHooks/useGetJokeById";
import { toast, Toaster } from "sonner";
import { TextInput } from "../ReusableInputComponents/TextInput";
import { useEffect, useState } from "react";
import { useEditJoke } from "../CustomHooks/useEditJoke";

interface JokesByAuthorProps {
    jokeid: number;
}

export const Edit: React.FC<JokesByAuthorProps> = ({jokeid}) => {
    // const {getQuery, invalidate } = useGetJokeById(jokeid);
    const {getQuery} = useGetJokeById(jokeid); //TODO: invalidate jokes
    console.log("edit joke query data was ", getQuery.data)
    // const [editedJoke] = useState(originalJoke)
    
    const validationFunction = () => {
      return true;
    }
    
    const handleQuestionChange = (value: string) => {
      setEditedJoke((oldJoke) => ({...oldJoke, question: value}));
    }
    
    const handleAnswerChange = (value: string) => {
      setEditedJoke((oldJoke) => ({...oldJoke, answer: value}));
    }
    const editHook = useEditJoke();
    
    
    const [editedJoke, setEditedJoke] = useState( getQuery.data || {
      question: "Error retrieving joke",
      answer: "error retrieving joke",
      author: ""
    })
    
    const [initiallyFetchedData, setInitiallyFetchedData] = useState(false)
    useEffect(() => {
      if (getQuery.data && !initiallyFetchedData) {
        setEditedJoke(getQuery.data);
        setInitiallyFetchedData(true);
      }
    }, [getQuery.data, initiallyFetchedData])
    
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

    const EditJoke = (e:React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      editHook.mutate(editedJoke)
      if (editHook.data == "") {
        toast.error("Error updating the joke");
      }
      else {
        toast.success("Joke updated successfully")
      }
    }
    
    const originalJoke = getQuery.data || {
        question: "",
        answer: "",
        author: ""
    }
    return (
      <>
        <div className="container">
            <div className="row"> 
                <div className="column">
                    <h3>Original Joke:</h3>
                    <JokeDisplay joke={originalJoke} />
                </div>
                <form className="column">
                    <h3>Edited Version:</h3>
                    <TextInput label={"Question"} defaultValue={editedJoke.question} validationFunction={validationFunction} onValueChange={handleQuestionChange}/>
                    <TextInput label={"Answer"} defaultValue={editedJoke.answer} validationFunction={validationFunction} onValueChange={handleAnswerChange} />
                    <p>Edited question: {editedJoke.question}</p>
                    <p>Edited answer: {editedJoke.answer}</p>
                    <br></br>
                    <button className="btn btn-secondary" onSubmit={(e) => EditJoke(e)}>Request Edit</button>
                </form>
            </div>
        </div>
        
        <Toaster richColors closeButton position="bottom-center" />        
      </>
    )
}