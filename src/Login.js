import { useEffect, useRef, useState } from "react";

function LoginPage(){
    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const [loginMessage,setMessage] = useState('');//to print in UI
    useEffect(()=>{
        firstRef.current.focus();
    })
    const formSubmitted = (event)=>{
        event.preventDefault();
        console.log("Form submitted");
        console.log(firstRef.current.value);
        console.log(secondRef.current.value);
        //firstRef.current.value="";
        //secondRef.current.value="";
        if(firstRef.current.value === secondRef.current.value){
            console.log("Login success");
            setMessage("Login success");
        } else{
            console.log("Login failed");
            setMessage("Login failed");
        }
        firstRef.current.value="";
        secondRef.current.value="";  
    }
    return(
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
            <div className="card" style={{width:"17rem",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <form onSubmit={formSubmitted}>
                    <h2 style={{margin:'20px'}}>Login</h2>
                    <p style={{margin:'20px'}}>Provide details to login</p>
                    <p style={{margin:'20px'}}>College Id</p>
                    <input type="text" placeholder="Enter your college id" style={{width:"200px",marginLeft:"20px"}} ref={firstRef}/>
                    <p style={{margin:"20px"}}>Password</p>
                    <input type="password"placeholder="Enter password" style={{margin:"17px"}} ref={secondRef}/>
                    <button type="submit" className="btn btn-dark" style={{margin:"30px"}}>Login</button>
                    <p>{loginMessage}</p>
                </form>
            </div>
        </div>

    )
}
export default LoginPage;


/*import { useRef, useState } from "react";
function LoginPage()
{
    const firstRef = useRef(null);  
    const secondRef = useRef(null);
    const [loginMessage,setloginMessage]=useState('');
    const formSubmitted=(event)=>{
        event.preventDefault();
        console.log("form submitted");
        console.log(firstRef.current.value)
        console.log(secondRef.current.value)
        if(firstRef.current.value === secondRef.current.value)
        {
            console.log("Login is Successfull");
            setloginMessage("Login Successful");
        }
        else
        {
            console.log("Login Failed");
            setloginMessage("Login Failed");
        }
        firstRef.current.value='';
        secondRef.current.value='';
    }
    return(
        <div className="card" style={{width:'300px',display:'flex',flexDirection:'column'}}>
            <form onSubmit={formSubmitted}>
                <h2>Login</h2>
                <p>Provide your Details to login</p>
                <h4>College Id</h4>
                <input type="text" placeholder="College Id" ref={firstRef}/>
                <h4>Password</h4>
                <input type="password" placeholder="Password" ref={secondRef}/>
                <button type="button" className="btn btn-dark" onClick={formSubmitted}>Submit</button>
            </form>
            {loginMessage && <h5>{loginMessage}</h5>} 
        </div>
    );
}
export default LoginPage;*/