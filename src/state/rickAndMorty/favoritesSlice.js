import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favoritesList: [],
  },
  reducers: {
    setFavorites(state, action) {
      state.favoritesList = action.payload
    },
    addFavorite(state, action) {
      state.favoritesList.push(action.payload)
    },
    removeFavorite(state, action) {
      state.favoritesList = state.favoritesList.filter((favorite) => favorite.id !== action.payload)
    }
  }
})

export const toggleFavorite = (isFavorite, character) => (dispatch) => {
  try {
    if (!isFavorite) {
      dispatch(addFavorite(character))
    } else {
      dispatch(removeFavorite(character.id))
    }
  } catch (error) {
    console.error(error.message)
  }
}

export const favoritesSelector = (state) => state.favorites.favoritesList
export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
