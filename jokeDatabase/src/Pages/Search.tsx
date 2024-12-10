import { useState } from "react";
import useGetAllJokes from "../CustomHooks/useGetAllJokes";
import { TextInput } from "../ReusableInputComponents/TextInput";
import { JokeDisplay } from "../ReusableLayoutComponents/JokeDisplay";

export const Search:React.FC = () => {
    // const {getQuery, invalidate } = useGetAllJokes();
    const {getQuery} = useGetAllJokes();
    const jokes = getQuery.data || []
    console.log("Joke list", {jokes})
    const [searchTerm, setSearchTerm] = useState('')
    function isValid() {
        return true
    }

    const handleChange = (value: string) => {
        setSearchTerm(value);
    }
    console.log("value: ", searchTerm)

    return (
        <>
            <TextInput label="Search" defaultValue="Search ..." validationFunction={isValid} onValueChange = {handleChange}></TextInput>

            <div>
                {jokes.filter(j => (j.question && j.question.toLowerCase().includes(searchTerm.toLowerCase())) || (j.answer && j.answer.toLowerCase().includes(searchTerm.toLowerCase()))).map((joke, index) => (    
                    <div key={index}>
                        <JokeDisplay joke={joke}></JokeDisplay>
                    </div>
                ))}
            </div>
        </>
    )
}
