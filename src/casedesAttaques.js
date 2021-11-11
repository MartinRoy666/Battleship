import React from "react";

export default function CasedesAttaques(props) {
  // this._onButtonClick = this._onButtonClick.bind(this);
  
  const _onButtonClick = (id) => {
    
    // *** call au SERVEUR  avec coordonnee
    // getr reponse
    //si toucher = rouge
    //sinon blanc

    // alert(id);

    if (id.substring(1,id.indexOf("_")) % 2 === 1) {
      console.log("dans if");
      document.getElementById(id).className = "casedesAttaquesHit";
    }
    else {
      console.log("dans else");
      document.getElementById(id).className = "casedesAttaquesMiss";
    }
  }
    return (
        <div className={props.info.nomclasse} id={props.info.index} onClick={() => _onButtonClick(props.info.index)}>
          {props.info.value}
        </div>
    );
}