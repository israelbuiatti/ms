import React from 'react'

import Footer from './components/footer'
import Header from './components/header'

import './css/custom.css';
import Rotas from './routes/rotas'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';


export default function App() {
	return (
		<div>
			<Header></Header>
			<Rotas></Rotas>
			<Footer></Footer>
		</div>
	)
}
