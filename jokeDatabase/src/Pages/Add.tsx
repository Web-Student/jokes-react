
import { Link } from "react-router-dom"
import { Joke } from "../DataTransfer/Joke"
import { useState } from "react"
import { useAddJoke } from "../CustomHooks/useAddJoke"
import { Toaster, toast } from 'sonner'

export const AddJoke:React.FC = () => {
    const [newJoke, setNewJoke] = useState<Joke>({
        // id: undefined,
        question: "",
        answer: ""
    })
    const postHook = useAddJoke();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        postHook.mutate(newJoke)

        toast.success ("joke added!")
        setNewJoke({
            id: 0,
            question: "",
            answer: ""
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
                <Toaster richColors position="bottom-center"/>
                <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}

