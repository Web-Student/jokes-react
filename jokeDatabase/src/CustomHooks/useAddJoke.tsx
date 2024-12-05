import { useMutation} from "@tanstack/react-query";
import { Joke } from "../DataTransfer/Joke";
import { GetBaseURL } from "../DataTransfer/GetBaseUrl";

export function useAddJoke() {
    const baseURL = GetBaseURL();
    
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