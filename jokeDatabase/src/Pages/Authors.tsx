import React from "react"
// import { toast, Toaster } from "sonner";
import useGetAllAuthorCounts from "../CustomHooks/useGetAllAuthorCounts";
import { AuthorDisplay } from "../ReusableLayoutComponents/AuthorDisplay";
import { Link } from "react-router";

export const AllAuthors: React.FC = () => {
    const {getQuery } = useGetAllAuthorCounts();
    const authors = getQuery.data || []

    if (getQuery.isLoading) {
      console.log("Data is loading")
      return (
        <>
            <p>Loading authors ...</p>
            <div className="spinner-border" role="status">
                <span className="aria-hidden">Loading...</span>
            </div>
        </>
      )
    } 
    if (getQuery.isError){
      return (<p>Error fetching all authors, please put a custom error component here</p>)
    }
    else {
      console.log("Type of authors", Array.isArray(authors));  // Should be true if jokes is an array  
    }
    if (authors.length == 0) {
      console.log("length of jokes is 0")
      return (<p>No authors found</p>)
    }
    else {
      console.log("jokes contains" ,authors)
    }
    
    return (
      <>
        <Link to="/">Home</Link>
        {/* <LoginLogoutButton/> */}
        {authors.map((authorCount, index: number) => (
          <div>
            <AuthorDisplay key = {index} person = {authorCount}></AuthorDisplay>
          </div>
        ))}
        
        {/* <Toaster richColors position="bottom-center" />         */}
      </>
    )
}