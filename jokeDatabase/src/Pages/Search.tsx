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
            <TextInput label="Search" defaultValue="Search for a joke ..." validationFunction={isValid} onValueChange = {handleChange}></TextInput>
            <p>Go look at contexts (from the list detail assignment) to implement the data binding</p>

            <div>
                {/* {jokes.filter(j => (j.question && j.question.includes('how')) || (j.answer && j.answer.includes('how'))).map((joke, index) => ( */}
                {jokes.filter(j => (j.question && j.question.toLowerCase().includes(searchTerm.toLowerCase())) || (j.answer && j.answer.toLowerCase().includes(searchTerm.toLowerCase()))).map((joke, index) => (    
                    <div key={index}>
                        <JokeDisplay joke={joke}></JokeDisplay>
                    </div>
                ))}
            </div>
        </>
    )
}

// import React, { useContext } from "react"
// import { TextInput } from "../ReusableInputComponents/TextInput"
// import useGetAllJokes from "../CustomHooks/useGetAllJokes"
// import { JokeDisplay } from "../ReusableLayoutComponents/JokeDisplay";
// import { JokeContextProvider } from "../Contexts/JokeContextProvider";
// import { JokeContext } from "../Contexts/JokeContext";

// export const Search:React.FC = () => {
//     // const {getQuery, invalidate } = useGetAllJokes();
//     const {getQuery} = useGetAllJokes();
//     const jokes = getQuery.data || []
//     console.log("Joke list", {jokes})
//     function isValid() {
//         return true
//     }
//     const {value} = useContext(JokeContext)
//     console.log("value: ", value)
//     return (
//         <>
//                 {/* <TextInput label="Search" defaultValue="Search for a joke ..." validationFunction={isValid}></TextInput> */}
//             <JokeContextProvider>
//                 <TextInput label="Search" defaultValue="Search for a joke ..." validationFunction={isValid}></TextInput>

//             <p>Go look at contexts (from the list detail assignment) to implement the data binding</p>

//             <div>
//                 {/* {jokes.filter(j => (j.question && j.question.includes('how')) || (j.answer && j.answer.includes('how'))).map((joke, index) => ( */}
//                 {jokes.filter(j => (j.question && j.question.includes(value)) || (j.answer && j.answer.includes(value))).map((joke, index) => (    
//                     <div key={index}>
//                         <JokeDisplay joke={joke}></JokeDisplay>
//                     </div>
//                 ))}
//             </div>
//             </JokeContextProvider>
//         </>
//     )
// }

// // import React from "react"
// // import { TextInput } from "../ReusableInputComponents/TextInput"
// // import useGetAllJokes from "../CustomHooks/useGetAllJokes"
// // import { JokeDisplay } from "../ReusableLayoutComponents/JokeDisplay";
// // import { JokeContextProvider } from "../Contexts/JokeContextProvider";

// // export const Search:React.FC = () => {
// //     // const {getQuery, invalidate } = useGetAllJokes();
// //     const {getQuery} = useGetAllJokes();
// //     const jokes = getQuery.data || []
// //     console.log("Joke list", {jokes})
// //     function isValid() {
// //         return true
// //     }
// //     return (
// //         <>
// //                 {/* <TextInput label="Search" defaultValue="Search for a joke ..." validationFunction={isValid}></TextInput> */}
// //             <JokeContextProvider>
// //                 <TextInput label="Search" defaultValue="Search for a joke ..." validationFunction={isValid}></TextInput>
// //             </JokeContextProvider>
// //             <p>Go look at contexts (from the list detail assignment) to implement the data binding</p>

// //             <div>
// //                 {jokes.filter(j => (j.question && j.question.includes('how')) || (j.answer && j.answer.includes('how'))).map((joke, index) => (
// //                     <div key={index}>
// //                         <JokeDisplay joke={joke}></JokeDisplay>
// //                     </div>
// //                 ))}
// //             </div>
// //         </>
// //     )
// // }