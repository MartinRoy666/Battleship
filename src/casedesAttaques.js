import React, { useState } from "react";

export default function CasedesAttaques(props) {

  const [etatAttaque, setEtatAttaque] = useState(false);
  const [etatCouleur, setCouleur] = useState(null);
  // let etatCouleur;
  // setCouleur(etatAttaque ? "red" : "white");
  // this._onButtonClick = this._onButtonClick.bind(this);
  
   function callServer(id) {

      // *** call au SERVEUR  avec coordonnee
    // getr reponse
    //si toucher = rouge
    //sinon blanc
    let reponse;
    // equivalent de recevoir une reponse de hit positive
    if (id.substring(1,id.indexOf("_")) % 2 === 1) {
        reponse= true;
    }
    else {
        reponse = false;
    }
    setCouleur(reponse == true ? "red" : "white");
  }
  
  const _onButtonClick = (id) => {
    callServer(id);
    // setCouleur(callServer(id) == true ? "red" : "white");
    document.getElementById(id).style.background = etatCouleur; 
  }
    return (
        <div className={props.info.nomclasse} id={props.info.index} onClick={() => _onButtonClick(props.info.index)}>
          {props.info.value}
        </div>
    );
}