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
        setSearchTerm(value)
    }
    console.log("value: ", searchTerm)

    return (
        <>
            <TextInput label="Search" defaultValue="Search for a joke ..." validationFunction={isValid} onValueChange = {handleChange}></TextInput>
            <p>Go look at contexts (from the list detail assignment) to implement the data binding</p>

            <div>
                {/* {jokes.filter(j => (j.question && j.question.includes('how')) || (j.answer && j.answer.includes('how'))).map((joke, index) => ( */}
                {jokes.filter(j => (j.question && j.question.includes(searchTerm)) || (j.answer && j.answer.includes(searchTerm))).map((joke, index) => (    
                    <div key={index}>
                        <JokeDisplay joke={joke}></JokeDisplay>
                    </div>
                ))}
            </div>
        </>
    )
}