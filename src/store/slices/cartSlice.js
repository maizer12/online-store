import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cartSlice',
	initialState: {
		items: [],
		totalPrice: 0,
		count: 0,
	},
	reducers: {
		addItem(state, actions) {
			const ell = state.items.find(e => e.id == actions.payload.id)
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
		minusCount(state, actions) {
			const ell = state.items.find(e => e.id == actions.payload)
			if (ell.count >= 2) {
				ell.count--
				state.totalPrice = state.items.reduce((sum, e) => {
					return sum + e.price * e.count
				}, 0)
				state.count--
			}
		},
		removeItem(state, actions) {
			state.items = state.items.filter(e => e.id != actions.payload)
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
	},
})

export const { addItem, minusCount, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer
