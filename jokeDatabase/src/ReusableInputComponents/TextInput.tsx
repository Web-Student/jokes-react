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
            <div className="p-2">

                <label className="p-2 m-2">{label}</label>
                <input value={data} onChange={(e) => inputChange(e.target.value)} className="w-180 p-2 m-2"/>
            </div>
        </>
    )
}