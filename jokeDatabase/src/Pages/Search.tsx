import React from "react"
import { TextInput } from "../ReusableInputComponents/TextInput"
import useGetAllJokes from "../CustomHooks/useGetAllJokes"
import { JokeDisplay } from "../ReusableLayoutComponents/JokeDisplay";

export const Search:React.FC = () => {
    // const {getQuery, invalidate } = useGetAllJokes();
    const {getQuery} = useGetAllJokes();
    const jokes = getQuery.data || []
    console.log("Joke list", {jokes})
    function isValid() {
        return true
    }
    return (
        <>
            <TextInput label="Search" defaultValue="Search for a joke ..." validationFunction={isValid}></TextInput>
            <p>Go look at contexts (from the list detail assignment) to implement the data binding</p>

            <div>
                {jokes.filter(j => (j.question && j.question.includes('how')) || (j.answer && j.answer.includes('how'))).map((joke, index) => (
                    <div key={index}>
                        <JokeDisplay joke={joke}></JokeDisplay>
                    </div>
                ))}
            </div>
        </>
    )
}