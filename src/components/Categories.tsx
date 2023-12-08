import { useSelector, useDispatch } from 'react-redux'
import { categorySelector, setCategories } from '../store/slices/filterSlice'
import { useWhyDidYouUpdate } from 'ahooks'
import { memo } from 'react'

const items: string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories = memo(() => {
	const active = useSelector(categorySelector)
	const dispatch = useDispatch()

	return (
		<div className='categories'>
			<ul>
				{items.map((e, i) => (
					<li className={active === i ? 'active' : ''} key={e} onClick={() => dispatch(setCategories(i))}>
						{e}
					</li>
				))}
			</ul>
		</div>
	)
})

export default Categories
