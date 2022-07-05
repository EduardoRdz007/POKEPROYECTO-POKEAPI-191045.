import "../styles/pokedex.css";
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {

    const { pokemons, page, setPage, total, loading } = props;

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
        <>
        <div>
            <div className="header">
                <h1>Pokedex</h1>
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
    )
}

export default Pokedex
