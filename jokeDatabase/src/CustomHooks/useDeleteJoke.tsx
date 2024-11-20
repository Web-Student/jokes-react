import { useMutation} from "@tanstack/react-query";

export function useDeleteJoke() {
    const baseURL = "http://localhost:5096/" //TODO: set in environment variables
    //ToDO: move the base url into a custom hook to return the base url, which can do the localhost vs api logic and environment variable reading
    return (
        useMutation({
            mutationFn: async(id:number) => {
                const data = await fetch(baseURL + `delete/${id}`, {
                    method: 'POST',
                    headers: { //do I even still need this, since I removed the joke id from the body?
                        "Content-type": "application/json"
                    }
                });
                return data.json();
            }
        })
    )
}