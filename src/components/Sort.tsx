import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSort, sortSelector } from '../store/slices/filterSlice'
import { sortList } from '../_config'

type SelectItem = {
	value: string
	type: string
	name: string
}

const Sort = () => {
	const windowRef = useRef<HTMLDivElement>(null)
	const select = useSelector(sortSelector)
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false)
	useEffect(() => {
		const handleOutsideClick = (e: Event) => {
			if (!windowRef?.current?.contains(e.target as Node)) {
				setOpen(false)
			}
		}

		if (windowRef) {
			document.body.addEventListener('click', handleOutsideClick)
		}

		return () => {
			if (windowRef) {
				document.body.removeEventListener('click', handleOutsideClick)
			}
		}
	}, [windowRef, setOpen])

	function selectedItem(e: SelectItem) {
		dispatch(setSort(e))
		setOpen(false)
	}

	return (
		<div className='sort' ref={windowRef}>
			<div className='sort__label' onClick={() => setOpen(!open)}>
				<svg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path d='M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z' fill='#2C2C2C' />
				</svg>
				<b>Сортировка по:</b>
				<span>
					{select.name} {select.type ? `(${select.type})` : ''}
				</span>
			</div>
			{open && (
				<div className='sort__popup'>
					<ul>
						{sortList.map((e, i) => (
							<li className={select.value === e.value && select.type === e.type ? 'active' : ''} key={i} onClick={() => selectedItem(e)}>
								{e.name} {e.type ? `(${e.type})` : ''}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default Sort
