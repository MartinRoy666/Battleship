import React, {useState} from 'react';
import FactoryCase from '../factoryCase';

// Component qui retourne un array contenant les Lettre des rangées
export default function NomColonnes() {
  
  const rowColumn=["A","B","C","D","E","F","G","H","I","J"];

  let factoryCase = new FactoryCase();

  // let tempoVide={ value: "" , nomclasse : "caseVide", index: 0}
  let caseTableau=[];
  // caseTableau = caseTableau.concat(<Case info = {tempoVide} />);
  caseTableau = caseTableau.concat(factoryCase.createCase("", "caseVide", null, "D"));

  rowColumn.forEach(element => {
    // let tempo={ value: element , nomclasse : "caseVerticale", index: 0}
    caseTableau = caseTableau.concat(factoryCase.createCase(element, "caseVerticale", null, "D"));
  });

  return (
    <div className="nomcolonnes">
      {caseTableau}
    </div>
  );
}