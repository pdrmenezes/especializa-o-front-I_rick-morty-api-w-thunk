import { useDispatch, useSelector } from "react-redux";
import {
  favoritesSelector,
  toggleFavorite,
} from "../../state/rickAndMorty/favoritesSlice";
import star from "../../assets/star.svg";
import starfilled from "../../assets/starfilled.svg";
import "./card-personagem.css";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento JSX
 */
const CardPersonagem = ({ character }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);
  const isFavorite = favorites
    .map((favorite) => favorite.id)
    .includes(character.id);

  return (
    <div className="card-personagem">
      <img src={character.image} alt={character.name} />
      <div className="card-personagem-body">
        <span>{character.name}</span>
        {isFavorite && (
          <img
            src={starfilled}
            onClick={() => dispatch(toggleFavorite(isFavorite, character))}
          />
        )}
        {!isFavorite && (
          <img
            src={star}
            onClick={() => dispatch(toggleFavorite(isFavorite, character))}
          />
        )}
      </div>
    </div>
  );
};

export default CardPersonagem;
