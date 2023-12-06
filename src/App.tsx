import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Cart from './pages/Cart'
import Product from './pages/Product'
import { FC } from 'react'

const App: FC = () => (
	<div className='wrapper'>
		<Header />
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/product/:id' element={<Product />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	</div>
)

export default App
