import imgBack from "../images/backgroundaccueuil.png";

export default function Accueil () {

  const sectionImage = {
    backgroundImage: `url(${imgBack})`
  }

  return (
    <div className="accueilcontent" style={sectionImage}>
      <div className="container accueilcontainer">
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