import React, {useState } from 'react';
import { useDrag } from 'react-dnd';

//<Bateau draggable id={"1"} sens={"H"} onDrop= { DropBoat } longueur={5} color={"red"}/>

export default function Bateau({id, sens, longueur, color, modelbateau}) {

  const [nbBateau, setBateau] = useState(1);
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "bateau",
      item: { id, color, sens, longueur, modelbateau},
      canDrag: (monitor) =>  nbBateau > 0,
      end: (item, monitor) =>  {
        if (monitor.didDrop()) {
          setBateau(0);
        }
      },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    [nbBateau]
  )

// demo onclick nouvellefonction
  let onclickli = () => {

  }
  
  const styleBateau = {
   backgroundImage: "url(/" + modelbateau + ")", opacity
  }

return (
  <>
  
   {/* <div onClick={() => onclickli()} className="bateau bg-bateau justify-center" ref={dragRef} style={{ backgroundImage: "url(/" + modelbateau + ")" }}> */}
   <div className="bateau bg-bateau justify-center" ref={dragRef} style={styleBateau}>
   </div>
  </>
  );
}