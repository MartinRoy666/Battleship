import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
// import Case from './case';


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

//   const sectionbateau = {
//   backgroundImage: `url(${modelbateau})`
// }

  // const caseTableau = { value: "" , nomclasse : "case", index: p_index + "_" + "case" + p_typeClasse, color: colorCase};
  // const caseTableau = { value: p_value , nomclasse : p_className, index: p_index + "_" + "case" + p_typeClasse, color: colorCase};
  // nouvelCase = (<Case info = {caseTableau} onDrop= { fctName } stateColor= {stateCouleurs}/>);
  // tableauLogique = tableauLogique.concat(
  //   factoryCase.createCase(
  //   "", 
  //   (typeTableau === "D" ? "case" : "casedesAttaques"), 
  //  index, 
  //  props.type,
  //  (item,index, stateCouleurs) => DropBoat(item, index, stateCouleurs),
  //  stateCouleurs[index],
  //  stateCouleurs
  // console.log(color);
  // console.log(modelbateau);
  // console.log(sectionbateau);
  
return (
  <>
    {/* <Case info = {caseTableau} onDrop= {} stateColor= {stateCouleurs} /> */}
    {/* <div className={"bateau"} ref={dragRef} style={{ opacity, backgroundImage:color}} > */}
    {/* <div style={{ backgroundImage: `url(require("images/img.svg"))` }}></div> */}

    {/* <div className="bateau bg-bateau justify-center" ref={dragRef} style={{ backgroundImage: `url(${modelbateau})` }} > */}
    

   {/* <div className="bateau bg-bateau justify-center" ref={dragRef} style={sectionCarrier} > */}
   <div className="bateau bg-bateau justify-center" ref={dragRef} style={{ backgroundImage: "url(/" + modelbateau + ")" }}>
      {/* <img src={Carrier} alt=""/> */}
      
      {/* {color} */}
   </div>



  </>
  );
}