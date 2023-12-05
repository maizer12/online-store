import './Search.scss'
import debounce from 'lodash.debounce'
import { SearchContext } from '../../App'
import { useCallback, useContext, useState } from 'react'

function Search() {
	const { setSearch } = useContext(SearchContext)
	const [value, setValue] = useState('')

	const clearInput = () => {
		setSearch('')
		setValue('')
	}
	const startSearch = useCallback(
		debounce(value => {
			setSearch(value)
		}, 250),
		[]
	)

	const changeValue = str => {
		setValue(str)
		startSearch(value)
	}

	return (
		<label className='search'>
			<input type='text' className='search__input' placeholder='Enter text' onChange={e => changeValue(e.target.value)} value={value} />
			{value && <img className='search__clear' src='./img/clear-btn.svg' onClick={clearInput} />}
			<button className='search__btn'>
				<svg fill='#000000' height='18px' width='18px' viewBox='0 0 488.4 488.4'>
					<g id='SVGRepo_bgCarrier' strokeWidth='10'></g>
					<g id='SVGRepo_tracerCarrier' strokeWidth='round' strokeLinejoin='round'></g>
					<g id='SVGRepo_iconCarrier'>
						<g>
							<g>
								<path d='M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z'></path>
							</g>
						</g>
					</g>
				</svg>
			</button>
		</label>
	)
}

export default Search
