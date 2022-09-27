import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filtros from "../components/personagens/filtros.componente";
import GradePersonagens from "../components/personagens/grade-personagens.componente";
import Paginacao from "../components/paginacao/paginacao.componente";
import {
  charactersSelector,
  idsListSelector,
  fetchNineCharacters,
} from "../state/rickAndMorty/charactersSlice";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {
  const dispatch = useDispatch();
  const characters = useSelector(charactersSelector);
  const idsList = useSelector(idsListSelector);

  useEffect(() => {
    dispatch(fetchNineCharacters(idsList));
  }, []);

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
      </div>
      <Filtros />
      <Paginacao />
      <GradePersonagens origin={"home"} element={characters} />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
