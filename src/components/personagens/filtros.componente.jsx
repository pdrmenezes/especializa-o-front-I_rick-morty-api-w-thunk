import { useState } from "react";
import "./filtros.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNineCharacters,
  findCharacters,
  idsListSelector,
} from "../../state/rickAndMorty/charactersSlice";

const Filtros = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");
  const idsList = useSelector(idsListSelector);

  return (
    <div className="filtros">
      <div className="filtro">
        <label>Escolha um Filtro:</label>
        <div className="filter-box">
          <select
            onChange={(e) => setFilter(e.target.value.toLocaleLowerCase())}
          >
            <option value={""}>Filtrar por:</option>
            <option value={"name"}>Filtrar por Nome do Personagem</option>
            <option value={"status"}>
              Filtrar por Status (alive, dead or unknown)
            </option>
            <option value={"species"}>
              Filtrar por Espécie (human, animal, alien, mythological creature)
            </option>
            <option value={"type"}>
              Filtrar por Tipo (dog, human with giant head, bird-person,
              korblock)
            </option>
            <option value={"gender"}>Filtrar por Gênero (female, male)</option>
          </select>
        </div>
      </div>
      <div className="filtro">
        <label htmlFor="search">Insira sua Busca:</label>
        <div className="filter-box">
          <input
            type="search"
            placeholder={"Morty, Alien, Dog, Female, etc."}
            name="search"
            autoComplete="false"
            onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
            id="searchbox"
          />
        </div>
      </div>
      <button
        className="primary"
        id="search-button"
        onClick={() => dispatch(findCharacters(filter, query))}
      >
        Buscar
      </button>
      <button
        className="primary"
        id="clear-button"
        onClick={() => dispatch(fetchNineCharacters(idsList))}
      >
        Resetar
      </button>
    </div>
  );
};
export default Filtros;
