import { useMutation} from "@tanstack/react-query";
import { Joke } from "../DataTransfer/Joke";

export function useAddJoke() {
    const baseURL = "http://localhost:5096/" //TODO: set in environment variables
    //ToDO: move the base url into a custom hook to return the base url, which can do the localhost vs api logic and environment variable reading
    return (
        useMutation({
            mutationFn: async(joke:Joke) => {
                const data = await fetch(baseURL + "add", {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(joke)
                });
                const returnedId = await data.json();
                console.log("data", returnedId);
                if (returnedId == -1) {
                    return "Error adding joke"
                }

                return returnedId;
            }
        })
    )
}