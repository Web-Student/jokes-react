import React from "react"
import useGetAllJokes from "../CustomHooks/useGetAllJokes";
import { Link } from "react-router-dom";

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
    
    return (
      <>
        <Link to="/">Home</Link>
        {/* <LoginLogoutButton/> */}
        {jokes.map((joke, id:number) => (
          <div key={id}>
              <h3>{joke.question}</h3>
              <h4>{joke.answer}</h4>
          </div>
        ))}        
      </>
    )
}