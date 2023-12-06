import './assets/scss/app.scss'
import '@fortawesome/fontawesome-svg-core'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const rootElement: HTMLElement | null = document.getElementById('root')

if (rootElement) {
	const root = ReactDOM.createRoot(rootElement)

	root.render(
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	)
}
