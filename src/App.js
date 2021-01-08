import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import CatEdit from './pages/CatEdit.js'
import CatIndex from './pages/CatIndex.js'
import CatNew from './pages/CatNew.js'
import CatShow from './pages/CatShow.js'
import NotFound from './pages/NotFound.js'

import cats from './mockCats.js'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cats: cats,
		}
	}

	createCat = (newCat) => {
		console.log(newCat)
	}

	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />

					{/* Static Route */}
					{/* <Route path='/catindex' component={CatIndex} /> */}
					{/* Dynamic Route */}
					<Route
						path='/catindex'
						render={(props) => <CatIndex cats={this.state.cats} />}
					/>

					{/* Static Route */}
					{/* <Route path='/catshow/:id' component={CatShow} /> */}
					{/* Dynamic Route */}
					<Route
						path='/catshow/:id'
						render={(props) => {
							const id = props.match.params.id
							let cat = this.state.cats.find((cat) => cat.id === parseInt(id))
							return <CatShow cat={cat} />
						}}
					/>

					{/* Static Route */}
					{/* <Route path='/catnew' component={CatNew} /> */}
					{/* Dynamic Route */}
					<Route
						path='/catnew'
						render={(props) => <CatNew createCat={this.createCat} />}
					/>

					{/* Static Route */}
					<Route path='/catedit' component={CatEdit} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		)
	}
}
export default App
