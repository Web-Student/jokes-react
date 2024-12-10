import { useEffect, useState } from "react";
export const IncrementLocalJokeCount = () => {
    const oldCount = JSON.parse(localStorage.getItem('localCountAdded') ?? "0");
    console.log("old count is ", oldCount);
    localStorage.setItem('localCountAdded', JSON.stringify(oldCount + 1));
    console.log("new count is" , JSON.parse(localStorage.getItem('localCountAdded') ?? "0"));
}

export const JokesOnThisMachine = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const count = JSON.parse(localStorage.getItem('localCountAdded') ?? "0");
        setCount(count);
      }, []);
    return (
        <p>You have added {count} jokes on this specific machine</p>
    )
}