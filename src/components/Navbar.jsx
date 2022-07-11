import React from "react";
import FavoriteContext from "../contexts/global/favorite.context";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const { useContext } = React;

function Navbar () {

  
    const {favoritePokemons} = useContext(FavoriteContext);
    
    const pokeLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    
    return (
        <>
        
        
          <div>
          <nav>
          {/* <div className="navbar">
           <ul className="nav-links">
              <Link to="./Pokedex.jsx">Home</Link>
              <Link to="./191045.jsx">About</Link>
           </ul>
        </div> */}
              <div className="navbar">
              <img src={pokeLogo} 
              alt="pokemon-logo"
              className="navbar-image"
              />
              </div>
              <div className="navbar-heart">
                {/* <button className="Persona" >YO</button>
                <button className="Home">HOME</button>
                <button className="POLE">POLE</button> */}
              &#10084;&#65039; {favoritePokemons.length}
              </div>
          </nav>
          </div>  
        </>
    )
}



export default Navbar
