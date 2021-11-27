import Case from "./Components/case";
import CasedesAttaques from "./Components/casedesAttaques";

//Fabrique de case qui sont les components des grilles.
// elle permet de renvoyer des cases avec differente type et different nom de classe
export default class FactoryCase {

  createCase(p_value, p_className, p_index, p_typeClasse, fctName, colorCase, stateCouleurs) {
    let value=0;
    let index=0;
    let nouvelCase;

    // if (p_typeClasse == "D") {
    //   console.log("dans createCase");
    //   console.log(colorCase);
    //   console.log(stateCouleurs);
    // }

    if (p_value != null) {
      value= p_value;
    }

    if (p_index != null) {
      index = p_index;
    }

    if (p_typeClasse === "D") {
      const caseTableau = { value: p_value , nomclasse : p_className, index: p_index + "_" + "case" + p_typeClasse, color: colorCase};
      nouvelCase = (<Case info = {caseTableau} onDrop= { fctName } stateColor= {stateCouleurs}/>);
    } else {
      const caseTableau = { value: p_value , nomclasse : p_className, index: p_index + "_" + "case" + p_typeClasse};
      nouvelCase = (<CasedesAttaques info = {caseTableau}/>);
    }
    return nouvelCase;
  }
}