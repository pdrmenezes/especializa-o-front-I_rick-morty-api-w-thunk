import { useDispatch, useSelector } from "react-redux";
import GradePersonagens from "../components/personagens/grade-personagens.componente";
import {
  favoritesSelector,
  setFavorites,
} from "../state/rickAndMorty/favoritesSlice";

const PaginaFavoritos = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(favoritesSelector);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button className="danger" onClick={() => dispatch(setFavorites([]))}>
          Remover Todos
        </button>
      </div>
      {favorites.length < 1 && (
        <div>
          <h4 style={{ textAlign: "center" }}>
            A lista está vazia, adicione novos favoritos
          </h4>
        </div>
      )}
      {favorites.length > 0 && <GradePersonagens element={favorites} />}
    </div>
  );
};

export default PaginaFavoritos;
