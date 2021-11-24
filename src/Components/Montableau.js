import React from 'react';
import FactoryCase from '../factoryCase';

export default function Montableau(props) {

  const nbElement = 100;
  let tableauLogique=[];
  const rowEntete=["1","2","3","4","5","6","7","8","9","10"]
  let rowEnteteValue=[];
  let factoryCase = new FactoryCase();
  let typeTableau = props.type;


  for (let index = 0; index < nbElement; index++) {
       tableauLogique = tableauLogique.concat(factoryCase.createCase("", (typeTableau === "D" ? "case" : "casedesAttaques"), index, props.type));
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