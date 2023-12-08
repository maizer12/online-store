import { ICard } from '../../../@types/ICard'

export interface CartTypes {
	items: ICard[]
	totalPrice: number
	count: number
}
