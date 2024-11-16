import React from "react"
import useGetAllJokes from "../CustomHooks/useGetAllJokes";
import { Link } from "react-router-dom";
import { Joke } from "../DataTransfer/Joke";

export const AllJokes: React.FC = () => {
    const { data: jokes = [], isLoading, isError } = useGetAllJokes();
    
    if (isLoading) {
      console.log("Data is loading")
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )
    } 
    if (isError){
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
          //<JokeDisplay key = {id} joke = {jokeObject}></JokeDisplay>
          <div key={id}>
              <h3>{jokeObject.question}</h3>
              <h4>{jokeObject.answer}</h4>
          </div>
        ))}        
      </>
    )
}