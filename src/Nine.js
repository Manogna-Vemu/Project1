import { useEffect, useState } from "react";

function Nine()
{
    const [count, setCount] =useState(1);
    useEffect(() => {
        console.log("use Effect is called");
    },{count});

    const increaseCount = () =>{
        setCount(count+1);
    };
    return (
        <div>
            <h1>Count {count}</h1>
            <button className="btn btn-dark" onClick={increaseCount}>Click here</button>
        </div>
    );
}
export default Nine;