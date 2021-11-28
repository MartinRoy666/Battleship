import React, { useState } from "react";

import FactoryCase from '../factoryCase';

const nbElement = 100;
export default function Montableau(props) {

  const [stateCouleurs, setCouleurs] = useState(Array(nbElement).fill("#005086"));
  
  let tableauLogique=[];
  const rowEntete=["1","2","3","4","5","6","7","8","9","10"]
  let rowEnteteValue=[];
  let factoryCase = new FactoryCase();
  let typeTableau = props.type;


  const DropBoat = (item, index, stateCouleur) => {
    let vraiIndex= index.substring(0,index.indexOf("_"));
    let lesIndexAColorier= [];


    if (item.sens == "H") {
      for (let index = 0; index < item.longueur; index++) {
        lesIndexAColorier.push(vraiIndex);
        vraiIndex++;
      }
    } else {
      for (let index = 0; index < item.longueur; index++) {
        lesIndexAColorier.push(vraiIndex);
        vraiIndex= parseInt(vraiIndex) + 10;
      }
    }

    console.log("dans factory DropBoat");
    console.log(lesIndexAColorier);
    
    let newState = stateCouleur.slice(0);

    lesIndexAColorier.forEach(element => {
      newState[element] = item.color;      
    });
    setCouleurs(newState);
  }

  for (let index = 0; index < nbElement; index++) {
    // console.log(stateCouleurs[index]);
       tableauLogique = tableauLogique.concat(
         factoryCase.createCase(
         "", 
         (typeTableau === "D" ? "case" : "casedesAttaques"), 
        index, 
        props.type,
        (item,index, stateCouleurs) => DropBoat(item, index, stateCouleurs),
        stateCouleurs[index],
        stateCouleurs
        )
      );
      //  tableauLogique = tableauLogique.concat(factoryCase.createCase("", (typeTableau === "D" ? "case" : "casedesAttaques"), index, props.type, () => this.DropBoat()) );
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