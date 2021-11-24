import React, { useState } from "react";
import { useDrop } from 'react-dnd'
import Bateau from "./Bateau";

export default function Case(props) {
  const [unBateau, setBateau] = useState([])

  // console.log("le props de Case:");
  // console.log(props);
  
  const [{ isOver, canDrop }, dropRef] = useDrop({
        accept: 'bateau',
        drop: (item) => props.onDrop(item, props.info.index),
        // drop: (items) => setBateau((unBateau) => !unBateau.includes(items) ? [...unBateau, items] : unBateau),
        collect: (monitor) => ({isOver: monitor.isOver()})
    });

    // function DropBateau(item) {
    //   setBateau((unBateau) => !unBateau.includes(item) ? [...unBateau, item] : unBateau)
    //   // console.log(item.getCoordonnee());
    //   console.log(item);
      
    //   // global.logiqueDefense.setPositionBateau(props.info.index);
    //   // console.log(global.logiqueDefense.getLogique());
    // }

    return (
      <React.Fragment>
        <div className={props.info.nomclasse} id={props.info.index} ref={dropRef} style={{backgroundColor: isOver ? "black" : props.info.color}}>
          {props.info.value}
        </div>
    </React.Fragment>
    );

    // return (
    //   <React.Fragment>
    //     <div className={props.info.nomclasse} id={props.info.index} ref={dropRef}>
    //       {props.info.value}
    //       {isOver && <div>*</div>}
    //       {unBateau.map(bateau => <Bateau valeur={{id:bateau.id, sens:bateau.sens}} />)}
    //     </div>
    // </React.Fragment>
    // );
}