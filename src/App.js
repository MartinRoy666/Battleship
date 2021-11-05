import './App.scss';
import React from 'react';
import Montableau from './Montableau';
import NomColonnes from './NomColonnes';
import Bateau from './Bateau';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// test
export default function App()  {

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <div className="row">
        <div className="container-fluid">
          <div className="row">
            <div className="cardnomcol">
              <NomColonnes/>
            </div>
            <Montableau/>          
            <div className="card cardbateau">
            <h3>Navires</h3>
            <Bateau draggable valeur={{id:"1", sens:"bateauVertical"}} />
            <br></br>
            <Bateau draggable valeur={{id:"2", sens:"bateauHorizontal"}}/>
            </div>
          </div>
        </div>
      </div>
      
      {/* let tempo={ value: element , nomclasse : "caseVerticale", index: 0} */}
      {/* <div id="div1" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div> */}
      {/* <br></br> */}
      {/* <img id="drag1" src="img_logo.gif" draggable="true" onDragStart={(event) => this.drag(event)} width="336" height="69"></img> */}
     
    </div>
    </DndProvider>
  );
}
// }


