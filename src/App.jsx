import { useEffect, useState, useTransition } from "react";
import { getPokemonData, getPokemons, searchPokemon } from "./api";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { FavoriteProvider } from "./contexts/favoritesContext";
import "./app.css";
import { useTranslation } from "react-i18next";

const localStorageKey = "favorite_pokemon";

function App() {

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [searching, setSearching] =useState(false);
    const {i18n, t} = useTranslation();

    function changeLaguage(language){
      i18n.changeLanguage(language);
    }

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

    // carga pokes favoritos
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
      <div className="App">
      <h1>{t("title")}</h1>
      <h2>{t("subtitle")}</h2>
      <div className="link-container">
        <p
          className={`App-link ${
            i18n.language === "es" ? "selected" : "unselected"
          }`}
          onClick={() => changeLaguage("es")}
        >
          🇲🇽
        </p>
        <p
          className={`App-link ${
            i18n.language === "en" ? "selected" : "unselected"
          }`}
          onClick={() => changeLaguage("en")}
        >
          🇺🇸
        </p>
      </div>
      <FavoriteProvider value={{favoritePokemons: favorites, updateFavoritePokemons: updateFavoritePokemons}}>  
        <div>
            <Navbar />
            <div className="App">
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
      </div>
    );
}

export default App;
