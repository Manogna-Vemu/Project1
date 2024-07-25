import { createContext, useState } from "react";
import Tabs from "./Fifteen";
import { Link } from "react-router-dom";
export const UserContext = createContext();
function Home(){
    const [isLogin,setLogin] = useState(false);
    return(
        <UserContext.Provider value={{isLogin,setLogin}}>
            <div>
                {
                    isLogin?<div>
                            <div>Welcome to Ecommercce</div>
                            <Link to="/CardList">View Products</Link>
                        </div>
                        : <Tabs />
                }
            </div>
        </UserContext.Provider>
    )
}
export default Home;