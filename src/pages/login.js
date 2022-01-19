import React, { useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../context/AuthContext";
import imgBack from "../images/backgroundaccueuil.png";


export default function Login () {
  const [auth, setAuth] = useContext(AuthContext);
  const [userName, setUserName ] = useState("");
  const [userPassword, setUserPassword ] = useState("");
  const [errStyle, setErr] = useState({backgroundColor:"white"});

  const sectionImage = {
    backgroundImage: `url(${imgBack})`
  }

  // http://104.248.104.227/ , un POST sur le /login avec un objet 
  // JSON { "username": "VOTREDA" , "password" : "UN_PASSWORD" } 
  // vous retournera un token

  // onInput alternatif - permet ajouter validation au moment ou usager saisie le texte
  // const onInputUser = (event, setUserName) => {
  //   setUserName(event.target.value);
  // }

  const connection = () => {
    console.log("dans connection");
    axios.post('http://104.248.104.227/login', {
      "username": userName,
      "password": userPassword
    })
    .then( (response) => {
      let token = response.data.token;
      setErr({backgroundColor:"green"});
      setAuth({isAuth:true,token:token})
      
      console.log(response);
      console.log(response.data.token);
      setUserName("");
      setUserPassword("");
    })
    .catch( (error) => {
      setErr({backgroundColor:"red"});
      setUserPassword("");
      console.log(error);
    });

    setUserName("");
    // setUserPassword("");
  }

  return (
    <div className="accueilcontent" style={sectionImage}>
      <div className="container text-justify p-0">
        <div className="card accueilcontainer">
          <div className="card-body">
            <h1>Connexion</h1>
            <label>Username</label>
            <br></br>
            {/* <input type="text" name="username" placeholder="Username, Email..." onChange= {e => onInputUser(e)} maxlength="100" autofocus required></input> */}
            
            <input type="text" name="username" placeholder="Username, Email..." onChange={e => setUserName(e.target.value)} maxlength="100" autofocus required></input>
            <br></br>
            <label>Password</label>
            <br></br>
            <input type="text" name="password"  placeholder="Password..." onChange={e => setUserPassword(e.target.value)} maxlength="100" required></input>
            <br></br>
            <br></br>
            <button className="buttonConnection" onClick={() => connection()}>Connecter</button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  )
}