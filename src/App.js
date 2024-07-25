import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

import Product from './Product'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ecommerce" element={<Ecommerce />} />
                <Route path="/products" element={<Product />} />
            </Routes>
        </Router>
    );
}

export default App;

/*import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tabs from "./Fifteen";
import NavBar from "./Nav";
import Home from "./Home";
import CardUI from "./Card";
import CardListUI from "./CardList";
function App(){
return(
    <BrowserRouter>
    <Routes>
        
<Route exact path="/" element={<NavBar />} />
        <Route path="/CardList" element={<CardListUI />} />
    </Routes>
</BrowserRouter>

);
}
export default App;
      <Route path="/" element={<NavBar/>}/>
        <Route path="/Assignment3" component={Assignment3} />*/