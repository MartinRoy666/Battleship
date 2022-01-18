export default function Navbar () {

return (
  <>
    <div className="topnav">
      <div className="row">
          <div className="text-center col-lg-4 col-md-4 col-sm-12 align-self-center">
              <div className="row">
                <div><a href='/' className="active menu_color">Accueuil</a></div>
                <div><a href='/play' className="menu_color">Jouer</a></div>
                <div><a href='/login' className="menu_color">Login</a></div>
                <div><a href='/apropos' className="menu_color">A propos</a></div>
              </div>
          </div>
      </div>
    </div>

  </>
)
}
