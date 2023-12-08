import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartTypes } from './type'
import { ICard } from '../../../@types/ICard'

const initialState: CartTypes = {
	items: [],
	totalPrice: 0,
	count: 0,
}

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState,
	reducers: {
		addItem(state, actions: PayloadAction<ICard>) {
			const ell = state.items.find(e => e.id === actions.payload.id)
			if (ell) {
				ell.count += 1
			} else {
				state.items.push({ ...actions.payload, count: 1 })
			}
			state.totalPrice = state.items.reduce((sum, e) => {
				return sum + e.price * e.count
			}, 0)
			state.count++
		},
		minusCount(state, actions: PayloadAction<number>) {
			const ell = state.items.find(e => e.id === actions.payload)
			if (ell && ell.count >= 2) {
				ell.count--
				state.totalPrice = state.items.reduce((sum, e) => {
					return sum + e.price * e.count
				}, 0)
				state.count--
			}
		},
		removeItem(state, actions: PayloadAction<number>) {
			state.items = state.items.filter(e => e.id !== actions.payload)
			state.totalPrice = state.items.reduce((sum, e) => {
				return sum + e.price * e.count
			}, 0)
			state.count = state.items.length
		},
		clearItems(state) {
			state.items = []
			state.count = 0
			state.totalPrice = 0
		},
		getItems(state, actions: PayloadAction<CartTypes>) {
			const { items, count, totalPrice } = actions.payload

			state.items = items
			state.count = count
			state.totalPrice = totalPrice
		},
	},
})

export const { addItem, minusCount, removeItem, clearItems, getItems } = cartSlice.actions

export default cartSlice.reducer
