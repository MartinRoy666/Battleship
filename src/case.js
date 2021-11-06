import React, { useState } from "react";
import { useDrop } from 'react-dnd'
import Bateau from "./Bateau";

export default function Case(props) {
  const [unBateau, setBateau] = useState([])

  const [{ isOver }, dropRef] = useDrop({
        accept: 'bateau',
        drop: (items) => setBateau((unBateau) => !unBateau.includes(items) ? [...unBateau, items] : unBateau),
        // drop: (item) => setBateau(item),
        // drop: (item) => setBateau((unBateau) => !unBateau.includes(item) ? [...unBateau, item] : unBateau),
        // drop: () => DropBateau,
        collect: (monitor) => ({isOver: monitor.isOver()})
    });

    function DropBateau(item) {

    }
    return (
      <React.Fragment>
        <div className={props.info.nomclasse} id={props.info.index} ref={dropRef}>
          {props.info.value}
          {isOver && <div>*</div>}
          {unBateau.map(bateau => <Bateau valeur={{id:bateau.id, sens:bateau.sens}} />)}
        </div>
    </React.Fragment>
    );
}