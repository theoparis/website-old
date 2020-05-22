import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.css'

import './index.css'
import { Helmet } from 'react-helmet'

import { Home } from './components/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import Footer from './components/Footer'
import { Projects } from './components/Projects/Projects'

ReactDOM.render(
	<BrowserRouter>
		<Helmet>
			<meta charSet="UTF-8" />
			<meta name="description" content="Theo's Website" />
			<meta name="keywords" content="Website, About Me, Blog" />
			<meta name="author" content="Theo Paris" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta property="og:title" content="Theo's Website" />
			<meta property="og:image" content="/assets/creepinson.png" />
			<meta
				property="og:description"
				content="Theo's website and blog made with EJS, CSS, Typescript, and MongoDB from scratch."
			/>
			<meta property="og:url" content="https://theoparis.com/" />
			<title>Theo's Website</title>
		</Helmet>
		<Header />
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/about">
				<About />
			</Route>
			<Route exact path="/projects">
				<Projects />
			</Route>
		</Switch>
		<Footer />
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
