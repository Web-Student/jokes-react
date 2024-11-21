import { useMutation} from "@tanstack/react-query";

export function useDeleteJoke() {
    const baseURL = "http://localhost:5096/" //TODO: set in environment variables
    //ToDO: move the base url into a custom hook to return the base url, which can do the localhost vs api logic and environment variable reading
    return (
        useMutation({
            mutationFn: async(id:number) => {
                console.log(`called the delete function with id ${id}`)
                console.log(`is of type: ${typeof(id)}`)
                const response = await fetch(baseURL + `delete/${id}`, {
                    method: 'DELETE'
                });
                
                if (!response.ok) {
                    throw new Error(`Failed to delete joke with id ${id}`); //do i really wan tto do that though?
                }
                return response.json();
            }
        })
    )
}