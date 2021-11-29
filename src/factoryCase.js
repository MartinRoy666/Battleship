import Case from "./Components/case";
import CaseEntete from "./Components/caseEntete";
import CasedesAttaques from "./Components/casedesAttaques";

export default class FactoryCase {

  createCase(p_value, p_className, p_index, p_typeClasse, fctName, colorCase, stateCouleurs) {
    let value=0;
    let index=0;
    let nouvelCase;

    // if (p_typeClasse == "D") {
    //   console.log("dans createCase");
    //   console.log(colorCase);   //bluetile.png
    //   console.log("dans createCase2");
    //   console.log(stateCouleurs);
    // }

    if (p_value != null) {
      value= p_value;
    }

    if (p_index != null) {
      index = p_index;
    }

    if (p_typeClasse === "D") {
      if (p_className == "caseEntete") {
        const caseTableau = { value: p_value , nomclasse : p_className, index: p_index + "_" + "case" + p_typeClasse};
        nouvelCase = (<CaseEntete info = {caseTableau}/>);
      } else {
        const caseTableau = { value: p_value , nomclasse : p_className, index: p_index + "_" + "case" + p_typeClasse, nomBateau: colorCase};
        nouvelCase = (<Case info = {caseTableau} onDrop= { fctName } stateBateau= {stateCouleurs}/>);
      }
    } else {
      const caseTableau = { value: p_value , nomclasse : p_className, index: p_index + "_" + "case" + p_typeClasse};
      nouvelCase = (<CasedesAttaques info = {caseTableau}/>);
    }
    return nouvelCase;
  }
}