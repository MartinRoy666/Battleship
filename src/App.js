import './App.scss';
import React from 'react';
import Montableau from './Components/Montableau';
import NomColonnes from './Components/NomColonnes';
import Bateau from './Components/Bateau';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import imagejumbo from "./images/uss5.jpg";
import Carrier from "./images/carrier.jpg";
import Submarine from "./images/submarine.png";

export default function App()  {

  const sectionImage = {
    backgroundImage: `url(${imagejumbo})`
  }
  const sectionCarrier = {
    backgroundImage: `url(${Carrier})`
  }
  const bgImgmask = { 
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  }


  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <div className="jumbotron bg-image justify-center align-items-center" style={sectionImage}>
        <span className="titreJumbo">BATTLESHIP</span>
        <div className="mask" style={ bgImgmask }></div>
      </div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="cardnomcol">
              <NomColonnes/>
            </div>
            <Montableau type="D"></Montableau>
            <div className="cardbateau">
            {/* <h3>Navires</h3> */}
            <Bateau isDragging id={"1"} sens={"H"} longueur={5} color="red" modelbateau="images/carrier.jpg"/>
            <Bateau isDragging id={"1"} sens={"H"} longueur={3} color="cyan" modelbateau="/images/submarine.png"/>
            {/* <Bateau isDragging id={"1"} sens={"V"} longueur={4} color="yellow" modelbateau="./images/submarine.png"/>
            <Bateau isDragging id={"1"} sens={"V"} longueur={3} color="green" modelbateau="submarine.png"/>
            <Bateau isDragging id={"1"} sens={"H"} longueur={2} color="purple" modelbateau="submarine.png"/> */}
            </div>

            <div className="cardnomcol">
                <NomColonnes/>
            </div>
            <Montableau type="A"></Montableau>        
          </div>
        </div>
      </div>
    </div>
    </DndProvider>
  );
}
