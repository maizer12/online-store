import { createSlice } from '@reduxjs/toolkit'
import { CardsTypes } from './types'
import { fetchCards } from './asyncActions'

const initialState: CardsTypes = {
	items: [],
	status: '',
}

const cardsSlice = createSlice({
	name: 'cardsSlice',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchCards.pending, state => {
			state.status = 'loading'
		})
		builder.addCase(fetchCards.fulfilled, (state, action) => {
			state.status = ''
			state.items = action.payload
		})
		builder.addCase(fetchCards.rejected, state => {
			state.status = 'err'
		})
	},
})

export const {} = cardsSlice.actions

export default cardsSlice.reducer
