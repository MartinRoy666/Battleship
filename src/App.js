import './App.scss';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Accueuil from './pages/accueuil.js';
import APropos from './pages/apropos.js';
import Login from './pages/login.js';
import Navbar from './Components/Navbar.js';
import Play from './pages/jeu.js';
import { AuthContext } from './context/AuthContext.js';

export default function App()  {

  const [auth, setAuth] = useState({isAuth:false,token:null});

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
    <BrowserRouter>
      <div><Navbar/> menu : {auth.token}</div>
      <Routes>
        <Route path="/play" element={<Play/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/apropos" element={<APropos/>} />
        <Route path="/" element={<Accueuil/>} />
      </Routes>
    </BrowserRouter>
    </AuthContext.Provider>


  );
}
