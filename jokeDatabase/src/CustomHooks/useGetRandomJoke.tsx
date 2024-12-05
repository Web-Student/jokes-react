import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Joke } from "../DataTransfer/Joke";
import { GetBaseURL } from "../DataTransfer/GetBaseUrl";

export default function useGetRandomJoke(): UseQueryResult<Joke, unknown> {
    //const baseURL = "http://localhost:5096/" 
    const baseURL = GetBaseURL();
    
    return (
        useQuery({
            queryKey: ['randomJoke'],
            queryFn: async(): Promise<Joke> => {
                const data = await fetch(baseURL + "random");
                const d = await data.json();
                console.log("data", d);
                return d;
            }
        })
    );
}