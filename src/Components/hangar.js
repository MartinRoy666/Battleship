import Bateau from '../Components/Bateau';

export default function hangar () {

  return(
  <div className="cardbateau">
    <Bateau isDragging id={"carrier"}  longueur={5} color="red" modelbateau="carrier.jpg"/>
    <br></br>
    <Bateau isDragging id={"cuirasse"} sens={"H"} longueur={4} color="yellow" modelbateau="cuirasse.png"/>
    <br></br>
    <Bateau isDragging id={"submarine"} sens={"H"} longueur={3} color="cyan" modelbateau="submarine.png"/>
    <br></br>
    <Bateau isDragging id={"croiseur"} sens={"V"} longueur={3} color="green" modelbateau="croiseur.png"/>
    <br></br>
    <Bateau isDragging id={"torpilleur"} sens={"H"} longueur={2} color="purple" modelbateau="torpilleur.png"/>
    <br></br>
  </div>
);
}