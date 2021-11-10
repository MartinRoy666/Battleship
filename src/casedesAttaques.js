import React, { useState } from "react";

export default function CasedesAttaques(props) {
    return (
        <div className={props.info.nomclasse} id={props.info.index}>
          {props.info.value}
        </div>
    );
}