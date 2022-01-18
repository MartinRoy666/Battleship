import imgBack from "../images/backgroundaccueuil.png";

export default function Accueuil () {

  const sectionImage = {
    backgroundImage: `url(${imgBack})`
  }

  return (
    <div className="accueuilcontent" style={sectionImage}>
      <div className="container accueuilcontainer">
      <h1>BATTLESHIP</h1>
      <br></br>
      <p>Venez affronter un adversaire en pleine mer avec votre flotte navale.</p>
      <p>Votre mission si vous décidez de l'accepter est de détruire la flotte enemie
        en coulant ses navires !        </p>
      <br>
      </br>
      <p>
        Bonne chance !
      </p>
      </div>
    </div>
  )
}