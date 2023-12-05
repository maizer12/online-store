import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
	name: 'filterSlice',
	initialState: {
		category: 0,
		sort: { value: '', type: '', name: 'По умолчанию' },
	},
	reducers: {
		setCategories(state, actions) {
			state.category = actions.payload
		},
		setSort(state, actions) {
			state.sort = actions.payload
		},
		setFilterParams(state, actions) {
			const params = actions.payload
			if (params.category) state.category = Number(params.category)
			if (params.sort) state.sort = params.sort
		},
	},
})

export const sortSelector = state => state.filterSlice.sort
export const categorySelector = state => state.filterSlice.category

export const { setCategories, setSort, setFilterParams } = filterSlice.actions
export default filterSlice.reducer
