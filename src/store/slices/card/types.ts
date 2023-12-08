import { ICard } from '../../../@types/ICard'

export type ParamsType = {
	limit: number
	page: number
	category?: number
	sortBy?: string
	order?: string
}

export interface CardsTypes {
	items: ICard[]
	status: '' | 'err' | 'loading'
}
