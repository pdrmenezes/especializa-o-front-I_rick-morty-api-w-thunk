# CTD / especialização em front-end I - rick & morty api with redux thunk

Trabalho final da disciplina de especialização em front-end I

## Índice

- [Requisitos](#requisitos)
  - [Condições mínimas de aprovação](#condições-mínimas-de-aprovação)
- [Funcionalidades](#funcionalidades)
  - [Funcionalidades obrigatorias](#funcionalidades-obrigatorias)
  - [Funcionalidade extra](#funcionalidades-extras)
- [Desenvolvimento](#desenvolvimento)
  - [Iniciando o App](#iniciando-o-app)
  - [Dependencias](#dependencias)
  - [Dependencias de Desenvolvimento](#dependencias-de-desenvolvimento)
- [Entrega](#entrega)
  - [Data de Entrega](#data-de-entrega)
  - [Formato de Entrega](#formato-de-entrega)

### Condições mínimas de aprovação

As seguintes condições são requisitos mínimos necessários para a aprovação final:

    * **Conformidade com todos os recursos obrigatórios**
    * Somente as bibliotecas detalhadas neste README podem ser usadas.
    * Qualquer funcionalidade implementada usando uma biblioteca diferente das permitidas não será considerada implementada.
    * Todas as informações do item devem vir da API [Rick and Morty] (https://rickandmortyapi.com/). Dados rígidos (codificados) não são suportados no frontend. Para isso, deve-se implementar a lógica para lidar com a solicitação à referida API.
     * Deve ser desenvolvido usando **Redux** em conjunto com **Thunk** ou **Saga**. A possibilidade de escolher entre um dos dois é concedida. Espera-se pelo menos o uso correto de um reducer, além do uso de uma ThunkAction (Thunk) ou função de gerador (Saga)
     * Pelo menos 7 funções devem ser devidamente documentadas (podem ou não ser componentes do React)

## Funcionalidades

### Funcionalidades obrigatorias

As seguintes funcionalidades são requisitos mínimos necessários para a aprovação da final e é fundamental que funcionem corretamente.

- A aplicação deve ter duas páginas:

  1 - A página inicial que deve ter:

          * Painel de filtro:
            * Ele conterá uma entrada onde o usuário poderá inserir qualquer texto que desejar para fazer um filtro nos personagens.
            * Caso o usuário exclua o texto inserido, deverá ser exibido o estado inicial, ou seja, a pesquisa sem filtro.
            * Deve ser incluído um botão "Limpar filtros", que deve excluir o texto dentro da entrada e mostrar o estado inicial, ou seja, a pesquisa sem filtro.

          * Lista de personagens
            * Você deve mostrar os personagens, que serão representados por card com informações sobre cada um deles.
            * Sem filtros, 9 cards de personagens devem ser exibidos na tela por página.
            * Deve ser possível marcar e desmarcar cada personagem como favorito de seu card individual, devendo persistir esse estado no aplicativo.
            * Deve ser possível diferenciar se um personagem está marcado como favorito ou não.

  2 - A página de favoritos que deve cumprir os seguintes requisitos:

            * Todos os personagens marcados como favoritos devem constar na lista de favoritos na segunda página do aplicativo.
            * Se o usuário desmarcar um personagem como favorito, ele deve desaparecer da lista de favoritos.
            * Um personagem que foi desmarcado dos favoritos pode ser marcado novamente na tela inicial e deve aparecer na lista novamente.

### Funcionalidade extra

Os seguintes aspectos são extras ao requisito de aprovação mínima que serão levados em consideração para aumentar a nota final, desde que seu funcionamento esteja correto:

     * A página de favoritos:
       * Você pode ter um botão "Remover tudo", que deve desmarcar todos os personagens da lista de favoritos e não devem aparecer marcados como favoritos na página principal.

## Desenvolvimento

### Iniciando o App

Instalado as dependências

`yarn`

Podemos iniciar nossa aplicação com o comando

`yarn dev`

### Dependencias

- React 18
- Redux (incluindo @reduxjs/toolkit)
- Thunk
- Axios

**OBSERVAÇÃO: O uso do React Query e da Context API (React) não é permitido**

### Dependencias de Desenvolvimento

As seguintes dependências de desenvolvimento adicionais (devDependencies) podem ser usadas, mas elas _não_ modificarão a nota de forma positiva, nem são requisitos para aprovação. A possibilidade de usá-los é oferecida apenas para quem sabe o que está fazendo e se sente confortável com eles.

- Redux Devtools Extension
  - Esta ferramenta foi utilizada em aula, para visualizar o estado do Redux. Pode ser útil depurar e corrigir alguns problemas em nosso código.
- Prop-Types
  - Esta ferramenta foi utilizada em aula, para validar o tipo de propriedades em tempo de execução. Pode ser para evitar alguns problemas com nosso código.
    -ESLint
  - Esta ferramenta NÃO foi usada em aula, e será vista no Frontend V. Mas se você se sentir confortável em usá-la, a configuração eslint é permitida.
- Jest e Testing Library
  - É permitido o uso de Testes para verificar as funcionalidades. O teste é um tópico do Frontend V, mas abre a possibilidade de entregar o código final com casos de teste.

## Entrega

### Formato de Entrega

A entrega será aceita mediante o envio da URL de um repositório do Github.
