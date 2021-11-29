import React from 'react';
import { useDrag } from 'react-dnd';

//<Bateau draggable id={"1"} sens={"H"} onDrop= { DropBoat } longueur={5} color={"red"}/>

export default function Bateau({id, sens, longueur, color, modelbateau}) {

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "bateau",
      item: { id, color, sens, longueur, modelbateau},
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )

return (
  <>
   <div className="bateau bg-bateau justify-center" ref={dragRef} style={{ backgroundImage: "url(/" + modelbateau + ")" }}>
   </div>
  </>
  );
}