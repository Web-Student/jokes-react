import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query"
import { Joke } from "../DataTransfer/Joke";
import { GetBaseURL } from "../DataTransfer/GetBaseUrl";

export default function useGetJokeById(jokeid: number): 
{getQuery: UseQueryResult<Joke, unknown>, invalidate: () => void;}
{
    //const baseURL = "http://localhost:5096/" 
    const baseURL = GetBaseURL();
    const queryClient = useQueryClient(); // Access the QueryClient
    console.log("Called get joke by id ", jokeid);
    const getQuery = useQuery({
        queryKey: ['allJokes'],
        queryFn: async(): Promise<Joke>  => {
            //I'm following along with https://antematter.io/blogs/simplify-api-data-fetching-with-tanstack-queries 
            const data = await fetch(baseURL + `jokes/${jokeid}`);
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