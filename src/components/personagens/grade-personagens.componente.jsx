import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({ element }) => {
  return (
    <div className="grade-personagens">
      {element.length < 1 && <h3>A lista está vazia</h3>}
      {element.map((element) => (
        <CardPersonagem key={element.id} character={element} />
      ))}
    </div>
  );
};

export default GradePersonagem;
