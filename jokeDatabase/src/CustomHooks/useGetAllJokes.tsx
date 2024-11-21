import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query"
import { Joke } from "../DataTransfer/Joke";

export default function useGetAllJokes(): 
{getQuery: UseQueryResult<Joke[], unknown>, invalidate: () => void;}
{
    const baseURL = "http://localhost:5096/" //TODO: set in environment variables
    const queryClient = useQueryClient(); // Access the QueryClient
    console.log("Called get all jokes");
    const getQuery = useQuery({
        queryKey: ['allJokes'],
        queryFn: async(): Promise<Joke[]>  => {
            //put our function in here
            //I'm following along with https://antematter.io/blogs/simplify-api-data-fetching-with-tanstack-queries 
            const data = await fetch(baseURL + 'jokes');
            //console.log("data in usehook is ", data.json());
            const d = await data.json();
            console.log("data: ", d);
            return d;
        },
        staleTime: 10000, //10 minutes and it refreshes,
    });

    const invalidate = () => {
        queryClient.invalidateQueries({queryKey: ['allJokes']})
    };
    return  {getQuery, invalidate} //, invalidate
}