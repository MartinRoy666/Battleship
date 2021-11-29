import React from "react";

export default function CaseEntete(props) {

    return (
        <div className={props.info.nomclasse} id={props.info.index}>
          {props.info.value}
        </div>
    );
}