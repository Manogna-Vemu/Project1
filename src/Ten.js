import { useEffect, useState } from "react";

function Ten()
{
    const [count, setCount] =useState(1);

    useEffect(() => {
        console.log("use Effect is called");
    },{count});

    const increaseCount = () =>{
        setCount(count+1);
    };

    const decreaseCount = () =>{
        setCount(count-1);
    };

    return(
        <div style={{display:'flex', gap: '20px', flexWrap:"wrap"}}>
            <button type="button" className="btn btn-outline-dark" onClick={increaseCount}>+</button>
            <h1>{count}</h1>
            <button type="button" className="btn btn-outline-dark" onClick={decreaseCount}>-</button>
        </div>
    );
}
export default Ten;