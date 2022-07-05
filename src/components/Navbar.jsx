import React from "react";
import FavoriteContext from "../contexts/favoritesContext";
import "../styles/navbar.css";

const { useContext } = React;

const Navbar = () => {

    const {favoritePokemons} = useContext(FavoriteContext);
    
    const pokeLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    
    return (
        <>
          <div>
          <nav>
              <div>
              <img src={pokeLogo} 
              alt="pokemon-logo"
              className="navbar-image"
              />
              </div>
              <div className="navbar-heart">
              &#10084;&#65039; {favoritePokemons.length}
              </div>
          </nav>
          </div>
            
        </>
    )
}

export default Navbar
