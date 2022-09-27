import { useDispatch, useSelector } from "react-redux";
import {
  fetchNextPage,
  idsListSelector,
  fetchPreviousPage,
} from "../../state/rickAndMorty/charactersSlice";
import "./paginacao.css";
import arrowleft from "../../assets/west.svg";
import arrowright from "../../assets/east.svg";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {
  const dispatch = useDispatch();
  const idsList = useSelector(idsListSelector);

  return (
    <div className="paginacao">
      {idsList[0] <= 1 && <img src={arrowleft} id="disabled" />}
      {idsList[0] > 1 && (
        <img
          src={arrowleft}
          id="active"
          onClick={() => dispatch(fetchPreviousPage(idsList))}
        />
      )}
      <img
        src={arrowright}
        id="active"
        onClick={() => dispatch(fetchNextPage(idsList))}
      />
    </div>
  );
};

export default Paginacao;
