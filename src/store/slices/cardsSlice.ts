import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ICard } from '../../@types/ICard'

type ParamsType = {
	limit: number
	page: number
	category?: number
	sortBy?: string
	order?: string
}

export const fetchCards = createAsyncThunk('cards/fetchCards', async (params: ParamsType) => {
	const res = await axios.get<ICard[]>('https://656b577fdac3630cf728032b.mockapi.io/items', { params })
	return res.data
})

interface CardsTypes {
	items: ICard[]
	status: '' | 'err' | 'loading'
}

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