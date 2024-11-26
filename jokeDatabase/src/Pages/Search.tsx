import React from "react"
import { TextInput } from "../ReusableInputComponents/TextInput"

export const Search:React.FC = () => {
    function isValid() {
        return true
    }
    return (
        <>
            <TextInput label="search" defaultValue="Search for a joke by text or author ..." validationFunction={isValid}></TextInput>
            <p>Insert reusable input component here for them to search with.</p>
            <p>This is the component where we can search for a page. I would love for it to just drop down from the top but don't know how</p>
        </>
    )
}