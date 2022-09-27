import { createSlice } from '@reduxjs/toolkit'
import api from '../../utils/axios'

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    charactersList: [],
    idsList: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  reducers: {
    setCharacters(state, action) {
      state.charactersList = action.payload
    },
    setPageIds(state, action) {
      state.idsList = action.payload
    }
  },
})

// ACTION CREATORS ->
// REDUX SEM MIDDLEWARE -> para alterar o estado | invocamos uma action creator | que retorna um objeto chamado "action" que contém "type" e "payload" | que são passados pro dispatch | que encaminha "action.type" e "action.payload" pro reducer | que gerencia a lógica, tem acesso e atualiza o estado
// REDUX COM MIDDLEWARE (THUNK) -> para alterar o estado | invocamos uma action creator | que retorna um objeto chamado "action" que contém "type" e "payload" (o "thunk" permite que uma "action creator" retorne uma "função" no lugar de um "action object") | que é passado pro dispatch | que encaminha pro middlware(thunk) que vai segurar a action até receber os dados solicitados da api | que só com os dados recebidos manda a ação pro reducer que tem acesso e atualiza o estado

// THUNK MIDDLEWARE
// retorna uma função que tem acesso ao dispatch e ao getState
// então quando fizermos dispatch do componente, vai para o middleware, que vai fazer a chamada pra a API e vai chamar manualmente uma action creator



export const fetchNineCharacters = (nineNumberArray) => async (dispatch) => {
  try {
    const { data } = await api.get(`character/${nineNumberArray}`)
    dispatch(setCharacters(data))
  } catch (error) {
    console.error(error.message)
  }
}

export const fetchNextPage = () => async (dispatch, getState) => {
  try {
    const currentIdsList = getState().characters.idsList
    const nextIdsList = currentIdsList.map(id => id = id + 9)

    dispatch(setPageIds(nextIdsList));
    dispatch(fetchNineCharacters(nextIdsList));

  } catch (error) {
    console.error(error.message);
  }
};

export const fetchPreviousPage = () => async (dispatch, getState) => {
  try {
    const currentIdsList = getState().characters.idsList
    const previousIdsList = currentIdsList.map(id => id = id - 9)

    dispatch(setPageIds(previousIdsList));
    dispatch(fetchNineCharacters(previousIdsList));

  } catch (error) {
    console.error(error.message);
  }
};

export const findCharacters = (filter, query) => async (dispatch, getState) => {
  try {
    const { data } = await api.get(`character/?${filter}=${query}`)
    dispatch(setCharacters(data.results))
  } catch (error) {
    console.error(error.message)
  }
}

export const charactersSelector = (state) => state.characters.charactersList
export const idsListSelector = (state) => state.characters.idsList
export const { setCharacters, setPageIds } = charactersSlice.actions
export default charactersSlice.reducer