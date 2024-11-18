
import { Link } from "react-router-dom"
import { Joke } from "../DataTransfer/Joke"
import { useState } from "react"
import { useAddJoke } from "../CustomHooks/useAddJoke"

export const AddJoke:React.FC = () => {
    const [newJoke, setNewJoke] = useState<Joke>({
        id: 0,
        question: "",
        answer: ""
    })
    return (
        <>
            <div>
                <Link to="/">Back</Link>
            </div>
            <form className="container">
                <div className="row">
                    <label htmlFor = "question">Question</label>
                    <input type="text" id = "question" 
                    onChange={(e) => setNewJoke((oldJoke) => ({...oldJoke, question: e.target.value}))}
                    ></input>
                </div>
                
                <div className="row">
                    <label htmlFor = "answer">Answer</label>
                    <input type="text" id = "answer"/>
                </div>

                <button className="btn btn-primary" onClick={useAddJoke}>Submit</button>
            </form>
        </>
    )
}

