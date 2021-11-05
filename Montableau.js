import React, { useState } from 'react';
import Case from './case';
import { useDrag } from 'react-dnd'

export default function Montableau() {

  // const [grille, setPosition]  = useState();
  // const [grilleUi, setCase] = useState();
  const nbElement = 100;
  let tableauLogique=[];
  const rowEntete=["1","2","3","4","5","6","7","8","9","10"]
  let rowEnteteValue=[];

  for (let index = 0; index < nbElement; index++) {
      const caseTableau = { value: "" , nomclasse : "case", index: index};
      tableauLogique = tableauLogique.concat(<Case info = {caseTableau}/>);
  }

  rowEntete.forEach(element => {
    const caseEntete = { value: element, nomclasse: "caseEntete" };
    rowEnteteValue = rowEnteteValue.concat(<Case info = {caseEntete}/>)
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