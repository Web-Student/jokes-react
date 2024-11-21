
import { Link } from "react-router-dom"
import { Joke } from "../DataTransfer/Joke"
import { useState } from "react"
import { useAddJoke } from "../CustomHooks/useAddJoke"
import { Toaster, toast } from 'sonner'
import { GetCurrentUserEmail } from "../Authentication/authServices"

export const AddJoke:React.FC = () => {
    const userEmail = GetCurrentUserEmail()
    const [newJoke, setNewJoke] = useState<Joke>({
        // id: undefined,
        question: "",
        answer: "",
        author: userEmail ?? ""
    })
    const postHook = useAddJoke();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        postHook.mutate(newJoke)

        toast.success ("joke added!")
        setNewJoke({
            id: 0,
            question: "",
            answer: "",
            author: userEmail ?? ""
        })
    }
    
    return (
        <>
            <div>
                <Link to="/">Back</Link>
            </div>
            <form className="container">
                <div className="row">
                    <label htmlFor = "question">Question</label>
                    <input type="text" id = "question" value={newJoke.question}
                    onChange={(e) => setNewJoke((oldJoke) => ({...oldJoke, question: e.target.value}))}
                    ></input>
                </div>

                <div className="row">
                    <label htmlFor = "answer">Answer</label>
                    <input type="text" id = "answer" value={newJoke.answer}
                    onChange={(e) => setNewJoke((oldJoke) => ({... oldJoke, answer: e.target.value}))}
                    />
                </div>
                <Toaster richColors position="bottom-center" invert/>
                <p>Current user adding the joke is: {userEmail}</p>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>

                <Link to="/jokes">Back to all jokes</Link>
            </form>
        </>
    )
}

