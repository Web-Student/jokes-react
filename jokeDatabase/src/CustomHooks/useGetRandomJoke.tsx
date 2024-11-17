import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Joke } from "../DataTransfer/Joke";

export default function useGetRandomJoke(): UseQueryResult<Joke, unknown> {
    const baseURL = "http://localhost:5096/" //TODO: set in environment variables
    //ToDO: move the base url into a custom hook to return the base url, which can do the localhost vs api logic and environment variable reading
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