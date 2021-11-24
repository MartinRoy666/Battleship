import './App.scss';
import React from 'react';
import Montableau from './Components/Montableau';
import NomColonnes from './Components/NomColonnes';
import Bateau from './Components/Bateau';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import imagejumbo from "./images/uss5.jpg";

export default function App()  {

  const sectionImage = {
    backgroundImage: `url(${imagejumbo})`
 }

 const bgImgmask = { 
   backgroundColor: 'rgba(0, 0, 0, 0.4)'
}
//    <td className={mesClasses} onClick={()=> setClasses("Square autre")} style={{backgroundColor: isOver ? "black" : color}} ref={drop}>
  const DropBoat = (item) => {
    // console.log(item);
    console.log("Dans App.js drop boat");
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
            <Bateau isDragging id={"1"} sens={"H"} longueur={5} color="red"/>
            {/* <Bateau draggable valeur={{id:"1", sens:"bateauHorizontal", longueur:5}} /> */}
            <br></br>
            {/* <Bateau draggable valeur={{id:"2", sens:"bateauHorizontal", longueur: 3}}/> */}
            <br></br><br></br><br></br>
            {/* <Bateau draggable valeur={{id:"3", sens:"bateauVertical", longueur:4}} /> */}
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
