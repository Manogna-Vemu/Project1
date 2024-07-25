import { useState } from "react";
import LoginPage from "./Login";
import RegisterPage from "./Register";

function Tabs() {
    const [activeTab, setActiveTab] = useState("none");

    const handleLogin = () => {
        setActiveTab("login");
    };
    const handleRegister = () => {
        setActiveTab("register");
    };
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <button onClick={handleLogin}>Login</button>
                </li>
                <li className="nav-item">
                    <button onClick={handleRegister}>Register</button>
                </li>
            </ul>
            {activeTab === "login" && <LoginPage />}
            {activeTab === "register" && <RegisterPage />}
        </div>
    );
}
export default Tabs;

/*import { useState } from "react";
import Register from "./Register";
import LoginPage from "./Login";

function Fifteen() {
    const [isLogin, setIsLogin] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    const handleLogin = () => {
        setIsLogin(true);      
        setIsRegister(false);  
    };

    const handleRegister = () => {
        setIsLogin(false);   
        setIsRegister(true);  
    };

    return (
        <div>
            {isRegister ? (
                <Register />  
            ) : isLogin ? (
                <LoginPage />  
            ) : (
                <div>
                    <button type="button" className="btn btn-dark" onClick={handleLogin}>
                        Login
                    </button>
                    <button type="button" className="btn btn-dark" onClick={handleRegister}>
                        Register
                    </button>
                </div>
            )}
        </div>
    );
}

export default Fifteen;
*/