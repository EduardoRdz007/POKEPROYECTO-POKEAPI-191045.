import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { I18nextProvider } from "react-i18next";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import i18n from "./config/localization/i18n";
import Pokemons from './components/Searchbar';
import Pokemon from './components/Pokedex';
import Buscar from './components/Searchbar';
import Student from './components/191045';
const rootElement = document.getElementById("root");



ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <App /> } />
          {/* <Route path="/Searchbar" element = {<Buscar/>}>
            <Route path=":pokemon.id" element = { <Pokemon/> } />
          </Route> */}
          {/* <Route path="/Pokemon" element= { <Pokemon/> } >
            <Route path=':pokemon.id' element = { <Pokemon/> } />
          </Route>  */}
          <Route path="/191045" element = { <Student/> } />
          <Route path="*" element = {
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here</p>
            </main>
          }/>
       
      </Routes>    
    </BrowserRouter>
   
    </I18nextProvider>
  </React.StrictMode>,
  rootElement
);


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './app.css';
// import App from './App';
// // <import reportWebVitals from './reportWebVitals';>
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Pokemons from './components/Pokedex';
// import Pokemon from './components/Pokemon';
// import Buscar from './components/Searchbar';
// import Student from './components/191045.jsx';
// import { I18nextProvider } from 'react-i18next';
// import i18n from "./config/localization/i18n";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <I18nextProvider i18n={i18n}>
//       <App/>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element= { <App /> } >
//           <Route path="/pokemons" element = {<Pokemons/>}>
//             <Route path=":pokemonID" element = { <Pokemon/> } />
//           </Route>
//           {/* <Route path="/buscarPokemon" element= { <Buscar /> } >
//             <Route path=':pokemonID' element = { <Pokemon/> } />
//           </Route> */}
//           <Route path="/190904" element = { <Student/> } ></Route>
//           <Route path="*" element = {
//             <main style={{ padding: "1rem" }}>
//               <p>There's nothing here</p>
//             </main>
//           }/>
//         </Route>
//       </Routes>    
//     </BrowserRouter>
//     </I18nextProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
