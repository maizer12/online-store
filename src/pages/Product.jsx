import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
	const params = useParams()
	const [item, setItem] = useState()

	useEffect(() => {
		const fetchItem = async () => {
			try {
				const { data } = await axios('https://656b577fdac3630cf728032b.mockapi.io/items?id=' + params.id)
				setItem(...data)
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
