import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCards = createAsyncThunk('cards/fetchCards', async params => {
	const res = await axios.get('https://656b577fdac3630cf728032b.mockapi.io/items', { params })
	return res.data
})

const cardsSlice = createSlice({
	name: 'cardsSlice',
	initialState: {
		items: [],
		status: '',
	},
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
