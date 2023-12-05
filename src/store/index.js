import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from './slices/cardsSlice'
import cartSlice from './slices/cartSlice'
import filterSlice from './slices/filterSlice'

const store = configureStore({
	reducer: {
		cardsSlice,
		filterSlice,
		cartSlice,
	},
})

export default store
