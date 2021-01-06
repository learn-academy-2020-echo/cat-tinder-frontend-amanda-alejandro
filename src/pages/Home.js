import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import bgImage from '../assets/cat1.jpg'

class Home extends Component {
	render() {
		return (
			<Jumbotron
				style={{
					backgroundImage: `url(${bgImage})`,
					backgroundSize: 'cover',
					height: '100vh',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'white',
				}}
			>
				<h1 style={{ color: 'white' }}>Welcome to Cat Tinder</h1>
				<p>
					This is a simple hero unit, a simple jumbotron-style component for
					calling extra attention to featured content or information.
				</p>
				<p>
					<Button variant='primary'>Login</Button>{' '}
					<Button variant='primary'>Sign Up</Button>
				</p>
			</Jumbotron>
		)
	}
}

export default Home
