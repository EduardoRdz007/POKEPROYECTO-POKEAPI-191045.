import { useContext } from "react";
import FavoriteContext from "../contexts/global/favorite.context";
import "../styles/pokemon.css";
import { useTranslation } from "react-i18next";

const Pokemon = (props) => {

    const { pokemon } = props;
    const { t } = useTranslation();
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);


    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;

    //agrega pokemon a los favoritos
    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    }

    return (
            <div className="pokemon-card">
            <div className="pokemon-img-container">
               <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name} /> 
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>
                        #{pokemon.id}
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, idx) => {
                            return(
                                <div key={idx} className="pokemon-type-text">{type.type.name}</div>
                            );
                        })}
                    </div>
                    <button onClick={clickHeart}>
                        <div className="pokemon-favorite">{heart}</div>
                    </button>
                </div>
                <div className="pokemon-info">
                        <div className="pokemon-info-text">{t("Alt")} {pokemon.height}</div>
                        <div className="pokemon-info-text">{t("Anc")}  {pokemon.weight}</div>
                </div>
            </div>
        </div>
    )
}

export default Pokemon
