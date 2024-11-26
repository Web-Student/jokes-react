import { useState } from "react"

interface Params {
    label: string,
    defaultValue: string
    validationFunction: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const TextInput:React.FC<Params> = ({label, defaultValue}) => {
    const [data, setData] = useState(defaultValue)

    function inputChange(newValue: string) {
        setData(newValue);
    }
    return (
        <>
            <label>{label}</label>
            <input value={data} onChange={(e) => inputChange(e.target.value)}/>
        </>
    )
}