import { Link } from "react-router-dom";
import { JokeDisplay } from "../ReusableLayoutComponents/JokeDisplay";
//import { toast, Toaster } from "sonner";

import LoginLogoutButton from "../Authentication/LoginLogoutButton";
import useGetJokeById from "../CustomHooks/useGetJokeById";
import { Toaster } from "sonner";

interface JokesByAuthorProps {
    jokeid: number;
}


export const Edit: React.FC<JokesByAuthorProps> = ({jokeid}) => {
    const {getQuery, invalidate } = useGetJokeById(jokeid);
    const originalJoke = getQuery.data || {
        question: "Error retrieving joke",
        answer: "error retrieving joke",
        author: ""
    }
    //const [editedJoke, setEditedJoke] = useState(originalJoke)


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
                <div className="column">
                    <h3>Edited Version:</h3>
                    <p>I need to turn the input form from my "add joke page" into a reusable input component, pass it a parameter for default vaues (default joke), and render that here</p>
                </div>
            </div>
        </div>
        
        <Toaster richColors position="bottom-center" />        
      </>
    )
}