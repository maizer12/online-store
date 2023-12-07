import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

type SortTypes = {
	value: string
	type: string
	name: string
}

interface FilterTypes {
	category: number
	search: string
	sort: SortTypes
}

const initialState: FilterTypes = {
	category: 0,
	search: '',
	sort: { value: '', type: '', name: 'По умолчанию' },
}

export const filterSlice = createSlice({
	name: 'filterSlice',
	initialState,
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
		setSearch(state, actions: PayloadAction<string>) {
			state.search = actions.payload
		},
	},
})

export const sortSelector = (state: RootState) => state.filterSlice.sort
export const categorySelector = (state: RootState) => state.filterSlice.category

export const { setCategories, setSort, setFilterParams, setSearch } = filterSlice.actions
export default filterSlice.reducer
