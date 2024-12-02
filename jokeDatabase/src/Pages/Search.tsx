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
            <TextInput label="search" defaultValue="Search for a joke by text or author ..." validationFunction={isValid}></TextInput>
            <p>Insert reusable input component here for them to search with.</p>
            <p>This is the component where we can search for a page. I would love for it to just drop down from the top but don't know how</p>

            <div>
                {jokes.filter(j => j.question && j.question.includes('ques')).map((joke, index) => (
                    <div key={index}>
                        <JokeDisplay joke={joke}></JokeDisplay>
                    </div>
                ))}
            </div>
        </>
    )
}