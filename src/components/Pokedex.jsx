import "../styles/pokedex.css";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";
import { useTranslation } from "react-i18next";



const Pokedex = (props) => {

    const { pokemons, page, setPage, total, loading } = props;
    const {i18n, t} = useTranslation();
    function changeLaguage(language){
        i18n.changeLanguage(language);
      }

    //retrocede una pagina
    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    }

    //adelanta una pagina
    const nextPage = () => {
        const nextPage = Math.min(page + 1, total - 1);
        setPage(nextPage);
    }

    //envia a pagina 1
    const firstPage = () => {
        const nextPage = Math.min(page + total, total - total);
        setPage(nextPage);
    }

    //envia a la ultima pagina
    const finalPage = () => {
        const nextPage = Math.max(total -1);
        setPage(nextPage);
    }
    

    return (
        <div className="App">
        <div className="link-container">
       <p
         className={`App-link ${
           i18n.language === "es" ? "selected" : "unselected"
         }`}
         onClick={() => changeLaguage("es")}
       >
        <button class="btnMx">🇲🇽</button> 
       </p>
       <p
         className={`App-link ${
           i18n.language === "en" ? "selected" : "unselected"
         }`}
         onClick={() => changeLaguage("en")}
       >
         <button class="btnUs">🇺🇸</button>
       </p>
     </div>
     <h1>{t("title")}</h1>
     <h2>{t("subtitle")}</h2>
        <>
        <div>
            <div className="header">
                
                <Pagination 
                   page={page + 1}
                   totalPages={total} 
                   onLeftClick={lastPage}
                   onRightClick={nextPage}
                   onFirstClick={firstPage}
                   onFinalClick={finalPage}
                />
            </div>   
            { loading ? (
            <div className="loading-text">Cargando Pokemons...</div> 
            ) : (
            <div className="pokedex-grid">
               {pokemons.map((pokemon, idx) => {
                   return(
                       <Pokemon pokemon={pokemon} key={pokemon.name}></Pokemon>
                   )
               })}
            </div>  
            )} 
        </div>  
        </>
        </div>
    )
    
}

export default Pokedex
