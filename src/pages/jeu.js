import React, {useState} from 'react';
import Montableau from '../Components/Montableau';
import NomColonnes from '../Components/NomColonnes';
import Bateau from '../Components/Bateau';
import Hangar from '../Components/hangar';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import imagejumbo from "../images/uss.jpg";
import imgBack from "../images/backgroundaccueuil.png";

export default function Play() {
  
  const [game, setPhase] = useState("Placer votre flotte");

  const sectionImage = {
    backgroundImage: `url(${imgBack})`
  }
  
  const bgImgmask = { 
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }

  const changePhase = (game) => {
    if ( game === "Placer votre flotte") {
      setPhase("Pret");
    }
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="accueuilcontent" style={sectionImage}>
        <div className="jeucontainer">
            <div className="statutjeu">
              
              <button className="buttonphase" onClick={() => changePhase(game)}>Phase de jeu</button>
              <span>{game}</span>
            </div>
            <div className="row">
              <div className="cardnomcol">
                <NomColonnes/>
              </div>
              <Montableau type="D"></Montableau>
              <Hangar></Hangar>

              <div className="cardnomcol">
                  <NomColonnes/>
              </div>
              <Montableau type="A"></Montableau>        
            </div>
        </div>
    </div>
      {/* <div className="App">
        <div className="jumbotron_jeu bg-image justify-center align-items-center" style={sectionImage}>
          <span className="titreJumbo">BATTLESHIP</span>
          <div className="mask" style={ bgImgmask }></div>
        </div>
        <div>
          <div className="container-fluid">
            <div className="statutjeu">
              <span>{game}</span>
              <button className="buttonphase" onClick={() => changePhase(game)}>Change Phase</button>
            </div>
            <div className="row">
              <div className="cardnomcol">
                <NomColonnes/>
              </div>
              <Montableau type="D"></Montableau>
              <div className="cardbateau">
                <Bateau isDragging id={"carrier"} sens={"H"} longueur={5} color="red" modelbateau="carrier.jpg"/>
                <br></br>
                <Bateau isDragging id={"cuirasse"} sens={"H"} longueur={4} color="yellow" modelbateau="cuirasse.png"/>
                <br></br>
                <Bateau isDragging id={"submarine"} sens={"H"} longueur={3} color="cyan" modelbateau="submarine.png"/>
                <br></br>
                <Bateau isDragging id={"croiseur"} sens={"V"} longueur={3} color="green" modelbateau="croiseur.png"/>
                <br></br>
                <Bateau isDragging id={"torpilleur"} sens={"H"} longueur={2} color="purple" modelbateau="torpilleur.png"/>
                <br></br>
              </div>

              <div className="cardnomcol">
                  <NomColonnes/>
              </div>
              <Montableau type="A"></Montableau>        
            </div>
          </div>
        </div>
    </div> */}
    </DndProvider>
  );
}