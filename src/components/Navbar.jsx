// import React from "react";
// import FavoriteContext from "../contexts/global/favorite.context";
// import "../styles/navbar.css";
// import { Link } from "react-router-dom";
// const { useContext } = React;

// // import React, { useState, useEffect } from 'react'
// // import { BrowserRouter, NavLink } from 'react-router-dom';
// // import './app.css';
// // import { Link, Outlet } from "react-router-dom"; 



// function Navbar () {

  
//     const {favoritePokemons} = useContext(FavoriteContext);
    
//     const pokeLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    
//     return (
//         <>
        
        
//           <div>
//           <nav>
//           {/* <div className="navbar">
//            <ul className="nav-links">
//               <Link to="./Pokedex.jsx">Home</Link>
//               <Link to="./191045.jsx">About</Link>
//            </ul>
//         </div> */}
        
              // <div className="navbar">
              // <div className="navbar-heart">
              // <img src={pokeLogo} 
              // alt="pokemon-logo"
              // className="navbar-image"
              // />
              // </div>
              
//                 {/* <button className="Persona" >YO</button>
//                 <button className="Home">HOME</button>
//                 <button className="POLE">POLE</button> */}
//               &#10084;&#65039; {favoritePokemons.length}
//               </div>
//           </nav>
//           </div>  
//         </>
//     )
// }



// export default Navbar

import React, { useState, useEffect } from 'react'
// import React from "react";
import FavoriteContext from "../contexts/global/favorite.context";
// import '/navbar.css'
import '../styles/navbar.css'

// import "../styles/navbar.css";
// import { Link } from "react-router-dom";
// import '../styles/navbar.css'

// import React, { useState, useEffect } from 'react'
// import { BrowserRouter, NavLink } from 'react-router-dom';
import { Link, Outlet } from "react-router-dom"; 




function App () {

  const { useContext } = React;
    const {favoritePokemons} = useContext(FavoriteContext);

    
    const pokeLogo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    
    return (
      <div >
      <div className='nav'>
      
        <nav style={{ paddingBottom: "1rem" }}>
           {/* <Link to="/Searchbar"><h1 className='navbar'>Buscar Pokemons</h1></Link>
          <Link to="/Pokedex"><h1 className='navbar'>Pokedex</h1></Link> */}
            <h1>Pokedex</h1>
            <img src={pokeLogo} 
              alt="pokemon-logo"
              className="navbar-image"
              />
          <Link to="/191045"><h1 className='nav'>Student</h1></Link>
          &#10084;&#65039; {favoritePokemons.length}
        </nav>
      </div>
      <Outlet />
    </div>
    )
}
export default App;
