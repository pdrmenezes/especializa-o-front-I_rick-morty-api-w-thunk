import { configureStore } from '@reduxjs/toolkit'
import charactersReducer from './rickAndMorty/charactersSlice'
import favoritesReducer from './rickAndMorty/favoritesSlice'

export default configureStore({
  reducer: {
    characters: charactersReducer,
    favorites: favoritesReducer
  }
})