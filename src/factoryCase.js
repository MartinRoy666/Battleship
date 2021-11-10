import Case from "./case";
import CasedesAttaques from "./casedesAttaques";

//Fabrique de case qui sont les components des grilles.
// elle permet de renvoyer des cases avec differente type et different nom de classe
export default class FactoryCase {

  createCase(p_value, p_className, p_index, p_typeClasse) {
    let value;
    let index;
    let nouvelCase;

    if (p_value != null) {
      value= p_value;
    }

    if (p_index != null) {
      index = p_index;
    }
    const caseTableau = { value: p_value , nomclasse : p_className, index: p_index};
    if (p_typeClasse = "D") {
      nouvelCase = (<Case info = {caseTableau}/>);
    } else {
      console.log(p_typeClasse);
      nouvelCase = (<CasedesAttaques info = {caseTableau}/>);
    }
    return nouvelCase;
  }
}