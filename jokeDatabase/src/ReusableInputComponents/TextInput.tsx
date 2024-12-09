import { useState } from "react"

interface Params {
    label: string,
    defaultValue: string
    validationFunction: React.ChangeEventHandler<HTMLInputElement> | undefined,
    onValueChange: (newValue: string) => void
}

export const TextInput:React.FC<Params> = ({label, defaultValue, onValueChange}) => {
    const [value, setValue] = useState(defaultValue)
    console.log("default value is being ignored, ", defaultValue)
    function inputChange(newValue: string) {
        setValue(newValue);
        onValueChange(newValue); //updates it in the parent component
    }
    return (
        <>
            <div className="p-2">
                <label className="p-2 m-2">{label}</label>
                <input value={value} onChange={(e) => inputChange(e.target.value)} className="w-180 p-2 m-2"/>
            </div>
        </>
    )
}