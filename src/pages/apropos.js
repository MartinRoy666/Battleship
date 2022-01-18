import imgBack from "../images/backgroundaccueuil.png";

const sectionImage = {
  backgroundImage: `url(${imgBack})`
}

export default function APropos () {

  return (
    <div className="accueuilcontent" style={sectionImage}>
        <div className="container accueuilcontainer">
        <h1>A PROPOS</h1>
        <p>Lorem ipsum</p>
        </div>
    </div>
  )
}