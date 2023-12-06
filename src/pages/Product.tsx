import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type ICard = {
	imageUrl: string
	title: string
	price: number
}

const Product: FC = () => {
	const params = useParams()
	const [item, setItem] = useState<ICard>()

	useEffect(() => {
		const fetchItem = async () => {
			try {
				const res: { data: ICard[] } = await axios('https://656b577fdac3630cf728032b.mockapi.io/items?id=' + params.id)

				setItem(res.data[0])
			} catch {
				console.log('error')
			}
		}

		fetchItem()
	}, [])

	if (!item) return <h6>Loading...</h6>
	return (
		<div className='product'>
			<img src={item.imageUrl} alt='product' className='product__icon' />
			<h4>{item.title}</h4>
			<p>{item.price}$</p>
		</div>
	)
}

export default Product
