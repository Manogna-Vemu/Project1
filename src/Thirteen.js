import { useRef } from "react";

function Thirteen(){
    const firstRef = useRef(null);  
    const formSubmitted=(event)=>{
        event.preventDefault();
        console.log("form submitted");
        console.log(firstRef.current.value)
        firstRef.current.value='';
    }
    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" ref={firstRef}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Thirteen;