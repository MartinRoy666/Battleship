import React, { useState } from 'react';
import FactoryCase from './factoryCase';

export default function Montableau(props) {

  // const [grille, setPosition]  = useState();
  // const [grilleUi, setCase] = useState();
  const nbElement = 100;
  let tableauLogique=[];
  const rowEntete=["1","2","3","4","5","6","7","8","9","10"]
  let rowEnteteValue=[];
  let factoryCase = new FactoryCase();
  let typeTableau = props.type;
  

  for (let index = 0; index < nbElement; index++) {
      // const caseTableau = { value: "" , nomclasse : "case", index: index};
      // tableauLogique = tableauLogique.concat(<Case info = {caseTableau}/>);    
       tableauLogique = tableauLogique.concat(factoryCase.createCase("", (typeTableau === "D" ? "case" : "casedesAttaques"), index, props.type));
  }

  //Creer array pour les entetes des colonnes numeroté de 1 à 10
  rowEntete.forEach(element => {
    // const caseEntete = { value: element, nomclasse: "caseEntete" };
    // rowEnteteValue = rowEnteteValue.concat(<Case info = {caseEntete}/>)
    rowEnteteValue = rowEnteteValue.concat(factoryCase.createCase(element, "caseEntete", 0, props.type));
  });

  return (

    <div>
       <div className="row enteteLettre">
        {rowEnteteValue}
       </div>
      <div className="tableau row">
       {tableauLogique}        
      </div>
    </div>
  );
}