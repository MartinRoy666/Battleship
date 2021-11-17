import './App.scss';
import React from 'react';
import Montableau from './Components/Montableau';
import NomColonnes from './Components/NomColonnes';
import Bateau from './Components/Bateau';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import imagejumbo from "./images/uss-new-jersey.jpg";
import imagejumbo from "./images/uss5.jpg";

export default function App()  {

  const sectionImage = {
    backgroundImage: `url(${imagejumbo})`
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
            <div className="card cardbateau">
            <h3>Navires</h3>
            <Bateau draggable valeur={{id:"1", sens:"bateauVertical"}} />
            <br></br>
            <Bateau draggable valeur={{id:"2", sens:"bateauHorizontal"}}/>
            <br></br><br></br><br></br>
            <Bateau draggable valeur={{id:"3", sens:"bateauVertical"}} />
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
