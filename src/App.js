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

	// useHeader = () => {
	//   if(path === '/') {
	//     return alert('not it')
	//   } else {
	//     return <Header />
	//   }
	// }

	render() {
		return (
			<Router>
				{/* Condition Render all but home */}
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />

					<Route
						path='/catindex'
						render={(props) => <CatIndex cats={this.state.cats}/>}
						/>

					<Route
					path='/catshow/:id'
					render={(props) => {
						const id = props.match.params.id
						let cat = this.state.cats.find((cat)=> cat.id === parseInt(id))
						return <CatShow cat={cat}/>
					}}
					/>

					<Route path='/catnew' component={CatNew} />
					<Route path='/catedit' component={CatEdit} />
					<Route component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		)
	}
}
export default App
