import { useQuery, useQueryClient, UseQueryResult } from "@tanstack/react-query"
import { AuthorCount } from "../DataTransfer/AuthorCount";

export default function useGetAllAuthorCounts(): 
{getQuery: UseQueryResult<AuthorCount[], unknown>, invalidate: () => void;}
{
    const baseURL = "http://localhost:5096/" //TODO: set in environment variables
    const queryClient = useQueryClient(); // Access the QueryClient
    console.log("Called get all jokes");
    const getQuery = useQuery({
        queryKey: ['allAuthors'],
        queryFn: async(): Promise<AuthorCount[]>  => {
            //put our function in here
            //I'm following along with https://antematter.io/blogs/simplify-api-data-fetching-with-tanstack-queries 
            const data = await fetch(baseURL + 'authors');
            //console.log("data in usehook is ", data.json());
            const d = await data.json();
            console.log("data: ", d);
            return d;
        },
        staleTime: 10000, //10 minutes and it refreshes,
    });

    const invalidate = () => {
        queryClient.invalidateQueries({queryKey: ['allAuthors']}) //we would invalidate this when someone adds a joke, if this is their first one
    };
    return  {getQuery, invalidate} //, invalidate
}