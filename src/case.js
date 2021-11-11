import React, { useState } from "react";
import { useDrop } from 'react-dnd'
import Bateau from "./Bateau";

export default function Case(props) {
  const [unBateau, setBateau] = useState([])

  const [{ isOver }, dropRef] = useDrop({
        accept: 'bateau',
        drop: (item) => DropBateau(item),
        // drop: (items) => setBateau((unBateau) => !unBateau.includes(items) ? [...unBateau, items] : unBateau),
        collect: (monitor) => ({isOver: monitor.isOver()})
    });

    function DropBateau(item) {
      setBateau((unBateau) => !unBateau.includes(item) ? [...unBateau, item] : unBateau)
      // console.log(item.getCoord());
      console.log(item);
      console.log(unBateau[0]);
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