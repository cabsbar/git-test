import { useEffect } from "react";
import Navigation from "./Navigation";
import User from "./User";
import Detail from "./Detail";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<User/>}/>
        <Route path="/detail/:id" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
      
    
    </div>
  );
}

export default App;
