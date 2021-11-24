import React, { useState } from 'react';
import { useDrag } from 'react-dnd'
//            <Bateau draggable id={"1"} sens={"H"} onDrop= { DropBoat } longueur={5} color={"red"}/>
export default function Bateau({id, sens, longueur, color}) {

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "bateau",
      item: { id, color, sens, longueur },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )

    //   const [{ isDragging }, dragRef] = useDrag(
//     () => ({
//       type: 'bateau',
//       item:  props,
//       collect: (monitor) => ({
//         opacity: monitor.isDragging() ? 0.5 : 1
//     })
//   }),
//   []
// )

//   const getCoord = () => {
//     return coordonnee;
//   }

//   function getCoordonnee() {
//     return coordonnee;
//   }

return (
  <>
    <div className={"bateau"} ref={dragRef} style={{ opacity, backgroundColor:color}} >
      {color}
      {/* <div className='partieDunBateau'></div> */}
      {/* <div className='partieDunBateau'></div>
      <div className='partieDunBateau'></div> */}
   </div>
  </>
  );
}