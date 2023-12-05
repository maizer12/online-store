import { createContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'

export const SearchContext = createContext()

function App() {
	const [search, setSearch] = useState('')

	return (
		<SearchContext.Provider value={{ search, setSearch }}>
			<div className='wrapper'>
				<Header search={search} setSearch={setSearch} />
				<Routes>
					<Route path='/' element={<Home search={search} />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</SearchContext.Provider>
	)
}

export default App
