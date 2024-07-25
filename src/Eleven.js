/*import { useEffect, useState } from "react";

function Eleven() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Use effect is called");
    }, [count]);

    const updateCount = () => {
        setCount(count + 1);
    };

    const decreCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const addCart = () => {
        setCount(1);
    };

    return (
        <div>
            <button
                type="button"
                className="btn btn-success"
                onClick={addCart}
                disabled={count > 0}
            >
                Add to Cart
            </button>
            {count > 0 && (
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
                    <button className="btn btn-primary" onClick={decreCount}> - </button>
                    <h1 style={{ padding: '5px', margin: '0 10px' }}>{count}</h1>
                    <button className="btn btn-primary" onClick={updateCount}> + </button>
                </div>
            )}
        </div>
    );
}

export default Eleven;
*/

import { useEffect, useState } from "react";

function Eleven() {
    const [count, setCount] = useState(0); 

    useEffect(() => {
        console.log("Use effect is called");
    }, [count]); 

    const updateCount = () => {
        setCount(count + 1);
    };

    const decreCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const addCart = () => {
        setCount(1); 
    };

    return (
        <div>
            {count === 0 ? (
                <button type="button" className="btn btn-success" onClick={addCart}>
                    Add to Cart
                </button>
            ) : (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="btn btn-primary" onClick={decreCount}> - </button>
                    <h1 style={{ padding: '5px' }}>{count}</h1>
                    <button className="btn btn-primary" onClick={updateCount}> + </button>
                </div>
            )}
        </div>
    );
}

export default Eleven;