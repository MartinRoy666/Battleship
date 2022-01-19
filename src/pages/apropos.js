import imgBack from "../images/backgroundaccueuil.png";

const sectionImage = {
  backgroundImage: `url(${imgBack})`
}

export default function APropos () {

  return (
    <div className="accueilcontent" style={sectionImage}>
        <div className="container accueilcontainer">
        <h1>A PROPOS</h1>
        <p>Projet effectué par Martin Roy lors du AEC Conception de site Web</p>
        <p>Cegep de Saint-Jean sur Richelieu 2021-2022</p>
        </div>
    </div>
  )
}