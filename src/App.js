import './App.scss';
import React from 'react';
import Montableau from './Montableau';
import NomColonnes from './NomColonnes';
import Bateau from './Bateau';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export default function App()  {

  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <div className="jumbotron">
        BATTLESHIP
        </div>
      <div className="row">
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
            <Montableau></Montableau>        
          </div>
        </div>
      </div>
    </div>
    </DndProvider>
  );
}
