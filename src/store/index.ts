import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from './slices/card/slice'
import cartSlice from './slices/cart/slice'
import filterSlice from './slices/filterSlice'

const store = configureStore({
	reducer: {
		cardsSlice,
		filterSlice,
		cartSlice,
	},
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
