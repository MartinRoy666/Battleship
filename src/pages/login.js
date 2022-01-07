export default function Login () {

  return (
    <div className="container text-justify p-0">
      <div className="card">
        <div className="card-body">
          <form action="/" method="post">

          <h3>Connexion</h3>
          <label>Username</label>
          <br></br>
          <input type="text" name="username" value="" placeholder="Username, Email..." maxlength="100" autofocus required></input>
          <br></br>
          <label>Password</label>
          <br></br>
          <input type="text" name="password" value="" placeholder="Password..." maxlength="100" required></input>
          <br></br>
          <br></br>
          <input className="reserver" type="submit"  value="Connecter"></input>
          <br></br>
          </form>
        </div>
      </div>
    </div>
  )
}