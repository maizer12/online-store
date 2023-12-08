import { ParamsType } from './types'
import { ICard } from '../../../@types/ICard'
import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchCards = createAsyncThunk('cards/fetchCards', async (params: ParamsType) => {
	const res = await axios.get<ICard[]>('https://656b577fdac3630cf728032b.mockapi.io/items', { params })
	return res.data
})
