import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import qs from 'qs'
import Card from '../components/Card'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import CardSkeleton from '../components/CardSkeleton'
import Pagination from '../components/Pagination'
import { useNavigate } from 'react-router-dom'
import { setFilterParams } from '../store/slices/filterSlice'
import { sortList } from '../_config'
import { fetchCards } from '../store/slices/card/asyncActions'
import { useAppDispatch, useAppSelector } from '../hooks'

function Home() {
	const { items, status } = useAppSelector(state => state.cardsSlice)
	const { category, sort, search } = useAppSelector(state => state.filterSlice)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const loaderItems = [...new Array(4)]
	const [page, setPage] = useState(1)

	const getParams = () => {
		const checkCategory = category ? { category } : ''
		const checkSearch: {} | '' = search ? { search } : ''
		const checkSort = sort.value ? { sortBy: sort.value, order: sort.type } : ''
		const params = {
			limit: 4,
			page,
			...checkSort,
			...checkCategory,
			...checkSearch,
		}
		return params
	}
	const fetchData = async () => {
		const params = getParams()
		dispatch(fetchCards(params))
	}

	useEffect(() => {
		const params = getParams()

		if (params.sortBy || params.category) {
			const path = qs.stringify(params, { skipNulls: true })
			navigate(`/?${path}`)
		}

		fetchData()
	}, [sort, category, search, page])

	useEffect(() => {
		const path = window.location.search.substring(1)
		const pars = qs.parse(path)
		const sortName = sortList.find(e => e.type === pars.order && e.value === pars.sortBy)
		const sort = sortName ? { value: pars.sortBy, type: pars.order, name: sortName.name } : ''
		const params = { category: pars.category, sort }
		dispatch(setFilterParams(params))
	}, [])

	const pizzas = items.map((e: any) => <Card {...e} key={e.id} />)
	const getItems = status === 'loading' ? loaderItems.map((_, i) => <CardSkeleton key={i} />) : pizzas

	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<Categories />
					<Sort />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>{getItems}</div>
			</div>
			<Pagination setPage={setPage} />
		</div>
	)
}

export default Home
