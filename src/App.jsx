import { useEffect, useState, useTransition } from "react";
import React from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { FavoriteProvider } from "./contexts/global/favorite.context";
import "./app.css";
// import About from "./components/191045";
// import Home from "./components/Pokedex"
// import "./styles/navbar.css"
// import Shop from "./Shop";
// import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './components/191045';
import About from './components/191045';
import Home from './components/Pokedex';

// import React, { useState, useEffect } from 'react'
// import { BrowserRouter, NavLink } from 'react-router-dom';
// import './app.css';
// import { Link, Outlet } from "react-router-dom"; 


const localStorageKey = "favorite_pokemon";

function App() {

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [searching, setSearching] =useState(false);
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='./components/191045.jsx' component={About} />
    //   </Routes>
    // </Router>
  //   <Router>
  //   <div className="App">
  //     <Navbar />
  //     <Routes>
  //       <Route path='Home' exact component={Home} />
  //       <Route path='About' component={About} />
  //     </Routes>
  //   </div>
  // </Router>
    
    
    const fetchPokemons = async () => {
        try {
          setLoading(true);
          const data = await getPokemons(10, 10 * page);
          const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url)
          });
          const results = await Promise.all(promises) 
          setPokemons(results)
          setLoading(false)
          setTotal(Math.ceil(data.count / 25));
          setNotFound(false);
        } catch(err) {}
    };

    // carga pokes favoritos<<<<<<<<<s
    const loadFavoritePokemons = () => {
      const pokemons = JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
      setFavorites(pokemons);
    }
    
    useEffect(() => {
      loadFavoritePokemons();
    }, []);

    useEffect(() => {
      if (!searching) {
        fetchPokemons();
      }
    }, [page]);

    // actualiza favoritos
    const updateFavoritePokemons = (name) => {
      const updated = [...favorites];
      const isFavorite = updated.indexOf(name);
      if(isFavorite >= 0) {
        updated.splice(isFavorite, 1);
      } else {
        updated.push(name);
      }
      setFavorites(updated);
      window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
    };

    // barra de busqueda
    const onSearch = async (pokemon) => {
      if(!pokemon) {
        return fetchPokemons();
      }
      setLoading(true);
      setNotFound(false);
      setSearching(true);
      const result = await searchPokemon(pokemon);
      if(!result){
        setNotFound(true);
        setLoading(false);
        return;
        
      } else {
        setPokemons([result]);
        setPage(0);
        setTotal(1);
      }
      setLoading(false);    
      setSearching(false);
    };
    

    return (
      
     
      <FavoriteProvider value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons}}>  
        <div>
        {/* <div>
        <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/Home' exact component={Home} />
        <Route path='/About' component={About} />
      </Routes>
    </div>
  </Router>
  </div> */}
          
      
          
            <div className="App">
            <Navbar />
            
            
              
            <Searchbar onSearch={onSearch}/>
            
            {notFound ? (
              <div className="not-found">
                No se ha encontrado el Pokemon...
              </div>            
            ) : (
            <Pokedex 
              loading={loading}
              pokemons={pokemons} 
              page={page}
              setPage={setPage}
              total={total}
              
            />
            )}
            </div>
        </div>
     
        </FavoriteProvider>  
      //  </div>
    );
}

export default App;


// import React, { useState, useEffect } from 'react'
// import { BrowserRouter, NavLink } from 'react-router-dom';
// import './app.css';
// import { Link, Outlet } from "react-router-dom"; 

// function App() {

//   return(
//     <div >
//       <div className='App'>
//         <h1>Pokedex</h1>
//         <nav style={{ paddingBottom: "1rem" }}>
//           <Link to="./components/Pokedex.jsx"><h1 className='nav'>Pokemons</h1></Link>
//           <Link to="./components/Searchbar.jsx"><h1 className='nav'>Buscar Pokemon</h1></Link>
//           <Link to="./components/191045.jsx"><h1 className='nav'>Student</h1></Link>
//         </nav>
//       </div>
//       <Outlet />
//     </div>
//   )
// }
//     export default App;

// import React, { useState, useEffect } from 'react'
// import { BrowserRouter, NavLink } from 'react-router-dom';
// import './app.css';
// import { Link, Outlet } from "react-router-dom"; 

// function App() {

//   return(
//     <div >
//       <div className='navbar'>
//         <h1>Pokedex</h1>
//         <navbar style={{ paddingBottom: "1rem" }}>
//           <Link to="/Pokedex.jsx"><h1 className='navbar'>Pokemons</h1></Link>
//           <Link to="/Searchbar.jsx"><h1 className='navbar'>Buscar Pokemon</h1></Link>
//           <Link to="/191045.jsx"><h1 className='navbar'>Student</h1></Link>
//         </navbar>
//       </div>
//       <Outlet />
//     </div>
//   )
// }
//     export default App;


// import React from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import Notes from "./components/191045"

// const Home = () => <h1>Home</h1>
// // const Notes = () => <h1>Notes</h1>
// const User = () => <h1>User</h1>

// const inlineStyles ={
//   padding: 5
// }

// const App = () =>{
//   return(
//     <BrowserRouter>
//     <header>
//       <Link to ='/' style={inlineStyles}>
//         Home
//       </Link>
//       <Link to ='/notes' style={inlineStyles}>
//         Notes
//       </Link>
//       <Link to ='/user' style={inlineStyles}>
//         User
//       </Link>
//     </header>

//     <Routes>
//       <Route path='/notes'>
//         <Notes/>
//       </Route>
//       <Route path='/user'>
//         <User/>
//       </Route>
//       <Route path='/'>
//         <Home/>
//       </Route>
//     </Routes>

//     </BrowserRouter>
//   )
// }
// export default App