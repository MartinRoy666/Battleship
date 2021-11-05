import React from 'react';
import Case from './case';

// Component qui retourne un array contenant les Lettre des rangées
export default function NomColonnes() {
  const rowColumn=["A","B","C","D","E","F","G","H","I","J"];
  let tempoVide={ value: "" , nomclasse : "caseVide", index: 0}
  let caseTableau=[];
  caseTableau = caseTableau.concat(<Case info = {tempoVide} />);

  rowColumn.forEach(element => {
    let tempo={ value: element , nomclasse : "caseVerticale", index: 0}
    caseTableau = caseTableau.concat(<Case info = { tempo } /> );
  });

  return (
    <div>
      {caseTableau}
    </div>
  );
}