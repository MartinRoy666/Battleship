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
    </DndProvider>
  );
}