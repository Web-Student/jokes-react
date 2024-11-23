import React from "react"
import { Link } from "react-router-dom";
// import { toast, Toaster } from "sonner";
import useGetAllAuthors from "../CustomHooks/useGetAllAuthors";
import { AuthorDisplay } from "../DisplayComponents/AuthorDisplay";

export const AllAuthors: React.FC = () => {
    const {getQuery } = useGetAllAuthors();
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
        {authors.map((author, index: number) => (
          <div>
            <button>
                    All jokes
            </button>
            <AuthorDisplay key = {index} author = {[author[0], author[1]]}></AuthorDisplay>
          </div>
        ))}
        
        {/* <Toaster richColors position="bottom-center" />         */}
      </>
    )
}