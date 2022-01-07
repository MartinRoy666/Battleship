import './App.scss';
import React, {useState} from 'react';
// import Montableau from './Components/Montableau';
// import NomColonnes from './Components/NomColonnes';
// import Bateau from './Components/Bateau';
// import { DndProvider } from 'react-dnd'
// import { HTML5Backend } from 'react-dnd-html5-backend'
import imagejumbo from "./images/uss.jpg";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Accueuil from './pages/accueuil.js';
import APropos from './pages/apropos.js';
import Login from './pages/login.js';
import Navbar from './Components/Navbar.js';
import Play from './pages/jeu.js';

// regle routes
export default function App()  {

  const [game, setPhase] = useState("placer");

  const sectionImage = {
    backgroundImage: `url(${imagejumbo})`
  }
  
  const bgImgmask = { 
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }

  const changePhase = (game) => {
    if ( game === "placer") {
      setPhase("ready");
    }
  }

  return (
    <BrowserRouter>
      <div><Navbar/></div>
      <Routes>
      <Route path="/play" element={<Play/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/apropos" element={<APropos/>} />
        <Route path="/" element={<Accueuil/>} />
      </Routes>
    </BrowserRouter>
    // <DndProvider backend={HTML5Backend}>

    // <div className="App">
    //   <div className="jumbotron_jeu bg-image justify-center align-items-center" style={sectionImage}>
    //     <span className="titreJumbo">BATTLESHIP</span>
    //     <div className="mask" style={ bgImgmask }></div>
    //   </div>
    //   <div>
    //     <div className="container-fluid">
    //       <div className="statutjeu">
    //         <span>{game}</span>
    //         <button className="buttonphase" onClick={() => changePhase(game)}>Change Phase</button>
    //       </div>
    //       <div className="row">
    //         <div className="cardnomcol">
    //           <NomColonnes/>
    //         </div>
    //         <Montableau type="D"></Montableau>
    //         <div className="cardbateau">
    //         <Bateau isDragging id={"carrier"} sens={"H"} longueur={5} color="red" modelbateau="carrier.jpg"/>
    //         <br></br>
    //         <Bateau isDragging id={"cuirasse"} sens={"H"} longueur={4} color="yellow" modelbateau="cuirasse.png"/>
    //         <br></br>
    //         <Bateau isDragging id={"submarine"} sens={"H"} longueur={3} color="cyan" modelbateau="submarine.png"/>
    //         <br></br>
    //         <Bateau isDragging id={"croiseur"} sens={"V"} longueur={3} color="green" modelbateau="croiseur.png"/>
    //         <br></br>
    //         <Bateau isDragging id={"torpilleur"} sens={"H"} longueur={2} color="purple" modelbateau="torpilleur.png"/>
    //         <br></br>
    //         </div>

    //         <div className="cardnomcol">
    //             <NomColonnes/>
    //         </div>
    //         <Montableau type="A"></Montableau>        
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </DndProvider>
  );
}
