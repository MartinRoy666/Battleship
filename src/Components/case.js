import React from "react";
import { useDrop } from 'react-dnd'

export default function Case(props) {

  const [{ isOver, canDrop }, dropRef] = useDrop(
      () => ({
        accept: 'bateau',
        // drop: (item) => props.onDrop(item, props.info.index, props.stateColor),
        drop: (item) => props.onDrop(item, props.info.index, props.stateBateau),
        collect: (monitor) => ({
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop()
        })
    }),[props.stateBateau]);

    return (
      <React.Fragment>
        {/* <div className={props.info.nomclasse} id={props.info.index} ref={dropRef} style={{backgroundColor: isOver ? "black" : props.info.color}}> */}
        <div className={props.info.nomclasse} id={props.info.index} ref={dropRef} style={{ backgroundImage: "url(/" + props.info.nomBateau + ")" }}>
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