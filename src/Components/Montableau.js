import React, { useState } from "react";
import FactoryCase from '../factoryCase';

const nbElement = 100;
export default function Montableau(props) {

  const [stateBoats, setBackgroundBoat] = useState(Array(nbElement).fill("bluetile.png"));
  // const [stateCouleurs, setBackgroundBoat] = useState(Array(nbElement).fill("#005086"));

  let tableauLogique=[];
  const rowEntete=["1","2","3","4","5","6","7","8","9","10"]
  let rowEnteteValue=[];
  let factoryCase = new FactoryCase();
  let typeTableau = props.type;


  const DropBoat = (item, index, stateBoat) => {
    console.log(item.sens);
    let vraiIndex= index.substring(0,index.indexOf("_"));
    let indexForBoats= [];

    if (item.sens == "H") {
      for (let index = 0; index < item.longueur; index++) {
        indexForBoats.push(vraiIndex);
        vraiIndex++;
      }
    } else {
      for (let index = 0; index < item.longueur; index++) {
        indexForBoats.push(vraiIndex);
        vraiIndex= parseInt(vraiIndex) + 10;
      }
    }

    let indice = 1;
    let newState = stateBoat.slice(0);
    indexForBoats.forEach(element => {
      newState[element] = item.modelbateau.substring(0,item.modelbateau.indexOf(".")) + indice + item.sens + ".png";
      indice++;
      });
    setBackgroundBoat(newState);
  }

  for (let index = 0; index < nbElement; index++) {
       tableauLogique = tableauLogique.concat(
         factoryCase.createCase(
         "", 
         (typeTableau === "D" ? "case" : "casedesAttaques"), 
        index, 
        props.type,
        (item,index, stateBoat) => DropBoat(item, index, stateBoat),
        stateBoats[index],
        stateBoats
        )
      );
    }

  //Creer array pour les entetes des colonnes numeroté de 1 à 10
  rowEntete.forEach(element => {
    rowEnteteValue = rowEnteteValue.concat(factoryCase.createCase(element, "caseEntete", null, props.type));
  });

  return (
    <div className="montableau">
       <div className="row enteteLettre">
        {rowEnteteValue}
       </div>
      <div className="tableau row">
       {tableauLogique}        
      </div>
    </div>
  );
}