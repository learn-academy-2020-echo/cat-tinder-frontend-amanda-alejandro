import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import bgImage from '../assets/cat1.jpg'

class Home extends Component {
	render() {
		return (
			<Jumbotron
				className='jumbo-img'
				style={{
					backgroundImage: `url(${bgImage})`,
				}}
			>
				<div className='text'>
					<h1>Welcome to Cat Tinder</h1>
					<p>It's like Tinder but for cats!</p>
				</div>
			</Jumbotron>
		)
	}
}

export default Home
