import React from 'react';
import { useDrag } from 'react-dnd'

export default function Bateau(props) {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'bateau',
    item: props.valeur.id,
    collect: (monitor) => ({
        isDragging: monitor.isDragging()
    })
});


return (
  <>
    <div className={props.valeur.sens} ref={dragRef}>
      <div className='partieDunBateau'></div>
      <div className='partieDunBateau'></div>
      <div className='partieDunBateau'></div>
   </div>
</>
);
}